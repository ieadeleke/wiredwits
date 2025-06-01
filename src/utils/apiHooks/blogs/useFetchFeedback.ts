import { useContext, useState } from "react"
import { useApi } from "../index";
import { LoginParams } from "@/utils/services/auth/types";
import { Profile } from "@/models/profile"
import { BlogService } from "@/utils/services/blog"
import UserContext from "@/context/UserContext"
import AuthToken from "@/utils/AuthToken"


export const useFetchFeedback = () => {
    const [data, setData] = useState<any>(null);
    const { isLoading, error, execute } = useApi();

    async function fetchFeedback() {
        setData(null)
        const response = await execute(async () => await BlogService().getAllFeedback())
        if (response?.success) {
            setData({
                found: true,
                poll: response.data
            });
        }
    }

    return { isLoading, error, data, fetchFeedback }
}