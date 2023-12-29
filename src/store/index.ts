import { combineReducers, configureStore } from '@reduxjs/toolkit';
import locationReducer from './modules/locationSlice';

const rootReducer = combineReducers({
  location: locationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default store;
