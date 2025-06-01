import { useContext, useState } from "react"
import { useApi } from "../index";
import { LoginParams, SignupParams } from "@/utils/services/auth/types";
import { Profile } from "@/models/profile"
import { AuthService } from "@/utils/services/auth"
import UserContext from "@/context/UserContext"
import AuthToken from "@/utils/AuthToken"


export const useSignupPillarSelection = () => {
    const [data, setData] = useState<any>(null)
    const { isLoading, error, execute } = useApi()
    const { updateUser } = useContext(UserContext)

    async function signupPillarSelection(params: any) {
        setData(null)
        const response = await execute(async () => await AuthService().signUpPillarSelection(params))
        if (response?.success) {
            setData({
                found: true,
                response: response?.data
            });
        }
    }

    return { isLoading, error, data, signupPillarSelection }
}