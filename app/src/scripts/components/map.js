import React from 'react';

class Map extends React.Component {

    componentDidMount() {
        this.initMap();
    }

    initMap() {
        let mapElement = document.querySelector( '.map' );
        let mapOptions = {
            center: new google.maps.LatLng( 51.508800, -0.127477 ),
            zoom: 12,
            scrollwheel: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT
            },
            streetViewControl: false,
            panControl: false,
            mapTypeControl: false
        };

        new google.maps.Map( mapElement, mapOptions );
    }

    render() {
        return (
            <div className='map'></div>
        );
    }
}

export default Map;
