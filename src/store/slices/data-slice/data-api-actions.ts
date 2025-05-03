import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferType} from '../../../components/place-card/place-card-offer-types.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, NameSpace} from '../../../const.ts';
import {CommentsType} from '../../../components/comment/comment-type.ts';

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferIDAction = createAsyncThunk<OfferType, string, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchOfferID`,
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchOfferIDCommentsAction = createAsyncThunk<CommentsType[], string, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchOfferIDComments`,
  async (id, {extra: api}) => {
    const {data} = await api.get<CommentsType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const fetchOfferIDNearbyAction = createAsyncThunk<OfferType[], string, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/fetchOfferIDNearby`,
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const postComment = createAsyncThunk<CommentsType, {
  id: string;
  commentData: {
    comment: string;
    rating: number;
  };
}, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Data}/postComment`,
  async ({id, commentData}, {extra: api}) => {
    const response = await api.post<CommentsType>(
      `${APIRoute.Comments}/${id}`,
      commentData,
    );
    return response.data;
  },
);
