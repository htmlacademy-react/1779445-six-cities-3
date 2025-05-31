export enum PropertyType {
  Hotel = 'hotel',
  Apartment = 'apartment',
  House = 'house',
  Room = 'room'
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferType = {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type MockOffersTypes = OfferType[];
