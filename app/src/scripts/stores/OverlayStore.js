var markerArray = [],
    placeIcon = '../../assets/marker-place.svg',
    busStopIcon = '../../assets/marker-bus-stop.svg';

function deleteMarkers() {
    clearMarkers();
    markerArray = [];
}

function clearMarkers() {
    for ( let i = 0, l = markerArray.length; i < l; i++ ) {
        markerArray[i].setMap( null );
    }
}

function openModal() {
    console.log( 'Clicked' );
}

var OverlayStore = {

    addPlaceMarker( map, position ) {
        deleteMarkers();
        var placeMarker = new google.maps.Marker( {
            position,
            map,
            icon: placeIcon
        } );
        markerArray.push( placeMarker );
    },

    addBusMarkers( markers, map ) {
        markers.forEach( ( marker ) => {
            var position = new google.maps.LatLng( marker.lat, marker.lng ),
                busMarker = new google.maps.Marker( {
                    position,
                    map,
                    icon: busStopIcon
                } );
            google.maps.event.addListener( busMarker, 'click', openModal);
            markerArray.push( busMarker );
        } );
    }
};

export default OverlayStore;
