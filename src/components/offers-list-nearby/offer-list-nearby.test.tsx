import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { makeMockStore, mockOffer } from '../../utils/mocks.ts';
import OffersListNearby from './offers-list-nearby.tsx';

vi.mock('../place-card/place-card', () => ({
  default: ({
    offer,
    onPlaceItemHover,
  }: {
    offer: { title: string; id: string };
    onPlaceItemHover: (id: string) => void;
  }) => (
    <div data-testid="mock-place-card" onMouseEnter={() => onPlaceItemHover(offer.id)}>
      {offer.title}
    </div>
  ),
}));

describe('Component: Offers List Nearby', () => {
  const mockStore = makeMockStore();

  it('should render section title', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <OffersListNearby filteredOffers={[mockOffer]} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
  });
});
