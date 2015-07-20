import AppDispatcher from '../dispatcher/AppDispatcher';
import MapConstants from '../constants/MapConstants';

var ActionTypes = MapConstants.ActionTypes;

var mapActions = {

    getPosition( lat, lng, zoom ) {
        AppDispatcher.handleViewAction( {
            type: ActionTypes.GET_POSITION,
            lat,
            lng,
            zoom
        } );
        console.log( `From the Action Creator: ${ lat }, ${ lng }, ${ zoom }` );
    }
}

export default mapActions;
