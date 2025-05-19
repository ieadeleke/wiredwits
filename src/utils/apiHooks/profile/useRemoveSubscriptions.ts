import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useRemoveUserSub = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function removeSubscriptions(e: any) {
        setData(null)
        const response = await execute(async () => await ProfileService().removeUserSubscriptions(e));
        if (response) {
            setData({
                found: true,
                data: response.data
            })
        }
    }

    return { isLoading, error, data, removeSubscriptions }
}