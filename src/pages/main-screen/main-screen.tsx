import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import CitiesContainer from '../../components/cities-container/cities-container.tsx';
import EmptyListOffersPage from '../../components/empty-list-offers/empty-list-offers.tsx';
import LocationsList from '../../components/locations-list';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/slices/data-slice/data-selectors.ts';
import { getCurrentCity } from '../../store/slices/offers-slice/offers-selectors.ts';

export default function MainScreen(): JSX.Element {
  const city = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);

  const filteredOffers = offers.filter((offer) => offer.city.name === String(city));
  return (
    <>
      <Helmet>
        <title>Main page</title>
      </Helmet>
      <main
        className={cn('page__main page__main--index', {
          'page__main--index-empty': filteredOffers.length === 0,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList />
        </div>
        <div className="cities">
          {filteredOffers.length === 0 ? (
            <EmptyListOffersPage />
          ) : (
            <div className="cities__places-container container">
              <CitiesContainer />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
