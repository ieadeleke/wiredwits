
'use client';

import { useContext, useEffect, useState } from "react";
import AppRoutes from "@/utils/routes";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Spinner from "@/components/ui/spin";
import { useRouter } from 'next/navigation';
import { useSignupPillarSelection } from "@/utils/apiHooks/auth/useSignupSuccess";
import { GlobalActionContext } from "@/context/GlobalActionContext";


const SignUpPage = () => {


    const Route = useRouter();
    const { signupPillarSelection, data, error, isLoading } = useSignupPillarSelection();

    const { showSnackBar } = useContext(GlobalActionContext);

    const [loader, setLoader] = useState<boolean>(false);
    const [pillarSubs, setPillarSubs] = useState<any>([]);
    const handleUserSelection = (e: string) => {
        if (pillarSubs.includes(e)) {
            const newCollection = pillarSubs.filter((item: string) => item !== e);
            setPillarSubs(newCollection);
        } else {
            setPillarSubs([...pillarSubs, e]);
        }
    }

    useEffect(() => {
        if (data?.found) {
            Route.push(AppRoutes.profile_dashboard);
        }
    }, [data])
    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
            setLoader(false);
        }
    }, [error])

    const handlePillarSection = () => {
        signupPillarSelection({
            pillars: pillarSubs.join('-')
        })
        setLoader(true);
    }

    return (
        <div className="auth-bg flex items-center justify-center">
            <div className="bg-white px-5 pt-8 pb-5 rounded-xl shadow-xl w-[35%]">
                <div className="text-center">
                    <Image src={Logo} alt="logo" quality={100} width={60} height={100} className="w-auto h-[4rem] mb-2 mx-auto" />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-1">Welcome to Wired Wits</h2>
                    <p className="text-[15px] leading-loose md:leading-loose w-[80%] mx-auto">
                        Almost there! Choose the topics that matter to you to get updates on tools, insights, and more.
                    </p>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                        <div onClick={() => handleUserSelection('Public Good')}
                            className="border-2 border-solid border-black cursor-pointer rounded-xl py-7 px-8 relative">
                            <h3 className="text-[14px]">Public Good</h3>
                            <div className="absolute size-5 border-2 border-solid border-black rounded-full top-2 left-2 flex items-center justify-center">
                                {
                                    pillarSubs.includes('Public Good') && <div className="bg-black size-2 rounded-full"></div>}
                            </div>
                        </div>
                        <div onClick={() => handleUserSelection('Business Empowerment')}
                            className="border-2 border-solid border-black cursor-pointer rounded-xl py-7 px-8 relative">
                            <h3 className="text-[14px]">Business Empowerment</h3>
                            <div className="absolute size-5 border-2 border-solid border-black rounded-full top-2 left-2 flex items-center justify-center">
                                {
                                    pillarSubs.includes('Business Empowerment') && <div className="bg-black size-2 rounded-full"></div>}
                            </div>
                        </div>

                        <div onClick={() => handleUserSelection('Everyday AI')}
                            className="border-2 border-solid border-black cursor-pointer rounded-xl py-7 px-8 relative">
                            <h3 className="text-[14px]">Everyday AI</h3>
                            <div className="absolute size-5 border-2 border-solid border-black rounded-full top-2 left-2 flex items-center justify-center">
                                {
                                    pillarSubs.includes('Everyday AI') && <div className="bg-black size-2 rounded-full"></div>}
                            </div>
                        </div>
                    </div>
                    <button onClick={handlePillarSection} className="bg-primary text-white py-5 px-8 rounded-lg text-sm font-medium mt-12 w-full">{
                        loader ? <Spinner /> : 'Continue'
                    }</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;