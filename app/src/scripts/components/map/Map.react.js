import React from 'react';
import MapStore from '../../stores/MapStore';
import MapOverlayStore from '../../stores/MapOverlayStore';

class Map extends React.Component {

    constructor() {
        super();

        this.map;
        this.mapOptions = MapStore.getMapData();

        this.onChangeEvent = this.onChangeEvent.bind( this );
    }

    componentDidMount() {
        this.map = new google.maps.Map( this.refs.map, this.mapOptions );
        MapStore.addChangeListener( this.onChangeEvent );
        MapOverlayStore.addChangeListener( this.onChangeEvent );
    }

    onChangeEvent() {
        MapStore.repositionMap( this.map );
    }

    render() {
        return (
            <div className='map' ref='map'></div>
        );
    }
}

export default Map;
