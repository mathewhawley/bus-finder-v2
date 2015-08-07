import React from 'react';
import classnames from 'classnames';
import ModalPanel from './ModalPanel.react';
import ModalStore from '../../stores/ModalStore';

class Modal extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            data: ModalStore.getStopData()
        };
        this.onChangeEvent = this.onChangeEvent.bind( this );
    }

    componentDidMount() {
        ModalStore.addChangeListener( this.onChangeEvent );
    }

    onChangeEvent() {
        this.setState( {
            isOpen: true,
            data: ModalStore.getStopData()
        } );
    }

    openModal() {
        if ( !this.state.isOpen ) return null;

        var className = classnames( this.props.className, this.props.className + '__backdrop' );

        return (
            <div className={ className }>
                <ModalPanel
                    className={ this.props.className }
                    closeModal={ this.closeModal.bind( this ) }
                    data={ this.state.data } />
            </div>
        );
    }

    closeModal() {
        this.setState( { isOpen: false } );
    }

    render() {
        return (
            <div>
                { this.openModal() }
            </div>
        );
    }
}

export default Modal;
