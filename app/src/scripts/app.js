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
                <Map
                    className={ 'map' }
                    center={ { lat: 51.508800, lng: -0.127477 } }
                    zoom={ 12 }
                    scrollwheel={ false }
                    zoomControlOptions={ {
                        style: google.maps.ZoomControlStyle.LARGE,
                        position: google.maps.ControlPosition.RIGHT
                    } }
                    streetViewControl={ false }
                    panControl={ false }
                    mapTypeControl={ false } />
                <Modal />
            </div>
        );
    }
}

ReactDOM.render( <App />, mountNode );
