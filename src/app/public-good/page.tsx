'use client';

import DisplayLayout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { RiDoorOpenLine } from "react-icons/ri";
import PillarsLayout from "@/components/layout/PillarsLayout";



export default function ContactUs() {
    const [currView, setCurrView] = useState<string>('public-bias');
    const [currSecView, setCurrSecView] = useState<string>('business-idea');
    const [currThirdView, setCurrThirdView] = useState<string>('thrive-money');

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
                                <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 leading-relaxed md:leading-tight md:w-[70%] mx-auto">
                                    Wits Newsroom – Clarity Tools for the Noise Age
                                </h1>
                                <p className="text-sm md:text-base text-[#111111b3] leading-loose md:leading-loose mb-7 md:w-[80%] mx-auto">
                                    Reclaim your power to understand what&apos;s really going on with our Interactive News app, powered by AI.  Unpack stories, spot bias, and think clearly in a world designed to confuse you.
                                </p>
                                <div className="flex gap-4 mx-auto mb-10 w-max">
                                    <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Create Account</Link>
                                    <Link href="/contact-us" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-32 mt-20 md:mt-28">
                        <div className="grid grid-cols-2 gap-14">
                            <div>
                                <div className="">
                                    <h3 className="text- text-4xl mb-3 font-bold leading-snug md:leading-snug">
                                        What Makes This Different?
                                    </h3>
                                </div>
                                <div className="">
                                    <p className="text-base mb-6 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                                        Wired Wits helps you cut through noise, uncover truth, and hold power accountable. Our first tool, See Clearly. Think Smarter., is live now, designed to help you spot bias, decode manipulation, and ask better questions. The journey starts here.
                                    </p>
                                    <p className="text-base mb- mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                                        Wits Newsroom is an interactive news tool designed to help you ask smarter questions, see multiple sides of a story, and get the background and context you need. Think of it like a co-pilot for understanding what really matters. No spin. No labels. No agenda. Just clear, AI-powered answers that help you gain clarity on your terms.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#A789FE] w-full h-full rounded-lg"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-10 mt-20">
                            <div
                                onClick={() => handleCurrPageView('public-bias')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'public-bias' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-sm md:text-[15px]">See Clearly. Think Smarter.</p>
                            </div>
                            <div
                                onClick={() => handleCurrPageView('public-legislation')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'public-legislation' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-sm md:text-[15px]">Explore Multiple Angles</p>
                            </div>
                            <div
                                onClick={() => handleCurrPageView('public-trends')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'public-trends' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-sm md:text-[15px]">Reflect. Respond. Reclaim Your Voice</p>
                            </div>
                        </div>
                        <>
                            {
                                currView === 'public-bias' ?
                                    <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5 md:gap-8 mt-9 items-center">
                                        <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-5 md:py-16 px-5 md:px-16 flex justify-between flex-col">
                                            <div>
                                                <h3 className="text-xl md:text-2xl [42px] mb-3 leading-snug font-bold">
                                                    Not Just News, <br /> Clarity on Your Terms
                                                </h3>
                                                <p className="text-sm md:text-base font-mediu leading-loose mb-8 md:mb-4">
                                                    Ask smarter questions. Spot bias. Get the real context behind the headlines, with tools built to help you understand the story, not just skim it.
                                                </p>
                                            </div>
                                            <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                                                <GoArrowUpRight className="text-2xl" /></Link>
                                        </div>
                                        <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                    </div> :
                                    currView === 'public-legislation' ?
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-5 md:py-16 px-5 md:px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl [42px] mb-3 leading-snug font-bold">
                                                        One Story. <br /> Multiple Viewpoints.
                                                    </h3>
                                                    <p className="text-sm md:text-base font-mediu leading-loose mb-8 md:mb-4">
                                                        Don&apos;t settle for a single source. Wits Newsroom shows you how different outlets cover the same issue, so you can think critically and make up your own mind.
                                                    </p>
                                                </div>
                                                <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                                        :
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-5 md:py-16 px-5 md:px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Understand It. <br /> Then Do Something With It.
                                                    </h3>
                                                    <p className="text-sm md:text-base font-mediu leading-loose mb-8 md:mb-4">
                                                        Use our Pro tools to turn what you read into reflections, notes, or drafts. Reinforce your learning. Craft your perspective. Respond with clarity and confidence.
                                                    </p>
                                                </div>
                                                <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                            }
                        </>
                    </section>
                    <section className="px-5 md:px-28 py-24 mt-24 md:mt-28 bg-[#F5F3FF]">
                        <div>
                            <h3 className="text-2xl md:text-4xl leading-snug font-bold">
                                Clear, Connected, <br /> Collaborative Solutions
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
                                            Connect, collaborate, and share resources easily with tools designed to help individuals and groups organize efficiently, and thrive together.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <IoSettingsSharp className="text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium md:font-[400] text-lg md:text-xl mb-3">
                                            Power in Your Hands
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            Spot misinformation, simplify complex information, and automate routine tasks — so you can make smarter decisions and focus on growing your ideas.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <RiDoorOpenLine className="text-4xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium md:font-[400] text-lg md:text-xl mb-3">
                                            Unlock New Opportunities
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            Use AI - powered tools to validate ideas, track trends, and streamline workflows—giving you the freedom to innovate and succeed without limits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
                            <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 md:gap-24 mt-20">
                                <div>
                                    <div>
                                        <h3 className="text-2xl md:text-4xl leading-relaxed md:leading-tight font-bold w-[80%] mb-3 md:mb-4">
                                            Empowering Smarter Decisions Together
                                        </h3>
                                        <p className="text-sm md:text-base opacity-70 leading-loose md:leading-loose mb-3 md:w-[95%]">
                                            Advanced AI tools that offer clear insights, remove barriers, and foster collaboration for individuals, entrepreneurs, and communities—making powerful technology accessible to all.
                                        </p>
                                        <p className="text-sm md:text-base opacity-70 leading-loose md:leading-loose mb-10 md:w-[95%]">
                                            From spotting misinformation and simplifying laws to automating workflows and building stronger networks, we empower users to make smarter decisions, grow ideas, and thrive together.
                                        </p>
                                        <Link className="flex items-center gap-3 bg-[#9747FF] border-2 border-white border-solid text-sm text-white px-8 py-4 rounded-lg w-max" href="">Create Account <GoArrowUpRight className="text-2xl text-white" /></Link>
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
                                    <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                                        <h3 className="font-medium text-base leading-[1.5] md:leading-[1.3]">How does your AI detect misinformation?</h3>
                                        <FaAngleDown className="text-xl" />
                                    </div>
                                    <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                                        <h3 className="font-medium text-base leading-[1.5] md:leading-[1.3]">Can I customize the tools to fit my needs?</h3>
                                        <FaAngleDown className="text-xl" />
                                    </div>
                                    <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                                        <h3 className="font-medium text-base leading-[1.5] md:leading-[1.3]">Are there any costs involved?</h3>
                                        <FaAngleDown className="text-xl" />
                                    </div>
                                    <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                                        <h3 className="font-medium text-base leading-[1.5] md:leading-[1.3]">Can businesses use your platform to automate workflows?</h3>
                                        <FaAngleDown className="text-xl" />
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