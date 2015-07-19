import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import MapConstants from '../constants/MapConstants';

var ActionTypes = MapConstants.ActionTypes;
const CHANGE_EVENT = 'change';

var mapPosition = {
    position: {
        lat: 51.508800,
        lng: -0.127477
    },
    zoom: 12
};

class MapStore extends Events.EventEmitter {

    getMapPosition() {
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

export default new MapStore();
