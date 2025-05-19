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
import { capitalizeText } from "@/utils/formatters/capitalizeText";
import { TransactionPill } from "@/components/layout/account/pill";
import AllSummariesListing from "@/components/pages/account/summary-listing";
import { useGetAllSummaries } from "@/utils/apiHooks/profile/useGetAllSummaries";
import { useGetAllSubscriptions } from "@/utils/apiHooks/profile/useSubscribedTopics";


export default function UserDashboard() {
    const { isLoading, data, error, getSummaries } = useGetAllSummaries();
    const { isLoading: allSubscriptionLoader, data: allSubscriptionData, error: allSubscriptionErrors, getSubscriptions } = useGetAllSubscriptions();

    const [allArticles, setAllArticles] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [allSubscriptions, setAllSubscriptions] = useState([]);

    const { user } = useContext(UserContext);

    const { showSnackBar } = useContext(GlobalActionContext);

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
    }, [error])
    useEffect(() => {
        if (allSubscriptionErrors) {
            showSnackBar({
                severity: "error",
                message: allSubscriptionErrors,
            });
        }
    }, [allSubscriptionErrors])

    useEffect(() => {
        if (data?.found) {
            setAllArticles(data?.articles?.results);
        }
    }, [data])
    useEffect(() => {
        if (allSubscriptionData?.found) {
            setAllSubscriptions(allSubscriptionData?.data?.topics);
        }
    }, [allSubscriptionData])

    useEffect(() => {
        getSummaries(currentPage);
    }, [currentPage])
    useEffect(() => {
        getSubscriptions();
    }, [])

    const handleNewsPaginationControl = (val: number) => {
        setCurrentPage(val);
    };

    return (
        <div>
            <AuthLayout>
                <>
                    <div className="">
                        <div className="flex flex-col h-64 justify-center rounded-3xl global-hero">
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 px-8">
                                <div>
                                    <h1 className="text-3xl mb-3 text-white font-bold leading-relaxed">Hello {capitalizeText(user?.first_name)},</h1>
                                    <p className="text-white">Welcome to your dashboard</p>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-7">
                            <TransactionPill data={{
                                title: "Tokens Remaining",
                                description: user?.token_count ? user?.token_count.toString() : ''
                            }} />
                            <TransactionPill data={{
                                title: "Summaries Remaining (Estimated)",
                                description: '300'
                            }} />
                            <TransactionPill data={{
                                title: "Topics You're Following",
                                description: String(allSubscriptions?.length)
                                // description: data.PendingTransaction && data.PendingTransaction.toString()
                            }} />
                        </div>
                        <div className="mt-12">
                            <h4 className="text-xl mb-5 font-medium">Today&apos;s News</h4>
                            <AllSummariesListing
                                data={allArticles}
                                paginationControl={handleNewsPaginationControl}
                                currPage={currentPage}
                            />
                        </div>
                    </div>
                </>
            </AuthLayout>
        </div>
    );
}