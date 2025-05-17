import DisplayLayout from "@/components/layout/layout";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";


export default function BlogPage() {
    return (
        <div>
            <DisplayLayout>
                <>
                    <section className="px-28 mt-52">
                        <div className="">
                            <h2 className="text-5xl font-medium mb-4">Blogs and Articles</h2>
                            <div className="grid grid-cols-31 items-center gap-10">
                                <div className="w-full">
                                    <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[30rem] w-full rounded-2xl object-fit object-cover" alt="blog image" />
                                </div>
                                <div className="flex flex-col justify-between h-full py-3">
                                    <div>
                                        <div className="border-2 border-solid border-[#EBEBEB] bg-[#EBEBEB] mb-5 px-4 py-3 w-max rounded-lg text-sm">Technology</div>
                                        <h4 className="text-4xl leading-snug md:leading-snug font-medium mb-3">
                                            Harnessing AI's Power for Security Everywhere.
                                        </h4>
                                        <p className="text-base leading-loose md:leading-loose mb-7 opacity-80">
                                            At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. At Citadel Security, we are dedicated.
                                        </p>
                                        <ul className="mt-4 flex gap-5">
                                            {/* <li className="opacity-80 text-sm">&bull; Mike Reyes</li> */}
                                            <li className="opacity-80 text-sm">&bull; May 28, 2025</li>
                                        </ul>
                                    </div>
                                    <Link href="#" className="bg-[#9747FF] block w-max text-white py-4 px-8 rounded-lg text-sm font-medium">Read More</Link>
                                </div>
                            </div>

                            <div className="mt-28">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-3xl font-medium">Latest insights and trends</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="border-2 border-solid border-[#9747FF] text-black py-4 px-8 rounded-lg flex items-center justify-center text-sm font-medium">All Blogs <IoIosArrowDown /></div>
                                        {/* <div className="border-2 border-solid border-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Public Good</div>
                                        <div className="border-2 border-solid border-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Public Good</div>
                                        <div className="border-2 border-solid border-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Public Good</div> */}
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-8">
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium mb-2">
                                                Harnessing AI's Power for Security.
                                            </h4>
                                            <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium mb-2">
                                                Harnessing AI's Power for Security.
                                            </h4>
                                            <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium mb-2">
                                                Harnessing AI's Power for Security.
                                            </h4>
                                            <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium mb-2">
                                                Harnessing AI's Power for Security.
                                            </h4>
                                            <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium mb-2">
                                                Harnessing AI's Power for Security.
                                            </h4>
                                            <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="w-full mb-4">
                                            <Image src="https://framerusercontent.com/images/EBxviubc7696r1ZsHUfqPqKSE.jpg?scale-down-to=1024" quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium mb-2">
                                                Harnessing AI's Power for Security.
                                            </h4>
                                            <p className="text-sm leading-loose md:leading-loose opacity-80">
                                                With a team of seasoned security experts and developers, we offer a range of services.
                                            </p>
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