import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

var data = {};

function updateMapCenter( lat, lng ) {
    data.center = new google.maps.LatLng( lat, lng );
}

const MapStore = Object.assign( {}, Events.EventEmitter.prototype, {
    emitChange() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback );
    },

    getMapData() {
        return data;
    }
} );

AppDispatcher.register( payload => {
    const action = payload.action;
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
