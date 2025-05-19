import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGetUserSubscriptions = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getUserSubscriptions() {
        setData(null)
        const response = await execute(async () => await ProfileService().getUserSubscriptions());
        if (response) {
            setData({
                found: true,
                topics: response?.data
            })
        }
    }

    return { isLoading, error, data, getUserSubscriptions }
}