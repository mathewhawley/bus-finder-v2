import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import RequestUtils from '../utils/RequestUtils';
import SearchActionCreators from '../actions/SearchActionCreators';

var ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

var markerArray = [],
    busStopData = {},
    placeIcon = '../../assets/marker-place.svg',
    busStopIcon = '../../assets/marker-bus-stop.svg';

function deleteMarkers() {
    clearMarkers();
    markerArray = [];
}

function clearMarkers() {
    for ( let i = 0, l = markerArray.length; i < l; i++ ) {
        markerArray[i].setMap( null );
    }
}

function initModal( marker ) {
    var modal = document.querySelector( '.modal' );
    modal.classList.toggle( 'modal-open' );
    RequestUtils.getStopInfo( marker.id );
}

var OverlayStore = Object.assign( {}, Events.EventEmitter.prototype, {

    emitChange() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback );
    },

    addPlaceMarker( map, position ) {
        deleteMarkers();
        var placeMarker = new google.maps.Marker( {
            position,
            map,
            icon: placeIcon
        } );
        markerArray.push( placeMarker );
    },

    addBusMarkers( markers, map ) {
        markers.forEach( marker => {
            var position = new google.maps.LatLng( marker.lat, marker.lng ),
                busMarker = new google.maps.Marker( {
                    position,
                    map,
                    icon: busStopIcon
                } );

            google.maps.event.addListener( busMarker, 'click', () => {
                SearchActionCreators.getStopInfo( marker );
            } );
            markerArray.push( busMarker );
        } );
    }
} );

AppDispatcher.register( payload => {

    var action = payload.action;

    switch( action.type ) {

        case ActionTypes.CLICK_MARKER:
            initModal( action.marker );
            OverlayStore.emitChange();
            break;

        default:
            // do nothing
    }
} );

export default OverlayStore;
