import React from 'react';

class ModalHeader extends React.Component {
    render() {
        return (
            <div className={ this.props.className }>
                <button
                    className={ this.props.btnClassName }
                    onClick={ this.props.closeModal }></button>
                <p>{ this.props.stopName }</p>
                <p>{ this.props.stopIndicator }</p>
                <p>{ this.props.towards }</p>
            </div>
        );
    }
}

export default ModalHeader
