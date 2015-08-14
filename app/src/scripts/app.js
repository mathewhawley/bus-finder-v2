import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from './components/site-header/SiteHeader.react';
import Map from './components/map/Map.react';
import Modal from './components/modal/Modal.react';

const mountNode = document.getElementById( 'bus-finder-app' );

class App extends React.Component {
    reloadApp() {
        window.location.reload();
    }

    render() {
        return (
            <div className='wrapper'>
                <SiteHeader
                    className={ 'site-header' }
                    reloadApp={ this.reloadApp.bind( this ) } />

                <Map
                    className={ 'map' }
                    options={ {
                        center: new google.maps.LatLng( 51.508800, -0.127477 ),
                        zoom: 13,
                        minZoom: 13,
                        scrollwheel: false,
                        zoomControlOptions: {
                            style: google.maps.ZoomControlStyle.LARGE,
                            position: google.maps.ControlPosition.RIGHT
                        },
                        streetViewControl: false,
                        panControl: false,
                        mapTypeControl: false
                    } } />

                <Modal
                    className={ 'modal' } />
            </div>
        );
    }
}

ReactDOM.render( <App />, mountNode );
