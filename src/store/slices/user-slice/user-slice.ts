import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const.ts';
import AppState from '../../../types/app-state.ts';
import { checkAuthAction, loginAction, logoutAction } from './user-api-actions.ts';

type UserState = Pick<AppState, 'authorizationStatus' | 'userEmail'>;

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload.authorizationStatus;
        state.userEmail = action.payload.email;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userEmail = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload.email;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userEmail = null;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload;
        state.userEmail = null;
      });
  },
});

export default userSlice.reducer;
