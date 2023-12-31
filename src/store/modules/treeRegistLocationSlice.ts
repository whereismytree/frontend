import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ILocationState {
  searchKeyword: string;
  latitude: number;
  longitude: number;
  addressType: 'ROAD' | 'STREET';
}

const initialState: ILocationState = {
  searchKeyword: '',
  latitude: 0,
  longitude: 0,
  addressType: 'ROAD',
};

const treeRegistLocationSlice = createSlice({
  name: 'treeRegistLocation',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },

    setLongitude: (state, action: PayloadAction<number>) => {
      state.longitude = action.payload;
    },

    setLatitude: (state, action: PayloadAction<number>) => {
      state.latitude = action.payload;
    },

    setAddressType: (state, action: PayloadAction<'ROAD' | 'STREET'>) => {
      state.addressType = action.payload;
    },
  },
});

export const { setSearchKeyword, setLatitude, setLongitude, setAddressType } =
  treeRegistLocationSlice.actions;

export default treeRegistLocationSlice.reducer;
