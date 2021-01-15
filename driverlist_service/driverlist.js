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
  ["./DriverListService.proto", "domain.proto"],
  "driverlist.DriverListService",
  {
    persistenceId: "driverlist",
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
entity.setInitial(driverlistId => ({drivers: []}));

/*
 * Set a callback to create the behavior given the current state. Since there is no state
 * machine like behavior transitions for our shopping driverlist, we just return one behavior, but
 * this could inspect the driverlist, and return a different set of handlers depending on the
 * current state of the driverlist - for example, if the driverlist supported being checked out, then
 * if the driverlist was checked out, it might return AddDriver and RemoveDriver command handlers that
 * always fail because the driverlist is checked out.
 *
 * This callback will be invoked after each time that an event is handled to get the current
 * behavior for the current state.
 */
entity.setBehavior(driverlist => {
  return {
    // Command handlers. The name of the command corresponds to the name of the rpc call in
    // the gRPC service that this entity offers.
    commandHandlers: {
      AddDriver: addDriver,
      UpdateDriver: updateDriver,
      RemoveDriver: removeDriver,
      GetDriverList: getDriverList
    },
    // Event handlers. The name of the event corresponds to the value of the
    // type field in the event JSON.
    eventHandlers: {
      DriverAdded: driverAdded,
      DriverUpdated: driverUpdated,
      DriverRemoved: driverRemoved
    }
  };
});

/**
 * Handler for add driver commands.
 */
function addDriver(addDriver, driverlist, ctx) {
  console.log("addDriver", addDriver);
  // Check that the driver that we're adding does not already exist.
  const existing = driverlist.drivers.find(driver => {
    console.log("addDriver:: return existing");
    return driver.driverId === addDriver.driverId;
  });
  // Validation:
  // Make sure that it is not possible to add negative quantities
  // Create the event.  
    if (!existing) {  
      const driverAdded = {
        type: "DriverAdded",
        driver: {
          driverId: addDriver.driverId,
          driverBaseLocation: addDriver.driverBaseLocation,
          currentLocation: addDriver.currentLocation
       }
      };
      // Emit the event.
      console.log("addDriver::emit event", driverAdded);
      ctx.emit(driverAdded);
    }
    return {};
}

/**
 * Handler for add driver commands.
 */
function updateDriver(updateDriver, driverlist, ctx) {
  console.log("updateDriver", updateDriver);
  // Check that the driver that we're adding does not already exist.
  const existing = driverlist.drivers.find(driver => {
    console.log("updateDriver:: return existing");
    return driver.driverId === updateDriver.driverId;
  });
  // Validation:
  // Make sure that it is not possible to add negative quantities
  // Create the event.  
    if (existing) {  
      const driverUpdated = {
        type: "DriverUpdated",
        driver: {
          driverId: updateDriver.driverId,
          currentLocation: updateDriver.currentLocation
       }
      };
      // Emit the event.
      console.log("updateDriver::emit event", driverUpdated);
      ctx.emit(driverUpdated);
    }
    return {};
}

/**
 * Handler for remove driver commands.
 */
function removeDriver(removeDriver, driverlist, ctx) {
  console.log("removeDriver", removeDriver);
  // Validation:
  // Check that the driver that we're removing actually exists.
  const existing = driverlist.drivers.find(driver => {
    console.log("removeDriver:: return existing");
    return driver.driverId === removeDriver.driverId;
  });

  // If not, fail the command.
  if (!existing) {
    ctx.fail("Driver " + removeDriver.driverId + " not in driverlist");
  } else {
    // Otherwise, emit an driver removed event.
    const driverRemoved = {
      type: "DriverRemoved",
      driverId: removeDriver.driverId
    };
    ctx.emit(driverRemoved);
    return {};
  }
}

/**
 * Handler for get driverlist commands.
 */
function getDriverList(request, driverlist) {
  console.log("getDriverlist", driverlist.drivers);
  // Simply return the shopping driverlist as is.
  return driverlist;
}


/**
 * Handler for driver added events.
 */
function driverAdded(added, driverlist) {
  console.log("driverAdded");
  // If there is an existing driver with that product id, we need to increment its score.
  const existing = driverlist.drivers.find(driver => {
    console.log("driverAdded::return existing");
    return driver.driverId === added.driver.driverId;
  });

  console.log("driverAdded::push");
  // Otherwise, we just add the driver to the existing list.
  driverlist.drivers.push(added.driver);
  

  // And return the new state.
  console.log("return state");
  return driverlist;
}

/**
 * Handler for driver added events.
 */
function driverUpdated(updated, driverlist) {
  console.log("driverUpdated");
  // If there is an existing driver with that product id, we need to increment its score.
  const existing = driverlist.drivers.find(driver => {
    console.log("driverUpdated::return existing");
    return driver.driverId === updated.driver.driverId;
  });
  console.log(existing);
  if (existing) {
    existing.currentLocation = updated.driver.currentLocation;
  }
  
  console.log(existing);

  // And return the new state.
  console.log("return state");
  return driverlist;
}

/**
 * Handler for driver removed events.
 */
function driverRemoved(removed, driverlist) {
  // Filter the removed driver from the drivers by product id.
  driverlist.drivers = driverlist.drivers.filter(driver => {
    return driver.driverId !== removed.driverId;
  });

  // And return the new state.
  return driverlist;
}

// Export the entity
module.exports = entity;
