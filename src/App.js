import React from "react";
import "./style.css";
import Map from "./Map";
import credentials from "./credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${
  credentials.mapsKey
}`;

export default function App() {
  return (
    <div>
      <h1>API Google Maps!</h1>
      <p>Ejemplo de como adicionar mapa a un proyecto Reactjs</p>
      <Map
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando</p>}
      />
    </div>
  );
}
