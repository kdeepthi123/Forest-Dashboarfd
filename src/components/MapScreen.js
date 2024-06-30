import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import fireIcon from '../assets/fire.png';
import FirePopup from './FirePopup';

const customMarkerIcon = L.icon({
    iconUrl: fireIcon, // Use the imported PNG file as the icon URL
    iconSize: [20, 20], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
  });

const MapScreen = ({ data }) => {
  return (
    <MapContainer center={[37.0902, -95.7129]} zoom={3} style={{ height: '100vh', width: '100vw' }}   maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      maxBoundsViscosity={1.0}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
      {data.features.map(feature => (
        <Marker key={feature.id} position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]} icon={customMarkerIcon}>
          <Popup>
            <FirePopup feature={feature} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapScreen;