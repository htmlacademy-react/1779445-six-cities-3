import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import ErrorMessage from './components/error-message/error-message.tsx';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const initializeStore = () => {
  store.dispatch(fetchOffersAction());
  store.dispatch(checkAuthAction());
  return store;
};

root.render(
  <React.StrictMode>
    <Provider store={initializeStore()}>
      <ErrorMessage />
      <App/>
    </Provider>
  </React.StrictMode>
);
