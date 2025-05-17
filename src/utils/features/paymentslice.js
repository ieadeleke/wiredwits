import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    payment_id: ""
}

export const paymentSlice = createSlice({
    name: "payment",
    initialState: { value: initialState },
    reducers: {
        updatePaymentOption: (store, action) => {
            store.value = action.payload;
        }
    }
})

export const { updatePaymentOption } = paymentSlice.actions;

export default paymentSlice.reducer;