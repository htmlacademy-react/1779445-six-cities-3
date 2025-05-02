import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../const.ts';
import {
  fetchOffersAction,
  fetchOfferIDAction,
  fetchOfferIDCommentsAction,
  fetchOfferIDNearbyAction,
  postComment
} from './data-api-actions.ts';
import AppState from '../../../types/app-state.ts';


type DataState = Omit<AppState, 'city' | 'sort' | 'error' | 'authorizationStatus'>;

const initialState: DataState = {
  offer: null,
  offers: [],
  isOffersDataLoading: false,
  comments: [],
  nearby: [],
  comment: null,
};

const dataSlice = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка fetchOffersAction
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })

      // Обработка fetchOfferIDAction
      .addCase(fetchOfferIDAction.fulfilled, (state, action) => {
        state.offer = action.payload;
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
      });
  },
});

export default dataSlice.reducer;
