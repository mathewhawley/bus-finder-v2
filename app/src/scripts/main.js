import React from 'react';
import ReactDOM from 'react-dom';

import ListItem from './components/list-item';

var mountNode = document.getElementById( 'app' );

class App extends React.Component {
    render () {
        return (
            <ul>
                <ListItem />
            </ul>
        );
    }
}

ReactDOM.render( <App />, mountNode );
