import React from 'react';
import ReactDOM from 'react-dom';
import ModalWindow from './ModalWindow.react';
import ModalStore from '../../stores/ModalStore';

class Modal extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.onChangeEvent = this.onChangeEvent.bind( this );
    }

    componentDidMount() {
        ModalStore.addChangeListener( this.onChangeEvent );
    }

    onChangeEvent() {
        this.setState( ModalStore.getStopData() );
        console.log( this.state );
    }

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
