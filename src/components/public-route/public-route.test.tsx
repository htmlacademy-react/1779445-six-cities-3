import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import UserSlice from '../../store/slices/user-slice/user-slice.ts';
import PublicRoute from './index.ts';

describe('Component: PublicRoute', () => {
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

  it('should render children when not authenticated', () => {
    render(
      <Provider store={mockStoreNoAuth}>
        <MemoryRouter initialEntries={[AppRoute.Root]}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={
                <PublicRoute>
                  <h1>Public Page</h1>
                </PublicRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Public Page')).toBeInTheDocument();
  });

  it('should redirect to root when authenticated', () => {
    render(
      <Provider store={mockStoreAuth}>
        <MemoryRouter initialEntries={[AppRoute.Login]}>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={
                <PublicRoute>
                  <h1>Login Page</h1>
                </PublicRoute>
              }
            />
            <Route path={AppRoute.Root} element={<h1>Redirected Home</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Redirected Home')).toBeInTheDocument();
  });
});
