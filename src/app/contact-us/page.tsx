import DisplayLayout from "@/components/layout/layout";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Controller, useForm } from "react-hook-form";
import { Input } from "antd";

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
                <h1 className="text-6xl font-medium mb-6 leading-tight md:leading-tight w-[70%]">
                  Get in Touch
                  with Our Team
                </h1>
                <p className="text-base leading-relaxed md:leading-loose mb-7">
                  Let us assist you in getting started. Please fill out this form or reach out via phone or fax to share details about your business needs, so our team can better understand how to help.
                </p>
                {/* <Button content="See how we impact" /> */}
              </div>
              <div>
                {/* <Image src="https://framerusercontent.com/images/4iRboOeHolIxcWnocarRCo62k.png?scale-down-to=1024" alt="hero" width={400} height={400} className="w-full h-full" /> */}
              </div>
            </div>
          </section>
          <section className="px-28 mt-28">
            <div className="flex gap-32">
              <div className="w-[450px]">
                <div className="flex flex-col gap-10">
                  <div className="border-2 border-solid border-[#EBEBEB] [#0a0a0a99] px-6 py-8 rounded-lg">
                    <div>
                      <div className="size-14 rounded-lg bg-[#E8DEFF] mb-14"></div>
                      <h5 className="text-lg mb-2 font-medium">Email</h5>
                      <p className="text-sm mb-2 leading-loose">Our friendly team is here to help.</p>
                      <a className="text-[#9747FF]" href="mailto:support@codepunk.com">support@wiredwits.com</a>
                    </div>
                  </div>
                  <div className="border-2 border-solid border-[#EBEBEB] [#0a0a0a99] px-6 py-8 rounded-lg">
                    <div>
                      <div className="size-14 rounded-lg bg-[#E8DEFF] mb-14"></div>
                      <h5 className="text-lg mb-2 font-medium">Phone</h5>
                      <p className="text-sm mb-2 leading-loose">Monday - Friday from 8am to 5pm.</p>
                      <a className="text-[#9747FF]" href="mailto:support@codepunk.com">0800 000 0000</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <form action="">
                  <div className="grid grid-cols-2 gap-5 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="text-sm">First name</label>
                      {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                      <Input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="firstName" />
                      {/* )} /> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="text-sm">First name</label>
                      {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                      <Input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="firstName" />
                      {/* )} /> */}
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="" className="text-sm">Email address</label>
                    {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                    <Input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="email" />
                    {/* )} /> */}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="" className="text-sm">Subject</label>
                    {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                    <Input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="email" />
                    {/* )} /> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="text-sm">Message</label>
                    {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                    <textarea name="message" rows={6} className="text-sm border-2 border-solid border-[#EBEBEB] block w-full px-2 rounded-lg" />
                    {/* )} /> */}
                  </div>
                  <button className="bg-[#9747FF] text-white py-5 px-8 rounded-lg text-sm font-medium mt-14">Reach out to us</button>
                </form>
              </div>
            </div>
          </section>
        </>
      </DisplayLayout>
    </div>
  );
}