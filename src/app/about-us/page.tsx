import DisplayLayout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";


export default function Home() {
  return (
    <div>
      <DisplayLayout>
        <>
          <section className="hero-bg flex items-center justify-center text-center">
            <div className="w-[90%] mx-auto gap-20 py-48 pb-28">
              <div className="w-[60%] mx-auto">
                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                  <h4 className="text-[#9747FF] font-medium text-sm">Take Full Control of Your Task</h4>
                </div>
                <h1 className="text-6xl font-bold mb-4 leading-tight md:leading-tight">
                  {/* Freelance Security: Protecting Your Projects. */}
                  Empowering Teams, One Task at a Time, Every Day
                </h1>
                <p className="text-base text-[#111111b3] leading-relaxed md:leading-loose mb-7 w-[80%] mx-auto">
                  At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. At Citadel Security, we are dedicated.
                </p>
                <div className="flex gap-4 mx-auto mb-10 w-max">
                  <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Get Started</Link>
                  <Link href="/auth/signup" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Reach out to us</Link>
                </div>
              </div>
              {/* <div className="w-[90%] mx-auto grid grid-cols-4 gap-4">
                <div className="border-2 border-solid border-[#EBEBEB] [#0a0a0a99] bg-white text-center py-8 rounded-lg">
                  <h3 className="text-2xl mb-5 font-medium">2010</h3>
                  <p className="text-base opacity-80 uppercase">Founded In</p>
                </div>
                <div className="border-2 border-solid border-[#EBEBEB] [#0a0a0a99] bg-white text-center py-8 rounded-lg">
                  <h3 className="text-2xl mb-5 font-medium">100+ Company</h3>
                  <p className="text-base opacity-80 uppercase">Founded In</p>
                </div>
                <div className="border-2 border-solid border-[#EBEBEB] [#0a0a0a99] bg-white text-center py-8 rounded-lg">
                  <h3 className="text-2xl mb-5 font-medium">Silicon Valley</h3>
                  <p className="text-base opacity-80 uppercase">Founded In</p>
                </div>
                <div className="border-2 border-solid border-[#EBEBEB] [#0a0a0a99] bg-white text-center py-8 rounded-lg">
                  <h3 className="text-2xl mb-5 font-medium">Silicon Valley</h3>
                  <p className="text-base opacity-80 uppercase">Founded In</p>
                </div>
              </div> */}
            </div>
          </section>
          <section className="px-28 mt-14">
            <div className="mt-28">
              <div className="flex">
                <div className="w-[550px]">
                  <h3 className="w-[70%] text-4xl leading-snug font-bold">
                    Safeguarding Your Digital Frontier.
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-black opacity-80 leading-loose mb-4">
                    At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. Our mission is to empower your organization with robust security solutions.
                  </p>
                  <p className="text-black opacity-80 leading-loose">
                    Founded in 2012, Citadel Security has established itself as a trusted partner in the software security domain. Our team of seasoned security experts and developers possesses extensive knowledge and hands-on experience in identifying and mitigating vulnerabilities, implementing secure coding practices, and fortifying software architectures.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#F5F3FF] px-28 mt-28 py-24">
            <div className="flex gap-20">
              <div className="w-[500px]">
                <div className="">
                  <h3 className="text-4xl mb-4 font-bold leading-[1.3]">
                    Our Core Values
                  </h3>
                  <p className="text-base leading-relaxed md:leading-relaxed mb-14 w-[80%]">
                    We understand that software security is a multifaceted challenge that requires a holistic approach.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex gap-5 flex-col mx-auto">
                  <div className="border-b-2 border-solid border-[#EBEBEB] pb-7">
                    <h3 className="font-bold text-2xl mb-3">Integrity</h3>
                    <p className="text-base leading-loose md:leading-loose opacity-80">
                      At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. Our mission is to empower your organization with robust security solutions.
                    </p>
                  </div>
                  <div className="border-b-2 border-solid border-[#EBEBEB] pb-7">
                    <h3 className="font-bold text-2xl mb-3">Collaboration</h3>
                    <p className="text-base leading-loose md:leading-loose opacity-80">
                      At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. Our mission is to empower your organization with robust security solutions.
                    </p>
                  </div>
                  <div className="border-b-2 border-solid border-[#EBEBEB] pb-7">
                    <h3 className="font-bold text-2xl mb-3">Continuous Improvement</h3>
                    <p className="text-base leading-loose md:leading-loose opacity-80">
                      At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. Our mission is to empower your organization with robust security solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="px-28 pt-28">
            <div className="text-center">
              <h3 className="text-4xl mb-8 font-medium">
                Team Pioneers in Online & Software Security Excellence
              </h3>
              <p className="w-[70%] mx-auto text-base leading-relaxed md:leading-relaxed mb-14">
                At Citadel Security, we are dedicated to fortifying your software applications and systems.
              </p>
            </div>
            <div className="flex gap-5 flex-col w-[70%] mx-auto">
              <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                <h3 className="font-medium text-lg">How can I use this platform?</h3>
                <FaAngleDown className="text-xl" />
              </div>
              <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                <h3 className="font-medium text-lg">How can I use this platform?</h3>
                <FaAngleDown className="text-xl" />
              </div>
              <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                <h3 className="font-medium text-lg">How can I use this platform?</h3>
                <FaAngleDown className="text-xl" />
              </div>
              <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                <h3 className="font-medium text-lg">How can I use this platform?</h3>
                <FaAngleDown className="text-xl" />
              </div>
            </div>
          </section>
        </>
      </DisplayLayout>
    </div>
  );
}
