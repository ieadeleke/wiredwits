import Image from "next/image";
import SideNav from "./sidenav";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/context/UserContext";

interface LayoutProps {
    children: React.ReactElement,
    noSpaceOnTop?: boolean
}

const AuthLayout = (props: LayoutProps) => {

    const { updateUser, user } = useContext(UserContext);


    return (
        <div className="fle h-[100vh] overflow-hidden">
            <div className="h-[12vh] flex items-center border-b-2 border-solid border-[#E4E4E6] w-full px-8">
                <div className="flex items-center w-full justify-between">
                    <div className="flex items-center gap-8">
                        <Image src={Logo} alt="logo" quality={100} width={100} height={100} className="h-[4rem] w-auto" />
                        <ul className="flex gap-6">
                            <li>
                                <Link href="" className="text-sm font-medium">Home</Link>
                            </li>
                            <li>
                                <Link href="" className="text-sm font-medium">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="" className="text-sm font-medium">Explore</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex gap-6 items-center">
                            <Link href="" className="bg-primary text-sm text-white rounded-lg py-4 px-8">Today&apos;s Summaries</Link>
                            <div className="flex items-center gap-3">
                                {user?.profile_picture ? (
                                    <img
                                        src={user?.profile_picture}
                                        alt="profile" className="size-32 rounded-full object-center object-cover"
                                    />
                                ) : (
                                    <div className="size-12 rounded-full bg-[#EBEBEB] relative flex items-center justify-center">
                                        <h4 className="text-black uppercase font-medium text-base">
                                            {user?.first_name?.slice(0, 1)} {user?.last_name?.slice(0, 1)}
                                        </h4>
                                    </div>
                                )}
                                <h4 className="text-sm font-medium">{user?.first_name} {user?.last_name}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex items-center gap-5 px-5">
                    <Image src={Logo} alt="logo" quality={100} width={100} height={100} className="h-[3rem] w-auto" />
                </div> */}
            </div>
            <div className="flex">
                <div className="w-[250px] bg-[#F3F5F7] h-[88vh] relative border-r-2 border-solid border-[#E4E4E6] py-10">
                    {/* <div className="h-[6rem] border-b-2 border-solid border-[#E4E4E6] w-full mb-8"></div> */}
                    <SideNav />
                </div>
                <div className="flex-1 h-[88vh] overflow-scroll overflow-x-hidden pb-10">
                    <div className="w-[90%] mx-auto mt-10">
                        {/* <div className="h-[6rem] border-b-2 border-solid border-[#E4E4E6] w-full"></div> */}
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;