import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { CancelPaymentParams } from "@/utils/services/profile/types"


export const useCancelPayment = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser, user } = useContext(UserContext)

    async function cancelPaymentProcess(params: CancelPaymentParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().cancelSubPayment(params));
        if(response){
            setData({
                found: true,
                data: response.data
            })
        }
    }

    return { isLoading, error, data, cancelPaymentProcess }
}