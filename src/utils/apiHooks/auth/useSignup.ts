import { useContext, useState } from "react"
import { useApi } from "../index";
import { LoginParams, SignupParams } from "@/utils/services/auth/types";
import { Profile } from "@/models/profile"
import { AuthService } from "@/utils/services/auth"
import UserContext from "@/context/UserContext"
import AuthToken from "@/utils/AuthToken"


export const useSignup = () => {
    const [data, setData] = useState<Profile | null>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser } = useContext(UserContext)

    async function signUp(params: SignupParams) {
        setData(null)
        const response = await execute(async () => await AuthService().signUp(params))
        if (response?.success) {
            console.log(response.data);
            AuthToken().saveToken(response?.data?.token);
            updateUser(response?.data?.userDetails);
            setData(response?.data?.userDetails);
        }
    }

    return { isLoading, error, data, signUp }
}