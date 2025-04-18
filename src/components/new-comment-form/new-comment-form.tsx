import { ChangeEvent, useState } from 'react';
import { validateForm, generateRatingStars } from '../../pages/offer-screen/utils.tsx';

export default function NewCommentForm() {
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (value: number) => {
    setUserRating(value);
  };

  const handleTextChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setUserComment(target.value);
  };

  const isSubmitDisabled = !validateForm(userComment, userRating);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {generateRatingStars(userRating, handleRatingChange)}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userComment}
        onChange={handleTextChange}
        minLength={50}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
