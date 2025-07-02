import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { CommentsType } from '../../../components/comment/comment-type.ts';
import { APIRoute, NameSpace } from '../../../const.ts';
import { OfferType } from '../../../types/place-card-offer-types.ts';

export const fetchOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.Data}/fetchOffers`, async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Offers);
  return data;
});

export const fetchOfferIDAction = createAsyncThunk<
  OfferType,
  string,
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.Data}/fetchOfferID`, async (id, { extra: api, rejectWithValue }) => {
  try {
    const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    return data;
  } catch (err) {
    const error = err as AxiosError;

    if (error.response?.status) {
      return rejectWithValue(error.response.status);
    }

    return rejectWithValue('Unknown error');
  }
});

export const fetchOfferIDCommentsAction = createAsyncThunk<
  CommentsType[],
  string,
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.Data}/fetchOfferIDComments`, async (id, { extra: api }) => {
  const { data } = await api.get<CommentsType[]>(`${APIRoute.Comments}/${id}`);
  return data;
});

export const fetchOfferIDNearbyAction = createAsyncThunk<
  OfferType[],
  string,
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.Data}/fetchOfferIDNearby`, async (id, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
  return data;
});

export const postComment = createAsyncThunk<
  CommentsType,
  {
    id: string;
    commentData: {
      comment: string;
      rating: number;
    };
  },
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.Data}/postComment`, async ({ id, commentData }, { extra: api }) => {
  const response = await api.post<CommentsType>(`${APIRoute.Comments}/${id}`, commentData);
  return response.data;
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.Data}/fetchFavorites`, async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Favorites);
  return data;
});

export const fetchFavoriteAction = createAsyncThunk<
  boolean,
  {
    id: string;
    isFavorite: boolean;
  },
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.Data}/fetchFavorite`, async ({ id, isFavorite }, { extra: api, dispatch }) => {
  const { data } = await api.post<boolean>(`${APIRoute.Favorites}/${id}/${Number(isFavorite)}`);
  await dispatch(fetchFavoriteOffersAction());
  return data;
});
