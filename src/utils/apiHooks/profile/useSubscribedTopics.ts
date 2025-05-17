import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGetAllSubscriptions = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getSubscriptions() {
        setData(null)
        const response = await execute(async () => await ProfileService().getSubscribedTopics());
        if (response) {
            setData({
                found: true,
                data: response?.data
            })
        }
    }

    return { isLoading, error, data, getSubscriptions }
}