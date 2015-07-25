import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import OverlayStore from './OverlayStore';

var ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

function updateMapCenter( lat, lng ) {
    mapData.center = new google.maps.LatLng( lat, lng );
}

function getBounds( map ) {
    return [
      map.getBounds().getNorthEast().lat(),
      map.getBounds().getNorthEast().lng(),
      map.getBounds().getSouthWest().lat(),
      map.getBounds().getSouthWest().lng(),
    ];
}

var mapData = {
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

var MapStore = Object.assign( {}, Events.EventEmitter.prototype, {

    emitChange() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback );
    },

    getMapData() {
        return mapData;
    },

    repositionMap( map ) {
        var center = mapData.center;
        map.setOptions( { center, zoom: 16 } );
        OverlayStore.addPlaceMarker( map, center );
    },

    getNearestStops( map ) {
        var bounds = getBounds( map ),
            url = `http:\/\/digitaslbi-id-test.herokuapp.com/bus-stops?northEast=${ bounds[0] },${ bounds[1] }&southWest=${ bounds[2] },${ bounds[3] }`;
    }
} );

AppDispatcher.register( ( payload ) => {

    var action = payload.action;

    switch( action.type ) {

        case ActionTypes.REPOSITION_MAP:
            updateMapCenter( action.lat, action.lng );
            MapStore.emitChange();
            break;

        default:
            // do nothing
    }
} );

export default MapStore;
