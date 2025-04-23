export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum StarsRating {
  OneStars = '20%',
  TwoStars = '40%',
  ThreeStars = '60%',
  FourStars = '80%',
  FiveStars = '100%'
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const DEFAULT_CITY = CityName.Paris;

export const URL_MARKER_DEFAULT = 'public/img/pin.svg';
export const URL_MARKER_CURRENT = 'public/img/pin-active.svg';
