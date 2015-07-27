import React from 'react';
import ModalStore from '../../stores/ModalStore';
import Window from './Window.react';

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

    render() {
        return (
            <div className='modal'>
                <Window />
            </div>
        );
    }
}

export default Modal;
