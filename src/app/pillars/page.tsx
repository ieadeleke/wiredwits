'use client';

import DisplayLayout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { RiDoorOpenLine } from "react-icons/ri";
import PillarsLayout from "@/components/layout/PillarsLayout";
import BusinessImg from "@/assets/images/business.jpg";
import Everyday from "@/assets/images/everyday.jpg";
import Public from "@/assets/images/good.jpg";
import UserContext from "@/context/UserContext";



export default function ContactUs() {

    const { user } = useContext(UserContext);


    const [currView, setCurrView] = useState<string>('public-bias');
    const [currSecView, setCurrSecView] = useState<string>('business-idea');
    const [currThirdView, setCurrThirdView] = useState<string>('thrive-money');

    const handleCurrPageView = (e: string) => {
        setCurrView(e)
    }

    return (
        <div>
            <DisplayLayout>
                <>
                    <section className="hero-bg flex items-center justify-center text-center">
                        <div className="md:w-[90%] mx-auto gap-20 py-32 md:pt-36 pb-16">
                            <div className="px-5 md:px-0 md:w-[70%] mx-auto">
                                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                                    <h4 className="text-[#9747FF] font-medium text-xs md:text-sm">AI That Works for Everyone</h4>
                                </div>
                                <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 mx-auto leading-relaxed md:leading-tight">
                                    Three Pillars. One Mission: Protect the Ecosystem That Sustains Us.
                                </h1>
                                <p className="text-sm md:text-base text-[#111111b3] leading-loose md:leading-loose mb-7 md:w-[70%] mx-auto">
                                    We&apos;re driven by a simple mission: build tools that protect truth, expand access, and inspire action — so more people can shape a better future with confidence.
                                </p>
                                <div className="flex gap-4 mx-auto mb-10 w-max">
                                    {
                                        user?.first_name ?
                                            <Link href="/account/dashboard" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Account Dashboard</Link>
                                            :
                                            <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Get Started</Link>
                                    }
                                    <Link href="/contact-us" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-36 mt-20 md:mt-28">
                        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-8 md:gap-20 mb-24 md:mb-32">
                            <div>
                                <div className="">
                                    <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Public Good</p>
                                    <h3 className="text-xl md:text-4xl mb-2 md:mb-2 font-bold leading-snug md:leading-snug">
                                        Truth isn&apos;t optional
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="text-sm md:text-base mx-auto leading-loose md:leading-loose font-mediu opacity-80 mb-8 md:mb-14">
                                        In a world where spin, bias, and disinformation cloud everything from news to policy, Public Good tools are built to help you see clearly and think critically. Whether you&apos;re questioning a headline, trying to understand legislation, or holding leaders accountable, our tools empower you to engage with the world on your terms.
                                    </p>
                                    <Link href='/public-good' className="bg-primary px-6 py-4 rounded-lg text-sm text-white">Learn More</Link>
                                </div>
                            </div>
                            <div>
                                <Image src={Public} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-full rounded-lg object-fit object-cover" />
                                {/* <div className="bg-[#A789FE] w-full h-full rounded-lg"></div> */}
                            </div>
                        </div>
                        <div className="flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 mb-24 md:mb-32">
                            <div>
                                <Image src={BusinessImg} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-full rounded-lg object-fit object-cover" />
                                {/* <div className="bg-[#A789FE] w-full h-full rounded-lg"></div> */}
                            </div>
                            <div>
                                <div className="">
                                    <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Business Empowerment</p>
                                    <h3 className="text-xl md:text-4xl mb-2 font-bold leading-snug md:leading-snug md:w-[70%]">
                                        Your idea. Your clarity. Your move.
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="text-sm md:text-base mx-auto leading-loose md:leading-loose font-mediu opacity-80 mb-8 md:mb-14">
                                        Business Empowerment gives you access to the kind of insights and AI tools that used to be reserved for big companies. From industry snapshots and validation reports to strategy guides and automation roadmaps, we help entrepreneurs and small business owners make smarter, faster decisions.
                                    </p>
                                    <Link href='/business-empowerment' className="bg-primary px-6 py-4 rounded-lg text-sm text-white">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-8 md:gap-20 mb-24 md:mb-32">
                            <div>
                                <div className="">
                                    <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Everyday AI</p>
                                    <h3 className="text-xl text-4xl mb-2 font-bold leading-snug md:leading-snug md:w-[70%]">
                                        Do more with what you already have.
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="text-sm md:text-base mx-auto leading-loose md:leading-loose font-mediu opacity-80 mb-8 md:mb-14">
                                        Everyday AI is about using technology to improve real life, not complicate it. These tools help you stretch your money, share resources, and build stronger communities. From budgeting to barter networks, we&apos;re making AI that&apos;s useful, practical, and made for the moments that matter most.
                                    </p>
                                    <Link href='/everyday-ai' className="bg-primary px-6 py-4 rounded-lg text-sm text-white">Learn More</Link>
                                </div>
                            </div>
                            <div>
                                <Image src={Everyday} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-full rounded-lg object-fit object-cover" />
                            </div>
                        </div>
                    </section>
                </>
            </DisplayLayout>
        </div>
    );
}