import { mockComment, mockOffer } from '../../../utils/mocks.ts';
import reducer, { updateOffer, updateOffers } from '../data-slice/data-slice.ts';
import {
  fetchFavoriteAction,
  fetchFavoriteOffersAction,
  fetchOfferIDAction,
  fetchOfferIDCommentsAction,
  fetchOfferIDNearbyAction,
  fetchOffersAction,
  postComment,
} from './data-api-actions.ts';
import type { DataState } from './data-slice.ts';

const createInitialState = (): DataState => ({
  offer: null,
  offers: [],
  isOffersDataLoading: false,
  comments: [],
  nearby: [],
  comment: null,
  fetchOffersError: false,
  isFavorite: false,
  favoriteOffers: [],
  isOfferLoading: false,
});

describe('Data slice reducer', () => {
  it('should update single offer in offers and nearby', () => {
    const initial = createInitialState();
    initial.offers = [{ ...mockOffer }];
    initial.nearby = [{ ...mockOffer }];

    const updatedOffer = { ...mockOffer, title: 'Updated Title' };
    const state = reducer(initial, updateOffers(updatedOffer));

    expect(state.offers[0].title).toBe('Updated Title');
    expect(state.nearby[0].title).toBe('Updated Title');
  });

  it('should update state.offer using updateOffer', () => {
    const state = reducer(createInitialState(), updateOffer(mockOffer));
    expect(state.offer).toEqual(mockOffer);
  });

  it('should handle fetchOffersAction.pending', () => {
    const state = reducer(createInitialState(), { type: fetchOffersAction.pending.type });
    expect(state.isOffersDataLoading).toBe(true);
    expect(state.fetchOffersError).toBe(false);
  });

  it('should handle fetchOffersAction.fulfilled', () => {
    const state = reducer(createInitialState(), {
      type: fetchOffersAction.fulfilled.type,
      payload: [mockOffer],
    });

    expect(state.offers).toEqual([mockOffer]);
    expect(state.isOffersDataLoading).toBe(false);
  });

  it('should handle fetchOffersAction.rejected', () => {
    const state = reducer(createInitialState(), { type: fetchOffersAction.rejected.type });
    expect(state.isOffersDataLoading).toBe(false);
    expect(state.fetchOffersError).toBe(true);
  });

  it('should handle fetchOfferIDAction.pending', () => {
    const state = reducer(createInitialState(), { type: fetchOfferIDAction.pending.type });
    expect(state.isOfferLoading).toBe(true);
  });

  it('should handle fetchOfferIDAction.fulfilled', () => {
    const state = reducer(createInitialState(), {
      type: fetchOfferIDAction.fulfilled.type,
      payload: mockOffer,
    });

    expect(state.offer).toEqual(mockOffer);
    expect(state.isOfferLoading).toBe(false);
  });

  it('should handle fetchOfferIDAction.rejected', () => {
    const state = reducer(createInitialState(), {
      type: fetchOfferIDAction.rejected.type,
    });

    expect(state.isOfferLoading).toBe(false);
  });

  it('should handle fetchOfferIDCommentsAction.fulfilled', () => {
    const state = reducer(createInitialState(), {
      type: fetchOfferIDCommentsAction.fulfilled.type,
      payload: [mockComment],
    });

    expect(state.comments).toEqual([mockComment]);
  });

  it('should handle fetchOfferIDNearbyAction.fulfilled', () => {
    const state = reducer(createInitialState(), {
      type: fetchOfferIDNearbyAction.fulfilled.type,
      payload: [mockOffer],
    });

    expect(state.nearby).toEqual([mockOffer]);
  });

  it('should handle fetchFavoriteOffersAction.fulfilled', () => {
    const state = reducer(createInitialState(), {
      type: fetchFavoriteOffersAction.fulfilled.type,
      payload: [mockOffer],
    });

    expect(state.favoriteOffers).toEqual([mockOffer]);
  });

  it('should handle postComment.fulfilled', () => {
    const state = reducer(createInitialState(), {
      type: postComment.fulfilled.type,
      payload: mockComment,
    });

    expect(state.comment).toEqual(mockComment);
  });

  it('should handle fetchFavoriteAction.fulfilled', () => {
    const state = reducer(createInitialState(), {
      type: fetchFavoriteAction.fulfilled.type,
      payload: true,
    });

    expect(state.isFavorite).toEqual(true);
  });
});
