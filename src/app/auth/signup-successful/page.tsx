'use client';

import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

import { useDispatch } from "react-redux";
import { login } from "@/utils/features/userslice";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import AppRoutes from "@/utils/routes";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo-box.svg";
import { Button } from "@/components/ui/button";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { signUpValidator } from "@/utils/validators";
import Spinner from "@/components/ui/spin";
import { useSignup } from "@/utils/apiHooks/auth/useSignup";
import { Router } from "lucide-react";


const SignUpPage = () => {


    const Route = useRouter();

    const [loader, setLoader] = useState<boolean>(false);
    const [pillarSubs, setPillarSubs] = useState<any>([]);
    const handleUserSelection = (e: string) => {
        setPillarSubs([...pillarSubs, e]);
    }
    const handlePageRedirect = () => {
        setLoader(true);
        setTimeout(() => {
            Route.push(AppRoutes.profile_dashboard);
        }, 2000)
    }

    return (
        <div className="auth-bg flex items-center justify-center">
            <div className="bg-white px-5 pt-8 pb-5 rounded-xl shadow-xl w-[35%]">
                <div className="text-center">
                    <Image src={Logo} alt="logo" quality={100} width={60} height={100} className="w-auto h-[4rem] mb-2 mx-auto" />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-1">Welcome to Wiredwits</h2>
                    <p className="text-[15px] leading-loose md:leading-loose w-[80%] mx-auto">
                        Please subscribe to any pillar. You can click more than one.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                        <div onClick={() => handleUserSelection('public')}
                            className="border-2 border-solid border-black cursor-pointer rounded-xl py-7 px-8 relative">
                            <h3 className="text-[15px]">Public Good</h3>
                            <div className="absolute size-5 border-2 border-solid border-black rounded-full top-2 left-2 flex items-center justify-center">
                                {
                                    pillarSubs.includes('public') && <div className="bg-black size-2 rounded-full"></div>}
                            </div>
                        </div>
                        <div onClick={() => handleUserSelection('private')}
                            className="border-2 border-solid border-black cursor-pointer rounded-xl py-7 px-8 relative">
                            <h3 className="text-[15px]">Public Good</h3>
                            <div className="absolute size-5 border-2 border-solid border-black rounded-full top-2 left-2 flex items-center justify-center">
                                {
                                    pillarSubs.includes('private') && <div className="bg-black size-2 rounded-full"></div>}
                            </div>
                        </div>

                        <div onClick={() => handleUserSelection('government')}
                            className="border-2 border-solid border-black cursor-pointer rounded-xl py-7 px-8 relative">
                            <h3 className="text-[15px]">Public Good</h3>
                            <div className="absolute size-5 border-2 border-solid border-black rounded-full top-2 left-2 flex items-center justify-center">
                                {
                                    pillarSubs.includes('government') && <div className="bg-black size-2 rounded-full"></div>}
                            </div>
                        </div>
                    </div>
                    <button onClick={handlePageRedirect} className="bg-primary text-white py-5 px-8 rounded-lg text-sm font-medium mt-12 w-full">{
                        loader ? <Spinner /> : 'Continue'
                    }</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;