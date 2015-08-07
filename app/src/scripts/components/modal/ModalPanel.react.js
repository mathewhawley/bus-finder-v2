import React from 'react';
import ModalHeader from './ModalHeader.react';
import ModalBody from './ModalBody.react';

class ModalPanel extends React.Component {

    render() {
        return (
            <div className={ this.props.className + '__panel' }>

                <ModalHeader
                    className={ 'modal__header' }
                    stopName={ this.props.data.stop.name }
                    stopIndicator={ this.props.data.stop.stopIndicator }
                    towards={ this.props.data.stop.towards }
                    closeModal={ this.props.closeModal }
                    btnClassName={ 'modal__close-button' } />

                <ModalBody
                    className={ this.props.className + '__body' }
                    arrivals={ this.props.data.arrivals } />

            </div>
        );
    }
}

export default ModalPanel;
