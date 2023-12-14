import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: false },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        fiveIncrement(state, action) {
            state.counter = state.counter + action.payload
        }
    }
})

export const counterActions = CounterSlice.actions;


export default CounterSlice.reducer;








