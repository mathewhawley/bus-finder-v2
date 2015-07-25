import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import OverlayStore from './OverlayStore';
import RequestUtils from '../utils/RequestUtils';

var ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

function updateMapCenter( lat, lng ) {
    mapOptions.center = new google.maps.LatLng( lat, lng );
}

var mapOptions = {
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

    getMapOptions() {
        return mapOptions;
    },

    repositionMap( map ) {
        var center = mapOptions.center;
        map.setOptions( {
            center,
            zoom: 16
        } );
        RequestUtils.addNearestBusMarkers( map );
        OverlayStore.addPlaceMarker( map, center );
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
