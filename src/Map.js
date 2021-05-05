import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = props => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 6.244917026946087, lng: -75.57378625664609 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
