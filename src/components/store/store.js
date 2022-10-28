import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../reducer/todoSlice";

const store = configureStore({
    reducer: {
        todoReducer: todoSlice
    }
})

export default store;