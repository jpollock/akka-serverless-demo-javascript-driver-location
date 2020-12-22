/*
 * Copyright 2019 Lightbend Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const EventSourced = require("cloudstate").EventSourced;

const entity = new EventSourced(
  ["../protos/DriverLocationService.proto", "domain.proto"],
  "driverlocation.DriverLocationService",
  {
    persistenceId: "driverlocation",
    snapshotEvery: 5, // Usually you wouldn't snapshot this frequently, but this helps to demonstrate snapshotting
    includeDirs: ["./"],
    serializeFallbackToJson: true // Enables JSON support for persistence
  }
);

/*
 * Set a callback to create the initial state. This is what is created if there is no
 * snapshot to load.
 *
 * We can ignore the userId parameter if we want, it's the id of the entity, which is
 * automatically associated with all events and state for this entity.
 */
entity.setInitial(driverId => ({location: {}}));

/*
 * Set a callback to create the behavior given the current state. Since there is no state
 * machine like behavior transitions for our shopping driver, we just return one behavior, but
 * this could inspect the driver, and return a different set of handlers depending on the
 * current state of the driver - for example, if the driver supported being checked out, then
 * if the driver was checked out, it might return AddPlayer and RemovePlayer command handlers that
 * always fail because the driver is checked out.
 *
 * This callback will be invoked after each time that an event is handled to get the current
 * behavior for the current state.
 */
entity.setBehavior(driver => {
  return {
    // Command handlers. The name of the command corresponds to the name of the rpc call in
    // the gRPC service that this entity offers.
    commandHandlers: {
      SetDriverLocation: setDriverLocation,
      SetDriverOnRide: setDriverOnRide,
      GetDriver: getDriver, 
      GetDriverDistance: getDriverDistance
    },
    // Event handlers. The name of the event corresponds to the value of the
    // type field in the event JSON.
    eventHandlers: {
      DriverLocationSet: driverLocationSet,
      DriverOnRideSet: driverOnRideSet
    }
  };
});

/**
 * Handler for add player commands.
 */
function setDriverLocation(setDriverLocation, driver, ctx) {
  console.log("setDriverLocation::command", setDriverLocation);
  // Validation:
  // Make sure that it is not possible to add negative quantities
  // Create the event.    
  const driverLocationSet = {
    type: "DriverLocationSet",
    name: setDriverLocation.name,
    car: setDriverLocation.car,
    speed: setDriverLocation.speed,
    heading: setDriverLocation.heading,
    location: {
      latitude: setDriverLocation.location.latitude,
      longitude: setDriverLocation.location.longitude
    }
  };  

    // Emit the event.
    console.log("setDriverLocation::emit event", driverLocationSet);
    ctx.emit(driverLocationSet);
    return {};
}

/**
 * Handler for add player commands.
 */
function setDriverOnRide(setDriverOnRide, driver, ctx) {
  console.log("setDriverOnRide::command", setDriverOnRide);
  // Validation:
  // Make sure that it is not possible to add negative quantities
  // Create the event.    
  const driverOnRideSet = {
    type: "DriverOnRideSet",
    onRide: setDriverOnRide.onRide
  };  

    // Emit the event.
    console.log("setDriverOnRide::emit event", driverOnRideSet);
    ctx.emit(driverOnRideSet);
    return {};
}


/**
 * Handler for get driver commands.
 */
function getDriver(request, driver) {
  console.log("getDriver", driver);
  // Simply return the shopping driver as is.
  return driver;
}

/**
 * Handler for get driver commands.
 */
function getDriverDistance(request, driver) {
  console.log("getDriverDistance", driver);
  console.log(request);  
  let miles_between = getDistanceFromLatLng(driver.location.latitude, driver.location.longitude, request.location.latitude, request.location.longitude, true);

  // Simply return the shopping driver as is.
  return {miles: miles_between};
}
/**
 * Handler for player added events.
 */
function driverLocationSet(added, driver) {
  console.log("driverLocationSet", added);
  driver.name = added.name;
  driver.car = added.car;
  driver.speed = added.speed;
  driver.heading = added.heading;
  driver.location.latitude = added.location.latitude;
  driver.location.longitude = added.location.longitude;


  // And return the new state.
  console.log("return state");
  return driver;
}

/**
 * Handler for player added events.
 */
function driverOnRideSet(added, driver) {
  console.log("driverOnRideSet");
  driver.onRide = added.onRide;
  // And return the new state.
  console.log("return state");
  return driver;
}


/* Distance between two lat/lng coordinates in km using the Haversine formula */
function getDistanceFromLatLng(lat1, lng1, lat2, lng2, miles) { // miles optional
  console.log(lat1);
  console.log(lng1);
  console.log(lat2);
  console.log(lng2);
  if (typeof miles === "undefined"){miles=false;}
  function deg2rad(deg){return deg * (Math.PI/180);}
  function square(x){return Math.pow(x, 2);}
  var r=6371; // radius of the earth in km
  lat1=deg2rad(lat1);
  lat2=deg2rad(lat2);
  var lat_dif=lat2-lat1;
  var lng_dif=deg2rad(lng2-lng1);
  var a=square(Math.sin(lat_dif/2))+Math.cos(lat1)*Math.cos(lat2)*square(Math.sin(lng_dif/2));
  var d=2*r*Math.asin(Math.sqrt(a));
  if (miles){return d * 0.621371;} //return miles
  else{return d;} //return km
}
/* Copyright 2016, Chris Youderian, SimpleMaps, http://simplemaps.com/resources/location-distance
 Released under MIT license - https://opensource.org/licenses/MIT */ 

// Export the entity
module.exports = entity;
