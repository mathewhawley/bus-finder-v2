import React from 'react';
import ReactDOM from 'react-dom';
import Window from './Window.react';

class Modal extends React.Component {

    handleClick() {
        var modal = ReactDOM.findDOMNode( this.refs.modal );
        modal.classList.toggle( 'modal-open' );
    }

    render() {
        return (
            <div className='modal' ref='modal'>
                <Window closeModal={ this.handleClick.bind( this ) } />
            </div>
        );
    }
}

export default Modal;
