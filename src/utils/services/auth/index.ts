import { request } from "@/utils/request";
import { LoginParams, SignupParams } from "./types"
import { ApiResponse } from "@/models";


export function AuthService() {

    async function login(params: LoginParams) {
        const response = await request({
            path: `user/login`,
            method: "POST",
            body: params
        })
        return response as ApiResponse
    }

    async function signUp(params: SignupParams) {
        const response = await request({
            path: `user/signup`,
            method: "POST",
            body: params
        })
        return response as ApiResponse
    }

    // async function resetPassword(params: ResetPasswordParams) {
    //     const response = await request({
    //         path: `v1/agent/ResetPassword`,
    //         method: "PUT",
    //         body: params
    //     })
    //     return response as ApiResponse
    // }

    // async function changePassword(params: ChangePasswordParams) {
    //     const response = await request({
    //         path: `v1/agent/ChangePassword`,
    //         method: "PUT",
    //         body: params
    //     })
    //     return response as ApiResponse
    // }

    // async function confirmResetPassword(params: ConfirmResetPasswordParams) {
    //     const response = await request({
    //         path: `v1/agent/ConfirmResetPassword`,
    //         method: "PUT",
    //         body: params
    //     })
    //     return response as ApiResponse
    // }

    return {
        login,
        signUp
        // resetPassword,
        // confirmResetPassword,
        // changePassword
    }
}