import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  history: []
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.history.push(`Incremented to ${state.value}`);
    },
    decrement: (state) => {
      state.value -= 1;
      state.history.push(`Decremented to ${state.value}`);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.history.push(`Added ${action.payload} to reach ${state.value}`);
    },
    reset: (state) => {
      state.value = 0;
      state.history.push('Reset to 0');
    },
    clearHistory: (state) => {
      state.history = [];
    }
  }
});

export const { increment, decrement, incrementByAmount, reset, clearHistory } = counterSlice.actions;
export default counterSlice.reducer;
