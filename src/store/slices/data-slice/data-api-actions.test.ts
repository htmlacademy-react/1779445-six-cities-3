import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { Action } from 'redux';
import thunk from 'redux-thunk';
import { APIRoute } from '../../../const.ts';
import { createAPI } from '../../../services/api.ts';
import * as tokenUtils from '../../../services/token.ts';
import { State } from '../../../types/state.ts';
import {
  AppThunkDispatch,
  extractActionsTypes,
  mockComment,
  mockOffer,
} from '../../../utils/mocks.ts';
import {
  fetchFavoriteAction,
  fetchFavoriteOffersAction,
  fetchOfferIDAction,
  fetchOfferIDCommentsAction,
  fetchOfferIDNearbyAction,
  fetchOffersAction,
  postComment,
} from './data-api-actions.ts';

describe('Data api actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ data: { offers: [] } });
  });

  //fetchOffersAction
  it('should dispatch "fetchOffersAction.pending" and "fetchOffersAction.fulfilled" with thunk "fetchOffersAction"', async () => {
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffer);

    const result = await store.dispatch(fetchOffersAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([fetchOffersAction.pending.type, fetchOffersAction.fulfilled.type]);
    expect(result.payload).toEqual(mockOffer);
  });

  it('should dispatch "fetchOffersAction.pending" and "fetchOffersAction.rejected" when response "400"', async () => {
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(400);

    const result = await store.dispatch(fetchOffersAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([fetchOffersAction.pending.type, fetchOffersAction.rejected.type]);
    expect(result.payload).toEqual(undefined);
  });

  //fetchOfferIDAction
  it('should dispatch "fetchOfferIDAction.pending" and "fetchOfferIDAction.fulfilled" with thunk "fetchOfferIDAction"', async () => {
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOffer.id}`).reply(200, mockOffer);

    const result = await store.dispatch(fetchOfferIDAction(mockOffer.id));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([fetchOfferIDAction.pending.type, fetchOfferIDAction.fulfilled.type]);
    expect(result.payload).toEqual(mockOffer);
  });

  it('should dispatch "fetchOfferIDAction.pending" and "fetchOfferIDAction.rejected" with response "400"', async () => {
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOffer.id}`).reply(400);

    const result = await store.dispatch(fetchOfferIDAction(mockOffer.id));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([fetchOfferIDAction.pending.type, fetchOfferIDAction.rejected.type]);
    expect(result.payload).toEqual('Unknown error');
  });

  //fetchOfferIDCommentsAction
  it('should dispatch "fetchOfferIDCommentsAction.pending" and "fetchOfferIDCommentsAction.fulfilled" with thunk "fetchOfferIDCommentsAction"', async () => {
    mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockComment.id}`).reply(200, mockComment);

    const result = await store.dispatch(fetchOfferIDCommentsAction(mockComment.id));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOfferIDCommentsAction.pending.type,
      fetchOfferIDCommentsAction.fulfilled.type,
    ]);

    expect(result.payload).toEqual(mockComment);
  });

  it('should dispatch "fetchOfferIDCommentsAction.pending" and "fetchOfferIDCommentsAction.rejected" with response "400"', async () => {
    mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockComment.id}`).reply(400);

    const result = await store.dispatch(fetchOfferIDCommentsAction(mockComment.id));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOfferIDCommentsAction.pending.type,
      fetchOfferIDCommentsAction.rejected.type,
    ]);
    expect(result.payload).toEqual(undefined);
  });

  //fetchOfferIDNearbyAction
  it('should dispatch "fetchOfferIDNearbyAction.pending" and "fetchOfferIDNearbyAction.fulfilled" with thunk "fetchOfferIDNearbyAction"', async () => {
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOffer.id}/nearby`).reply(200, mockOffer);

    const result = await store.dispatch(fetchOfferIDNearbyAction(mockOffer.id));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOfferIDNearbyAction.pending.type,
      fetchOfferIDNearbyAction.fulfilled.type,
    ]);
    expect(result.payload).toEqual(mockOffer);
  });

  it('should dispatch "fetchOfferIDNearbyAction.pending" and "fetchOfferIDNearbyAction.rejected" with response "400"', async () => {
    mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOffer.id}/nearby`).reply(400);

    const result = await store.dispatch(fetchOfferIDNearbyAction(mockOffer.id));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOfferIDNearbyAction.pending.type,
      fetchOfferIDNearbyAction.rejected.type,
    ]);
    expect(result.payload).toEqual(undefined);
  });

  //fetchFavoriteOffersAction
  it('fetchFavoriteOffersAction should immediately return empty array if token is missing', async () => {
    vi.spyOn(tokenUtils, 'getToken').mockReturnValue('');
    mockAxiosAdapter.onGet(APIRoute.Favorites).reply(200, []);

    const result = await store.dispatch(fetchFavoriteOffersAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchFavoriteOffersAction.pending.type,
      fetchFavoriteOffersAction.fulfilled.type,
    ]);
    expect(result.payload).toEqual([]);
  });

  //postComment
  it('should dispatch "postComment.pending" and "postComment.fulfilled" with thunk "postComment"', async () => {
    const commentType = {
      id: 'secret',
      commentData: {
        comment: 'something',
        rating: 5,
      },
    };

    mockAxiosAdapter.onPost(`${APIRoute.Comments}/${commentType.id}`).reply(200);

    await store.dispatch(postComment(commentType));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([postComment.pending.type, postComment.fulfilled.type]);
  });

  it('should dispatch "postComment.pending" and "postComment.fulfilled" with response "400"', async () => {
    const commentType = {
      id: 'secret',
      commentData: {
        comment: 'something',
        rating: 5,
      },
    };

    mockAxiosAdapter.onPost(`${APIRoute.Comments}/${commentType.id}`).reply(400);

    await store.dispatch(postComment(commentType));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([postComment.pending.type, postComment.rejected.type]);
  });

  //fetchFavoriteAction
  it('should dispatch correct sequence of actions', async () => {
    const fetchFavorite = {
      id: 'secret',
      isFavorite: false,
    };

    mockAxiosAdapter
      .onPost(`${APIRoute.Favorites}/${fetchFavorite.id}/${Number(false)}`)
      .reply(200, true);

    mockAxiosAdapter.onGet(APIRoute.Favorites).reply(200, []);

    const result = await store.dispatch(fetchFavoriteAction(fetchFavorite));
    const actionsTypes = extractActionsTypes(store.getActions());

    expect(actionsTypes).toEqual([
      fetchFavoriteAction.pending.type,
      fetchFavoriteOffersAction.pending.type,
      fetchFavoriteOffersAction.fulfilled.type,
      fetchFavoriteAction.fulfilled.type,
    ]);
    expect(result.payload).toBe(true);
  });
});
