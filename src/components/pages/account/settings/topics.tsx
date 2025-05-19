'use client';

import DisplayLayout from "@/components/layout/layout";
// import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import GlobeImg from "@/assets/images/download.png";
import { GoArrowRight } from "react-icons/go";
import { PiCameraPlus } from "react-icons/pi";
import AuthLayout from "@/components/layout/account/layout";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/UserContext";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import PersonalSettings from "@/components/pages/account/settings/personal";
import PasswordSettings from "@/components/pages/account/settings/password";
import { useGetTokenHistory } from "@/utils/apiHooks/profile/useGetTokenHistory";
import { Spin, Table } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { DateTime } from "luxon";
import { useGetUserSubscriptions } from "@/utils/apiHooks/profile/useGetUserSubscriptions";
import Spinner from "@/components/ui/spin";
import { useRemoveUserSub } from "@/utils/apiHooks/profile/useRemoveSubscriptions";
import AppRoutes from "@/utils/routes";



export default function SubscribedTopics() {

    const antIcon = (
        <LoadingOutlined style={{ fontSize: 30, color: "#4C117B" }} spin />
    );
    const { isLoading, data, error, removeSubscriptions } = useRemoveUserSub();
    const { isLoading: subLoader, data: subData, error: subError, getUserSubscriptions } = useGetUserSubscriptions();

    const { showSnackBar } = useContext(GlobalActionContext);
    const [currentDisplay, setCurrentDisplay] = useState<string>('personal');
    const [selectedIndex, setSelectedIndex] = useState<any>([]);
    const [likedTopicArray, setLikedTopicArray] = useState<any>([]);
    const [loadIndex, setLoadIndex] = useState<any>(null);


    const handleCurrentDisplay = (e: string) => {
        setCurrentDisplay(e);
    }

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
    }, [error])

    useEffect(() => {
        if (subError) {
            showSnackBar({
                severity: "error",
                message: subError,
            });
        }
    }, [subError])

    useEffect(() => {
        if (data?.found) {
            setLoadIndex(null);
            let allData = likedTopicArray;
            allData.splice(selectedIndex, 1);
            setLikedTopicArray(allData);
            showSnackBar({
                severity: "success",
                message: 'You have unsubscribed from this topic!',
            });
        }
    }, [data])
    useEffect(() => {
        if (subData?.found) {
            setLikedTopicArray(subData?.topics?.topics);
        }
    }, [subData])

    useEffect(() => {
        getUserSubscriptions();
    }, [])

    const handleRemoveUserSubscriptions = (topic: any, index: number) => {
        removeSubscriptions({
            topic_id: topic.subtopicId
        })
        setSelectedIndex(index);
        setLoadIndex(`${topic.subtopicId}-${index}`);
    }

    return (
        <div>
            <>
                <div className="">
                    <div className="mt-">
                        {
                            subLoader ?
                                <div className="w-full flex items-center justify-center">
                                    <Spin indicator={antIcon} />
                                </div>
                                :
                                likedTopicArray.length ?
                                    <div className="grid grid-cols-3 gap-5">
                                        {
                                            likedTopicArray.map((subtopic: any, index: number) => (
                                                <div key={index} className="border-2 border-solid border-[#F3F5F7] rounded-2xl p-4">
                                                    <div className="flex gap-3 justify-between items-center mb-5">
                                                        <div className="flex gap-3 items-center">
                                                            <div className="size-14 rounded-full bg-[#E6E2E0] flex items-center justify-center">
                                                                <h3 className="text-lg font-medium">{subtopic?.name?.slice(0, 1)}</h3>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-sm font-medium">{subtopic?.name}</h4>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Button className="text-xs" onClick={() => {
                                                                handleRemoveUserSubscriptions(subtopic, index)
                                                            }}>
                                                                {loadIndex !== `${subtopic.subtopicId}-${index}` ?
                                                                    'Unsubscribe' : (
                                                                        <Spinner />
                                                                        // <Spin indicator={antIcon} />
                                                                    )}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs leading-loose opacity-70">
                                                        Indulge in handheld gaming and computing power with the Valve Steam Deck.
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div className="min-h-[35vh] md:min-h-[40vh] flex items-center justify-center">
                                        <div className="md:w-[60%] mx-auto">
                                            <div>
                                                <div className="size-32 mb-4 bg-[#E8DEFF] rounded-full mx-auto flex items-center justify-center">
                                                    <div className="size-12 bg-primary rounded-lg"></div>
                                                </div>
                                                <p className="text-lg md:w-[70%] mx-auto text-center leading-relaxed mb-4">You have not subscribed to any topic</p>
                                                <Link
                                                    href={AppRoutes.explore}
                                                    className="px-5 py-4 rounded-lg text-sm w-max block bg-primary text-white mx-auto"
                                                >
                                                    Click here to begin
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                        }
                    </div>
                </div>
            </>
        </div >
    );
}