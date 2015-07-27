import React from 'react';
import CloseButton from './CloseButton.react';

class Window extends React.Component {
    render() {
        return (
            <div className="window">
                <CloseButton />
            </div>
        );
    }
}

export default Window;
