import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGetAllSummaries = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getSummaries(currentPage?: number) {
        setData(null)
        const response = await execute(async () => await ProfileService().getAllSummaries(currentPage));
        if (response) {
            setData({
                found: true,
                articles: response?.data?.articles
            })
        }
    }

    return { isLoading, error, data, getSummaries }
}