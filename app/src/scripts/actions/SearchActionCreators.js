import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

var ActionTypes = AppConstants.ActionTypes;

export default {

    repositionMap( lat, lng ) {
        AppDispatcher.handleViewAction( {
            type: ActionTypes.REPOSITION_MAP,
            lat,
            lng
        } );
    },

    addPlaceMarker( lat, lng ) {
        AppDispatcher.handleViewAction( {
            type: ActionTypes.ADD_PLACE_MARKER,
            lat,
            lng
        } );
    }
};
