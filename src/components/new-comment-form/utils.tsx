import { Fragment } from 'react';

export const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'] as const;

// Валидация формы
export const validateForm = (comment: string, rating: number) => {
  const MIN_COMMENT_LENGTH = 50;
  return comment.length >= MIN_COMMENT_LENGTH && rating > 0;
};

// Генерация звезд рейтинга
export const generateRatingStars = (currentRating: number, onChange: (value: number) => void) =>
  Array.from({ length: 5 }, (_, i) => {
    const ratingValue = 5 - i;
    return (
      <Fragment key={ratingValue}>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value={ratingValue}
          id={`${ratingValue}-stars`}
          type='radio'
          checked={currentRating === ratingValue}
          onChange={() => onChange(ratingValue)}
        />
        <label
          htmlFor={`${ratingValue}-stars`}
          className='reviews__rating-label form__rating-label'
          title={RATING_TITLES[i]}
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </Fragment>
    );
  });
