import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"
import { SingleSummaryParams, SingleSummaryQuestionParams } from "@/utils/services/profile/types"


export const useAskQuestion = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function askQuestionOnSummary(params: SingleSummaryQuestionParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().askQuestionOnSummary(params));
        if (response) {
            setData({
                found: true,
                success: response.success,
                message: response.message,
                data: response?.data
            })
        }
    }

    return { isLoading, error, data, askQuestionOnSummary }
}