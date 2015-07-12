import React from 'react';
import FindButton from './navigation-find-button';

class Navigation extends React.Component {
    render () {
        return (
            <div className='navigation'>
                <img src='assets/logo-small.svg' alt='bus finder logo' />
                <FindButton className='navigation__button' />
            </div>
        );
    }
}

export default Navigation;
