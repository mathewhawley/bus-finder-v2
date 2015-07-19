import React from 'react';
import MapActionCreators from '../../actions/MapActionCreators';

class GeolocationSearch extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind( this );
    }

    handleClick() {
        if ( 'geolocation' in navigator ) {
            navigator.geolocation.getCurrentPosition( this.success, this.fail, { timeout: 10000 } );
        } else {
            alert( 'Sorry, Geolocation seems to be unavailable. Please update your browser settings' );
        }
    }

    success( position ) {
        var { latitude, longitude } = position.coords,
            zoom = 16;
        MapActionCreators.repositionMap( latitude, longitude, zoom );
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
