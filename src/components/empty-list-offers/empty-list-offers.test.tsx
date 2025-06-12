import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import type { Mock } from 'vitest';
import { CityName } from '../../const.ts';
import { getCurrentCity } from '../../store/slices/offers-slice/offers-selectors.ts';
import { makeMockStore } from '../../utils/mocks.ts';
import EmptyListOffers from './empty-list-offers.tsx';

vi.mock('../../store/slices/offers-slice/offers-selectors', () => ({
  getCurrentCity: vi.fn(),
}));

describe('Component: EmptyListOffers', () => {
  const mockStore = makeMockStore();

  it('should render correctly with current city', () => {
    (getCurrentCity as Mock).mockReturnValue(CityName.Paris);

    render(
      <Provider store={mockStore}>
        <EmptyListOffers />
      </Provider>,
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(
      screen.getByText(/We could not find any property available at the moment in Paris/i),
    ).toBeInTheDocument();
  });
});
