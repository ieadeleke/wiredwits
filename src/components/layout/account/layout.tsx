'use client';
import Image from "next/image";
import SideNav from "./sidenav";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import UserContext from "@/context/UserContext";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import PaymentModal from "@/components/pages/account/sub-modal";
import Footer from "../footer";
import Navigation from "../nav";

interface LayoutProps {
    children: React.ReactElement,
    noSpaceOnTop?: boolean
}

const AuthLayout = (props: LayoutProps) => {

    const { updateUser, user } = useContext(UserContext);
    const [spinIcon, setSpinIcon] = useState<boolean>(false);
    const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);


    let antIcon = <LoadingOutlined spin style={{ fontSize: 40, color: '#9747FF' }} />

    const togglePageSpinner = () => setSpinIcon(!spinIcon);

    const toggleDisplayPaymentModal = () => setOpenPaymentModal(!openPaymentModal);

    const scrollableRef = useRef<any>(null);

    const scrollToTop = () => {
        console.log('hiii')
        console.log('scrollableRef.current:', scrollableRef.current); // Add this line
        if (scrollableRef.current) {
            console.log('Inside if block')
            scrollableRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            console.log('scrollableRef.current is null or undefined'); // Add this too
        }
    };

    return (
        <div className="fle md:h-[100vh] md:overflow-hidden">
            <Spin spinning={spinIcon} indicator={antIcon}>
                <div className="block md:hidden">
                    <Navigation />
                </div>
                <div className="h-[12vh] hidden md:flex items-center border-b-2 border-solid border-[#E4E4E6] w-full px-8">
                    <div className="flex items-center w-full justify-between">
                        <div className="flex items-center gap-10">
                            <Image src={Logo} alt="logo" quality={100} width={100} height={100} className="h-[4rem] w-auto" />
                            <ul className="flex gap-8">
                                <li>
                                    <Link href="/" className="text-sm font-medium">Home</Link>
                                </li>
                                <li>
                                    <Link href="/account/dashboard" className="text-sm font-medium">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href="/account/explore" className="text-sm font-medium">Discover Topics</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex gap-6 items-center">
                                {/* <Link href="/account/summaries" className="bg-primary text-sm text-white rounded-lg py-4 px-8">Today&apos;s Top Stories</Link> */}
                                <button onClick={toggleDisplayPaymentModal} className="bg-primary text-sm text-white rounded-lg py-4 px-8">Subscribe</button>
                                <div>
                                    <Link href='/account/settings' className="flex items-center gap-3">
                                        {user?.profile_picture ? (
                                            <img
                                                src={user?.profile_picture}
                                                alt="profile" className="size-12 rounded-full object-center object-cover"
                                            />
                                        ) : (
                                            <div className="size-12 rounded-full bg-[#EBEBEB] relative flex items-center justify-center">
                                                <h4 className="text-black uppercase font-medium text-base">
                                                    {user?.first_name?.slice(0, 1)} {user?.last_name?.slice(0, 1)}
                                                </h4>
                                            </div>
                                        )}
                                        <h4 className="text-sm font-medium">{user?.first_name} {user?.last_name}</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex items-center gap-5 px-5">
                    <Image src={Logo} alt="logo" quality={100} width={100} height={100} className="h-[3rem] w-auto" />
                </div> */}
                </div>
                <div className="flex pt-20 md:pt-0 md:h-[88vh]">
                    <div className="hidden md:flex w-[250px] bg-[#F3F5F7] h-full relative border-r-2 border-solid border-[#E4E4E6] py-10">
                        {/* <div className="h-[6rem] border-b-2 border-solid border-[#E4E4E6] w-full mb-8"></div> */}
                        <SideNav togglePageSpinner={togglePageSpinner} />
                    </div>
                    <div ref={scrollableRef} className="flex-1 h-full overflow-y-auto overflow-x-hidden pb-10">
                        <div className="w-[90%] mx-auto mt-10">
                            {/* <div className="h-[6rem] border-b-2 border-solid border-[#E4E4E6] w-full"></div> */}
                            {props.children}
                            <button onClick={scrollToTop} className="mb-4 bg-primary py-4 px-6">
                                Scroll to Topp
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden">
                    <Footer />
                </div>
            </Spin>
            <PaymentModal open={openPaymentModal} closeModal={toggleDisplayPaymentModal} />
        </div>
    )
}

export default AuthLayout;