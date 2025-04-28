import {CityName, DEFAULT_CITY, SortType, AuthorizationStatus} from '../const';
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
  loadOffers,
  setCity,
  setSort,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus, loadOfferID, loadOfferIDComments, loadOfferIDNearby, postComment
} from './action';
import {OfferType} from '../components/place-card/place-card-offer-types';
import {CommentsType} from '../components/comment/comment-type';

interface AppState {
  city: CityName;
  offer: OfferType | null;
  nearby: OfferType[];
  offers: OfferType[];
  comment: CommentsType | null;
  comments: CommentsType[];
  sort: string;
  authorizationStatus: string;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: AppState = {
  city: DEFAULT_CITY,
  offer: null,
  nearby: [],
  offers: [],
  comment: null,
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
    })
    .addCase(loadOfferID, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadOfferIDComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadOfferIDNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(postComment, (state, action) => {
      state.comment = action.payload;
    });
});

export { reducer};
