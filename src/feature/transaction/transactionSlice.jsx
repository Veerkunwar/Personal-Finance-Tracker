import { createSlice } from "@reduxjs/toolkit";


export const transactionSlice = createSlice({
    name:'transactions',
    initialState:[],
    reducers:{
        addTransaction: (state,action)=>{
            state.push(action.payload);
        },
        deleteTransaction: (state,action)=>{
            return state.filter((txn)=>txn.id !== action.payload);
        },
    },
});

export const { addTransaction,deleteTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;