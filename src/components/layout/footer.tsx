import Link from "next/link";
import { SiLinkedin } from "react-icons/si";
import { FaBluesky } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


interface footerProps {
    noSpaceOnTop?: boolean
}

const Footer = ({ noSpaceOnTop }: footerProps) => {
    return (
        <footer className={`bg-black px-28 ${noSpaceOnTop ? '' : 'mt-28'} pt-24 pb-16`}>
            <div className="flex">
                <div className="w-[650px]">
                    <div className="w-[80%]">
                        <h3 className="text-3xl leading-snug font-bold text-white mb-3">
                            WiredWits
                        </h3>
                        <p className="text-white opacity-70 leading-loose md:leading-loose text-sm mb-5">
                            At Wired Wits, we create AI-powered tools, educational content, and community-driven resources to help people make smarter decisions in business, finance, and everyday life.
                        </p>
                        <div className="flex gap-5 items-center">
                            <Link href="https://www.linkedin.com/company/wired-wits" rel="noreferrer" target="_blank">
                                <div className="size-10 border-2 border-solid border-white rounded-full text-white opacity-80 flex items-center justify-center">
                                    <SiLinkedin className="text-lg" />
                                </div>
                            </Link>
                            <Link href="https://bsky.app/profile/wiredwits.bsky.social" rel="noreferrer" target="_blank">
                                <div className="size-10 border-2 border-solid border-white rounded-full text-white opacity-80 flex items-center justify-center">
                                    <FaBluesky className="text-lg" />
                                </div>
                            </Link>
                            <Link href="https://twitter.com/WiredWit" rel="noreferrer" target="_blank">
                                <div className="size-10 border-2 border-solid border-white rounded-full text-white opacity-80 flex items-center justify-center">
                                    <RiTwitterXLine className="text-lg" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between pt-4">
                        <div>
                            <h5 className="text-white mb-5 text-lg font-medium">Company</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">Home</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">About Us</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">Feedback Hub</Link>
                                </li>
                                {/* <li>
                                    <Link href="" className="text-white text-sm opacity-70">Contact Us</Link>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white mb-5 text-lg font-medium">Pillars</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">Public Good</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">Business Empowerment</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">Everyday AI</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white mb-5 text-lg font-medium">Social</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">LinkedIn</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">Twitter (X)</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-70">Blue Sky</Link>
                                </li>
                                {/* <li>
                                    <Link href="" className="text-white text-sm opacity-70">Resources</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
            <div className="flex justify-between mt-16">
                <div>
                    <p className="text-white text-sm opacity-70">
                        &copy; {new Date().getFullYear()}. Wired Wits, a subsidiary of Anata Marketing, LLC . All Rights Reserved</p>
                </div>
                <div className="flex gap-10">
                    <Link className="text-white text-sm opacity-70" href="">Terms of use</Link>
                    {/* <Link className="text-white text-sm opacity-70" href="">Sitemap</Link> */}
                    <Link className="text-white text-sm opacity-70" href="">Privacy Policies</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;