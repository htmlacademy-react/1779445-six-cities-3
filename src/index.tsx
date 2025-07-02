import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app.tsx';
import { store } from './store';
import { fetchOffersAction } from './store/slices/data-slice/data-api-actions.ts';
import { checkAuthAction } from './store/slices/user-slice/user-api-actions.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
