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
                        <div className="w-[90%] mx-auto gap-20 py-40 pb-16">
                            <div className="w-[70%] mx-auto">
                                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                                    <h4 className="text-[#9747FF] font-medium text-sm">AI That Works for Everyone</h4>
                                </div>
                                <h1 className="text-5xl font-bold mb-4 leading-tight md:leading-tight">
                                    Three Pillars. One Mission: Protect the Ecosystem That Sustains Us.
                                    {/* Empowering People. Defending the Ecosystem. Harnessing AI for Good. */}
                                </h1>
                                <p className="text-base text-[#111111b3] leading-relaxed md:leading-loose mb-7 w-[80%] mx-auto">
                                    {/* <p className="text-base w-[80%] mb-6 mx-auto leading-loose md:leading-loose font-medium"> */}
                                    We&apos;re driven by a simple mission: build tools that protect truth, expand access, and inspire action—so more people can shape a better future with confidence.
                                    {/* At Wired Wits, we believe everyone deserves access to tools that help them cut through noise, hold power accountable, and unlock new opportunities. */}
                                </p>
                                <div className="flex gap-4 mx-auto mb-10 w-max">
                                    <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Create Account</Link>
                                    <Link href="/contact-us" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Reach out to us</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-32 mt-28">
                        <h3 className="text-center text-4xl mb-3 font-bold leading-snug md:leading-snug">
                            Smarter Tools. Greater <br /> Access. Real Opportunity.
                        </h3>
                        <p className="text-base text-center w-[60%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                            Entrepreneurs need more than ideas, they need strategy, insight, and support. We&apos;re working on tools that help validate ideas, automate workflows, and uncover new opportunities. These are under wraps for now, but they're on the way. (Coming Soon)
                        </p>
                        <div className="grid grid-cols-3 gap-10 mt-7">
                            <div
                                onClick={() => setCurrSecView('business-idea')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currSecView === 'business-idea' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Build Smarter. Move Faster.</p>
                            </div>
                            <div
                                onClick={() => setCurrSecView('business-automate')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currSecView === 'business-automate' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Automate the Grind</p>
                            </div>
                            <div
                                onClick={() => setCurrSecView('business-track')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currSecView === 'everyday' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Spot Trends. Seize Opportunity</p>
                            </div>
                        </div>
                        <>
                            {
                                currSecView === 'business-idea' ?
                                    <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                        <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                            <div>
                                                <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                    Validate your business idea with AI-powered insights
                                                </h3>
                                                <p className="text-sm font-mediu leading-loose mb-4">
                                                    Know before you go. We&apos;re building tools to help you evaluate your next big idea with confidence. No fluff. No guesswork. (Coming Soon)
                                                </p>
                                            </div>
                                            <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                                                <GoArrowUpRight className="text-2xl" /></Link>
                                        </div>
                                        <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                    </div> :
                                    currSecView === 'business-automate' ?
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Automate Business Processes
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        Spend less time on tasks and more on growth. This set of tools is designed to reduce the grind and help you scale, smarter. (Coming Soon)
                                                    </p>
                                                </div>
                                                <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                                        :
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Track emerging trends and uncover new markets.
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        See what&apos;s coming before it hits. Our trend-tracking tools are being developed to help you move fast on real opportunity. (Coming Soon)
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
                    <section className="px-28 py-24 mt-28 bg-[#F5F3FF]">
                        <div>
                            <h3 className="text-4xl leading-snug font-bold">
                                Clear, Connected, <br /> Collaborative Solutions
                            </h3>
                            <div className="mt-10 grid grid-cols-3 gap-10">
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <RiUserCommunityLine className="text-4xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-mediu text-xl mb-3">
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
                                        <h4 className="font-mediu text-xl mb-3">
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
                                        <h4 className="font-mediu text-xl mb-3">
                                            Unlock New Opportunities
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            Use AI - powered tools to validate ideas, track trends, and streamline workflows—giving you the freedom to innovate and succeed without limits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
                            <div className="grid grid-cols-2 gap-24 mt-20">
                                <div>
                                    <div>
                                        <h3 className="text-4xl leading-tight md:leading-tight font-bold w-[80%] mb-4">
                                            Empowering Smarter Decisions Together
                                        </h3>
                                        <p className="text-base opacity-70 leading-loose md:leading-loose mb-3 w-[95%]">
                                            Advanced AI tools that offer clear insights, remove barriers, and foster collaboration for individuals, entrepreneurs, and communities—making powerful technology accessible to all.
                                        </p>
                                        <p className="text-base opacity-70 leading-loose md:leading-loose mb-10 w-[95%]">
                                            From spotting misinformation and simplifying laws to automating workflows and building stronger networks, we empower users to make smarter decisions, grow ideas, and thrive together.
                                        </p>
                                        <Link className="flex items-center gap-3 bg-[#9747FF] border-2 border-white border-solid text-sm text-white px-8 py-4 rounded-lg w-max" href="">Create Account <GoArrowUpRight className="text-2xl text-white" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full h-full rounded-lg bg-[#111111]"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-28 pt-28">
                        <div className="flex gap-20">
                            <div className="w-[500px]">
                                <div className="">
                                    <h3 className="text-4xl mb-4 font-bold leading-[1.3] capitalize">
                                        Some Questions we <br /> get asked often
                                    </h3>
                                    <p className="text-base leading-relaxed md:leading-relaxed mb-14 w-[80%]">
                                        Discover key information about our AI solutions, community focus, and future plans.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex gap-5 flex-col mx-auto">
                                    <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                                        <h3 className="font-medium text-base">How does your AI detect misinformation?</h3>
                                        <FaAngleDown className="text-xl" />
                                    </div>
                                    <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                                        <h3 className="font-medium text-base">Can I customize the tools to fit my needs?</h3>
                                        <FaAngleDown className="text-xl" />
                                    </div>
                                    <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                                        <h3 className="font-medium text-base">Are there any costs involved?</h3>
                                        <FaAngleDown className="text-xl" />
                                    </div>
                                    <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                                        <h3 className="font-medium text-base">Can businesses use your platform to automate workflows?</h3>
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