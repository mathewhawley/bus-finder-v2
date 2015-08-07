import React from 'react';

class ModalHeader extends React.Component {

    render() {
        return (
            <div className={ this.props.className + '__header' }>
                <button
                    className={ this.props.className + '__close-button' }
                    onClick={ this.props.closeModal }></button>
                <div className={ this.props.className + '__stop-indicator' }>
                    <p>{ this.props.stopIndicator }</p>
                </div>
                <div className={ this.props.className + '__stop-name' }>
                    <p>{ this.props.stopName }</p>
                    <p>Towards { this.props.towards }</p>
                </div>
            </div>
        );
    }
}

export default ModalHeader
