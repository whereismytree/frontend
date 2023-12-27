import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

export const { setKeyword } = searchSlice.actions;

export default searchSlice.reducer;
