import React from 'react';

class ModalHeader extends React.Component {

    componentDidMount() {
        console.log( 'panel mounted' );
    }

    componentWillUpdate() {
        console.log( 'about to update' );
    }

    componentDidUpdate() {
        console.log( 'did update' );
    }

    render() {
        return (
            <div className={ this.props.className }>
                <button
                    className={ this.props.btnClassName }
                    onClick={ this.props.closeModal }></button>
                <p>{ this.props.stopName }</p>
                <p>{ this.props.stopIndicator }</p>
                <p>{ this.props.towards }</p>
            </div>
        );
    }
}

export default ModalHeader
