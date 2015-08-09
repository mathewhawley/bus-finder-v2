import React from 'react';
import ModalItem from './ModalItem.react';

class ModalBody extends React.Component {
    render() {
        const arrivals = this.props.arrivals.map( ( arrival, i ) => {
            return (
                <ModalItem
                    key={ i }
                    className={ this.props.className }
                    routeId={ arrival.routeId }
                    estimatedWait={ arrival.estimatedWait }
                    destination={ arrival.destination } />
            );
        } );

        return (
            <div className={ this.props.className + '__body' }>
                { arrivals }
            </div>
        );
    }
}

export default ModalBody;
