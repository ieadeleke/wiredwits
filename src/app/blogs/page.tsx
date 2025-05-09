import DisplayLayout from "@/components/layout/layout";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Controller, useForm } from "react-hook-form";
import { Input } from "antd";

export default function BlogPage() {
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
                            </div>
                            <div>
                            </div>
                        </div>
                    </section>
                    <section className="px-32 mt-20">
                        <div className="">
                            <div className="border-2 border-solid border-[#EBEBEB] p-8 rounded-2xl grid grid-cols-2 items-center gap-10">
                                <div className="w-full">
                                    <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[24rem] w-full rounded-2xl object-fit object-cover" alt="blog image" />
                                </div>
                                <div>
                                    <div className="font-ibm border-2 border-solid border-[#EBEBEB] mb-5 px-6 py-3 w-max rounded-full text-sm">Technology</div>
                                    <h4 className="text-4xl leading-snug md:leading-snug font-medium mb-3">
                                        Harnessing AI's Power for Security Everywhere.
                                    </h4>
                                    <p className="text-base leading-loose md:leading-loose mb-7 opacity-80">
                                        At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving.
                                    </p>
                                    <ul className="mt-4 flex gap-5">
                                        <li className="opacity-80 text-sm">&bull; Mike Reyes</li>
                                        <li className="opacity-80 text-sm">&bull; May 28, 2025</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-20">
                                <h3 className="text-3xl mb-4">All Blogs</h3>
                                <div className="grid grid-cols-3 gap-10">
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            {/* <p className="opacity-80 text-sm mb-3">&bull; May 28, 2025</p> */}
                                            <h4 className="text-xl font-bold mb-2">
                                                Harnessing AI's Power for Security Everywhere.
                                            </h4>
                                            {/* <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            {/* <p className="opacity-80 text-sm mb-3">&bull; May 28, 2025</p> */}
                                            <h4 className="text-xl font-bold mb-2">
                                                Harnessing AI's Power for Security Everywhere.
                                            </h4>
                                            {/* <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            {/* <p className="opacity-80 text-sm mb-3">&bull; May 28, 2025</p> */}
                                            <h4 className="text-xl font-bold mb-2">
                                                Harnessing AI's Power for Security Everywhere.
                                            </h4>
                                            {/* <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            {/* <p className="opacity-80 text-sm mb-3">&bull; May 28, 2025</p> */}
                                            <h4 className="text-xl font-bold mb-2">
                                                Harnessing AI's Power for Security Everywhere.
                                            </h4>
                                            {/* <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            {/* <p className="opacity-80 text-sm mb-3">&bull; May 28, 2025</p> */}
                                            <h4 className="text-xl font-bold mb-2">
                                                Harnessing AI's Power for Security Everywhere.
                                            </h4>
                                            {/* <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            {/* <p className="opacity-80 text-sm mb-3">&bull; May 28, 2025</p> */}
                                            <h4 className="text-xl font-bold mb-2">
                                                Harnessing AI's Power for Security Everywhere.
                                            </h4>
                                            {/* <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p> */}
                                        </div>
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