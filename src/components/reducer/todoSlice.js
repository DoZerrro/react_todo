import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState: {
        targetId: 0
    },
    reducers:{
        setTargetId: (state, action) => {
            state.targetId = action.payload
        }
    }
})

export const {setTargetId} = todoSlice.actions
export default todoSlice.reducer;
