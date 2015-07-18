import React from 'react';

class Logo extends React.Component {

    handleClick() {
        window.location.reload();
    }

    render() {
        return (
            <img
                className='sh-logo'
                src='assets/logo-small.svg'
                alt='bus finder logo'
                onClick={ this.handleClick } />
        );
    }
}

export default Logo;
