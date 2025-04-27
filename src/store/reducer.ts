import {CityName, DEFAULT_CITY, SortType, AuthorizationStatus} from '../const';
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
  loadOffers,
  setCity,
  setSort,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus
} from './action';
import {OfferType} from '../components/place-card/place-card-offer-types';
import {CommentsType} from '../components/comment/comment-type';

interface AppState {
  city: CityName;
  offers: OfferType[];
  comments: CommentsType[];
  sort: string;
  authorizationStatus: string;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: AppState = {
  city: DEFAULT_CITY,
  offers: [],
  comments: [],
  sort: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    })
    .addCase(setSort, (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    })
    .addCase(loadOffers, (state, action: PayloadAction<OfferType[]>) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError,(state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export { reducer};
