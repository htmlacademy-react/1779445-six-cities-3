import { Link } from 'react-router-dom';

type MainLogoProps = {
  linkClassName: string;
};

export default function MainLogo({ linkClassName }: MainLogoProps): JSX.Element {
  return (
    <Link className={`header__logo-link ${linkClassName}`} to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}
