import { Helmet } from 'react-helmet-async';
import PlaceCardList from '../../components/place-card-list/place-card-list.tsx';
import LocationsList from '../../components/locations-list/locations-list.tsx';
import { useState } from 'react';
import {CityName} from '../../const.ts';
import Map from '../../components/map/index.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { setCity } from '../../store/action.ts';

export default function MainScreen(): JSX.Element{
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const filteredOffers = offers.filter((offer) => offer.city.name === String(city));

  const handleCityChange = (listItemName: CityName) => {
    dispatch(setCity(listItemName));
  };

  const handlePlaceItemHover = (listItemName: string | null) => {
    setSelectedPlace(listItemName);
  };

  return (
    <>
      <Helmet>
        <title>Main page</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList
            city={city}
            onCityChange={handleCityChange}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom {places__options--opened}">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList
                  offers={filteredOffers}
                  onPlaceItemHover={handlePlaceItemHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                filteredOffers={filteredOffers}
                selectedPlace={selectedPlace}
              />
            </div>
          </div>
        </div>
      </main>
    </>
);
}
