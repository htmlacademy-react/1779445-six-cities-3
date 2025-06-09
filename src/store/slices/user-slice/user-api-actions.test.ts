import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk from 'redux-thunk';
import { APIRoute } from '../../../const.ts';
import { createAPI } from '../../../services/api.ts';
import { State } from '../../../types/state.ts';
import { AppThunkDispatch, extractActionsTypes } from '../../../utils/mocks.ts';
import { checkAuthAction, loginAction, logoutAction } from './user-api-actions.ts';

describe('User async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ data: { offers: [] } });
  });

  it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAction" ', async () => {
    mockAxiosAdapter.onGet(APIRoute.Login).reply(200);
    await store.dispatch(checkAuthAction());

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toEqual([checkAuthAction.pending.type, checkAuthAction.fulfilled.type]);
  });

  it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" when response "400"', async () => {
    mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

    await store.dispatch(checkAuthAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([checkAuthAction.pending.type, checkAuthAction.rejected.type]);
  });

  it('should dispatch "loginAction.pending" and "loginAction.fulfilled" when response "200"', async () => {
    const userData = { email: 'test@test.com', token: 'secret' };
    mockAxiosAdapter.onPost(APIRoute.Login).reply(200, userData);

    await store.dispatch(loginAction({ login: 'test@test.com', password: 'test' }));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([loginAction.pending.type, loginAction.fulfilled.type]);
  });

  it('should dispatch "loginAction.pending" and "loginAction.fulfilled" when response "400"', async () => {
    const userData = { email: 'test@test.com', token: 'secret' };
    mockAxiosAdapter.onPost(APIRoute.Login).reply(400, userData);

    await store.dispatch(loginAction({ login: 'test@test.com', password: 'test' }));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([loginAction.pending.type, loginAction.rejected.type]);
  });

  it('should dispatch "logoutAction.pending" and "logoutAction.fulfilled" when response "200"', async () => {
    mockAxiosAdapter.onDelete(APIRoute.Logout).reply(200);

    await store.dispatch(logoutAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([logoutAction.pending.type, logoutAction.fulfilled.type]);
  });
});
