import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({ lat, long }) {
  const defaultProps = {
    center: {
      lat: 46.8182,
      lng: 8.2275,
    },
    zoom: 16,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 46.8182, lng: 8.2275 },
      map,
      title: "Hello World!",
    });
    return marker;
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDplnzG-AgRkJ3s3SWtEd5rVora16jaEkU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
