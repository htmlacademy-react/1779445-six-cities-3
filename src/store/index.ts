import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api.ts';
import {rootReducers} from './root-reducers.ts';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

