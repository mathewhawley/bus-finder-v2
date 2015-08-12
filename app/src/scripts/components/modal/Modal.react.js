import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
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
        this.closeModal = this.closeModal.bind( this );
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

    renderBackdrop() {
        if ( !this.state.isOpen ) return null;
        return <div onClick={ this.closeModal } className={ this.props.className + '__backdrop' }></div>;
    }

    renderPanel() {
        if ( !this.state.isOpen ) return null;
        return (
            <ModalPanel
                className={ this.props.className }
                closeModal={ this.closeModal.bind( this ) }
                data={ this.state.data } />
        );
    }

    closeModal() {
        this.setState( { isOpen: false } );
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup transitionName='modal__backdrop'>
                    { this.renderBackdrop() }
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup transitionName='modal__panel'>
                    { this.renderPanel() }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default Modal;
