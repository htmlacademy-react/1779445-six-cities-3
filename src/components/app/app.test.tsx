import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Outlet } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const.ts';
import { getMockDataSlice, makeMockStore } from '../../utils/mocks.ts';
import App from './app.tsx';

// Mock all route components
vi.mock('../../pages/loading-screen', () => ({
  default: () => <div>Mock Loading Screen</div>,
}));
vi.mock('../../pages/error-screen', () => ({
  default: () => <div>Mock Error Screen</div>,
}));
vi.mock('../../pages/favorites-screen', () => ({
  default: () => <div>Mock Favorites Screen</div>,
}));
vi.mock('../../pages/login-screen', () => ({
  default: () => <div>Mock Login Screen</div>,
}));
vi.mock('../../pages/main-screen', () => ({
  default: () => <div>Mock Main Screen</div>,
}));
vi.mock('../../pages/non-found-screen', () => ({
  default: () => <div>Mock Not Found Screen</div>,
}));
vi.mock('../../pages/offer-screen', () => ({
  default: () => <div>Mock Offer Screen</div>,
}));

vi.mock('../layout', () => ({
  default: () => (
    <div>
      <div>Mock Layout</div>
      <Outlet />
    </div>
  ),
}));
vi.mock('../scroll-to-top', () => ({
  default: () => null,
}));

describe('Component: app', () => {
  it('should render loading screen when auth status is unknown', () => {
    const mockStore = makeMockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Unknown,
        userEmail: null,
      },
      [NameSpace.Data]: getMockDataSlice({
        isOffersDataLoading: false,
      }),
    });

    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Mock Loading Screen')).toBeInTheDocument();
  });

  it('should render loading screen when offers are loading', () => {
    const mockStore = makeMockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userEmail: 'test@test.com',
      },
      [NameSpace.Data]: getMockDataSlice({
        isOffersDataLoading: true,
      }),
    });

    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(/Mock Loading Screen/i)).toBeInTheDocument();
  });

  it('should render main screen when everything is ok', () => {
    const mockStore = makeMockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userEmail: 'test@test.com',
      },
      [NameSpace.Data]: getMockDataSlice({
        isOffersDataLoading: false,
      }),
    });

    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={[AppRoute.Root]}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Mock Main Screen')).toBeInTheDocument();
  });
});
