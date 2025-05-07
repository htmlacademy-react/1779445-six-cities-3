import {NameSpace} from '../../../const.ts';
import {State} from '../../../types/state.ts';

export const getCurrentAuthStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State) => state[NameSpace.User].userEmail;
