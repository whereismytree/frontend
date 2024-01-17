import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  accessToken: string;
}

const initialState: InitialState = {
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;
