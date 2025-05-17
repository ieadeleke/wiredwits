import DisplayLayout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

export default function BlogDetailPage() {
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="w-[70%] mx-auto pt-56 pb-0">
                        <div className="blog-header text-center">
                            <p className="text-base opacity-80 mb-5">December 26, 2025</p>
                            <h3 className="text-6xl font-bold leading-tight mb-5 w-[80%] mx-auto">
                                How to choose the best business management SaaS.
                            </h3>
                            <div className="bg-black w-full h-[30rem] rounded-2xl mb-10"></div>
                        </div>
                        <div className="blog-body">
                            <p className="text-base opacity-80 leading-loose md:leading-loose mb-5">
                                In today&apos;s fast-paced business environment, accurate budgeting and forecasting are vital for to sustaining growth and ensuring long-term financial stability. However, many businesses form in struggle with manual processes that are time-consuming, prone to errors, and disconnected to from real-time data. By integrating budgeting and forecasting tools. Budgeting sets the financial framework for the fiscal year, while forecasting allows businesses to adjust their financial for form trajectory based on actual performance. Together, these tools provide a dynamic approach to form financial to the in management, ensuring that businesses can react quickly to changes in the market and make to the strategic decisions grounded in data.
                            </p>
                            <h4 className="text-2xl font-medium mb-5">
                                The importance of budgeting and forecasting in business.
                            </h4>
                            <p className="text-base opacity-80 leading-loose md:leading-loose">
                                In today&apos;s fast-paced business environment, accurate budgeting and forecasting are vital for to sustaining growth and ensuring long-term financial stability. However, many businesses form in struggle with manual processes that are time-consuming, prone to errors, and disconnected to from real-time data. By integrating budgeting and forecasting tools. Budgeting sets the financial framework for the fiscal year, while forecasting allows businesses to adjust their financial for form trajectory based on actual performance. Together, these tools provide a dynamic approach to form financial to the in management, ensuring that businesses can react quickly to changes in the market and make to the strategic decisions grounded in data.
                            </p>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    );
}