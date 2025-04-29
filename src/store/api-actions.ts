import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {OfferType} from '../components/place-card/place-card-offer-types.ts';
import {APIRoute, AuthorizationStatus} from '../const.ts';
import {
  loadOfferID,
  loadOfferIDComments,
  loadOfferIDNearby,
  loadOffers,
  requireAuthorization,
  setOffersDataLoadingStatus
} from './action.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AuthData} from '../types/auth-data.ts';
import {UserData} from '../types/user-data.ts';
import {CommentsType} from '../components/comment/comment-type.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOfferIDAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOfferID',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    dispatch(loadOfferID(data));
  },
);

export const fetchOfferIDCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOfferIDComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<CommentsType[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadOfferIDComments(data));
  },
);

export const fetchOfferIDNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOfferIDNearby',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadOfferIDNearby(data));
  },
);

export const postComment = createAsyncThunk<void, {
  id: string;
  commentData: {
    comment: string;
    rating: number;
  }
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({id, commentData}, {dispatch, extra: api}) => {
    const response = await api.post(
      `${APIRoute.Comments}/${id}`,
      commentData,
      {
        headers: {
          'X-Token': localStorage.getItem('token') || '',
          'Content-Type': 'application/json'
        }
      }
    );
    dispatch(fetchOfferIDCommentsAction(id));
    return response.data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/checkAuth',
  async(_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
