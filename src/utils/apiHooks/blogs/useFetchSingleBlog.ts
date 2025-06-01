import { useContext, useState } from "react"
import { useApi } from "../index";
import { LoginParams } from "@/utils/services/auth/types";
import { Profile } from "@/models/profile"
import { BlogService } from "@/utils/services/blog"
import UserContext from "@/context/UserContext"
import AuthToken from "@/utils/AuthToken"


export const useFetchSingleBlog = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function fetchSingleBlog(param: any) {
        setData(null)
        const response = await execute(async () => await BlogService().getSingleBlog(param))
        if (response?.success) {
            setData({
                found: true,
                blog: response.data
            });
        }
    }

    return { isLoading, error, data, fetchSingleBlog }
}