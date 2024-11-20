import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../feature/counterSlice";
import todoReducer from "../feature/todoSlice";
import expenseReducer from "../feature/expenseSlice";
import incomeReducer from "../feature/incomeSlice";
const store = configureStore({
    reducer: {
      counter: counterReducer,
      todo: todoReducer,
      expense: expenseReducer,
      income: incomeReducer,
    },
  });
  
  export default store;