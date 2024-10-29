import {cart} from "./slices/cart/CartSlice.jsx";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore(
    {
        reducer:{
            cart:cart.reducer,
        },
    }
)
