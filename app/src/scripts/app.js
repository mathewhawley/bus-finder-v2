import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from './components/site-header';

var mountNode = document.getElementById( 'app' );

class App extends React.Component {
    render () {
        return (
            <SiteHeader />
        );
    }
}

ReactDOM.render( <App />, mountNode );
