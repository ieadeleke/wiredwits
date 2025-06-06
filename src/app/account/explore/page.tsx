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
import { useState } from "react";



export default function Explore() {
    const [searchKey, setSearchKey] = useState<string>('');
    return (
        <div>
            <AuthLayout>
                <>
                    <div className="">
                        <div className="flex items-center gap-4 justify-between">
                            <h3 className="hidden md:block text-base text-2xl font-bold">
                                Explore Communities
                            </h3>
                            <h3 className="block md:hidden text-base w-[50%] md:w-full md:text-2xl font-bold">
                                Communities
                            </h3>
                            <Input className="py-6 md:py-6 md:w-[350px] text-sm" value={searchKey} placeholder="Search topic title" onChange={(e: any) => setSearchKey(e.target.value)} />
                        </div>
                        <div className="mt-10">
                            <CategoryListing search={searchKey} />
                        </div>
                    </div>
                </>
            </AuthLayout>
        </div>
    );
}