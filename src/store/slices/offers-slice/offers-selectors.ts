import { NameSpace } from '../../../const.ts';
import { State } from '../../../types/state.ts';

export const getCurrentCity = (state: State) => state[NameSpace.Offers].city;
export const getCurrentSort = (state: State) => state[NameSpace.Offers].sort;
