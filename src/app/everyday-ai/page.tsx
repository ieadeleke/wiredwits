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
import HomeHero from "@/assets/images/home-hero.jpg";
import Everyday from "@/assets/images/everyday.jpg";
import { TiPlus } from "react-icons/ti";
import { BiMinus } from "react-icons/bi";




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
                        <div className="md:w-[90%] mx-auto gap-20 py-32 md:pt-36 pb-16">
                            <div className="px-5 md:px-0 md:w-[70%] mx-auto">
                                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                                    <h4 className="text-[#9747FF] font-medium text-xs md:text-sm">AI That Works for Everyone</h4>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 leading-relaxed md:leading-tight">
                                    Smarter Living. <br /> Stronger Together
                                </h1>
                                <p className="text-sm md:text-base text-[#111111b3] leading-loose md:leading-loose mb-7 md:w-[70%] mx-auto">
                                    We&apos;re building AI tools for real life designed to stretch your resources, ease your day-to-day, and help communities thrive together. From saving money to sharing more, these tools are made for the moments that matter most.
                                </p>
                                <div className="flex gap-4 mx-auto mb-10 w-max">
                                    <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Create Account</Link>
                                    <Link href="/contact-us" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-28 mt-10 md:mt-24 max-w-[1500px] mx-auto">
                        <div className="">
                            <h3 className="text-center text-2xl md:text-4xl mb-2 md:mb-3 font-bold">
                                Live Smarter. Thrive Together.
                            </h3>
                            <p className="text-sm md:text-base text-center md:w-[50%] mb-8 mx-auto leading-loose md:leading-loose font-mediu opacity-80">
                                We believe technology should lift people up not wear them down. Our Everyday AI tools are built to help you stretch your dollars, share what you have, and build stronger communities that can weather hard times together
                            </p>
                        </div>
                        <Image src={Everyday} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-full rounded-lg object-fit object-cover" />
                        <div className="text-center md:text-left flex flex-col md:grid grid-cols-3 gap-5 md:gap-10 items-center mt-7">
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-1 md:mb-3">Spend Less. Stress Less</p>
                                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                                    AI-Powered Budgeting Tools.
                                </h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    Track spending, spot waste, and find ways to stretch your dollars further. Simple tools designed to bring you more clarity and breathing room.
                                </p>
                            </div>
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-1 md:mb-3">Share More. Build Together.</p>
                                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                                    Smarter Community Tools</h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    Create co-ops to share tools, childcare, meals, and more. These AI-powered tools help turn good intentions into resilient support systems.
                                </p>
                            </div>
                            <div className="w-full h-full rounded-xl md:px-5 pt-5">
                                <p className="text-xs uppercase font-medium opacity-60 mb-1 md:mb-3">Trade Smarter. Stay Local.</p>
                                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                                    AI-Driven Barter & Exchange Networks</h4>
                                <p className="text-sm md:text-sm leading-loose md:leading-loose opacity-80">
                                    Swap goods, services, or time. Whether it&apos;s tutoring for lawn care or produce for repairs, our tools help local barter thrive with trust built in.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-28 py-24 mt-24 md:mt-24 bg-[#F5F3FF]">
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
                            <div className="w-full h-[.2rem] bg-[#3b3b3b1f] mt-20"></div>
                        </div>
                        <section className="pt-20 md:pt-24">
                            <div className="flex flex-col md:flex-row md:gri grid-cols-2 gap-10 md:gap-16">
                                <div className="md:w-[500px]">
                                    <div className="text-center md:text-left">
                                        <p className="text-xs uppercase font-medium opacity-60 mb-3 md:mb-4">Frequently asked questions</p>
                                        <h3 className="text-3xl md:text-4xl mb-3 font-bold w-[70%] leading-[1.4] md:leading-[1.6]">
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
                                        <div className={`py-6 flex flex-col px-2 rounded-lg ${currentValuesView === 0 ? 'bg-[#F9F9FB]' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(0)}
                                                className={`flex items-center justify-between cursor-pointer px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-lg">Who are these tools for?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 0 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 0 ? 'show-text pt-5 px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    Wired Wits is for everyday people who want to take back control—of their time, their choices, and their understanding of the world.
                                                    Whether you're a small business owner, a concerned citizen, a side hustler, or someone just trying to make sense of today&apos;s chaos, our tools are built to meet you where you are.
                                                    {/* You don&apos;t need to be a tech expert or policy wonk. You just need curiosity and the desire to make better decisions in your life, business, or community. */}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col px-2 rounded-lg ${currentValuesView === 1 ? 'bg-[#F9F9FB]' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(1)}
                                                className={`flex items-center justify-between cursor-pointer px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-lg">Why do you call Wired Wits a &apos;Quality of Life&apos; platform?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 1 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 1 ? 'show-text pt-5 px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    Because everything we build is designed to protect and improve the ecosystem that supports human dignity, freedom, and growth.
                                                    That ecosystem is under pressure, from misinformation, unchecked greed, misused technology, and dysfunctional governance. These aren&apos;t partisan problems. They&apos;re structural threats that affect everyone.
                                                    Our mission is to give people the tools to navigate this landscape with more clarity, more ownership, and more opportunity, so we can all thrive.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col px-2 rounded-lg ${currentValuesView === 2 ? 'bg-[#F9F9FB]' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(2)}
                                                className={`flex items-center justify-between cursor-pointer px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-lg">How can I get involved?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 2 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5 px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    We love that you're asking.
                                                    There are so many ways people have told us they want to be part of this, from signing up for updates to offering skills, support, or partnership ideas. Some want to follow along. Some want to help fund the mission. Others want to build with us.
                                                    Wherever you fall on that spectrum, we&apos;re here for it.
                                                    We&apos;re still early in our journey, which means we can&apos;t say yes to everything (yet). But knowing what you&apos;re excited about helps us grow in the right direction, together.
                                                    Use our [Feedback Hub] to tell us what you're interested in, and we'll keep you in the loop as opportunities grow.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`py-6 flex flex-col px-2 rounded-lg ${currentValuesView === 3 ? 'bg-[#F9F9FB]' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                                            <div onClick={() => setCurrentValuesView(2)}
                                                className={`flex items-center justify-between cursor-pointer px-4 rounded-xl faq-header`}>
                                                <h3 className="font-bold text-lg">How do the Wired Wits pillars work together?</h3>
                                                <div className="size-8 rounded-full flex items-center justify-center bg-black">
                                                    {
                                                        currentValuesView === 2 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                                                    }
                                                </div>
                                            </div>
                                            <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5 px-5' : ''}`}>
                                                <p className="text-sm opacity-80 leading-loose md:leading-loose">
                                                    Life doesn&apos;t happen in silos, and we don&apos;t build tools that way either. Yes, I can see contradiction there also, but hear us out
                                                    Wired Wits is a Quality of Life platform because we believe every part of life affects the whole: how we stay informed, how we earn a living, and how we manage our time, money, and mental load. Each of our three pillars is designed to meet a different need, but they all work together to help you thrive.
                                                </p>
                                            </div>
                                        </div>
                                        {/* <div className="py-5 px-3 md:px-4 flex flex-col border-2 rounded-xl border-solid border-[#EBEBEB border-[#F5F3FF] border border-black border-solid py-5">
                                            <div onClick={() => setCurrentValuesView(1)}
                                              className={`flex items-center justify-between cursor-pointer faq-header ${currentValuesView === 1 ? 'bg-style' : ''}`}>
                                              <h3 className="font-bold text-lg">Why do you call Wired Wits a “Quality of Life” platform?</h3>
                                              {
                                                currentValuesView === 1 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                              }
                                            </div>
                                            <div className={`values-text bg-white ${currentValuesView === 1 ? 'show-text pt-5' : ''}`}>
                                              <p className="text-sm leading-loose md:leading-loose">
                                                Because everything we build is designed to protect and improve the ecosystem that supports human dignity, freedom, and growth.
                                                That ecosystem is under pressure, from misinformation, unchecked greed, misused technology, and dysfunctional governance. These aren&apos;t partisan problems. They&apos;re structural threats that affect everyone.
                                                Our mission is to give people the tools to navigate this landscape with more clarity, more ownership, and more opportunity, so we can all thrive.
                                              </p>
                                            </div>
                                          </div>
                                          <div className="py-5 px-3 md:px-4 flex flex-col border-2 rounded-xl border-solid border-[#EBEBEB border-[#F5F3FF] bg-[#F5F3FF]">
                                            <div onClick={() => setCurrentValuesView(2)}
                                              className={`flex items-center justify-between cursor-pointer faq-header ${currentValuesView === 2 ? 'bg-style' : ''}`}>
                                              <h3 className="font-bold text-lg">How can I get involved?</h3>
                                              {
                                                currentValuesView === 2 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                              }
                                            </div>
                                            <div className={`values-text bg-white ${currentValuesView === 2 ? 'show-text pt-5' : ''}`}>
                                              <p className="text-sm leading-loose md:leading-loose">
                                                We love that you're asking.
                                                There are so many ways people have told us they want to be part of this, from signing up for updates to offering skills, support, or partnership ideas. Some want to follow along. Some want to help fund the mission. Others want to build with us.
                                                Wherever you fall on that spectrum, we&apos;re here for it.
                                                We&apos;re still early in our journey, which means we can&apos;t say yes to everything (yet). But knowing what you&apos;re excited about helps us grow in the right direction, together.
                                                Use our [Feedback Hub] to tell us what you're interested in, and we'll keep you in the loop as opportunities grow.
                                              </p>
                                            </div>
                                          </div> */}
                                        {/* <div className="py-5 px-3 md:px-4 flex flex-col border-2 rounded-xl border-solid border-[#EBEBEB border-[#F5F3FF] bg-[#F5F3FF]">
                                            <div onClick={() => setCurrentValuesView(3)}
                                              className={`flex items-center justify-between cursor-pointer faq-header ${currentValuesView === 3 ? 'bg-style' : ''}`}>
                                              <h3 className="font-medium text-base">How do the Wired Wits pillars work together?</h3>
                                              {
                                                currentValuesView === 3 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                              }
                                            </div>
                                            <div className={`values-text bg-white ${currentValuesView === 3 ? 'show-text pt-5' : ''}`}>
                                              <p className="text-sm leading-loose md:leading-loose">
                                                Life doesn&apos;t happen in silos, and we don&apos;t build tools that way either. Yes, I can see contradiction there also, but hear us out
                                                Wired Wits is a Quality of Life platform because we believe every part of life affects the whole: how we stay informed, how we earn a living, and how we manage our time, money, and mental load. Each of our three pillars is designed to meet a different need, but they all work together to help you thrive.
                                              </p>
                                            </div>
                                          </div>
                                          <div className="py-5 px-3 md:px-4 flex flex-col border-2 rounded-xl border-solid border-[#EBEBEB border-[#F5F3FF] bg-[#F5F3FF]">
                                            <div onClick={() => setCurrentValuesView(4)}
                                              className={`flex items-center justify-between cursor-pointer faq-header ${currentValuesView === 4 ? 'bg-style' : ''}`}>
                                              <h3 className="font-medium text-base">What kind of future is Wired Wits working toward?</h3>
                                              {
                                                currentValuesView === 4 ? <FaAngleDown className="text-xl" /> : <IoIosArrowForward className="text-xl" />
                                              }
                                            </div>
                                            <div className={`values-text bg-white ${currentValuesView === 4 ? 'show-text pt-5' : ''}`}>
                                              <p className="text-sm leading-loose md:leading-loose">
                                                We&apos;re building toward a future where opportunity isn&apos;t reserved for the few and truth isn&apos;t something you have to fight for.
                                                A future where more people feel secure, not threatened. Empowered, not overwhelmed. Where doors that were once closed start to open because people finally have the tools to walk through them.
                                              </p>
                                            </div>
                                          </div> */}
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