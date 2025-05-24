'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiNewspaperClipping } from "react-icons/pi";
import { MdOutlineExplore } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { TbHelp } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { usePathname, useRouter } from "next/navigation";
import logOut from '@/utils/auth/logOut';
import { useContext } from "react";
import UserContext from "@/context/UserContext";


interface SideNavInterface {
    togglePageSpinner: () => void
}


const SideNav = (props: SideNavInterface) => {
    const pathName = usePathname();
    const router = useRouter();
    const [fixedNav, setFixed] = useState(false);
    const { updateUser } = useContext(UserContext)

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

    function handleLogout() {
        props.togglePageSpinner();
        logOut();
        // router.push("/auth/signin");
        updateUser(null);
        window.location.href = "/auth/signin";
    }

    return (
        <>
            <ul className="flex flex-col gap-3 px-8">
                <li>
                    <Link href="/account/dashboard" className={`${pathName === '/account/dashboard' ? 'active px-3' : ''} text-sm flex gap-2 py-4 font-medium items-center`}>
                        <LuLayoutDashboard className="text-xl" /> Dashboard</Link>
                </li>
                <li>
                    <Link href="/account/summaries" className={`${pathName === '/account/summaries' ? 'active px-3' : ''} text-sm flex gap-2 py-4 font-medium items-center`}>
                        <PiNewspaperClipping className="text-xl" /> Your News</Link>
                </li>
                <li>
                    <Link href="/account/explore" className={`${pathName === '/account/explore' ? 'active px-3' : ''} text-sm flex gap-2 py-4 font-medium items-center`}>
                        <MdOutlineExplore className="text-xl" /> Discover Topics</Link>
                </li>
                {/* <li>
                    <Link href="/account/token-history" className={`${pathName === '/account/token-history' ? 'active px-3' : ''} text-sm flex gap-2 py-4 font-medium items-center`}>
                        <RiHistoryFill className="text-xl" /> Token History</Link>
                </li> */}
                <li>
                    <Link href="/account/settings" className={`${pathName === '/account/settings' ? 'active px-3' : ''} text-sm flex gap-2 py-4 font-medium items-center`}>
                        <CgProfile className="text-xl" /> My Profile</Link>
                </li>
            </ul>
            <div className="absolute bottom-6">
                <ul className="flex flex-col gap-10 px-8">
                    <li>
                        <Link href="/contact-us" className={`text-sm flex gap-2 font-medium items-center`}>
                            <TbHelp className="text-xl" /> Contact Us</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={handleLogout} className={`text-sm flex gap-2 font-medium items-center`}>
                            <TbLogout className="text-xl" /> Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideNav;