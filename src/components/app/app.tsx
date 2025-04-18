import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { getAuthorizationStatus } from '../../authorization.ts';
import { AppRoute } from '../../const.ts';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen';
import LoginScreen from '../../pages/login-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import OffersScreen from '../../pages/offer-screen';
import NonFoundScreen from '../../pages/non-found-screen';
import PrivateRoute from '../private-route';
import Layout from '../layout';
import {MockOffersTypes} from '../place-card/place-card-offer-types.ts';

type AppPlaceCArdCount = {
  placeCardCount: number;
  offers: MockOffersTypes;
}


function App({placeCardCount, offers}: AppPlaceCArdCount): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<Layout />}
          >
            <Route
              index
              element = {
                <MainScreen
                  placeCardCount={placeCardCount}
                  offers={offers}
                />
              }
            />
            <Route
              path = {`${AppRoute.Offer}/:id`}
              element = {<OffersScreen offers={offers}/>}
            />
            <Route
              path = {AppRoute.Login}
              element = {
                <PrivateRoute authorizationStatus={ authorizationStatus } isLogging>
                  <LoginScreen />
                </PrivateRoute>
              }
            />
            <Route
              path = {AppRoute.Favorites}
              element = {
                <PrivateRoute authorizationStatus={ authorizationStatus }>
                  <FavoritesScreen offers={offers}/>
                </PrivateRoute>
              }
            />
            <Route
              path = "*"
              element = {<NonFoundScreen />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
