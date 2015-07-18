import React from 'react';

class Geolocation extends React.Component {

    constructor( props ) {
        super( props );
        this.handleClick = this.handleClick.bind( this );
        this.getLocation = this.getLocation.bind( this );
    }

    handleClick() {
        if ( 'geolocation' in navigator ) {
            this.getLocation();
        } else {
            alert( 'Sorry, Geolocation seems to be unavailable, please update your browser settings' );
        }
    }

    getLocation() {
        console.log( 'Working' );
    }

    render() {
        return (
            <div className='sh-geolocation-button' onClick={ this.handleClick }></div>
        );
    }
}

export default Geolocation;
