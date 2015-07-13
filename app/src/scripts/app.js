import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from './components/site-header';
import Search from './components/search';
import Map from './components/map';

var mountNode = document.getElementById( 'app' );

class App extends React.Component {
    render () {
        return (
            <div className='site-wrapper'>
                <SiteHeader />
                <Search />
                <Map />
            </div>
        );
    }
}

ReactDOM.render( <App />, mountNode );
