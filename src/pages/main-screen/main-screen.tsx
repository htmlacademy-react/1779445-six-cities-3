import Map from '../../components/map/index.ts';
import PlaceCardList from '../../components/place-card-list/place-card-list.tsx';
import LocationsList from '../../components/locations-list/locations-list.tsx';
import { Helmet } from 'react-helmet-async';
import {setCity, setSort} from '../../store/action.ts';
import { useState } from 'react';
import { CityName } from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import SortingOptions from '../../components/sorting-options';

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

  const handleSortTypeChange = (sortType: string) => {
    dispatch(setSort(sortType));
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
              <SortingOptions onSortChange={handleSortTypeChange}/>
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
