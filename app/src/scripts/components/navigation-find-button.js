import React from 'react';

class FindButton extends React.Component {
    render () {
        return (
            <a href='#' className={ this.props.className }></a>
        );
    }
}

export default FindButton;
