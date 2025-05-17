import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { UpdatePasswordParams } from "@/utils/services/profile/types"


export const useChangePassword = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser, user } = useContext(UserContext)

    async function updatePassword(params: UpdatePasswordParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().updatePassword(params));
        if(response){
            setData(response.success)
        }
    }

    return { isLoading, error, data, updatePassword }
}