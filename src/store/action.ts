import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../components/place-card/place-card-offer-types.ts';
import {AuthorizationStatus, CityName} from '../const.ts';
import {CommentsType} from '../components/comment/comment-type.ts';

export const setSort = createAction<string>('sort/setSort');

export const setCity = createAction<CityName>('city/setCity');

export const loadOffers = createAction<OfferType[]>('data/loadOffers');

export const loadOfferID = createAction<OfferType>('data/loadOfferID');

export const loadOfferIDComments = createAction<CommentsType[]>('data/loadOfferIDComments');

export const loadOfferIDNearby = createAction<OfferType[]>('data/loadOfferIDNearby');

export const postComment = createAction<CommentsType>('data/postComment');

export const requireAuthorization = createAction<AuthorizationStatus>('auth/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');
