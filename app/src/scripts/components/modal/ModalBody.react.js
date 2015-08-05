import React from 'react';

class ModalBody extends React.Component {
    render() {
        return(
            <div className={ this.props.className }>
                <p>Modal Body</p>
            </div>
        );
    }
}

export default ModalBody;
