import { request } from "@/utils/request"
import { CancelPaymentParams, CompletePaymentParams, FetchProfileResponse, InitiatePaymentParams, SingleSummaryParams, SingleSummaryQuestionParams, UpdatePasswordParams, UpdateProfileParams } from "./types"
import { ApiResponse } from "@/models"
import { Profile } from "@/models/profile"

export function ProfileService() {

    async function getUser() {
        const data = await request({
            path: `v1/agent/GetAuthProfile`,
            method: "GET"
        })
        return data as FetchProfileResponse;
    }
    async function updateProfile(params: UpdateProfileParams) {
        const response = await request({
            path: `user/edit`,
            method: "PATCH",
            body: params
        })
        return response as ApiResponse
    }

    async function updatePassword(params: UpdatePasswordParams) {
        const response = await request({
            path: `user/edit-password`,
            method: "PATCH",
            body: params
        })
        return response as ApiResponse
    }

    async function initiateSubPayment(params: InitiatePaymentParams) {
        const response = await request({
            path: `user/initiate-sub-process`,
            method: "POST",
            body: params
        })
        return response as ApiResponse
    }

    async function cancelSubPayment(params: CancelPaymentParams) {
        const response = await request({
            path: `user/cancel-sub-process`,
            method: "POST",
            body: params
        })
        return response as ApiResponse
    }

    async function completeSubPayment(params: CompletePaymentParams) {
        const response = await request({
            path: `user/complete-sub-process`,
            method: "POST",
            body: params
        })
        return response as ApiResponse
    }

    async function finishSubPayment(params: CancelPaymentParams) {
        const response = await request({
            path: `user/complete-user-subscription`,
            method: "POST",
            body: params
        })
        return response as ApiResponse
    }

    async function getTokenHistory() {
        const response = await request({
            path: `user/fetch-user-history`,
            method: "GET",
            body: ''
        })
        return response as ApiResponse
    }

    async function getUserSubscriptions() {
        const response = await request({
            path: `user/subscribed-topics`,
            method: "GET",
            body: ''
        })
        return response as ApiResponse
    }

    async function getSubPlans() {
        const response = await request({
            path: `subscriptions`,
            method: "GET",
            body: ''
        })
        return response as ApiResponse
    }

    async function removeUserSubscriptions(e: any) {
        const response = await request({
            path: `user/remove-topic`,
            method: "POST",
            body: e
        })
        return response as ApiResponse
    }

    async function getAllSummaries(e?: number) {
        const response = await request({
            path: `user/todays-summaries?currentPage=${e}`,
            method: "GET",
            body: ''
        })
        return response as ApiResponse
    }

    async function getAllTopics() {
        const response = await request({
            path: `user/topics`,
            method: "GET",
            body: ''
        })
        return response as ApiResponse
    }

    async function subscribeToTopic(e: any) {
        const response = await request({
            path: `user/add-topic`,
            method: "POST",
            body: e
        })
        console.log(response);
        return response as ApiResponse
    }

    async function getSubscribedTopics() {
        const response = await request({
            path: `user/subscribed-topics`,
            method: "GET",
            body: ''
        })
        return response as ApiResponse
    }

    async function getSingleSummary(param: SingleSummaryParams) {
        const response = await request({
            path: `user/single-summary/${param.e}/${param.override}`,
            method: "GET",
            body: ''
        })
        return response as ApiResponse
    }

    async function getContentParameters() {
        const response = await request({
            path: `content-parameters`,
            method: "GET",
            body: ''
        })
        return response as ApiResponse
    }

    async function generateNewArticle(params: any) {
        const response = await request({
            path: `user/generate-blog-content-from-summary`,
            method: "POST",
            body: params
        })
        return response as ApiResponse
    }

    async function askQuestionOnSummary(param: SingleSummaryQuestionParams) {
        const response = await request({
            path: `user/ask-summary-question`,
            method: "POST",
            body: param
        })
        return response as ApiResponse
    }


    return {
        getUser,
        updateProfile,
        updatePassword,
        getTokenHistory,
        getAllSummaries,
        getSingleSummary,
        askQuestionOnSummary,
        getContentParameters,
        generateNewArticle,
        getSubscribedTopics,
        getAllTopics,
        subscribeToTopic,
        getUserSubscriptions,
        removeUserSubscriptions,
        initiateSubPayment,
        cancelSubPayment,
        completeSubPayment,
        finishSubPayment,
        getSubPlans
    }
}