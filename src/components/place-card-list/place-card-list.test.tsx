import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { mockOffer } from '../../utils/mocks.ts';
import MemoizedPlaceCardList from './place-card-list';

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

describe('Component: PlaceCardList', () => {
  it('should render all place cards', () => {
    render(<MemoizedPlaceCardList offers={[mockOffer]} onPlaceItemHover={() => {}} />);
    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
  });

  it('should call onPlaceItemHover on hover', () => {
    const handleHover = vi.fn();

    render(<MemoizedPlaceCardList offers={[mockOffer]} onPlaceItemHover={handleHover} />);

    const placeCard = screen.getByText(mockOffer.title);
    fireEvent.mouseEnter(placeCard);

    expect(handleHover).toHaveBeenCalledWith(mockOffer.id);
  });
});
