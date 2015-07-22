import React from 'react';
import MapStore from '../../stores/MapStore';

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
    }

    onChangeEvent() {
        var center = MapStore.getMapData().center;
        this.map.setOptions( { center, zoom: 17 } );
    }

    render() {
        return (
            <div className='map' ref='map'></div>
        );
    }
}

export default Map;
