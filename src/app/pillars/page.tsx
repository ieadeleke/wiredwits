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
            <DisplayLayout>
                <>
                    <section className="hero-bg flex items-center justify-center text-center">
                        <div className="w-[90%] mx-auto gap-20 py-40 pb-16">
                            <div className="w-[60%] mx-auto">
                                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                                    <h4 className="text-[#9747FF] font-medium text-sm">AI That Works for Everyone</h4>
                                </div>
                                <h1 className="text-4xl font-bold mb-4 leading-[1.4]">
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
                        <h3 className="text-center text-3xl mb-3 font-bold leading-snug md:leading-snug w-[40%] mx-auto">
                            Public Good:  Truth Needs Defenders, We Build Their Tools
                        </h3>
                        <p className="text-base text-center w-[60%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                            We don&apos;t tell you what to think. We build tools that help you cut through noise, question what you&apos;re told, and make sense of a world full of spin. In today&apos;s world, truth isn&apos;t handed down, it&apos;s uncovered. And we are building the tools to help you do that, starting with Wits Newsroom.
                        </p>
                        <div className="grid grid-cols-3 gap-10 mt-7">
                            <div
                                onClick={() => handleCurrPageView('public-bias')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'public-bias' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">See Clearly. Think Smarter.</p>
                            </div>
                            <div
                                onClick={() => handleCurrPageView('public-legislation')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'public-legislation' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Decode Laws. Understand Power</p>
                            </div>
                            <div
                                onClick={() => handleCurrPageView('public-trends')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currView === 'public-trends' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Expose the Game. Demand Better</p>
                            </div>
                        </div>
                        <>
                            {
                                currView === 'public-bias' ?
                                    <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                        <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                            <div>
                                                <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                    Spot misinformation and bias with AI-powered tools
                                                </h3>
                                                <p className="text-sm font-mediu leading-loose mb-4">
                                                    Our interactive news app analyzes headlines and articles for bias, emotional manipulation, and misleading framing. It&apos;s like a compass for the information age, helping you think critically and stay grounded in a world full of spin.
                                                </p>
                                            </div>
                                            <Link href="/public-good" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Learn More
                                                <GoArrowUpRight className="text-2xl" /></Link>
                                        </div>
                                        <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                    </div> :
                                    currView === 'public-legislation' ?
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Understand legislation in plain English
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        We&apos;re building tools that make complex laws easier to understand, breaking down key points and translating them into clear, actionable summaries. No legalese, no hidden agendas, just the facts. Coming soon.
                                                    </p>
                                                </div>
                                                <Link href="/public-good" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Learn More
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                                        :
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Hold leaders accountable with public data and transparency tools
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        In the future, you&apos;ll be able to follow political influence, campaign money, and backdoor deals, because transparency shouldn&apos;t be a privilege. These tools are in early development, built for people who believe accountability is non-negotiable.
                                                    </p>
                                                </div>
                                                <Link href="/public-good" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Learn More
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                            }
                        </>
                    </section>
                    <section className="px-32 mt-28">
                        <h3 className="text-center text-3xl mb-3 font-bold leading-snug md:leading-snug w-[50%] mx-auto">
                            Business Empowerment: Smarter Tools. Greater Access. Real Opportunity.
                            {/* Smarter Tools. Greater <br /> Access. Real Opportunity. */}
                        </h3>
                        <p className="text-base text-center w-[60%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                            You&apos;ve got the vision — now you need the edge. We&apos;re building tools to help you validate smarter, automate the busywork, and spot opportunity before the market catches up. They&apos;re not here yet—but we&apos;re laying the groundwork to put serious strategy in your hands.
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
                                        <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                            <div>
                                                <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                    Validate your business idea with AI-powered insights
                                                </h3>
                                                <p className="text-sm font-mediu leading-loose mb-4">
                                                    Before you invest your time, energy, or money, you deserve to know if your idea is built to last. We&apos;re designing tools that use real data to test your concept, explore market fit, and help you move with clarity. The groundwork is in motion, and you will be the first to know.
                                                </p>
                                            </div>
                                            <Link href="/business-empowerment" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Unlock your edge
                                                <GoArrowUpRight className="text-2xl" /></Link>
                                        </div>
                                    </div> :
                                    currSecView === 'business-automate' ?
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Automate Business Processes with AI
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        Growth shouldn&apos;t mean burnout. We&apos;re developing tools that handle the repetitive stuff, content, research, outreach, so you can focus on building the business only you can build. It&apos;s not live yet, but it&apos;s coming together with builders like you in mind.
                                                    </p>
                                                </div>
                                                <Link href="/business-empowerment" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Unlock your edge
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                        </div>
                                        :
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Track emerging trends and uncover new markets.
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        The best time to act? Before everyone else does. Our trend-spotting tools are in the works to help you identify where attention, demand, and opportunity are headed, so you can be ready when it matters. Stay tuned. You&apos;ll want to be early on this.
                                                    </p>
                                                </div>
                                                <Link href="/business-empowerment" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Unlock your edge
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                        </div>
                            }
                        </>
                    </section>
                    <section className="px-32 mt-28">
                        <h3 className="text-center text-3xl mb-3 font-bold">
                            Live Smarter. Thrive Together.
                        </h3>
                        <p className="text-base text-center w-[70%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                            We believe tech should make life easier, not more complicated. Our Everyday AI tools are being designed to help you stretch resources, lower stress, and strengthen community connections. They&apos;re not ready yet, but what we&apos;re building is shaped by people like you, and it&apos;s all about practical impact.
                        </p>
                        <div className="grid grid-cols-3 gap-10 mt-7">
                            <div
                                onClick={() => setCurrThirdView('thrive-money')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-money' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Spend Less. Stress Less.</p>
                            </div>
                            <div
                                onClick={() => setCurrThirdView('thrive-resources')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-resources' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Share More. Build Together.</p>
                            </div>
                            <div
                                onClick={() => setCurrThirdView('thrive-goods')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-goods' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Trade Smarter. Stay Local.</p>
                            </div>
                        </div>
                        <>
                            {
                                currThirdView === 'thrive-money' ?
                                    <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                        <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                            <div>
                                                <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                    Save money and reduce waste with AI-powered budgeting
                                                </h3>
                                                <p className="text-sm font-mediu leading-loose mb-4">
                                                    We&apos;re working on tools that help you stretch your dollars, track spending with ease, and spot savings that actually make sense for your life. Because peace of mind shouldn&apos;t depend on how much you earn, it should come from clarity and control.
                                                </p>
                                            </div>
                                            <Link href="/everyday-ai" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Get Started
                                                <GoArrowUpRight className="text-2xl" /></Link>
                                        </div>
                                        <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                    </div> :
                                    currThirdView === 'thrive-resources' ?
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Pool resources and skills through community-led co-ops
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        We&apos;re developing systems to make sharing easier—from tool libraries to childcare swaps. These tools are being shaped with one goal in mind: help neighbors support each other and build access without extra cost.
                                                    </p>
                                                </div>
                                                <Link href="/everyday-ai" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Get Started
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                                        :
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Trade goods, services, or time in trusted networks
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        Imagine a neighborhood where you can trade time, skills, or extra supplies—no money needed. That&apos;s the kind of tool we&apos;re building: practical, local, and designed to make everyday life more connected and resilient.
                                                    </p>
                                                </div>
                                                <Link href="/everyday-ai" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Get Started
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                            }
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