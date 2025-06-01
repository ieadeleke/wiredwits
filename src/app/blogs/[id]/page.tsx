'use client';

import DisplayLayout from "@/components/layout/layout";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { useFetchBlogs } from "@/utils/apiHooks/blogs/useFetchBlogs";
import { useFetchSingleBlog } from "@/utils/apiHooks/blogs/useFetchSingleBlog";
import SkeletonLoader from "@/utils/skeleton-loader";
import { Skeleton } from "antd";
import { DateTime } from "luxon";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function BlogDetailPage() {

    const param = useParams();

    const { showSnackBar } = useContext(GlobalActionContext);

    const { fetchSingleBlog, data, error, isLoading } = useFetchSingleBlog();
    const [loadingData, setLoadingData] = useState(false);
    const [allBlogs, setAllBlogs] = useState<any>({});

    useEffect(() => {
        if (data?.found) {
            setAllBlogs(data.blog);
            setLoadingData(false);
        }
    }, [data])

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
        setLoadingData(false);
    }, [error])

    useEffect(() => {
        fetchSingleBlog(param.id);
        setLoadingData(true);
    }, [error])
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="px-5 md:px-0 md:w-[70%] mx-auto pt-40 md:pt-56 pb-0">
                        {loadingData ? (
                            // loader
                            <div className="main-blog-content">
                                <div className="skeleton-img">
                                    <Skeleton.Image active />
                                </div>
                                <div>
                                    <div className="mt-3">
                                        <Skeleton active />
                                    </div>
                                    <div className="mt-3">
                                        <Skeleton active />
                                    </div>
                                    <div className="mt-3">
                                        <Skeleton active />
                                    </div>
                                    <div className="mt-3">
                                        <Skeleton active />
                                    </div>
                                    <div className="mt-3">
                                        <Skeleton active />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="blog-header text-center">
                                    <p className="text-base opacity-80 mb-5">
                                        {DateTime.fromISO(allBlogs?.created_at).toLocaleString(
                                            DateTime.DATE_HUGE
                                        )}</p>
                                    <h3 className="text-2xl md:text-6xl font-bold leading-tight mb-5 md:w-[90%] mx-auto">
                                        {allBlogs?.title}
                                    </h3>
                                    <img
                                        src={allBlogs?.image}
                                        alt={allBlogs?.title}
                                        className="max-h-[30rem] object-fit object-cover w-full rounded-lg mb-5"
                                    />
                                </div>
                                <div className="blog-body">
                                    <p
                                        className="inner-article-text"
                                        dangerouslySetInnerHTML={{
                                            __html: allBlogs.blog_content,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            </DisplayLayout>
        </div>
    );
}