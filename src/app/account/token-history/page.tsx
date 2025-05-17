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



export default function TokenHistory() {

    const antIcon = (
        <LoadingOutlined style={{ fontSize: 30, color: "#4C117B" }} spin />
    );
    const { isLoading, data, error, getTokenHistory } = useGetTokenHistory();

    const { showSnackBar } = useContext(GlobalActionContext);
    const [currentDisplay, setCurrentDisplay] = useState<string>('personal');
    const [historyData, setHistoryData] = useState<any>([]);

    const handleCurrentDisplay = (e: string) => {
        setCurrentDisplay(e);
    }

    const dataSource = historyData.map((trans: any, index: number) => (
        {
            key: index,
            index: index + 1,
            date: DateTime.fromISO(trans?.created_at).toLocaleString(
                DateTime.DATE_HUGE
            ),
            amount: trans.amount,
            token_count: trans.token_count,
            desc: trans.desc,
            type: trans.type
        }
    ));

    const columns = [
        {
            title: '',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Token Count',
            dataIndex: 'token_count',
            key: 'token_count',
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
    ];

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
    }, [error])

    useEffect(() => {
        if (data?.length) {
            setHistoryData(data)
        }
    }, [data])

    useEffect(() => {
        getTokenHistory();
    },[])

    return (
        <div>
            <AuthLayout>
                <>
                    <div className="">
                        <h4 className="text-white uppercase font-medium text-2xl">
                            Token History
                        </h4>
                        <div className="mt-12">
                            {
                                isLoading ?
                                    <div className="w-full flex items-center justify-center">
                                        <Spin indicator={antIcon} />
                                    </div>
                                    :
                                    <Table dataSource={dataSource} columns={columns} />
                            }
                        </div>
                    </div>
                </>
            </AuthLayout>
        </div>
    );
}