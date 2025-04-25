import { Helmet } from 'react-helmet-async';
import PlaceCard from '../../components/place-card';
import {groupOffersByCity, getFavoriteOffer} from './utils.ts';
import {useAppSelector} from '../../hooks';

export default function FavoritesScreen() {
  const offers = useAppSelector((state) => state.offers);
  const isFavoritePageOffer = true;
  const groupedOffers = groupOffersByCity(getFavoriteOffer(offers));
  const cities = Object.keys(groupedOffers);

  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {groupedOffers[city].map((offer) => (<PlaceCard key={offer.id} offer={offer} isFavoritePageOffer={isFavoritePageOffer} />))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
