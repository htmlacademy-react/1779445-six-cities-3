import { CityName, SortType } from '../../../const.ts';
import reducer, { setCity, setSort } from './offers-slice';

describe('offersSlice reducer', () => {
  const initialState = {
    city: CityName.Paris,
    sort: SortType.Popular,
    isOffersDataLoading: false,
  };

  it('Should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('Set city', () => {
    const newState = reducer(initialState, setCity(CityName.Cologne));
    expect(newState.city).toEqual(CityName.Cologne);
  });

  it('Set sorting', () => {
    const newState = reducer(initialState, setSort(SortType.TopRated));
    expect(newState.sort).toEqual(SortType.TopRated);
  });
});
