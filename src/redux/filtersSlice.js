import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './constants';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
