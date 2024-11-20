import { createSlice } from "@reduxjs/toolkit";
export const incomeSlice=createSlice({
    name: 'income',
    initialState: [],
    reducers: {
        addIncome: (state, action)=>{
            state.push({ id:Date.now(),amount: action.payload.amount, category: action.payload.category});
        },
        deleteIncome: (state, action)=>{
            let index=state.findIndex((item)=>item.id===action.payload);
            if (index !== -1) state.splice(index, 1);
        },
        filterByCategory: (state,action)=>{
            return state.filter((item)=>item.category===action.payload);
        }
    }
});
export const { addIncome, deleteIncome, filterByCategory } = incomeSlice.actions;
export default incomeSlice.reducer;
