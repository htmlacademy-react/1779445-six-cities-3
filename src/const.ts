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

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HighPrice = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}


export enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Offer = 'offer',
  Nearby = 'nearby',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'data',
  Offers = 'offers',
  User = 'user',
}

export const DEFAULT_CITY = CityName.Paris;

export const URL_MARKER_DEFAULT = 'public/img/pin.svg';
export const URL_MARKER_CURRENT = 'public/img/pin-active.svg';
