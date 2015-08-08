import React from 'react';

function sortWaitData( data ) {
    if ( data === 'due' ) {
        return <p>{ data.charAt( 0 ).toUpperCase() + data.slice( 1 ) }</p>;
    } else {
        let dataArray = data.split( ' ' );
        return  <p>{ dataArray[0] }{ dataArray[1] }</p>;
    }
}

class ModalItem extends React.Component {

    render() {

        var waitData = this.props.estimatedWait,
            estimatedWait = sortWaitData( waitData );

        return (
            <div className={ this.props.className + '__item' }>
                <div className={ this.props.className + '__item-route' }>
                    <p>{ this.props.routeId }</p>
                    <p>{ this.props.destination }</p>
                </div>
                <div className={ this.props.className + '__item-wait'}>
                    { estimatedWait }
                </div>
            </div>
        );
    }
}

export default ModalItem;
