import DisplayLayout from "@/components/layout/layout";
// import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import GlobeImg from "@/assets/images/download.png";
import { GoArrowRight } from "react-icons/go";


export default function Home() {
  return (
    <div>
      <DisplayLayout>
        <>
          <section className="hero-bg px-28 pt-44 pb-20">
            <div className="grid grid-cols-2 items-center gap-20">
              <div>
                <h1 className="text-5xl font-medium w-[80%] mb-4 leading-tight md:leading-tight">
                  Sentinel Security: Safeguarding Your Digital Frontier.
                </h1>
                <p className="text-base leading-relaxed md:leading-loose mb-7">
                  At Citadel Security, we are dedicated to fortifying your software applications and systems against ever-evolving cyber threats. At Citadel Security, we are dedicated to fortifying your software applications and systems.
                </p>
                {/* <Button content="See how we impact" /> */}
              </div>
              <div>
                <Image src="https://framerusercontent.com/images/4iRboOeHolIxcWnocarRCo62k.png?scale-down-to=1024" alt="hero" width={400} height={400} className="w-full h-full" />
              </div>
            </div>
          </section>
          <section className="px-28 mt-24">
            <h3 className="text-4xl font-bold text-center">
              Features to elevate your business smartly
            </h3>
            <div className="grid grid-cols-4 gap-20 mt-28">
              <div>
                <div className="size-10 mb-8 bg-[#7F57F1] rounded-lg"></div>
                <h4 className="text-xl mb-3 font-bold">Expense Tracking</h4>
                <p className="text-base leading-loose opacity-80">
                  Efficiently managing expenses is crucial for maintaining a healthy business budget
                </p>
                <div className="mt-3">
                  <div className="size-10 border-solid rounded-full border border-black flex items-center justify-center">
                    <IoArrowForward />
                  </div>
                </div>
              </div>
              <div>
                <div className="size-10 mb-8 bg-[#7F57F1] rounded-lg"></div>
                <h4 className="text-xl mb-3 font-bold">Expense Tracking</h4>
                <p className="text-base leading-loose opacity-80">
                  Efficiently managing expenses is crucial for maintaining a healthy business budget
                </p>
                <div className="mt-3">
                  <div className="size-10 border-solid rounded-full border border-black flex items-center justify-center">
                    <IoArrowForward />
                  </div>
                </div>
              </div>
              <div>
                <div className="size-10 mb-8 bg-[#7F57F1] rounded-lg"></div>
                <h4 className="text-xl mb-3 font-bold">Expense Tracking</h4>
                <p className="text-base leading-loose opacity-80">
                  Efficiently managing expenses is crucial for maintaining a healthy business budget
                </p>
                <div className="mt-3">
                  <div className="size-10 border-solid rounded-full border border-black flex items-center justify-center">
                    <IoArrowForward />
                  </div>
                </div>
              </div>
              <div>
                <div className="size-10 mb-8 bg-[#7F57F1] rounded-lg"></div>
                <h4 className="text-xl mb-3 font-bold">Expense Tracking</h4>
                <p className="text-base leading-loose opacity-80">
                  Efficiently managing expenses is crucial for maintaining a healthy business budget
                </p>
                <div className="mt-3">
                  <div className="size-10 border-solid rounded-full border border-black flex items-center justify-center">
                    <IoArrowForward />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] mx-auto mt-20 text-center">
              <h3 className="text-4xl mb-3 font-[600]">
                Secure Your Software,
              </h3>
              <h3 className="text-4xl mb-3 font-[600]">
                Safeguard Your Business
              </h3>
              <p className="text-base leading-loose opaci">
                Our services are tailored to meet the unique security needs of your software and applications. Contact us for a customized solution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-20 items-center mt-14">
              <div className="bg-[#F6F7F9] border-2 border-solid border-[#EFEFF0] w-full h-full rounded-3xl"></div>
              <div className="py-10">
                <div className="border-y-2 border-solid border-[#EAEAEA] flex gap-7 py-5 mb-5">
                  <div>
                    <div className="size-10 mb-8 bg-[#7F57F1] rounded-lg"></div>
                  </div>
                  <div>
                    <h4 className="mb-3 font-[600] text-xl">
                      Risk Mitigation
                    </h4>
                    <p className="text-base leading-loose opaci">
                      Proactively identify vulnerabilities and safeguard your software from potential data breaches and cyber threats.
                    </p>
                  </div>
                </div>
                <div className="border-b-2 border-solid border-[#EAEAEA] flex gap-7 pb-5 mb-5">
                  <div>
                    <div className="size-10 mb-8 bg-[#7F57F1] rounded-lg"></div>
                  </div>
                  <div>
                    <h4 className="mb-3 font-[600] text-xl">
                      Risk Mitigation
                    </h4>
                    <p className="text-base leading-loose opaci">
                      Proactively identify vulnerabilities and safeguard your software from potential data breaches and cyber threats.
                    </p>
                  </div>
                </div>
                <div className="border-b-2 border-solid border-[#EAEAEA] flex gap-7 pb-5">
                  <div>
                    <div className="size-10 mb-8 bg-[#7F57F1] rounded-lg"></div>
                  </div>
                  <div>
                    <h4 className="mb-3 font-[600] text-xl">
                      Risk Mitigation
                    </h4>
                    <p className="text-base leading-loose opaci">
                      Proactively identify vulnerabilities and safeguard your software from potential data breaches and cyber threats.
                    </p>
                  </div>
                </div>
                {/* <Link href="" className="flex items-center gap-2 opacity-80">Get Started
                  <span className="block size-6 flex items-center justify-center border-2 border-solid border-[#7F57F1] rounded-full">
                    <GoArrowRight className="text-lg font-bold text-[#7F57F1]" /></span></Link> */}
              </div>
            </div>
          </section>
          <section className="bg-black px-28 mt-28 py-28">
            <div>
              <div className="grid grid-cols-2 gap-10">
                <div></div>
              </div>
              <h3 className="text-4xl leading-snug font-bold text-white mb-5">
                {/* Our Core Values */}
                Robust & Tailored <br /> Software Security Solutions
              </h3>
              <div className="mt-14 grid grid-cols-3 gap-10">
                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                  <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                  <div>
                    <h4 className="text-white font-medium text-xl mb-3">
                      Security Audits
                    </h4>
                    <p className="text-sm text-white opacity-80 leading-loose md:leading-loose mb-5">
                      Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                    </p>
                    <Link href="" className="text-white opacity-80 text-sm">Get Started</Link>
                  </div>
                </div>
                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                  <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                  <div>
                    <h4 className="text-white font-medium text-xl mb-3">
                      Security Audits
                    </h4>
                    <p className="text-sm text-white opacity-80 leading-loose md:leading-loose mb-5">
                      Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                    </p>
                    <Link href="" className="text-white opacity-80 text-sm">Get Started</Link>
                  </div>
                </div>
                <div className="border-2 border-solid border-[#EBEBEB] px-5 py-8 rounded-lg">
                  <div className="size-20 rounded-full mb-16 border-2 border-solid border-[#EBEBEB]"></div>
                  <div>
                    <h4 className="text-white font-medium text-xl mb-3">
                      Security Audits
                    </h4>
                    <p className="text-sm text-white opacity-80 leading-loose md:leading-loose mb-5">
                      Empower your team with practical security training programs focused on secure coding practices. Comprehensive security audits.
                    </p>
                    <Link href="" className="text-white opacity-80 text-sm">Get Started</Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
              <div className="grid grid-cols-2 gap-24 mt-20">
                <div>
                  <div>
                    <h3 className="text-4xl leading-tight md:leading-tight font-medium w-[80%] text-white mb-4">
                      Team Pioneers in Online & Software Security Excellence.
                    </h3>
                    <p className="text-base text-white opacity-70 leading-loose md:leading-loose mb-5">
                      With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training.
                    </p>
                    <p className="text-base text-white opacity-70 leading-loose md:leading-loose mb-10">
                      With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training.
                    </p>
                    <Link className="flex items-center gap-3 border-2 border-white border-solid text-sm text-white px-8 py-4 opacity-70 rounded-full w-max" href="">Get Started <GoArrowUpRight className="text-2xl text-white" /></Link>
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
          <section className="px-28">
            <div className="bg-black items-center pl-14 rounded-4xl grid grid-cols-2 gap-10">
              <div>
                <h3 className="text-[42px] text-white mb-4 leading-snug md:leading-snug font-medium">
                  Team Pioneers in Online & Software Security Excellence.
                </h3>
                <p className="text-white opacity-80 leading-loose md:leading-loose mb-6">
                  With a team of seasoned security experts and developers, we offer a range of services including security assessments, secure software development training. With a team of seasoned security.
                </p>
                <Link className="flex items-center gap-3 border-2 border-white border-solid text-sm text-white px-8 py-4 opacity-70 rounded-lg w-max" href="">Get Started <GoArrowUpRight className="text-2xl text-white" /></Link>
              </div>
              <div>
                <Image src={GlobeImg} width={0} height={0} quality={100} className="w-full h-full" alt="" />
              </div>
            </div>
          </section>
        </>
      </DisplayLayout>
    </div>
  );
}
