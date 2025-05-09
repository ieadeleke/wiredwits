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
                    {/* <section classNazon> */}
                    <div className="pt-52 pb-32 text-center">
                        <div className="w-[50%] mx-auto">
                            <h2 className="text-6xl mb-4 font-medium font-ibm">
                                Get more clients, fast!
                            </h2>
                            <p className="text-lg w-[70%] mb-10 mx-auto leading-loose md:leading-relaxed opacity-70">
                                Unlock the potential of your business with our powerful customer acquisition software.
                            </p>
                            <Link href="/auth/signup" className="bg-[#9747FF] text-white py-5 px-8 rounded-lg text-sm font-medium">Reach out to us</Link>
                        </div>
                    </div>
                    <section className="px-28 mt-14">
                        <div className="grid grid-cols-2 gap-24 items-center">
                            <div className="bg-[#5186FF] w-full h-full rounded-lg"></div>
                            <div>
                                <h3 className="text-[42px] mb-3 leading-snug font-medium w-[80%]">
                                    Transform data into insights reporting.
                                </h3>
                                <p className="text-base leading-loose mb-4 w-[90%] opacity-80">
                                    Overseeing the overall Marketo instance, including configuration, data management, and integration with other systems.
                                </p>
                                <div className="border-t-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 border-y-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <Link href="" className="flex items-center gap-2 opacity-80">Get Started
                                    <span className="block size-6 flex items-center justify-center border-2 border-solid border-[#7F57F1] rounded-full">
                                        <GoArrowRight className="text-lg font-bold text-[#7F57F1]" /></span></Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-24 items-center mt-32">
                            <div>
                                <h3 className="text-[42px] mb-3 leading-snug font-medium w-[80%]">
                                    Transform data into insights reporting.
                                </h3>
                                <p className="text-base leading-loose mb-4 w-[90%] opacity-80">
                                    Overseeing the overall Marketo instance, including configuration, data management, and integration with other systems.
                                </p>
                                <div className="border-t-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 border-y-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <Link href="" className="flex items-center gap-2 opacity-80">Get Started
                                    <span className="block size-6 flex items-center justify-center border-2 border-solid border-[#7F57F1] rounded-full">
                                        <GoArrowRight className="text-lg font-bold text-[#7F57F1]" /></span></Link>
                            </div>
                            <div className="bg-[#5186FF] w-full h-full rounded-lg"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-24 items-center mt-32">
                            <div className="bg-[#5186FF] w-full h-full rounded-lg"></div>
                            <div>
                                <h3 className="text-[42px] mb-3 leading-snug font-medium w-[80%]">
                                    Transform data into insights reporting.
                                </h3>
                                <p className="text-base leading-loose mb-4 w-[90%] opacity-80">
                                    Overseeing the overall Marketo instance, including configuration, data management, and integration with other systems.
                                </p>
                                <div className="border-t-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 border-y-2 border-solid border-[#EAEAEA] py-4 w-[90%] flex items-center gap-5">
                                    <div className="h-10 w-14 bg-[#E2DFF8] rounded-lg"></div>
                                    <div>
                                        <p className="font-medium font-ibm">
                                            Overseeing the overall Marketo instance, including configuration, data management.
                                        </p>
                                    </div>
                                </div>
                                <Link href="" className="flex items-center gap-2 opacity-80">Get Started
                                    <span className="block size-6 flex items-center justify-center border-2 border-solid border-[#7F57F1] rounded-full">
                                        <GoArrowRight className="text-lg font-bold text-[#7F57F1]" /></span></Link>
                            </div>
                        </div>
                    </section>
                </>
            </DisplayLayout>
        </div>
    );
}