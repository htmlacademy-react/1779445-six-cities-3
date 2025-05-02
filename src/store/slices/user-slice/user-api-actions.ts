import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus} from '../../../const.ts';
import {AxiosInstance} from 'axios';
import {AuthData} from '../../../types/auth-data.ts';
import {UserData} from '../../../types/user-data.ts';
import {dropToken, saveToken} from '../../../services/token.ts';

export const checkAuthAction = createAsyncThunk<AuthorizationStatus, undefined, {
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async(_arg, {extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      return AuthorizationStatus.Auth;
    } catch {
      return AuthorizationStatus.NoAuth;
    }
  },
);

export const loginAction = createAsyncThunk<AuthorizationStatus, AuthData, {
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password},{extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    return AuthorizationStatus.Auth;
  },
);

export const logoutAction = createAsyncThunk<AuthorizationStatus, undefined, {
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    return AuthorizationStatus.NoAuth;
  },
);

