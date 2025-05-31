import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NonFoundScreen(): JSX.Element {
  return (
    <div className='page page--gray'>
      <Helmet>
        <title>Not Found 404</title>
      </Helmet>
      <section className='game__screen' style={{ textAlign: 'center', paddingTop: '200px' }}>
        <h1 style={{ fontSize: 50 }}>
          4 {String.fromCodePoint(0x1f622)} 4. <br /> Page not found
        </h1>
        <Link to='/' style={{ fontSize: 30, color: '#4481c3' }}>
          Go to main page
        </Link>
      </section>
    </div>
  );
}
