import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Добавьте импорт
import { MemoryRouter } from 'react-router-dom'; // Добавьте если используется routing
import { vi } from 'vitest';
import { makeMockStore, mockOffer } from '../../utils/mocks.ts';
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
  const mockStore = makeMockStore();

  it('should render all place cards', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <MemoizedPlaceCardList offers={[mockOffer]} onPlaceItemHover={() => {}} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
  });

  it('should call onPlaceItemHover on hover', () => {
    const handleHover = vi.fn();

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <MemoizedPlaceCardList offers={[mockOffer]} onPlaceItemHover={handleHover} />
        </MemoryRouter>
      </Provider>,
    );

    const placeCard = screen.getByText(mockOffer.title);
    fireEvent.mouseEnter(placeCard);

    expect(handleHover).toHaveBeenCalledWith(mockOffer.id);
  });
});
