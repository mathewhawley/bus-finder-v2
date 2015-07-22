import Flux from 'flux';

class AppDispatcher extends Flux.Dispatcher {

    handleViewAction( action ) {
        this.dispatch( {
            source: 'VIEW_ACTION',
            action
        } );
    }
}

export default new AppDispatcher();
