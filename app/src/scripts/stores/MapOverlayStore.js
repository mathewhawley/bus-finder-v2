import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

var ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

var markers = [];
var placeMarker = '../../assets/marker-place.svg';

function addPlaceMarker( lat, lng ) {
    console.log( 'hello' );
}

var MapOverlayStore = Object.assign( {}, Events.EventEmitter.prototype, {

    emitChange() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback );
    }
} );

AppDispatcher.register( ( payload ) => {

    var action = payload.action;

    switch( action.type ) {

        case ActionTypes.ADD_PLACE_MARKER:
            addPlaceMarker( action.lat, action.lng );
            MapOverlayStore.emitChange();
            break;

        default:
            // do nothing
    }
} );

export default MapOverlayStore;
