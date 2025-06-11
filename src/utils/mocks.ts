import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { CommentsType } from '../components/comment/comment-type.ts';
import { OfferType, PropertyType } from '../components/place-card/place-card-offer-types.tsx';
import { createAPI } from '../services/api.ts';
import { State } from '../types/state.ts';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const mockOffer: OfferType = {
  id: '1997',
  title: 'Mock Offer',
  type: PropertyType.Apartment,
  price: 120,
  city: {
    name: 'Paris',
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 },
  },
  location: { latitude: 48.8566, longitude: 2.3522, zoom: 8 },
  isFavorite: true,
  isPremium: false,
  rating: 4.5,
  description: 'A nice place',
  bedrooms: 2,
  goods: ['Wi-Fi'],
  host: {
    name: 'Host',
    avatarUrl: 'img/avatar.jpg',
    isPro: false,
  },
  images: ['img/image.jpg'],
  maxAdults: 3,
  previewImage: 'img/preview.jpg',
};

export const mockComment: CommentsType = {
  id: '1',
  date: '2023-01-01T12:00:00.000Z',
  user: {
    name: 'John Doe',
    avatarUrl: 'img/avatar.jpg',
    isPro: true,
  },
  comment: 'Very good!',
  rating: 4,
};
