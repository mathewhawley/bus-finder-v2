import React from 'react';
import ReactDOM from 'react-dom';
import ModalWindow from './ModalWindow.react';

class Modal extends React.Component {

    closeModal() {
        var modal = ReactDOM.findDOMNode( this.refs.modal );
        modal.classList.toggle( 'modal-open' );
    }

    render() {
        return (
            <div className='modal modal-backdrop' ref='modal'>
                <ModalWindow closeModal={ this.closeModal.bind( this ) } />
            </div>
        );
    }
}

export default Modal;
