/*
 *
 * Copyright 2015 gRPC authors.
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
 *
 */

const DLOC_SERVICE_PROTO_PATH = __dirname + '/../protos/DriverLocationService.proto';
const DLIST_PROTO_PATH = __dirname + '/../protos/DriverListService.proto';

const parseArgs = require('minimist');
const fs = require('fs');
const async = require('async');

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const locPackageDefinition = protoLoader.loadSync(DLOC_SERVICE_PROTO_PATH, {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true});
const listPackageDefinition = protoLoader.loadSync(DLIST_PROTO_PATH, {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true});
const dloc_proto = grpc.loadPackageDefinition(locPackageDefinition).driverlocation;
const dlist_proto = grpc.loadPackageDefinition(listPackageDefinition).driverlist;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function getUsers() {
    var obj = JSON.parse(fs.readFileSync('10000_users.json', 'utf8'));
    return obj.items;
}

function main() {
  var argv = parseArgs(process.argv.slice(2), {
    string: 'target'
  });
  var target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = 'localhost:9000';
  }
  
  var locClient;
  var listClient;
  if (argv.secure) {

    locClient = new dloc_proto.DriverLocationService(target,grpc.credentials.createSsl());
    listClient = new dlist_proto.DriverListService(target,grpc.credentials.createSsl());
  } else {
    locClient = new dloc_proto.DriverLocationService(target, grpc.credentials.createInsecure());
    listClient = new dlist_proto.DriverListService(target, grpc.credentials.createInsecure());
  }
  
  var count;
  if (argv.count > 0) {
    count = argv.count
  } else {
    count = 100;
  }
  

  let users = getUsers().slice(0,count);
  console.log(users);
  /*
  for (const user of users.values()) {
      //console.log(user);
      let player = {leaderboardId: "test3", playerId: user.index, playerName: user.fullname, age: getRandomInt(20,80), score: getRandomInt(10,1000)};
      console.log(player);
      
      client.AddPlayer(player, function(err, response) {
        console.log('Greeting:', response.message);
      });
  }*/

  async.map(users, function(user, callback) {
    //console.log(user);
    //console.log(Date.now())
    
    let driver = {driverListId: 'test', driverId: user.fullname};
    listClient.AddDriver(driver, function(err, response) {
      console.log('Added driver data:', user.fullname);
      //console.log(err);
    });
});

  
  (function() {
    function stateLoop() {
          async.map(users, function(user, callback) {
            //console.log(user);
            //console.log(Date.now())
            
            let driver = {driverListId: 'test', driverId: user.fullname};
            //listClient.AddDriver(driver, function(err, response) {
             // console.log('Updated driver data:', user.fullname);
              //console.log(err);
            //});
          });
        
        
       
    }
    stateLoop();
    var state_loop =  setInterval(stateLoop, 5000);

    })();  
}

main();


