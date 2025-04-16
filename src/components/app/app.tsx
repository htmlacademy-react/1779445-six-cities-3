import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { getAuthorizationStatus } from '../../authorization.ts';
import { AppRoute } from '../../const.ts';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OffersScreen from '../../pages/offer-screen/offers-screen.tsx';
import NonFoundScreen from '../../pages/non-found-screen/non-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../Layout/Layout.tsx';


type AppPlaceCArdCount = {
  placeCardCount: number;
}


function App({placeCardCount}: AppPlaceCArdCount): JSX.Element {
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
              element = {<MainScreen placeCardCount={placeCardCount} />}
            />
            <Route
              path = {AppRoute.Offer}
              element = {<OffersScreen />}
            />
            <Route
              path = {AppRoute.Login}
              element = {
                <PrivateRoute authorizationStatus={ authorizationStatus } isLoggin>
                  <LoginScreen />
                </PrivateRoute>
              }
            />
            <Route
              path = {AppRoute.Favorites}
              element = {
                <PrivateRoute authorizationStatus={ authorizationStatus }>
                  <FavoritesScreen/>
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
