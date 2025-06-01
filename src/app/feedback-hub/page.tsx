'use client';

import DisplayLayout from "@/components/layout/layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { GlobalActionContext } from "@/context/GlobalActionContext";
import { useFetchBlogs } from "@/utils/apiHooks/blogs/useFetchBlogs";
import { useFetchFeedback } from "@/utils/apiHooks/blogs/useFetchFeedback";
import { useSubmitFeedback } from "@/utils/apiHooks/blogs/useSubmitFeedback";
import { Spin } from "antd";
import Input from "antd/es/input/Input";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';



export default function FeedbackHub() {

    const { showSnackBar } = useContext(GlobalActionContext);
    let antIcon = <LoadingOutlined spin style={{ fontSize: 40, color: '#9747FF' }} />

    const { fetchFeedback, data, error, isLoading } = useFetchFeedback();
    const { submitFeedback, data: submitFeedbackData, error: submitFeedbackError } = useSubmitFeedback();

    const [loadingData, setLoadingData] = useState(false);
    const [allBlogs, setAllBlogs] = useState([]);
    const [optionBox, setOptionBox] = useState<any>({});
    const [inputBox, setInputBox] = useState<any>({});
    const [emailAddress, setEmailAddress] = useState<any>({});

    useEffect(() => {
        if (data?.found) {
            console.log(data)
            setAllBlogs(data.poll);
            setLoadingData(false);
        }
    }, [data])

    useEffect(() => {
        if (submitFeedbackData?.found) {
            showSnackBar({
                severity: "success",
                message: 'Feedback submitted successfully',
            });
            setLoadingData(false);
        }
    }, [submitFeedbackData])


    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
        setLoadingData(false);
    }, [error])

    useEffect(() => {
        if (submitFeedbackError) {
            showSnackBar({
                severity: "error",
                message: submitFeedbackError,
            });
        }
        setLoadingData(false);
    }, [submitFeedbackError])

    useEffect(() => {
        fetchFeedback();
        setLoadingData(true);
    }, [error])

    const updatePollAnswer = (e: any) => {
        setInputBox({
            ...inputBox,
            [e.target.name]: e.target.value
        })
    }

    const updatePollEmailAddress = (e: any) => {
        setEmailAddress({
            ...emailAddress,
            [e.target.name]: e.target.value
        })
    }

    const choosePollOption = (index: any, e: any) => {
        setOptionBox({
            ...optionBox,
            [`_${index + 1}`]: e.target.value
        })
    }

    const uploadPollAnswer = async (e: any, index: any) => {
        e.preventDefault();
        if (optionBox[`_${index + 1}`] || inputBox[`_${index + 1}`]) {
            if (emailAddress[`_${index + 1}`]) {
                let formData = {
                    email_address: emailAddress[`_${index + 1}`],
                    answer: optionBox[`_${index + 1}`],
                    poll: optionBox[`_${index + 1}`],
                    // poll: e._id,
                    other_answer: inputBox[`_${index + 1}`]
                };
                setLoadingData(true);
                submitFeedback(formData);
            } else {
                showSnackBar({
                    severity: "error",
                    message: 'Please enter email adrress',
                });
            }
        } else {
            showSnackBar({
                severity: "error",
                message: "Please provide an answer before submitting poll",
            });
        }
    }

    return (
        <div>
            <Spin spinning={loadingData} indicator={antIcon}>
                <DisplayLayout>
                    <>
                        <section className="hero-bg px-28 pt-44 pb-14">
                            <div className="w-[60%] items-center gap-20">
                                <div>
                                    <h1 className="text-6xl font-medium mb-6 leading-tight md:leading-tight w-[70%]">
                                        Let us know how to be better.
                                    </h1>
                                </div>
                            </div>
                        </section>
                        <section className="mt-20">
                            {
                                allBlogs.map((poll: any, index: any) => (
                                    <div key={index}>
                                        <div className={`bg-[#F5F3FF] md:flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-x-40 gap-y-20 px-28 py-20 gri grid-cols-2 gap-20 mb-20`}>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-medium mb-3">
                                                    {poll.poll_name}
                                                </h4>
                                                <p className="text-base leading-loose mb-6">
                                                    {poll.poll_objective}
                                                </p>
                                                <img src={poll.img} alt={poll.poll_name} />
                                                {/* <div className="bg-[#000] h-[20rem] w-full rounded-xl"></div> */}
                                                <Image src={poll.img} quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt={poll.poll_name} />
                                            </div>
                                            <div className="flex-1 flex items-start gap-10">
                                                <div>
                                                    <div className="size-14 rounded-full flex items-center justify-center bg-[#9747FF]">
                                                        <h4 className="font-bold text-lg text-white">{String(index + 1).padStart(2, '0')}</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg mb-6 leading-[1.8]">
                                                        {poll.poll_objective}
                                                    </h4>
                                                    <form action="">
                                                        <div className="form-group mb-6">
                                                            <RadioGroup defaultValue="option-one" onChange={e => choosePollOption(index, e)} value={optionBox[`_${index + 1}`]}>
                                                                {
                                                                    poll.poll_options.map((option: any, index: number) => (
                                                                        <div key={index} className="flex items-center space-x-2 mb-3">
                                                                            <RadioGroupItem value={option._id} id="option-one" />
                                                                            <Label htmlFor="option-one" className="">{option.option}</Label>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </RadioGroup>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <Label className="mb-2">If other, kindly specify</Label>
                                                            <Input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[3.5rem] px-2 rounded-lg" name={`_${index + 1}`} onChange={updatePollAnswer}
                                                                value={inputBox[`_${index + 1}`]} />
                                                        </div>
                                                        <div className="form-group mb-6">
                                                            <Label className="mb-2">Email address</Label>
                                                            <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[3.5rem] px-2 rounded-lg" name={`_${index + 1}`}
                                                                onChange={updatePollEmailAddress} value={emailAddress[`_${index + 1}`]} />
                                                        </div>
                                                        <button type="button" onClick={() => uploadPollAnswer(poll, index)} className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </section>
                    </>
                </DisplayLayout>
            </Spin>
        </div>
    );
}