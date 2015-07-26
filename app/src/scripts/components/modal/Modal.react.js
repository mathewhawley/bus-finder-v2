import React from 'react';
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
        ModalStore.getStopData();
    }

    render() {
        return (
            <div className='modal'>
                <div className='window'>
                </div>
            </div>
        );
    }
}

export default Modal;
