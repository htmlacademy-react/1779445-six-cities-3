import {OfferType} from './place-card-offer-types.ts';
import getStarsRating from './utils.ts';

type PlaceCardProps = {
  offer: OfferType;
  isFavoritePageOffer?: boolean;
};

export default function PlaceCard({offer,isFavoritePageOffer}: PlaceCardProps) {
  return (
    <article className={`${isFavoritePageOffer ? 'favorites__card' : 'cities__card'} place-card`}>
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}

      <div className={`${isFavoritePageOffer ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <a href={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className={`${isFavoritePageOffer ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : '' } button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getStarsRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer/${offer.id}`}>{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())}</p>
      </div>
    </article>
  );
}
