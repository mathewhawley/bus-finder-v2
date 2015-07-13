import React from 'react';
import FindNearMe from './find-near-me';

class Navigation extends React.Component {
    render () {
        return (
            <div className='site-header'>
                <img src='assets/logo-small.svg' alt='bus finder logo' />
                <FindNearMe />
            </div>
        );
    }
}

export default Navigation;
