import cn from 'classnames';
import { memo, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteAction } from '../../store/slices/data-slice/data-api-actions.ts';
import { updateOffers } from '../../store/slices/data-slice/data-slice.ts';
import { getCurrentAuthStatus } from '../../store/slices/user-slice/user-selectors.ts';
import { OfferType } from '../../types/place-card-offer-types.ts';
import getStarsRating from './utils.ts';

type PlaceCardProps = {
  offer: OfferType;
  isFavoritePageOffer?: boolean;
  isOffersPage?: boolean;
  onPlaceItemHover?: (listItemName: string | null) => void;
};

function PlaceCard({ offer, isFavoritePageOffer, isOffersPage, onPlaceItemHover }: PlaceCardProps) {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getCurrentAuthStatus);
  const navigate = useNavigate();
  const handleCreateHover = (isEnter: boolean) => (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    onPlaceItemHover?.(isEnter ? offer.id : null);
  };

  const handleFavoriteClick = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if (authStatus === (AuthorizationStatus.NoAuth as string)) {
      navigate(AppRoute.Login);
    }

    const newStatus = !offer.isFavorite;
    dispatch(updateOffers({ ...offer, isFavorite: newStatus }));
    try {
      await dispatch(
        fetchFavoriteAction({
          id: offer.id,
          isFavorite: newStatus,
        }),
      ).unwrap();
    } catch {
      dispatch(updateOffers({ ...offer, isFavorite: !newStatus }));
    }
  };

  return (
    <article
      className={`place-card
        ${isFavoritePageOffer ? 'favorites__card' : ''}
        ${isOffersPage ? 'near-places__card' : ''}
        ${!isFavoritePageOffer && !isOffersPage ? 'cities__card' : ''}
      `}
      onMouseEnter={handleCreateHover(true)}
      id={offer.id}
      onMouseLeave={handleCreateHover(false)}
    >
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}

      <div
        className={cn(
          'place-card__image-wrapper',
          { 'favorites__image-wrapper': isFavoritePageOffer },
          { 'near-places__image-wrapper': isOffersPage },
          { 'cities__image-wrapper': !isFavoritePageOffer && !isOffersPage },
        )}
      >
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cn('place-card__info', { 'favorites__card-info': isFavoritePageOffer })}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={(evt) => handleFavoriteClick(evt)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getStarsRating(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer/${offer.id}`}>{offer.title}</a>
        </h2>
        <p className="place-card__type">
          {offer.type.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())}
        </p>
      </div>
    </article>
  );
}

const MemoizedPlaceCard = memo(PlaceCard);
MemoizedPlaceCard.displayName = 'PlaceCard';

export default MemoizedPlaceCard;
