import { useContext, useState } from "react"
import { useApi } from ".."
import { Profile } from "@/models/profile"
import UserContext from "@/context/UserContext"
import { ProfileService } from "@/utils/services/profile"
import { UpdateProfileParams } from "@/utils/services/profile/types"


export const useUpdateProfile = () => {
    const [data, setData] = useState<Profile | null>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser, user } = useContext(UserContext);

    async function updateProfile(params: UpdateProfileParams) {
        setData(null)
        const response = await execute(async () => await ProfileService().updateProfile({
            first_name: params.first_name,
            last_name: params.last_name,
            phone: params.phone
        }))
        if(response){
            setData(response.data);
            updateUser(response.data);
        }
        setData(user)
    }

    return { isLoading, error, data, updateProfile }
}