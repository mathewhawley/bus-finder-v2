import React from 'react';

class ModalHeader extends React.Component {
    render() {
        const stopIndicator = this.props.stopIndicator === null ? 'N/A' : this.props.stopIndicator;
        const towards = this.props.towards === null ? 'N/A' : this.props.towards;

        return (
            <div className={ this.props.className + '__header' }>
                <div className={ this.props.className + '__stop-indicator' }>
                    <p>{ stopIndicator }</p>
                </div>

                <div className={ this.props.className + '__stop-name' }>
                    <p>{ this.props.stopName }</p>
                    <p>Towards { towards }</p>
                </div>

                <button
                    className={ this.props.className + '__close-button' }
                    onClick={ this.props.closeModal }></button>
            </div>
        );
    }
}

export default ModalHeader;
