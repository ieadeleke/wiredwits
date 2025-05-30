import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { CancelPaymentParams, CompletePaymentParams } from "@/utils/services/profile/types"


export const useCompletePayment = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser, user } = useContext(UserContext)

    async function completePaymentProcess(params: CompletePaymentParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().completeSubPayment(params));
        if(response){
            setData({
                found: true,
                data: response.data
            })
        }
    }

    return { isLoading, error, data, completePaymentProcess }
}