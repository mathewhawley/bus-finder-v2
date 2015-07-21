import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import MapConstants from '../constants/MapConstants';

var ActionTypes = MapConstants.ActionTypes;
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

function repositionMap( lat, lng ) {
    mapData.center = new google.maps.LatLng( lat, lng );
}

class MapStore extends Events.EventEmitter {

    getMapData() {
        return mapData;
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

    switch( action.type ) {

        case ActionTypes.REPOSITION_MAP:
            repositionMap(
                action.lat,
                action.lng
            );
            _MapStore.emitChange();
            break;

        default:
            // do nothing
    }
} );

export default _MapStore;
