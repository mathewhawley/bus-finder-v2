import React from 'react';

class ModalItem extends React.Component {

    render() {
        return (
            <div className={ this.props.className + '__item' } key={ this.props.key }>
                <p>{ this.props.routeId }</p>
                <p>{ this.props.estimatedWait }</p>
                <p>{ this.props.destination }</p>
            </div>
        );
    }
}

export default ModalItem;
