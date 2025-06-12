import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import { store } from './store';
import {
  fetchFavoriteOffersAction,
  fetchOffersAction,
} from './store/slices/data-slice/data-api-actions.ts';
import { checkAuthAction } from './store/slices/user-slice/user-api-actions.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const initializeStore = () => {
  store.dispatch(fetchOffersAction());
  store.dispatch(checkAuthAction());
  store.dispatch(fetchFavoriteOffersAction());
  return store;
};

root.render(
  <React.StrictMode>
    <Provider store={initializeStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
