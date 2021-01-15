/**
 * @fileoverview gRPC-Web generated client stub for driverlocation
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cloudstate_entity_key_pb = require('./cloudstate/entity_key_pb.js')

var cloudstate_eventing_pb = require('./cloudstate/eventing_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')
const proto = {};
proto.driverlocation = require('./DriverLocationService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.driverlocation.DriverLocationServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.driverlocation.DriverLocationServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.driverlocation.SetDriverLocationRequest,
 *   !proto.driverlocation.DriverData>}
 */
const methodDescriptor_DriverLocationService_SetDriverLocation = new grpc.web.MethodDescriptor(
  '/driverlocation.DriverLocationService/SetDriverLocation',
  grpc.web.MethodType.UNARY,
  proto.driverlocation.SetDriverLocationRequest,
  proto.driverlocation.DriverData,
  /**
   * @param {!proto.driverlocation.SetDriverLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlocation.DriverData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.driverlocation.SetDriverLocationRequest,
 *   !proto.driverlocation.DriverData>}
 */
const methodInfo_DriverLocationService_SetDriverLocation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.driverlocation.DriverData,
  /**
   * @param {!proto.driverlocation.SetDriverLocationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlocation.DriverData.deserializeBinary
);


/**
 * @param {!proto.driverlocation.SetDriverLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.driverlocation.DriverData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.driverlocation.DriverData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.driverlocation.DriverLocationServiceClient.prototype.setDriverLocation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/driverlocation.DriverLocationService/SetDriverLocation',
      request,
      metadata || {},
      methodDescriptor_DriverLocationService_SetDriverLocation,
      callback);
};


/**
 * @param {!proto.driverlocation.SetDriverLocationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.driverlocation.DriverData>}
 *     Promise that resolves to the response
 */
proto.driverlocation.DriverLocationServicePromiseClient.prototype.setDriverLocation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/driverlocation.DriverLocationService/SetDriverLocation',
      request,
      metadata || {},
      methodDescriptor_DriverLocationService_SetDriverLocation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.driverlocation.SetDriverOnRideRequest,
 *   !proto.driverlocation.DriverData>}
 */
const methodDescriptor_DriverLocationService_SetDriverOnRide = new grpc.web.MethodDescriptor(
  '/driverlocation.DriverLocationService/SetDriverOnRide',
  grpc.web.MethodType.UNARY,
  proto.driverlocation.SetDriverOnRideRequest,
  proto.driverlocation.DriverData,
  /**
   * @param {!proto.driverlocation.SetDriverOnRideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlocation.DriverData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.driverlocation.SetDriverOnRideRequest,
 *   !proto.driverlocation.DriverData>}
 */
const methodInfo_DriverLocationService_SetDriverOnRide = new grpc.web.AbstractClientBase.MethodInfo(
  proto.driverlocation.DriverData,
  /**
   * @param {!proto.driverlocation.SetDriverOnRideRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlocation.DriverData.deserializeBinary
);


/**
 * @param {!proto.driverlocation.SetDriverOnRideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.driverlocation.DriverData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.driverlocation.DriverData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.driverlocation.DriverLocationServiceClient.prototype.setDriverOnRide =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/driverlocation.DriverLocationService/SetDriverOnRide',
      request,
      metadata || {},
      methodDescriptor_DriverLocationService_SetDriverOnRide,
      callback);
};


/**
 * @param {!proto.driverlocation.SetDriverOnRideRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.driverlocation.DriverData>}
 *     Promise that resolves to the response
 */
proto.driverlocation.DriverLocationServicePromiseClient.prototype.setDriverOnRide =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/driverlocation.DriverLocationService/SetDriverOnRide',
      request,
      metadata || {},
      methodDescriptor_DriverLocationService_SetDriverOnRide);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.driverlocation.GetDriverRequest,
 *   !proto.driverlocation.DriverData>}
 */
const methodDescriptor_DriverLocationService_GetDriver = new grpc.web.MethodDescriptor(
  '/driverlocation.DriverLocationService/GetDriver',
  grpc.web.MethodType.UNARY,
  proto.driverlocation.GetDriverRequest,
  proto.driverlocation.DriverData,
  /**
   * @param {!proto.driverlocation.GetDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlocation.DriverData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.driverlocation.GetDriverRequest,
 *   !proto.driverlocation.DriverData>}
 */
const methodInfo_DriverLocationService_GetDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.driverlocation.DriverData,
  /**
   * @param {!proto.driverlocation.GetDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlocation.DriverData.deserializeBinary
);


/**
 * @param {!proto.driverlocation.GetDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.driverlocation.DriverData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.driverlocation.DriverData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.driverlocation.DriverLocationServiceClient.prototype.getDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/driverlocation.DriverLocationService/GetDriver',
      request,
      metadata || {},
      methodDescriptor_DriverLocationService_GetDriver,
      callback);
};


/**
 * @param {!proto.driverlocation.GetDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.driverlocation.DriverData>}
 *     Promise that resolves to the response
 */
proto.driverlocation.DriverLocationServicePromiseClient.prototype.getDriver =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/driverlocation.DriverLocationService/GetDriver',
      request,
      metadata || {},
      methodDescriptor_DriverLocationService_GetDriver);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.driverlocation.GetDriverDistanceRequest,
 *   !proto.driverlocation.DriverDistance>}
 */
const methodDescriptor_DriverLocationService_GetDriverDistance = new grpc.web.MethodDescriptor(
  '/driverlocation.DriverLocationService/GetDriverDistance',
  grpc.web.MethodType.UNARY,
  proto.driverlocation.GetDriverDistanceRequest,
  proto.driverlocation.DriverDistance,
  /**
   * @param {!proto.driverlocation.GetDriverDistanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlocation.DriverDistance.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.driverlocation.GetDriverDistanceRequest,
 *   !proto.driverlocation.DriverDistance>}
 */
const methodInfo_DriverLocationService_GetDriverDistance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.driverlocation.DriverDistance,
  /**
   * @param {!proto.driverlocation.GetDriverDistanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlocation.DriverDistance.deserializeBinary
);


/**
 * @param {!proto.driverlocation.GetDriverDistanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.driverlocation.DriverDistance)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.driverlocation.DriverDistance>|undefined}
 *     The XHR Node Readable Stream
 */
proto.driverlocation.DriverLocationServiceClient.prototype.getDriverDistance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/driverlocation.DriverLocationService/GetDriverDistance',
      request,
      metadata || {},
      methodDescriptor_DriverLocationService_GetDriverDistance,
      callback);
};


/**
 * @param {!proto.driverlocation.GetDriverDistanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.driverlocation.DriverDistance>}
 *     Promise that resolves to the response
 */
proto.driverlocation.DriverLocationServicePromiseClient.prototype.getDriverDistance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/driverlocation.DriverLocationService/GetDriverDistance',
      request,
      metadata || {},
      methodDescriptor_DriverLocationService_GetDriverDistance);
};


module.exports = proto.driverlocation;

