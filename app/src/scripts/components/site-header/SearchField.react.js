import React from 'react';
import SearchActionCreators from '../../actions/SearchActionCreators';

class SearchField extends React.Component {

    constructor() {
        super();
        this.clearInput = this.clearInput.bind( this );
    }

    componentDidMount() {
        var searchField = new google.maps.places.Autocomplete( this.refs.searchField );
        google.maps.event.addListener( searchField, 'place_changed', () => this.handleSubmit( searchField ) );
    }

    handleSubmit( searchField ) {
        var place = searchField.getPlace(),
            lat = place.geometry.location.lat(),
            lng = place.geometry.location.lng();

        SearchActionCreators.repositionMap( lat, lng );
    }

    clearInput() {
        this.refs.searchField.value = '';
    }

    render() {
        return (
            <input
                className={ this.props.className + '__search-field' }
                placeholder={ this.props.placeholder }
                type={ this.props.type }
                onClick={ this.clearInput }
                ref='searchField' />
        );
    }
}

export default SearchField;
