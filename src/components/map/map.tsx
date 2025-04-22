import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap.tsx';


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
};


const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map({ filteredOffers, selectedPlace}: MapProps): JSX.Element {
  const centerCity = filteredOffers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, centerCity);

  useEffect(() => {
    if(map){
      const markerLayer = layerGroup().addTo(map);
      filteredOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id === selectedPlace ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(map);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, filteredOffers, selectedPlace]);

  return (
    <div className="cities__right-section" ref={mapRef} style={{height: '100%'}}>

    </div>
  );
}

export default Map;
//
//
