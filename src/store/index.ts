import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './modules/searchSlice';

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default store;
