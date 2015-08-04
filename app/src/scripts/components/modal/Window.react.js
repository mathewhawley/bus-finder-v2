import React from 'react';
import CloseButton from './CloseButton.react';

class Window extends React.Component {
    render() {
        return (
            <div className='modal-body'>
                <CloseButton closeModal={ this.props.closeModal } />
            </div>
        );
    }
}

export default Window;
