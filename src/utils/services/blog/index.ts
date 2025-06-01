import { request } from "@/utils/request"
import { ApiResponse } from "@/models"
import { Profile } from "@/models/profile"

export function BlogService() {

    async function getAllBlogs() {
        const data = await request({
            path: `blog`,
            method: "GET"
        })
        return data as ApiResponse;
    }

    async function getSingleBlog(e: any) {
        const data = await request({
            path: `blog/get/${e}`,
            method: "GET"
        })
        return data as ApiResponse;
    }

    async function getAllFeedback() {
        const data = await request({
            path: `polls`,
            method: "GET"
        })
        return data as ApiResponse;
    }

    async function submitFeedback(param: any) {
        const data = await request({
            path: `poll-answers`,
            method: "POST",
            body: param
        })
        return data as ApiResponse;
    }

    return {
        getAllBlogs,
        getSingleBlog,
        getAllFeedback,
        submitFeedback
    }
}