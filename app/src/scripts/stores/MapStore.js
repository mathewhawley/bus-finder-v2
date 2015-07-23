import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

var ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

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

function updateMapCenter( lat, lng ) {
    mapData.center = new google.maps.LatLng( lat, lng );
}

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
        map.setOptions( { center, zoom: 17 } );
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
