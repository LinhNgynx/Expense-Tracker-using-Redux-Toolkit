import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({
        id: Date.now(),
        task: action.payload.task,
        description: action.payload.description,
        isCompleted: false,
      });
    },
    deleteToDo: (state, action)=>{
        const index = state.findIndex((task) => task.id === action.payload);
        if (index !== -1) state.splice(index, 1);
    },
    toggleToDo: (state, action)=>{
        const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    }
  },
});
export const {addToDo, deleteToDo, toggleToDo}=todoSlice.actions;
export default todoSlice.reducer;
