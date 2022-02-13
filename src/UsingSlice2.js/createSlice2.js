import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: "kdbaskjdbcsk",
    initialState: {
        Data: []
    },
    reducers: {
        addData: (state, action) => {
            state.Data = [...state.Data,action.payload];
        },
    }
})

export default Slice.reducer
export const { addData } = Slice.actions
