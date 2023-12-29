import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchKeyword: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const { setSearchKeyword } = locationSlice.actions;

export default locationSlice.reducer;
