import React, { useEffect, useState, useRef } from 'react';
import { Map, Marker } from 'react-map-gl';

const MapComponent = ({ selectedProfile }) => {
  const [coordinates, setCoordinates] = useState({ longitude: 0, latitude: 0 });
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 12,
  });
  const mapRef = useRef(null);
  const token = 'pk.eyJ1IjoiZGlwcy0yNyIsImEiOiJjbTIydzJvNTQwY2xpMmpxdzdleDk5bXJmIn0.LbrBDEj7ANfC-LEt7Mb0jg';

  useEffect(() => {
    // Geocoding for the location name
    const address = selectedProfile.location || 'New York City';

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}`)
      .then(response => response.json())
      .then(data => {
        if (data.features && data.features.length > 0) {
          const [longitude, latitude] = data.features[0].center;
          setCoordinates({ longitude, latitude });
          setViewState({ longitude, latitude, zoom: 12 });
          
          if (mapRef.current) {
            mapRef.current.flyTo({
              center: [longitude, latitude],
              zoom: 12,
              essential: true, 
            });
          }
        } else {
          console.error('No matching location found.');
        }
      })
      .catch(err => console.error('Error fetching geolocation:', err));
  }, [selectedProfile, token]);

  return (
    <div className="map-container w-full h-400 mt-20 rounded-lg overflow-hidden shadow-sm">
      <Map
        {...viewState}
        style={{ width: '100%', height: '400px' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={token}
        onMove={evt => setViewState(evt.viewState)}
        ref={mapRef} 
      >
        <Marker longitude={coordinates.longitude} latitude={coordinates.latitude} />
      </Map>
    </div>
  );
};

export default MapComponent;


