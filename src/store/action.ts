import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../components/place-card/place-card-offer-types.ts';
import {CityName} from '../const.ts';
import {CommentsType} from '../components/comment/comment-type.ts';

// Для изменения города
export const setCity = createAction<CityName>('cityOffers/setCity');

// Для установки списка предложений
export const setOffers = createAction<OfferType[]>('cityOffers/setOffers');

export const setComments = createAction<CommentsType[]>('cityOffers/setComments');

export const setSort = createAction<string>('cityOffers/setSort');
