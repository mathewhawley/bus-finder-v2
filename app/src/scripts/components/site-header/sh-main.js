import React from 'react';

import Geolocation from './sh-geolocation';
import Logo from './sh-logo';
import Search from './sh-search';

class SiteHeader extends React.Component {
    render() {
        return (
            <div className='site-header'>
                <Logo />
                <Geolocation />
                <Search />
            </div>
        );
    }
}

export default SiteHeader;
