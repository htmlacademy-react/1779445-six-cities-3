import { render } from '@testing-library/react';
import leaflet from 'leaflet';
import { useRef } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useMap, { City } from './use-map';

const mockSetView = vi.fn();
const mockAddTo = vi.fn();

vi.mock('leaflet', () => {
  const tileLayer = vi.fn(() => ({ addTo: mockAddTo }));
  const Map = vi.fn(() => ({ setView: mockSetView }));

  return {
    Map,
    tileLayer,
    default: {
      Map,
      tileLayer,
    },
  };
});

const mockCity: City = {
  location: {
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 10,
  },
};

function TestComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  useMap(mapRef, mockCity);

  return <div ref={mapRef} data-testid="map" />;
}

describe('useMap', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls leaflet.Map and tileLayer on mount', () => {
    render(<TestComponent />);

    expect(leaflet.Map).toHaveBeenCalledTimes(1);
    expect(leaflet.tileLayer).toHaveBeenCalledTimes(1);
    expect(mockSetView).toHaveBeenCalledTimes(1);
    expect(mockSetView).toHaveBeenCalledWith([48.8566, 2.3522], 10);
  });
});
