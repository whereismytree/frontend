import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ILocationState {
  searchKeyword: string;
  latitude: number;
  longitude: number;
  addressType: 'ROAD' | 'STREET';
  address: {
    road: string | null;
    street: string;
  };
}

const initialState: ILocationState = {
  searchKeyword: '',
  latitude: 0,
  longitude: 0,
  addressType: 'ROAD',
  address: {
    road: '',
    street: '',
  },
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

    setRoadAddress: (state, action: PayloadAction<string | null>) => {
      state.address.road = action.payload;
    },

    setStreetAddress: (state, action: PayloadAction<string>) => {
      state.address.street = action.payload;
    },
  },
});

export const {
  setSearchKeyword,
  setLatitude,
  setLongitude,
  setAddressType,
  setRoadAddress,
  setStreetAddress,
} = treeRegistLocationSlice.actions;

export default treeRegistLocationSlice.reducer;
