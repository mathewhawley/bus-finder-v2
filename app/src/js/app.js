import React from 'react';

class HelloWorld extends React.Component {
    render () {
        return <p>Hello, world!</p>;
    }
}

React.render( <HelloWorld />, document.body );
