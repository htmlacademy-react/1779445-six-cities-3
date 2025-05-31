import SortingOptions from '../sorting-options';
import PlaceCardList from '../place-card-list';
import Map from '../map';

import getSortedOffers from '../../utils/utils-sort.ts';
import { useAppSelector } from '../../hooks';
import {
  getCurrentCity,
  getCurrentSort
} from '../../store/slices/offers-slice/offers-selectors.ts';
import { getOffers } from '../../store/slices/data-slice/data-selectors.ts';
import { useState } from 'react';

export default function CitiesContainer() {
  const city = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const sortType = useAppSelector(getCurrentSort);

  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const filteredOffers = offers.filter(offer => offer.city.name === String(city));
  const sortedOffers = getSortedOffers(filteredOffers, sortType);

  const handlePlaceItemHover = (listItemName: string | null) => {
    setSelectedPlace(listItemName);
  };
  return (
    <>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>
          {filteredOffers.length} places to stay in {city}
        </b>
        <SortingOptions />
        <div className='cities__places-list places__list tabs__content'>
          <PlaceCardList offers={sortedOffers} onPlaceItemHover={handlePlaceItemHover} />
        </div>
      </section>
      <div className='cities__right-section'>
        <Map filteredOffers={filteredOffers} selectedPlace={selectedPlace} />
      </div>
    </>
  );
}
