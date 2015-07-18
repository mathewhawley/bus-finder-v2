import React from 'react';

class Map extends React.Component {

    constructor() {
        super();
        this.state = {
            position: {
                lat: 51.508800,
                lng: -0.127477
            },
            zoom: 12
        };
    }

    componentDidMount() {
        let mapElement = this.refs.map;
        let mapOptions = {
            center: new google.maps.LatLng( this.state.position.lat, this.state.position.lng ),
            zoom: this.state.zoom,
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
            <div className='map' ref='map'></div>
        );
    }
}

export default Map;
