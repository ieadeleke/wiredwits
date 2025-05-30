import { Profile } from "@/models/profile"

export type UpdateProfileParams = {
    first_name: string,
    last_name: string,
    phone?: string
}

export type UpdatePasswordParams = {
    curr_password: string,
    password: string
}

export type InitiatePaymentParams = {
    amount: string
    sub_id: string
    user_agent: string
}

export type CancelPaymentParams = {
    client_id?: string,
    paymentMethodId?: string,
    sub_id: any,
    record_id: any
}

export type CompletePaymentParams = {
    record_id: string
    sub_id: string
    paymentMethodId: string
}

export type FetchProfileResponse = {
    message: string,
    status: string,
    user: Profile
}

export type SingleSummaryParams = {
    e: any
    override: any
}

export type SingleSummaryQuestionParams = {
    summaryId: any
    questionBox: any
}

RefreshAgentWalletResponse