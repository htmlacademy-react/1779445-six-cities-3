import { MouseEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import CommentsList from '../../components/comments-list';
import Map from '../../components/map';
import NewCommentForm from '../../components/new-comment-form';
import OffersListNearby from '../../components/offers-list-nearby';
import getStarsRating from '../../components/place-card/utils.ts';
import { AuthorizationStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchFavoriteAction,
  fetchOfferIDAction,
  fetchOfferIDCommentsAction,
  fetchOfferIDNearbyAction,
} from '../../store/slices/data-slice/data-api-actions.ts';
import {
  getComments,
  getNearby,
  getOffer,
  getOfferLoading,
} from '../../store/slices/data-slice/data-selectors.ts';
import { updateOffer, updateOffers } from '../../store/slices/data-slice/data-slice.ts';
import { getCurrentAuthStatus } from '../../store/slices/user-slice/user-selectors.ts';
import LoadingScreen from '../loading-screen';
import NonFoundScreen from '../non-found-screen';

export default function OffersScreen() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getComments);
  const nearby = useAppSelector(getNearby);
  const isAuthorized = useAppSelector(getCurrentAuthStatus);
  const currentOffer = useAppSelector(getOffer);
  const isOfferLoading = useAppSelector(getOfferLoading);
  const [offerError, setOfferError] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          await dispatch(fetchOfferIDAction(id)).unwrap();
          await dispatch(fetchOfferIDCommentsAction(id)).unwrap();
          await dispatch(fetchOfferIDNearbyAction(id)).unwrap();
        } catch (err) {
          setOfferError(err as number);
        }
      };
      fetchData();
    }
  }, [dispatch, id]);

  if (isOfferLoading) {
    return <LoadingScreen />;
  }

  if (!currentOffer) {
    return <NonFoundScreen offerError={offerError} />;
  }
  const favoriteClickHandler = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const newStatus = !currentOffer.isFavorite;
    dispatch(updateOffer({ ...currentOffer, isFavorite: newStatus }));
    dispatch(updateOffers({ ...currentOffer, isFavorite: newStatus }));
    try {
      await dispatch(
        fetchFavoriteAction({
          id: currentOffer.id,
          isFavorite: currentOffer.isFavorite,
        }),
      ).unwrap();
    } catch {
      dispatch(updateOffer({ ...currentOffer, isFavorite: !newStatus }));
      dispatch(updateOffers({ ...currentOffer, isFavorite: !newStatus }));
    }
  };

  return (
    <div className="page">
      <Helmet>
        <title>Offers</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.map((image: string) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium ? (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{currentOffer.title}</h1>
                {isAuthorized === 'AUTH' ? (
                  <button
                    className={`offer__bookmark-button ${currentOffer.isFavorite ? 'offer__bookmark-button--active' : ''} button`}
                    type="button"
                    onClick={() => favoriteClickHandler}
                  >
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                ) : null}
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getStarsRating(currentOffer.rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} {currentOffer.bedrooms === 1 ? 'bedroom' : 'bedrooms'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} {currentOffer.maxAdults === 1 ? 'adult' : 'adults'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((goods: string) => (
                    <li key={goods} className="offer__inside-item">
                      {goods}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro ? <span className="offer__user-status"> Pro </span> : ''}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness
                    of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National
                    Opera, but where the bustle of the city comes to rest in this alley flowery and
                    colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{comments.length}</span>
                </h2>
                <CommentsList comments={comments} />
                {isAuthorized === (AuthorizationStatus.Auth as string) ? <NewCommentForm /> : null}
              </section>
            </div>
          </div>
          <Map
            filteredOffers={[...nearby.slice(0, 3), currentOffer]}
            selectedPlace={currentOffer.id}
            isOfferMap
          />
        </section>

        <div className="container">
          <OffersListNearby filteredOffers={nearby} />
        </div>
      </main>
    </div>
  );
}
