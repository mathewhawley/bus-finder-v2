import React from 'react';

class CloseButton extends React.Component {

    render() {
        return (
            <div className="modal-close-button" onClick={ this.props.closeModal }></div>
        );
    }
}

export default CloseButton;
