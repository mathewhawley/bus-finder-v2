import Events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import RequestUtils from '../utils/RequestUtils';

var ActionTypes = AppConstants.ActionTypes;
const CHANGE_EVENT = 'change';

var data = {};

var ModalStore = Object.assign( {}, Events.EventEmitter.prototype, {

    emitChange() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback );
    },

    updateData( arrivals, stop ) {
        data = { arrivals, stop };
    },

    getStopData() {
        return data;
    }
} );

AppDispatcher.register( payload => {

    var action = payload.action;

    switch( action.type ) {

        case ActionTypes.CLICK_MARKER:
            RequestUtils.getStopInfo( action.marker, () => {
                ModalStore.emitChange();
            } );
            break;

        default:
            // do nothing
    }
} );

export default ModalStore;
