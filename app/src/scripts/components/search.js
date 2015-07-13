import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className='search__wrapper'>
                <input input='text' placeholder='Search for stops near...' />
            </div>
        );
    }
}

export default Search;
