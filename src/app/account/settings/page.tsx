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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import UserContext from "@/context/UserContext";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import PersonalSettings from "@/components/pages/account/settings/personal";
import PasswordSettings from "@/components/pages/account/settings/password";
import TokenHistory from "@/components/pages/account/settings/history";
import { LoadingOutlined } from "@ant-design/icons";
import { BASE_URL } from "@/utils/constants";
import { Spin, Upload } from "antd";
import AuthToken from "@/utils/AuthToken";
import SubscribedTopics from "@/components/pages/account/settings/topics";



export default function Settings() {


    const pageAntIcon = (
        <LoadingOutlined style={{ fontSize: 24, color: "#4C117B" }} spin />
    );
    const [currentDisplay, setCurrentDisplay] = useState<string>('personal');
    const [loadingData, setLoadingData] = useState(false);

    const handleCurrentDisplay = (e: string) => {
        setCurrentDisplay(e);
    }

    const { showSnackBar } = useContext(GlobalActionContext);
    const { updateUser, user } = useContext(UserContext);
    const token = AuthToken().retrieveToken()

    // const [selectedImage, setSelectedImage] = useState<FileUploadParams | null>(
    //     null
    // );
    const props = {
        name: "file",
        // beforeUpload: () => false,
        action: `${BASE_URL}/user/upload/profile-pic`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        onChange: async (info: any) => {
            setLoadingData(true);
            if (info.file.status !== "uploading") {
            }
            if (info.file.status === "done") {
                if (info?.file?.response?.success) {
                    // await dispatch(
                    //     update({
                    //         logged_in: true,
                    //         userData: ,
                    //     })
                    // );
                    updateUser(info?.file?.response?.data);
                    showSnackBar({
                        severity: "success",
                        message: "Profile picture updated successfully"
                    });
                    setLoadingData(false);
                } else {
                    showSnackBar({
                        severity: "error",
                        message: info?.file?.response?.message
                    });
                    setLoadingData(false);
                }
            } else if (info.file.status === "error") {
                showSnackBar({
                    severity: "error",
                    message: "An error occurred while uploading profile picture. Please try again."
                });
                setLoadingData(false);
            }
        }
    };

    return (
        <div>
            <AuthLayout>
                <Spin spinning={loadingData} indicator={pageAntIcon}>
                    <>
                        <div className="">
                            <div className="flex flex-col bg-primary h-32 rounded-tl-lg rounded-tr-lg"></div>
                            <div className="flex gap-5 items-center px-10 -mt-12">
                                <div className="relative">
                                    {user?.profile_picture ? (
                                        <img
                                            src={user?.profile_picture}
                                            alt="profile" className="size-32 rounded-full object-center object-cover"
                                        />
                                    ) : (
                                        <div className="size-32 rounded-full bg-[#EBEBEB] relative flex items-center justify-center">
                                            <h4 className="text-black uppercase font-medium text-2xl">
                                                {user?.first_name?.slice(0, 1)} {user?.last_name?.slice(0, 1)}
                                            </h4>
                                        </div>
                                    )}
                                    <Upload {...props} maxCount={1}>
                                        <div className="size-10 cursor-pointer rounded-full bg-black absolute bottom-8 -right-2 flex items-center justify-center">
                                            <PiCameraPlus className="text-white text-lg" />
                                        </div>
                                    </Upload>
                                </div>
                                <div>
                                    <h4 className="mb-2 font-[600] text-lg">{user?.first_name} {user?.last_name}</h4>
                                    <p className="text-sm">{user?.email_address}</p>
                                </div>
                            </div>

                            <div className="mt-12 px-10">
                                <ul className="flex items-center gap-10">
                                    <li onClick={() => handleCurrentDisplay('personal')} className={`current-view cursor-pointer text-sm font-medium ${currentDisplay === 'personal' ? 'bg-[#EEECFD] p-4 px-8 rounded-full text-primary' : ''}`}>Personal Settings</li>
                                    <li onClick={() => handleCurrentDisplay('password')}
                                        className={`current-view cursor-pointer text-sm font-medium ${currentDisplay === 'password' ? 'bg-[#EEECFD] p-4 px-8 rounded-full text-primary' : ''}`}>Password</li>
                                    <li onClick={() => handleCurrentDisplay('token')} className={`current-view cursor-pointer text-sm font-medium ${currentDisplay === 'token' ? 'bg-[#EEECFD] p-4 px-8 rounded-full text-primary' : ''}`}>Token History</li>
                                    <li onClick={() => handleCurrentDisplay('subscriptions')} className={`current-view cursor-pointer text-sm font-medium ${currentDisplay === 'subscriptions' ? 'bg-[#EEECFD] p-4 px-8 rounded-full text-primary' : ''}`}>Subscribed Topics</li>
                                </ul>
                            </div>
                            <div className="mt-10 px-10">
                                {
                                    currentDisplay === 'personal' ?
                                        <PersonalSettings />
                                        :
                                        currentDisplay === 'password' ?
                                            <PasswordSettings />
                                            :
                                            currentDisplay === 'token' ?
                                                <TokenHistory />
                                                :
                                                <SubscribedTopics />
                                }
                            </div>
                        </div>
                    </>
                </Spin>
            </AuthLayout>
        </div>
    );
}