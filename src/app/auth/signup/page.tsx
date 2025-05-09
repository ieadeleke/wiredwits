import DisplayLayout from "@/components/layout/layout";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Controller, useForm } from "react-hook-form";

export default function SignupPage() {
    // const { handleSubmit, control } = useForm({
    //   defaultValues: {
    //     firstName: ''
    //   }
    // });
    return (
        <div>
            <DisplayLayout noSpaceOnTop={true}>
                <>
                    <section className="min-h-[120vh] pt-20 flex items-center">
                        <div className="grid grid-cols-2 items-center gap-20 px-40">
                            <div className="bg-black h-[35rem] w-full rounded-lg"></div>
                            <div className="text-center">
                                <h2 className="text-4xl font-bold mb-5">Welcome to Wiredwits</h2>
                                <p className="text-sm leading-loose md:leading-loose">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ex! Maiores nesciunt.
                                </p>
                                <div className="mt-8 grid grid-cols-3 gap-3">
                                    <div className="border-2 border-solid border-black rounded-xl py-10 px-8">
                                        <h3 className="text-base">Public Good</h3>
                                    </div>
                                    <div className="border-2 border-solid border-black rounded-xl py-10 px-8">
                                        <h3 className="text-base">Public Good</h3>
                                    </div>
                                    <div className="border-2 border-solid border-black rounded-xl py-10 px-8">
                                        <h3 className="text-base">Public Good</h3>
                                    </div>
                                </div>
                                <button className="bg-[#9747FF] text-white py-5 px-8 rounded-lg text-sm font-medium mt-12 w-full">Continue</button>
                            </div>
                        </div>
                    </section>
                </>
            </DisplayLayout>
        </div>
    );
}