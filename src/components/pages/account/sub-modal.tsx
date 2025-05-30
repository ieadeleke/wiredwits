'use client';
import { Button } from "@/components/ui/button";
import { Modal, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from "react";
import CardPayments from "./card-payment";
import { useGetSubPlans } from "@/utils/apiHooks/profile/useGetSubPlans";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { formatAmount } from "@/utils/formatters/formatAmount";

interface PaymentProps {
    open: boolean
    closeModal: () => void
}

const PaymentModal = (props: PaymentProps) => {

    const { showSnackBar } = useContext(GlobalActionContext);
    let antIcon = <LoadingOutlined spin style={{ fontSize: 40, color: '#9747FF' }} />

    const { data, error, getSubPlans, isLoading } = useGetSubPlans();

    const [activeSelection, setActiveSelection] = useState<number>(100);
    const [selectedOption, setSelectedOption] = useState<any>({});
    const [loadData, setLoadData] = useState<boolean>(false);
    const [subPlans, setSubPlans] = useState<any>([]);
    const [activeView, setActiveView] = useState<string>('plans');


    useEffect(() => {
        setLoadData(true);
        if (data) {
            // console.log(data)
            setSubPlans(data?.plans)
        }
    }, [data])

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: 'error',
                message: error
            })
            setLoadData(false);
        }
    }, [error])

    useEffect(() => {
        setLoadData(isLoading);
    }, [isLoading])

    useEffect(() => {
        getSubPlans();
    }, [])

    const handleDisplayPaymentFields = () => {
        if (!selectedOption._id) {
            showSnackBar({
                severity: 'error',
                message: 'Please select a subscription plan'
            })
        } else {
            setActiveView('card');
        }
    }

    return (
        <div>
            <Modal open={props.open} onCancel={props.closeModal} footer={null}>
                <div className="">
                    <div className="text-center mb-7">
                        <h3 className="text-xl font-bold">Add New Subscription</h3>
                    </div>
                    {
                        activeView === 'plans' ?
                            loadData ?
                                <div className="w-full h-[25rem] flex items-center justify-center">
                                    <Spin indicator={antIcon} />
                                </div>
                                :
                                <div className="flex-col gap-5 flex mb-">

                                    {
                                        subPlans.length ?
                                            subPlans.map((plan: any, index: number) => (
                                                <div key={index} className="cursor-pointer border border-solid border-black rounded-xl flex items-center justify-between py-5 px-5" onClick={() => {
                                                    setSelectedOption(plan);
                                                    setActiveSelection(index)
                                                }}>
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className="border-2 border-solid border-black cursor-pointer rounded-full size-5 relative flex items-center justify-center">
                                                            {activeSelection === index && <div className="size-3 bg-black rounded-full"></div>}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-base mb-1 font-medium">{plan.name}</h4>
                                                            <p className="text-sm font-jakarta">${plan.price}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-base font-medium">{formatAmount(plan.token_count)} tokens</h4>
                                                    </div>
                                                </div>
                                            )) : ''}
                                    <Button onClick={handleDisplayPaymentFields} className="w-full py-8 rounded-xl mb-">Continue</Button>
                                </div>
                            :
                            <CardPayments subOption={selectedOption} />
                    }
                    {/* <Button className="w-full py-4 rounded-xl bg-transparent text-[#ff0000]">Cancel</Button> */}
                </div>
            </Modal >
        </div >
    )
}

export default PaymentModal;