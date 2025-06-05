import { useState } from "react"
import { useApi } from ".."
import { ProfileService } from "@/utils/services/profile"


export const useGetAllContent = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()

    async function getContent() {
        setData(null)
        const response = await execute(async () => await ProfileService().getAllPageContents());
        console.log(response)
        if (response) {
            setData({
                found: true,
                data: response?.data
            })
        }
    }

    return { isLoading, error, data, getContent }
}