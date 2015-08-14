import React from 'react';
import MapStore from '../../stores/MapStore';
import RequestUtils from '../../utils/RequestUtils';
import MarkerUtils from '../../utils/MarkerUtils';

class Map extends React.Component {
    constructor() {
        super();
        this.map;
        this.onChangeEvent = this.onChangeEvent.bind( this );
    }

    componentDidMount() {
        this.map = new google.maps.Map( this.refs.map, this.props.options );
        MapStore.addChangeListener( this.onChangeEvent );
    }

    onChangeEvent() {
        const center = MapStore.getMapData().center;
        this.repositionMap( center );
        this.getNearestStops();
    }

    repositionMap( center ) {
        this.map.setOptions( { center, zoom: 16 } );
        MarkerUtils.addPlaceMarker( this.map, center );
    }

    getNearestStops() {
        RequestUtils.getNearestStops( this.map );
        google.maps.event.addListener( this.map, 'dragend', () => RequestUtils.getNearestStops( this.map ) );
    }

    render() {
        return (
            <div className={ this.props.className } ref='map'></div>
        );
    }
}

export default Map;
