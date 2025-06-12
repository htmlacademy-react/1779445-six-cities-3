import { render } from '@testing-library/react';
import * as leaflet from 'leaflet';
import { MemoryRouter } from 'react-router-dom';
import Map from './map';

vi.mock('leaflet', () => ({
  Marker: vi.fn(() => ({
    setIcon: vi.fn().mockReturnThis(),
    addTo: vi.fn().mockReturnThis(),
    on: vi.fn().mockReturnThis(),
  })),
  Icon: vi.fn(),
  layerGroup: vi.fn(() => ({
    addTo: vi.fn().mockReturnThis(),
    clearLayers: vi.fn(),
  })),
}));

vi.mock('../../hooks/use-map.tsx', () => ({
  default: () => ({
    setView: vi.fn(),
    removeLayer: vi.fn(),
  }),
}));

const mockCity = {
  location: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 10,
  },
};

const mockOffers = [
  {
    id: '1',
    location: {
      latitude: 52.39,
      longitude: 4.85,
    },
    city: mockCity,
  },
  {
    id: '2',
    location: {
      latitude: 52.38,
      longitude: 4.89,
    },
    city: mockCity,
  },
];

describe('Component: Map', () => {
  it('should render a map section when offers are available', () => {
    const { container } = render(
      <MemoryRouter>
        <Map filteredOffers={mockOffers} selectedPlace="1" />
      </MemoryRouter>,
    );

    expect(container.querySelector('section.cities__map.map')).toBeInTheDocument();
    expect(leaflet.Marker).toHaveBeenCalledTimes(mockOffers.length);
    expect(leaflet.layerGroup).toHaveBeenCalled();
  });

  it('should render empty section if no offers passed', () => {
    const { container } = render(
      <MemoryRouter>
        <Map filteredOffers={[]} selectedPlace={null} />
      </MemoryRouter>,
    );

    expect(container.querySelector('section')).toBeInTheDocument();
    expect(container.querySelector('section')!.className).toBe('');
  });
});
