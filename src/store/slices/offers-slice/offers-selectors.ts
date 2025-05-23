import {State} from '../../../types/state.ts';
import {NameSpace} from '../../../const.ts';

export const getCurrentCity = (state: State) => state[NameSpace.Offers].city;
export const getCurrentSort = (state: State) => state[NameSpace.Offers].sort;
export const getOffersDataLoadingStatus = (state: State) => state[NameSpace.Offers].isOffersDataLoading;
