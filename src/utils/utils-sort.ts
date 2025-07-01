import { CommentsType } from '../components/comment/comment-type.ts';
import { OfferType } from '../components/place-card/place-card-offer-types.tsx';
import { SortType } from '../const.ts';

export const getSortedOffers = (offersElement: OfferType[], sortType: string): OfferType[] => {
  const sortedOffers = [...offersElement];
  switch (sortType) {
    case SortType.TopRated:
      return sortedOffers.sort(
        (higherRating, lowerRating) => lowerRating.rating - higherRating.rating,
      );
    case SortType.LowPrice:
      return sortedOffers.sort((higherPrice, lowerPrice) => higherPrice.price - lowerPrice.price);
    case SortType.HighPrice:
      return sortedOffers.sort((higherPrice, lowerPrice) => lowerPrice.price - higherPrice.price);
    default:
      return sortedOffers;
  }
};

export const sortCommentsByDate = (comments: CommentsType[]): CommentsType[] => {
  return [...comments]
    .sort(
      (thirstComment, secondComment) =>
        new Date(secondComment.date).getTime() - new Date(thirstComment.date).getTime(),
    )
    .slice(0, 10);
};
