import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OffersScreen from '../../pages/offer-screen/offers-screen.tsx';
import NonFoundScreen from '../../pages/non-found-screen/non-found-screen.tsx';

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
          element = {<FavoritesScreen />}
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
