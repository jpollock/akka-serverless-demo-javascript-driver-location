import React, { Component, useMemo, useState, useEffect } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import { DriverListServiceClient } from './_proto/DriverListService_grpc_web_pb';
import { GetDriverListRequest, DriverList } from './_proto/DriverListService_pb';
import { DriverLocationServiceClient } from './_proto/DriverLocationService_grpc_web_pb';
import { GetDriverRequest, Driver } from './_proto/DriverLocationService_pb';


const echoService = new DriverListServiceClient(process.env.REACT_APP_SERVICE_HOST, null, null);
const request = new GetDriverListRequest();

const echoService2 = new DriverLocationServiceClient(process.env.REACT_APP_SERVICE_HOST, null, null);
const request2 = new GetDriverRequest();

const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: {latitude: 137.773972, longitude: -122.431297}
    };
   
  }


  fetchData() {
    request.setDriverlistid("test");
    request2.setDriverid("neal@berman.ps");
    const call = echoService.getDriverList(request, {},  function(err, response) {
      let lb_data = {};
      if (response != null && !response.undefined) {
        lb_data = response.toObject();
        console.log(lb_data);
        let lb = []
        /*
        for (let index = 0; index < lb_data.playersList.length; index++) {        
          const element = lb_data.playersList[index];
          //console.log(element);
          let lb_pos = {score: element.score, show: {id: element.playerid, name: element.playername, age: element.age}}
          lb.push(lb_pos);
        
        }
        
        setData(lb);  
        setCount(lb_data.totalplayers.count);*/
      }
      
    });
    var that = this;
    
    //this.state.location.latitude = 137.773972;
    //this.state.location.longitude = -122.431297;
    
    
    const call2 = echoService2.getDriver(request2, {},  function(err, response) {
      let lb_data = {};
      if (response != null && !response.undefined) {
        lb_data = response.toObject();
        console.log(lb_data.location);
        //that.state.location = lb_data.location;
        that.setState({location: lb_data.location});
      }
      
    });
   
   
  };
  componentDidMount() {
    this.fetchData();
    this.timer = setInterval(() => this.fetchData(), 2000);
  }
  
  render() {
    return (
      <Map
        google={this.props.google}
        center={{lat: this.state.location.latitude, lng: this.state.location.longitude}}
        zoom={15}
        style={mapStyles}
      >
        <Marker
          title='My location'
          position={{lat: this.state.location.latitude, lng: this.state.location.longitude}}
        >
        </Marker>
        </Map>      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(MapContainer);