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



export default function ContactUs() {
    const [currView, setCurrView] = useState<string>('public');

    const handleCurrPageView = (e: string) => {
        setCurrView(e)
    }

    return (
        <div>
            <DisplayLayout>
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
                                    <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Get Started</Link>
                                    <Link href="/contact-us" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Reach out to us</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-32 mt-28">
                        {/* <h3 className="text-center text-5xl mb-6 font-bold">
                            Solve real problems with Wired Wits
                        </h3>
                        <p className="text-base text-center w-[60%] mb-6 mx-auto leading-loose md:leading-loose font-medium">
                            Discover AI-powered tools built to cut through noise, fight misinformation, and help you make smarter, faster decisions — no matter what you&apos;re facing.
                        </p>
                        <div className="grid grid-cols-3 gap-10 mt-7">
                            <div
                                onClick={() => handleCurrPageView('public')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'public' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-medium text-[15px]">See clearly. Think smart.</p>
                            </div>
                            <div
                                onClick={() => handleCurrPageView('business')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'business' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-medium text-[15px]">Build smarter, move faster</p>
                            </div>
                            <div
                                onClick={() => handleCurrPageView('everyday')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'everyday' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-medium text-[15px]">Systems That Work for Everyone</p>
                            </div>
                        </div> */}
                        <>
                            <div className="grid grid-cols-2 gap-20 mt-9 items-center">
                                {/* <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col"> */}
                                <div className="h-full rounded-lg border-solid">
                                    <div>
                                        <h3 className="text-3xl [42px] mb-3 leading-snug font-bold">
                                            Truth Needs Defenders. <br /> We Build Their Tools
                                        </h3>
                                        <p className="text-sm font-medium leading-loose mb-4">
                                            We don&apos;t decide the truth — we build tools so you can find it yourself. Wired Wits helps you spot misinformation, understand legislation clearly, and hold leaders accountable. Join those who demand truth as a non-negotiable. Features include AI-powered bias detection, plain-English legal guides, and transparency tools.
                                        </p>
                                        <ul className="flex flex-col gap-5 mb-12">
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Join the movement
                                        <GoArrowUpRight className="text-2xl" /></Link>
                                </div>
                                <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-20 mt-24 items-center">
                                <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                {/* <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col"> */}
                                <div className="h-full rounded-lg border-solid">
                                    <div>
                                        <h3 className="text-3xl [42px] mb-3 leading-snug font-bold">
                                            Truth Needs Defenders. <br /> We Build Their Tools
                                        </h3>
                                        <p className="text-sm font-medium leading-loose mb-4">
                                            We don&apos;t decide the truth — we build tools so you can find it yourself. Wired Wits helps you spot misinformation, understand legislation clearly, and hold leaders accountable. Join those who demand truth as a non-negotiable. Features include AI-powered bias detection, plain-English legal guides, and transparency tools.
                                        </p>
                                        <ul className="flex flex-col gap-5 mb-12">
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Join the movement
                                        <GoArrowUpRight className="text-2xl" /></Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-20 mt-24 items-center">
                                {/* <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col"> */}
                                <div className="h-full rounded-lg border-solid">
                                    <div>
                                        <h3 className="text-3xl [42px] mb-3 leading-snug font-bold">
                                            Truth Needs Defenders. <br /> We Build Their Tools
                                        </h3>
                                        <p className="text-sm font-medium leading-loose mb-4">
                                            We don&apos;t decide the truth — we build tools so you can find it yourself. Wired Wits helps you spot misinformation, understand legislation clearly, and hold leaders accountable. Join those who demand truth as a non-negotiable. Features include AI-powered bias detection, plain-English legal guides, and transparency tools.
                                        </p>
                                        <ul className="flex flex-col gap-5 mb-12">
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium">
                                                <span className="size-8 rounded-lg block bg-primary"></span>
                                                Truth Needs Defenders. We Build Their Tools
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Join the movement
                                        <GoArrowUpRight className="text-2xl" /></Link>
                                </div>
                                <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                            </div>
                            {/* {
                                currView === 'public' ?
                                    <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                        <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                            <div>
                                                <h3 className="text-3xl [42px] mb-3 leading-snug font-bold">
                                                    Truth Needs Defenders. <br /> We Build Their Tools
                                                </h3>
                                                <p className="text-sm font-medium leading-loose mb-4">
                                                    We don&apos;t decide the truth — we build tools so you can find it yourself. Wired Wits helps you spot misinformation, understand legislation clearly, and hold leaders accountable. Join those who demand truth as a non-negotiable. Features include AI-powered bias detection, plain-English legal guides, and transparency tools.
                                                </p>
                                            </div>
                                            <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Join the movement
                                                <GoArrowUpRight className="text-2xl" /></Link>
                                        </div>
                                        <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                    </div> :
                                    currView === 'business' ?
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-3xl [42px] mb-3 leading-snug font-bold">
                                                        Smarter Tools. Greater <br /> Access. Real Opportunity.
                                                    </h3>
                                                    <p className="text-sm font-medium leading-loose mb-4">
                                                        We&apos;re creating AI tools to help entrepreneurs turn ideas into action — validating ideas, automating workflows, and spotting new opportunities. No gatekeepers, no jargon, just powerful tools to boost your success. Features coming soon include idea validation, content automation, and real-time trend tracking.
                                                    </p>
                                                </div>
                                                <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Unlock your edge
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                                        :
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-3xl [42px] mb-3 leading-snug font-bold">
                                                        Live Smarter. <br /> Thrive Together.
                                                    </h3>
                                                    <p className="text-sm font-medium leading-loose mb-4">
                                                        We&apos;re creating AI tools that help individuals and communities save money, maximize resources, and build smarter, more connected systems. From smarter budgeting to organizing co-ops and barter networks, Everyday AI makes life simpler, more affordable, and more collaborative.
                                                    </p>
                                                </div>
                                                <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Get Started
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                            } */}
                        </>
                    </section>
                    {/* <section className="px-28 py-24 mt-28 bg-[#F5F3FF]">
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
                                        <h4 className="font-medium text-xl mb-3">
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
                                        <h4 className="font-medium text-xl mb-3">
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
                                        <h4 className="font-medium text-xl mb-3">
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
                                        <Link className="flex items-center gap-3 bg-[#9747FF] border-2 border-white border-solid text-sm text-white px-8 py-4 rounded-lg w-max" href="">Get Started <GoArrowUpRight className="text-2xl text-white" /></Link>
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
                    </section> */}
                </>
            </DisplayLayout>
        </div>
    );
}