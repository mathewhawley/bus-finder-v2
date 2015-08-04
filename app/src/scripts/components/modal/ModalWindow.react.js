import React from 'react';

class ModalWindow extends React.Component {
    render() {
        return (
            <div className='modal-body'>
                <button
                    onClick={ this.props.closeModal }
                    className='modal-close-button'></button>
            </div>
        );
    }
}

export default ModalWindow;
