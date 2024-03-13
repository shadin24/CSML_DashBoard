import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = ({ apiKey }) => {
  const kochiCoords = { lat: 9.9312, lng: 76.2673 }; // Coordinates for Kochi
  const kalamasseryCoords = { lat: 10.0482, lng: 76.3224 }; // Coordinates for Kalamassery
  const edapallyCoords = { lat: 10.0339, lng: 76.3074 }; // Coordinates for Edapally
  const kaloorCoords = { lat: 9.9997, lng: 76.3060 }; // Coordinates for Kaloor

  const [selectedMarker, setSelectedMarker] = React.useState(null);

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        zoom={14} // Adjust zoom level to focus on Kochi
        center={kochiCoords} // Set center to Kochi's coordinates
      >
        {/* Marker for Kochi */}
        <Marker
          position={kochiCoords}
          onClick={() => setSelectedMarker({ title: "Kochi", coords: kochiCoords })}
        />
        {/* Marker for Kalamassery */}
        <Marker
          position={kalamasseryCoords}
          onClick={() => setSelectedMarker({ title: "Kalamassery", coords: kalamasseryCoords })}
        />
        {/* Marker for Edapally */}
        <Marker
          position={edapallyCoords}
          onClick={() => setSelectedMarker({ title: "Edapally", coords: edapallyCoords })}
        />
        {/* Marker for Kaloor */}
        <Marker
          position={kaloorCoords}
          onClick={() => setSelectedMarker({ title: "Kaloor", coords: kaloorCoords })}
        />
        {/* Info window for selected marker */}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.coords}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h3>{selectedMarker.title}</h3>
              <p>Your Sensor is here</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapContainer;
