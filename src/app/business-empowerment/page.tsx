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
import Everyday from "@/assets/images/business.jpg";
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
                                <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 leading-relaxed md:leading-tight">
                                    Validate smarter. <br /> Build faster. Own your future.
                                </h1>
                                <p className="text-sm md:text-base text-[#111111b3] leading-loose md:leading-loose mb-7 md:w-[80%] mx-auto">
                                    Turn insight into action with research-backed, AI-powered reports and tools that help you launch with confidence. No fluff. No guesswork. Just clarity, strategy, and momentum.
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
                            <h3 className="text-center text-2xl md:text-4xl mb-2 md:mb-3 font-bold w-[80%] md:w-[35%] leading-relaxed md:leading-normal mx-auto">
                                Smart AI tools to turn your ideas into action
                            </h3>
                            <p className="text-sm md:text-base text-center md:w-[50%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                                Starting a business shouldn&apos;t mean starting from scratch. Our Business Empowerment tools use advanced AI to distill complex data into clear, strategic reports giving you the edge without the overwhelm.
                            </p>
                        </div>
                        <Image src={Everyday} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-full rounded-lg object-fit object-cover" />
                        <div className="text-center md:text-left flex flex-col md:grid grid-cols-3 gap-5 md:gap-10 items-center mt-7">
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Start Smart</p>
                                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                                    Free AI-Powered Industry Snapshots
                                </h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    Explore fast-growing industries with AI-powered snapshots. Quickly spot trends, challenges, and opportunities so you can move forward with clarity, not confusion
                                </p>
                            </div>
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Go Deeper</p>
                                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                                    Full Industry Reports</h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    Take the next step with in-depth reports on trends, market gaps, business models, and consumer demand, all analyzed by AI and packed into actionable insights
                                </p>
                            </div>
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Launch Smarter</p>
                                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                                    Business Guides & Custom Reports</h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    Move from idea to action with step-by-step AI-generated guides or go deeper with custom reports tailored to your specific business. Smart, strategic, and built for your goals.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-28 py-24 mt-24 md:mt-24 bg-[#F5F3FF]">
                        <div>
                            <h3 className="text-2xl md:text-4xl leading-snug font-bold">
                                Clarity for Your Ideas
                            </h3>
                            <div className="mt-5 md:mt-10 flex flex-col md:grid grid-cols-3 gap-5 md:gap-10">
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB] flex items-center justify-center">
                                        <RiUserCommunityLine className="text-4xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium md:font-[400] text-lg md:text-xl mb-3">
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
                                        <h4 className="font-medium md:font-[400] text-lg md:text-xl mb-3">
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
                                        <h4 className="font-medium md:font-[400] text-lg md:text-xl mb-3">
                                            Decide with Confidence
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                            You&apos;ll walk away with clear, strategic recommendations so you can move forward, pivot smartly, or rethink without second-guessing.
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
                                                <h3 className="font-bold text-base md:text-lg">What makes Wired Wits reports different from others I can find online?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 0 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 0 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    Our reports are powered by advanced AI trained to surface strategic, practical insights faster and more affordably than traditional research. Each one is crafted to help real people make confident business decisions without drowning in jargon or fluff. We focus on clarity, opportunity, and action.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 1 ? 'bg-[#F9F9FB' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(1)}
                                                className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-base md:text-lg w-[70%] md:w-full">Can I trust AI-generated reports to make major business decisions?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 1 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 1 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    AI can accelerate insight, but it shouldn't replace your judgment. That&apos;s why we&apos;re transparent about what AI can (and can&apos;t) do. Our reports are designed to guide your decision-making providing clear data, highlighting risks, and offering direction. We always recommend validating key info and using our tools as a trusted co-pilot, not a final authority.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 2 ? 'bg-[#F9F9FB' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(2)}
                                                className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-base md:text-lg">Will you offer more than just reports in the future?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 2 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    Yes. Our roadmap includes AI-powered tools and business agents designed to simplify growth, automate tasks, and uncover hidden opportunities. We&apos;re building apps that give small teams the kind of edge that was once only available to big companies. With affordability and ease-of-use at the core. We&apos;re genuinely excited about what&apos;s coming and can&apos;t wait to share more when the time is right.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 3 ? 'bg-[#F9F9FB' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(3)}
                                                className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-base md:text-lg w-[70%] md:w-full">How does this fit into the bigger Quality of Life Ecosystem?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 3 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    Business Empowerment is one pillar of our broader mission to make life work better for everyone. Together with Everyday AI and Public Good, we&apos;re creating tools that reduce overwhelm, increase opportunity, and put power back in your hands. Because we believe your ideas and your quality of life shouldn&apos;t be limited by your resources.
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