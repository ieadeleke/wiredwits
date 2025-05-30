import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGetSubPlans = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getSubPlans() {
        setData(null)
        const response = await execute(async () => await ProfileService().getSubPlans());
        if (response) {
            setData({
                found: true,
                plans: response?.data
            })
        }
    }

    return { isLoading, error, data, getSubPlans }
}