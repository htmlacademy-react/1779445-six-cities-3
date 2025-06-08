import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MarkerUrl } from '../../const.ts';
import useMap from '../../hooks/use-map.tsx';

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
    iconAnchor: [27, 39],
  });

const defaultCustomIcon = createIcon(MarkerUrl.URL_MARKER_DEFAULT);
const currentCustomIcon = createIcon(MarkerUrl.URL_MARKER_CURRENT);

const Map: FC<MapProps> = ({ filteredOffers, selectedPlace, isOfferMap }) => {
  const mapRef = useRef(null);
  const centerCity = filteredOffers[0]?.city;
  const map = useMap(mapRef, centerCity);
  const navigate = useNavigate();

  useEffect(() => {
    const getIcon = (id: string) => {
      if (isOfferMap) {
        return id !== selectedPlace ? defaultCustomIcon : currentCustomIcon;
      }
      return id === selectedPlace ? currentCustomIcon : defaultCustomIcon;
    };

    if (map && centerCity) {
      const markerLayer = layerGroup().addTo(map);
      markerLayer.clearLayers();

      filteredOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
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
  }, [map, filteredOffers, selectedPlace, centerCity, isOfferMap, navigate]);

  if (filteredOffers.length === 0 || !centerCity) {
    return <section />;
  }

  return (
    <section className={`${isOfferMap ? 'offer__map map' : 'cities__map map'}`} ref={mapRef} />
  );
};

export default Map;
