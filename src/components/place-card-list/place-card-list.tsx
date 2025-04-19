import {MockOffersTypes} from '../place-card/place-card-offer-types.ts';
import PlaceCard from '../place-card';

type PlaceCardListProps = {
  offers: MockOffersTypes;
};

export default function PlaceCardList({ offers }: PlaceCardListProps) {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))}
    </>
  );
}

