import { useContext, useState } from "react"
import { useApi } from "../index";
import { LoginParams } from "@/utils/services/auth/types";
import { Profile } from "@/models/profile"
import { BlogService } from "@/utils/services/blog"
import UserContext from "@/context/UserContext"
import AuthToken from "@/utils/AuthToken"


export const useSubmitFeedback = () => {
    const [data, setData] = useState<any>(null);
    const { isLoading, error, execute } = useApi();

    async function submitFeedback(param: any) {
        setData(null)
        const response = await execute(async () => await BlogService().submitFeedback(param))
        if (response?.success) {
            setData({
                found: true,
                data: response.data
            });
        }
    }

    return { isLoading, error, data, submitFeedback }
}