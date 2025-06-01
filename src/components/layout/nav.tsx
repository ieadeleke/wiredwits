'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Dropdown, MenuProps } from "antd";



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

    const items: MenuProps['items'] = [
        {
            key: '4',
            label: (
                <Link href='/pillars'>
                    Overview
                </Link>
            ),
        },
        {
            key: '1',
            label: (
                <Link href='/public-good'>
                    Public Good
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href='/business-empowerment'>
                    Business Empowerment
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link href='/everyday-ai'>
                    Everyday AI
                </Link>
            ),
        }
    ];

    return (
        <nav className={`fixed top-0 ${fixedNav ? 'bg-white shadow-lg' : ''} w-full max-w-[1800px] mx-auto z-50 shadow-2x px-5 md:px-16 bg-whit`}>
            <div className="w-full py-1 flex justify-between items-center">
                <div className="flex items-center gap-20 flex-1">
                    <Image src={Logo} alt="logo" quality={100} width={60} height={100} className="w-auto h-[4rem] mb-2 mx-aut" />
                    {/* <div className="w-[5rem] h-[3rem] bg-black"></div>
                    <h3 className="text-xl font-bold">WiredWits</h3> */}
                    {/* </div> */}
                    {/* <div className="hidden md:flex flex-1"> */}
                    <ul className="flex gap-12 items-center">
                        <li>
                            <Link href="/" className={`text-sm font-[600] ${fixedNav ? 'text-black' : 'text-white'} opacity-80`}>Home</Link>
                        </li>
                        <li>
                            <Link href="about-us" className={`text-sm font-[600] ${fixedNav ? 'text-black' : 'text-white'} opacity-80`}>About Us</Link>
                        </li>
                        <Dropdown menu={{ items }}>
                            <Link href="#" className={`text-sm font-[600] ${fixedNav ? 'text-black' : 'text-white'} opacity-80`}>All Pillars</Link>
                        </Dropdown>
                        {/* <li>
                            <Link href="/blogs" className={`text-sm font-[600] ${ fixedNav ? 'text-black' : 'text-white'} opacity-80`}>Blog</Link>
                        </li> */}
                        <li>
                            <Link href="/feedback-hub" className={`text-sm font-[600] ${fixedNav ? 'text-black' : 'text-white'} opacity-80`}>Feedback Hub</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 hidden md:flex justify-between">
                    <div></div>
                    <ul className="flex gap-8 items-center">
                        {/* <li>
                            <Link href="/contact-us" className={`text-sm font-[600] ${ fixedNav ? 'text-black' : 'text-white'} opacity-80`}>Contact Us</Link>
                        </li> */}
                        <li>
                            <Link href="/auth/signin" className={`text-sm font-[600] ${fixedNav ? 'text-black' : 'text-white'} opacity-80`}>Sign In</Link>
                        </li>
                        <li>
                            <Link href="/auth/signup" className="bg-primary text-white py-4 px-6 rounded-lg text-sm font-medium flex gap-1 items-center">Create Account <GoArrowUpRight className="text-2xl" /></Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:none">
                    <HiOutlineMenuAlt3 className="text-3xl" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;