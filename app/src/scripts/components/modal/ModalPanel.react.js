import React from 'react';
import ModalHeader from './ModalHeader.react';
import ModalBody from './ModalBody.react';

class ModalPanel extends React.Component {

    renderHeader() {
        if ( !this.props.data.stop ) return null;
        return (
            <ModalHeader
                className={ 'modal__header' }
                stopName={ this.props.data.stop.name }
                stopIndicator={ this.props.data.stop.stopIndicator }
                towards={ this.props.data.stop.towards }
                closeModal={ this.props.closeModal }
                btnClassName={ 'modal__close-button' } />
        );
    }

    renderBody() {
        if ( !this.props.data.arrivals ) return null;
        return (
            <ModalBody
                className={ this.props.className + '__body' }
                arrivals={ this.props.data.arrivals } />
        );
    }

    render() {
        return (
            <div className={ this.props.className + '__panel' }>
                { this.renderHeader() }
                { this.renderBody() }
            </div>
        );
    }
}

export default ModalPanel;
