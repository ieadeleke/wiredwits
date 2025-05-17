'use client';

import { Button } from "@/components/ui/button";
import { useGetAllTopics } from "@/utils/apiHooks/profile/useGetCategoryListing";
import { useContext, useEffect, useState } from "react";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { FaPlus } from "react-icons/fa6";
import Spinner from "@/components/ui/spin";
import { useAddTopics } from "@/utils/apiHooks/profile/useAddTopics";
import SkeletonLoader from "@/utils/skeleton-loader";


interface CategoryProps {
    search?: string
}


export default function CategoryListing(props: CategoryProps) {
    const { isLoading, data, error, getTopics } = useGetAllTopics();
    const { isLoading: addTopicLoader, data: addTopicData, error: addTopicError, addTopic } = useAddTopics();

    const { showSnackBar } = useContext(GlobalActionContext);
    const [allTopics, setAllTopics] = useState([]);
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [allSubTopics, setAllSubTopics] = useState<any>([]);
    const [totalTopics, setTotalTopics] = useState([]);
    const [loadIndex, setLoadIndex] = useState<any>(null);
    const [tempData, setTempData] = useState<any>({});

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
            setAllTopics(data?.topics?.topics);
            setFilteredTopics(data?.topics?.topics);
            setTotalTopics(data?.topics?.topics);
            // setLikedTopicArray(topicData.data.data.userData);
            // setFilteredLikedTopicArray(topicData.data.data.userData);
        }
    }, [data])
    useEffect(() => {
        getTopics();
    }, [])
    useEffect(() => {
        if (props.search) {
            const filteredSubTopics = totalTopics.flatMap((topic: any) => {
                return topic?.subtopics
                    ?.filter((subtopic: any) =>
                        subtopic?.name?.toLowerCase().includes(props?.search?.toLowerCase())
                    )
                    .map((subtopic: any) => ({
                        categoryId: topic._id,
                        categoryName: topic.topic,
                        name: subtopic.name,
                        subtopicId: subtopic._id,
                    })) || [];
            });
            setAllSubTopics(filteredSubTopics);
        }
    }, [props.search])

    useEffect(() => {
        if (addTopicError) {
            showSnackBar({
                severity: "error",
                message: addTopicError,
            });
            setTempData({});
            setLoadIndex(null);
        }
    }, [addTopicError])
    useEffect(() => {
        if (addTopicData) {
            showSnackBar({
                severity: "success",
                message: 'You have subscribed to this topic!',
            });
            setAllTopics((prevTopics: any) =>
                prevTopics.map((t: any) => {
                    if (t._id === tempData?.topic._id) {
                        // Remove subtopic from subtopics array
                        const updatedSubtopics = t.subtopics.filter((_: any, i: number) => i !== tempData?.index);
                        return { ...t, subtopics: updatedSubtopics };
                    }
                    return t;
                })
            );
            setTempData({});
            setLoadIndex(null);
        }
    }, [addTopicData])

    const addTopicToUserLikedList = async (topic: any, index: any, subtopic: any) => {
        setLoadIndex(`${topic._id}-${index}`);
        addTopic({
            topic_id: topic._id,
            subtopic_id: subtopic._id,
            subtopicName: subtopic.name,
            topicName: topic.topic
        });
        setTempData({
            topic,
            index,
            subtopic
        })
    }

    return (
        <>
            <div className="">
                {
                    props?.search?.length ?
                        <div className="grid grid-cols-3 gap-5">
                            {
                                allSubTopics.map((subtopic: any, index: number) => (
                                    <div key={index} className="border-2 border-solid border-[#F3F5F7] rounded-2xl p-4">
                                        <div className="flex gap-3 justify-between items-center mb-5">
                                            <div className="flex gap-3 items-center">
                                                <div className="size-14 rounded-full bg-[#E6E2E0] flex items-center justify-center">
                                                    <h3 className="text-lg font-medium">{subtopic?.name?.slice(0, 1)}</h3>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium">{subtopic?.name}</h4>
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="text-xs" onClick={() => {
                                                    addTopicToUserLikedList({
                                                        _id: subtopic.categoryId,
                                                        name: subtopic.categoryName
                                                    }, index, {
                                                        name: subtopic.name,
                                                        _id: subtopic.subtopicId
                                                    })
                                                    // addTopicToUserLikedList(topic, index, subtopic)
                                                }}>
                                                    {loadIndex !== `${subtopic._id}-${index}` ?
                                                        'Subscribe' : (
                                                            <Spinner />
                                                            // <Spin indicator={antIcon} />
                                                        )}
                                                </Button>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-loose opacity-70">
                                            Indulge in handheld gaming and computing power with the Valve Steam Deck.
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        allTopics.length ?
                            allTopics?.map((topic: any, index) => (
                                topic?.subtopics?.length ?
                                    <div key={index} className="mb-10">
                                        <div className="">
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">{topic.topic}</h3>
                                            </div>
                                            <div className="grid grid-cols-3 gap-5">
                                                {
                                                    topic?.subtopics?.map((subtopic: any, index: number) => (
                                                        <div key={index} className="border-2 border-solid border-[#F3F5F7] rounded-2xl p-4">
                                                            <div className="flex gap-3 justify-between items-center mb-5">
                                                                <div className="flex gap-3 items-center">
                                                                    <div className="size-14 rounded-full bg-[#E6E2E0] flex items-center justify-center">
                                                                        <h3 className="text-lg font-medium">{subtopic?.name?.slice(0, 1)}</h3>
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="text-sm font-medium">{subtopic?.name}</h4>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <Button className="text-xs" onClick={() =>
                                                                        addTopicToUserLikedList(topic, index, subtopic)
                                                                    }>
                                                                        {loadIndex !== `${topic._id}-${index}` ?
                                                                            'Subscribe' : (
                                                                                <Spinner />
                                                                                // <Spin indicator={antIcon} />
                                                                            )}
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            <p className="text-xs leading-loose opacity-70">
                                                                Indulge in handheld gaming and computing power with the Valve Steam Deck.
                                                            </p>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </div> : ""
                            ))
                            :
                            <SkeletonLoader />
                }
            </div>
        </>
    );
}