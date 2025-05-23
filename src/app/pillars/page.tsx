import DisplayLayout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";



export default function ContactUs() {
    // const { handleSubmit, control } = useForm({
    //   defaultValues: {
    //     firstName: ''
    //   }
    // });
    return (
        <div>
            <DisplayLayout>
                <>
                    {/* <section classNazon> */}
                    <div className="pt-40 bg-[#F9F7FF] text-center">
                        <div className="w-[60%] mx-auto">
                            <h2 className="text-6xl mb-4 font-bold leading-[1.1]">
                                AI-powered personalized outreach at scale.
                            </h2>
                            <p className="text-base w-[80%] mb-6 mx-auto leading-loose md:leading-loose font-medium">
                                Deeply research and target customers who actually care about your product—whether building your TAM from scratch or nurturing a list of named accounts.
                            </p>
                            <Link href="/auth/signup" className="bg-primary text-white py-4 px-8 mb-10 rounded-lg text-sm font-medium flex items-center gap-2 w-max mx-auto">Reach out to us <GoArrowUpRight className="text-2xl" /></Link>
                        </div>
                        <div className="w-full h-[20rem] bg-primary"></div>
                    </div>
                    <section className="px-28 mt-28">
                        <h3 className="text-center text-5xl mb-6 font-bold">
                            Target the right customers with Clay
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
                    <section className="px-28 py-24 mt-28 bg-[#F5F3FF]">
                        <div>
                            <h3 className="text-4xl leading-snug font-bold">
                                {/* Our Core Values */}
                                Robust & Tailored <br /> Software Security Solutions
                            </h3>
                            <div className="mt-10 grid grid-cols-3 gap-10">
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                                    <div>
                                        <h4 className="font-medium text-xl mb-3">
                                            Security Audits
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose mb-5">
                                            Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                                        </p>
                                        <Link href="" className="opacity-80 text-sm">Get Started</Link>
                                    </div>
                                </div>
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                                    <div>
                                        <h4 className="font-medium text-xl mb-3">
                                            Security Audits
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose mb-5">
                                            Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                                        </p>
                                        <Link href="" className="opacity-80 text-sm">Get Started</Link>
                                    </div>
                                </div>
                                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                                    <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                                    <div>
                                        <h4 className="font-medium text-xl mb-3">
                                            Security Audits
                                        </h4>
                                        <p className="text-sm opacity-80 leading-loose md:leading-loose mb-5">
                                            Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                                        </p>
                                        <Link href="" className="opacity-80 text-sm">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
                            <div className="grid grid-cols-2 gap-24 mt-20">
                                <div>
                                    <div>
                                        <h3 className="text-4xl leading-tight md:leading-tight font-bold w-[80%] mb-4">
                                            Team Pioneers in Online & Software Security Excellence.
                                        </h3>
                                        <p className="text-base opacity-70 leading-loose md:leading-loose mb-5 w-[95%]">
                                            With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training at Citadel Security.
                                        </p>
                                        <p className="text-base opacity-70 leading-loose md:leading-loose mb-10 w-[95%]">
                                            With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training at Citadel Security.
                                        </p>
                                        <Link className="flex items-center gap-3 bg-[#9747FF] border-2 border-white border-solid text-sm text-white px-8 py-4 rounded-lg w-max" href="">Get Started <GoArrowUpRight className="text-2xl text-white" /></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full h-full rounded-lg bg-[#111111]"></div>
                                </div>
                            </div>
                        </div>
                        {/* <h3 className="text-4xl mb-4 font-bold w-[60%]">
                            Send fewer—much better targeted—messages with AI research
                        </h3>
                        <p className="text-base w-[50%] mb-6 leading-loose md:leading-loose font-medium">
                            Deeply research and target customers who actually care about your product—whether building your TAM from scratch or nurturing a list of named accounts.
                        </p>
                        <div className="mt-15 grid grid-cols-3 gap-12">
                            <div>
                                <div className="h-[20rem] w-full bg-black mb-3"></div>
                                <div>
                                    <h5 className="text-lg fonr-bold mb-2 font-medium">Target the right leads</h5>
                                    <p className="text-sm opacity-90 leading-relaxed md:leading-relaxed">
                                        Build and enrich accounts and leads to find the best-fit people to reach out to.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="h-[20rem] w-full bg-black mb-3"></div>
                                <div>
                                    <h5 className="text-lg fonr-bold mb-2 font-medium">Target the right leads</h5>
                                    <p className="text-sm opacity-90 leading-relaxed md:leading-relaxed">
                                        Build and enrich accounts and leads to find the best-fit people to reach out to.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="h-[20rem] w-full bg-black mb-3"></div>
                                <div>
                                    <h5 className="text-lg fonr-bold mb-2 font-medium">Target the right leads</h5>
                                    <p className="text-sm opacity-90 leading-relaxed md:leading-relaxed">
                                        Build and enrich accounts and leads to find the best-fit people to reach out to.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </section>
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