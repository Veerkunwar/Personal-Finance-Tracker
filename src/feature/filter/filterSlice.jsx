import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState:{type:'All'},
    reducers:{
        setFilter:( state , action)=>{
            state.type=action.payload
        }
    },
});

export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;