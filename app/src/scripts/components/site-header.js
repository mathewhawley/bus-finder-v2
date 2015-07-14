import React from 'react';
import Geolocate from './geolocate';

class SiteHeader extends React.Component {
    render() {
        return (
            <div className='site-header'>
                <img src='assets/logo-small.svg' alt='bus finder logo' />
                <Geolocate />
            </div>
        );
    }
}

export default SiteHeader;
