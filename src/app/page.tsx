'use client';

import DisplayLayout from "@/components/layout/layout";
// import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import GlobeImg from "@/assets/images/globe.png";
import EmpowerImg from "@/assets/images/empower.png";
import HomeHero from "@/assets/images/home-hero.jpg";
import { GoArrowRight } from "react-icons/go";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TiPlus } from "react-icons/ti";
import { BiMinus } from "react-icons/bi";
import FallingBlocks from "@/components/hero";
import { FaBrain } from "react-icons/fa";
import { GiTreeRoots } from "react-icons/gi";
import { TbBorderSides } from "react-icons/tb";
import { MdOutlineFlightClass } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiChalkboardTeacherBold } from "react-icons/pi";


export default function Home() {

  const [currThirdView, setCurrThirdView] = useState<string>('thrive-money');
  const [currentValuesView, setCurrentValuesView] = useState<number>(0);


  return (
    <div>
      <DisplayLayout>
        <>
          {/* <div className="new-hero relative overflow-hidden">
            <div className="md:w-[55%] z-40 relative pt-36 pb-20 md:pt-36 md:pb-28 px-5 md:px-0 mx-auto text-center">
              <div className="glass-card w-max px-6 py-3 mx-auto rounded-lg font-medium mb-6">
                <h4 className="text-sm">
                  AI That Works for Everyone
                </h4>
              </div>
              <h1 className="text-3xl md:text-[52px] w- [80%] mx-auto tracking-normal font-bol mb-4 leading-[1.4] md:leading-[1.4] font-bold black">
                Smarter Tools. Clearer Truth. Bigger Possibilities
              </h1>
              <p className="text-sm md:text-base text-white opacity-80 [#111111b3] leading-loose md:leading-loose mb-10 md:w-[75%] mx-auto">
                Explore AI made for everyday people, dreamers, and doers. From decoding the news to building your next big thing, this is just the beginning.
              </p>
              <div className="flex gap-4 mx-auto mb-10 w-max">
                <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-10 rounded-lg text-sm font-medium">Get Started</Link>
                <Link href="/contact-us" className="bg-white text-black py-4 px-10 rounded-lg text-sm font-medium">Contact Us</Link>
              </div>
            </div>
            <div className="hero-noise">
            </div>
          </div> */}
          <FallingBlocks />
          <section className="px-5 md:px-28 mt-10 md:mt-24 max-w-[1500px] mx-auto">
            <div className="md:w-[65%] mx-auto mt-20 mb-7 text-center">
              <h3 className="text-2xl md:text-4xl mb-2 md:mb-5 font-[600]">
                We&apos;re Not Just Building Tools.
              </h3>
              <h3 className="text-2xl md:text-4xl mb-3 md:mb-6 font-[600]">
                We&apos;re Building a Better Way to Live.
              </h3>
              <p className="text-sm md:text-base mb-3 md:mb-5 leading-[2.1] md:leading-[2.1] opacity-80 md:w-[90%] mx-auto">
                Wired Wits is a platform of AI-powered solutions designed to improve your quality of life intellectually, economically, and emotionally. Our tools span three pillars:
              </p>
            </div>
            <img alt="dashboard" src={HomeHero.src} className="w-full h-full rounded-lg" />
            <div className="mt-8 mb-3 md:mb-10 text-center">
              <p className="md:w-[50%] text-base md:text-lg font-medium mx-auto leading-loose md:leading-loose hidden md:block">
                Each product serves a specific need. Together, they form a connected ecosystem to help people think clearly, build freely, and live more securely no matter where they&apos;re starting from.
              </p>
            </div>
            <div className="text-center md:text-left flex flex-col md:grid grid-cols-3 gap-5 md:gap-10 items-center mt-5 md:mt-7">
              <div className="w-full h-full rounded-xl md:px-5 pt-3">
                <div>
                  <FaSquareArrowUpRight className="mb-4 text-3xl block md:hidden md:text-2xl md:w-max md:w-auto mx-auto md:ml-0" />
                </div>
                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Public good</p>
                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                  {/* Bias & Emotion Detection */}
                  Truth, Transparency & Accountability
                </h4>
                <p className="text-sm md:text-base leading-loose md:leading-loose opacity-80">
                  Cut through the noise with tools that challenge bias, expose spin and help you make sense of the world on your terms
                  {/* Spot language that may be emotionally charged or potentially biased. We highlight these flags to support critical thinking, not to label or judge. */}
                </p>
              </div>
              <div className="w-full h-full rounded-xl md:px-5 pt-3">
                <div>
                  <FaSquareArrowUpRight className="mb-4 text-3xl block md:hidden md:text-2xl md:w-max md:w-auto mx-auto md:ml-0" />
                </div>
                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Business empowerment</p>
                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                  For strategy and ownership
                </h4>
                <p className="text-sm md:text-base leading-loose md:leading-loose opacity-80">
                  Turn your ideas into reality with reports, insights, and future ready tools built for everyday enterpreneurs
                  {/* Curious about the bigger picture? Ask follow-up questions and get clear, AI-powered answers with historical context, different viewpoints, or. */}
                </p>
              </div>
              <div className="w-full h-full rounded-xl md:px-5 pt-3">
                <div>
                  <FaSquareArrowUpRight className="mb-4 text-3xl block md:hidden md:text-2xl md:w-max md:w-auto mx-auto md:ml-0" />
                </div>
                <p className="text-xs uppercase font-medium opacity-60 mb-2 md:mb-3">Everyday AI</p>
                <h4 className="mb-2 md:mb-2 font-[600] text-base md:text-lg">
                  For life&apos;s day-to-day demand
                </h4>
                <p className="text-sm md:text-base leading-loose md:leading-loose opacity-80">
                  Use tech to thrive, not just survive. From budgeting to barter, our tools help real people simplify and strengthen their lives
                  {/* No more one-size-fits-all. Get quick, clean breakdowns of any article tailored to your preferred reading style. Jargon? Conversational language? */}
                </p>
              </div>
              {/* <div className="w-full h-full rounded-xl px-5 pt-5">
                <div>
                  <FaSquareArrowUpRight className="mb-4 text-4xl md:text-2xl w-max md:w-auto mx-auto md:ml-0" />
                </div>
                <h4 className="mb-2 md:mb-2 font-[600] text-lg">
                  Built-In Fact-Check Prompts
                </h4>
                <p className="text-sm md:text-base leading-loose md:leading-loose opacity-80">
                  Get quick suggestions for what to double-check and where to look when context is missing or a claim doesn&apos;t sit right. It&apos;s your shortcut to smarter scrutiny.
                </p>
              </div> */}
            </div>
          </section>
          {/* <section className="px-5 md:px-28 mt-20 md:mt-28 bg-[#F5F3FF] py-16 md:py-24">
            <h3 className="text-center text-3xl md:text-4xl leading-[1.4] md:leading-[1.5] mb-2 md:mb-4 font-bold">
              Start With One Tool. <br /> Grow With the Platform
            </h3>
            <p className="text-sm md:text-base text-center md:w-[60%] mb-6 mx-auto leading-loose md:leading-loose font-medium">
              Wired Wits is building a suite of AI-powered tools to help you in all aspects of your life.
            </p>
            <div className="grid grid-cols-3 gap-10 mt-7">
              <div
                onClick={() => setCurrThirdView('thrive-money')}
                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-money' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                <p className="text-s font-mediu opacity-80 text-[15px]">Public Good</p>
              </div>
              <div
                onClick={() => setCurrThirdView('thrive-resources')}
                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-resources' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                <p className="text-s font-mediu opacity-80 text-[15px]">Business Empowerment</p>
              </div>
              <div
                onClick={() => setCurrThirdView('thrive-goods')}
                className={`px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] ${currThirdView === 'thrive-goods' ? 'bg-[#EFF1F3]' : ''} cursor-pointer text-center`}>
                <p className="text-s font-mediu opacity-80 text-[15px]">Everyday AI</p>
              </div>
            </div><>
              {
                currThirdView === 'thrive-money' ?
                  <div className="flex flex-col-reverse md:grid grid-cols-2 gap-4 md:gap-8 mt-9 items-center">
                    <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-6 md:py-16 px-5 md:px-16 flex justify-between flex-col">
                      <div>
                        <h3 className="text-xl md:text-3xl [42px] mb-1 md:mb-3 leading-[1.6] font-bold">
                          See clearly. <br /> Think smarter. Demand Truth.
                        </h3>
                        <p className="text-sm md:text-base font-mediu leading-loose md:leading-loose mb-4">
                          Cut through the spin, surface what matters, and challenge bias with tools built for clarity. Whether you're reading the news, digging into policy, or holding power accountable, we help you think for yourself, not by yourself.
                        </p>
                      </div>
                      <Link href="/auth/signup" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                        <GoArrowUpRight className="text-xl md:text-2xl" /></Link>
                    </div>
                    <Image src={EmpowerImg} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-[30rem]" />
                  </div> :
                  currThirdView === 'thrive-resources' ?
                    <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                      <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                        <div>
                          <h3 className="text-2xl [42px] leading-[1.6] mb-3 leading-snug font-bold">
                            Build smarter. Move faster
                          </h3>
                          <p className="text-base font-mediu leading-loose mb-4">
                            Turn ideas into action with AI tools that validate, analyze, and guide your next move. From market research to growth strategies, we give you the clarity and speed to own your future.
                          </p>
                        </div>
                        <Link href="/auth/signup" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                          <GoArrowUpRight className="text-xl md:text-2xl" /></Link>
                      </div>
                      <Image src={EmpowerImg} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-[30rem]" />
                    </div>
                    :
                    <div className="grid grid-cols-2 gap-8 mt-9 items-center">
                      <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                        <div>
                          <h3 className="text-2xl [42px] leading-[1.6] mb-3 leading-snug font-bold">
                            Live Smarter. <br /> Thrive Together.
                          </h3>
                          <p className="text-base font-mediu leading-loose mb-4">
                            Use AI to make daily life a little easier and a lot more connected. Save money, reduce stress, and strengthen your community with tools designed to help you do more with what you already have
                          </p>
                        </div>
                        <Link href="/auth/signup" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Create Account
                          <GoArrowUpRight className="text-xl md:text-2xl" /></Link>
                      </div>
                      <Image src={EmpowerImg} alt="dashboard" quality={100} height={1000} width={1000} className="w-full h-[30rem]" />
                    </div>
              }
            </>
          </section> */}
          <section className="extra-props-her relative bg-[#F5F3FF] py-20 md:py-24 mt-20 md:mt-24">
            {/* <div className="hero-noise"></div> */}
            <div className="px-5 md:px-24">
              <h2 className="text-xl md:text-4xl font-bold text-left md:text-left md:w-[90%] mb-7 leading-loose md:leading-normal">
                Our flagship tool, Wits Newsroom, helps you read smarter, ask better questions, and reclaim clarity on your terms.
              </h2>
              <div className="flex flex-col gap-5 md:grid grid-cols-3 md:gap-10">
                <div className="border-2 border-solid border-[#e5e5e5] bg-[#fff] rounded-lg py-5 px-5">
                  <div className="size-16 rounded-lg mb-14 bg-[#EAEAEA] [#8267E2] flex items-center justify-center">
                    <MdOutlineFlightClass className="text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-black text-base md:text-xl font-medium mb-3">Ask Smarter Questions</h4>
                  <p className="text-sm md:text-base text-black leading-loose md:leading-loose">
                    Dig deeper than headlines. Ask follow-ups to get context, history, and multiple angles on any story.
                  </p>
                </div>
                <div className="border-2 border-solid border-[#e5e5e5] bg-[#fff] rounded-lg py-5 px-5">
                  <div className="size-16 rounded-lg mb-14 bg-[#EAEAEA] [#8267E2] flex items-center justify-center">
                    <FaMagnifyingGlass className="text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-black text-base md:text-xl font-medium mb-3">Spot Spin Fast</h4>
                  <p className="text-sm md:text-base text-black leading-loose md:leading-loose">
                    Catch emotionally charged language and bias triggers instantly so you can focus on what&apos;s actually being said.
                  </p>
                </div>
                <div className="border-2 border-solid border-[#e5e5e5] bg-[#fff] rounded-lg py-5 px-5">
                  <div className="size-16 rounded-lg mb-14 bg-[#EAEAEA] [#8267E2] flex items-center justify-center">
                    <TbBorderSides className="text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-black text-base md:text-xl font-medium mb-3">See all Sides</h4>
                  <p className="text-sm md:text-base text-black leading-loose md:leading-loose">
                    View how the same issue is covered across different outlets, regions, or perspectives—side by side.
                  </p>
                </div>
                <div className="border-2 border-solid border-[#e5e5e5] bg-[#fff] rounded-lg py-5 px-5">
                  <div className="size-16 rounded-lg mb-14 bg-[#EAEAEA] [#8267E2] flex items-center justify-center">
                    <GiTreeRoots className="text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-black text-base md:text-xl font-medium mb-3">Understand the Roots</h4>
                  <p className="text-sm md:text-base text-black leading-loose md:leading-loose">
                    Don&apos;t just react. Trace events back to their origins and understand the full story before you form an opinion.
                  </p>
                </div>
                <div className="border-2 border-solid border-[#e5e5e5] bg-[#fff] rounded-lg py-5 px-5">
                  <div className="size-16 rounded-lg mb-14 bg-[#EAEAEA] [#8267E2] flex items-center justify-center">
                    <PiChalkboardTeacherBold className="text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-black text-base md:text-xl font-medium mb-3">Make It Make Sense</h4>
                  <p className="text-sm md:text-base text-black leading-loose md:leading-loose">
                    From legal jargon to policy details, get personalized summaries that explain complex topics in plain language.
                  </p>
                </div>
                <div className="border-2 border-solid border-[#e5e5e5] bg-[#fff] rounded-lg py-5 px-5">
                  <div className="size-16 rounded-lg mb-14 bg-[#EAEAEA] [#8267E2] flex items-center justify-center">
                    <FaBrain className="text-xl md:text-2xl" />
                  </div>
                  <h4 className="text-black text-base md:text-xl font-medium mb-3">Think for Yourself</h4>
                  <p className="text-sm md:text-base text-black leading-loose md:leading-loose">
                    This isn&apos;t about telling you what to believe. It&apos;s about giving you the tools to decide on your own terms.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-12">
                <Link href="/public-good" className="w-max py-5 px-8 text-sm bg-primary rounded-lg text-sm text-white">Check out Wits Newsroom</Link>
              </div>
            </div>
          </section>
          <section className="px-5 md:px-28 pt-20 md:pt-24">
            <div className="flex flex-col md:flex-row md:gri grid-cols-2 gap-10 md:gap-16">
              <div className="md:w-[500px]">
                <div className="text-center md:text-left">
                  <p className="text-xs uppercase font-medium opacity-60 mb-3 md:mb-3">Frequently asked questions</p>
                  <h3 className="text-3xl md:text-4xl mb-3 font-bold md:w-[70%] leading-[1.4] md:leading-[1.4]">
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
                  <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 0 ? 'bg-[#F9F9FB]' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                    <div onClick={() => setCurrentValuesView(0)}
                      className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                      <h3 className="font-bold text-base md:text-lg">Who are these tools for?</h3>
                      <div className="size-8 rounded-full flex items-center justify-center bg-black">
                        {
                          currentValuesView === 0 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                        }
                      </div>
                    </div>
                    <div className={`values-text ${currentValuesView === 0 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                      <p className="text-sm opacity-80 leading-loose md:leading-loose">
                        Wired Wits is for everyday people who want to take back control—of their time, their choices, and their understanding of the world.
                        Whether you're a small business owner, a concerned citizen, a side hustler, or someone just trying to make sense of today&apos;s chaos, our tools are built to meet you where you are.
                        {/* You don&apos;t need to be a tech expert or policy wonk. You just need curiosity and the desire to make better decisions in your life, business, or community. */}
                      </p>
                    </div>
                  </div>
                  <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 1 ? 'bg-[#F9F9FB]' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                    <div onClick={() => setCurrentValuesView(1)}
                      className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                      <h3 className="font-bold text-base md:text-lg w-[70%] md:w-full">Why do you call Wired Wits a &apos;Quality of Life&apos; platform?</h3>
                      <div className="size-8 rounded-full flex items-center justify-center bg-black">
                        {
                          currentValuesView === 1 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                        }
                      </div>
                    </div>
                    <div className={`values-text ${currentValuesView === 1 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                      <p className="text-sm opacity-80 leading-loose md:leading-loose">
                        Because everything we build is designed to protect and improve the ecosystem that supports human dignity, freedom, and growth.
                        That ecosystem is under pressure, from misinformation, unchecked greed, misused technology, and dysfunctional governance. These aren&apos;t partisan problems. They&apos;re structural threats that affect everyone.
                        Our mission is to give people the tools to navigate this landscape with more clarity, more ownership, and more opportunity, so we can all thrive.
                      </p>
                    </div>
                  </div>
                  <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 2 ? 'bg-[#F9F9FB]' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                    <div onClick={() => setCurrentValuesView(2)}
                      className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                      <h3 className="font-bold text-base md:text-lg">How can I get involved?</h3>
                      <div className="size-8 rounded-full flex items-center justify-center bg-black">
                        {
                          currentValuesView === 2 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                        }
                      </div>
                    </div>
                    <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                      <p className="text-sm opacity-80 leading-loose md:leading-loose">
                        We love that you're asking.
                        There are so many ways people have told us they want to be part of this, from signing up for updates to offering skills, support, or partnership ideas. Some want to follow along. Some want to help fund the mission. Others want to build with us.
                        Wherever you fall on that spectrum, we&apos;re here for it.
                        We&apos;re still early in our journey, which means we can&apos;t say yes to everything (yet). But knowing what you&apos;re excited about helps us grow in the right direction, together.
                        Use our [Feedback Hub] to tell us what you're interested in, and we'll keep you in the loop as opportunities grow.
                      </p>
                    </div>
                  </div>
                  <div className={`py-6 flex flex-col md:px-2 rounded-lg ${currentValuesView === 3 ? 'bg-[#F9F9FB]' : 'border-[0.05px] border-solid border-[#3b3b3b1f]'}`}>
                    <div onClick={() => setCurrentValuesView(2)}
                      className={`flex items-center justify-between cursor-pointer gap-5 px-3 md:px-4 rounded-xl faq-header`}>
                      <h3 className="font-bold text-base md:text-lg w-[70%] md:w-full">How do the Wired Wits pillars work together?</h3>
                      <div className="size-8 rounded-full flex items-center justify-center bg-black">
                        {
                          currentValuesView === 2 ? <BiMinus className="text-lg text-white" /> : <TiPlus className="text-lg text-white" />
                        }
                      </div>
                    </div>
                    <div className={`values-text ${currentValuesView === 2 ? 'show-text pt-5 px-3 md:px-5' : ''}`}>
                      <p className="text-sm opacity-80 leading-loose md:leading-loose">
                        Life doesn&apos;t happen in silos, and we don&apos;t build tools that way either. Yes, I can see contradiction there also, but hear us out
                        Wired Wits is a Quality of Life platform because we believe every part of life affects the whole: how we stay informed, how we earn a living, and how we manage our time, money, and mental load. Each of our three pillars is designed to meet a different need, but they all work together to help you thrive.
                      </p>
                    </div>
                  </div>
                  {/* <div className="py-5 px-3 md:px-4 flex flex-col border-2 rounded-xl border-solid border-[#EBEBEB border-[#F5F3FF] border border-black border-solid py-5">
                    <div onClick={() => setCurrentValuesView(1)}
                      className={`flex items-center justify-between cursor-pointer faq-header ${currentValuesView === 1 ? 'bg-style' : ''}`}>
                      <h3 className="font-bold text-base md:text-lg">Why do you call Wired Wits a “Quality of Life” platform?</h3>
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
                      <h3 className="font-bold text-base md:text-lg">How can I get involved?</h3>
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
        </>
      </DisplayLayout>
    </div>
  );
}
