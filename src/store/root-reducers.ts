import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const.ts';
import dataSlice from './slices/data-slice/data-slice.ts';
import offersSlice from './slices/offers-slice/offers-slice.ts';
import userSlice from './slices/user-slice/user-slice.ts';

export const rootReducers = combineReducers({
  [NameSpace.Data]: dataSlice,
  [NameSpace.Offers]: offersSlice,
  [NameSpace.User]: userSlice,
});
