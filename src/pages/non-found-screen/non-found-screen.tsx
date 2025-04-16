import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

export default function NonFoundScreen(): JSX.Element{
  return (
    <div className="page page--gray">
      <Helmet>
        <title>Not Found 404</title>
      </Helmet>
      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
}
