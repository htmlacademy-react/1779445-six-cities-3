import { MockOffersTypes } from '../place-card/place-card-offer-types.ts';
import PlaceCard from '../place-card';

type PlaceCardListProps = {
  offers: MockOffersTypes;
  onPlaceItemHover: (listItemName: string | null) => void;
};

export default function PlaceCardList({ offers, onPlaceItemHover }: PlaceCardListProps) {
  return (
    <>
      {offers.map(offer => (
        <PlaceCard key={offer.id} offer={offer} onPlaceItemHover={onPlaceItemHover} />
      ))}
    </>
  );
}
