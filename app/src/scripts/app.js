import React from 'react';
import ReactDOM from 'react-dom';

import SiteHeader from './components/site-header/SiteHeader.react';
import Map from './components/map/Map.react';

var mountNode = document.getElementById( 'bus-finder-app' );

class App extends React.Component {
    render() {
        return (
            <div id='wrapper'>
                <SiteHeader />
                <Map />
            </div>
        );
    }
}

ReactDOM.render( <App />, mountNode );
