import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
        <Marker position={[20.9973, 83.0657]}>
          <Popup>Our office Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
