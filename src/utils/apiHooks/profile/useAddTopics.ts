import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useAddTopics = () => {
    const [data, setData] = useState<any>(null);
    const { isLoading, error, execute } = useApi();

    async function addTopic(param: any) {
        setData(null)
        const response = await execute(async () => await ProfileService().subscribeToTopic(param));
        if (response) {
            setData({
                found: true,
                topics: response?.data
            })
        }
    }
    return { isLoading, error, data, addTopic }
}