import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const icon = L.icon({ iconUrl: "/src/assets/marker-icon.png"})

const Map: React.FC = () => {
  return (
    <div className="w-full h-full">
      <MapContainer
        className="w-full h-full"
        center={[20.9973, 83.0657]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[20.994, 83.055]} icon={icon}>
          <Popup>Our office Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
