import DisplayLayout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function FeedbackHub() {
    return (
        <div>
            <DisplayLayout>
                <>
                    <section className="hero-bg px-28 pt-44 pb-14">
                        <div className="w-[50%] items-center gap-20">
                            <div>
                                <h1 className="text-6xl font-medium mb-6 leading-tight md:leading-tight w-[70%]">
                                    Get in Touch with Our Team.
                                </h1>
                                <p className="text-base leading-relaxed md:leading-loose mb-7">
                                    Let us assist you in getting started. Please fill out this form or reach out via phone or fax to share details about your business needs, so our team can better understand how to help.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="px-28 mt-20">
                        <div className="bg-[#F9F7FF] py-20 grid grid-cols-2 gap-20 mb-20">
                            <div>
                                <h4 className="text-xl font-medium mb-3">
                                    New Wired Wits Website
                                </h4>
                                <p className="text-base leading-loose mb-6">
                                    Determine what the users think of the new Wired Wits site
                                </p>
                                <div className="bg-[#000] h-[20rem] w-full rounded-xl"></div>
                            </div>
                            <div className="flex items-start gap-10">
                                <div>
                                    <div className="size-14 rounded-full flex items-center justify-center bg-[#9747FF]">
                                        <h4 className="font-bold text-lg text-white">01</h4>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg mb-6 leading-[1.8]">
                                        Tell us what you think of the new and improved Wired Wits website
                                    </h4>
                                    <form action="">
                                        <div className="form-group mb-6">
                                            <RadioGroup defaultValue="option-one">
                                                <div className="flex items-center space-x-2 mb-3">
                                                    <RadioGroupItem value="option-one" id="option-one" />
                                                    <Label htmlFor="option-one" className="">I love it so much</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-two" id="option-two" />
                                                    <Label htmlFor="option-two">I don't really like it</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                        <div className="form-group mb-4">
                                            <Label className="mb-2">If other, kindly specify</Label>
                                            <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[3.5rem] px-2 rounded-lg" name="email" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <Label className="mb-2">Email address</Label>
                                            <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[3.5rem] px-2 rounded-lg" name="email" />
                                        </div>
                                        <button className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Submit Review</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#F9F7FF] py-20 grid grid-cols-2 gap-20 mb-20">
                            <div>
                                <h4 className="text-xl font-medium mb-3">
                                    New Wired Wits Website
                                </h4>
                                <p className="text-base leading-loose mb-6">
                                    Determine what the users think of the new Wired Wits site
                                </p>
                                <div className="bg-[#000] h-[20rem] w-full rounded-xl"></div>
                            </div>
                            <div className="flex items-start gap-10">
                                <div>
                                    <div className="size-14 rounded-full flex items-center justify-center bg-[#9747FF]">
                                        <h4 className="font-bold text-lg text-white">01</h4>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg mb-6 leading-[1.8]">
                                        Tell us what you think of the new and improved Wired Wits website
                                    </h4>
                                    <form action="">
                                        <div className="form-group mb-6">
                                            <RadioGroup defaultValue="option-one">
                                                <div className="flex items-center space-x-2 mb-3">
                                                    <RadioGroupItem value="option-one" id="option-one" />
                                                    <Label htmlFor="option-one" className="">I love it so much</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-two" id="option-two" />
                                                    <Label htmlFor="option-two">I don't really like it</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                        <div className="form-group mb-4">
                                            <Label className="mb-2">If other, kindly specify</Label>
                                            <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[3.5rem] px-2 rounded-lg" name="email" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <Label className="mb-2">Email address</Label>
                                            <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[3.5rem] px-2 rounded-lg" name="email" />
                                        </div>
                                        <button className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Submit Review</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </DisplayLayout>
        </div>
    );
}