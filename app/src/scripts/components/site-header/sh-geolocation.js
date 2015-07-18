import React from 'react';

class Geolocation extends React.Component {

    handleClick() {
        console.log( 'Working' );
    }

    render() {
        return (
            <div className='sh-geolocation-button' onClick={ this.handleClick }></div>
        );
    }
}

export default Geolocation;
