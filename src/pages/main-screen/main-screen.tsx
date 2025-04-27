import Map from '../../components/map';
import PlaceCardList from '../../components/place-card-list';
import LocationsList from '../../components/locations-list';
import SortingOptions from '../../components/sorting-options';
import getSortedOffers from '../../utils/utils-sort.ts';
import { useState } from 'react';
import {setCity, setSort} from '../../store/action.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { CityName } from '../../const.ts';
import {SortType} from '../../const.ts';
import EmptyListOffersPage from '../../components/empty-list-offers/empty-list-offers.tsx';
import cn from 'classnames';

export default function MainScreen(): JSX.Element{
  const dispatch = useAppDispatch();

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sortType = useAppSelector((state) => state.sort);

  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const filteredOffers = offers.filter((offer) => offer.city.name === String(city));
  const sortedOffers = getSortedOffers(filteredOffers, sortType);

  const handleCityChange = (listItemName: CityName) => {
    dispatch(setCity(listItemName));
  };

  const handlePlaceItemHover = (listItemName: string | null) => {
    setSelectedPlace(listItemName);
  };

  const handleSortTypeChange = (sortItemName: SortType) => {
    dispatch(setSort(sortItemName));
  };

  return (
    <>
      <Helmet>
        <title>Main page</title>
      </Helmet>
      <main className={cn(
        'page__main page__main--index',
        {'page__main--index-empty': filteredOffers.length === 0}
      )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList
            city={city}
            onCityChange={handleCityChange}
          />
        </div>
        <div className="cities">
          {filteredOffers.length === 0 ? (
            <EmptyListOffersPage />
          ) : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
                <SortingOptions onSortChange={handleSortTypeChange} />
                <div className="cities__places-list places__list tabs__content">
                  <PlaceCardList
                    offers={sortedOffers}
                    onPlaceItemHover={handlePlaceItemHover}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <Map
                  filteredOffers={sortedOffers}
                  selectedPlace={selectedPlace}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
