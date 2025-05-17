'use client';

import AuthLayout from "@/components/layout/account/layout";
import { Input } from "@/components/ui/input";
import Spinner from "@/components/ui/spin";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import UserContext from "@/context/UserContext";
import { Profile } from "@/models/profile";
import { useAskQuestion } from "@/utils/apiHooks/profile/useAskQuestion";
import { useGetSingleSummary } from "@/utils/apiHooks/profile/useGetSingleSummary";
import AppRoutes from "@/utils/routes";
import { summaryQuestionValidator } from "@/utils/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Skeleton } from "antd";
import Link from "next/link";
import { useParams, useSearchParams, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { DateTime } from "luxon";
import { GoArrowUpRight } from "react-icons/go";
import { useGetContentParameters } from "@/utils/apiHooks/profile/useGetContentParameters";
import GenerateContent from "@/components/pages/account/generate-content";



const GenerateNewContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams()

    const { handleSubmit, control } = useForm({
        resolver: yupResolver(summaryQuestionValidator)
    });
    const { showSnackBar } = useContext(GlobalActionContext);

    const { isLoading, data, error, getContentParameters } = useGetContentParameters();
    const { isLoading: loadingQuestion, data: summaryQuestionData, error: askQuestionError, askQuestionOnSummary } = useAskQuestion();

    const [currentId, setCurrentId] = useState<number>(0);
    const [displayGenerateModal, setDisplayGenerateModal] = useState(false);

    const [display, setDisplay] = useState("view");
    const [tokenCount, setTokenCount] = useState(0);
    const [generatedWarning, setGeneratedWarning] = useState("");
    const [tokenBalance, setTokenBalance] = useState("");
    const [dataFound, setDataFound] = useState<boolean>(true);
    const [articleData, setArticleData] = useState("");
    const [createdSummaryId, setCreatedSummaryId] = useState("");
    const [summaryQuestions, setSummaryQuestions] = useState<any>([]);
    const [summaryQuestionsToDisplay, setSummaryQuestionsToDisplay] = useState([]);
    const [dataDisplay, setDataDisplay] = useState<any>({});
    const { updateUser, user } = useContext(UserContext);
    const [loadingData, setLoadingData] = useState(true);
    const [currentQuestionTab, setCurrentQuestionTab] = useState("");
    const [loadQuestion, setLoadQuestion] = useState(false);
    const [questionError, setQuestionError] = useState(false);
    const [tempQuestionBox, setTempQuestionBox] = useState<any>([]);
    const [tempSecQuestionBox, setTempSecQuestionBox] = useState<any>([]);


    // new
    const [contentParametersBox, setContentParametersBox] = useState<any>([]);
    const [displayParameterModal, setDisplayParameterModal] = useState<boolean>(false);
    const [contentMain, setContentMain] = useState({});
    const [blogContent, setBlogContent] = useState("");
    const [newlyGeneratedContent, setNewlyGeneratedContent] = useState("");
    const [loadingContentData, setLoadingContentData] = useState(true);




    const toggleTopicModal = () => {
        setDisplayParameterModal(!displayParameterModal);
    }

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
    }, [error])

    useEffect(() => {
        if (askQuestionError) {
            showSnackBar({
                severity: "error",
                message: askQuestionError,
            });
            setTempQuestionBox([]);
            setTempSecQuestionBox([])
        }
    }, [askQuestionError])


    useEffect(() => {
        getContentParameters();
    }, []);

    const toggleContentGenerationModal = () => {
        setDisplayGenerateModal(!displayGenerateModal);
    };

    // questions
    const handleQuestionTab = async () => {
        let questionBox = summaryQuestions;
        let secQuestionBox: any = summaryQuestionsToDisplay;
        let questionObj = {
            role: "user",
            content: currentQuestionTab,
        };
        setLoadQuestion(true); // loader
        setSummaryQuestionsToDisplay(secQuestionBox); // questions to load
        questionBox.push(questionObj);
        secQuestionBox.push(questionObj);
        askQuestionOnSummary({
            summaryId: createdSummaryId,
            questionBox
        })
        setTempQuestionBox(questionBox);
        setTempSecQuestionBox(secQuestionBox);
    };

    const displayContentGenerationPage = () => {
        const newEntry = {
            openNewQuestion: true,
            contentMain: dataDisplay,
            summaryQuestions: summaryQuestions,
            content: articleData.length ? articleData : dataDisplay.body
        };
        let rand = Math.trunc(Math.random() * 90000) + 10000;
        let randKey = `wiredwitscontent-${rand}`;
        sessionStorage.setItem(randKey, JSON.stringify(newEntry));
        const fullPath = `${window.location.origin}/account/read-generated-content?sessionkey=${randKey}`;
        window.open(fullPath, '_blank');
    };

    useEffect(() => {
        if (summaryQuestionData?.found) {
            // if (loadQuestion.data.success) {
            let questionBox = tempQuestionBox;
            let secQuestionBox = tempSecQuestionBox;
            let currData = summaryQuestionData.data;
            let obj = {
                role: "assistant",
                status: "success",
                content: currData?.data?.message?.content.length
                    ? currData?.data?.message?.content
                    : "",
            };

            questionBox.push(obj);
            secQuestionBox.push(obj);
            setSummaryQuestions(questionBox);
            setSummaryQuestionsToDisplay(secQuestionBox);
            setCurrentQuestionTab("");
            setLoadQuestion(false);

            // dispatch(update({
            //     logged_in: true,
            //     userData: {
            //         ...userDetails?.userData,
            //         token_count: currData?.tokenBalance
            //     }
            // }))
            // } else {
            //     let obj = {
            //         role: "assistant",
            //         status: "error",
            //         content: loadQuestion.data.message,
            //     };
            //     secQuestionBox.push(obj);
            //     setQuestionError(true);
            //     setSummaryQuestionsToDisplay(secQuestionBox);
            //     // openNotificationWithIcon("error", loadQuestion.data.message);
            // }
        }
    }, [summaryQuestionData])

    const updateNewlyGeneratedContent = (content: any) => {
        console.log(content);
        setLoadingData(false);
        setNewlyGeneratedContent(content);
        setLoadingContentData(false);
    }

    const handleAskQuestionOnEnterButton = (e: any) => {
        if (e.code === "Enter") {
            handleQuestionTab();
        }
    };

    useEffect(() => {
        const paramValue = searchParams.get('sessionkey');
        console.log(paramValue);
        if (!paramValue) {
            showSnackBar({
                severity: "error",
                message: "An error occurred while generating content. Redirecting to dashboard....",
            });
            router.push('/account/dashboard');
            // router.g("/dashboard");
        } else {
            const sessionData = sessionStorage.getItem(paramValue);
            if (sessionData) {
                let parsedData = JSON.parse(sessionData);
                if (parsedData.openNewQuestion) toggleContentGenerationModal();
                setContentMain(parsedData.contentMain);
                setBlogContent(parsedData.content);
                setSummaryQuestions(parsedData.summaryQuestions);
                // dispatch(update_subscription(finishSubProcess.data.data.data.next_sub_expiry_date))
                // setBlogResponse(parsedData.response);
                // setDisplayQuestionTab(true);
            } else {
                showSnackBar({
                    severity: "error",
                    message: "An error occurred while generating content. Redirecting to dashboard....",
                });
                router.push('/account/dashboard');
                // openNotificationWithIcon("error", "An error occurred while generating content. Redirecting to dashboard....");
                // Navigate("/dashboard");
            }
        }
    }, [location]);

    return (
        <div>
            <AuthLayout>
                <div>
                    {
                        display === "view" ?
                            <div>
                                <div className="md:w-[70%] mx-auto">
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
                                            {/* Summary display*/}
                                            <div className="">
                                                <div>
                                                    <div>
                                                        {/* <p className="text-base text-center mb-4">
                                                                    {DateTime.fromISO(dataDisplay.dateTime).toLocaleString(
                                                                        DateTime.DATE_HUGE
                                                                    )}
                                                                </p>
                                                                <div>
                                                                    <h3 className="text-3xl text-center font-bold leading-tight mb-5 w-[80%] mx-auto">
                                                                        {dataDisplay.title}
                                                                    </h3>
                                                                </div>
                                                                <img
                                                                    src={dataDisplay.image}
                                                                    alt={dataDisplay.title}
                                                                    className="max-h-[25rem] object-fit object-cover w-full rounded-lg mb-5"
                                                                /> */}
                                                        <p
                                                            className="inner-article-text"
                                                            dangerouslySetInnerHTML={{
                                                                __html: newlyGeneratedContent,
                                                            }}
                                                        ></p>
                                                        <div className="mt-10">
                                                            <p className="body-text mb-3">Token Cost: {tokenCount} tokens</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            :
                            //insufficient tokens
                            <div className="min-h-[45vh] md:min-h-[70vh] flex items-center justify-center">
                                <div className="md:w-[60%] mx-auto">
                                    {
                                        display === "warning" ?
                                            <div>
                                                <div className="size-32 mb-4 bg-[#E8DEFF] rounded-full mx-auto flex items-center justify-center">
                                                    <div className="size-12 bg-primary rounded-lg"></div>
                                                </div>
                                                <p className="text-xl md:w-[70%] mx-auto text-center leading-relaxed mb-4">{generatedWarning}</p>
                                                <Link
                                                    href={AppRoutes.profile_settings}
                                                    className="px-5 py-4 rounded-lg text-sm w-max block bg-primary text-white mx-auto"
                                                >
                                                    Click here to subscribe
                                                </Link>
                                            </div>
                                            :
                                            <div>
                                                <div className="size-32 mb-4 bg-[#E8DEFF] rounded-full mx-auto flex items-center justify-center">
                                                    <div className="size-12 bg-primary rounded-lg"></div>
                                                </div>
                                                <p className="text-lg md:w-[70%] mx-auto text-center leading-relaxed mb-4">{generatedWarning}</p>
                                                <div className="w-[40%] mx-auto">
                                                    <button
                                                        onClick={() => setCurrentId(1)}
                                                        disabled={loadingData}
                                                        className="px-5 py-4 rounded-lg text-sm w-max block bg-primary text-white mx-auto min-w-[200px] mb-3"
                                                    >
                                                        {
                                                            loadingData ? <Spinner /> : "Continue"
                                                        }
                                                    </button>
                                                    <Link
                                                        href={AppRoutes.price_listing}
                                                        // disabled={loadingData}
                                                        className="px-5 py-4 text-sm w-max text-2xl text-center rounded-lg block border-2 border-solid border-main mx-auto text-main min-w-[200px]"
                                                    >
                                                        Click here to add tokens
                                                    </Link>
                                                    <Link
                                                        href={AppRoutes.summary}
                                                        // disabled={loadingData}
                                                        className="text-sm text-center bg-transparent text-[#ff0000] block py-4 mx-auto mb-3"
                                                    >
                                                        Go Back
                                                    </Link>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                    }

                    <GenerateContent
                        contentMain={contentMain}
                        originalContent={blogContent}
                        summaryQuestions={summaryQuestions}
                        openModal={displayGenerateModal}
                        toggleContentGenerationModal={
                            toggleContentGenerationModal
                        }
                        handleContentUpdate={
                            updateNewlyGeneratedContent
                        } />
                </div>
            </AuthLayout>
        </div>
    )
}

export default GenerateNewContent;