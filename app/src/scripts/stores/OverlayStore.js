var markers = [],
    placeIcon = '../../assets/marker-place.svg',
    busStopIcon = '../../assets/marker-bus-stop';

var OverlayStore = {

    addPlaceMarker( map, position ) {
        var marker = new google.maps.Marker( {
            position,
            map,
            icon: placeIcon
        } );
        markers.push( marker );
    }
};

export default OverlayStore;
