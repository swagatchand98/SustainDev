import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from 'leaflet';

const defaultIcon = L.icon({
  iconUrl: "/src/assets/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const DEFAULT_CENTER : LatLngExpression = [20.9973, 83.0657];
const OFFICE_LOCATION : LatLngExpression = [20.994, 83.055];

const Map: React.FC = () => {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    L.Marker.prototype.options.icon = defaultIcon;
    setMapReady(true);
  }, []);

  if (!mapReady) {
    return <div className="w-full h-full bg-gray-100 flex items-center justify-center">Loading map...</div>;
  }

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <MapContainer
        className="w-full h-full"
        center={DEFAULT_CENTER}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={OFFICE_LOCATION} icon={defaultIcon}>
          <Popup>
            <strong>SustainDev Office</strong><br/>
            Visit us for recycling consultations
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;