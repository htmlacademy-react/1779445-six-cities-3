import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferType } from '../../../components/place-card/place-card-offer-types.ts';
import { NameSpace } from '../../../const.ts';
import AppState from '../../../types/app-state.ts';
import {
  fetchFavoriteAction,
  fetchFavoriteOffersAction,
  fetchOfferIDAction,
  fetchOfferIDCommentsAction,
  fetchOfferIDNearbyAction,
  fetchOffersAction,
  postComment,
} from './data-api-actions.ts';

type DataState = Omit<AppState, 'city' | 'sort' | 'error' | 'authorizationStatus' | 'userEmail'>;

const initialState: DataState = {
  offer: null,
  offers: [],
  isOffersDataLoading: false,
  comments: [],
  nearby: [],
  comment: null,
  fetchOffersError: false,
  isFavorite: false,
  favoriteOffers: [],
};

const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    updateOffers: (state, action: PayloadAction<OfferType>) => {
      state.offers = state.offers.map((offer) =>
        offer.id === action.payload.id ? action.payload : offer,
      );
    },
    updateOffer: (state, action: PayloadAction<OfferType>) => {
      state.offer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка fetchOffersAction
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.fetchOffersError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.fetchOffersError = true;
      })

      // Обработка fetchOfferIDAction
      .addCase(fetchOfferIDAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })

      // Обработка fetchOfferIDCommentsAction
      .addCase(fetchOfferIDCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      // .addCase(fetchOfferIDCommentsAction.rejected, (state, action) => {
      //   state.comments = action.error.message;
      // })

      // Обработка fetchOfferIDNearbyAction
      .addCase(fetchOfferIDNearbyAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
      })

      // Обработка postComment
      .addCase(postComment.fulfilled, (state, action) => {
        state.comment = action.payload;
      })

      // Обработка favorite
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.isFavorite = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  },
});

export const { updateOffers, updateOffer } = dataSlice.actions;

export default dataSlice.reducer;
