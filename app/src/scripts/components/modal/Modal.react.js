import React from 'react';
import ReactDOM from 'react-dom';
import ModalPanel from './ModalPanel.react';
import ModalStore from '../../stores/ModalStore';

class Modal extends React.Component {

    constructor() {
        super();
        this.state = ModalStore.getStopData();
        this.onChangeEvent = this.onChangeEvent.bind( this );
    }

    componentDidMount() {
        ModalStore.addChangeListener( this.onChangeEvent );
    }

    onChangeEvent() {
        this.setState( ModalStore.getStopData() );
    }

    closeModal() {
        var modal = ReactDOM.findDOMNode( this.refs.modal );
        modal.classList.toggle( 'modal--open' );
    }

    render() {
        return (
            <div className='modal modal__backdrop' ref='modal'>
                <ModalPanel
                    closeModal={ this.closeModal.bind( this ) }
                    data={ this.state } />
            </div>
        );
    }
}

export default Modal;
