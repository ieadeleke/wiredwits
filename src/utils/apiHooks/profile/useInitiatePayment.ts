import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { InitiatePaymentParams } from "@/utils/services/profile/types"


export const useInitiatePayment = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser, user } = useContext(UserContext)

    async function initiateSubPayment(params: InitiatePaymentParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().initiateSubPayment(params));
        if(response){
            setData({
                found: true,
                data: response.data
            })
        }
    }

    return { isLoading, error, data, initiateSubPayment }
}