import {CityName, DEFAULT_CITY} from '../const.ts';
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import { setCity, setOffers} from './action.ts';
import {OfferType} from '../components/place-card/place-card-offer-types.ts';

interface AppState {
  city: CityName;
  offers: OfferType[];
}

const initialState: AppState = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action: PayloadAction<CityName>) => {
      // Получаем город из payload действия
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action: PayloadAction<OfferType[]>) => {
      state.offers = action.payload;
    });
});

export { reducer};
