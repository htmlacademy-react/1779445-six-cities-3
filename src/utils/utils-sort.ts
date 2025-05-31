import { OfferType } from '../components/place-card/place-card-offer-types.ts';
import { SortType } from '../const.ts';

function getSortedOffers(offersElement: OfferType[], sortType: string): OfferType[] {
  const sortedOffers = [...offersElement];
  switch (sortType) {
    case SortType.TopRated:
      return sortedOffers.sort(
        (higherRating, lowerRating) => lowerRating.rating - higherRating.rating
      );
    case SortType.LowPrice:
      return sortedOffers.sort((higherPrice, lowerPrice) => higherPrice.price - lowerPrice.price);
    case SortType.HighPrice:
      return sortedOffers.sort((higherPrice, lowerPrice) => lowerPrice.price - higherPrice.price);
    default:
      return sortedOffers;
  }
}
export default getSortedOffers;
