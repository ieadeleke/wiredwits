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