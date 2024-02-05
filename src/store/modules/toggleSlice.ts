import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropDown: { view: false },
  snackBar: { view: false },
};

const toggleSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDropDownView: (state, action: PayloadAction<boolean>) => {
      state.dropDown.view = action.payload;
    },

    setSnackBarView: (state, action: PayloadAction<boolean>) => {
      state.snackBar.view = action.payload;
    },
  },
});

export const { setDropDownView, setSnackBarView } = toggleSlice.actions;

export default toggleSlice.reducer;
