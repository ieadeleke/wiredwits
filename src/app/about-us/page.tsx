import DisplayLayout from "@/components/layout/layout";
import Button from "@/components/ui/button";
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
              <div className="w-[90%] mx-auto grid grid-cols-4 gap-4">
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
              </div>
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
          <section className="bg-[#F9F7FF] px-28 mt-28 py-28">
            <div>
              <h3 className="text-4xl leading-snug font-bold mb-5">
                {/* Our Core Values */}
                Robust & Tailored <br /> Software Security Solutions
              </h3>
              <div className="mt-14 grid grid-cols-3 gap-10">
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
            {/* <div className="flex">
          <div className="w-[550px]">
            <div className="w-[60%]">
              <h3 className="text-3xl leading-snug font-bold text-white mb-5">
                Robust & Tailored <br /> Software Security Solutions
              </h3>
              <p className="text-white opacity-70 leading-relaxed">
                we understand that software security is a multifaceted challenge that requires a holistic approach.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-black opacity-80 leading-loose mb-4">
              At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. Our mission is to empower your organization with robust security solutions.
            </p>
            <p className="text-black opacity-80 leading-loose">
              Founded in 2012, Citadel Security has established itself as a trusted partner in the software security domain. Our team of seasoned security experts and developers possesses extensive knowledge and hands-on experience in identifying and mitigating vulnerabilities, implementing secure coding practices, and fortifying software architectures.
            </p>
          </div>
        </div> */}
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
