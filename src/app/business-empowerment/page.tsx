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
import { IoIosArrowForward } from "react-icons/io";



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
                        <div className="w-[90%] mx-auto gap-20 py-40 pb-16">
                            <div className="w-[70%] mx-auto">
                                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                                    <h4 className="text-[#9747FF] font-medium text-sm">AI That Works for Everyone</h4>
                                </div>
                                <h1 className="text-5xl font-bold mb-4 leading-tight md:leading-tight">
                                    Validate smarter. <br /> Build faster. Own your future.
                                </h1>
                                <p className="text-base text-[#111111b3] leading-relaxed md:leading-loose mb-7 w-[80%] mx-auto">
                                    Turn insight into action with research-backed, AI-powered reports and tools that help you launch with confidence. No fluff. No guesswork. Just clarity, strategy, and momentum.
                                </p>
                                <div className="flex gap-4 mx-auto mb-10 w-max">
                                    <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Create Account</Link>
                                    <Link href="/contact-us" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-32 mt-28">
                        <h3 className="text-center text-4xl mb-3 capitalize font-bold leading-snug md:leading-snug w-[35%] mx-auto">
                            Smart AI tools to turn your ideas into action
                        </h3>
                        <p className="text-base text-center w-[50%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                            Starting a business shouldn't mean starting from scratch. Our Business Empowerment tools use advanced AI to distill complex data into clear, strategic reports giving you the edge without the overwhelm.
                        </p>
                        <div className="grid grid-cols-3 gap-10 mt-7">
                            <div
                                onClick={() => setCurrSecView('business-idea')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currSecView === 'business-idea' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Start smart.</p>
                            </div>
                            <div
                                onClick={() => setCurrSecView('business-automate')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currSecView === 'business-automate' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Go Deeper</p>
                            </div>
                            <div
                                onClick={() => setCurrSecView('business-track')}
                                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currSecView === 'everyday' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                                <p className="text-s font-mediu opacity-80 text-[15px]">Launch Smarter</p>
                            </div>
                        </div>
                        <>
                            {
                                currSecView === 'business-idea' ?
                                    <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                        <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                            <div>
                                                <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                    Free AI-Powered Industry Snapshots
                                                </h3>
                                                <p className="text-sm font-mediu leading-loose mb-4">
                                                    Our reports use AI to deliver fast, strategic insights. While we aim for accuracy, we recommend verifying key details and consulting professionals before making major decisions. Wired Wits is not liable for actions taken based on report content—these tools support your judgment, not replace it.
                                                </p>
                                            </div>
                                            <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Explore Our Reports
                                                <GoArrowUpRight className="text-2xl" /></Link>
                                        </div>
                                        <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                    </div> :
                                    currSecView === 'business-automate' ?
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Full Industry Reports
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        Explore fast-growing industries with AI-powered insights. Each snapshot highlights trends, opportunities, and challenges giving you a clear edge without the overwhelm. Don&apos;t see your industry? Let us know in the Feedback Hub we may be able to create it
                                                    </p>
                                                </div>
                                                <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Explore Our Reports
                                                    <GoArrowUpRight className="text-2xl" /></Link>
                                            </div>
                                            <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
                                        </div>
                                        :
                                        <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                                            <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                                                <div>
                                                    <h3 className="text-2xl [42px] mb-3 leading-snug font-bold">
                                                        Quick-Start Business Guides
                                                    </h3>
                                                    <p className="text-sm font-mediu leading-loose mb-4">
                                                        Step-by-step plans generated by AI and refined with expert structure helping you move from idea to launch, with fewer headaches and more wins.
                                                    </p>
                                                </div>
                                                <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Explore Our Reports
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
                                Clarity for Your Ideas
                            </h3>
                            <div className="mt-10 grid grid-cols-3 gap-10">
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <RiUserCommunityLine className="text-4xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-mediu text-xl mb-3">
                                            Tailored to You
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            Get custom, AI-powered reports built around your specific business idea because big visions deserve more than generic advice.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <IoSettingsSharp className="text-3xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-mediu text-xl mb-3">
                                            Insight That Moves You Forward
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            Understand your market, spot gaps your competitors missed, and uncover how tech and AI can give you a winning edge.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <RiDoorOpenLine className="text-4xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-mediu text-xl mb-3">
                                            Decide with Confidence
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            You&apos;ll walk away with clear, strategic recommendations so you can move forward, pivot smartly, or rethink without second-guessing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
                            <div className="grid grid-cols-2 gap-24 mt-20">
                                <div>
                                    <div>
                                        <h3 className="text-4xl leading-tight md:leading-tight font-bold w-[80%] mb-4">
                                            Bringing the Edge Within Reach
                                        </h3>
                                        <p className="text-base opacity-70 leading-loose md:leading-loose mb-3 w-[95%]">
                                            We&apos;re building more than reports. Our roadmap includes AI-powered apps and smart business agents designed to help you manage, grow, and transform your company—with tools once reserved for enterprise giants.
                                        </p>
                                        <p className="text-base opacity-70 leading-loose md:leading-loose mb-10 w-[95%]">
                                            From market research assistants to workflow automation and opportunity finders, these tools will be built to remove guesswork, save time, and amplify what you do best.
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
                                    <div className="py-5 px-6 flex flex-col border-2 rounded-lg border-solid border-[#EBEBEB]">
                                        <div onClick={() => setCurrentValuesView(0)}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className="font-medium text-base">What makes Wired Wits reports different from others I can find online?</h3>
                                            {
                                                currentValuesView === 0 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                            }
                                        </div>
                                        <div className={`values-text ${currentValuesView === 0 ? 'show-text pt-5' : ''}`}>
                                            <p className="text-base leading-loose md:leading-loose">
                                                Our reports are powered by advanced AI trained to surface strategic, practical insights faster and more affordably than traditional research. Each one is crafted to help real people make confident business decisions without drowning in jargon or fluff. We focus on clarity, opportunity, and action.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-5 px-6 flex flex-col border-2 rounded-lg border-solid border-[#EBEBEB]">
                                        <div onClick={() => setCurrentValuesView(1)}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className="font-medium text-base">Can these tools really help my neighborhood or community?</h3>
                                            {
                                                currentValuesView === 1 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                            }
                                        </div>
                                        <div className={`values-text ${currentValuesView === 1 ? 'show-text pt-5' : ''}`}>
                                            <p className="text-base leading-loose md:leading-loose">
                                                AI can accelerate insight, but it shouldn't replace your judgment. That&apos;s why we&apos;re transparent about what AI can (and can&apos;t) do. Our reports are designed to guide your decision-making providing clear data, highlighting risks, and offering direction. We always recommend validating key info and using our tools as a trusted co-pilot, not a final authority
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-5 px-6 flex flex-col border-2 rounded-lg border-solid border-[#EBEBEB]">
                                        <div onClick={() => setCurrentValuesView(2)}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className="font-medium text-base">Will you offer more than just reports in the future?</h3>
                                            {
                                                currentValuesView === 2 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                            }
                                        </div>
                                        <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5' : ''}`}>
                                            <p className="text-base leading-loose md:leading-loose">
                                                Yes. Our roadmap includes AI-powered tools and business agents designed to simplify growth, automate tasks, and uncover hidden opportunities. We&apos;re building apps that give small teams the kind of edge that was once only available to big companies. With affordability and ease-of-use at the core. We&apos;re genuinely excited about what&apos;s coming and can&apos;t wait to share more when the time is right.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="py-5 px-6 flex flex-col border-2 rounded-lg border-solid border-[#EBEBEB]">
                                        <div onClick={() => setCurrentValuesView(3)}
                                            className="flex items-center justify-between cursor-pointer">
                                            <h3 className="font-medium text-base">How does this fit into the bigger Quality of Life Ecosystem?</h3>
                                            {
                                                currentValuesView === 3 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                            }
                                        </div>
                                        <div className={`values-text ${currentValuesView === 3 ? 'show-text pt-5' : ''}`}>
                                            <p className="text-base leading-loose md:leading-loose">
                                                Business Empowerment is one pillar of our broader mission to make life work better for everyone. Together with Everyday AI and Public Good, we&apos;re creating tools that reduce overwhelm, increase opportunity, and put power back in your hands. Because we believe your ideas and your quality of life shouldn&apos;t be limited by your resources.
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