import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

var ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

var markers = [];

var MapOverlayStore = Object.assign( {}, Events.EventEmitter.prototype, {

    getMarkers() {
        return markers;
    }

    emitChange() {
        this.emit( CHANGE_EVENT );
    }

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback );
    }
} );

export default MapOverlayStore;
