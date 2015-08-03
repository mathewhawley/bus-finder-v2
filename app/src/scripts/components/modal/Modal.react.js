import React from 'react';
import Window from './Window.react';

class Modal extends React.Component {
    render() {
        return (
            <div className='modal-backdrop'>
                <Window />
            </div>
        );
    }
}

export default Modal;
