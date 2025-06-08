import { StarsRating } from '../../const.ts';

const getStarsRating = (rating: number) => {
  const ratingValue = rating.toFixed();

  switch (ratingValue) {
    case '1':
      return StarsRating.OneStars;
    case '2':
      return StarsRating.TwoStars;
    case '3':
      return StarsRating.ThreeStars;
    case '4':
      return StarsRating.FourStars;
    case '5':
      return StarsRating.FiveStars;
  }
};

export default getStarsRating;
