import { NameSpace } from '../../../const.ts';
import { State } from '../../../types/state.ts';
import { mockComment, mockOffer } from '../../../utils/mocks.ts';
import {
  getComments,
  getFavoriteOffers,
  getLoadingStatus,
  getNearby,
  getOffer,
  getOfferLoading,
  getOffers,
  getOffersError,
} from './data-selectors.ts';

describe('Data selectors', () => {
  const initialState = {
    [NameSpace.Data]: {
      offer: mockOffer,
      offers: [mockOffer],
      comments: [mockComment],
      nearby: [mockOffer],
      favoriteOffers: [mockOffer],
      isOffersDataLoading: false,
      fetchOffersError: false,
      isOfferLoading: false,
    },
  } as State;

  it('should return offer', () => {
    expect(getOffer(initialState)).toEqual(mockOffer);
  });

  it('should return offers', () => {
    expect(getOffers(initialState)).toEqual([mockOffer]);
  });

  it('should return comments', () => {
    expect(getComments(initialState)).toEqual([mockComment]);
  });

  it('should return nearby', () => {
    expect(getNearby(initialState)).toEqual([mockOffer]);
  });

  it('should return favorite offers', () => {
    expect(getFavoriteOffers(initialState)).toEqual([mockOffer]);
  });

  it('should return offers data loading', () => {
    expect(getLoadingStatus(initialState)).toEqual(false);
  });

  it('should return fetch offers error', () => {
    expect(getOffersError(initialState)).toEqual(false);
  });

  it('should return offer loading', () => {
    expect(getOfferLoading(initialState)).toEqual(false);
  });
});
