import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGetAllTopics = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getTopics() {
        setData(null)
        const response = await execute(async () => await ProfileService().getAllTopics());
        if (response) {
            setData({
                found: true,
                topics: response?.data
            })
        }
    }

    return { isLoading, error, data, getTopics }
}