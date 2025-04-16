import { Link } from 'react-router-dom';

export default function MainLogo(linkClassName: string): JSX.Element {
  return (
    <Link className={`header__logo-link ${linkClassName}`} to="/">
      <img className="header__logo" src="../../markup/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}
