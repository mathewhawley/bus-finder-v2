import jsonp from 'jsonp';
import OverlayStore from '../stores/OverlayStore';

export default {

    getNearestStops( map ) {
        var bounds = this.getBounds( map ),
            url = `http:\/\/digitaslbi-id-test.herokuapp.com/bus-stops?northEast=${ bounds[0] },${ bounds[1] }&southWest=${ bounds[2] },${ bounds[3] }`;
        this.fetchMarkerData( url, map );
    },

    getBounds( map ) {
        return [
          map.getBounds().getNorthEast().lat(),
          map.getBounds().getNorthEast().lng(),
          map.getBounds().getSouthWest().lat(),
          map.getBounds().getSouthWest().lng(),
        ];
    },

    fetchMarkerData( url, map ) {

        jsonp( url, ( ( err, response ) => {

            if ( err ) {
                return console.warn( 'Unable to retrieve data' );
            } else {
                OverlayStore.addBusMarkers( response.markers, map );
            }

        } ) );
    }
}
