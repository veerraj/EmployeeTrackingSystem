import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

// ES5
import React, { Component } from 'react';
import Dashboard from './Dashboard'

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoicmFqdmVlcm1ld2FyYSIsImEiOiJjazRqZ3lnOXQwdnQ4M25td3Rtb21taTR6In0.e2-bSIPzJvsidBf3gWOnGw'
});

class NewTracker extends Component {
    // in render()
    render() {
        return (
            <div>
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: '100vh',
                        width: '100vw'
                    }}>
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        {/* <Feature coordinates={[-77.0323, 38.9131]} /> */}
                    </Layer>
                </Map>
                <Dashboard />
            </div>
        )
    }

}
export default NewTracker;