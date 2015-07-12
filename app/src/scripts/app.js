import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation';

var mountNode = document.getElementById( 'app' );

class App extends React.Component {
    render () {
        return (
            <Navigation />
        );
    }
}

ReactDOM.render( <App />, mountNode );
