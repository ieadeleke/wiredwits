import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    logged_in: false,
    userData: {
        first_name: "",
        last_name: "",
        full_name: "",
        email_address: "",
        phone: "",
        mode_of_delivery: "",
        next_sub_expiry_date: "",
        active_sub_plan: "",
        profile_picture: "",
        role: "",
        token_count: ""
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialState },
    reducers: {
        login: (store, action) => {
            store.value = action.payload
        },
        update: (store, action) => {
            store.value = action.payload
        },
        logout: (store) => {
            store.value = initialState
        },
        update_subscription: (store, action) => {
            store.value.subscription_expiry_date = action.payload
        }
    }
})

export const { login, update, logout, update_subscription } = userSlice.actions;

export default userSlice.reducer;