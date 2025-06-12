import { CityName, NameSpace, SortType } from '../../../const.ts';
import { State } from '../../../types/state';
import { getCurrentCity, getCurrentSort } from './offers-selectors.ts';

describe('Offers selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      city: CityName.Paris,
      sort: SortType.Popular,
    },
  } as State;

  it('should return current city', () => {
    expect(getCurrentCity(state)).toBe(CityName.Paris);
  });

  it('should return current sort', () => {
    expect(getCurrentSort(state)).toBe(SortType.Popular);
  });
});
