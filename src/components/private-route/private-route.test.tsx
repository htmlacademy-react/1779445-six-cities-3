import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import UserSlice from '../../store/slices/user-slice/user-slice.ts';
import PrivateRoute from './private-route.tsx';

describe('Component: PrivateRoute', () => {
  const mockStoreAuth = configureStore({
    reducer: {
      user: UserSlice,
    },
    preloadedState: {
      user: {
        authorizationStatus: AuthorizationStatus.Auth,
        userEmail: null,
      },
    },
  });

  const mockStoreNoAuth = configureStore({
    reducer: {
      user: UserSlice,
    },
    preloadedState: {
      user: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        userEmail: null,
      },
    },
  });

  it('should render children when authenticated', () => {
    render(
      <Provider store={mockStoreAuth}>
        <MemoryRouter initialEntries={[AppRoute.Root]}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={
                <PrivateRoute>
                  <h1>Private Page</h1>
                </PrivateRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Private Page')).toBeInTheDocument();
  });

  it('should redirect to root when no authenticated', () => {
    render(
      <Provider store={mockStoreNoAuth}>
        <MemoryRouter initialEntries={[AppRoute.Favorites]}>
          <Routes>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <h1>Private Page</h1>
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Login} element={<h1>Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });
});
