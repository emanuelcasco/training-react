import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { value: 0, showCounter: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    increment(state, { payload }) {
      state.value += payload;
    },
    decrement(state, { payload }) {
      state.value -= payload;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
