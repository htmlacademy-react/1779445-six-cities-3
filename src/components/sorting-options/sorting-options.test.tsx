import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { expect } from 'vitest';
import { CityName, SortType } from '../../const.ts';
import offersSlice, { setSort } from '../../store/slices/offers-slice/offers-slice.ts';
import SortingOptions from './sorting-options.tsx';

describe('Component: SortingOptions', () => {
  const mockStore = configureStore({
    reducer: {
      offers: offersSlice,
    },
    preloadedState: {
      offers: {
        sort: SortType.Popular,
        city: CityName.Paris,
        isOffersDataLoading: false,
      },
    },
  });

  it('should render current sort type', () => {
    render(
      <Provider store={mockStore}>
        <SortingOptions />
      </Provider>,
    );

    expect(screen.getByTestId('sorting-type-toggle')).toHaveTextContent(SortType.Popular);
  });

  it('should opens and closes sorting list on click', () => {
    render(
      <Provider store={mockStore}>
        <SortingOptions />
      </Provider>,
    );

    const sortTypeToggle = screen.getByTestId('sorting-type-toggle');
    fireEvent.click(sortTypeToggle);

    expect(screen.getByRole('list')).toHaveClass('places__options--opened');
    fireEvent.click(sortTypeToggle);
    expect(screen.getByRole('list')).not.toHaveClass('places__options--opened');
  });

  it('should dispatches setSort when selecting a sort type', () => {
    const dispatchSpy = vi.spyOn(mockStore, 'dispatch');

    render(
      <Provider store={mockStore}>
        <SortingOptions />
      </Provider>,
    );

    const sortTypeToggle = screen.getByTestId('sorting-type-toggle');
    fireEvent.click(sortTypeToggle);

    const topRatedOption = screen.getByTestId('sorting-option-top-rated-first');
    fireEvent.click(topRatedOption);

    expect(dispatchSpy).toHaveBeenCalledWith(setSort(SortType.TopRated));
  });
});
