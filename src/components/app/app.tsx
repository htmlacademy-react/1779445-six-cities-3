import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';

import ErrorScreen from '../../pages/error-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import LoadingScreen from '../../pages/loading-screen';
import LoginScreen from '../../pages/login-screen';
import MainScreen from '../../pages/main-screen';
import NonFoundScreen from '../../pages/non-found-screen';
import OffersScreen from '../../pages/offer-screen';

import Layout from '../layout';
import PrivateRoute from '../private-route';
import PublicRoute from '../public-route';
import ScrollToTop from '../scroll-to-top';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/slices/data-slice/data-api-actions.ts';
import { getLoadingStatus, getOffersError } from '../../store/slices/data-slice/data-selectors.ts';
import { getCurrentAuthStatus } from '../../store/slices/user-slice/user-selectors.ts';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getCurrentAuthStatus);
  const isOffersDataLoading = useAppSelector(getLoadingStatus);
  const hasError = useAppSelector(getOffersError);

  useEffect(() => {
    if (authorizationStatus === String(AuthorizationStatus.Auth)) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [authorizationStatus, dispatch]);

  if (authorizationStatus === String(AuthorizationStatus.Unknown) || isOffersDataLoading) {
    return <LoadingScreen />;
  }

  if (hasError) {
    return <ErrorScreen />;
  }

  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<MainScreen />} />
          <Route path={`${AppRoute.Offer}/:id`} element={<OffersScreen />} />
          <Route
            path={AppRoute.Login}
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NonFoundScreen />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
