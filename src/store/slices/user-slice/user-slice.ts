import {AuthorizationStatus, NameSpace} from '../../../const.ts';
import {createAction, createSlice} from '@reduxjs/toolkit';
import AppState from '../../../types/app-state.ts';
import {checkAuthAction, loginAction, logoutAction} from './user-api-actions.ts';

type UserState = Pick<AppState, 'authorizationStatus'>

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
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
        state.authorizationStatus = action.payload;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      });
  },
});

export default userSlice.reducer;
