import React from 'react';

class Search extends React.Component {

    componentDidMount() {
        this.init();
    }

    init() {
        let searchField = document.querySelector( '.search-field' );
        let autocomplete = new google.maps.places.Autocomplete( searchField );
    }

    render() {
        return (
            <div className='search'>
                <input input='text' placeholder='Search for stops near...' className='search-field' />
            </div>
        );
    }
}

export default Search;
