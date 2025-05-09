import Link from "next/link";

interface footerProps {
    noSpaceOnTop?: boolean
}

const Footer = ({ noSpaceOnTop }: footerProps) => {
    return (
        <footer className={`bg-black px-28 ${noSpaceOnTop ? '' : 'mt-28'} pt-24 pb-16`}>
            <div className="flex">
                <div className="w-[650px]">
                    <div className="w-[60%]">
                        <h3 className="text-3xl leading-snug font-bold text-white mb-5">
                            WiredWits
                        </h3>
                        <p className="text-white opacity-70 leading-loose md:leading-loose text-sm">
                            We understand that software security is a multifaceted challenge that requires a holistic approach.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between">
                        <div>
                            <h5 className="text-white mb-5 text-lg">Who We Are</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Home</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">About Us</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Feedback Hub</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Resources</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white mb-5 text-lg">Social</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Home</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">About Us</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Feedback Hub</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Resources</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white mb-5 text-lg">Social</h5>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Home</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">About Us</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Feedback Hub</Link>
                                </li>
                                <li>
                                    <Link href="" className="text-white text-sm opacity-50">Resources</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[.1rem] bg-[#EBEBEB] opacity-30 mt-20"></div>
            <div className="flex justify-between mt-16">
                <div>
                    <p className="text-white text-sm opacity-50">Trademark &copy; {new Date().getFullYear()}</p>
                </div>
                <div className="flex gap-10">
                    <Link className="text-white text-sm opacity-50" href="">Terms of use</Link>
                    <Link className="text-white text-sm opacity-50" href="">Sitemap</Link>
                    <Link className="text-white text-sm opacity-50" href="">Privacy Policies</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;