import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import {setComments, setOffers} from './store/action.ts';
import mocksOffers from './mocks/offers.ts';
import mockComments from './mocks/comments.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const initializeStore = () => {
  store.dispatch(setOffers(mocksOffers));
  store.dispatch(setComments(mockComments));
  return store;
};

root.render(
  <React.StrictMode>
    <Provider store={initializeStore()}>
      <App/>
    </Provider>
  </React.StrictMode>
);
