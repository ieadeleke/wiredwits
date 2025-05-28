'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';



const Navigation = () => {
    const [fixedNav, setFixed] = useState(false);

    const items: MenuProps['items'] = [
        {
            key: '4',
            label: (
                <Link href='/pillars'>
                    All pillars
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
            <div className="w-full py-1 flex justify-between items-center">
                <div className="flex flex-1 items-center gap-5">
                    <Image src={Logo} alt="logo" quality={100} width={60} height={100} className="w-auto h-[4rem] mb-2 mx-aut" />
                </div>
                <div className="flex-1">
                    <ul className="flex gap-12 items-center">
                        <li>
                            <Link href="/" className="text-sm font-[600]">Home</Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="text-sm font-[600]">Blog</Link>
                        </li>
                        <li>
                            <Dropdown menu={{ items }}>
                                <Link href="#" className="text-sm font-[600]">All Pillars</Link>
                            </Dropdown>
                        </li>
                        <li>
                            <Link href="/feedback-hub" className="text-sm font-[600]">Feedback Hub</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 flex justify-between">
                    <div></div>
                    <ul className="flex gap-8 items-center">
                        <li>
                            <Link href="/contact-us" className="text-sm font-[600]">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/auth/signup" className="bg-primary text-white py-4 px-6 rounded-lg text-sm font-medium flex gap-1 items-center">Create Account <GoArrowUpRight className="text-2xl" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;