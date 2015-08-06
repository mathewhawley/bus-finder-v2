import React from 'react';
import SearchButton from './SearchButton.react';
import SearchField from './SearchField.react';

class SiteHeader extends React.Component {

    render() {
        return (
            <div className={ this.props.className }>
                <img
                    className={ this.props.className + '__logo' }
                    src={ this.props.logo }
                    alt='bus finder logo'
                    onClick={ this.props.reloadApp } />

                <SearchButton
                    className={ this.props.className } />

                <SearchField
                    className={ this.props.className }
                    placeholder={ 'Search for stops near\u2026' }
                    inputType={ 'text' } />
            </div>
        );
    }
}

export default SiteHeader;
