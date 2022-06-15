// import * as React from 'react';
import { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import './marker.scss'
function Map(props) {
    const defaultProps = {
        center: {
          lat:props.lat,
          lng: props.lng
        },
        zoom: 10
      };
    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA9f_ARjt6AgrQZATjg3VyUmtvlaxcfEBs' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
            </GoogleMapReact>
        </div>
    )
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