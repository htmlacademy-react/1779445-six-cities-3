import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizationStatus, NameSpace } from '../../const.ts';
import { makeMockStore, mockOffer } from '../../utils/mocks.ts';
import PlaceCard from './place-card';

describe('PlaceCard', () => {
  it('renders and handles favorite click', () => {
    const store = makeMockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        userEmail: 'test@test.com',
      },
    });

    const dispatchSpy = vi.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <BrowserRouter>
          <PlaceCard offer={mockOffer} />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Mock Offer')).toBeInTheDocument();
    expect(screen.getByText(/120/)).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', mockOffer.previewImage);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(dispatchSpy).toHaveBeenCalled();
  });
});
