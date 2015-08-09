import SearchActionCreators from '../actions/SearchActionCreators';

var markerArray = [];
const placeIcon = '../../assets/marker-place.svg';
const busStopIcon = '../../assets/marker-bus-stop.svg';

function deleteMarkers() {
    clearMarkers();
    markerArray = [];
}

function clearMarkers() {
    for ( let i = 0, l = markerArray.length; i < l; i++ ) {
        markerArray[i].setMap( null );
    }
}

const MarkerUtils = {
    addPlaceMarker( map, position ) {
        deleteMarkers();
        const placeMarker = new google.maps.Marker( {
            position,
            map,
            icon: placeIcon
        } );
        markerArray.push( placeMarker );
    },

    addBusMarkers( markers, map ) {
        markers.forEach( marker => {
            const busMarker = new google.maps.Marker( {
                map,
                position: new google.maps.LatLng( marker.lat, marker.lng ),
                icon: busStopIcon
            } );
            google.maps.event.addListener( busMarker, 'click', () => {
                SearchActionCreators.getStopInfo( marker );
            } );
            markerArray.push( busMarker );
        } );
    }
};

export default MarkerUtils;
