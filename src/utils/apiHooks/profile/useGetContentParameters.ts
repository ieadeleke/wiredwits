import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGetContentParameters = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getContentParameters() {
        const response = await execute(async () => await ProfileService().getContentParameters());
        if (response) {
            setData({
                found: true,
                success: response.success,
                message: response.message,
                data: response?.data
            })
        }
    }

    return { isLoading, error, data, getContentParameters }
}