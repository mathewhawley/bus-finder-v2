import React from 'react';
import SearchActionCreators from '../../actions/SearchActionCreators';

class PlacesSearch extends React.Component {

    constructor() {
        super();
        this.searchField;
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    componentDidMount() {
        this.searchField = new google.maps.places.Autocomplete( this.refs.searchField );
        google.maps.event.addListener( this.searchField, 'place_changed', this.handleSubmit );
    }

    handleSubmit() {
        var place = this.searchField.getPlace(),
            lat = place.geometry.location.lat(),
            lng = place.geometry.location.lng();

        SearchActionCreators.repositionMap( lat, lng );
    }

    render() {
        return (
            <input
                className='site-header__search-field'
                input='text'
                placeholder='Search for stops near...'
                ref='searchField' />
        );
    }
}

export default PlacesSearch;
