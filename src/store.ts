import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./utils/features/userslice";
import paymentReducer from "./utils/features/paymentslice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

let rootReducer = combineReducers({
    user: userReducer,
    payment: paymentReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export const persistor = persistStore(store)