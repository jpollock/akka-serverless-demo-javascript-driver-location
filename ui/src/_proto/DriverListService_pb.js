// source: DriverListService.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cloudstate_entity_key_pb = require('./cloudstate/entity_key_pb.js');
goog.object.extend(proto, cloudstate_entity_key_pb);
var cloudstate_eventing_pb = require('./cloudstate/eventing_pb.js');
goog.object.extend(proto, cloudstate_eventing_pb);
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.driverlist.AddDriverRequest', null, global);
goog.exportSymbol('proto.driverlist.Driver', null, global);
goog.exportSymbol('proto.driverlist.DriverList', null, global);
goog.exportSymbol('proto.driverlist.DriverListCount', null, global);
goog.exportSymbol('proto.driverlist.GetDriverListRequest', null, global);
goog.exportSymbol('proto.driverlist.RemoveDriverRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.driverlist.AddDriverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.driverlist.AddDriverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.driverlist.AddDriverRequest.displayName = 'proto.driverlist.AddDriverRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.driverlist.RemoveDriverRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.driverlist.RemoveDriverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.driverlist.RemoveDriverRequest.displayName = 'proto.driverlist.RemoveDriverRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.driverlist.GetDriverListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.driverlist.GetDriverListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.driverlist.GetDriverListRequest.displayName = 'proto.driverlist.GetDriverListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.driverlist.DriverListCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.driverlist.DriverListCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.driverlist.DriverListCount.displayName = 'proto.driverlist.DriverListCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.driverlist.DriverList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.driverlist.DriverList.repeatedFields_, null);
};
goog.inherits(proto.driverlist.DriverList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.driverlist.DriverList.displayName = 'proto.driverlist.DriverList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.driverlist.Driver = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.driverlist.Driver, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.driverlist.Driver.displayName = 'proto.driverlist.Driver';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.driverlist.AddDriverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.driverlist.AddDriverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.driverlist.AddDriverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.AddDriverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    driverlistid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    driverid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.driverlist.AddDriverRequest}
 */
proto.driverlist.AddDriverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.driverlist.AddDriverRequest;
  return proto.driverlist.AddDriverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.driverlist.AddDriverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.driverlist.AddDriverRequest}
 */
proto.driverlist.AddDriverRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverlistid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.driverlist.AddDriverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.driverlist.AddDriverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.driverlist.AddDriverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.AddDriverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDriverlistid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDriverid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string driverListId = 1;
 * @return {string}
 */
proto.driverlist.AddDriverRequest.prototype.getDriverlistid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.driverlist.AddDriverRequest} returns this
 */
proto.driverlist.AddDriverRequest.prototype.setDriverlistid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string driverId = 2;
 * @return {string}
 */
proto.driverlist.AddDriverRequest.prototype.getDriverid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.driverlist.AddDriverRequest} returns this
 */
proto.driverlist.AddDriverRequest.prototype.setDriverid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.driverlist.RemoveDriverRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.driverlist.RemoveDriverRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.driverlist.RemoveDriverRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.RemoveDriverRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    driverlistid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    driverid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.driverlist.RemoveDriverRequest}
 */
proto.driverlist.RemoveDriverRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.driverlist.RemoveDriverRequest;
  return proto.driverlist.RemoveDriverRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.driverlist.RemoveDriverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.driverlist.RemoveDriverRequest}
 */
proto.driverlist.RemoveDriverRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverlistid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.driverlist.RemoveDriverRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.driverlist.RemoveDriverRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.driverlist.RemoveDriverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.RemoveDriverRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDriverlistid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDriverid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string driverListId = 1;
 * @return {string}
 */
proto.driverlist.RemoveDriverRequest.prototype.getDriverlistid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.driverlist.RemoveDriverRequest} returns this
 */
proto.driverlist.RemoveDriverRequest.prototype.setDriverlistid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string driverId = 2;
 * @return {string}
 */
proto.driverlist.RemoveDriverRequest.prototype.getDriverid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.driverlist.RemoveDriverRequest} returns this
 */
