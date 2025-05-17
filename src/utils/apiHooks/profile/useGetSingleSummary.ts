import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"
import { SingleSummaryParams } from "@/utils/services/profile/types"


export const useGetSingleSummary = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getSingleSummary(params: SingleSummaryParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().getSingleSummary(params));
        if (response) {
            setData({
                found: true,
                success: response.success,
                message: response.message,
                data: response?.data
            })
        }
    }

    return { isLoading, error, data, getSingleSummary }
}