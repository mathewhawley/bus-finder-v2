import SearchActionCreators from '../actions/SearchActionCreators';

const placeIcon = '../../assets/marker-place.svg';
const busStopIcon = '../../assets/marker-bus-stop.svg';
let markerArray = [];

function deleteMarkers() {
    for ( let marker of markerArray ) {
        marker.setMap( null );
    }
    markerArray = [];
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
