import { useAppDispatch } from '../../hooks';
import { fetchOffersAction } from '../../store/slices/data-slice/data-api-actions.ts';
import './error-screen.css';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className='page page--gray'>
      <section className='error__screen' style={{ textAlign: 'center', paddingTop: '200px' }}>
        <h1 style={{ fontSize: 50 }} className='error-screen__title '>
          {' '}
          Oooops..... <br />
          Network error detected
        </h1>
        <button
          onClick={() => {
            dispatch(fetchOffersAction());
          }}
          className='replay replay--error'
          type='button'
        >
          Try again
        </button>
      </section>
    </div>
  );
}

export default ErrorScreen;
