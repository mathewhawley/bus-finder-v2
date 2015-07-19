import React from 'react';

class GeolocationSearch extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind( this );
    }

    handleClick() {
        if ( 'geolocation' in navigator ) {
            navigator.geolocation.getCurrentPosition( this.success, this.fail, { timeout: 10000 } );
        } else {
            alert( 'Sorry, Geolocation seems to be unavailable, please update your browser settings' );
        }
    }

    success( position ) {
        var lat = position.coords.latitude,
            lng = position.coords.longitude,
            zoom = 16;

        console.log( lat, lng, zoom );
    }

    fail() {
        alert( 'Unable to find current location, please try again' );
    }

    render() {
        return (
            <div className='sh-geolocation-search-button' onClick={ this.handleClick }></div>
        );
    }
}

export default GeolocationSearch;
