import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import {fetchOffersAction} from './store/slices/data-slice/data-api-actions.ts';
import {checkAuthAction} from './store/slices/user-slice/user-api-actions.ts';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>
);
