import jsonp from 'jsonp';
import OverlayStore from '../stores/OverlayStore';

export default {

    getNearestStops( map ) {
        var bounds = this.getBounds( map ),
            url = `http:\/\/digitaslbi-id-test.herokuapp.com/bus-stops?northEast=${ bounds[0] },${ bounds[1] }&southWest=${ bounds[2] },${ bounds[3] }`;
        this.fetchNearestStopsData( url, map );
    },

    getBounds( map ) {
        return [
          map.getBounds().getNorthEast().lat(),
          map.getBounds().getNorthEast().lng(),
          map.getBounds().getSouthWest().lat(),
          map.getBounds().getSouthWest().lng()
        ];
    },

    fetchNearestStopsData( url, map ) {

        jsonp( url, ( ( err, response ) => {

            if ( err ) {
                return console.warn( 'Unable to retrieve data' );
            } else {
                OverlayStore.addBusMarkers( response.markers, map );
            }

        } ) );
    },

    getStopInfo( markerId ) {
        var url = `http:\/\/digitaslbi-id-test.herokuapp.com/bus-stops/${ markerId }`;
        this.fetchStopData( url );
    },

    fetchStopData( url ) {
        jsonp( url, ( ( err, response ) => {

            if ( err ) {
                return console.warn( 'Unable to retrieve data' );
            } else {
                console.log( response );
            }

        } ) );
    }
}
