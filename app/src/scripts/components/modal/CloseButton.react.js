import React from 'react';

class CloseButton extends React.Component {

    render() {
        return (
            <div className="modal-close-button" onClick={ this.props.onClick }></div>
        );
    }
}

export default CloseButton;
