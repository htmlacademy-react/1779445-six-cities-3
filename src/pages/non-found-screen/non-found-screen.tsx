import {Link} from 'react-router-dom';

export default function NonFoundScreen(): JSX.Element{
  return (
    <div className="page page--gray">
      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
}
