import Flux from 'flux';

class AppDispatcher extends Flux.Dispatcher {

    handleViewAction( action ) {
        this.dispatch( {
            source: 'VIEW_ACTION',
            action: action
        } );
        console.log( 'dispatcher' );
    }
}

export default new AppDispatcher();
