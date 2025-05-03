import {AuthorizationStatus, NameSpace} from '../../../const.ts';
import {createAction, createSlice} from '@reduxjs/toolkit';
import AppState from '../../../types/app-state.ts';
import {checkAuthAction, loginAction, logoutAction} from './user-api-actions.ts';

type UserState = Pick<AppState, 'authorizationStatus' | 'userEmail'>

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
};

export const requireAuthorization = createAction<AuthorizationStatus>(
  `${NameSpace.User}/requireAuthorization`
);

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload.authorizationStatus;
        state.userEmail = action.payload.email; // Сохраняем email
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload.email;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userEmail = null;
      })
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      });
  },
});

export default userSlice.reducer;
