import React from 'react';
import ReactDOM from 'react-dom';
import Window from './Window.react';

class Modal extends React.Component {

    constructor() {
        super();
        this.closeModal = this.closeModal.bind( this );
    }

    closeModal() {
        var modal = ReactDOM.findDOMNode( this.refs.modal );
        modal.classList.toggle( 'modal-open' );
    }

    render() {
        return (
            <div className='modal' ref='modal'>
                <Window onClick={ this.closeModal } />
            </div>
        );
    }
}

export default Modal;
