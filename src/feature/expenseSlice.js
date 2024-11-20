import { createSlice } from "@reduxjs/toolkit";
export const expenseSlice=createSlice({
    name: 'expense',
    initialState: [],
    reducers: {
        addExpense: (state, action)=>{
            state.push({amount: action.payload.amount, category: action.payload.category, id:Date.now()});
        },
        deleteExpense: (state, action)=>{
            let index=state.findIndex((item)=>item.id===action.payload);
            if (index !== -1) state.splice(index, 1);
        },
        filterByCategory: (state,action)=>{
            return state.filter((item)=>item.category===action.payload);
        }
    }
});
export const {addExpense, deleteExpense, filterByCategory} =expenseSlice.actions;
export default expenseSlice.reducer;