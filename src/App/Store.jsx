import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../feature/transaction/transactionSlice";
import filterReducer from '../feature/filter/filterSlice'

export const store = configureStore({
    reducer:{
        transaction : transactionReducer,
        filter: filterReducer,
    },
    devTools:true,
})

export default store;
