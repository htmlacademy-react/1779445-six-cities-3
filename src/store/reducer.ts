import {CityName, DEFAULT_CITY} from '../const.ts';
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {setCity, setComments, setOffers} from './action.ts';
import {OfferType} from '../components/place-card/place-card-offer-types.ts';
import {CommentsType} from '../components/comment/comment-type.ts';

interface AppState {
  city: CityName;
  offers: OfferType[];
  comments: CommentsType[];
}

const initialState: AppState = {
  city: DEFAULT_CITY,
  offers: [],
  comments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action: PayloadAction<OfferType[]>) => {
      state.offers = action.payload;
    })
    .addCase(setComments, (state, action: PayloadAction<CommentsType[]>) => {
      state.comments = action.payload;
    });
});

export { reducer};
