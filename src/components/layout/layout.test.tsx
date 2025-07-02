import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { NameSpace } from '../../const.ts';
import { makeMockStore } from '../../utils/mocks.ts';
import Layout from './layout';

vi.mock('./utils.ts', () => ({
  getLayoutState: vi.fn(() => ({
    rootClassName: '',
    linkClassName: '',
    shouldRenderLoggedUser: true,
    shouldRenderFooter: false,
  })),
}));

describe('Component: Layout', () => {
  it('should render component', () => {
    const mockStore = makeMockStore({});

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('image-logo')).toBeInTheDocument();
  });

  it('renders user nav if shouldRenderLoggedUser is true', () => {
    const mockStore = makeMockStore({
      [NameSpace.User]: {
        authorizationStatus: 'AUTH',
        userEmail: 'test@example.com',
      },
    });

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
