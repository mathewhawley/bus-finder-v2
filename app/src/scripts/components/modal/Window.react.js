import React from 'react';
import CloseButton from './CloseButton.react';

class Window extends React.Component {
    render() {
        return (
            <div className='modal-body'>
                <CloseButton onClick={ this.props.onClick } />
            </div>
        );
    }
}

export default Window;
