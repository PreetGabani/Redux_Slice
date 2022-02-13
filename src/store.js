import { configureStore } from "@reduxjs/toolkit";
// import Slice from "./UsingSlice/createSlice";
import Slice from "../src/UsingSlice2.js/createSlice2"

export default configureStore({
    reducer:{
        addData:Slice
    }
})