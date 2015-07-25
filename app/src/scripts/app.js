import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from './components/site-header/SiteHeader.react';
import Map from './components/map/Map.react';
import Modal from './components/modal/Modal.react';

var mountNode = document.getElementById( 'bus-finder-app' );

class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <SiteHeader />
                <Map />
                <Modal />
            </div>
        );
    }
}

ReactDOM.render( <App />, mountNode );
