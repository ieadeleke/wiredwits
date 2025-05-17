import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGenerateContent = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function generateContent(params: any) {
        const response = await execute(async () => await ProfileService().generateNewArticle(params));
        if (response) {
            setData({
                found: true,
                success: response.success,
                message: response.message,
                data: response?.data
            })
        }
    }

    return { isLoading, error, data, generateContent }
}