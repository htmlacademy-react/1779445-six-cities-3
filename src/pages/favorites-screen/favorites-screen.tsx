import { Helmet } from 'react-helmet-async';
import PlaceCard from '../../components/place-card';
import {groupOffersByCity, getFavoriteOffer} from './utils.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/slices/data-slice/data-selectors.ts';
import {fetchFavoriteOffersAction} from '../../store/slices/data-slice/data-api-actions.ts';
import {useEffect} from 'react';
import FavoritesEmpty from '../../components/favorites-empty';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

export default function FavoritesScreen() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getFavoriteOffers);
  const isFavoritePageOffer = true;
  const groupedOffers = groupOffersByCity(getFavoriteOffer(offers));
  const cities = Object.keys(groupedOffers);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return (
    <div className='page'>
      <Helmet>
        <title>Favorites</title>
      </Helmet>

      {offers.length === 0 ? (
        <FavoritesEmpty />
      ) : (
        <main className='page__main page__main--favorites'>
          <div className='page__favorites-container container'>
            <section className='favorites'>
              <h1 className='favorites__title'>Saved listing</h1>
              <ul className='favorites__list'>
                {cities.map((city) => (
                  <li key={city} className='favorites__locations-items'>
                    <div className='favorites__locations locations locations--current'>
                      <div className='locations__item'>
                        <Link className='locations__item-link' to={AppRoute.Root}>
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className='favorites__places'>
                      {groupedOffers[city].map((offer) => (
                        <PlaceCard
                          key={offer.id}
                          offer={offer}
                          isFavoritePageOffer={isFavoritePageOffer}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      )}
    </div>
  );
}
