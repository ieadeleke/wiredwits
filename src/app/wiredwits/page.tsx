import DisplayLayout from "@/components/layout/layout";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Controller, useForm } from "react-hook-form";
import { Input } from "antd";
import { GoArrowRight } from "react-icons/go";


export default function ContactUs() {
    const { TextArea } = Input;
    // const { handleSubmit, control } = useForm({
    //   defaultValues: {
    //     firstName: ''
    //   }
    // });
    return (
        <div>
            <DisplayLayout>
                <>
                    <section className="hero-bg px-28 pt-44 pb-20">
                        <div className="w-[50%] items-center gap-20">
                            <div>
                                <h1 className="text-6xl font-medium mb-6 leading-tight md:leading-tight">
                                    Axionet Powers Global Identity
                                </h1>
                                <p className="text-base leading-relaxed md:leading-loose mb-7">
                                    At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. At Citadel Security, we are dedicated to fortifying your software applications and systems.
                                </p>
                                <Button content="See how we impact" />
                            </div>
                            <div>
                                {/* <Image src="https://framerusercontent.com/images/4iRboOeHolIxcWnocarRCo62k.png?scale-down-to=1024" alt="hero" width={400} height={400} className="w-full h-full" /> */}
                            </div>
                        </div>
                    </section>
                    <section className="px-28 mt-28">
                        <div className="w-[50%]">
                            <h3 className="text-5xl font-medium mb-4 leading-snug">
                                Sentinel Security: Safeguarding Your Digital.
                            </h3>
                            <p className="text-base leading-loose md:leading-loose mb-8">
                                Stay ahead of every security challenge by equipping yourself with the tools and knowledge needed to tackle threats effectively and proactively.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-10">
                            <div className="bg-[#F5F5F6] border-2 border-solid border-[#E5E6E8] rounded-xl px-6 pt-8 pb-5">
                                <div className="size-10 mb-8 rounded-lg bg-[#7F57F1]"></div>
                                <h4 className="text-xl font-medium mb-3">Expense Tracking</h4>
                                <p className="text-base leading-loose md:leading-loose opacity-80">
                                    {/* Efficiently managing expenses is crucial for maintaining a healthy business budget */}
                                    Unify to stop cyber threats and protect your attack surface with advanced security solutions.
                                </p>
                            </div>
                            <div className="bg-[#F5F5F6] border-2 border-solid border-[#E5E6E8] rounded-xl px-6 pt-8 pb-5">
                                <div className="size-10 mb-8 rounded-lg bg-[#7F57F1]"></div>
                                <h4 className="text-xl font-medium mb-3">Expense Tracking</h4>
                                <p className="text-base leading-loose md:leading-loose opacity-80">
                                    {/* Efficiently managing expenses is crucial for maintaining a healthy business budget */}
                                    Unify to stop cyber threats and protect your attack surface with advanced security solutions.
                                </p>
                            </div>
                            <div className="bg-[#F5F5F6] border-2 border-solid border-[#E5E6E8] rounded-xl px-6 pt-8 pb-5">
                                <div className="size-10 mb-8 rounded-lg bg-[#7F57F1]"></div>
                                <h4 className="text-xl font-medium mb-3">Expense Tracking</h4>
                                <p className="text-base leading-loose md:leading-loose opacity-80">
                                    {/* Efficiently managing expenses is crucial for maintaining a healthy business budget */}
                                    Unify to stop cyber threats and protect your attack surface with advanced security solutions.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-28 mt-28 bg-[#F5F5FF] py-28">
                        <div className="w-[50%]">
                            <h3 className="text-5xl font-medium mb-4 leading-snug">
                                Sentinel Security: Safeguarding Your Digital.
                            </h3>
                            <p className="text-base leading-loose md:leading-loose mb-8">
                                Stay ahead of every security challenge by equipping yourself with the tools and knowledge needed to tackle threats effectively and proactively.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <div className="bg-black w-full h-[20rem] rounded-t-xl"></div>
                                <div className="bg-white border-2 border-t-0 border-solid border-[#E5E6E8] rounded-b-xl px-6 pt-8 pb-5">
                                    <h4 className="text-2xl font-medium mb-3">
                                        Accelerate Detection and Response
                                    </h4>
                                    <p className="text-base leading-loose md:leading-loose opacity-80">
                                        Address the challenges of simplifying and speeding up threat detection and response to reduce the strain on SOC and IT security teams, enhancing their efficiency and effectiveness.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-black w-full h-[20rem] rounded-t-xl"></div>
                                <div className="bg-white border-2 border-t-0 border-solid border-[#E5E6E8] rounded-b-xl px-6 pt-8 pb-5">
                                    <h4 className="text-2xl font-medium mb-3">
                                        Accelerate Detection and Response
                                    </h4>
                                    <p className="text-base leading-loose md:leading-loose opacity-80">
                                        Address the challenges of simplifying and speeding up threat detection and response to reduce the strain on SOC and IT security teams, enhancing their efficiency and effectiveness.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-28 mt-28">
                        <div className="w-[50%]">
                            <h3 className="text-5xl font-medium mb-4 leading-snug">
                                Sentinel Security: Safeguarding Your Digital.
                            </h3>
                            <p className="text-base leading-loose md:leading-loose mb-8">
                                Stay ahead of every security challenge by equipping yourself with the tools and knowledge needed to tackle threats effectively and proactively.
                            </p>
                        </div>
                        <div className="custom-grid gap-8 items-center mt-10">
                            <div className="flex-1 story-bg h-full w-full rounded-lg">
                            </div>
                            <div className="w-[500px]">
                                <div className="flex flex-col gap-4">
                                    <div className="bg-[#F5F5F6] border-2 border-solid border-[#E5E6E8] rounded-xl px-6 pt-8 pb-5">
                                        <h4 className="text-xl font-medium mb-3">Expense Tracking</h4>
                                        <p className="text-base leading-loose md:leading-loose opacity-80">
                                            {/* Efficiently managing expenses is crucial for maintaining a healthy business budget */}
                                            Unify to stop cyber threats and protect your attack surface with advanced security solutions.
                                        </p>
                                    </div>
                                    <div className="bg-[#F5F5F6] border-2 border-solid border-[#E5E6E8] rounded-xl px-6 pt-8 pb-5">
                                        <h4 className="text-xl font-medium mb-3">Expense Tracking</h4>
                                        <p className="text-base leading-loose md:leading-loose opacity-80">
                                            Unify to stop cyber threats and protect your attack surface with advanced security solutions.
                                        </p>
                                    </div>
                                    <div className="bg-[#F5F5F6] border-2 border-solid border-[#E5E6E8] rounded-xl px-6 pt-8 pb-5">
                                        <h4 className="text-xl font-medium mb-3">Expense Tracking</h4>
                                        <p className="text-base leading-loose md:leading-loose opacity-80">
                                            Unify to stop cyber threats and protect your attack surface with advanced security solutions.
                                        </p>
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