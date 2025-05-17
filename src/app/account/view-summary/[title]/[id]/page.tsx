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
import { Collapse, CollapseProps, Skeleton } from "antd";
import Link from "next/link";
import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { DateTime } from "luxon";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";




const ViewSummaryPage = () => {
    const param = useParams();

    const { handleSubmit, control } = useForm({
        resolver: yupResolver(summaryQuestionValidator)
    });
    const { showSnackBar } = useContext(GlobalActionContext);

    const { isLoading, data, error, getSingleSummary } = useGetSingleSummary();
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
        if (data?.found) {
            if (data?.success === "warning" || data?.success === "alert") {
                setDisplay(data?.success);
                setGeneratedWarning(data?.message);
                setTokenBalance(data?.data);
                setLoadingData(false);
            } else {
                setDisplay("view");
                let currData = data?.data;
                // let dataFound = blogData?.data?.data?.found;
                setDataFound(currData?.found);
                setTokenCount(currData?.token_count);
                if (currData?.data?.message?.content.length) {
                    setArticleData(currData?.data?.message?.content);
                } else {
                    setArticleData(currData?.original_data?.info?.body);
                }
                let topArray = [];
                topArray.push({
                    role: "user",
                    content: currData.question,
                });
                topArray.push({
                    role: "assistant",
                    content: currData?.data?.message?.content,
                });
                setCreatedSummaryId(currData?.newly_created_summary_id);
                setSummaryQuestions(topArray);
                setDataDisplay(currData.original_data?.info);
                setLoadingData(false);
                if (!user) return;
                let userData: Profile = {
                    ...user,
                    token_count: currData?.user_token_balance
                }
                updateUser(userData);
            }
        }
    }, [data])

    useEffect(() => {
        if (param.id) {
            getSingleSummary({
                e: param.id,
                override: currentId
            });
        }
    }, [currentId]);

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

    const handleAskQuestionOnEnterButton = (e: any) => {
        if (e.code === "Enter") {
            handleQuestionTab();
        }
    };
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Bias and ',
            children: <p>momommo</p>,
        }
    ]

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
                                                    {
                                                        dataFound ? (
                                                            <div className="relative">
                                                                <Link href='/account/summaries' className="gap-3 flex items-center text-sm mb-7 w-max">
                                                                    <FaArrowLeftLong className="text-xl" /> Go Back
                                                                </Link>
                                                                <p className="text-base text-center mb-4">
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
                                                                />
                                                                <p
                                                                    className="inner-article-text"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: articleData,
                                                                    }}
                                                                ></p>
                                                                <div className="mt-10">
                                                                    <p className="body-text mb-3">Token Cost: {tokenCount} tokens</p>
                                                                    <p className="body-text">
                                                                        Pulled from{" "}
                                                                        <span className="italic">
                                                                            {dataDisplay?.url}
                                                                        </span>
                                                                    </p>
                                                                    <button onClick={displayContentGenerationPage} className="bg-primary text-white rounded-lg px-6 py-4 text-sm flex mt-5 items-center">
                                                                        Generate New Content
                                                                        <GoArrowUpRight className="text-xl" />
                                                                    </button>
                                                                </div>

                                                                {/* Questions Tab */}
                                                                <div>
                                                                    {summaryQuestionsToDisplay.map(
                                                                        (summary: any, index) => (
                                                                            <div
                                                                                key={index}
                                                                                className={`flex ${summary.role === "user"
                                                                                    ? "justify-end"
                                                                                    : ""
                                                                                    }`}
                                                                            >
                                                                                {summary.role === "user" ? (
                                                                                    <p className="bg-[#C3A5EA1A] py-7 px-10 rounded-tr-none w-[80%] md:w-[80%] story-text rounded-[15px] rounded-solid mb-5">
                                                                                        {summary.content}
                                                                                    </p>
                                                                                ) : (
                                                                                    <p
                                                                                        dangerouslySetInnerHTML={{
                                                                                            __html: summary.content,
                                                                                        }}
                                                                                        className={`${summary.status === "error"
                                                                                            ? "text-[#ff0000]"
                                                                                            : ""
                                                                                            }  bg-[#C3A5EA1A] py-7 px-10 rounded-tl-none w-[80%] md:w-[80%] rounded-[15px] story-text rounded-solid mb-5`}
                                                                                    ></p>
                                                                                )}
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                                {/* Ask Questions */}
                                                                <div className="comment-box pt-20">
                                                                    <div className="form-group">
                                                                        <Controller
                                                                            name="comment"
                                                                            defaultValue=""
                                                                            control={control}
                                                                            render={({ field }) => (
                                                                                <div className="relative w-full h-[4rem] flex gap-4">
                                                                                    <Input
                                                                                        name="comment"
                                                                                        onKeyDown={
                                                                                            handleAskQuestionOnEnterButton
                                                                                        }
                                                                                        onChange={(e) =>
                                                                                            setCurrentQuestionTab(
                                                                                                e.target.value
                                                                                            )
                                                                                        }
                                                                                        placeholder="Ask Question"
                                                                                        value={currentQuestionTab}
                                                                                        className="w-[90%] h-full bg-"
                                                                                    />
                                                                                    <div
                                                                                        onClick={handleQuestionTab}
                                                                                        className="w-[4rem] flex items-center justify-center bg-primary rounded-full h-[4rem]">
                                                                                        {
                                                                                            !loadQuestion ?
                                                                                                <IoIosSend className="text-white text-2xl" />
                                                                                                :
                                                                                                <Spinner />
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="block md:hidden mt-14">
                                                                    <button
                                                                        onClick={displayContentGenerationPage}
                                                                        className="bg-primary px-6 rounded-lg py-4 text-sm text-white"
                                                                    >
                                                                        Generate New Content
                                                                    </button>
                                                                </div>
                                                                {/* <Collapse items={items} defaultActiveKey={['1']} /> */}
                                                            </div>
                                                        ) : (
                                                            //article not found
                                                            <div className="subscribe-payblock">
                                                                <h4>Article not found</h4>
                                                                <p>
                                                                    We could not find the full text of
                                                                    this article on the blog's website.
                                                                    Please go back the summaries tab to
                                                                    select another article.
                                                                </p>
                                                                <Link
                                                                    href={AppRoutes.summary}
                                                                    className="btn btn-main"
                                                                >
                                                                    Go Back
                                                                </Link>
                                                            </div>
                                                        )
                                                    }
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
                </div>
            </AuthLayout>
        </div>
    )
}

export default ViewSummaryPage;