'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

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
        <nav className={`fixed top-0 ${fixedNav ? 'bg-white shadow-xl' : ''} w-full max-w-[1800px] mx-auto z-40 shadow-2x px-28`}>
            <div className="w-full py-6 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="w-[5rem] h-[3rem] bg-black"></div>
                    <h3 className="text-xl font-bold">WiredWits</h3>
                </div>
                <div>
                    <ul className="flex gap-10 items-center">
                        <li>
                            <a href="/" className="text-sm font-medium opacity-80">Home</a>
                        </li>
                        <li>
                            <a href="about-us" className="text-sm font-medium opacity-80">About Us</a>
                        </li>
                        <li>
                            <a href="/pillars" className="text-sm font-medium opacity-80">Pillars</a>
                        </li>
                        <li>
                            <a href="/blogs" className="text-sm font-medium opacity-80">Blog</a>
                        </li>
                        <li>
                            <a href="" className="text-sm font-medium opacity-80">Feedback Hub</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex gap-10 items-center">
                        <li>
                            <Link href="/contact-us" className="text-sm font-medium opacity-80">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/auth/signup" className="bg-[#9747FF] text-white py-5 px-8 rounded-lg text-sm font-medium">Get Started</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;