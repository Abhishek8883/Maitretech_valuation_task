import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartReducer"


export const store = configureStore({
    reducer: {
        "user":userReducer,
        "product":productReducer,
        "cart":cartReducer
    },
    devTools: true
})      