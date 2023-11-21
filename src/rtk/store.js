import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./features/todoListSlice"

export const store = configureStore({
    reducer : {
        todoListSlice : todoListReducer
    }
})