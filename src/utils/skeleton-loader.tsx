'use client';
import { Skeleton } from "antd";
import { useState } from "react";

const SkeletonLoader = () => {
    const [skeletonData] = useState<any[]>(new Array(12).fill(null));

    return (
        <div className="empty-div flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-10 md:gap-y-0">
            {skeletonData.map((_, index: number) => {
                return (
                    <div key={index}>
                        <Skeleton.Image active className="mb-3" />
                        <Skeleton active />
                    </div>
                )
            }
            )
            }
        </div>
    )
}

export default SkeletonLoader;