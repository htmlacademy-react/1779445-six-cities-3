import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { mockOffer } from '../../utils/mocks.ts';
import OffersListNearby from './offers-list-nearby.tsx';

vi.mock('../place-card', () => ({
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
  it('', () => {
    render(<OffersListNearby filteredOffers={[mockOffer]} />);
    expect(screen.getByText('Other places in the neighbourhood')).toBeInTheDocument();
  });
});
