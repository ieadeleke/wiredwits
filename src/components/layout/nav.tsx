'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";


const Navigation = () => {
    const [fixedNav, setFixed] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offset = window.scrollY;
            if (offset > 10) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        });
    }, []);

    return (
        <nav className={`fixed top-0 ${fixedNav ? 'bg-white shadow-lg' : ''} w-full max-w-[1800px] mx-auto z-40 shadow-2x px-16 bg-whit`}>
            <div className="w-full py-4 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="w-[5rem] h-[3rem] bg-black"></div>
                    <h3 className="text-xl font-bold">WiredWits</h3>
                </div>
                <div>
                    <ul className="flex gap-12 items-center">
                        <li>
                            <Link href="/" className="text-sm font-[600]">Home</Link>
                        </li>
                        <li>
                            <Link href="about-us" className="text-sm font-[600]">About Us</Link>
                        </li>
                        <li>
                            <Link href="/pillars" className="text-sm font-[600]">Pillars</Link>
                        </li>
                        {/* <li>
                            <Link href="/blogs" className="text-sm font-[600]">Blog</Link>
                        </li> */}
                        <li>
                            <Link href="/feedback-hub" className="text-sm font-[600]">Feedback Hub</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-8 items-center">
                        <li>
                            <Link href="/contact-us" className="text-sm font-[600]">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/auth/signup" className="bg-primary text-white py-4 px-6 rounded-lg text-sm font-medium flex gap-1 items-center">Get Started <GoArrowUpRight className="text-2xl" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;