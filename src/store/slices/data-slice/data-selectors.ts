
import {State} from '../../../types/state.ts';
import {NameSpace} from '../../../const.ts';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getOffer = (state: State) => state[NameSpace.Data].offer;
export const getComments = (state: State) => state[NameSpace.Data].comments;
export const getNearby = (state: State) => state[NameSpace.Data].nearby;
export const getLoadingStatus = (state: State) => state[NameSpace.Data].isOffersDataLoading;
export const getOffersError = (state: State) => state[NameSpace.Data].fetchOffersError;
