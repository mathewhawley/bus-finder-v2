import React from 'react';
import MapStore from '../../stores/MapStore';

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
        this.onChangeEvent = this.onChangeEvent.bind( this );
    }

    componentDidMount() {
        this.initMap();
        MapStore.addChangeListener( this.onChangeEvent );
    }

    initMap() {
        var { lat, lng } = this.state.position;
        var mapOptions = {
            center: new google.maps.LatLng( lat, lng ),
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

    onChangeEvent() {
        console.log( 'hello' );
        this.setState( MapStore.getPosition() );
    }

    render() {
        return (
            <div className='map' ref='map'></div>
        );
    }
}

export default Map;
