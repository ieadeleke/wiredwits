'use client'

import React, { useState, useEffect, useContext } from "react";

import { Controller, useForm } from "react-hook-form";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { LoadingOutlined } from '@ant-design/icons';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useStripe, CardElement, Elements, CardExpiryElement, CardCvcElement, CardNumberElement, IdealBankElement, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { useInitiatePayment } from "@/utils/apiHooks/profile/useInitiatePayment";
import { useCancelPayment } from "@/utils/apiHooks/profile/useCancelPayment";
import { useCompletePayment } from "@/utils/apiHooks/profile/useCompletePayment";
import { useFinishPaymentProcess } from "@/utils/apiHooks/profile/useFinishPaymentProcess";
import { CreatePaymentMethodCardData } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spin";
import { Label } from "@/components/ui/label";

const CardDisplay = (props: any) => {


    const { data, error, initiateSubPayment, isLoading } = useInitiatePayment();
    const { data: cancelPaymentData, error: cancelPaymentError, cancelPaymentProcess, isLoading: cancelPaymentLoader } = useCancelPayment();
    const { data: completePaymentData, error: completePaymentError, completePaymentProcess, isLoading: completePaymentLoader } = useCompletePayment();
    const { data: finishPaymentData, error: finishPaymentError, finishPaymentProcess, isLoading: finishPaymentLoader } = useFinishPaymentProcess();

    const formValidation = yup.object().shape({
        cardName: yup.string().optional(),
        postal_code: yup.string().optional(),
        city: yup.string().optional(),
        line1: yup.string().optional()
    })
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(formValidation)
    });
    const { showSnackBar } = useContext(GlobalActionContext);


    // const Navigate = useRouter();

    const pageLoaderIcon = <LoadingOutlined style={{ fontSize: 25, color: "#fff" }} spin />
    const hugePageLoaderIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />

    const dispatch = useDispatch();

    const stripe = useStripe();
    const elements = useElements();

    const [otpModalDisplay, setOtpModalDisplay] = useState(false);
    const [pageLoader, setPageLoader] = useState(false);
    const [recordId, setRecordId] = useState<string>('');
    const [paymentMethodId, setPaymentMethodId] = useState<string>('');
    const [pageSpinner, setPageSpinner] = useState(false);
    const [userInfo, setUserInfo] = useState<any>({
        cardName: '',
        address: {
            line1: '',
            city: '',
            postal_code: ''
        }
    });
    const [cardNumberError, setCardNumberError] = useState({
        complete: false,
        message: ""
    });
    const [expiryDateError, setExpiryDateError] = useState({
        complete: false,
        message: ""
    });
    const [cVVError, setCVVError] = useState({
        complete: false,
        message: ""
    });

    useEffect(() => {
        if (completePaymentError) {
            showSnackBar({
                severity: "error",
                message: completePaymentError,
            });
        }
    }, [completePaymentError])
    useEffect(() => {
        if (finishPaymentError) {
            showSnackBar({
                severity: "error",
                message: finishPaymentError,
            });
        }
    }, [finishPaymentError])
    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
    }, [error])

    useEffect(() => {
        if (finishPaymentData) {
            showSnackBar({
                severity: "success",
                message: finishPaymentData?.message,
            });
            // dispatch(update_subscription(finishSubProcess.data.data.data.next_sub_expiry_date))
            // openNotificationWithIcon("success", finishSubProcess.data.message);
            // navigate user to new page
        }
    }, [finishPaymentData])

    const handlePaymentFinalStage = async (userClientSecret: any) => {
        const cardElement = elements?.getElement(CardNumberElement);
        if (!stripe || !elements || !cardElement) return;
        const { paymentIntent, error } = await stripe?.confirmCardPayment(userClientSecret, {
            payment_method: {
                // card: elements?.getElement(CardCvcElement),
                card: cardElement,
                billing_details: {
                    name: userInfo.cardName,
                },
            },
        })
        if (error?.message?.length) {
            // Handle error here
            let cancelSubProcess = cancelPaymentProcess({
                client_id: userClientSecret,
                paymentMethodId,
                sub_id: props.subData._id,
                record_id: recordId
            });
            showSnackBar({
                severity: "error",
                message: error?.message || 'An error occurred while completing payment. Please try again',
            });
            setPageLoader(false);
            setPageSpinner(false);
            return;
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            // Handle successful payment here
            let finishSubProcess = finishPaymentProcess({
                client_id: userClientSecret,
                paymentMethodId,
                sub_id: props.subData._id,
                record_id: recordId
            });

        } else {
            // handle pending payments here
            // Navigate(AppRoutes.trans_detail_status);
        }
    }

    useEffect(() => {
        if (completePaymentData) {
            let userClientSecret = completePaymentData.data;
            handlePaymentFinalStage(userClientSecret);
        }
    }, [completePaymentData])

    const handleUserPayment = async (recordId: string) => {
        const cardElement = elements?.getElement(CardNumberElement);
        if (!stripe || !elements || !cardElement) {
            // handle the case where Stripe.js has not loaded
            return;
        }
        const paymentMethodData: CreatePaymentMethodCardData = {
            type: 'card',
            card: cardElement,
            billing_details: {
                name: userInfo.cardName,
                address: {
                    line1: userInfo.address.houseAddress,
                    city: userInfo.address.city,
                    postal_code: userInfo.address.postal_code
                }
            }
        };

        const stripeResponse = await stripe?.createPaymentMethod(paymentMethodData);
        if (stripeResponse) {
            const { error: intentError, paymentMethod } = stripeResponse;
            if (intentError || !paymentMethod) {
                let cancelSubProcess = await cancelPaymentProcess({
                    client_id: "",
                    paymentMethodId: "",
                    sub_id: props.subData._id,
                    record_id: recordId
                });
                setPageLoader(false);
                setPageSpinner(false);
                // set loader to false
                showSnackBar({
                    severity: "error",
                    message: intentError.message || 'An error occurred while making payment',
                });
                return;
            }
            const paymentMethodId = paymentMethod?.id;
            setPaymentMethodId(paymentMethodId);
            let completeSub = await completePaymentProcess({
                record_id: recordId, sub_id: props.subData._id, paymentMethodId
            });
            return stripeResponse
        }
    }

    useEffect(() => {
        if (data?.found) {
            let recordId = data?.data?._id;
            setRecordId(recordId);
            handleUserPayment(recordId);
        }
    }, [data])

    const handleUserCardData = async (e: any) => {
        if ((userInfo?.cardName?.length) && (userInfo?.address?.line1?.length) && (userInfo?.address?.city?.length) && (userInfo?.address?.postal_code?.length >= 5)) {
            if ((cardNumberError.complete && !cardNumberError?.message?.length) &&
                (expiryDateError.complete && !expiryDateError?.message?.length) &&
                (cVVError.complete && !cVVError?.message?.length)) {
                setPageLoader(true);
                setPageSpinner(true);
                // initiate payment on our backend
                initiateSubPayment({
                    amount: props.subData.price,
                    sub_id: props.subData._id,
                    user_agent: navigator.userAgent
                });
                // let initiateSub = await _initiate_subscription_process(
                //     {
                //         amount: props.subData.price,
                //         sub_id: props.subData._id,
                //         user_agent: navigator.userAgent
                //     }
                // );
            } else {
                showSnackBar({
                    severity: "error",
                    message: 'Please enter valid card details',
                });
            }
        } else {
            showSnackBar({
                severity: "error",
                message: 'Please enter all card details',
            });
        }
    }

    const validateCardNumberForm = (e: any) => {
        let currStatus = {
            complete: e.complete,
            message: e?.error?.message
        }
        setCardNumberError(currStatus);
    }

    const validateExpiryDateForm = (e: any) => {
        let currStatus = {
            complete: e.complete,
            message: e?.error?.message
        }
        setExpiryDateError(currStatus);
    }

    const validateCVVForm = (e: any) => {
        let currStatus = {
            complete: e.complete,
            message: e?.error?.message
        }
        setCVVError(currStatus);
    }

    const handleUserFormNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            cardName: e.target.value
        })
    }
    const handleUserFormAddressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            address: {
                ...userInfo.address,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div>
            <Spin spinning={pageSpinner} indicator={hugePageLoaderIcon}>
                <form onSubmit={handleSubmit(handleUserCardData)} autoComplete="false">
                    <div className="mb-3">
                        <Label className="mb-1" htmlFor="cardName">Card name</Label>
                        <Controller control={control} name="cardName"
                            render={({ field }) => (
                                <Input onChange={handleUserFormNameInput} name="cardName" placeholder="Type here"
                                    className="py-6 font-jakarta text-[10px]" />
                            )} />
                        {/* {errors.cardName && <p className="form-error">{errors.cardName.message}</p>} */}
                    </div>
                    <div className="mb-3">
                        <Label className="mb-1" htmlFor="cardNumber">Card number</Label>
                        <div className="border-2 border-solid border-[#EBEBEB] rounded-md py-4 px-3 bg-white">
                            <CardNumberElement id="card-element" onChange={validateCardNumberForm} options={{
                                showIcon: true,
                                style: {
                                    base: {
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        fontFamily: "Plus Jakarta Sans, sans-serif",
                                        color: "#1A202C",
                                        "::placeholder": {
                                            color: "#A0AEC0"
                                        }
                                    },
                                    invalid: {
                                        color: "#E53E3E",
                                        iconColor: "#E53E3E"
                                    },
                                    complete: {
                                        color: "#38A169",
                                        iconColor: "#38A169"
                                    }
                                }
                            }} />
                        </div>
                        {/* {cardNumberError.message && <p className="form-error">{cardNumberError.message}</p>} */}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-3">
                            <Label className="mb-1" htmlFor="expiryDate">Expiry date</Label>
                            <div className="border-2 border-solid border-[#EBEBEB] rounded-md py-4 px-3 bg-white">
                                <CardExpiryElement id="card-element" onChange={validateExpiryDateForm} options={{
                                    style: {
                                        base: {
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            fontFamily: "Plus Jakarta Sans, sans-serif",
                                            color: "#1A202C",
                                            "::placeholder": {
                                                color: "#A0AEC0"
                                            }
                                        },
                                        invalid: {
                                            color: "#E53E3E",
                                            iconColor: "#E53E3E"
                                        },
                                        complete: {
                                            color: "#38A169",
                                            iconColor: "#38A169"
                                        }
                                    }
                                }} />
                            </div>
                            {/* {expiryDateError.message && <p className="form-error">{expiryDateError.message}</p>} */}
                        </div>
                        <div className="mb-3">
                            <Label className="mb-1" htmlFor="cvv">CVV</Label>
                            <div className="border-2 border-solid border-[#EBEBEB] rounded-md py-4 px-3 bg-white">
                                <CardCvcElement id="card-element" onChange={validateCVVForm} options={{
                                    style: {
                                        base: {
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            fontFamily: "Plus Jakarta Sans, sans-serif",
                                            color: "#1A202C",
                                            "::placeholder": {
                                                color: "#A0AEC0"
                                            }
                                        },
                                        invalid: {
                                            color: "#E53E3E",
                                            iconColor: "#E53E3E"
                                        },
                                        complete: {
                                            color: "#38A169",
                                            iconColor: "#38A169"
                                        }
                                    }
                                }
                                } />
                            </div>
                            {/* {cVVError.message && <p className="form-error">{cVVError.message}</p>} */}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-3">
                            <Label className="mb-1" htmlFor="city">City</Label>
                            <Controller control={control} name="city"
                                render={({ field }) => (
                                    <Input onChange={handleUserFormAddressInput} name="city" placeholder="Type here"
                                        className="py-6 font-jakarta text-[10px]" />
                                )} />
                            {/* {errors.city && <p className="form-error">{errors.city.message}</p>} */}
                        </div>
                        <div className="mb-3">
                            <Label className="mb-1" htmlFor="postal_code">Postal Code</Label>
                            <Controller control={control} name="postal_code"
                                render={({ field }) => (
                                    <Input onChange={handleUserFormAddressInput} name="postal_code" placeholder="Type here"
                                        className="py-6 font-jakarta text-[10px]" />
                                )} />
                            {/* {errors.postal_code && <p className="form-error">{errors.postal_code.message}</p>} */}
                        </div>
                    </div>
                    <div className="mb-5">
                        <Label className="mb-1" htmlFor="line1">House Address</Label>
                        <Controller control={control} name="line1"
                            render={({ field }) => (
                                <Input onChange={handleUserFormAddressInput} name="line1" placeholder="Type here"
                                    className="py-6 font-jakarta text-[10px]" />
                            )} />
                        {/* {errors.line1 && <p className="form-error">{errors.line1.message}</p>} */}
                    </div>
                    <div className="btn-cover">
                        {/* {
                            !pageLoader ? */}
                        <Button className="w-full py-8 rounded-xl bg-primary" disabled={pageLoader}>
                            {!pageLoader ? 'Continue' : <Spinner />}
                        </Button>
                        {/* // :
                                // <button disabled className="w-full py-8 rounded-xl bg-primary"><Spin indicator={pageLoaderIcon} /></button> */}
                        {/* // } */}
                    </div>
                </form>
                {/* <div>
                    <Link
                        style={{ width: "100%", display: "block", textAlign: "center", border: "none", paddingTop: 30 }}
                        className="btn btn-default form-route-link" to={AppRoutes.dashboard}>Skip</Link>
                </div> */}
            </Spin>
        </div>
    )
}

export default CardDisplay;