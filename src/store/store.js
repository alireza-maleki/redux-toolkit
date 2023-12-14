import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./CounterSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
    reducer: { counter: CounterSlice, product: ProductSlice }
})


export default store;