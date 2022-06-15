// import * as React from 'react';
import { Fragment } from "react";
import GoogleMapReact from "google-map-react";
import "./marker.scss";
function Map(props) {
  const defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lng,
    },
    zoom: 10,
  };
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <GoogleMapReact
        options={ (maps,map) => ({
         
          draggable: true, // make map draggable
          zoomControlOptions: { position: 9 },
          keyboardShortcuts: false, // disable keyboard shortcuts
          scaleControl: true, // allow scale controle
          scrollwheel: true, // allow scroll wheel
        //   styles: mapsStyle, // change default map styles,
        streetViewControl: true,
        scaleControl: true,
        fullscreenControl: true,
        styles: [{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "on"
            }]
        }],
        gestureHandling: "greedy",
        disableDoubleClickZoom: true,
        minZoom: 11,
        maxZoom: 18,

        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: maps.ControlPosition.BOTTOM_CENTER,
            mapTypeIds: [
                maps.MapTypeId.ROADMAP,
                maps.MapTypeId.HYBRID
            ]
        },

        zoomControl: true,
        clickableIcons: false
        
        })}
        bootstrapURLKeys={{ key: "AIzaSyA9f_ARjt6AgrQZATjg3VyUmtvlaxcfEBs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
      </GoogleMapReact>
    </div>
  );
}

function Marker() {
  return (
    <Fragment>
      <div className="pin"></div>
      <div className="pulse"></div>
    </Fragment>
  );
}
export default Map;

