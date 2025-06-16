import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CityName, NameSpace, SortType } from '../../const.ts';
import { makeMockStore, mockOffer } from '../../utils/mocks.ts';
import { OfferType } from '../place-card/place-card-offer-types.tsx';
import CitiesContainer from './cities-container.tsx';

vi.mock('../map', () => ({
  default: () => <div data-testid="mock-map" />,
}));

vi.mock('../place-card-list', () => ({
  default: ({ offers }: { offers: OfferType[] }) => (
    <ul data-testid="mock-place-list">
      {offers.map((offer) => (
        <li key={offer.id}>{offer.title}</li>
      ))}
    </ul>
  ),
}));

vi.mock('../sorting-options', () => ({
  default: () => <div data-testid="mock-sorting-options" />,
}));

describe('Component: CitiesContainer', () => {
  it('should render correctly with filtered and sorted offers', () => {
    const mockStore = makeMockStore({
      [NameSpace.Offers]: {
        city: CityName.Paris,
        sort: SortType.Popular,
        isOffersDataLoading: false,
      },
      [NameSpace.Data]: {
        offers: [mockOffer],
        offer: null,
        nearby: [],
        comments: [],
        isOffersDataLoading: false,
        comment: null,
        fetchOffersError: false,
        isFavorite: false,
        favoriteOffers: [],
        isOfferLoading: false,
        isFavoriteLoading: false,
      },
    });

    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <CitiesContainer />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('mock-sorting-options')).toBeInTheDocument();
    expect(screen.getByTestId('mock-place-list')).toBeInTheDocument();
    expect(screen.getByTestId('mock-map')).toBeInTheDocument();
  });
});
