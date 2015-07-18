import React from 'react';
import ReactDOM from 'react-dom';

import SiteHeader from './components/site-header/sh-main';
import Map from './components/map/m-main';

var mountNode = document.getElementById( 'app' );

class App extends React.Component {
    render() {
        return (
            <div className='site-wrapper'>
                <SiteHeader />
                <Map />
            </div>
        );
    }
}

ReactDOM.render( <App />, mountNode );
