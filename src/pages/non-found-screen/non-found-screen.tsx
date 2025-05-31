import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

type NonFoundScreenProps = {
  offerError?: number | null;
};

export default function NonFoundScreen({ offerError }: NonFoundScreenProps): JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>Not Found 404</title>
      </Helmet>
      <section className="game__screen" style={{ textAlign: 'center', paddingTop: '200px' }}>
        <h1 style={{ fontSize: 50, marginBottom: '50px' }}>
          4 {String.fromCodePoint(0x1f622)} 4. <br />
        </h1>
        <p style={{ fontSize: 20 }}>Something went wrong.</p>
        <p style={{ fontSize: 20 }}>Status code: {offerError ?? 'Unknown error'}</p>
        <Link to="/" style={{ fontSize: 30, color: '#4481c3' }}>
          Go to main page
        </Link>
      </section>
    </div>
  );
}
