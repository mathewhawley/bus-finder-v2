import React from 'react';
import GeolocationSearch from './GeolocationSearch.react';
import PlacesSearch from './PlacesSearch.react';
import MapActionCreators from '../../actions/MapActionCreators';

class SiteHeader extends React.Component {

    reloadPage() {
        window.location.reload();
    }

    render() {
        return (
            <div className='site-header'>
                <img
                    className='sh-logo'
                    src='assets/logo-small.svg'
                    alt='bus finder logo'
                    onClick={ this.reloadPage } />
                <GeolocationSearch
                    MapActionCreators={ MapActionCreators } />
                <PlacesSearch />
            </div>
        );
    }
}

export default SiteHeader;
