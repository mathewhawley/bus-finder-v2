import jsonp from 'jsonp';
import OverlayStore from '../stores/OverlayStore';
import ModalStore from '../stores/ModalStore';

function getBounds( map ) {
    return [
        map.getBounds().getNorthEast().lat(),
        map.getBounds().getNorthEast().lng(),
        map.getBounds().getSouthWest().lat(),
        map.getBounds().getSouthWest().lng()
    ];
}

function fetchNearestStopsData( url, map ) {

    jsonp( url, ( ( err, response ) => {

        if ( err ) {
            return console.warn( 'Unable to retrieve data' );
        } else {
            OverlayStore.addBusMarkers( response.markers, map );
        }

    } ) );
}

function fetchStopData( url, marker, callback ) {
    jsonp( url, ( ( err, response ) => {

        if ( err ) {
            return console.warn( 'Unable to retrieve data' );
        } else {
            ModalStore.updateData( response.arrivals, marker );
        }

        callback();

    } ) );
}

var RequestUtils = {

    getNearestStops( map ) {
        var bounds = getBounds( map ),
            url = `http:\/\/digitaslbi-id-test.herokuapp.com/bus-stops?northEast=${ bounds[0] },${ bounds[1] }&southWest=${ bounds[2] },${ bounds[3] }`;
        fetchNearestStopsData( url, map );
    },

    getStopInfo( marker, callback ) {
        var url = `http:\/\/digitaslbi-id-test.herokuapp.com/bus-stops/${ marker.id }`;
        fetchStopData( url, marker, callback );
    }
};

export default RequestUtils;
