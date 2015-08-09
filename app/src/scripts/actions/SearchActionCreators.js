import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const ActionTypes = AppConstants.ActionTypes;

const SearchActionCreators = {
    repositionMap( lat, lng ) {
        AppDispatcher.handleViewAction( {
            type: ActionTypes.REPOSITION_MAP,
            lat,
            lng
        } );
    },

    getStopInfo( marker ) {
        AppDispatcher.handleViewAction( {
            type: ActionTypes.CLICK_MARKER,
            marker
        } );
    }
};

export default SearchActionCreators;
