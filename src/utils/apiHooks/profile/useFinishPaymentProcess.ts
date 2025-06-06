import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { CancelPaymentParams, CompletePaymentParams } from "@/utils/services/profile/types"


export const useFinishPaymentProcess = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser, user } = useContext(UserContext)

    async function finishPaymentProcess(params: CancelPaymentParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().finishSubPayment(params));
        if(response){
            setData({
                found: true,
                message: response.message,
                data: response.data
            })
            console.log(response.data);
            // updateUser(response.data);
        }
    }

    return { isLoading, error, data, finishPaymentProcess }
}