'use client';

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Logo from "@/assets/images/logo.png";
import LogoWhite from "@/assets/images/logo_white.png";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Drawer, Dropdown, MenuProps } from "antd";
import { FaTimes } from "react-icons/fa";
import UserContext from "@/context/UserContext";



const Navigation = () => {

    const [fixedNav, setFixed] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { user } = useContext(UserContext);


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

    const toggleDrawer = () => setOpenMenu(!openMenu);

    return (
        <nav className={`fixed top-0 ${fixedNav ? 'bg-white shadow-lg' : ''} w-full max-w-[1800px] mx-auto z-50 shadow-2x px-5 md:px-16 bg-whit`}>
            <div className="w-full py-1 flex justify-between items-center text-white">
                <div className="flex items-center gap-20 flex-1">
                    <Link href="/">
                        <Image src={Logo} alt="logo" quality={100} width={700} height={1000} className="w-auto h-[4rem] mb- mx-aut mb-0 md:mb-2" />
                    </Link>
                    <ul className="hidden md:flex gap-12 items-center">
                        <li>
                            <Link href="/" className={`text-sm font-[600] text-black opacity-80`}>Home</Link>
                        </li>
                        <li>
                            <Link href="/blog" className={`text-sm font-[600] text-black opacity-80`}>Blog</Link>
                        </li>
                        <Dropdown menu={{ items }}>
                            <Link href="#" className={`text-sm font-[600] text-black opacity-80`}>All Pillars</Link>
                        </Dropdown>
                        {/* <li>
                            <Link href="/blogs" className={`text-sm font-[600] ${ fixedNav ? 'text-black' : 'text-white'} opacity-80`}>Blog</Link>
                        </li> */}
                        <li>
                            <Link href="/feedback-hub" className={`text-sm font-[600] text-black opacity-80`}>Feedback Hub</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 hidden md:flex justify-between">
                    <div></div>
                    {
                        user?.first_name ?
                            <Link href="/account/dashboard" className="flex gap-3 items-center px-10">
                                {user?.profile_picture ? (
                                    <img
                                        src={user?.profile_picture}
                                        alt="profile" className="size-14 rounded-full object-center object-cover"
                                    />
                                ) : (
                                    <div className="size-14 rounded-full bg-[#EBEBEB] relative flex items-center justify-center">
                                        <h4 className="text-black uppercase font-medium text-xl">
                                            {user?.first_name?.slice(0, 1)} {user?.last_name?.slice(0, 1)}
                                        </h4>
                                    </div>
                                )}
                                <div>
                                    <h4 className="text-black mb-1 font-[600] text-base">{user?.first_name} {user?.last_name}</h4>
                                    <p className="text-xs text-black">{user?.email_address}</p>
                                </div>
                            </Link>
                            :
                            <ul className="flex gap-8 items-center">
                                {/* <li>
                                <Link href="/contact-us" className={`text-sm font-[600] ${ fixedNav ? 'text-black' : 'text-white'} opacity-80`}>Contact Us</Link>
                            </li> */}
                                <li>
                                    <Link href="/auth/signin" className={`text-sm font-[600] text-black opacity-80`}>Sign In</Link>
                                </li>
                                <li>
                                    <Link href="/auth/signup" className="bg-primary text-white py-4 px-6 rounded-lg text-sm font-medium flex gap-1 items-center">Create Account <GoArrowUpRight className="text-2xl" /></Link>
                                </li>
                            </ul>
                    }
                </div>
                <div className="block md:hidden" onClick={toggleDrawer}>
                    <HiOutlineMenuAlt3 className="text-3xl text-black" />
                </div>
            </div>
            <Drawer open={openMenu} onClose={toggleDrawer} footer={null}>
                <div>
                    <div className="px-5 pt-2 pb-8 pb-10 flex items-center justify-between">
                        <div className="">
                            <Image src={Logo} alt="logo" quality={100} width={700} height={1000} className="w-auto h-[4rem] mb- mx-aut" />
                        </div>
                        <div onClick={toggleDrawer}>
                            <FaTimes className="text-3xl text-[#ff0000]" />
                        </div>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
                            <Link href="/" className="text-sm font-medium p-4">
                                Home</Link>
                        </li>
                        {
                            user?.first_name &&
                            <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
                                <Link href="/account/dashboard" className="text-sm font-medium p-4">
                                    Account Dashboard</Link>
                            </li>
                        }
                        <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
                            <Link href="/pillars" className="text-sm font-medium p-4">
                                Pillars</Link>
                        </li>
                        <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
                            <Link href="/blogs" className="text-sm font-medium p-4">
                                Blog</Link>
                        </li>
                        <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
                            <Link href="/feedback-hub" className="text-sm font-medium p-4">
                                Feedback Hub</Link>
                        </li>
                        {
                            user?.first_name ? ''
                                :
                                <>
                                    <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
                                        <Link href="/auth/signin" className="text-sm font-medium p-4">
                                            Sign In</Link>
                                    </li>
                                    <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
                                        <Link href="/auth/signup" className="text-sm font-medium p-4">
                                            Create Account</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </Drawer>
        </nav>
    )
}

export default Navigation;