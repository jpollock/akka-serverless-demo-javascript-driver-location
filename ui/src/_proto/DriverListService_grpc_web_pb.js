/**
 * @fileoverview gRPC-Web generated client stub for driverlist
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
proto.driverlist = require('./DriverListService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.driverlist.DriverListServiceClient =
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
proto.driverlist.DriverListServicePromiseClient =
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
 *   !proto.driverlist.AddDriverRequest,
 *   !proto.driverlist.DriverListCount>}
 */
const methodDescriptor_DriverListService_AddDriver = new grpc.web.MethodDescriptor(
  '/driverlist.DriverListService/AddDriver',
  grpc.web.MethodType.UNARY,
  proto.driverlist.AddDriverRequest,
  proto.driverlist.DriverListCount,
  /**
   * @param {!proto.driverlist.AddDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlist.DriverListCount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.driverlist.AddDriverRequest,
 *   !proto.driverlist.DriverListCount>}
 */
const methodInfo_DriverListService_AddDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.driverlist.DriverListCount,
  /**
   * @param {!proto.driverlist.AddDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlist.DriverListCount.deserializeBinary
);


/**
 * @param {!proto.driverlist.AddDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.driverlist.DriverListCount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.driverlist.DriverListCount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.driverlist.DriverListServiceClient.prototype.addDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/driverlist.DriverListService/AddDriver',
      request,
      metadata || {},
      methodDescriptor_DriverListService_AddDriver,
      callback);
};


/**
 * @param {!proto.driverlist.AddDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.driverlist.DriverListCount>}
 *     Promise that resolves to the response
 */
proto.driverlist.DriverListServicePromiseClient.prototype.addDriver =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/driverlist.DriverListService/AddDriver',
      request,
      metadata || {},
      methodDescriptor_DriverListService_AddDriver);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.driverlist.RemoveDriverRequest,
 *   !proto.driverlist.DriverListCount>}
 */
const methodDescriptor_DriverListService_RemoveDriver = new grpc.web.MethodDescriptor(
  '/driverlist.DriverListService/RemoveDriver',
  grpc.web.MethodType.UNARY,
  proto.driverlist.RemoveDriverRequest,
  proto.driverlist.DriverListCount,
  /**
   * @param {!proto.driverlist.RemoveDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlist.DriverListCount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.driverlist.RemoveDriverRequest,
 *   !proto.driverlist.DriverListCount>}
 */
const methodInfo_DriverListService_RemoveDriver = new grpc.web.AbstractClientBase.MethodInfo(
  proto.driverlist.DriverListCount,
  /**
   * @param {!proto.driverlist.RemoveDriverRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlist.DriverListCount.deserializeBinary
);


/**
 * @param {!proto.driverlist.RemoveDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.driverlist.DriverListCount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.driverlist.DriverListCount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.driverlist.DriverListServiceClient.prototype.removeDriver =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/driverlist.DriverListService/RemoveDriver',
      request,
      metadata || {},
      methodDescriptor_DriverListService_RemoveDriver,
      callback);
};


/**
 * @param {!proto.driverlist.RemoveDriverRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.driverlist.DriverListCount>}
 *     Promise that resolves to the response
 */
proto.driverlist.DriverListServicePromiseClient.prototype.removeDriver =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/driverlist.DriverListService/RemoveDriver',
      request,
      metadata || {},
      methodDescriptor_DriverListService_RemoveDriver);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.driverlist.GetDriverListRequest,
 *   !proto.driverlist.DriverList>}
 */
const methodDescriptor_DriverListService_GetDriverList = new grpc.web.MethodDescriptor(
  '/driverlist.DriverListService/GetDriverList',
  grpc.web.MethodType.UNARY,
  proto.driverlist.GetDriverListRequest,
  proto.driverlist.DriverList,
  /**
   * @param {!proto.driverlist.GetDriverListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlist.DriverList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.driverlist.GetDriverListRequest,
 *   !proto.driverlist.DriverList>}
 */
const methodInfo_DriverListService_GetDriverList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.driverlist.DriverList,
  /**
   * @param {!proto.driverlist.GetDriverListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.driverlist.DriverList.deserializeBinary
);


/**
 * @param {!proto.driverlist.GetDriverListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.driverlist.DriverList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.driverlist.DriverList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.driverlist.DriverListServiceClient.prototype.getDriverList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/driverlist.DriverListService/GetDriverList',
      request,
      metadata || {},
      methodDescriptor_DriverListService_GetDriverList,
      callback);
};


/**
 * @param {!proto.driverlist.GetDriverListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.driverlist.DriverList>}
 *     Promise that resolves to the response
 */
proto.driverlist.DriverListServicePromiseClient.prototype.getDriverList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/driverlist.DriverListService/GetDriverList',
      request,
      metadata || {},
      methodDescriptor_DriverListService_GetDriverList);
};


module.exports = proto.driverlist;

