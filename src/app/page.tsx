import DisplayLayout from "@/components/layout/layout";
// import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import GlobeImg from "@/assets/images/globe.png";
import { GoArrowRight } from "react-icons/go";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";



export default function Home() {
  return (
    <div>
      <DisplayLayout>
        <>
          <section className="main-her pt-36 bg-[#F9F7FF] h-scree text-center relative overflow-hidden">
            <div className="w-[60%] mx-auto">
              <h2 className="text-6xl mb-4 font-bold leading-[1.1]">
                AI-powered personalized outreach at scale.
              </h2>
              <p className="text-base w-[80%] mb-6 mx-auto leading-loose md:leading-loose font-medium">
                Deeply research and target customers who actually care about your product—whether building your TAM from scratch or nurturing a list of named accounts.
              </p>
              <Link href="/auth/signup" className="bg-primary text-white py-4 px-8 mb-10 rounded-lg text-sm font-medium flex items-center gap-2 w-max mx-auto">Get Started <GoArrowUpRight className="text-2xl" /></Link>
            </div>
            {/* <img alt="dashboard" src={GlobeImg.src} className="w-[50rem] h-auto bottom-center" /> */}
            <div className="w-full h-[20rem] bg-primary"></div>
          </section>
          <section className="px-28 mt-24">
            <div className="w-[50%] mx-auto mt-20 mb-7 text-center">
              <h3 className="text-5xl mb-3 font-[600]">
                Secure Your Software,
              </h3>
              <h3 className="text-5xl mb-7 font-[600]">
                Safeguard Your Business
              </h3>
              <p className="text-base leading-loose opaci">
                Our services are tailored to meet the unique security needs of your software and applications. Contact us for a customized solution.
              </p>
            </div>
            <img alt="dashboard" src={'https://www.cortex.io/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1021527%2F2012x1152%2F5c94ea8074%2Fimage-1415.webp&w=3840&q=99'} className="w-full h-full" />
            <div className="px-20 grid grid-cols-2 gap-32 gap-y-7 items-center mt-14">
              <div className="w-full h-full rounded-xl px-5 pt-5">
                <div>
                  <FaSquareArrowUpRight className="mb-4 text-xl" />
                </div>
                <h4 className="mb-2 font-[600] text-xl">
                  Risk Mitigation
                </h4>
                <p className="text-base leading-loose md:leading-loose opacity-90">
                  Connect your team to customers. Align the entire organization with shared understanding and unlock the power of customer knowledge.
                </p>
              </div>
              <div className="w-full h-full rounded-xl px-5 pt-5">
                <div>
                  <FaSquareArrowUpRight className="mb-4 text-xl" />
                </div>
                <h4 className="mb-2 font-[600] text-xl">
                  Risk Mitigation
                </h4>
                <p className="text-base leading-loose md:leading-loose opacity-90">
                  Connect your team to customers. Align the entire organization with shared understanding and unlock the power of customer knowledge.
                </p>
              </div>
              <div className="w-full h-full rounded-xl px-5 pt-5">
                <div>
                  <FaSquareArrowUpRight className="mb-4 text-xl" />
                </div>
                <h4 className="mb-2 font-[600] text-xl">
                  Risk Mitigation
                </h4>
                <p className="text-base leading-loose md:leading-loose opacity-90">
                  Connect your team to customers. Align the entire organization with shared understanding and unlock the power of customer knowledge.
                </p>
              </div>
              <div className="w-full h-full rounded-xl px-5 pt-5">
                <div>
                  <FaSquareArrowUpRight className="mb-4 text-xl" />
                </div>
                <h4 className="mb-2 font-[600] text-xl">
                  Risk Mitigation
                </h4>
                <p className="text-base leading-loose md:leading-loose opacity-90">
                  Connect your team to customers. Align the entire organization with shared understanding and unlock the power of customer knowledge.
                </p>
              </div>
            </div>
          </section>

          <section className="px-28 mt-28 bg-[#F5F3FF] py-24">
            <h3 className="text-center text-5xl mb-6 font-bold">
              Get the right information with Wits
            </h3>
            <p className="text-base text-center w-[60%] mb-6 mx-auto leading-loose md:leading-loose font-medium">
              Deeply research and target customers who actually care about your product—whether building your TAM from scratch or nurturing a list of named accounts.
            </p>
            <div className="grid grid-cols-3 gap-10 mt-7">
              <div className="px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] bg-[#EFF1F3] text-center">
                <p className="text-s font-medium text-[15px]">Craft unique messages at scale</p>
              </div>
              <div className="px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] text-center">
                <p className="text-s font-medium text-[15px]">Craft unique messages at scale</p>
              </div>
              <div className="px-4 py-4 border border-solid rounded-[4px] border-[#DBDEE4] text-center">
                <p className="text-s font-medium text-[15px]">Craft unique messages at scale</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-9 items-center">
              <div className="border-2 border-[#E6E8EC] h-full rounded-lg border-solid py-16 px-16 flex justify-between flex-col">
                <div>
                  <h3 className="text-3xl [42px] mb-3 leading-snug font-bold">
                    {/* Transform data into insights reporting for coys. */}
                    Connect to more <br /> sequencing tools & send
                  </h3>
                  <p className="text-sm font-medium leading-loose mb-4">
                    Do you have 1,000+ of SMBs to probe with automated personalized messages? Use Clay to quickly build your list and get high coverage and accurate contact info. Overseeing the overall Marketo.
                  </p>
                </div>
                <Link href="" className="bg-primary text-white px-6 py-4 text-sm rounded-lg w-max flex items-center gap-2 opacity-80">Get Started
                  <GoArrowUpRight className="text-2xl" /></Link>
              </div>
              <div className="bg-[#A789FE] w-full h-[30rem] rounded-lg"></div>
            </div>
          </section>
          {/* <section className="bg-black px-28 mt-20 py-28">
            <div>
              <div className="grid grid-cols-2 gap-10">
                <div></div>
              </div>
              <h3 className="text-4xl leading-snug font-bold text-white mb-5">
                Robust & Tailored <br /> Software Security Solutions
              </h3>
              <div className="mt-14 grid grid-cols-3 gap-10">
                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                  <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                  <div>
                    <h4 className="text-white font-medium text-xl mb-3">
                      Security Audits
                    </h4>
                    <p className="text-sm text-white opacity-80 leading-loose md:leading-loose mb-5">
                      Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                    </p>
                    <Link href="" className="text-white opacity-80 text-sm">Get Started</Link>
                  </div>
                </div>
                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                  <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                  <div>
                    <h4 className="text-white font-medium text-xl mb-3">
                      Security Audits
                    </h4>
                    <p className="text-sm text-white opacity-80 leading-loose md:leading-loose mb-5">
                      Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                    </p>
                    <Link href="" className="text-white opacity-80 text-sm">Get Started</Link>
                  </div>
                </div>
                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                  <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                  <div>
                    <h4 className="text-white font-medium text-xl mb-3">
                      Security Audits
                    </h4>
                    <p className="text-sm text-white opacity-80 leading-loose md:leading-loose mb-5">
                      Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                    </p>
                    <Link href="" className="text-white opacity-80 text-sm">Get Started</Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
              <div className="grid grid-cols-2 gap-24 mt-20">
                <div>
                  <div>
                    <h3 className="text-4xl leading-tight md:leading-tight font-medium w-[80%] text-white mb-4">
                      Team Pioneers in Online & Software Security Excellence.
                    </h3>
                    <p className="text-base text-white opacity-70 leading-loose md:leading-loose mb-5">
                      With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training.
                    </p>
                    <p className="text-base text-white opacity-70 leading-loose md:leading-loose mb-10">
                      With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training.
                    </p>
                    <Link className="flex items-center gap-3 border-2 border-white border-solid text-sm text-white px-8 py-4 opacity-70 rounded-full w-max" href="">Get Started <GoArrowUpRight className="text-2xl text-white" /></Link>
                  </div>
                </div>
                <div>
                  <div className="w-full h-full rounded-lg bg-[#111111]"></div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="px-28 pt-28">
            <div className="flex gap-20">
              <div className="w-[500px]">
                <div className="">
                  <h3 className="text-4xl mb-4 font-bold leading-[1.3]">
                    Questions we <br /> get asked often
                  </h3>
                  <p className="text-base leading-relaxed md:leading-relaxed mb-14 w-[80%]">
                    At Citadel Security, we are dedicated to fortifying your software applications and systems.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex gap-5 flex-col mx-auto">
                  <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                    <h3 className="font-medium text-base">How can I use this platform?</h3>
                    <FaAngleDown className="text-xl" />
                  </div>
                  <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                    <h3 className="font-medium text-base">How can I use this platform?</h3>
                    <FaAngleDown className="text-xl" />
                  </div>
                  <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                    <h3 className="font-medium text-base">How can I use this platform?</h3>
                    <FaAngleDown className="text-xl" />
                  </div>
                  <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                    <h3 className="font-medium text-base">How can I use this platform?</h3>
                    <FaAngleDown className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </DisplayLayout>
    </div>
  );
}
