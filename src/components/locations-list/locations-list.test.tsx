import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import type { Mock } from 'vitest';
import { CityName } from '../../const.ts';
import { getCurrentCity } from '../../store/slices/offers-slice/offers-selectors.ts';
import * as OffersSlice from '../../store/slices/offers-slice/offers-slice.ts';
import { makeMockStore } from '../../utils/mocks.ts';
import LocationsList from './locations-list.tsx';

vi.mock('../../store/slices/offers-slice/offers-selectors', () => ({
  getCurrentCity: vi.fn(),
}));

vi.mock('../../store/slices/offers-slice/offers-slice.ts', async () => {
  const actual = await vi.importActual<
    typeof import('../../store/slices/offers-slice/offers-slice.ts')
  >('../../store/slices/offers-slice/offers-slice.ts');

  return {
    ...actual,
    setCity: vi.fn((city: CityName) => ({
      type: 'offers/setCity',
      payload: city,
    })),
  };
});

describe('Component: Locations List', () => {
  const mockDispatch = vi.fn();
  const mockStore = makeMockStore();

  beforeEach(() => {
    mockDispatch.mockClear();
    mockStore.dispatch = mockDispatch;
  });

  it('Render location correctly', () => {
    (getCurrentCity as Mock).mockReturnValue(CityName.Paris);

    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <LocationsList />
        </BrowserRouter>
      </Provider>,
    );

    Object.values(CityName).forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  it('should call setCity onclick city', () => {
    (getCurrentCity as Mock).mockReturnValue(CityName.Paris);
    const mockSetCity = vi.mocked(OffersSlice.setCity);

    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <LocationsList />
        </BrowserRouter>
      </Provider>,
    );

    const clickedCity = screen.getByText(CityName.Cologne);
    fireEvent.click(clickedCity);

    expect(mockSetCity).toHaveBeenCalledWith(CityName.Cologne);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'offers/setCity',
      payload: CityName.Cologne,
    });
  });
});
