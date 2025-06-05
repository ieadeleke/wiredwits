'use client';

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { useGetAllContent } from "@/utils/apiHooks/profile/useGetSecurityText";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import DisplayLayout from "@/components/layout/layout";


const SecurityPage = () => {

    const { showSnackBar } = useContext(GlobalActionContext);
    const { isLoading, data, error, getContent } = useGetAllContent();


    const [loadingData, setLoadingData] = useState(false);
    const [privacyData, setPrivacyData] = useState<any>('');

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
    }, [error])

    useEffect(() => {
        if (data?.found) {
            data.data.forEach((data: any) => {
                if (data.title === "privacy") {
                    setPrivacyData(data.text_content)
                };
            });
        }
    }, [data])

    useEffect(() => {
        getContent();
    }, []);

    return (
        <>
            <DisplayLayout>
                <>
                    <section className="hero-bg px-5 md:px-28 pt-36 md:pt-52 pb-14">
                        <div className="md:w-[50%] mx-auto text-center items-center gap-20">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-medium mb-2 md:mb-5 leading-relaxed md:leading-tight">
                                    Privacy Policies
                                </h1>
                            </div>
                            <div>
                            </div>
                        </div>
                    </section>
                    <div className="px-5 md:px-20 py-20">
                        {isLoading ? (
                            <Spin indicator={<LoadingOutlined spin style={{ fontSize: 30 }} />} />
                        ) : (
                            <div className="md:w-[75%] mx-auto">
                                <p
                                    className="inner-article-text"
                                    dangerouslySetInnerHTML={{ __html: privacyData }}></p>
                            </div>
                        )}
                    </div>
                </>
            </DisplayLayout>
        </>
    )
}

export default SecurityPage;