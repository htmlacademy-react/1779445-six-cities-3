import {MockOffersTypes, OfferType} from '../place-card/place-card-offer-types.ts';
import PlaceCard from '../place-card';

type OfferNearbyProps = {
  filteredOffers: MockOffersTypes;
}

export default function OffersListNearby({filteredOffers}: OfferNearbyProps) {
  if(filteredOffers.length === 0) {
    return <section></section>;
  }

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {filteredOffers.slice(0, 3).map((offer: OfferType) => (
          <PlaceCard key={offer.id} offer={offer} isOffersPage/>
        ))}
      </div>
    </section>
  );
}
