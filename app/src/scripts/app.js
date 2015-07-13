import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from './components/site-header';
import Search from './components/search';

var mountNode = document.getElementById( 'app' );

class App extends React.Component {
    render () {
        return (
            <div>
                <SiteHeader />
                <Search />
            </div>
        );
    }
}

ReactDOM.render( <App />, mountNode );
