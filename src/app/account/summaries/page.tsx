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
import CategoryListing from "@/components/pages/account/category-listing";
import { useContext, useEffect, useState } from "react";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { useGetAllSummaries } from "@/utils/apiHooks/profile/useGetAllSummaries";
import AllSummariesListing from "@/components/pages/account/summary-listing";
import AppRoutes from "@/utils/routes";
import { useRef } from 'react';



export default function Communities() {
    const { isLoading, data, error, getSummaries } = useGetAllSummaries();

    const signUpValidator = yup.object().shape({
        email_address: yup.string().email('Email address is not valid').required('Email address field is required'),
        password: yup.string().min(6).required('Password field is required'),
    })
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(signUpValidator)
    });

    const scrollableRef = useRef<any>(null);

    const { showSnackBar } = useContext(GlobalActionContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [allArticles, setAllArticles] = useState<any>([]);

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
    }, [error])

    useEffect(() => {
        if (data?.found) {
            setAllArticles(data?.articles?.results);
        }
    }, [data])

    const scrollToTop = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollTo({
                top: 0,
                behavior: 'smooth' // For smooth scrolling animation
            });
        } else {
        }
    };

    useEffect(() => {
        getSummaries(currentPage);
    }, [currentPage])

    const handleNewsPaginationControl = (val: number) => {
        setCurrentPage(val);
        scrollToTop();
    };

    return (
        <div>
            <AuthLayout>
                <>
                    <div className="">
                        <div ref={scrollableRef} className="flex items-end justify-between">
                            <h3 className="text-2xl font-bold">
                                Today&apos;s Top Stories
                            </h3>
                            <Link href={AppRoutes.explore} className="block bg-primary py-4 px-12 rounded-lg text-sm text-white">Discover More Topics</Link>
                        </div>
                        <div className="mt-5">
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