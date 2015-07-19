import React from 'react';
import MapStore from '../../stores/MapStore';

class Map extends React.Component {

    constructor() {
        super();
        this.state = MapStore.getMapPosition();
    }

    componentDidMount() {
        this.initMap();
    }

    initMap() {
        var mapOptions = {
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

        new google.maps.Map( this.refs.map, mapOptions );
    }

    render() {
        return (
            <div className='map' ref='map'></div>
        );
    }
}

export default Map;
