import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OffersScreen from '../../pages/offer-screen/offers-screen.tsx';
import NonFoundScreen from '../../pages/non-found-screen/non-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppPlaceCArdCount = {
  placeCardCount: number;
}


function App({placeCardCount}: AppPlaceCArdCount): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {<MainScreen placeCardCount={placeCardCount}/>}
        />
        <Route
          path = {AppRoute.Offer}
          element = {<OffersScreen />}
        />
        <Route
          path = {AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {
            <PrivateRoute
              authorizationStatus={ AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path = "*"
          element = {<NonFoundScreen />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
