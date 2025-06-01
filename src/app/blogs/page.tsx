'use client';

import DisplayLayout from "@/components/layout/layout";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { useFetchBlogs } from "@/utils/apiHooks/blogs/useFetchBlogs";
import SkeletonLoader from "@/utils/skeleton-loader";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";


export default function BlogPage() {
    const { showSnackBar } = useContext(GlobalActionContext);

    const { fetchBlogs, data, error, isLoading } = useFetchBlogs();
    const [loadingData, setLoadingData] = useState(false);
    const [allBlogs, setAllBlogs] = useState([]);

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
        fetchBlogs();
        setLoadingData(true);
    }, [error])

    return (
        <div>
            <DisplayLayout>
                <>
                    <section className="hero-bg px-5 md:px-28 pt-36 md:pt-44 pb-10 md:pb-14">
                        <div className="w-[70%] md:w-[50%] items-center gap-20">
                            <div className="text-text-left">
                                <h1 className="text-3xl md:text-6xl font-medium mb-5 leading-normal md:leading-tight md:w-[70%]">
                                    Latest insights and trends
                                </h1>
                            </div>
                        </div>
                    </section>
                    <section className="px-5 md:px-24 mt-20">
                        <div className="">
                            <div className="mb-3">
                                <h3 className="text-xl md:text-2xl font-medium">All Blogs</h3>
                            </div>
                            {
                                loadingData ?
                                    <SkeletonLoader />
                                    :
                                    <div className="flex flex-col md:grid grid-cols-3 gap-8">
                                        {
                                            allBlogs.map((blog: any, index: number) => (
                                                <Link href={`/blogs/${blog._id}`} key={index}>
                                                    <div className="" key={index}>
                                                        <div className="w-full mb-4">
                                                            <Image src={blog.image} quality={100} width={400} height={0} className="h-[15rem] w-full rounded-xl object-fit object-cover" alt="blog image" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg md:text-xl font-medium mb-2">
                                                                {blog.title}
                                                            </h4>
                                                            <p className="blog-sect-paragraph text-sm leading-loose md:leading-loose opacity-80" dangerouslySetInnerHTML={{ __html: blog.blog_content }}>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                            }
                        </div>
                    </section>
                </>
            </DisplayLayout>
        </div >
    );
}