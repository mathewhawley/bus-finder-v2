import React from 'react';
import MapStore from '../../stores/MapStore';
import RequestUtils from '../../utils/RequestUtils';
import MarkerUtils from '../../utils/MarkerUtils';

class Map extends React.Component {

    constructor( props ) {
        super( props );
        this.map;
        this.options = {
            center: new google.maps.LatLng( this.props.center.lat, this.props.center.lng ),
            zoom: this.props.zoom,
            zoomControlOptions: {
                style: this.props.zoomControlOptions.style,
                position: this.props.zoomControlOptions.position
            },
            streetViewControl: this.props.streetViewControl,
            panControl: this.props.panControl,
            mapTypeControl: this.props.mapTypeControl
        };
        this.onChangeEvent = this.onChangeEvent.bind( this );
    }

    componentDidMount() {
        this.map = new google.maps.Map( this.refs.map, this.options );
        MapStore.addChangeListener( this.onChangeEvent );
    }

    onChangeEvent() {
        this.updateMap();
        this.getNearestStops();
    }

    updateMap() {
        var center = MapStore.getMapData().center;
        this.map.setOptions( { center, zoom: 16 } );
        RequestUtils.getNearestStops( this.map );
        MarkerUtils.addPlaceMarker( this.map, center );
    }

    getNearestStops() {
    }

    render() {
        return (
            <div className={ this.props.className } ref='map'></div>
        );
    }
}

export default Map;
