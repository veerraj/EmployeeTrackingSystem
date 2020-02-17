import React, { Component } from 'react';
import './home.css';
import Dashboard from './Dashboard'
import "mapbox-gl/dist/mapbox-gl.css"
import firebase from 'firebase';
//import WebMercatorViewport from 'viewport-mercator-project';
import Geocoder from 'react-map-gl-geocoder'


import MapGL, { Marker, Popup } from "react-map-gl";



const token = 'pk.eyJ1IjoicmFqdmVlcm1ld2FyYSIsImEiOiJjazRqZ3lnOXQwdnQ4M25td3Rtb21taTR6In0.e2-bSIPzJvsidBf3gWOnGw';
//const employees = []

class TrackanEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {

      viewport: {
        width: 1000,
        height: 900,
        latitude: 24.5854,
        longitude: 73.7125,
        zoom: 5,
        center: [-96, 37.8],

      },
      searchResultLayer: null,
      Employees: [],
      show: false

    };
  }



  componentDidMount = () => {
    // const {longitude, latitude, zoom} = new WebMercatorViewport(this.state.viewport)
    //         .fitBounds([[-122.4, 37.7], [-122.5, 37.8]], {
    //           padding: 20,
    //           offset: [0, -100]
    //         });
    //     const viewport = {
    //         ...this.state.viewport,
    //         longitude,
    //         latitude,
    //         zoom,
    //         transitionDuration: 5000,
    //         transitionInterpolator: new FlyToInterpolator(),
    //         transitionEasing: d3.easeCubic
    //     }
    //     this.setState({viewport});

    const db = firebase.firestore();
    let employees = [];
    db.collection('EmployeeData')
      .get()
      .then(snapshot => {

        snapshot.forEach(doc => {
          const data = doc.data()
          console.log('********', data)
          //console.log(data)
          // this.state.Employees.push(data);
          employees.push(data);
        })
        //console.log(employees);
        // console.log(employees)

      })
    console.log('ddddddddddddddddd', employees)
    this.setState({ Employees: employees })
    //console.log(this.state.Employees)

  }


  mapRef = React.createRef()
  handleViewportChange = viewport => {
    console.log('event', viewport)
    console.log('this.state.viewPort', this.state.viewport);
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  // handleGeocoderViewportChange = (viewport) => {
  //   const geocoderDefaultOverrides = { transitionDuration: 1000 }

  //   return this.handleViewportChange({
  //     ...viewport,
  //     ...geocoderDefaultOverrides
  //   })
  // }

  _renderPopup() {
    const { popupInfo } = this.state;
    return popupInfo ? (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.lang}
        latitude={popupInfo.lat}
        closeOnClick={false}
        onClose={() => this.setState({ popupInfo: null })}
      >
        <div style={{ padding: '12px 8px 12px 8px' }}>{popupInfo.firstName +' '+popupInfo.lastName}</div>
      </Popup>
    ) : '';
  }

  render() {
    // const { viewport, searchResultLayer} = this.state
    console.log(this.state.Employees)
    return (
      <div>
        <div className="map-cls">
          <MapGL
            ref={this.mapRef}
            {...this.state.viewport}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            width="100%"
            height="90%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={token}
          >
            {/* <Geocoder
              mapRef={this.mapRef}
              onViewportChange={this.handleGeocoderViewportChange}
              mapboxApiAccessToken={token}
            ></Geocoder> */}

            {
              /* <div>
                <Marker latitude={24.5854} longitude={73.7125} offsetLeft={-20} offsetTop={-10}>
                  <div class="mapMarkerStyle"></div>
                </Marker>
                <Marker latitude={26.9124} longitude={75.7873} offsetLeft={-20} offsetTop={-10}>
                  <div class="mapMarkerStyle"></div>
                </Marker>
              </div> */
              <div>
                {this._renderPopup()}
                <div>
                  {this.state.Employees.length &&
                    this.state.Employees.filter(item => item.lang !== '' && item.lat !== '').map((emp, index) => (
                      <div onClick={() => { this.setState({ popupInfo: emp }) }}>
                        <>
                          <Marker key={index} latitude={emp.lat} longitude={emp.lang} offsetLeft={-20} offsetTop={-10}>
                            <div className="mapMarkerStyle"></div>
                          </Marker>
                        </>
                      </div>
                    ))}
                </div>
              </div>
            }
          </MapGL>
        </div>
        <Dashboard />
      </div>
    )
  }
}

export default TrackanEmployee;