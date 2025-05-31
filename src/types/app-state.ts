import { OfferType } from '../components/place-card/place-card-offer-types.ts';
import { CommentsType } from '../components/comment/comment-type.ts';
import { CityName } from '../const.ts';

type AppState = {
  city: CityName;
  offer: OfferType | null;
  nearby: OfferType[];
  offers: OfferType[];
  comment: CommentsType | null;
  comments: CommentsType[];
  sort: string;
  authorizationStatus: string;
  fetchOffersError: boolean;
  isOffersDataLoading: boolean;
  isFavorite: boolean;
  favoriteOffers: OfferType[];
  userEmail: string | null;
};

export default AppState;
