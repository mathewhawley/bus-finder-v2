var markers = [],
    placeIcon = '../../assets/marker-place.svg',
    busStopIcon = '../../assets/marker-bus-stop';

function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function clearMarkers() {
    for ( let i = 0, l = markers.length; i < l; i++ ) {
        markers[ i ].setMap( null );
    }
}

var OverlayStore = {

    addPlaceMarker( map, position ) {

        deleteMarkers();

        var marker = new google.maps.Marker( {
            position,
            map,
            icon: placeIcon
        } );

        markers.push( marker );
    }
};

export default OverlayStore;
