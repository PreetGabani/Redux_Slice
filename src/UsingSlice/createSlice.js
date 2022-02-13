import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (val) => {
            val.counter = val.counter + 1
        },
        decrement: (val) => {
            val.counter = val.counter - 1
        },
        IncBy: (val) => {
            val.counter = val.counter + 100
        },
        DecBy: (val) => {
            val.counter = val.counter - 100
        }
    }
})

export default Slice.reducer
export const { increment, decrement,IncBy,DecBy } = Slice.actions