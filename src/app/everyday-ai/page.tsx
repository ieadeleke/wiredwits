'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { RiDoorOpenLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import PillarsLayout from "@/components/layout/PillarsLayout";



export default function ContactUs() {
    const [currView, setCurrView] = useState<string>('public-bias');
    const [currSecView, setCurrSecView] = useState<string>('business-idea');
    const [currThirdView, setCurrThirdView] = useState<string>('thrive-money');

    const [currentValuesView, setCurrentValuesView] = useState<number>(0);

    const handleCurrPageView = (e: string) => {
        setCurrView(e)
    }

    return (
        <div>
            <PillarsLayout>
                <>
                    <section className="hero-bg flex items-center justify-center text-center">
                        <div className="md:w-[90%] mx-auto gap-20 py-32 md:py-40 pb-16">
                            <div className="px-5 md:px-0 md:w-[70%] mx-auto">
                                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                                    <h4 className="text-[#9747FF] font-medium text-xs md:text-sm">AI That Works for Everyone</h4>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 leading-relaxed md:leading-tight">
                                    Smarter Living. <br /> Stronger Together
                                    {/* Empowering People. Defending the Ecosystem. Harnessing AI for Good. */}
                                </h1>
                                <p className="text-sm md:text-base text-[#111111b3] leading-loose md:leading-loose mb-7 md:w-[70%] mx-auto">
                                    We&apos;re building AI tools for real life designed to stretch your resources, ease your day-to-day, and help communities thrive together. From saving money to sharing more, these tools are made for the moments that matter most.
                                </p>
                                <div className="flex gap-4 mx-auto mb-10 w-max">
                                    <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Get Started</Link>
                                    <Link href="/contact-us" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-32 mt-20 md:mt-28">
                        <h3 className="text-center text-2xl md:text-4xl mb-2 md:mb-3 font-bold">
                            Live Smarter. Thrive Together.
                        </h3>
                        <p className="text-sm md:text-base text-center md:w-[60%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                            We believe technology should lift people up not wear them down. Our Everyday AI tools are built to help you stretch your dollars, share what you have, and build stronger communities that can weather hard times together
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-3 md:mt-7">
                            <div
                                onClick={() => setCurrThirdView('thrive-money')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-money' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-sm md:text-[15px]">Spend Less. Stress Less.</p>
                            </div>
                            <div
                                onClick={() => setCurrThirdView('thrive-resources')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-resources' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-sm md:text-[15px]">Share More. Build Together.</p>
                            </div>
                            <div
                                onClick={() => setCurrThirdView('thrive-goods')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-goods' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-sm md:text-[15px]">Trade Smarter. Stay Local.</p>
                            </div>
                        </div>
                        <>
                            {
                                currThirdView === 'thrive-money' ?
                                    <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-8 mt-9 items-center">
                                        <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-5 md:py-16 px-5 md:px-16 flex justify-between flex-col">
                                            <div>
                                                <h3 className="text-xl md:text-2xl [42px] mb-3 leading-snug font-bold">
                                                    Save money and reduce waste with AI-powered budgeting
                                                </h3>
                                                <p className="text-sm font-mediu leading-loose mb-8 md:mb-4">
                                                    Financial clarity shouldn&apos;t be a luxury. We are building tools to help you track your spending, spot waste, and find simple ways to make your money go further so you can breathe easier
                                                </p>
                                            </div>
                                            <Link href="/auth/signup" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                                                <GoArrowUpRight className="text-2xl" /></Link>
                                        </div>
                                        <div className="bg-[#A789FE] w-full h-[20rem] md:h-[30rem] rounded-lg"></div>
                                    </div> :
                                    currThirdView === 'thrive-resources' ?
                                        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-5 md:py-16 px-5 md:px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Pool resources and skills through smarter community tools
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-8 md:mb-4">
                                                        Imagine a neighborhood where sharing tools, childcare, or even meals was just... normal. These AI tools will help you build local co-ops that turn good intentions into real, resilient support systems.
                                                    </p>
                                                </div>
                                                <Link href="/auth/signup" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[20rem] md:h-[30rem] rounded-lg"></div>
                                        </div>
                                        :
                                        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-5 md:py-16 px-5 md:px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Trade Smarter. Stay Local.
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-8 md:mb-4">
                                                        Need a haircut but short on cash? Want to offer tutoring in exchange for lawn care? Want to trade extra produce from your garden harvest? These tools will help you create local barter networks that work like currency, with trust and transparency at the core.
                                                    </p>
                                                </div>
                                                <Link href="/auth/signup" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[20rem] md:h-[30rem] rounded-lg"></div>
                                        </div>
                            }
                        </>
                    </section>
                    <section className="px-5 md:px-28 py-24 mt-24 md:mt-28 bg-[#F5F3FF]">
                        <div>
                            <h3 className="text-2xl md:text-4xl leading-snug font-bold">
                                Tools That Lift Everyone Up
                            </h3>
                            <div className="mt-5 md:mt-10 flex flex-col md:grid grid-cols-3 gap-5 md:gap-10">
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <RiUserCommunityLine className="text-4xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium md:font-[400] text-lg md:text-xl mb-3">
                                            Build Stronger Communities
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            From food-sharing to carpooling to child care swaps — these tools help you connect, and share more easily with neighbors. When communities come together, everyone stands taller.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <IoSettingsSharp className="text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium md:font-[400] text-lg md:text-xl mb-3">
                                            Confidence in the Day-to-Day
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            Whether it&apos;s budgeting, organizing, or just keeping up—our tools are built to simplify tasks and help you take back time, money, and peace of mind. It&apos;s power in your hands, one smart step at a time.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <RiDoorOpenLine className="text-4xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium md:font-[400] text-lg md:text-xl mb-3">
                                            Open Doors to New Possibilities
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            Get access to tools that help you barter, build micro-income streams, or pool resources for group buying. We&apos;re here to make sure opportunity isn&apos;t just for those with deep pockets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
                            <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 md:gap-24 mt-20">
                                <div>
                                    <div>
                                        <h3 className="text-2xl md:text-4xl leading-relaxed md:leading-tight font-bold w-[80%] mb-3 md:mb-4">
                                            Everyday Tools. <br /> Extraordinary Impact
                                        </h3>
                                        <p className="text-sm md:text-base opacity-70 leading-loose md:leading-loose mb-3 md:w-[95%]">
                                            Our mission is simple: make powerful AI tools that serve real people with real needs. Whether you're managing your household budget, organizing with neighbors, or prepping for hard times, we&apos;re building tech that helps you thrive not just survive.
                                        </p>
                                        <p className="text-sm md:text-base opacity-70 leading-loose md:leading-loose mb-10 md:w-[95%]">
                                            We believe stronger communities start with smarter systems—and when more people have access to the right tools, we all rise together.
                                        </p>
                                        <Link className="flex items-center gap-3 bg-[#9747FF] border-2 border-white border-solid text-sm text-white px-8 py-4 rounded-lg w-max" href="/auth/signin">Be the first to know <GoArrowUpRight className="text-2xl text-white" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full h-[20rem] md:h-full rounded-lg bg-[#111111]"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-28 pt-24 md:pt-28">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                            <div className="md:w-[500px]">
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl md:text-4xl mb-4 font-bold leading-[1.4] md:leading-[1.3] capitalize">
                                        Some Questions we <br /> get asked often
                                    </h3>
                                    <p className="text-sm md:text-base leading-loose md:leading-relaxed mb-0 md:mb-14 md:w-[80%]">
                                        Discover key information about our AI solutions, community focus, and future plans.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex gap-5 flex-col mx-auto">
                                    <div className="py-5 px-6 flex flex-col border-2 rounded-lg border-solid border-[#EBEBEB]">
                                        <div onClick={() => setCurrentValuesView(0)}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className="font-medium text-base leading-[1.5] md:leading-[1.3]">Will I need to be &apos;tech-savvy&apos; to use these tools?</h3>
                                            {
                                                currentValuesView === 0 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                            }
                                        </div>
                                        <div className={`values-text ${currentValuesView === 0 ? 'show-text pt-5' : ''}`}>
                                            <p className="text-sm md:text-base leading-loose md:leading-loose">
                                                Not at all. These tools are designed for real life not for tech experts. You won&apos;t need to understand AI to benefit from it. We focus on simple, supportive experiences that help you do more with less stress. If you can use a smartphone, you&apos;ll feel right at home here.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-5 px-6 flex flex-col border-2 rounded-lg border-solid border-[#EBEBEB]">
                                        <div onClick={() => setCurrentValuesView(1)}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className="font-medium text-base leading-[1.5] md:leading-[1.3]">Can these tools really help my neighborhood or community?</h3>
                                            {
                                                currentValuesView === 1 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                            }
                                        </div>
                                        <div className={`values-text ${currentValuesView === 1 ? 'show-text pt-5' : ''}`}>
                                            <p className="text-sm md:text-base leading-loose md:leading-loose">
                                                Yes, a million times, yes! And that&apos;s the point. Using AI for good helps us improve our lives and the lives of people around us. Whether it&apos;s organizing a babysitting co-op, sharing groceries with a neighbor, or bartering skills instead of cash, Everyday AI tools are designed to make community support easier and more sustainable. We believe stronger local networks lead to better lives for everyone. You don&apos;t have to wait for big systems to change, you can start building something better right where you are.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-5 px-6 flex flex-col border-2 rounded-lg border-solid border-[#EBEBEB]">
                                        <div onClick={() => setCurrentValuesView(2)}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className="font-medium text-base leading-[1.5] md:leading-[1.3]">What&apos;s coming next in this pillar and how can I stay in the loop?</h3>
                                            {
                                                currentValuesView === 2 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                            }
                                        </div>
                                        <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5' : ''}`}>
                                            <p className="text-sm md:text-base leading-loose md:leading-loose">
                                                We&apos;re building a lineup of Everyday AI tools focused on financial wellness, community sharing, resource pooling, and local barter systems. These tools are designed to help people thrive, especially when times get tough. You can expect launches to begin after we roll out our final Public Good and Business Empowerment tools. Want first access? Join our mailing list and be part of shaping what comes next.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-5 px-6 flex flex-col border-2 rounded-lg border-solid border-[#EBEBEB]">
                                        <div onClick={() => setCurrentValuesView(3)}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className="font-medium text-base leading-[1.5] md:leading-[1.3]">How does this fit into the bigger Quality of Life Ecosystem?</h3>
                                            {
                                                currentValuesView === 3 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                            }
                                        </div>
                                        <div className={`values-text ${currentValuesView === 3 ? 'show-text pt-5' : ''}`}>
                                            <p className="text-sm md:text-base leading-loose md:leading-loose">
                                                Wired Wits was built to help people live better, think clearer, and do more with what they have. Everyday AI is the heart of that mission focused on helping you stretch resources, strengthen your community, and simplify daily life. It&apos;s one part of a broader ecosystem that also tackles misinformation, government transparency, and business empowerment because quality of life means having clarity, opportunity, and support at every level.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </PillarsLayout>
        </div>
    );
}