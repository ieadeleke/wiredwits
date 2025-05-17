import React, { useState } from "react";

import { DateTime } from "luxon";
import { Pagination, Skeleton } from "antd";
import AppRoutes from "@/utils/routes";
import Link from "next/link";
import Image from "next/image";
import SkeletonLoader from "@/utils/skeleton-loader";

interface SummariesProps {
    paginationControl: (page: number) => void
    data?: []
    currPage: number
}

const AllSummariesListing = (props: SummariesProps) => {
    const [currentPage, setCurrentPage] = useState(3);

    const paginationControl = (val: number) => {
        setCurrentPage(val);
        props.paginationControl(val);
    };

    return (
        <div className="blog-layout">
            <div className="blog-grid-display mt_2 mb_4">
                {/* <h5 className="blog-sect-title">Featured Posts</h5> */}
                {props?.data?.length ? (
                    <>
                        <div className="blog-grid-content flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-14">
                            {props.data.map((blog: any, index) => (
                                <div key={index} className="blog-cont-disp">
                                    <div>
                                        <Link
                                            href={encodeURI(
                                                `${AppRoutes.view_summary}/${blog?.title}/${blog?.uri}`
                                            )}
                                        //   className="btn btn-border-main"
                                        >
                                            <div className="image-container rounded-lg mb-2">
                                                <img
                                                    src={blog?.image}
                                                    alt={blog?.title}
                                                    className="h-[12rem] w-full rounded-lg object-cover object-center"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <div className="blog-data-text mb-5">
                                                <div className="title-cover">
                                                    <h4 className="mb-2 font-[500]">{blog?.title}</h4>
                                                </div>
                                                <p className="blog-sect-paragraph text-sm leading-loose opacity-80">
                                                    {blog?.body?.replace(/<[^>]*>/g, "")}
                                                </p>
                                                <div className="blog-card-footer grid-flex mt-5 md:mt-5">
                                                    <ul>
                                                        <li className="text-xs opacity-80">
                                                            {DateTime.fromISO(blog.dateTime).toLocaleString(
                                                                DateTime.DATE_HUGE
                                                            )}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-max mx-auto mt-10">
                            <Pagination
                                current={props.currPage}
                                total={100}
                                pageSize={21}
                                showSizeChanger={false}
                                onChange={paginationControl}
                            />
                        </div>
                    </>
                ) : (
                    <SkeletonLoader />
                )
                }
            </div>
        </div>
    );
};

export default AllSummariesListing;