proto.driverlist.RemoveDriverRequest.prototype.setDriverid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.driverlist.GetDriverListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.driverlist.GetDriverListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.driverlist.GetDriverListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.GetDriverListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    driverlistid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.driverlist.GetDriverListRequest}
 */
proto.driverlist.GetDriverListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.driverlist.GetDriverListRequest;
  return proto.driverlist.GetDriverListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.driverlist.GetDriverListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.driverlist.GetDriverListRequest}
 */
proto.driverlist.GetDriverListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverlistid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.driverlist.GetDriverListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.driverlist.GetDriverListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.driverlist.GetDriverListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.GetDriverListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDriverlistid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string driverListId = 1;
 * @return {string}
 */
proto.driverlist.GetDriverListRequest.prototype.getDriverlistid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.driverlist.GetDriverListRequest} returns this
 */
proto.driverlist.GetDriverListRequest.prototype.setDriverlistid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.driverlist.DriverListCount.prototype.toObject = function(opt_includeInstance) {
  return proto.driverlist.DriverListCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.driverlist.DriverListCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.DriverListCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.driverlist.DriverListCount}
 */
proto.driverlist.DriverListCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.driverlist.DriverListCount;
  return proto.driverlist.DriverListCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.driverlist.DriverListCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.driverlist.DriverListCount}
 */
proto.driverlist.DriverListCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.driverlist.DriverListCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.driverlist.DriverListCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.driverlist.DriverListCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.DriverListCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.driverlist.DriverListCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.driverlist.DriverListCount} returns this
 */
proto.driverlist.DriverListCount.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.driverlist.DriverList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.driverlist.DriverList.prototype.toObject = function(opt_includeInstance) {
  return proto.driverlist.DriverList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.driverlist.DriverList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.DriverList.toObject = function(includeInstance, msg) {
  var f, obj = {
    driversList: jspb.Message.toObjectList(msg.getDriversList(),
    proto.driverlist.Driver.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.driverlist.DriverList}
 */
proto.driverlist.DriverList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.driverlist.DriverList;
  return proto.driverlist.DriverList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.driverlist.DriverList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.driverlist.DriverList}
 */
proto.driverlist.DriverList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.driverlist.Driver;
      reader.readMessage(value,proto.driverlist.Driver.deserializeBinaryFromReader);
      msg.addDrivers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.driverlist.DriverList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.driverlist.DriverList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.driverlist.DriverList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.DriverList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDriversList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.driverlist.Driver.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Driver drivers = 1;
 * @return {!Array<!proto.driverlist.Driver>}
 */
proto.driverlist.DriverList.prototype.getDriversList = function() {
  return /** @type{!Array<!proto.driverlist.Driver>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.driverlist.Driver, 1));
};


/**
 * @param {!Array<!proto.driverlist.Driver>} value
 * @return {!proto.driverlist.DriverList} returns this
*/
proto.driverlist.DriverList.prototype.setDriversList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.driverlist.Driver=} opt_value
 * @param {number=} opt_index
 * @return {!proto.driverlist.Driver}
 */
proto.driverlist.DriverList.prototype.addDrivers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.driverlist.Driver, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.driverlist.DriverList} returns this
 */
proto.driverlist.DriverList.prototype.clearDriversList = function() {
  return this.setDriversList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.driverlist.Driver.prototype.toObject = function(opt_includeInstance) {
  return proto.driverlist.Driver.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.driverlist.Driver} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.Driver.toObject = function(includeInstance, msg) {
  var f, obj = {
    driverid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.driverlist.Driver}
 */
proto.driverlist.Driver.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.driverlist.Driver;
  return proto.driverlist.Driver.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.driverlist.Driver} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.driverlist.Driver}
 */
proto.driverlist.Driver.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.driverlist.Driver.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.driverlist.Driver.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.driverlist.Driver} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.driverlist.Driver.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDriverid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string driverId = 1;
 * @return {string}
 */
proto.driverlist.Driver.prototype.getDriverid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.driverlist.Driver} returns this
 */
proto.driverlist.Driver.prototype.setDriverid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.driverlist);
