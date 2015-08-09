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
            zoomControlOptions: this.props.zoomControlOptions,
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
        const center = MapStore.getMapData().center;
        this.map.setOptions( { center, zoom: 16 } );
        RequestUtils.getNearestStops( this.map );
        MarkerUtils.addPlaceMarker( this.map, center );
    }

    render() {
        return (
            <div className={ this.props.className } ref='map'></div>
        );
    }
}

export default Map;
