import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const.ts';
import AppState from '../../../types/app-state.ts';
import { OfferType } from '../../../types/place-card-offer-types.ts';
import {
  fetchFavoriteAction,
  fetchFavoriteOffersAction,
  fetchOfferIDAction,
  fetchOfferIDCommentsAction,
  fetchOfferIDNearbyAction,
  fetchOffersAction,
  postComment,
} from './data-api-actions.ts';

export type DataState = Omit<
  AppState,
  'city' | 'sort' | 'error' | 'authorizationStatus' | 'userEmail'
>;

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
  isOfferLoading: false,
  isFavoriteLoading: false,
};

const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    updateOffers: (state, action: PayloadAction<OfferType>) => {
      const updatedOffer = action.payload;
      state.offers = state.offers.map((offer) =>
        offer.id === updatedOffer.id ? updatedOffer : offer,
      );

      state.nearby = state.nearby.map((offer) =>
        offer.id === updatedOffer.id ? updatedOffer : offer,
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
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferIDAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferIDAction.rejected, (state) => {
        state.isOfferLoading = false;
      })

      // Обработка fetchOfferIDCommentsAction
      .addCase(fetchOfferIDCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })

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
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isFavoriteLoading = false;
      });
  },
});

export const { updateOffers, updateOffer } = dataSlice.actions;

export default dataSlice.reducer;
