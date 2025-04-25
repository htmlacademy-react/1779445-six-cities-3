import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../components/place-card/place-card-offer-types.ts';

export const setCity = (city: string) => ({
  type: 'cityOffers/setCity',
  payload: city,
});

export const setOffers = (offers: OfferType[]) => ({
  type: 'cityOffers/setOffers',
  payload: offers,
});
