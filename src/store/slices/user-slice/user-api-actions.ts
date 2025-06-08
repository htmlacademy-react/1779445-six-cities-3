import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../../../const.ts';
import { dropToken, getToken, saveToken } from '../../../services/token.ts';
import { AuthData } from '../../../types/auth-data.ts';
import { UserData } from '../../../types/user-data.ts';

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  try {
    const token = getToken();
    if (!token) {
      return { authorizationStatus: AuthorizationStatus.NoAuth } as UserData;
    }
    const { data } = await api.get<UserData>(APIRoute.Login); // Запрашиваем данные пользователя
    return {
      ...data,
      authorizationStatus: AuthorizationStatus.Auth,
    };
  } catch (error) {
    dropToken();
    return { authorizationStatus: AuthorizationStatus.NoAuth } as UserData;
  }
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { extra: api, rejectWithValue }) => {
  try {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logoutAction = createAsyncThunk<
  AuthorizationStatus,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  return AuthorizationStatus.NoAuth;
});
