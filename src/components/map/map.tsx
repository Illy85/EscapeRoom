import { useEffect, useRef, useState } from 'react';
import {Icon, LeafletMouseEvent, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/use-map';
import { BookingPlace } from '../../types/quest';
import { UrlMarker } from '../../const';

type MapProps = {
  places: BookingPlace[];
  location: BookingPlace['location'];
  onMarkerClick: (evt: LeafletMouseEvent) => void;
}

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.CurrentMarker,
  iconSize: [27, 39],
  iconAnchor: [-13, -39]
});

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.DefaultMarker,
  iconSize: [27, 39],
  iconAnchor: [-13, -39]
});


function Map({places, location, onMarkerClick}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const [targetMarker, setTargetMarker] = useState(places[0]);


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      places.forEach((point) => {
        const marker = new Marker([
          point.location.coords[0],
          point.location.coords[1]
        ]);

        const handleMarkerClick = (evt: LeafletMouseEvent) => {
          const targetCoords = Object.values(evt.latlng);
          const getTargetMarker = places.filter((place)=> place.location.coords[0] === targetCoords[0]
          && place.location.coords[1] === targetCoords[1])[0];
          setTargetMarker(getTargetMarker);
        };

        marker
          .setIcon(targetMarker.id === point.id ? defaultCustomIcon : currentCustomIcon)
          .setOpacity(0.75)
          .addTo(markerLayer)
          .on('click', onMarkerClick)
          .on('click', handleMarkerClick);

        if (point.id === 'Contacts') {
          map.doubleClickZoom.disable();
          map.dragging.disable();
          map.scrollWheelZoom.disable();
        }
      });


      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, location, places, onMarkerClick, targetMarker]);


  return(
    <div className="page-content__item">
      <div className="booking-map">
        <div className="map">
          <div
            ref={ mapRef }
            className="map__container"
          />
        </div>
      </div>
    </div>
  );
}

export default Map;
