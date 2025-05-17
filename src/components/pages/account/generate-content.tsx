'use client';

import React, { useContext, useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useGetContentParameters } from "@/utils/apiHooks/profile/useGetContentParameters";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { useGenerateContent } from "@/utils/apiHooks/profile/useGenerateContent";
import { Label } from "@/components/ui/label";


const GenerateContent = (props: any) => {
  const [userInsight, setUserInsight] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [innerBlogText, setInnerBlogText] = useState("");
  const [displayGenerateModal, setDisplayGenerateModal] = useState(true);
  const [pageLoader, setPageLoader] = useState(false);

  // new
  const [contentParametersBox, setContentParametersBox] = useState<any>([]);
  const [displayParameterModal, setDisplayParameterModal] = useState<boolean>(false);

  const { showSnackBar } = useContext(GlobalActionContext);
  const { isLoading, data, error, getContentParameters } = useGetContentParameters();
  const { isLoading: generateContentLoader, data: generateContentData, error: generateContentError, generateContent } = useGenerateContent();


  const { handleSubmit, control } = useForm({});

  const loaderIcon = (
    <LoadingOutlined style={{ fontSize: 20, color: "#fff" }} spin />
  );

  useEffect(() => {
    if (data?.found) {
      console.log(data)
      let contentData: any[] = data.data;
      let arrData: any = [];
      console.log(contentData.length)
      console.log(contentData)
      if (contentData.length) {
        contentData?.forEach((data: any) => {
          if (data.sub_parameter.length) {
            arrData.push(data);
          }
        })
        setContentParametersBox(arrData);
      }
    }
  }, [data])

  useEffect(() => {
    getContentParameters();
  }, []);

  useEffect(() => {
    if (error) {
      showSnackBar({
        severity: "error",
        message: error,
      });
    }
  }, [error])
  useEffect(() => {
    if (generateContentError) {
      showSnackBar({
        severity: "error",
        message: generateContentError,
      });
    }
  }, [generateContentError])

  useEffect(() => {
    if (generateContentData?.found) {
      console.log(generateContentData)
      setInnerBlogText(generateContentData?.message?.content);
      toggleGenerateModal();
      // props.handleSplitting();
      setUserInsight("");
      const newEntry = {
        openNewQuestion: true,
        contentMain: props.contentMain,
        content: props.originalContent,
        response: generateContentData?.message?.content
      };
      // openNotificationWithIcon("success", "Content fetched successfully");
      // let rand = Math.trunc(Math.random() * 20000);
      // let randKey = `wiredwitscontent-${rand}`;
      // sessionStorage.setItem(randKey, JSON.stringify(newEntry));
      // const fullPath = `${window.location.origin}/dashboard/read-generated-content?sessionkey=${randKey}`;
      // window.open(fullPath, '_blank');
      console.log(generateContentData?.data?.data);
      props.handleContentUpdate(generateContentData?.data?.data?.message?.content);
      props.toggleContentGenerationModal();
    }
  }, [generateContentData])

  const toggleGenerateModal = () =>
    setDisplayGenerateModal(!displayGenerateModal);

  // generate content
  const loadContentData = async (e: any) => {
    setPageLoader(true);
    generateContent({
      questionBox: props.summaryQuestions,
      insight: userInsight,
      ...e,
    });
  };

  const closeContentGenerationModal = () => {
    setUserInsight("");
    setPageLoader(false);
    props.toggleContentGenerationModal();
  }

  return (
    <>
      {/* <div>
        <p
          className="body-text new-content"
          dangerouslySetInnerHTML={{
            __html: innerBlogText,
          }}
        ></p>
      </div> */}
      <Modal
        open={props.openModal}
        className="profile-modal"
        footer={null}
        onCancel={() => null}
      >
        <div>
          <h4 className="text-xl text-center font-bold mb-8">
            Generate New Content
          </h4>
          <form action="" onSubmit={handleSubmit(loadContentData)}>
            <div className="form-group mb-3">
              <Label className="mb-1">Your Insight</Label>
              <Textarea
                rows={5}
                name="comment"
                className="border-2 border-solid border-[#EBEBEB] rounded-lg text-sm"
                onChange={(e) => setUserInsight(e.target.value)}
                placeholder="Add Insight"
                value={userInsight}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {contentParametersBox.map((data: any, index: number) => (
                <div className="form-group mb-3" key={index}>
                  <Label className="mb-1">{data.name}</Label>
                  <Controller
                    control={control}
                    name={`${data?.name?.replaceAll(" ", "_").toLowerCase()}`}
                    render={({ field }) => (
                      <select {...field} className="w-full block py-4 border-2 border-solid border-[#EBEBEB] text-sm rounded-lg">
                        {data.sub_parameter.map((sub: any, index: number) => (
                            <option key={index} value={sub.name}>
                              {sub?.name?.slice(0, 1).toUpperCase()}
                              {sub?.name?.slice(1).toLowerCase()}
                            </option>
                          )
                        )}
                      </select>
                    )}
                  />
                </div>
              ))}
            </div>
            {!pageLoader ? (
              <button className="text-sm bg-primary text-white py-5 rounded-lg w-full mt-5">
                Generate Content
              </button>
            ) : (
              <button
                disabled
                className="text-sm bg-primary text-white py-5 rounded-lg w-full mt-5"
              >
                <Spin indicator={loaderIcon} />
              </button>
            )}
          </form>
          {/* <p
            className="body-text"
            dangerouslySetInnerHTML={{
              __html: innerBlogText,
            }}
          ></p> */}
        </div>
      </Modal>
    </>
  );
};

export default GenerateContent;