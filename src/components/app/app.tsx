import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen';
import LoginScreen from '../../pages/login-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import OffersScreen from '../../pages/offer-screen';
import NonFoundScreen from '../../pages/non-found-screen';
import PrivateRoute from '../private-route';
import Layout from '../layout';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen';
import ScrollToTop from '../scroll-to-top';
import {getCurrentAuthStatus} from '../../store/slices/user-slice/user-selectors.ts';
import {getOffersDataLoadingStatus} from '../../store/slices/offers-slice/offers-selectors.ts';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getCurrentAuthStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  if(authorizationStatus === String(AuthorizationStatus.Unknown) || isOffersDataLoading){
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<Layout />}
          >
            <Route
              index
              element = {<MainScreen/>}
            />
            <Route
              path = {`${AppRoute.Offer}/:id`}
              element = {<OffersScreen/>}
            />
            <Route
              path = {AppRoute.Login}
              element = {
                <LoginScreen/>
              }
            />
            <Route
              path = {AppRoute.Favorites}
              element = {
                <PrivateRoute>
                  <FavoritesScreen/>
                </PrivateRoute>
              }
            />
            <Route
              path = '*'
              element = {<NonFoundScreen />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
