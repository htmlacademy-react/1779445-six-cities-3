import { memo } from 'react';
import { MockOffersTypes } from '../place-card/place-card-offer-types.tsx';
import PlaceCard from '../place-card/place-card.tsx';

type PlaceCardListProps = {
  offers: MockOffersTypes;
  onPlaceItemHover: (listItemName: string | null) => void;
};

function PlaceCardList({ offers, onPlaceItemHover }: PlaceCardListProps) {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} onPlaceItemHover={onPlaceItemHover} />
      ))}
    </>
  );
}

const MemoizedPlaceCardList = memo(PlaceCardList);
MemoizedPlaceCardList.displayName = 'MemoizedPlaceCardList';

export default MemoizedPlaceCardList;
