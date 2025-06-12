import { Fragment } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/slices/data-slice/data-selectors.ts';
import { logoutAction } from '../../store/slices/user-slice/user-api-actions.ts';
import {
  getCurrentAuthStatus,
  getUserEmail,
} from '../../store/slices/user-slice/user-selectors.ts';
import { getLayoutState } from './utils.ts';

export default function Layout() {
  const location = useLocation();
  const { pathname } = useLocation();
  const offers = useAppSelector(getFavoriteOffers);
  const { rootClassName, linkClassName, shouldRenderLoggedUser, shouldRenderFooter } =
    getLayoutState(pathname as AppRoute);
  const isAuthorized = useAppSelector(getCurrentAuthStatus);
  const dispatch = useAppDispatch();
  const email = useAppSelector(getUserEmail);
  const logOut = () => {
    dispatch(logoutAction());
  };

  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={`header__logo-link ${linkClassName}`} to="/">
                <img
                  className="header__logo"
                  src="../../markup/img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                  data-testid="image-logo"
                />
              </Link>
            </div>
            {shouldRenderLoggedUser ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={
                        isAuthorized === (AuthorizationStatus.Auth as string)
                          ? AppRoute.Favorites
                          : AppRoute.Login
                      }
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      {isAuthorized === (AuthorizationStatus.Auth as string) ? (
                        <Fragment>
                          <span className="header__user-name user__name">{email}</span>
                          <span className="header__favorite-count">{offers.length}</span>
                        </Fragment>
                      ) : (
                        <span className="header__signout">Sign in</span>
                      )}
                    </Link>
                  </li>
                  {isAuthorized === (AuthorizationStatus.Auth as string) ? (
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={location.pathname} onClick={logOut}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
      <Outlet />
      {shouldRenderFooter ? (
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Root}>
            <img
              className="footer__logo"
              src="../../markup/img/logo.svg"
              alt="6 cities logo"
              width="64"
              height="33"
            />
          </Link>
        </footer>
      ) : null}
    </div>
  );
}
