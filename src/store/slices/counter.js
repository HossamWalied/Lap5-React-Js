import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counterVal: 0,
        maxCounterVal: 100
    },
    reducers: {
        increaseCounterBy1: (state, action) => {
            state.counterVal = action.payload
        },
        decreaseCounterBy1: (state, action) => {
            state.counterVal = action.payload
        },
        resetCounter: (state) => {
            state.counterVal = 0;
        },
        increaseByCount: (state, action) => {
            state.counterVal = state.counterVal + action.payload
        }

    }
})

export const { 
    increaseCounterBy1, 
    decreaseCounterBy1, 
    resetCounter, 
    increaseByCount 
} = counterSlice.actions;

export default counterSlice.reducer;