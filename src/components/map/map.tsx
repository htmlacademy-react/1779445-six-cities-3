import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const.ts';
import { Icon, Marker, layerGroup } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap.tsx';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

type Offer = {
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  city: City;
};

type MapProps = {
  filteredOffers: Offer[];
  selectedPlace?: string | null;
  isOfferMap?: boolean;
};

const createIcon = (iconUrl: string) =>
  new Icon({
    iconUrl,
    iconSize: [27, 39],
    iconAnchor: [27, 39]
  });

const defaultCustomIcon = createIcon(URL_MARKER_DEFAULT);
const currentCustomIcon = createIcon(URL_MARKER_CURRENT);

function Map({ filteredOffers, selectedPlace, isOfferMap }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const centerCity = filteredOffers[0]?.city;
  const map = useMap(mapRef, centerCity);
  const navigate = useNavigate();

  const getIcon = (id: string) => {
    if (isOfferMap) {
      return id !== selectedPlace ? defaultCustomIcon : currentCustomIcon;
    }
    return id === selectedPlace ? currentCustomIcon : defaultCustomIcon;
  };

  useEffect(() => {
    if (map && centerCity) {
      const markerLayer = layerGroup().addTo(map);
      markerLayer.clearLayers();

      filteredOffers.forEach(offer => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(getIcon(offer.id))
          .addTo(markerLayer)
          .on('mouseover', function (this: Marker) {
            if (!isOfferMap) {
              this.setIcon(currentCustomIcon);
            }
          })
          .on('mouseout', function (this: Marker) {
            if (!isOfferMap) {
              this.setIcon(defaultCustomIcon);
            }
          })
          .on('click', () => navigate(`/offer/${offer.id}`));
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, filteredOffers, selectedPlace, centerCity]);

  if (filteredOffers.length === 0 || !centerCity) {
    return <section />;
  }

  return (
    <section className={`${isOfferMap ? 'offer__map map' : 'cities__map map'}`} ref={mapRef} />
  );
}

export default Map;
