import DisplayLayout from "@/components/layout/layout";
import { Divider } from "antd";
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
            <div className="md:w-[90%] mx-auto gap-20 py-32 md:py-40 pb-10 md:pb-16">
              <div className="px-5 md:px-0 md:w-[60%] mx-auto">
                <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-4 rounded-lg">
                  <h4 className="text-[#9747FF] font-medium text-xs md:text-sm">AI That Works for Everyone</h4>
                </div>
                <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 leading-[1.6] md:leading-[1.4]">
                  {/* Freelance Security: Protecting Your Projects. */}
                  Empowering People. Defending the Ecosystem. Harnessing AI for Good.
                </h1>
                <p className="text-sm md:text-base text-[#111111b3] leading-loose md:leading-loose mb-7 md:w-[80%] mx-auto">
                  At Wired Wits, we believe everyone deserves access to tools that help them cut through noise, hold power accountable, and unlock new opportunities.
                </p>
                <div className="flex gap-4 mx-auto mb-10 w-max">
                  <Link href="/auth/signup" className="bg-[#9747FF] text-white py-4 px-8 rounded-lg text-sm font-medium">Get Started</Link>
                  <Link href="/contact-us" className="bg-white text-black py-4 px-8 rounded-lg text-sm font-medium">Reach out to us</Link>
                </div>
              </div>
            </div>
          </section>
          <section className="px-5 md:px-28 mt-0 md:mt-14">
            <div className="mt-20 md:mt-28">
              <div className="flex flex-col md:flex-row gap-5 md:gap-20 mb-8">
                <div className="md:w-[500px]">
                  <h3 className="md:w-[70%] text-2xl md:text-3xl leading-snug font-bold mb-2 md:mb-3">
                    Our Mission
                  </h3>
                  <p className="text-black opacity-80 leading-loose md:leading-relaxed text-sm md:text-base md:w-[75%]">
                    Empowering People. Defending the Ecosystem. Harnessing AI for Good.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-black opacity-80 leading-loose mb-4">
                    At Wired Wits, we believe everyone deserves access to tools that help them cut through noise, hold power accountable, and unlock new opportunities.
                  </p>
                  <p className="text-sm md:text-base text-black opacity-80 leading-loose mb-4">
                    We&apos;re building AI-powered tools to help defend the quality of life ecosystem, tools that empower you to take control of your future, stand up for truth, and make sense of a chaotic world.
                  </p>
                  <p className="text-sm md:text-base text-black opacity-80 leading-loose mb-4">
                    Whether you're navigating misinformation, building a business, or just trying to make smarter decisions in your everyday life, Wired Wits exists to help you move with confidence and purpose.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 md:gap-20">
                <div className="md:w-[500px]">
                  <h3 className="md:w-[70%] text-2xl md:text-3xl leading-snug font-bold mb-2 md:mb-3">
                    Our Story
                  </h3>
                  <p className="text-black opacity-80 leading-loose md:leading-relaxed text-sm md:text-base md:w-[80%]">
                    Where we started
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-black opacity-80 leading-loose mb-4">
                    Wired Wits was founded by Anthony Palmer, a veteran and longtime project management professional, who saw a growing gap between powerful technology and the people who could benefit from it the most. What began as a blog evolved into a platform built to educate, empower, and inspire action, with AI at its core.
                  </p>
                  <p className="text-sm md:text-base text-black opacity-80 leading-loose">
                    Even though we&apos;re just getting started, our purpose is clear: build tools that solve real problems, and make sure those tools are accessible to everyone — not just the already-privileged.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#F5F3FF] px-5 md:px-28 mt-20 py-20">
            <div className="flex flex-col md:flex-row gap-5 md:gap-20 md:mb-8">
              <div className="md:w-[500px]">
                <div className="">
                  <h3 className="text-2xl md:text-3xl mb-3 font-bold leading-[1.3]">
                    What Drives Us
                  </h3>
                  <p className="text-black opacity-80 leading-loose md:leading-relaxed text-sm md:text-base md:mb-14 md:w-[80%]">
                    We&apos;re tired of watching innovation leave people behind. At Wired Wits, we&apos;re building an ecosystem that makes AI practical, personal, and empowering.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex gap-5 flex-col mx-auto">
                  <div className="border-b-2 border-solid border-[#EBEBEB] pb-7">
                    <h3 className="font-bold text-xl md:text-2xl mb-1 md:mb-3">Truth as a Compass</h3>
                    <p className="text-black opacity-80 leading-loose md:leading-relaxed text-sm md:text-base opacity-80">
                      In a world overwhelmed by noise, we believe truth isn&apos;t just a value—it&apos;s a necessity. Our tools are built to cut through confusion, spotlight what&apos;s real, and help people make better, more informed choices every day.
                    </p>
                  </div>
                  <div className="border-b-2 border-solid border-[#EBEBEB] pb-7">
                    <h3 className="font-bold text-xl md:text-2xl mb-1 md:mb-3">Access for All</h3>
                    <p className="text-black opacity-80 leading-loose md:leading-relaxed text-sm md:text-base opacity-80">
                      Innovation means nothing if it&apos;s not inclusive. We&apos;re driven by the belief that powerful technology should serve everyone, not just those with privilege or proximity. Our mission is to break down barriers and build tools anyone can use.
                    </p>
                  </div>
                  <div className="">
                    <h3 className="font-bold text-xl md:text-2xl mb-1 md:mb-3">Purpose Over Hype</h3>
                    <p className="text-black opacity-80 leading-loose md:leading-relaxed text-sm md:text-base opacity-80">
                      We don&apos;t chase trends — we solve real problems. Everything we create is guided by purpose, shaped by impact, and driven by the urgent need to empower people to live better, smarter, and more intentional lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="px-28 pt-28">
            <div className="text-center">
              <h3 className="text-4xl mb-8 font-medium">
                Common Questions About Our Mission and Tools
              </h3>
              <p className="w-[70%] mx-auto text-base leading-relaxed md:leading-relaxed mb-14">
                Understand what we do, who we serve, and how our AI tools can benefit you.
              </p>
            </div>
            <div className="flex gap-5 flex-col w-[70%] mx-auto">
              <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                <h3 className="font-medium text-lg">How do you ensure ethical use of AI?</h3>
                <FaAngleDown className="text-xl" />
              </div>
              <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                <h3 className="font-medium text-lg">What makes WiredWits different from others?</h3>
                <FaAngleDown className="text-xl" />
              </div>
              <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                <h3 className="font-medium text-lg">How can I get involved or contribute?</h3>
                <FaAngleDown className="text-xl" />
              </div>
              <div className="border-2 rounded-lg border-solid border-[#EBEBEB] py-5 px-6 flex items-center justify-between">
                <h3 className="font-medium text-lg">What are your future plans?</h3>
                <FaAngleDown className="text-xl" />
              </div>
            </div>
          </section> */}
        </>
      </DisplayLayout>
    </div>
  );
}
