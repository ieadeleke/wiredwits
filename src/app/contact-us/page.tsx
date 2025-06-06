import DisplayLayout from "@/components/layout/layout";
// import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { IoMailOpen } from "react-icons/io5";
import { PiSignpostBold } from "react-icons/pi";



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
          <section className="hero-bg px-5 md:px-28 pt-32 md:pt-44 pb-14">
            <div className="md:w-[50%] text-center md:text-left items-center gap-20">
              <div>
                <h1 className="text-3xl md:text-6xl font-medium mb-2 md:mb-5 leading-relaxed md:leading-tight md:w-[70%]">
                  Get in Touch with Our Team.
                </h1>
                <p className="text-sm md:text-base leading-loose md:leading-loose mb-7">
                  We&apos;d love to hear from you! Whether you have a question, want to explore a partnership, or just want to learn more about our tools, we&apos;re here to listen. Use the form on this page or reach out directly, let&apos;s build something better together.
                </p>
              </div>
              <div>
              </div>
            </div>
          </section>
          <section className="px-5 md:px-28 mt-16 md:mt-28">
            <div className="flex flex-col md:flex-row gap-14 md:gap-32">
              <div className="md:w-[450px]">
                <div className="flex flex-col gap-10">
                  <div className="border-2 border-solid border-[#EBEBEB] [#0a0a0a99] px-6 pt-8 pb-4 md:pb-8 rounded-lg text-center md:text-left">
                    <div>
                      <div className="size-14 rounded-lg bg-[#E8DEFF] mb-5 md:mb-14 flex items-center justify-center mx-auto md:ml-left">
                        <IoMailOpen className="text-primary text-2xl" />
                      </div>
                      <h5 className="text-lg mb-2 font-medium">Email</h5>
                      <p className="text-sm mb-2 leading-loose">Our team is here to help.</p>
                      <a className="text-[#9747FF]" href="mailto:support@codepunk.com">support@wiredwits.com</a>
                    </div>
                  </div>
                  <div className="border-2 border-solid border-[#EBEBEB] [#0a0a0a99] px-6 pt-8 pb-4 md:pb-8 rounded-lg text-center md:text-left">
                    <div>
                      <div className="size-14 rounded-lg bg-[#E8DEFF] mb-5 md:mb-14 flex items-center justify-center mx-auto md:ml-left">
                        <PiSignpostBold className="text-primary text-2xl" />
                      </div>
                      <h5 className="text-lg mb-2 font-medium">Mailing Address</h5>
                      <p className="text-sm leading-loose">139 S144th St;</p>
                      <p className="text-sm mb-2 leading-loose">PO Box 457</p>
                      <a className="text-[#9747FF]" href="mailto:support@codepunk.com">Boys Town, NE 68010</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <form action="">
                  <div className="grid grid-cols-2 gap-3 md:gap-5 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="text-sm">First name</label>
                      {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                      <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="firstName" />
                      {/* )} /> */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="text-sm">Last name</label>
                      {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                      <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="firstName" />
                      {/* )} /> */}
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="" className="text-sm">Email address</label>
                    {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                    <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="email" />
                    {/* )} /> */}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="" className="text-sm">Category</label>
                    {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                    <select className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg">
                      <option value="General Question">General Question</option>
                      <option value="Feedback or Suggestion">Feedback or Suggestion</option>
                      <option value="Media & Public Relations">Media & Public Relations</option>
                      <option value="Partnership or Collaboration">Partnership or Collaboration</option>
                      <option value="Wits Newsroom (Public Good)">Wits Newsroom (Public Good)</option>
                      <option value="Business Empowerment Tools">Business Empowerment Tools</option>
                      <option value="Education or Training Opportunities">Education or Training Opportunities</option>
                      <option value="Community Engagement">Community Engagement</option>
                      <option value="Grants, Funding, or Support">Grants, Funding, or Support</option>
                      <option value="Something Else (Tell Us More)">Something Else (Tell Us More)</option>
                    </select>
                    {/* <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="email" /> */}
                    {/* )} /> */}
                  </div>
                  {/* <div className="form-group mb-3">
                    <label htmlFor="" className="text-sm">Subject</label>
                    <input className="text-sm border-2 border-solid border-[#EBEBEB] block w-full h-[4rem] px-2 rounded-lg" name="email" />
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="" className="text-sm">Message</label>
                    {/* <Controller name="firstName" control={control}
                        render={({ field }) => ( */}
                    <textarea name="message" rows={6} className="text-sm border-2 border-solid border-[#EBEBEB] block w-full px-2 rounded-lg" />
                    {/* )} /> */}
                  </div>
                  <button className="bg-[#9747FF] text-white py-5 px-8 rounded-lg text-sm font-medium mt-14 w-full md:w-max">Submit</button>
                </form>
              </div>
            </div>
          </section>
        </>
      </DisplayLayout>
    </div>
  );
}