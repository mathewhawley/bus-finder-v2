import AppDispatcher from '../dispatcher/AppDispatcher';
import MapConstants from '../constants/MapConstants';

var ActionTypes = MapConstants.ActionTypes;

var mapActions = {

    repositionMap( lat, lng, zoom ) {
        AppDispatcher.handleViewAction( {
            type: ActionTypes.REPOSITION_MAP,
            lat,
            lng,
            zoom
        } );
        console.log( `From the Action Creator: ${ lat }, ${ lng }, ${ zoom }` );
    }
}

export default mapActions;
