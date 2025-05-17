import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGetTokenHistory = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getTokenHistory() {
        setData(null)
        const response = await execute(async () => await ProfileService().getTokenHistory());
        if (response) {
            setData(response.data)
        }
    }

    return { isLoading, error, data, getTokenHistory }
}