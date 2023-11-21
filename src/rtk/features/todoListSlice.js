import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    list: [
        {
            job: "To check email",
            isChecked: true
        },
        {
            job: "UI task web page",
            isChecked: true
        },
        {
            job: "Learn javascript basic",
            isChecked: true
        },
        {
            job: "Learn HTML Advanced",
            isChecked: true
        },
        {
            job: "Medical App UI",
            isChecked: true
        },
        {
            job: "Learn Java",
            isChecked: true
        },
    ]
}

let todoListSlice = createSlice({
    name: 'todoListSlice',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.list.unshift(action.payload)
        },
        updateJob: (state, action) => {
            state.list = state.list.filter(s => s.id !== action.payload.id)
            state.list.unshift(action.payload)
        },
        searchJob: (state, action) => {
            state.listSearch = state.list.filter(s => s.job.includes(action.payload))
        },
        setCheckBox: (state, action) => {
            state.list.find(s => s.id === action.payload.id).isChecked = !action.payload.isChecked
        }
    }
})

export const { addJob, updateJob, searchJob, setCheckBox } = todoListSlice.actions

export default todoListSlice.reducer