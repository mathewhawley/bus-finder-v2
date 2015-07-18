import React from 'react';

class Search extends React.Component {

    componentDidMount() {
        new google.maps.places.Autocomplete( this.refs.searchField );
    }

    render() {
        return (
            <input
                className='sh-search-field'
                input='text'
                placeholder='Search for stops near...'
                ref='searchField' />
        );
    }
}

export default Search;
