import { ChangeEvent, FormEvent, useState } from 'react';
import { validateForm, generateRatingStars } from './utils.tsx';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchOfferIDCommentsAction, postComment } from '../../store/slices/data-slice/data-api-actions.ts';
import './new-comment-form.css';

export default function NewCommentForm() {
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handleRatingChange = (value: number) => {
    setUserRating(value);
    setErrorMessage('');
  };

  const handleTextChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setUserComment(target.value);
    setErrorMessage('');
  };

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (!id || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage('');

      await dispatch(
        postComment({
          id: id,
          commentData: {
            comment: userComment,
            rating: userRating
          }
        })
      ).unwrap();

      await dispatch(fetchOfferIDCommentsAction(id)).unwrap();
      setUserComment('');
      setUserRating(0);
    } catch (error) {
      setErrorMessage('Failed to post comment. Please try again.'); // Устанавливаем сообщение об ошибке
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled = !validateForm(userComment, userRating) || isSubmitting;

  return (
    <form className='reviews__form form' onSubmit={handleSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>

      <div className='reviews__rating-form form__rating'>
        {generateRatingStars(userRating, handleRatingChange)}
      </div>

      <textarea
        className={`reviews__textarea form__textarea ${
          errorMessage ? 'reviews__textarea--error' : ''
        }`}
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={userComment}
        onChange={handleTextChange}
        minLength={50}
        disabled={isSubmitting}
      />
      {errorMessage && (
        <p className="reviews__error-message" style={{ color: 'red', marginTop: '8px' }}>
          {errorMessage}
        </p>
      )}

      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={isSubmitDisabled}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
