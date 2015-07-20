import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import MapConstants from '../constants/MapConstants';

var ActionTypes = MapConstants.ActionTypes;
const CHANGE_EVENT = 'change';

var mapPosition = {};

function getPosition( lat, lng, zoom ) {
    return mapPosition = {
        position: {
            lat,
            lng
        },
        zoom
    };
}

class MapStore extends Events.EventEmitter {

    getPosition() {
        return mapPosition;
    }

    emitChange() {
        this.emit( CHANGE_EVENT );
    }

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback );
    }

    removeChangeListener( callback ) {
        this.removeListener( CHANGE_EVENT, callback );
    }
}

var _MapStore = new MapStore();

AppDispatcher.register( ( payload ) => {

    var action = payload.action;
    console.log( payload );

    switch( action.type ) {

        case ActionTypes.GET_POSITION:
            getPosition(
                action.lat,
                action.lng,
                action.zoom
            );
            console.log( 'map store' );
            _MapStore.emitChange();
            break;

        default:
            // do nothing
    }
} );

export default _MapStore;
