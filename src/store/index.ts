import { combineReducers, configureStore } from '@reduxjs/toolkit';
import locationReducer from './modules/treeRegistLocationSlice';
import userReducer from './modules/userInfoSlice';

const rootReducer = combineReducers({
  location: locationReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default store;
