import AppDispatcher from '../dispatcher/AppDispatcher';
import MapConstants from '../constants/MapConstants';

var ActionTypes = MapConstants.ActionTypes;

var mapActions = {

    repositionMap( lat, lng ) {
        AppDispatcher.handleViewAction( {
            type: ActionTypes.REPOSITION_MAP,
            lat,
            lng
        } );
    }
}

export default mapActions;
