'use client';

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
import { IoIosArrowForward } from "react-icons/io";
import HomeHero from "@/assets/images/home-hero.jpg";
import Public from "@/assets/images/good.jpg";
import { TiPlus } from "react-icons/ti";
import { BiMinus } from "react-icons/bi";
import UserContext from "@/context/UserContext";



export default function ContactUs() {

    const { user } = useContext(UserContext);


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
                        <div className="md:w-[90%] mx-auto gap-20 py-32 md:pt-36 pb-16">
                            <div className="px-5 md:px-0 md:w-[70%] mx-auto">
                                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                                    <h4 className="text-[#9747FF] font-medium text-xs md:text-sm">AI That Works for Everyone</h4>
                                </div>
                                <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 w-[80%] mx-auto leading-relaxed md:leading-tight">
                                    Wits Newsroom – Clarity Tools for the Noise Age
                                </h1>
                                <p className="text-sm md:text-base text-[#111111b3] leading-loose md:leading-loose mb-7 md:w-[80%] mx-auto">
                                    Reclaim your power to understand what&apos;s really going on with our Interactive News app, powered by AI.  Unpack stories, spot bias, and think clearly in a world designed to confuse you.
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
                    <section className="px-5 md:px-28 mt-20 md:mt-24 max-w-[1500px] mx-auto">
                        <div className="">
                            <h3 className="text-center text-2xl md:text-4xl mb-2 md:mb-3 font-bold leading-relaxed md:leading-relaxed">
                                Truth Needs Defenders, <br /> We Build Their Tools
                            </h3>
                            <p className="text-sm md:text-base text-center md:w-[57%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                                Wits Newsroom is an interactive news tool designed to help you ask smarter questions, see multiple sides of a story, and get the background and context you need. Just clear, AI-powered answers that help you gain clarity on your terms.
                            </p>
                        </div>
                        <Image src={Public} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-full rounded-lg object-fit object-cover" />
                        <div className="text-center md:text-left flex flex-col md:grid grid-cols-3 gap-5 md:gap-10 items-center mt-7">
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">See Clearly. Think Smarter.</p>
                                <h4 className="mb-1 md:mb-2 font-[600] text-base md:text-lg">
                                    Not Just News, Clarity on Your Terms
                                </h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    Ask smarter questions. Spot bias. Go beyond the headline with tools built to help you understand the story, not just skim it.
                                </p>
                            </div>
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Explore Multiple Angles</p>
                                <h4 className="mb-1 md:mb-2 font-[600] text-base md:text-lg">
                                    One Story. Different Viewpoints</h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    See how various outlets cover the same issue. Compare perspectives and make up your own mind with clarity, not noise.
                                </p>
                            </div>
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Reclaim Your Voice</p>
                                <h4 className="mb-1 md:mb-2 font-[600] text-base md:text-lg">
                                    Turn Insight Into Action</h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    Use our Pro tools to journal, annotate, and draft thoughtful responses. Reinforce your understanding and speak up with confidence.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-28 py-24 mt-24 md:mt-24 bg-[#F5F3FF]">
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
                            <div className="w-full h-[.2rem] bg-[#3b3b3b1f] mt-20"></div>
                        </div>
                        <section className="pt-20 md:pt-24">
                            <div className="flex flex-col md:flex-row md:gri grid-cols-2 gap-10 md:gap-16">
                                <div className="md:w-[500px]">
                                    <div className="text-center md:text-left">
                                        <p className="text-xs uppercase font-medium opacity-60 mb-3 md:mb-4">Frequently asked questions</p>
                                        <h3 className="text-3xl md:text-4xl mb-3 font-bold md:w-[70%] leading-[1.4] md:leading-[1.6]">
                                            {/* Frequently asked questions */}
                                            Got Questions? <br /> We've Got Answers
                                        </h3>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose text-[#3b3b3b] mb-0 md:w-[80%] mx-aut">
                                            Discover key information about our AI solutions, community focus, and future plans.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex gap-5 flex-col w-[70% mx-auto">
                                        <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 0 ? 'bg-[#F9F9FB' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(0)}
                                                className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-base md:text-lg">How does this fit into the bigger Quality of Life ecosystem?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 0 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 0 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    The Public Good pillar is all about reclaiming clarity, accountability, and truth. Foundations that impact every part of life. When people are misinformed or manipulated, it affects their decisions, their communities, and their future. This pillar supports the rest by making sure people have the tools to think critically and challenge what doesn&apos;t serve them, so they can build lives and systems that do.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 1 ? 'bg-[#F9F9FB' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(1)}
                                                className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-base md:text-lg w-[70%] md:w-full">What&apos;s next for the Public Good pillar?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 1 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 1 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    First up is Wits Newsroom, our interactive news app designed to help you ask smarter questions, explore multiple viewpoints, and get context that headlines often leave out. Check it on now.  After that, we&apos;re rolling out a tool to better understand legislation and citizen journalist tools that help people better understand laws, hold power accountable, and create credible content of their own. The goal: make truth easier to find and harder to twist.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 2 ? 'bg-[#F9F9FB' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(2)}
                                                className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-base md:text-lg">Is Wired Wits neutral? Do you take political sides?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 2 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    No. In fact, we work hard to avoid the trap of partisan framing entirely.  All of us have our beliefs, but we recognize the importance of checking them at the door to ensure we earn and continually build on your trust.  We don&apos;t care which party you support or where you fall on the political spectrum. We care that your beliefs are grounded in truth, not manipulation.  And it is our mission to provide you with the tools to do it. Supporting a politician and holding them accountable aren't mutually exclusive, you can do both, just like you would with a close friend or family member. Real leadership invites scrutiny, speaks clearly about values, and trusts you to think for yourself.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 3 ? 'bg-[#F9F9FB' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(3)}
                                                className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-base md:text-lg w-[70%] md:w-full">How do the Wired Wits pillars work together?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 3 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 3 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    You shouldn&apos;t, blind trust is part of the problem, whether it&apos;s AI, pundits, or elected leaders. That&apos;s why we lean into transparency. Our tool is built to clarify, not persuade. It helps you explore multiple angles, spot bias, and dig deeper into context. It doesn&apos;t tell you what to think. It gives you the tools to think better. And if something doesn&apos;t add up, we want you to question it. That&apos;s how trust should work. We know it&apos;s not perfect, and we&apos;re constantly working to make it better, more transparent, more accurate, and more useful to people who care about truth
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </>
            </PillarsLayout>
        </div>
    );
}