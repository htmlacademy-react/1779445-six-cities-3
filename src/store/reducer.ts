import { DEFAULT_CITY } from '../const.ts';
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import { setCity, setOffers} from './action.ts';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      // Получаем город из payload действия
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer};
