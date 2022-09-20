/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof auth
         * @interface ILoginRequest
         * @property {string|null} [username] LoginRequest username
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof auth
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {auth.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest username.
         * @member {string} username
         * @memberof auth.LoginRequest
         * @instance
         */
        LoginRequest.prototype.username = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof auth.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.LoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for LoginRequest
         * @function getTypeUrl
         * @memberof auth.LoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.LoginRequest";
        };

        return LoginRequest;
    })();

    auth.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof auth
         * @interface ILoginResponse
         * @property {string|null} [token] LoginResponse token
         * @property {number|null} [expires_in] LoginResponse expires_in
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof auth
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {auth.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse token.
         * @member {string} token
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.token = "";

        /**
         * LoginResponse expires_in.
         * @member {number} expires_in
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.expires_in = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link auth.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.LoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.expires_in != null && Object.hasOwnProperty.call(message, "expires_in"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expires_in);
            return writer;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.expires_in = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for LoginResponse
         * @function getTypeUrl
         * @memberof auth.LoginResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.LoginResponse";
        };

        return LoginResponse;
    })();

    auth.ExchangeRequest = (function() {

        /**
         * Properties of an ExchangeRequest.
         * @memberof auth
         * @interface IExchangeRequest
         * @property {string|null} [code] ExchangeRequest code
         */

        /**
         * Constructs a new ExchangeRequest.
         * @memberof auth
         * @classdesc Represents an ExchangeRequest.
         * @implements IExchangeRequest
         * @constructor
         * @param {auth.IExchangeRequest=} [properties] Properties to set
         */
        function ExchangeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeRequest code.
         * @member {string} code
         * @memberof auth.ExchangeRequest
         * @instance
         */
        ExchangeRequest.prototype.code = "";

        /**
         * Encodes the specified ExchangeRequest message. Does not implicitly {@link auth.ExchangeRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.ExchangeRequest
         * @static
         * @param {auth.ExchangeRequest} message ExchangeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Decodes an ExchangeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.ExchangeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.ExchangeRequest} ExchangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.ExchangeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ExchangeRequest
         * @function getTypeUrl
         * @memberof auth.ExchangeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExchangeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.ExchangeRequest";
        };

        return ExchangeRequest;
    })();

    auth.ExchangeResponse = (function() {

        /**
         * Properties of an ExchangeResponse.
         * @memberof auth
         * @interface IExchangeResponse
         * @property {string|null} [token] ExchangeResponse token
         * @property {number|null} [expires_in] ExchangeResponse expires_in
         */

        /**
         * Constructs a new ExchangeResponse.
         * @memberof auth
         * @classdesc Represents an ExchangeResponse.
         * @implements IExchangeResponse
         * @constructor
         * @param {auth.IExchangeResponse=} [properties] Properties to set
         */
        function ExchangeResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExchangeResponse token.
         * @member {string} token
         * @memberof auth.ExchangeResponse
         * @instance
         */
        ExchangeResponse.prototype.token = "";

        /**
         * ExchangeResponse expires_in.
         * @member {number} expires_in
         * @memberof auth.ExchangeResponse
         * @instance
         */
        ExchangeResponse.prototype.expires_in = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ExchangeResponse message. Does not implicitly {@link auth.ExchangeResponse.verify|verify} messages.
         * @function encode
         * @memberof auth.ExchangeResponse
         * @static
         * @param {auth.ExchangeResponse} message ExchangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.expires_in != null && Object.hasOwnProperty.call(message, "expires_in"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expires_in);
            return writer;
        };

        /**
         * Decodes an ExchangeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof auth.ExchangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.ExchangeResponse} ExchangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.ExchangeResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.expires_in = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ExchangeResponse
         * @function getTypeUrl
         * @memberof auth.ExchangeResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExchangeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.ExchangeResponse";
        };

        return ExchangeResponse;
    })();

    auth.InfoRequest = (function() {

        /**
         * Properties of an InfoRequest.
         * @memberof auth
         * @interface IInfoRequest
         */

        /**
         * Constructs a new InfoRequest.
         * @memberof auth
         * @classdesc Represents an InfoRequest.
         * @implements IInfoRequest
         * @constructor
         * @param {auth.IInfoRequest=} [properties] Properties to set
         */
        function InfoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified InfoRequest message. Does not implicitly {@link auth.InfoRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.InfoRequest
         * @static
         * @param {auth.InfoRequest} message InfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes an InfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.InfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.InfoRequest} InfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.InfoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for InfoRequest
         * @function getTypeUrl
         * @memberof auth.InfoRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.InfoRequest";
        };

        return InfoRequest;
    })();

    auth.Permission = (function() {

        /**
         * Properties of a Permission.
         * @memberof auth
         * @interface IPermission
         * @property {rbac.Permission|null} [permission] Permission permission
         * @property {Array.<string>|null} [items] Permission items
         */

        /**
         * Constructs a new Permission.
         * @memberof auth
         * @classdesc Represents a Permission.
         * @implements IPermission
         * @constructor
         * @param {auth.IPermission=} [properties] Properties to set
         */
        function Permission(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Permission permission.
         * @member {rbac.Permission} permission
         * @memberof auth.Permission
         * @instance
         */
        Permission.prototype.permission = 0;

        /**
         * Permission items.
         * @member {Array.<string>} items
         * @memberof auth.Permission
         * @instance
         */
        Permission.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified Permission message. Does not implicitly {@link auth.Permission.verify|verify} messages.
         * @function encode
         * @memberof auth.Permission
         * @static
         * @param {auth.Permission} message Permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Permission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.permission);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.items[i]);
            return writer;
        };

        /**
         * Decodes a Permission message from the specified reader or buffer.
         * @function decode
         * @memberof auth.Permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.Permission} Permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Permission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.Permission();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.permission = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Permission
         * @function getTypeUrl
         * @memberof auth.Permission
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Permission.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.Permission";
        };

        return Permission;
    })();

    auth.InfoResponse = (function() {

        /**
         * Properties of an InfoResponse.
         * @memberof auth
         * @interface IInfoResponse
         * @property {string|null} [id] InfoResponse id
         * @property {string|null} [avatar] InfoResponse avatar
         * @property {string|null} [name] InfoResponse name
         * @property {string|null} [email] InfoResponse email
         * @property {string|null} [logout_url] InfoResponse logout_url
         * @property {boolean|null} [is_admin] InfoResponse is_admin
         * @property {Array.<auth.Permission>|null} [permissions] InfoResponse permissions
         */

        /**
         * Constructs a new InfoResponse.
         * @memberof auth
         * @classdesc Represents an InfoResponse.
         * @implements IInfoResponse
         * @constructor
         * @param {auth.IInfoResponse=} [properties] Properties to set
         */
        function InfoResponse(properties) {
            this.permissions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InfoResponse id.
         * @member {string} id
         * @memberof auth.InfoResponse
         * @instance
         */
        InfoResponse.prototype.id = "";

        /**
         * InfoResponse avatar.
         * @member {string} avatar
         * @memberof auth.InfoResponse
         * @instance
         */
        InfoResponse.prototype.avatar = "";

        /**
         * InfoResponse name.
         * @member {string} name
         * @memberof auth.InfoResponse
         * @instance
         */
        InfoResponse.prototype.name = "";

        /**
         * InfoResponse email.
         * @member {string} email
         * @memberof auth.InfoResponse
         * @instance
         */
        InfoResponse.prototype.email = "";

        /**
         * InfoResponse logout_url.
         * @member {string} logout_url
         * @memberof auth.InfoResponse
         * @instance
         */
        InfoResponse.prototype.logout_url = "";

        /**
         * InfoResponse is_admin.
         * @member {boolean} is_admin
         * @memberof auth.InfoResponse
         * @instance
         */
        InfoResponse.prototype.is_admin = false;

        /**
         * InfoResponse permissions.
         * @member {Array.<auth.Permission>} permissions
         * @memberof auth.InfoResponse
         * @instance
         */
        InfoResponse.prototype.permissions = $util.emptyArray;

        /**
         * Encodes the specified InfoResponse message. Does not implicitly {@link auth.InfoResponse.verify|verify} messages.
         * @function encode
         * @memberof auth.InfoResponse
         * @static
         * @param {auth.InfoResponse} message InfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatar);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            if (message.logout_url != null && Object.hasOwnProperty.call(message, "logout_url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.logout_url);
            if (message.is_admin != null && Object.hasOwnProperty.call(message, "is_admin"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.is_admin);
            if (message.permissions != null && message.permissions.length)
                for (let i = 0; i < message.permissions.length; ++i)
                    $root.auth.Permission.encode(message.permissions[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an InfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof auth.InfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.InfoResponse} InfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.InfoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.avatar = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.email = reader.string();
                        break;
                    }
                case 5: {
                        message.logout_url = reader.string();
                        break;
                    }
                case 6: {
                        message.is_admin = reader.bool();
                        break;
                    }
                case 7: {
                        if (!(message.permissions && message.permissions.length))
                            message.permissions = [];
                        message.permissions.push($root.auth.Permission.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for InfoResponse
         * @function getTypeUrl
         * @memberof auth.InfoResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InfoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.InfoResponse";
        };

        return InfoResponse;
    })();

    auth.SettingsRequest = (function() {

        /**
         * Properties of a SettingsRequest.
         * @memberof auth
         * @interface ISettingsRequest
         */

        /**
         * Constructs a new SettingsRequest.
         * @memberof auth
         * @classdesc Represents a SettingsRequest.
         * @implements ISettingsRequest
         * @constructor
         * @param {auth.ISettingsRequest=} [properties] Properties to set
         */
        function SettingsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified SettingsRequest message. Does not implicitly {@link auth.SettingsRequest.verify|verify} messages.
         * @function encode
         * @memberof auth.SettingsRequest
         * @static
         * @param {auth.SettingsRequest} message SettingsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a SettingsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof auth.SettingsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.SettingsRequest} SettingsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.SettingsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for SettingsRequest
         * @function getTypeUrl
         * @memberof auth.SettingsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SettingsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.SettingsRequest";
        };

        return SettingsRequest;
    })();

    auth.SettingsResponse = (function() {

        /**
         * Properties of a SettingsResponse.
         * @memberof auth
         * @interface ISettingsResponse
         * @property {Array.<auth.SettingsResponse.OidcSetting>|null} [items] SettingsResponse items
         */

        /**
         * Constructs a new SettingsResponse.
         * @memberof auth
         * @classdesc Represents a SettingsResponse.
         * @implements ISettingsResponse
         * @constructor
         * @param {auth.ISettingsResponse=} [properties] Properties to set
         */
        function SettingsResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SettingsResponse items.
         * @member {Array.<auth.SettingsResponse.OidcSetting>} items
         * @memberof auth.SettingsResponse
         * @instance
         */
        SettingsResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified SettingsResponse message. Does not implicitly {@link auth.SettingsResponse.verify|verify} messages.
         * @function encode
         * @memberof auth.SettingsResponse
         * @static
         * @param {auth.SettingsResponse} message SettingsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.auth.SettingsResponse.OidcSetting.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SettingsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof auth.SettingsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.SettingsResponse} SettingsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.SettingsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.auth.SettingsResponse.OidcSetting.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for SettingsResponse
         * @function getTypeUrl
         * @memberof auth.SettingsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SettingsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/auth.SettingsResponse";
        };

        SettingsResponse.OidcSetting = (function() {

            /**
             * Properties of an OidcSetting.
             * @memberof auth.SettingsResponse
             * @interface IOidcSetting
             * @property {boolean|null} [enabled] OidcSetting enabled
             * @property {string|null} [name] OidcSetting name
             * @property {string|null} [url] OidcSetting url
             * @property {string|null} [end_session_endpoint] OidcSetting end_session_endpoint
             * @property {string|null} [state] OidcSetting state
             */

            /**
             * Constructs a new OidcSetting.
             * @memberof auth.SettingsResponse
             * @classdesc Represents an OidcSetting.
             * @implements IOidcSetting
             * @constructor
             * @param {auth.SettingsResponse.IOidcSetting=} [properties] Properties to set
             */
            function OidcSetting(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OidcSetting enabled.
             * @member {boolean} enabled
             * @memberof auth.SettingsResponse.OidcSetting
             * @instance
             */
            OidcSetting.prototype.enabled = false;

            /**
             * OidcSetting name.
             * @member {string} name
             * @memberof auth.SettingsResponse.OidcSetting
             * @instance
             */
            OidcSetting.prototype.name = "";

            /**
             * OidcSetting url.
             * @member {string} url
             * @memberof auth.SettingsResponse.OidcSetting
             * @instance
             */
            OidcSetting.prototype.url = "";

            /**
             * OidcSetting end_session_endpoint.
             * @member {string} end_session_endpoint
             * @memberof auth.SettingsResponse.OidcSetting
             * @instance
             */
            OidcSetting.prototype.end_session_endpoint = "";

            /**
             * OidcSetting state.
             * @member {string} state
             * @memberof auth.SettingsResponse.OidcSetting
             * @instance
             */
            OidcSetting.prototype.state = "";

            /**
             * Encodes the specified OidcSetting message. Does not implicitly {@link auth.SettingsResponse.OidcSetting.verify|verify} messages.
             * @function encode
             * @memberof auth.SettingsResponse.OidcSetting
             * @static
             * @param {auth.SettingsResponse.OidcSetting} message OidcSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OidcSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
                if (message.end_session_endpoint != null && Object.hasOwnProperty.call(message, "end_session_endpoint"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.end_session_endpoint);
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.state);
                return writer;
            };

            /**
             * Decodes an OidcSetting message from the specified reader or buffer.
             * @function decode
             * @memberof auth.SettingsResponse.OidcSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {auth.SettingsResponse.OidcSetting} OidcSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OidcSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.SettingsResponse.OidcSetting();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.enabled = reader.bool();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.url = reader.string();
                            break;
                        }
                    case 4: {
                            message.end_session_endpoint = reader.string();
                            break;
                        }
                    case 5: {
                            message.state = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Gets the default type url for OidcSetting
             * @function getTypeUrl
             * @memberof auth.SettingsResponse.OidcSetting
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OidcSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/auth.SettingsResponse.OidcSetting";
            };

            return OidcSetting;
        })();

        return SettingsResponse;
    })();

    auth.Auth = (function() {

        /**
         * Constructs a new Auth service.
         * @memberof auth
         * @classdesc Represents an Auth
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Auth(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Auth.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Auth;

        /**
         * Callback as used by {@link auth.Auth#login}.
         * @memberof auth.Auth
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls Login.
         * @function login
         * @memberof auth.Auth
         * @instance
         * @param {auth.LoginRequest} request LoginRequest message or plain object
         * @param {auth.Auth.LoginCallback} callback Node-style callback called with the error, if any, and LoginResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Auth.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.auth.LoginRequest, $root.auth.LoginResponse, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof auth.Auth
         * @instance
         * @param {auth.LoginRequest} request LoginRequest message or plain object
         * @returns {Promise<auth.LoginResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link auth.Auth#info}.
         * @memberof auth.Auth
         * @typedef InfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.InfoResponse} [response] InfoResponse
         */

        /**
         * Calls Info.
         * @function info
         * @memberof auth.Auth
         * @instance
         * @param {auth.InfoRequest} request InfoRequest message or plain object
         * @param {auth.Auth.InfoCallback} callback Node-style callback called with the error, if any, and InfoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Auth.prototype.info = function info(request, callback) {
            return this.rpcCall(info, $root.auth.InfoRequest, $root.auth.InfoResponse, request, callback);
        }, "name", { value: "Info" });

        /**
         * Calls Info.
         * @function info
         * @memberof auth.Auth
         * @instance
         * @param {auth.InfoRequest} request InfoRequest message or plain object
         * @returns {Promise<auth.InfoResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link auth.Auth#settings}.
         * @memberof auth.Auth
         * @typedef SettingsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.SettingsResponse} [response] SettingsResponse
         */

        /**
         * Calls Settings.
         * @function settings
         * @memberof auth.Auth
         * @instance
         * @param {auth.SettingsRequest} request SettingsRequest message or plain object
         * @param {auth.Auth.SettingsCallback} callback Node-style callback called with the error, if any, and SettingsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Auth.prototype.settings = function settings(request, callback) {
            return this.rpcCall(settings, $root.auth.SettingsRequest, $root.auth.SettingsResponse, request, callback);
        }, "name", { value: "Settings" });

        /**
         * Calls Settings.
         * @function settings
         * @memberof auth.Auth
         * @instance
         * @param {auth.SettingsRequest} request SettingsRequest message or plain object
         * @returns {Promise<auth.SettingsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link auth.Auth#exchange}.
         * @memberof auth.Auth
         * @typedef ExchangeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.ExchangeResponse} [response] ExchangeResponse
         */

        /**
         * Calls Exchange.
         * @function exchange
         * @memberof auth.Auth
         * @instance
         * @param {auth.ExchangeRequest} request ExchangeRequest message or plain object
         * @param {auth.Auth.ExchangeCallback} callback Node-style callback called with the error, if any, and ExchangeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Auth.prototype.exchange = function exchange(request, callback) {
            return this.rpcCall(exchange, $root.auth.ExchangeRequest, $root.auth.ExchangeResponse, request, callback);
        }, "name", { value: "Exchange" });

        /**
         * Calls Exchange.
         * @function exchange
         * @memberof auth.Auth
         * @instance
         * @param {auth.ExchangeRequest} request ExchangeRequest message or plain object
         * @returns {Promise<auth.ExchangeResponse>} Promise
         * @variation 2
         */

        return Auth;
    })();

    return auth;
})();

export const card = $root.card = (() => {

    /**
     * Namespace card.
     * @exports card
     * @namespace
     */
    const card = {};

    card.AllRequest = (function() {

        /**
         * Properties of an AllRequest.
         * @memberof card
         * @interface IAllRequest
         * @property {boolean|null} [owned] AllRequest owned
         */

        /**
         * Constructs a new AllRequest.
         * @memberof card
         * @classdesc Represents an AllRequest.
         * @implements IAllRequest
         * @constructor
         * @param {card.IAllRequest=} [properties] Properties to set
         */
        function AllRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllRequest owned.
         * @member {boolean} owned
         * @memberof card.AllRequest
         * @instance
         */
        AllRequest.prototype.owned = false;

        /**
         * Encodes the specified AllRequest message. Does not implicitly {@link card.AllRequest.verify|verify} messages.
         * @function encode
         * @memberof card.AllRequest
         * @static
         * @param {card.AllRequest} message AllRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.owned != null && Object.hasOwnProperty.call(message, "owned"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.owned);
            return writer;
        };

        /**
         * Decodes an AllRequest message from the specified reader or buffer.
         * @function decode
         * @memberof card.AllRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.AllRequest} AllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.AllRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.owned = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for AllRequest
         * @function getTypeUrl
         * @memberof card.AllRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AllRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.AllRequest";
        };

        return AllRequest;
    })();

    card.AllResponse = (function() {

        /**
         * Properties of an AllResponse.
         * @memberof card
         * @interface IAllResponse
         * @property {Array.<card.ItemsList>|null} [items] AllResponse items
         */

        /**
         * Constructs a new AllResponse.
         * @memberof card
         * @classdesc Represents an AllResponse.
         * @implements IAllResponse
         * @constructor
         * @param {card.IAllResponse=} [properties] Properties to set
         */
        function AllResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllResponse items.
         * @member {Array.<card.ItemsList>} items
         * @memberof card.AllResponse
         * @instance
         */
        AllResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified AllResponse message. Does not implicitly {@link card.AllResponse.verify|verify} messages.
         * @function encode
         * @memberof card.AllResponse
         * @static
         * @param {card.AllResponse} message AllResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.card.ItemsList.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AllResponse message from the specified reader or buffer.
         * @function decode
         * @memberof card.AllResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.AllResponse} AllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.AllResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.card.ItemsList.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for AllResponse
         * @function getTypeUrl
         * @memberof card.AllResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AllResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.AllResponse";
        };

        return AllResponse;
    })();

    card.ListRequest = (function() {

        /**
         * Properties of a ListRequest.
         * @memberof card
         * @interface IListRequest
         * @property {number|null} [page] ListRequest page
         * @property {number|null} [page_size] ListRequest page_size
         */

        /**
         * Constructs a new ListRequest.
         * @memberof card
         * @classdesc Represents a ListRequest.
         * @implements IListRequest
         * @constructor
         * @param {card.IListRequest=} [properties] Properties to set
         */
        function ListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListRequest page.
         * @member {number} page
         * @memberof card.ListRequest
         * @instance
         */
        ListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListRequest page_size.
         * @member {number} page_size
         * @memberof card.ListRequest
         * @instance
         */
        ListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link card.ListRequest.verify|verify} messages.
         * @function encode
         * @memberof card.ListRequest
         * @static
         * @param {card.ListRequest} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            return writer;
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof card.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.ListRequest} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.ListRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListRequest
         * @function getTypeUrl
         * @memberof card.ListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.ListRequest";
        };

        return ListRequest;
    })();

    card.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof card
         * @interface IItems
         * @property {number|null} [id] Items id
         * @property {number|null} [cluster_id] Items cluster_id
         * @property {string|null} [namespace] Items namespace
         * @property {string|null} [name] Items name
         * @property {string|null} [type] Items type
         * @property {string|null} [cluster_name] Items cluster_name
         * @property {Array.<container.Item>|null} [items] Items items
         */

        /**
         * Constructs a new Items.
         * @memberof card
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {card.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items id.
         * @member {number} id
         * @memberof card.Items
         * @instance
         */
        Items.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Items cluster_id.
         * @member {number} cluster_id
         * @memberof card.Items
         * @instance
         */
        Items.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Items namespace.
         * @member {string} namespace
         * @memberof card.Items
         * @instance
         */
        Items.prototype.namespace = "";

        /**
         * Items name.
         * @member {string} name
         * @memberof card.Items
         * @instance
         */
        Items.prototype.name = "";

        /**
         * Items type.
         * @member {string} type
         * @memberof card.Items
         * @instance
         */
        Items.prototype.type = "";

        /**
         * Items cluster_name.
         * @member {string} cluster_name
         * @memberof card.Items
         * @instance
         */
        Items.prototype.cluster_name = "";

        /**
         * Items items.
         * @member {Array.<container.Item>} items
         * @memberof card.Items
         * @instance
         */
        Items.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified Items message. Does not implicitly {@link card.Items.verify|verify} messages.
         * @function encode
         * @memberof card.Items
         * @static
         * @param {card.Items} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.namespace);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.type);
            if (message.cluster_name != null && Object.hasOwnProperty.call(message, "cluster_name"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.cluster_name);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.container.Item.encode(message.items[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof card.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.Items();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 3: {
                        message.namespace = reader.string();
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                case 5: {
                        message.type = reader.string();
                        break;
                    }
                case 6: {
                        message.cluster_name = reader.string();
                        break;
                    }
                case 7: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.container.Item.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof card.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.Items";
        };

        return Items;
    })();

    card.ItemsList = (function() {

        /**
         * Properties of an ItemsList.
         * @memberof card
         * @interface IItemsList
         * @property {number|null} [cluster_id] ItemsList cluster_id
         * @property {string|null} [namespace] ItemsList namespace
         * @property {string|null} [cluster_name] ItemsList cluster_name
         * @property {Array.<card.Items>|null} [items] ItemsList items
         */

        /**
         * Constructs a new ItemsList.
         * @memberof card
         * @classdesc Represents an ItemsList.
         * @implements IItemsList
         * @constructor
         * @param {card.IItemsList=} [properties] Properties to set
         */
        function ItemsList(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemsList cluster_id.
         * @member {number} cluster_id
         * @memberof card.ItemsList
         * @instance
         */
        ItemsList.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemsList namespace.
         * @member {string} namespace
         * @memberof card.ItemsList
         * @instance
         */
        ItemsList.prototype.namespace = "";

        /**
         * ItemsList cluster_name.
         * @member {string} cluster_name
         * @memberof card.ItemsList
         * @instance
         */
        ItemsList.prototype.cluster_name = "";

        /**
         * ItemsList items.
         * @member {Array.<card.Items>} items
         * @memberof card.ItemsList
         * @instance
         */
        ItemsList.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ItemsList message. Does not implicitly {@link card.ItemsList.verify|verify} messages.
         * @function encode
         * @memberof card.ItemsList
         * @static
         * @param {card.ItemsList} message ItemsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemsList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.cluster_name != null && Object.hasOwnProperty.call(message, "cluster_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.cluster_name);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.card.Items.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ItemsList message from the specified reader or buffer.
         * @function decode
         * @memberof card.ItemsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.ItemsList} ItemsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemsList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.ItemsList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.cluster_name = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.card.Items.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ItemsList
         * @function getTypeUrl
         * @memberof card.ItemsList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ItemsList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.ItemsList";
        };

        return ItemsList;
    })();

    card.ListResponse = (function() {

        /**
         * Properties of a ListResponse.
         * @memberof card
         * @interface IListResponse
         * @property {number|null} [page] ListResponse page
         * @property {number|null} [page_size] ListResponse page_size
         * @property {number|null} [count] ListResponse count
         * @property {Array.<card.Items>|null} [items] ListResponse items
         */

        /**
         * Constructs a new ListResponse.
         * @memberof card
         * @classdesc Represents a ListResponse.
         * @implements IListResponse
         * @constructor
         * @param {card.IListResponse=} [properties] Properties to set
         */
        function ListResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListResponse page.
         * @member {number} page
         * @memberof card.ListResponse
         * @instance
         */
        ListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse page_size.
         * @member {number} page_size
         * @memberof card.ListResponse
         * @instance
         */
        ListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse count.
         * @member {number} count
         * @memberof card.ListResponse
         * @instance
         */
        ListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse items.
         * @member {Array.<card.Items>} items
         * @memberof card.ListResponse
         * @instance
         */
        ListResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link card.ListResponse.verify|verify} messages.
         * @function encode
         * @memberof card.ListResponse
         * @static
         * @param {card.ListResponse} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.count);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.card.Items.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof card.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.ListResponse} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.ListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                case 3: {
                        message.count = reader.int64();
                        break;
                    }
                case 4: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.card.Items.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListResponse
         * @function getTypeUrl
         * @memberof card.ListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.ListResponse";
        };

        return ListResponse;
    })();

    card.CreateRequest = (function() {

        /**
         * Properties of a CreateRequest.
         * @memberof card
         * @interface ICreateRequest
         * @property {number|null} [cluster_id] CreateRequest cluster_id
         * @property {string|null} [namespace] CreateRequest namespace
         * @property {string|null} [name] CreateRequest name
         * @property {string|null} [type] CreateRequest type
         */

        /**
         * Constructs a new CreateRequest.
         * @memberof card
         * @classdesc Represents a CreateRequest.
         * @implements ICreateRequest
         * @constructor
         * @param {card.ICreateRequest=} [properties] Properties to set
         */
        function CreateRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRequest cluster_id.
         * @member {number} cluster_id
         * @memberof card.CreateRequest
         * @instance
         */
        CreateRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateRequest namespace.
         * @member {string} namespace
         * @memberof card.CreateRequest
         * @instance
         */
        CreateRequest.prototype.namespace = "";

        /**
         * CreateRequest name.
         * @member {string} name
         * @memberof card.CreateRequest
         * @instance
         */
        CreateRequest.prototype.name = "";

        /**
         * CreateRequest type.
         * @member {string} type
         * @memberof card.CreateRequest
         * @instance
         */
        CreateRequest.prototype.type = "";

        /**
         * Encodes the specified CreateRequest message. Does not implicitly {@link card.CreateRequest.verify|verify} messages.
         * @function encode
         * @memberof card.CreateRequest
         * @static
         * @param {card.CreateRequest} message CreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.type);
            return writer;
        };

        /**
         * Decodes a CreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof card.CreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.CreateRequest} CreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.CreateRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.type = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for CreateRequest
         * @function getTypeUrl
         * @memberof card.CreateRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.CreateRequest";
        };

        return CreateRequest;
    })();

    card.CreateResponse = (function() {

        /**
         * Properties of a CreateResponse.
         * @memberof card
         * @interface ICreateResponse
         * @property {number|null} [id] CreateResponse id
         * @property {string|null} [type] CreateResponse type
         * @property {string|null} [namespace] CreateResponse namespace
         * @property {string|null} [name] CreateResponse name
         * @property {number|null} [cluster_id] CreateResponse cluster_id
         * @property {string|null} [created_at] CreateResponse created_at
         * @property {string|null} [updated_at] CreateResponse updated_at
         * @property {string|null} [deleted_at] CreateResponse deleted_at
         */

        /**
         * Constructs a new CreateResponse.
         * @memberof card
         * @classdesc Represents a CreateResponse.
         * @implements ICreateResponse
         * @constructor
         * @param {card.ICreateResponse=} [properties] Properties to set
         */
        function CreateResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateResponse id.
         * @member {number} id
         * @memberof card.CreateResponse
         * @instance
         */
        CreateResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateResponse type.
         * @member {string} type
         * @memberof card.CreateResponse
         * @instance
         */
        CreateResponse.prototype.type = "";

        /**
         * CreateResponse namespace.
         * @member {string} namespace
         * @memberof card.CreateResponse
         * @instance
         */
        CreateResponse.prototype.namespace = "";

        /**
         * CreateResponse name.
         * @member {string} name
         * @memberof card.CreateResponse
         * @instance
         */
        CreateResponse.prototype.name = "";

        /**
         * CreateResponse cluster_id.
         * @member {number} cluster_id
         * @memberof card.CreateResponse
         * @instance
         */
        CreateResponse.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateResponse created_at.
         * @member {string} created_at
         * @memberof card.CreateResponse
         * @instance
         */
        CreateResponse.prototype.created_at = "";

        /**
         * CreateResponse updated_at.
         * @member {string} updated_at
         * @memberof card.CreateResponse
         * @instance
         */
        CreateResponse.prototype.updated_at = "";

        /**
         * CreateResponse deleted_at.
         * @member {string} deleted_at
         * @memberof card.CreateResponse
         * @instance
         */
        CreateResponse.prototype.deleted_at = "";

        /**
         * Encodes the specified CreateResponse message. Does not implicitly {@link card.CreateResponse.verify|verify} messages.
         * @function encode
         * @memberof card.CreateResponse
         * @static
         * @param {card.CreateResponse} message CreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.namespace);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.cluster_id);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.created_at);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.updated_at);
            if (message.deleted_at != null && Object.hasOwnProperty.call(message, "deleted_at"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.deleted_at);
            return writer;
        };

        /**
         * Decodes a CreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof card.CreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.CreateResponse} CreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.CreateResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.namespace = reader.string();
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                case 6: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 7: {
                        message.created_at = reader.string();
                        break;
                    }
                case 8: {
                        message.updated_at = reader.string();
                        break;
                    }
                case 9: {
                        message.deleted_at = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for CreateResponse
         * @function getTypeUrl
         * @memberof card.CreateResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.CreateResponse";
        };

        return CreateResponse;
    })();

    card.ShowRequest = (function() {

        /**
         * Properties of a ShowRequest.
         * @memberof card
         * @interface IShowRequest
         * @property {number|null} [card_id] ShowRequest card_id
         */

        /**
         * Constructs a new ShowRequest.
         * @memberof card
         * @classdesc Represents a ShowRequest.
         * @implements IShowRequest
         * @constructor
         * @param {card.IShowRequest=} [properties] Properties to set
         */
        function ShowRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShowRequest card_id.
         * @member {number} card_id
         * @memberof card.ShowRequest
         * @instance
         */
        ShowRequest.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ShowRequest message. Does not implicitly {@link card.ShowRequest.verify|verify} messages.
         * @function encode
         * @memberof card.ShowRequest
         * @static
         * @param {card.ShowRequest} message ShowRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.card_id);
            return writer;
        };

        /**
         * Decodes a ShowRequest message from the specified reader or buffer.
         * @function decode
         * @memberof card.ShowRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.ShowRequest} ShowRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.ShowRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.card_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ShowRequest
         * @function getTypeUrl
         * @memberof card.ShowRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShowRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.ShowRequest";
        };

        return ShowRequest;
    })();

    card.ShowResponse = (function() {

        /**
         * Properties of a ShowResponse.
         * @memberof card
         * @interface IShowResponse
         * @property {number|null} [id] ShowResponse id
         * @property {string|null} [type] ShowResponse type
         * @property {string|null} [namespace] ShowResponse namespace
         * @property {string|null} [name] ShowResponse name
         * @property {number|null} [cluster_id] ShowResponse cluster_id
         * @property {string|null} [created_at] ShowResponse created_at
         * @property {string|null} [updated_at] ShowResponse updated_at
         * @property {string|null} [deleted_at] ShowResponse deleted_at
         * @property {Array.<container.Item>|null} [items] ShowResponse items
         */

        /**
         * Constructs a new ShowResponse.
         * @memberof card
         * @classdesc Represents a ShowResponse.
         * @implements IShowResponse
         * @constructor
         * @param {card.IShowResponse=} [properties] Properties to set
         */
        function ShowResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShowResponse id.
         * @member {number} id
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ShowResponse type.
         * @member {string} type
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.type = "";

        /**
         * ShowResponse namespace.
         * @member {string} namespace
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.namespace = "";

        /**
         * ShowResponse name.
         * @member {string} name
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.name = "";

        /**
         * ShowResponse cluster_id.
         * @member {number} cluster_id
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ShowResponse created_at.
         * @member {string} created_at
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.created_at = "";

        /**
         * ShowResponse updated_at.
         * @member {string} updated_at
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.updated_at = "";

        /**
         * ShowResponse deleted_at.
         * @member {string} deleted_at
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.deleted_at = "";

        /**
         * ShowResponse items.
         * @member {Array.<container.Item>} items
         * @memberof card.ShowResponse
         * @instance
         */
        ShowResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ShowResponse message. Does not implicitly {@link card.ShowResponse.verify|verify} messages.
         * @function encode
         * @memberof card.ShowResponse
         * @static
         * @param {card.ShowResponse} message ShowResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.namespace);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.cluster_id);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.created_at);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.updated_at);
            if (message.deleted_at != null && Object.hasOwnProperty.call(message, "deleted_at"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.deleted_at);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.container.Item.encode(message.items[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ShowResponse message from the specified reader or buffer.
         * @function decode
         * @memberof card.ShowResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.ShowResponse} ShowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.ShowResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.namespace = reader.string();
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                case 6: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 7: {
                        message.created_at = reader.string();
                        break;
                    }
                case 8: {
                        message.updated_at = reader.string();
                        break;
                    }
                case 9: {
                        message.deleted_at = reader.string();
                        break;
                    }
                case 10: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.container.Item.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ShowResponse
         * @function getTypeUrl
         * @memberof card.ShowResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShowResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.ShowResponse";
        };

        return ShowResponse;
    })();

    card.DeleteRequest = (function() {

        /**
         * Properties of a DeleteRequest.
         * @memberof card
         * @interface IDeleteRequest
         * @property {number|null} [card_id] DeleteRequest card_id
         */

        /**
         * Constructs a new DeleteRequest.
         * @memberof card
         * @classdesc Represents a DeleteRequest.
         * @implements IDeleteRequest
         * @constructor
         * @param {card.IDeleteRequest=} [properties] Properties to set
         */
        function DeleteRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteRequest card_id.
         * @member {number} card_id
         * @memberof card.DeleteRequest
         * @instance
         */
        DeleteRequest.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link card.DeleteRequest.verify|verify} messages.
         * @function encode
         * @memberof card.DeleteRequest
         * @static
         * @param {card.DeleteRequest} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.card_id);
            return writer;
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof card.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.DeleteRequest} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.DeleteRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.card_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DeleteRequest
         * @function getTypeUrl
         * @memberof card.DeleteRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.DeleteRequest";
        };

        return DeleteRequest;
    })();

    card.DeleteResponse = (function() {

        /**
         * Properties of a DeleteResponse.
         * @memberof card
         * @interface IDeleteResponse
         */

        /**
         * Constructs a new DeleteResponse.
         * @memberof card
         * @classdesc Represents a DeleteResponse.
         * @implements IDeleteResponse
         * @constructor
         * @param {card.IDeleteResponse=} [properties] Properties to set
         */
        function DeleteResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified DeleteResponse message. Does not implicitly {@link card.DeleteResponse.verify|verify} messages.
         * @function encode
         * @memberof card.DeleteResponse
         * @static
         * @param {card.DeleteResponse} message DeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof card.DeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.DeleteResponse} DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.DeleteResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DeleteResponse
         * @function getTypeUrl
         * @memberof card.DeleteResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.DeleteResponse";
        };

        return DeleteResponse;
    })();

    card.CardSvc = (function() {

        /**
         * Constructs a new CardSvc service.
         * @memberof card
         * @classdesc Represents a CardSvc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CardSvc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CardSvc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CardSvc;

        /**
         * Callback as used by {@link card.CardSvc#all}.
         * @memberof card.CardSvc
         * @typedef AllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {card.AllResponse} [response] AllResponse
         */

        /**
         * Calls All.
         * @function all
         * @memberof card.CardSvc
         * @instance
         * @param {card.AllRequest} request AllRequest message or plain object
         * @param {card.CardSvc.AllCallback} callback Node-style callback called with the error, if any, and AllResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CardSvc.prototype.all = function all(request, callback) {
            return this.rpcCall(all, $root.card.AllRequest, $root.card.AllResponse, request, callback);
        }, "name", { value: "All" });

        /**
         * Calls All.
         * @function all
         * @memberof card.CardSvc
         * @instance
         * @param {card.AllRequest} request AllRequest message or plain object
         * @returns {Promise<card.AllResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link card.CardSvc#create}.
         * @memberof card.CardSvc
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {card.CreateResponse} [response] CreateResponse
         */

        /**
         * Calls Create.
         * @function create
         * @memberof card.CardSvc
         * @instance
         * @param {card.CreateRequest} request CreateRequest message or plain object
         * @param {card.CardSvc.CreateCallback} callback Node-style callback called with the error, if any, and CreateResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CardSvc.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.card.CreateRequest, $root.card.CreateResponse, request, callback);
        }, "name", { value: "Create" });

        /**
         * Calls Create.
         * @function create
         * @memberof card.CardSvc
         * @instance
         * @param {card.CreateRequest} request CreateRequest message or plain object
         * @returns {Promise<card.CreateResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link card.CardSvc#show}.
         * @memberof card.CardSvc
         * @typedef ShowCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {card.ShowResponse} [response] ShowResponse
         */

        /**
         * Calls Show.
         * @function show
         * @memberof card.CardSvc
         * @instance
         * @param {card.ShowRequest} request ShowRequest message or plain object
         * @param {card.CardSvc.ShowCallback} callback Node-style callback called with the error, if any, and ShowResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CardSvc.prototype.show = function show(request, callback) {
            return this.rpcCall(show, $root.card.ShowRequest, $root.card.ShowResponse, request, callback);
        }, "name", { value: "Show" });

        /**
         * Calls Show.
         * @function show
         * @memberof card.CardSvc
         * @instance
         * @param {card.ShowRequest} request ShowRequest message or plain object
         * @returns {Promise<card.ShowResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link card.CardSvc#delete_}.
         * @memberof card.CardSvc
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {card.DeleteResponse} [response] DeleteResponse
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof card.CardSvc
         * @instance
         * @param {card.DeleteRequest} request DeleteRequest message or plain object
         * @param {card.CardSvc.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CardSvc.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.card.DeleteRequest, $root.card.DeleteResponse, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof card.CardSvc
         * @instance
         * @param {card.DeleteRequest} request DeleteRequest message or plain object
         * @returns {Promise<card.DeleteResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link card.CardSvc#allContainers}.
         * @memberof card.CardSvc
         * @typedef AllContainersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {card.AllContainersResponse} [response] AllContainersResponse
         */

        /**
         * Calls AllContainers.
         * @function allContainers
         * @memberof card.CardSvc
         * @instance
         * @param {card.AllContainersRequest} request AllContainersRequest message or plain object
         * @param {card.CardSvc.AllContainersCallback} callback Node-style callback called with the error, if any, and AllContainersResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CardSvc.prototype.allContainers = function allContainers(request, callback) {
            return this.rpcCall(allContainers, $root.card.AllContainersRequest, $root.card.AllContainersResponse, request, callback);
        }, "name", { value: "AllContainers" });

        /**
         * Calls AllContainers.
         * @function allContainers
         * @memberof card.CardSvc
         * @instance
         * @param {card.AllContainersRequest} request AllContainersRequest message or plain object
         * @returns {Promise<card.AllContainersResponse>} Promise
         * @variation 2
         */

        return CardSvc;
    })();

    card.AllContainersRequest = (function() {

        /**
         * Properties of an AllContainersRequest.
         * @memberof card
         * @interface IAllContainersRequest
         * @property {number|null} [card_id] AllContainersRequest card_id
         */

        /**
         * Constructs a new AllContainersRequest.
         * @memberof card
         * @classdesc Represents an AllContainersRequest.
         * @implements IAllContainersRequest
         * @constructor
         * @param {card.IAllContainersRequest=} [properties] Properties to set
         */
        function AllContainersRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllContainersRequest card_id.
         * @member {number} card_id
         * @memberof card.AllContainersRequest
         * @instance
         */
        AllContainersRequest.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified AllContainersRequest message. Does not implicitly {@link card.AllContainersRequest.verify|verify} messages.
         * @function encode
         * @memberof card.AllContainersRequest
         * @static
         * @param {card.AllContainersRequest} message AllContainersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllContainersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.card_id);
            return writer;
        };

        /**
         * Decodes an AllContainersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof card.AllContainersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.AllContainersRequest} AllContainersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllContainersRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.AllContainersRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.card_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for AllContainersRequest
         * @function getTypeUrl
         * @memberof card.AllContainersRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AllContainersRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.AllContainersRequest";
        };

        return AllContainersRequest;
    })();

    card.AllContainersResponse = (function() {

        /**
         * Properties of an AllContainersResponse.
         * @memberof card
         * @interface IAllContainersResponse
         * @property {Array.<container.Item>|null} [items] AllContainersResponse items
         */

        /**
         * Constructs a new AllContainersResponse.
         * @memberof card
         * @classdesc Represents an AllContainersResponse.
         * @implements IAllContainersResponse
         * @constructor
         * @param {card.IAllContainersResponse=} [properties] Properties to set
         */
        function AllContainersResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllContainersResponse items.
         * @member {Array.<container.Item>} items
         * @memberof card.AllContainersResponse
         * @instance
         */
        AllContainersResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified AllContainersResponse message. Does not implicitly {@link card.AllContainersResponse.verify|verify} messages.
         * @function encode
         * @memberof card.AllContainersResponse
         * @static
         * @param {card.AllContainersResponse} message AllContainersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllContainersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.container.Item.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AllContainersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof card.AllContainersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {card.AllContainersResponse} AllContainersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllContainersResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.card.AllContainersResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.container.Item.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for AllContainersResponse
         * @function getTypeUrl
         * @memberof card.AllContainersResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AllContainersResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/card.AllContainersResponse";
        };

        return AllContainersResponse;
    })();

    return card;
})();

export const cluster = $root.cluster = (() => {

    /**
     * Namespace cluster.
     * @exports cluster
     * @namespace
     */
    const cluster = {};

    cluster.ListRequest = (function() {

        /**
         * Properties of a ListRequest.
         * @memberof cluster
         * @interface IListRequest
         * @property {number|null} [page] ListRequest page
         * @property {number|null} [page_size] ListRequest page_size
         */

        /**
         * Constructs a new ListRequest.
         * @memberof cluster
         * @classdesc Represents a ListRequest.
         * @implements IListRequest
         * @constructor
         * @param {cluster.IListRequest=} [properties] Properties to set
         */
        function ListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListRequest page.
         * @member {number} page
         * @memberof cluster.ListRequest
         * @instance
         */
        ListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListRequest page_size.
         * @member {number} page_size
         * @memberof cluster.ListRequest
         * @instance
         */
        ListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link cluster.ListRequest.verify|verify} messages.
         * @function encode
         * @memberof cluster.ListRequest
         * @static
         * @param {cluster.ListRequest} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            return writer;
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.ListRequest} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.ListRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListRequest
         * @function getTypeUrl
         * @memberof cluster.ListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.ListRequest";
        };

        return ListRequest;
    })();

    cluster.ListResponse = (function() {

        /**
         * Properties of a ListResponse.
         * @memberof cluster
         * @interface IListResponse
         * @property {number|null} [page] ListResponse page
         * @property {number|null} [page_size] ListResponse page_size
         * @property {number|null} [count] ListResponse count
         * @property {Array.<model.ClusterModel>|null} [items] ListResponse items
         */

        /**
         * Constructs a new ListResponse.
         * @memberof cluster
         * @classdesc Represents a ListResponse.
         * @implements IListResponse
         * @constructor
         * @param {cluster.IListResponse=} [properties] Properties to set
         */
        function ListResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListResponse page.
         * @member {number} page
         * @memberof cluster.ListResponse
         * @instance
         */
        ListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse page_size.
         * @member {number} page_size
         * @memberof cluster.ListResponse
         * @instance
         */
        ListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse count.
         * @member {number} count
         * @memberof cluster.ListResponse
         * @instance
         */
        ListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse items.
         * @member {Array.<model.ClusterModel>} items
         * @memberof cluster.ListResponse
         * @instance
         */
        ListResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link cluster.ListResponse.verify|verify} messages.
         * @function encode
         * @memberof cluster.ListResponse
         * @static
         * @param {cluster.ListResponse} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.count);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.model.ClusterModel.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.ListResponse} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.ListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                case 3: {
                        message.count = reader.int64();
                        break;
                    }
                case 4: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.model.ClusterModel.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListResponse
         * @function getTypeUrl
         * @memberof cluster.ListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.ListResponse";
        };

        return ListResponse;
    })();

    cluster.CreateRequest = (function() {

        /**
         * Properties of a CreateRequest.
         * @memberof cluster
         * @interface ICreateRequest
         * @property {string|null} [name] CreateRequest name
         * @property {string|null} [kube_config] CreateRequest kube_config
         * @property {string|null} [namespace] CreateRequest namespace
         */

        /**
         * Constructs a new CreateRequest.
         * @memberof cluster
         * @classdesc Represents a CreateRequest.
         * @implements ICreateRequest
         * @constructor
         * @param {cluster.ICreateRequest=} [properties] Properties to set
         */
        function CreateRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRequest name.
         * @member {string} name
         * @memberof cluster.CreateRequest
         * @instance
         */
        CreateRequest.prototype.name = "";

        /**
         * CreateRequest kube_config.
         * @member {string} kube_config
         * @memberof cluster.CreateRequest
         * @instance
         */
        CreateRequest.prototype.kube_config = "";

        /**
         * CreateRequest namespace.
         * @member {string} namespace
         * @memberof cluster.CreateRequest
         * @instance
         */
        CreateRequest.prototype.namespace = "";

        /**
         * Encodes the specified CreateRequest message. Does not implicitly {@link cluster.CreateRequest.verify|verify} messages.
         * @function encode
         * @memberof cluster.CreateRequest
         * @static
         * @param {cluster.CreateRequest} message CreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.kube_config != null && Object.hasOwnProperty.call(message, "kube_config"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.kube_config);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.namespace);
            return writer;
        };

        /**
         * Decodes a CreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.CreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.CreateRequest} CreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.CreateRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.kube_config = reader.string();
                        break;
                    }
                case 3: {
                        message.namespace = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for CreateRequest
         * @function getTypeUrl
         * @memberof cluster.CreateRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.CreateRequest";
        };

        return CreateRequest;
    })();

    cluster.CreateResponse = (function() {

        /**
         * Properties of a CreateResponse.
         * @memberof cluster
         * @interface ICreateResponse
         * @property {number|null} [id] CreateResponse id
         * @property {string|null} [name] CreateResponse name
         * @property {string|null} [created_at] CreateResponse created_at
         * @property {string|null} [updated_at] CreateResponse updated_at
         * @property {string|null} [deleted_at] CreateResponse deleted_at
         */

        /**
         * Constructs a new CreateResponse.
         * @memberof cluster
         * @classdesc Represents a CreateResponse.
         * @implements ICreateResponse
         * @constructor
         * @param {cluster.ICreateResponse=} [properties] Properties to set
         */
        function CreateResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateResponse id.
         * @member {number} id
         * @memberof cluster.CreateResponse
         * @instance
         */
        CreateResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateResponse name.
         * @member {string} name
         * @memberof cluster.CreateResponse
         * @instance
         */
        CreateResponse.prototype.name = "";

        /**
         * CreateResponse created_at.
         * @member {string} created_at
         * @memberof cluster.CreateResponse
         * @instance
         */
        CreateResponse.prototype.created_at = "";

        /**
         * CreateResponse updated_at.
         * @member {string} updated_at
         * @memberof cluster.CreateResponse
         * @instance
         */
        CreateResponse.prototype.updated_at = "";

        /**
         * CreateResponse deleted_at.
         * @member {string} deleted_at
         * @memberof cluster.CreateResponse
         * @instance
         */
        CreateResponse.prototype.deleted_at = "";

        /**
         * Encodes the specified CreateResponse message. Does not implicitly {@link cluster.CreateResponse.verify|verify} messages.
         * @function encode
         * @memberof cluster.CreateResponse
         * @static
         * @param {cluster.CreateResponse} message CreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.created_at);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.updated_at);
            if (message.deleted_at != null && Object.hasOwnProperty.call(message, "deleted_at"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.deleted_at);
            return writer;
        };

        /**
         * Decodes a CreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.CreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.CreateResponse} CreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.CreateResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.created_at = reader.string();
                        break;
                    }
                case 5: {
                        message.updated_at = reader.string();
                        break;
                    }
                case 6: {
                        message.deleted_at = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for CreateResponse
         * @function getTypeUrl
         * @memberof cluster.CreateResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.CreateResponse";
        };

        return CreateResponse;
    })();

    cluster.ShowRequest = (function() {

        /**
         * Properties of a ShowRequest.
         * @memberof cluster
         * @interface IShowRequest
         * @property {number|null} [cluster_id] ShowRequest cluster_id
         */

        /**
         * Constructs a new ShowRequest.
         * @memberof cluster
         * @classdesc Represents a ShowRequest.
         * @implements IShowRequest
         * @constructor
         * @param {cluster.IShowRequest=} [properties] Properties to set
         */
        function ShowRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShowRequest cluster_id.
         * @member {number} cluster_id
         * @memberof cluster.ShowRequest
         * @instance
         */
        ShowRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ShowRequest message. Does not implicitly {@link cluster.ShowRequest.verify|verify} messages.
         * @function encode
         * @memberof cluster.ShowRequest
         * @static
         * @param {cluster.ShowRequest} message ShowRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            return writer;
        };

        /**
         * Decodes a ShowRequest message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.ShowRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.ShowRequest} ShowRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.ShowRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ShowRequest
         * @function getTypeUrl
         * @memberof cluster.ShowRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShowRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.ShowRequest";
        };

        return ShowRequest;
    })();

    cluster.ShowResponse = (function() {

        /**
         * Properties of a ShowResponse.
         * @memberof cluster
         * @interface IShowResponse
         * @property {number|null} [id] ShowResponse id
         * @property {string|null} [name] ShowResponse name
         * @property {string|null} [kube_config] ShowResponse kube_config
         * @property {string|null} [api_server_url] ShowResponse api_server_url
         * @property {string|null} [created_at] ShowResponse created_at
         * @property {string|null} [updated_at] ShowResponse updated_at
         * @property {string|null} [deleted_at] ShowResponse deleted_at
         * @property {Array.<cluster.Items>|null} [items] ShowResponse items
         */

        /**
         * Constructs a new ShowResponse.
         * @memberof cluster
         * @classdesc Represents a ShowResponse.
         * @implements IShowResponse
         * @constructor
         * @param {cluster.IShowResponse=} [properties] Properties to set
         */
        function ShowResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShowResponse id.
         * @member {number} id
         * @memberof cluster.ShowResponse
         * @instance
         */
        ShowResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ShowResponse name.
         * @member {string} name
         * @memberof cluster.ShowResponse
         * @instance
         */
        ShowResponse.prototype.name = "";

        /**
         * ShowResponse kube_config.
         * @member {string} kube_config
         * @memberof cluster.ShowResponse
         * @instance
         */
        ShowResponse.prototype.kube_config = "";

        /**
         * ShowResponse api_server_url.
         * @member {string} api_server_url
         * @memberof cluster.ShowResponse
         * @instance
         */
        ShowResponse.prototype.api_server_url = "";

        /**
         * ShowResponse created_at.
         * @member {string} created_at
         * @memberof cluster.ShowResponse
         * @instance
         */
        ShowResponse.prototype.created_at = "";

        /**
         * ShowResponse updated_at.
         * @member {string} updated_at
         * @memberof cluster.ShowResponse
         * @instance
         */
        ShowResponse.prototype.updated_at = "";

        /**
         * ShowResponse deleted_at.
         * @member {string} deleted_at
         * @memberof cluster.ShowResponse
         * @instance
         */
        ShowResponse.prototype.deleted_at = "";

        /**
         * ShowResponse items.
         * @member {Array.<cluster.Items>} items
         * @memberof cluster.ShowResponse
         * @instance
         */
        ShowResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ShowResponse message. Does not implicitly {@link cluster.ShowResponse.verify|verify} messages.
         * @function encode
         * @memberof cluster.ShowResponse
         * @static
         * @param {cluster.ShowResponse} message ShowResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.kube_config != null && Object.hasOwnProperty.call(message, "kube_config"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.kube_config);
            if (message.api_server_url != null && Object.hasOwnProperty.call(message, "api_server_url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.api_server_url);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.created_at);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updated_at);
            if (message.deleted_at != null && Object.hasOwnProperty.call(message, "deleted_at"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.deleted_at);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.cluster.Items.encode(message.items[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ShowResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.ShowResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.ShowResponse} ShowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.ShowResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.kube_config = reader.string();
                        break;
                    }
                case 4: {
                        message.api_server_url = reader.string();
                        break;
                    }
                case 5: {
                        message.created_at = reader.string();
                        break;
                    }
                case 6: {
                        message.updated_at = reader.string();
                        break;
                    }
                case 7: {
                        message.deleted_at = reader.string();
                        break;
                    }
                case 8: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.cluster.Items.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ShowResponse
         * @function getTypeUrl
         * @memberof cluster.ShowResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShowResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.ShowResponse";
        };

        return ShowResponse;
    })();

    cluster.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof cluster
         * @interface IItem
         * @property {string|null} [namespace] Item namespace
         * @property {string|null} [type] Item type
         * @property {string|null} [name] Item name
         * @property {boolean|null} [enabled] Item enabled
         * @property {number|null} [cluster_id] Item cluster_id
         * @property {number|null} [card_id] Item card_id
         */

        /**
         * Constructs a new Item.
         * @memberof cluster
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {cluster.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item namespace.
         * @member {string} namespace
         * @memberof cluster.Item
         * @instance
         */
        Item.prototype.namespace = "";

        /**
         * Item type.
         * @member {string} type
         * @memberof cluster.Item
         * @instance
         */
        Item.prototype.type = "";

        /**
         * Item name.
         * @member {string} name
         * @memberof cluster.Item
         * @instance
         */
        Item.prototype.name = "";

        /**
         * Item enabled.
         * @member {boolean} enabled
         * @memberof cluster.Item
         * @instance
         */
        Item.prototype.enabled = false;

        /**
         * Item cluster_id.
         * @member {number} cluster_id
         * @memberof cluster.Item
         * @instance
         */
        Item.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Item card_id.
         * @member {number} card_id
         * @memberof cluster.Item
         * @instance
         */
        Item.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified Item message. Does not implicitly {@link cluster.Item.verify|verify} messages.
         * @function encode
         * @memberof cluster.Item
         * @static
         * @param {cluster.Item} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enabled);
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.cluster_id);
            if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.card_id);
            return writer;
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.Item();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.namespace = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.enabled = reader.bool();
                        break;
                    }
                case 5: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 6: {
                        message.card_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Item
         * @function getTypeUrl
         * @memberof cluster.Item
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.Item";
        };

        return Item;
    })();

    cluster.Items = (function() {

        /**
         * Properties of an Items.
         * @memberof cluster
         * @interface IItems
         * @property {string|null} [namespace] Items namespace
         * @property {Array.<cluster.Item>|null} [items] Items items
         */

        /**
         * Constructs a new Items.
         * @memberof cluster
         * @classdesc Represents an Items.
         * @implements IItems
         * @constructor
         * @param {cluster.IItems=} [properties] Properties to set
         */
        function Items(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Items namespace.
         * @member {string} namespace
         * @memberof cluster.Items
         * @instance
         */
        Items.prototype.namespace = "";

        /**
         * Items items.
         * @member {Array.<cluster.Item>} items
         * @memberof cluster.Items
         * @instance
         */
        Items.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified Items message. Does not implicitly {@link cluster.Items.verify|verify} messages.
         * @function encode
         * @memberof cluster.Items
         * @static
         * @param {cluster.Items} message Items message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Items.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.cluster.Item.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.Items
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.Items} Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Items.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.Items();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.namespace = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.cluster.Item.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Items
         * @function getTypeUrl
         * @memberof cluster.Items
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.Items";
        };

        return Items;
    })();

    cluster.DeleteRequest = (function() {

        /**
         * Properties of a DeleteRequest.
         * @memberof cluster
         * @interface IDeleteRequest
         * @property {number|null} [cluster_id] DeleteRequest cluster_id
         */

        /**
         * Constructs a new DeleteRequest.
         * @memberof cluster
         * @classdesc Represents a DeleteRequest.
         * @implements IDeleteRequest
         * @constructor
         * @param {cluster.IDeleteRequest=} [properties] Properties to set
         */
        function DeleteRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteRequest cluster_id.
         * @member {number} cluster_id
         * @memberof cluster.DeleteRequest
         * @instance
         */
        DeleteRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link cluster.DeleteRequest.verify|verify} messages.
         * @function encode
         * @memberof cluster.DeleteRequest
         * @static
         * @param {cluster.DeleteRequest} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            return writer;
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.DeleteRequest} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.DeleteRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DeleteRequest
         * @function getTypeUrl
         * @memberof cluster.DeleteRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.DeleteRequest";
        };

        return DeleteRequest;
    })();

    cluster.DeleteResponse = (function() {

        /**
         * Properties of a DeleteResponse.
         * @memberof cluster
         * @interface IDeleteResponse
         */

        /**
         * Constructs a new DeleteResponse.
         * @memberof cluster
         * @classdesc Represents a DeleteResponse.
         * @implements IDeleteResponse
         * @constructor
         * @param {cluster.IDeleteResponse=} [properties] Properties to set
         */
        function DeleteResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified DeleteResponse message. Does not implicitly {@link cluster.DeleteResponse.verify|verify} messages.
         * @function encode
         * @memberof cluster.DeleteResponse
         * @static
         * @param {cluster.DeleteResponse} message DeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof cluster.DeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cluster.DeleteResponse} DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.cluster.DeleteResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DeleteResponse
         * @function getTypeUrl
         * @memberof cluster.DeleteResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/cluster.DeleteResponse";
        };

        return DeleteResponse;
    })();

    cluster.ClusterSvc = (function() {

        /**
         * Constructs a new ClusterSvc service.
         * @memberof cluster
         * @classdesc Represents a ClusterSvc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ClusterSvc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ClusterSvc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ClusterSvc;

        /**
         * Callback as used by {@link cluster.ClusterSvc#list}.
         * @memberof cluster.ClusterSvc
         * @typedef ListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {cluster.ListResponse} [response] ListResponse
         */

        /**
         * Calls List.
         * @function list
         * @memberof cluster.ClusterSvc
         * @instance
         * @param {cluster.ListRequest} request ListRequest message or plain object
         * @param {cluster.ClusterSvc.ListCallback} callback Node-style callback called with the error, if any, and ListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClusterSvc.prototype.list = function list(request, callback) {
            return this.rpcCall(list, $root.cluster.ListRequest, $root.cluster.ListResponse, request, callback);
        }, "name", { value: "List" });

        /**
         * Calls List.
         * @function list
         * @memberof cluster.ClusterSvc
         * @instance
         * @param {cluster.ListRequest} request ListRequest message or plain object
         * @returns {Promise<cluster.ListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link cluster.ClusterSvc#create}.
         * @memberof cluster.ClusterSvc
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {cluster.CreateResponse} [response] CreateResponse
         */

        /**
         * Calls Create.
         * @function create
         * @memberof cluster.ClusterSvc
         * @instance
         * @param {cluster.CreateRequest} request CreateRequest message or plain object
         * @param {cluster.ClusterSvc.CreateCallback} callback Node-style callback called with the error, if any, and CreateResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClusterSvc.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.cluster.CreateRequest, $root.cluster.CreateResponse, request, callback);
        }, "name", { value: "Create" });

        /**
         * Calls Create.
         * @function create
         * @memberof cluster.ClusterSvc
         * @instance
         * @param {cluster.CreateRequest} request CreateRequest message or plain object
         * @returns {Promise<cluster.CreateResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link cluster.ClusterSvc#show}.
         * @memberof cluster.ClusterSvc
         * @typedef ShowCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {cluster.ShowResponse} [response] ShowResponse
         */

        /**
         * Calls Show.
         * @function show
         * @memberof cluster.ClusterSvc
         * @instance
         * @param {cluster.ShowRequest} request ShowRequest message or plain object
         * @param {cluster.ClusterSvc.ShowCallback} callback Node-style callback called with the error, if any, and ShowResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClusterSvc.prototype.show = function show(request, callback) {
            return this.rpcCall(show, $root.cluster.ShowRequest, $root.cluster.ShowResponse, request, callback);
        }, "name", { value: "Show" });

        /**
         * Calls Show.
         * @function show
         * @memberof cluster.ClusterSvc
         * @instance
         * @param {cluster.ShowRequest} request ShowRequest message or plain object
         * @returns {Promise<cluster.ShowResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link cluster.ClusterSvc#delete_}.
         * @memberof cluster.ClusterSvc
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {cluster.DeleteResponse} [response] DeleteResponse
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof cluster.ClusterSvc
         * @instance
         * @param {cluster.DeleteRequest} request DeleteRequest message or plain object
         * @param {cluster.ClusterSvc.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ClusterSvc.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.cluster.DeleteRequest, $root.cluster.DeleteResponse, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof cluster.ClusterSvc
         * @instance
         * @param {cluster.DeleteRequest} request DeleteRequest message or plain object
         * @returns {Promise<cluster.DeleteResponse>} Promise
         * @variation 2
         */

        return ClusterSvc;
    })();

    return cluster;
})();

export const container = $root.container = (() => {

    /**
     * Namespace container.
     * @exports container
     * @namespace
     */
    const container = {};

    container.ProxyInfo = (function() {

        /**
         * Properties of a ProxyInfo.
         * @memberof container
         * @interface IProxyInfo
         * @property {string|null} [port] ProxyInfo port
         * @property {string|null} [name] ProxyInfo name
         * @property {string|null} [url] ProxyInfo url
         */

        /**
         * Constructs a new ProxyInfo.
         * @memberof container
         * @classdesc Represents a ProxyInfo.
         * @implements IProxyInfo
         * @constructor
         * @param {container.IProxyInfo=} [properties] Properties to set
         */
        function ProxyInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProxyInfo port.
         * @member {string} port
         * @memberof container.ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.port = "";

        /**
         * ProxyInfo name.
         * @member {string} name
         * @memberof container.ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.name = "";

        /**
         * ProxyInfo url.
         * @member {string} url
         * @memberof container.ProxyInfo
         * @instance
         */
        ProxyInfo.prototype.url = "";

        /**
         * Encodes the specified ProxyInfo message. Does not implicitly {@link container.ProxyInfo.verify|verify} messages.
         * @function encode
         * @memberof container.ProxyInfo
         * @static
         * @param {container.ProxyInfo} message ProxyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.port);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            return writer;
        };

        /**
         * Decodes a ProxyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof container.ProxyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.ProxyInfo} ProxyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.ProxyInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.port = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ProxyInfo
         * @function getTypeUrl
         * @memberof container.ProxyInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProxyInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.ProxyInfo";
        };

        return ProxyInfo;
    })();

    container.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof container
         * @interface IItem
         * @property {number|null} [cluster_id] Item cluster_id
         * @property {string|null} [namespace] Item namespace
         * @property {string|null} [pod] Item pod
         * @property {string|null} [container] Item container
         * @property {Array.<container.ProxyInfo>|null} [proxies] Item proxies
         */

        /**
         * Constructs a new Item.
         * @memberof container
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {container.IItem=} [properties] Properties to set
         */
        function Item(properties) {
            this.proxies = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Item cluster_id.
         * @member {number} cluster_id
         * @memberof container.Item
         * @instance
         */
        Item.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Item namespace.
         * @member {string} namespace
         * @memberof container.Item
         * @instance
         */
        Item.prototype.namespace = "";

        /**
         * Item pod.
         * @member {string} pod
         * @memberof container.Item
         * @instance
         */
        Item.prototype.pod = "";

        /**
         * Item container.
         * @member {string} container
         * @memberof container.Item
         * @instance
         */
        Item.prototype.container = "";

        /**
         * Item proxies.
         * @member {Array.<container.ProxyInfo>} proxies
         * @memberof container.Item
         * @instance
         */
        Item.prototype.proxies = $util.emptyArray;

        /**
         * Encodes the specified Item message. Does not implicitly {@link container.Item.verify|verify} messages.
         * @function encode
         * @memberof container.Item
         * @static
         * @param {container.Item} message Item message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pod);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.container);
            if (message.proxies != null && message.proxies.length)
                for (let i = 0; i < message.proxies.length; ++i)
                    $root.container.ProxyInfo.encode(message.proxies[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof container.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.Item();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.pod = reader.string();
                        break;
                    }
                case 4: {
                        message.container = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.proxies && message.proxies.length))
                            message.proxies = [];
                        message.proxies.push($root.container.ProxyInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Item
         * @function getTypeUrl
         * @memberof container.Item
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.Item";
        };

        return Item;
    })();

    container.CopyToPodRequest = (function() {

        /**
         * Properties of a CopyToPodRequest.
         * @memberof container
         * @interface ICopyToPodRequest
         * @property {number|null} [cluster_id] CopyToPodRequest cluster_id
         * @property {number|null} [file_id] CopyToPodRequest file_id
         * @property {string|null} [namespace] CopyToPodRequest namespace
         * @property {string|null} [pod] CopyToPodRequest pod
         * @property {string|null} [container] CopyToPodRequest container
         */

        /**
         * Constructs a new CopyToPodRequest.
         * @memberof container
         * @classdesc Represents a CopyToPodRequest.
         * @implements ICopyToPodRequest
         * @constructor
         * @param {container.ICopyToPodRequest=} [properties] Properties to set
         */
        function CopyToPodRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CopyToPodRequest cluster_id.
         * @member {number} cluster_id
         * @memberof container.CopyToPodRequest
         * @instance
         */
        CopyToPodRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CopyToPodRequest file_id.
         * @member {number} file_id
         * @memberof container.CopyToPodRequest
         * @instance
         */
        CopyToPodRequest.prototype.file_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CopyToPodRequest namespace.
         * @member {string} namespace
         * @memberof container.CopyToPodRequest
         * @instance
         */
        CopyToPodRequest.prototype.namespace = "";

        /**
         * CopyToPodRequest pod.
         * @member {string} pod
         * @memberof container.CopyToPodRequest
         * @instance
         */
        CopyToPodRequest.prototype.pod = "";

        /**
         * CopyToPodRequest container.
         * @member {string} container
         * @memberof container.CopyToPodRequest
         * @instance
         */
        CopyToPodRequest.prototype.container = "";

        /**
         * Encodes the specified CopyToPodRequest message. Does not implicitly {@link container.CopyToPodRequest.verify|verify} messages.
         * @function encode
         * @memberof container.CopyToPodRequest
         * @static
         * @param {container.CopyToPodRequest} message CopyToPodRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CopyToPodRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.file_id != null && Object.hasOwnProperty.call(message, "file_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.file_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pod);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.container);
            return writer;
        };

        /**
         * Decodes a CopyToPodRequest message from the specified reader or buffer.
         * @function decode
         * @memberof container.CopyToPodRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.CopyToPodRequest} CopyToPodRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CopyToPodRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.CopyToPodRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.file_id = reader.int64();
                        break;
                    }
                case 3: {
                        message.namespace = reader.string();
                        break;
                    }
                case 4: {
                        message.pod = reader.string();
                        break;
                    }
                case 5: {
                        message.container = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for CopyToPodRequest
         * @function getTypeUrl
         * @memberof container.CopyToPodRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CopyToPodRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.CopyToPodRequest";
        };

        return CopyToPodRequest;
    })();

    container.CopyToPodResponse = (function() {

        /**
         * Properties of a CopyToPodResponse.
         * @memberof container
         * @interface ICopyToPodResponse
         * @property {string|null} [pod_file_path] CopyToPodResponse pod_file_path
         * @property {string|null} [output] CopyToPodResponse output
         * @property {string|null} [file_name] CopyToPodResponse file_name
         */

        /**
         * Constructs a new CopyToPodResponse.
         * @memberof container
         * @classdesc Represents a CopyToPodResponse.
         * @implements ICopyToPodResponse
         * @constructor
         * @param {container.ICopyToPodResponse=} [properties] Properties to set
         */
        function CopyToPodResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CopyToPodResponse pod_file_path.
         * @member {string} pod_file_path
         * @memberof container.CopyToPodResponse
         * @instance
         */
        CopyToPodResponse.prototype.pod_file_path = "";

        /**
         * CopyToPodResponse output.
         * @member {string} output
         * @memberof container.CopyToPodResponse
         * @instance
         */
        CopyToPodResponse.prototype.output = "";

        /**
         * CopyToPodResponse file_name.
         * @member {string} file_name
         * @memberof container.CopyToPodResponse
         * @instance
         */
        CopyToPodResponse.prototype.file_name = "";

        /**
         * Encodes the specified CopyToPodResponse message. Does not implicitly {@link container.CopyToPodResponse.verify|verify} messages.
         * @function encode
         * @memberof container.CopyToPodResponse
         * @static
         * @param {container.CopyToPodResponse} message CopyToPodResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CopyToPodResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pod_file_path != null && Object.hasOwnProperty.call(message, "pod_file_path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pod_file_path);
            if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.output);
            if (message.file_name != null && Object.hasOwnProperty.call(message, "file_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.file_name);
            return writer;
        };

        /**
         * Decodes a CopyToPodResponse message from the specified reader or buffer.
         * @function decode
         * @memberof container.CopyToPodResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.CopyToPodResponse} CopyToPodResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CopyToPodResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.CopyToPodResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.pod_file_path = reader.string();
                        break;
                    }
                case 2: {
                        message.output = reader.string();
                        break;
                    }
                case 3: {
                        message.file_name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for CopyToPodResponse
         * @function getTypeUrl
         * @memberof container.CopyToPodResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CopyToPodResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.CopyToPodResponse";
        };

        return CopyToPodResponse;
    })();

    container.ExecRequest = (function() {

        /**
         * Properties of an ExecRequest.
         * @memberof container
         * @interface IExecRequest
         * @property {number|null} [cluster_id] ExecRequest cluster_id
         * @property {string|null} [namespace] ExecRequest namespace
         * @property {string|null} [pod] ExecRequest pod
         * @property {string|null} [container] ExecRequest container
         * @property {Array.<string>|null} [command] ExecRequest command
         */

        /**
         * Constructs a new ExecRequest.
         * @memberof container
         * @classdesc Represents an ExecRequest.
         * @implements IExecRequest
         * @constructor
         * @param {container.IExecRequest=} [properties] Properties to set
         */
        function ExecRequest(properties) {
            this.command = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecRequest cluster_id.
         * @member {number} cluster_id
         * @memberof container.ExecRequest
         * @instance
         */
        ExecRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ExecRequest namespace.
         * @member {string} namespace
         * @memberof container.ExecRequest
         * @instance
         */
        ExecRequest.prototype.namespace = "";

        /**
         * ExecRequest pod.
         * @member {string} pod
         * @memberof container.ExecRequest
         * @instance
         */
        ExecRequest.prototype.pod = "";

        /**
         * ExecRequest container.
         * @member {string} container
         * @memberof container.ExecRequest
         * @instance
         */
        ExecRequest.prototype.container = "";

        /**
         * ExecRequest command.
         * @member {Array.<string>} command
         * @memberof container.ExecRequest
         * @instance
         */
        ExecRequest.prototype.command = $util.emptyArray;

        /**
         * Encodes the specified ExecRequest message. Does not implicitly {@link container.ExecRequest.verify|verify} messages.
         * @function encode
         * @memberof container.ExecRequest
         * @static
         * @param {container.ExecRequest} message ExecRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pod);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.container);
            if (message.command != null && message.command.length)
                for (let i = 0; i < message.command.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.command[i]);
            return writer;
        };

        /**
         * Decodes an ExecRequest message from the specified reader or buffer.
         * @function decode
         * @memberof container.ExecRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.ExecRequest} ExecRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.ExecRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.pod = reader.string();
                        break;
                    }
                case 4: {
                        message.container = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.command && message.command.length))
                            message.command = [];
                        message.command.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ExecRequest
         * @function getTypeUrl
         * @memberof container.ExecRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExecRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.ExecRequest";
        };

        return ExecRequest;
    })();

    container.ExecResponse = (function() {

        /**
         * Properties of an ExecResponse.
         * @memberof container
         * @interface IExecResponse
         * @property {string|null} [data] ExecResponse data
         */

        /**
         * Constructs a new ExecResponse.
         * @memberof container
         * @classdesc Represents an ExecResponse.
         * @implements IExecResponse
         * @constructor
         * @param {container.IExecResponse=} [properties] Properties to set
         */
        function ExecResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecResponse data.
         * @member {string} data
         * @memberof container.ExecResponse
         * @instance
         */
        ExecResponse.prototype.data = "";

        /**
         * Encodes the specified ExecResponse message. Does not implicitly {@link container.ExecResponse.verify|verify} messages.
         * @function encode
         * @memberof container.ExecResponse
         * @static
         * @param {container.ExecResponse} message ExecResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
            return writer;
        };

        /**
         * Decodes an ExecResponse message from the specified reader or buffer.
         * @function decode
         * @memberof container.ExecResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.ExecResponse} ExecResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.ExecResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ExecResponse
         * @function getTypeUrl
         * @memberof container.ExecResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExecResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.ExecResponse";
        };

        return ExecResponse;
    })();

    container.StreamCopyToPodRequest = (function() {

        /**
         * Properties of a StreamCopyToPodRequest.
         * @memberof container
         * @interface IStreamCopyToPodRequest
         * @property {number|null} [cluster_id] StreamCopyToPodRequest cluster_id
         * @property {string|null} [file_name] StreamCopyToPodRequest file_name
         * @property {Uint8Array|null} [data] StreamCopyToPodRequest data
         * @property {string|null} [namespace] StreamCopyToPodRequest namespace
         * @property {string|null} [pod] StreamCopyToPodRequest pod
         * @property {string|null} [container] StreamCopyToPodRequest container
         */

        /**
         * Constructs a new StreamCopyToPodRequest.
         * @memberof container
         * @classdesc Represents a StreamCopyToPodRequest.
         * @implements IStreamCopyToPodRequest
         * @constructor
         * @param {container.IStreamCopyToPodRequest=} [properties] Properties to set
         */
        function StreamCopyToPodRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamCopyToPodRequest cluster_id.
         * @member {number} cluster_id
         * @memberof container.StreamCopyToPodRequest
         * @instance
         */
        StreamCopyToPodRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StreamCopyToPodRequest file_name.
         * @member {string} file_name
         * @memberof container.StreamCopyToPodRequest
         * @instance
         */
        StreamCopyToPodRequest.prototype.file_name = "";

        /**
         * StreamCopyToPodRequest data.
         * @member {Uint8Array} data
         * @memberof container.StreamCopyToPodRequest
         * @instance
         */
        StreamCopyToPodRequest.prototype.data = $util.newBuffer([]);

        /**
         * StreamCopyToPodRequest namespace.
         * @member {string} namespace
         * @memberof container.StreamCopyToPodRequest
         * @instance
         */
        StreamCopyToPodRequest.prototype.namespace = "";

        /**
         * StreamCopyToPodRequest pod.
         * @member {string} pod
         * @memberof container.StreamCopyToPodRequest
         * @instance
         */
        StreamCopyToPodRequest.prototype.pod = "";

        /**
         * StreamCopyToPodRequest container.
         * @member {string} container
         * @memberof container.StreamCopyToPodRequest
         * @instance
         */
        StreamCopyToPodRequest.prototype.container = "";

        /**
         * Encodes the specified StreamCopyToPodRequest message. Does not implicitly {@link container.StreamCopyToPodRequest.verify|verify} messages.
         * @function encode
         * @memberof container.StreamCopyToPodRequest
         * @static
         * @param {container.StreamCopyToPodRequest} message StreamCopyToPodRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamCopyToPodRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.file_name != null && Object.hasOwnProperty.call(message, "file_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.file_name);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.pod);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.container);
            return writer;
        };

        /**
         * Decodes a StreamCopyToPodRequest message from the specified reader or buffer.
         * @function decode
         * @memberof container.StreamCopyToPodRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.StreamCopyToPodRequest} StreamCopyToPodRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamCopyToPodRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.StreamCopyToPodRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.file_name = reader.string();
                        break;
                    }
                case 3: {
                        message.data = reader.bytes();
                        break;
                    }
                case 4: {
                        message.namespace = reader.string();
                        break;
                    }
                case 5: {
                        message.pod = reader.string();
                        break;
                    }
                case 6: {
                        message.container = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for StreamCopyToPodRequest
         * @function getTypeUrl
         * @memberof container.StreamCopyToPodRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StreamCopyToPodRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.StreamCopyToPodRequest";
        };

        return StreamCopyToPodRequest;
    })();

    container.StreamCopyToPodResponse = (function() {

        /**
         * Properties of a StreamCopyToPodResponse.
         * @memberof container
         * @interface IStreamCopyToPodResponse
         * @property {number|null} [size] StreamCopyToPodResponse size
         * @property {string|null} [pod_file_path] StreamCopyToPodResponse pod_file_path
         * @property {string|null} [output] StreamCopyToPodResponse output
         * @property {string|null} [pod] StreamCopyToPodResponse pod
         * @property {string|null} [namespace] StreamCopyToPodResponse namespace
         * @property {string|null} [container] StreamCopyToPodResponse container
         * @property {string|null} [filename] StreamCopyToPodResponse filename
         */

        /**
         * Constructs a new StreamCopyToPodResponse.
         * @memberof container
         * @classdesc Represents a StreamCopyToPodResponse.
         * @implements IStreamCopyToPodResponse
         * @constructor
         * @param {container.IStreamCopyToPodResponse=} [properties] Properties to set
         */
        function StreamCopyToPodResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamCopyToPodResponse size.
         * @member {number} size
         * @memberof container.StreamCopyToPodResponse
         * @instance
         */
        StreamCopyToPodResponse.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StreamCopyToPodResponse pod_file_path.
         * @member {string} pod_file_path
         * @memberof container.StreamCopyToPodResponse
         * @instance
         */
        StreamCopyToPodResponse.prototype.pod_file_path = "";

        /**
         * StreamCopyToPodResponse output.
         * @member {string} output
         * @memberof container.StreamCopyToPodResponse
         * @instance
         */
        StreamCopyToPodResponse.prototype.output = "";

        /**
         * StreamCopyToPodResponse pod.
         * @member {string} pod
         * @memberof container.StreamCopyToPodResponse
         * @instance
         */
        StreamCopyToPodResponse.prototype.pod = "";

        /**
         * StreamCopyToPodResponse namespace.
         * @member {string} namespace
         * @memberof container.StreamCopyToPodResponse
         * @instance
         */
        StreamCopyToPodResponse.prototype.namespace = "";

        /**
         * StreamCopyToPodResponse container.
         * @member {string} container
         * @memberof container.StreamCopyToPodResponse
         * @instance
         */
        StreamCopyToPodResponse.prototype.container = "";

        /**
         * StreamCopyToPodResponse filename.
         * @member {string} filename
         * @memberof container.StreamCopyToPodResponse
         * @instance
         */
        StreamCopyToPodResponse.prototype.filename = "";

        /**
         * Encodes the specified StreamCopyToPodResponse message. Does not implicitly {@link container.StreamCopyToPodResponse.verify|verify} messages.
         * @function encode
         * @memberof container.StreamCopyToPodResponse
         * @static
         * @param {container.StreamCopyToPodResponse} message StreamCopyToPodResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamCopyToPodResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.size);
            if (message.pod_file_path != null && Object.hasOwnProperty.call(message, "pod_file_path"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pod_file_path);
            if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.output);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pod);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.namespace);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.container);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filename);
            return writer;
        };

        /**
         * Decodes a StreamCopyToPodResponse message from the specified reader or buffer.
         * @function decode
         * @memberof container.StreamCopyToPodResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.StreamCopyToPodResponse} StreamCopyToPodResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamCopyToPodResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.StreamCopyToPodResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.size = reader.int64();
                        break;
                    }
                case 2: {
                        message.pod_file_path = reader.string();
                        break;
                    }
                case 3: {
                        message.output = reader.string();
                        break;
                    }
                case 4: {
                        message.pod = reader.string();
                        break;
                    }
                case 5: {
                        message.namespace = reader.string();
                        break;
                    }
                case 6: {
                        message.container = reader.string();
                        break;
                    }
                case 7: {
                        message.filename = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for StreamCopyToPodResponse
         * @function getTypeUrl
         * @memberof container.StreamCopyToPodResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StreamCopyToPodResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.StreamCopyToPodResponse";
        };

        return StreamCopyToPodResponse;
    })();

    container.IsPodRunningRequest = (function() {

        /**
         * Properties of an IsPodRunningRequest.
         * @memberof container
         * @interface IIsPodRunningRequest
         * @property {number|null} [cluster_id] IsPodRunningRequest cluster_id
         * @property {string|null} [namespace] IsPodRunningRequest namespace
         * @property {string|null} [pod] IsPodRunningRequest pod
         */

        /**
         * Constructs a new IsPodRunningRequest.
         * @memberof container
         * @classdesc Represents an IsPodRunningRequest.
         * @implements IIsPodRunningRequest
         * @constructor
         * @param {container.IIsPodRunningRequest=} [properties] Properties to set
         */
        function IsPodRunningRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IsPodRunningRequest cluster_id.
         * @member {number} cluster_id
         * @memberof container.IsPodRunningRequest
         * @instance
         */
        IsPodRunningRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IsPodRunningRequest namespace.
         * @member {string} namespace
         * @memberof container.IsPodRunningRequest
         * @instance
         */
        IsPodRunningRequest.prototype.namespace = "";

        /**
         * IsPodRunningRequest pod.
         * @member {string} pod
         * @memberof container.IsPodRunningRequest
         * @instance
         */
        IsPodRunningRequest.prototype.pod = "";

        /**
         * Encodes the specified IsPodRunningRequest message. Does not implicitly {@link container.IsPodRunningRequest.verify|verify} messages.
         * @function encode
         * @memberof container.IsPodRunningRequest
         * @static
         * @param {container.IsPodRunningRequest} message IsPodRunningRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IsPodRunningRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pod);
            return writer;
        };

        /**
         * Decodes an IsPodRunningRequest message from the specified reader or buffer.
         * @function decode
         * @memberof container.IsPodRunningRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.IsPodRunningRequest} IsPodRunningRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IsPodRunningRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.IsPodRunningRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.pod = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for IsPodRunningRequest
         * @function getTypeUrl
         * @memberof container.IsPodRunningRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IsPodRunningRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.IsPodRunningRequest";
        };

        return IsPodRunningRequest;
    })();

    container.IsPodRunningResponse = (function() {

        /**
         * Properties of an IsPodRunningResponse.
         * @memberof container
         * @interface IIsPodRunningResponse
         * @property {boolean|null} [running] IsPodRunningResponse running
         * @property {string|null} [reason] IsPodRunningResponse reason
         */

        /**
         * Constructs a new IsPodRunningResponse.
         * @memberof container
         * @classdesc Represents an IsPodRunningResponse.
         * @implements IIsPodRunningResponse
         * @constructor
         * @param {container.IIsPodRunningResponse=} [properties] Properties to set
         */
        function IsPodRunningResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IsPodRunningResponse running.
         * @member {boolean} running
         * @memberof container.IsPodRunningResponse
         * @instance
         */
        IsPodRunningResponse.prototype.running = false;

        /**
         * IsPodRunningResponse reason.
         * @member {string} reason
         * @memberof container.IsPodRunningResponse
         * @instance
         */
        IsPodRunningResponse.prototype.reason = "";

        /**
         * Encodes the specified IsPodRunningResponse message. Does not implicitly {@link container.IsPodRunningResponse.verify|verify} messages.
         * @function encode
         * @memberof container.IsPodRunningResponse
         * @static
         * @param {container.IsPodRunningResponse} message IsPodRunningResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IsPodRunningResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.running != null && Object.hasOwnProperty.call(message, "running"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.running);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Decodes an IsPodRunningResponse message from the specified reader or buffer.
         * @function decode
         * @memberof container.IsPodRunningResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.IsPodRunningResponse} IsPodRunningResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IsPodRunningResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.IsPodRunningResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.running = reader.bool();
                        break;
                    }
                case 2: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for IsPodRunningResponse
         * @function getTypeUrl
         * @memberof container.IsPodRunningResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IsPodRunningResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.IsPodRunningResponse";
        };

        return IsPodRunningResponse;
    })();

    container.IsPodExistsRequest = (function() {

        /**
         * Properties of an IsPodExistsRequest.
         * @memberof container
         * @interface IIsPodExistsRequest
         * @property {number|null} [cluster_id] IsPodExistsRequest cluster_id
         * @property {string|null} [namespace] IsPodExistsRequest namespace
         * @property {string|null} [pod] IsPodExistsRequest pod
         */

        /**
         * Constructs a new IsPodExistsRequest.
         * @memberof container
         * @classdesc Represents an IsPodExistsRequest.
         * @implements IIsPodExistsRequest
         * @constructor
         * @param {container.IIsPodExistsRequest=} [properties] Properties to set
         */
        function IsPodExistsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IsPodExistsRequest cluster_id.
         * @member {number} cluster_id
         * @memberof container.IsPodExistsRequest
         * @instance
         */
        IsPodExistsRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IsPodExistsRequest namespace.
         * @member {string} namespace
         * @memberof container.IsPodExistsRequest
         * @instance
         */
        IsPodExistsRequest.prototype.namespace = "";

        /**
         * IsPodExistsRequest pod.
         * @member {string} pod
         * @memberof container.IsPodExistsRequest
         * @instance
         */
        IsPodExistsRequest.prototype.pod = "";

        /**
         * Encodes the specified IsPodExistsRequest message. Does not implicitly {@link container.IsPodExistsRequest.verify|verify} messages.
         * @function encode
         * @memberof container.IsPodExistsRequest
         * @static
         * @param {container.IsPodExistsRequest} message IsPodExistsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IsPodExistsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pod);
            return writer;
        };

        /**
         * Decodes an IsPodExistsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof container.IsPodExistsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.IsPodExistsRequest} IsPodExistsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IsPodExistsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.IsPodExistsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.pod = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for IsPodExistsRequest
         * @function getTypeUrl
         * @memberof container.IsPodExistsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IsPodExistsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.IsPodExistsRequest";
        };

        return IsPodExistsRequest;
    })();

    container.IsPodExistsResponse = (function() {

        /**
         * Properties of an IsPodExistsResponse.
         * @memberof container
         * @interface IIsPodExistsResponse
         * @property {boolean|null} [exists] IsPodExistsResponse exists
         */

        /**
         * Constructs a new IsPodExistsResponse.
         * @memberof container
         * @classdesc Represents an IsPodExistsResponse.
         * @implements IIsPodExistsResponse
         * @constructor
         * @param {container.IIsPodExistsResponse=} [properties] Properties to set
         */
        function IsPodExistsResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IsPodExistsResponse exists.
         * @member {boolean} exists
         * @memberof container.IsPodExistsResponse
         * @instance
         */
        IsPodExistsResponse.prototype.exists = false;

        /**
         * Encodes the specified IsPodExistsResponse message. Does not implicitly {@link container.IsPodExistsResponse.verify|verify} messages.
         * @function encode
         * @memberof container.IsPodExistsResponse
         * @static
         * @param {container.IsPodExistsResponse} message IsPodExistsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IsPodExistsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.exists != null && Object.hasOwnProperty.call(message, "exists"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.exists);
            return writer;
        };

        /**
         * Decodes an IsPodExistsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof container.IsPodExistsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.IsPodExistsResponse} IsPodExistsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IsPodExistsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.IsPodExistsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.exists = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for IsPodExistsResponse
         * @function getTypeUrl
         * @memberof container.IsPodExistsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IsPodExistsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.IsPodExistsResponse";
        };

        return IsPodExistsResponse;
    })();

    container.LogRequest = (function() {

        /**
         * Properties of a LogRequest.
         * @memberof container
         * @interface ILogRequest
         * @property {number|null} [cluster_id] LogRequest cluster_id
         * @property {string|null} [namespace] LogRequest namespace
         * @property {string|null} [pod] LogRequest pod
         * @property {string|null} [container] LogRequest container
         * @property {number|null} [card_id] LogRequest card_id
         */

        /**
         * Constructs a new LogRequest.
         * @memberof container
         * @classdesc Represents a LogRequest.
         * @implements ILogRequest
         * @constructor
         * @param {container.ILogRequest=} [properties] Properties to set
         */
        function LogRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogRequest cluster_id.
         * @member {number} cluster_id
         * @memberof container.LogRequest
         * @instance
         */
        LogRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LogRequest namespace.
         * @member {string} namespace
         * @memberof container.LogRequest
         * @instance
         */
        LogRequest.prototype.namespace = "";

        /**
         * LogRequest pod.
         * @member {string} pod
         * @memberof container.LogRequest
         * @instance
         */
        LogRequest.prototype.pod = "";

        /**
         * LogRequest container.
         * @member {string} container
         * @memberof container.LogRequest
         * @instance
         */
        LogRequest.prototype.container = "";

        /**
         * LogRequest card_id.
         * @member {number} card_id
         * @memberof container.LogRequest
         * @instance
         */
        LogRequest.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified LogRequest message. Does not implicitly {@link container.LogRequest.verify|verify} messages.
         * @function encode
         * @memberof container.LogRequest
         * @static
         * @param {container.LogRequest} message LogRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pod);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.container);
            if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.card_id);
            return writer;
        };

        /**
         * Decodes a LogRequest message from the specified reader or buffer.
         * @function decode
         * @memberof container.LogRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.LogRequest} LogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.LogRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.pod = reader.string();
                        break;
                    }
                case 4: {
                        message.container = reader.string();
                        break;
                    }
                case 5: {
                        message.card_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for LogRequest
         * @function getTypeUrl
         * @memberof container.LogRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.LogRequest";
        };

        return LogRequest;
    })();

    container.LogResponse = (function() {

        /**
         * Properties of a LogResponse.
         * @memberof container
         * @interface ILogResponse
         * @property {string|null} [namespace] LogResponse namespace
         * @property {string|null} [pod_name] LogResponse pod_name
         * @property {string|null} [container_name] LogResponse container_name
         * @property {string|null} [log] LogResponse log
         */

        /**
         * Constructs a new LogResponse.
         * @memberof container
         * @classdesc Represents a LogResponse.
         * @implements ILogResponse
         * @constructor
         * @param {container.ILogResponse=} [properties] Properties to set
         */
        function LogResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogResponse namespace.
         * @member {string} namespace
         * @memberof container.LogResponse
         * @instance
         */
        LogResponse.prototype.namespace = "";

        /**
         * LogResponse pod_name.
         * @member {string} pod_name
         * @memberof container.LogResponse
         * @instance
         */
        LogResponse.prototype.pod_name = "";

        /**
         * LogResponse container_name.
         * @member {string} container_name
         * @memberof container.LogResponse
         * @instance
         */
        LogResponse.prototype.container_name = "";

        /**
         * LogResponse log.
         * @member {string} log
         * @memberof container.LogResponse
         * @instance
         */
        LogResponse.prototype.log = "";

        /**
         * Encodes the specified LogResponse message. Does not implicitly {@link container.LogResponse.verify|verify} messages.
         * @function encode
         * @memberof container.LogResponse
         * @static
         * @param {container.LogResponse} message LogResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
            if (message.pod_name != null && Object.hasOwnProperty.call(message, "pod_name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pod_name);
            if (message.container_name != null && Object.hasOwnProperty.call(message, "container_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.container_name);
            if (message.log != null && Object.hasOwnProperty.call(message, "log"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.log);
            return writer;
        };

        /**
         * Decodes a LogResponse message from the specified reader or buffer.
         * @function decode
         * @memberof container.LogResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.LogResponse} LogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.LogResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.namespace = reader.string();
                        break;
                    }
                case 2: {
                        message.pod_name = reader.string();
                        break;
                    }
                case 3: {
                        message.container_name = reader.string();
                        break;
                    }
                case 4: {
                        message.log = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for LogResponse
         * @function getTypeUrl
         * @memberof container.LogResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.LogResponse";
        };

        return LogResponse;
    })();

    container.ContainerSvc = (function() {

        /**
         * Constructs a new ContainerSvc service.
         * @memberof container
         * @classdesc Represents a ContainerSvc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ContainerSvc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ContainerSvc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ContainerSvc;

        /**
         * Callback as used by {@link container.ContainerSvc#copyToPod}.
         * @memberof container.ContainerSvc
         * @typedef CopyToPodCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {container.CopyToPodResponse} [response] CopyToPodResponse
         */

        /**
         * Calls CopyToPod.
         * @function copyToPod
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.CopyToPodRequest} request CopyToPodRequest message or plain object
         * @param {container.ContainerSvc.CopyToPodCallback} callback Node-style callback called with the error, if any, and CopyToPodResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ContainerSvc.prototype.copyToPod = function copyToPod(request, callback) {
            return this.rpcCall(copyToPod, $root.container.CopyToPodRequest, $root.container.CopyToPodResponse, request, callback);
        }, "name", { value: "CopyToPod" });

        /**
         * Calls CopyToPod.
         * @function copyToPod
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.CopyToPodRequest} request CopyToPodRequest message or plain object
         * @returns {Promise<container.CopyToPodResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link container.ContainerSvc#exec}.
         * @memberof container.ContainerSvc
         * @typedef ExecCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {container.ExecResponse} [response] ExecResponse
         */

        /**
         * Calls Exec.
         * @function exec
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.ExecRequest} request ExecRequest message or plain object
         * @param {container.ContainerSvc.ExecCallback} callback Node-style callback called with the error, if any, and ExecResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ContainerSvc.prototype.exec = function exec(request, callback) {
            return this.rpcCall(exec, $root.container.ExecRequest, $root.container.ExecResponse, request, callback);
        }, "name", { value: "Exec" });

        /**
         * Calls Exec.
         * @function exec
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.ExecRequest} request ExecRequest message or plain object
         * @returns {Promise<container.ExecResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link container.ContainerSvc#streamCopyToPod}.
         * @memberof container.ContainerSvc
         * @typedef StreamCopyToPodCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {container.StreamCopyToPodResponse} [response] StreamCopyToPodResponse
         */

        /**
         * Calls StreamCopyToPod.
         * @function streamCopyToPod
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.StreamCopyToPodRequest} request StreamCopyToPodRequest message or plain object
         * @param {container.ContainerSvc.StreamCopyToPodCallback} callback Node-style callback called with the error, if any, and StreamCopyToPodResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ContainerSvc.prototype.streamCopyToPod = function streamCopyToPod(request, callback) {
            return this.rpcCall(streamCopyToPod, $root.container.StreamCopyToPodRequest, $root.container.StreamCopyToPodResponse, request, callback);
        }, "name", { value: "StreamCopyToPod" });

        /**
         * Calls StreamCopyToPod.
         * @function streamCopyToPod
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.StreamCopyToPodRequest} request StreamCopyToPodRequest message or plain object
         * @returns {Promise<container.StreamCopyToPodResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link container.ContainerSvc#isPodRunning}.
         * @memberof container.ContainerSvc
         * @typedef IsPodRunningCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {container.IsPodRunningResponse} [response] IsPodRunningResponse
         */

        /**
         * Calls IsPodRunning.
         * @function isPodRunning
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.IsPodRunningRequest} request IsPodRunningRequest message or plain object
         * @param {container.ContainerSvc.IsPodRunningCallback} callback Node-style callback called with the error, if any, and IsPodRunningResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ContainerSvc.prototype.isPodRunning = function isPodRunning(request, callback) {
            return this.rpcCall(isPodRunning, $root.container.IsPodRunningRequest, $root.container.IsPodRunningResponse, request, callback);
        }, "name", { value: "IsPodRunning" });

        /**
         * Calls IsPodRunning.
         * @function isPodRunning
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.IsPodRunningRequest} request IsPodRunningRequest message or plain object
         * @returns {Promise<container.IsPodRunningResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link container.ContainerSvc#isPodExists}.
         * @memberof container.ContainerSvc
         * @typedef IsPodExistsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {container.IsPodExistsResponse} [response] IsPodExistsResponse
         */

        /**
         * Calls IsPodExists.
         * @function isPodExists
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.IsPodExistsRequest} request IsPodExistsRequest message or plain object
         * @param {container.ContainerSvc.IsPodExistsCallback} callback Node-style callback called with the error, if any, and IsPodExistsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ContainerSvc.prototype.isPodExists = function isPodExists(request, callback) {
            return this.rpcCall(isPodExists, $root.container.IsPodExistsRequest, $root.container.IsPodExistsResponse, request, callback);
        }, "name", { value: "IsPodExists" });

        /**
         * Calls IsPodExists.
         * @function isPodExists
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.IsPodExistsRequest} request IsPodExistsRequest message or plain object
         * @returns {Promise<container.IsPodExistsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link container.ContainerSvc#containerLog}.
         * @memberof container.ContainerSvc
         * @typedef ContainerLogCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {container.LogResponse} [response] LogResponse
         */

        /**
         * Calls ContainerLog.
         * @function containerLog
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.LogRequest} request LogRequest message or plain object
         * @param {container.ContainerSvc.ContainerLogCallback} callback Node-style callback called with the error, if any, and LogResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ContainerSvc.prototype.containerLog = function containerLog(request, callback) {
            return this.rpcCall(containerLog, $root.container.LogRequest, $root.container.LogResponse, request, callback);
        }, "name", { value: "ContainerLog" });

        /**
         * Calls ContainerLog.
         * @function containerLog
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.LogRequest} request LogRequest message or plain object
         * @returns {Promise<container.LogResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link container.ContainerSvc#streamContainerLog}.
         * @memberof container.ContainerSvc
         * @typedef StreamContainerLogCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {container.LogResponse} [response] LogResponse
         */

        /**
         * Calls StreamContainerLog.
         * @function streamContainerLog
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.LogRequest} request LogRequest message or plain object
         * @param {container.ContainerSvc.StreamContainerLogCallback} callback Node-style callback called with the error, if any, and LogResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ContainerSvc.prototype.streamContainerLog = function streamContainerLog(request, callback) {
            return this.rpcCall(streamContainerLog, $root.container.LogRequest, $root.container.LogResponse, request, callback);
        }, "name", { value: "StreamContainerLog" });

        /**
         * Calls StreamContainerLog.
         * @function streamContainerLog
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.LogRequest} request LogRequest message or plain object
         * @returns {Promise<container.LogResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link container.ContainerSvc#proxy}.
         * @memberof container.ContainerSvc
         * @typedef ProxyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {container.ProxyResponse} [response] ProxyResponse
         */

        /**
         * Calls Proxy.
         * @function proxy
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.ProxyRequest} request ProxyRequest message or plain object
         * @param {container.ContainerSvc.ProxyCallback} callback Node-style callback called with the error, if any, and ProxyResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ContainerSvc.prototype.proxy = function proxy(request, callback) {
            return this.rpcCall(proxy, $root.container.ProxyRequest, $root.container.ProxyResponse, request, callback);
        }, "name", { value: "Proxy" });

        /**
         * Calls Proxy.
         * @function proxy
         * @memberof container.ContainerSvc
         * @instance
         * @param {container.ProxyRequest} request ProxyRequest message or plain object
         * @returns {Promise<container.ProxyResponse>} Promise
         * @variation 2
         */

        return ContainerSvc;
    })();

    container.ProxyRequest = (function() {

        /**
         * Properties of a ProxyRequest.
         * @memberof container
         * @interface IProxyRequest
         * @property {number|null} [cluster_id] ProxyRequest cluster_id
         * @property {string|null} [namespace] ProxyRequest namespace
         * @property {string|null} [pod] ProxyRequest pod
         * @property {string|null} [port] ProxyRequest port
         */

        /**
         * Constructs a new ProxyRequest.
         * @memberof container
         * @classdesc Represents a ProxyRequest.
         * @implements IProxyRequest
         * @constructor
         * @param {container.IProxyRequest=} [properties] Properties to set
         */
        function ProxyRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProxyRequest cluster_id.
         * @member {number} cluster_id
         * @memberof container.ProxyRequest
         * @instance
         */
        ProxyRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProxyRequest namespace.
         * @member {string} namespace
         * @memberof container.ProxyRequest
         * @instance
         */
        ProxyRequest.prototype.namespace = "";

        /**
         * ProxyRequest pod.
         * @member {string} pod
         * @memberof container.ProxyRequest
         * @instance
         */
        ProxyRequest.prototype.pod = "";

        /**
         * ProxyRequest port.
         * @member {string} port
         * @memberof container.ProxyRequest
         * @instance
         */
        ProxyRequest.prototype.port = "";

        /**
         * Encodes the specified ProxyRequest message. Does not implicitly {@link container.ProxyRequest.verify|verify} messages.
         * @function encode
         * @memberof container.ProxyRequest
         * @static
         * @param {container.ProxyRequest} message ProxyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pod);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.port);
            return writer;
        };

        /**
         * Decodes a ProxyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof container.ProxyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.ProxyRequest} ProxyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.ProxyRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.pod = reader.string();
                        break;
                    }
                case 4: {
                        message.port = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ProxyRequest
         * @function getTypeUrl
         * @memberof container.ProxyRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProxyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.ProxyRequest";
        };

        return ProxyRequest;
    })();

    container.ProxyResponse = (function() {

        /**
         * Properties of a ProxyResponse.
         * @memberof container
         * @interface IProxyResponse
         * @property {boolean|null} [success] ProxyResponse success
         */

        /**
         * Constructs a new ProxyResponse.
         * @memberof container
         * @classdesc Represents a ProxyResponse.
         * @implements IProxyResponse
         * @constructor
         * @param {container.IProxyResponse=} [properties] Properties to set
         */
        function ProxyResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProxyResponse success.
         * @member {boolean} success
         * @memberof container.ProxyResponse
         * @instance
         */
        ProxyResponse.prototype.success = false;

        /**
         * Encodes the specified ProxyResponse message. Does not implicitly {@link container.ProxyResponse.verify|verify} messages.
         * @function encode
         * @memberof container.ProxyResponse
         * @static
         * @param {container.ProxyResponse} message ProxyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Decodes a ProxyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof container.ProxyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {container.ProxyResponse} ProxyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.container.ProxyResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ProxyResponse
         * @function getTypeUrl
         * @memberof container.ProxyResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProxyResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/container.ProxyResponse";
        };

        return ProxyResponse;
    })();

    return container;
})();

export const event = $root.event = (() => {

    /**
     * Namespace event.
     * @exports event
     * @namespace
     */
    const event = {};

    /**
     * ActionType enum.
     * @name event.ActionType
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} Create=1 Create value
     * @property {number} Update=2 Update value
     * @property {number} Delete=3 Delete value
     * @property {number} Upload=4 Upload value
     * @property {number} Download=5 Download value
     * @property {number} Shell=6 Shell value
     */
    event.ActionType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "Create"] = 1;
        values[valuesById[2] = "Update"] = 2;
        values[valuesById[3] = "Delete"] = 3;
        values[valuesById[4] = "Upload"] = 4;
        values[valuesById[5] = "Download"] = 5;
        values[valuesById[6] = "Shell"] = 6;
        return values;
    })();

    event.ListRequest = (function() {

        /**
         * Properties of a ListRequest.
         * @memberof event
         * @interface IListRequest
         * @property {number|null} [page] ListRequest page
         * @property {number|null} [page_size] ListRequest page_size
         * @property {event.ActionType|null} [action_type] ListRequest action_type
         * @property {string|null} [search] ListRequest search
         */

        /**
         * Constructs a new ListRequest.
         * @memberof event
         * @classdesc Represents a ListRequest.
         * @implements IListRequest
         * @constructor
         * @param {event.IListRequest=} [properties] Properties to set
         */
        function ListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListRequest page.
         * @member {number} page
         * @memberof event.ListRequest
         * @instance
         */
        ListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListRequest page_size.
         * @member {number} page_size
         * @memberof event.ListRequest
         * @instance
         */
        ListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListRequest action_type.
         * @member {event.ActionType} action_type
         * @memberof event.ListRequest
         * @instance
         */
        ListRequest.prototype.action_type = 0;

        /**
         * ListRequest search.
         * @member {string} search
         * @memberof event.ListRequest
         * @instance
         */
        ListRequest.prototype.search = "";

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link event.ListRequest.verify|verify} messages.
         * @function encode
         * @memberof event.ListRequest
         * @static
         * @param {event.ListRequest} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            if (message.action_type != null && Object.hasOwnProperty.call(message, "action_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.action_type);
            if (message.search != null && Object.hasOwnProperty.call(message, "search"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.search);
            return writer;
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof event.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {event.ListRequest} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.event.ListRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                case 3: {
                        message.action_type = reader.int32();
                        break;
                    }
                case 4: {
                        message.search = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListRequest
         * @function getTypeUrl
         * @memberof event.ListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/event.ListRequest";
        };

        return ListRequest;
    })();

    event.ListItem = (function() {

        /**
         * Properties of a ListItem.
         * @memberof event
         * @interface IListItem
         * @property {number|null} [id] ListItem id
         * @property {event.ActionType|null} [action] ListItem action
         * @property {string|null} [username] ListItem username
         * @property {string|null} [message] ListItem message
         * @property {string|null} [old] ListItem old
         * @property {string|null} ["new"] ListItem new
         * @property {string|null} [event_at] ListItem event_at
         * @property {number|null} [file_id] ListItem file_id
         * @property {string|null} [duration] ListItem duration
         */

        /**
         * Constructs a new ListItem.
         * @memberof event
         * @classdesc Represents a ListItem.
         * @implements IListItem
         * @constructor
         * @param {event.IListItem=} [properties] Properties to set
         */
        function ListItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListItem id.
         * @member {number} id
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListItem action.
         * @member {event.ActionType} action
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype.action = 0;

        /**
         * ListItem username.
         * @member {string} username
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype.username = "";

        /**
         * ListItem message.
         * @member {string} message
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype.message = "";

        /**
         * ListItem old.
         * @member {string} old
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype.old = "";

        /**
         * ListItem new.
         * @member {string} new
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype["new"] = "";

        /**
         * ListItem event_at.
         * @member {string} event_at
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype.event_at = "";

        /**
         * ListItem file_id.
         * @member {number} file_id
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype.file_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListItem duration.
         * @member {string} duration
         * @memberof event.ListItem
         * @instance
         */
        ListItem.prototype.duration = "";

        /**
         * Encodes the specified ListItem message. Does not implicitly {@link event.ListItem.verify|verify} messages.
         * @function encode
         * @memberof event.ListItem
         * @static
         * @param {event.ListItem} message ListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.old != null && Object.hasOwnProperty.call(message, "old"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.old);
            if (message["new"] != null && Object.hasOwnProperty.call(message, "new"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message["new"]);
            if (message.event_at != null && Object.hasOwnProperty.call(message, "event_at"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.event_at);
            if (message.file_id != null && Object.hasOwnProperty.call(message, "file_id"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.file_id);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.duration);
            return writer;
        };

        /**
         * Decodes a ListItem message from the specified reader or buffer.
         * @function decode
         * @memberof event.ListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {event.ListItem} ListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.event.ListItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.action = reader.int32();
                        break;
                    }
                case 3: {
                        message.username = reader.string();
                        break;
                    }
                case 4: {
                        message.message = reader.string();
                        break;
                    }
                case 5: {
                        message.old = reader.string();
                        break;
                    }
                case 6: {
                        message["new"] = reader.string();
                        break;
                    }
                case 7: {
                        message.event_at = reader.string();
                        break;
                    }
                case 8: {
                        message.file_id = reader.int64();
                        break;
                    }
                case 9: {
                        message.duration = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListItem
         * @function getTypeUrl
         * @memberof event.ListItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/event.ListItem";
        };

        return ListItem;
    })();

    event.ListResponse = (function() {

        /**
         * Properties of a ListResponse.
         * @memberof event
         * @interface IListResponse
         * @property {number|null} [page] ListResponse page
         * @property {number|null} [page_size] ListResponse page_size
         * @property {Array.<event.ListItem>|null} [items] ListResponse items
         * @property {number|null} [count] ListResponse count
         */

        /**
         * Constructs a new ListResponse.
         * @memberof event
         * @classdesc Represents a ListResponse.
         * @implements IListResponse
         * @constructor
         * @param {event.IListResponse=} [properties] Properties to set
         */
        function ListResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListResponse page.
         * @member {number} page
         * @memberof event.ListResponse
         * @instance
         */
        ListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse page_size.
         * @member {number} page_size
         * @memberof event.ListResponse
         * @instance
         */
        ListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse items.
         * @member {Array.<event.ListItem>} items
         * @memberof event.ListResponse
         * @instance
         */
        ListResponse.prototype.items = $util.emptyArray;

        /**
         * ListResponse count.
         * @member {number} count
         * @memberof event.ListResponse
         * @instance
         */
        ListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link event.ListResponse.verify|verify} messages.
         * @function encode
         * @memberof event.ListResponse
         * @static
         * @param {event.ListResponse} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.event.ListItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.count);
            return writer;
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof event.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {event.ListResponse} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.event.ListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.event.ListItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.count = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListResponse
         * @function getTypeUrl
         * @memberof event.ListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/event.ListResponse";
        };

        return ListResponse;
    })();

    event.Event = (function() {

        /**
         * Constructs a new Event service.
         * @memberof event
         * @classdesc Represents an Event
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Event(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Event.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Event;

        /**
         * Callback as used by {@link event.Event#list}.
         * @memberof event.Event
         * @typedef ListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {event.ListResponse} [response] ListResponse
         */

        /**
         * Calls List.
         * @function list
         * @memberof event.Event
         * @instance
         * @param {event.ListRequest} request ListRequest message or plain object
         * @param {event.Event.ListCallback} callback Node-style callback called with the error, if any, and ListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Event.prototype.list = function list(request, callback) {
            return this.rpcCall(list, $root.event.ListRequest, $root.event.ListResponse, request, callback);
        }, "name", { value: "List" });

        /**
         * Calls List.
         * @function list
         * @memberof event.Event
         * @instance
         * @param {event.ListRequest} request ListRequest message or plain object
         * @returns {Promise<event.ListResponse>} Promise
         * @variation 2
         */

        return Event;
    })();

    return event;
})();

export const file = $root.file = (() => {

    /**
     * Namespace file.
     * @exports file
     * @namespace
     */
    const file = {};

    file.DeleteRequest = (function() {

        /**
         * Properties of a DeleteRequest.
         * @memberof file
         * @interface IDeleteRequest
         * @property {number|null} [id] DeleteRequest id
         */

        /**
         * Constructs a new DeleteRequest.
         * @memberof file
         * @classdesc Represents a DeleteRequest.
         * @implements IDeleteRequest
         * @constructor
         * @param {file.IDeleteRequest=} [properties] Properties to set
         */
        function DeleteRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteRequest id.
         * @member {number} id
         * @memberof file.DeleteRequest
         * @instance
         */
        DeleteRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link file.DeleteRequest.verify|verify} messages.
         * @function encode
         * @memberof file.DeleteRequest
         * @static
         * @param {file.DeleteRequest} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof file.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.DeleteRequest} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.DeleteRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DeleteRequest
         * @function getTypeUrl
         * @memberof file.DeleteRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.DeleteRequest";
        };

        return DeleteRequest;
    })();

    file.DeleteResponse = (function() {

        /**
         * Properties of a DeleteResponse.
         * @memberof file
         * @interface IDeleteResponse
         * @property {file.File|null} [file] DeleteResponse file
         */

        /**
         * Constructs a new DeleteResponse.
         * @memberof file
         * @classdesc Represents a DeleteResponse.
         * @implements IDeleteResponse
         * @constructor
         * @param {file.IDeleteResponse=} [properties] Properties to set
         */
        function DeleteResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteResponse file.
         * @member {file.File|null|undefined} file
         * @memberof file.DeleteResponse
         * @instance
         */
        DeleteResponse.prototype.file = null;

        /**
         * Encodes the specified DeleteResponse message. Does not implicitly {@link file.DeleteResponse.verify|verify} messages.
         * @function encode
         * @memberof file.DeleteResponse
         * @static
         * @param {file.DeleteResponse} message DeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.file.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof file.DeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.DeleteResponse} DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.DeleteResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.file = $root.file.File.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DeleteResponse
         * @function getTypeUrl
         * @memberof file.DeleteResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.DeleteResponse";
        };

        return DeleteResponse;
    })();

    file.DeleteUndocumentedFilesRequest = (function() {

        /**
         * Properties of a DeleteUndocumentedFilesRequest.
         * @memberof file
         * @interface IDeleteUndocumentedFilesRequest
         */

        /**
         * Constructs a new DeleteUndocumentedFilesRequest.
         * @memberof file
         * @classdesc Represents a DeleteUndocumentedFilesRequest.
         * @implements IDeleteUndocumentedFilesRequest
         * @constructor
         * @param {file.IDeleteUndocumentedFilesRequest=} [properties] Properties to set
         */
        function DeleteUndocumentedFilesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified DeleteUndocumentedFilesRequest message. Does not implicitly {@link file.DeleteUndocumentedFilesRequest.verify|verify} messages.
         * @function encode
         * @memberof file.DeleteUndocumentedFilesRequest
         * @static
         * @param {file.DeleteUndocumentedFilesRequest} message DeleteUndocumentedFilesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUndocumentedFilesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a DeleteUndocumentedFilesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof file.DeleteUndocumentedFilesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.DeleteUndocumentedFilesRequest} DeleteUndocumentedFilesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUndocumentedFilesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.DeleteUndocumentedFilesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DeleteUndocumentedFilesRequest
         * @function getTypeUrl
         * @memberof file.DeleteUndocumentedFilesRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteUndocumentedFilesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.DeleteUndocumentedFilesRequest";
        };

        return DeleteUndocumentedFilesRequest;
    })();

    file.File = (function() {

        /**
         * Properties of a File.
         * @memberof file
         * @interface IFile
         * @property {string|null} [path] File path
         * @property {string|null} [humanize_size] File humanize_size
         * @property {number|null} [size] File size
         * @property {string|null} [upload_by] File upload_by
         */

        /**
         * Constructs a new File.
         * @memberof file
         * @classdesc Represents a File.
         * @implements IFile
         * @constructor
         * @param {file.IFile=} [properties] Properties to set
         */
        function File(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * File path.
         * @member {string} path
         * @memberof file.File
         * @instance
         */
        File.prototype.path = "";

        /**
         * File humanize_size.
         * @member {string} humanize_size
         * @memberof file.File
         * @instance
         */
        File.prototype.humanize_size = "";

        /**
         * File size.
         * @member {number} size
         * @memberof file.File
         * @instance
         */
        File.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * File upload_by.
         * @member {string} upload_by
         * @memberof file.File
         * @instance
         */
        File.prototype.upload_by = "";

        /**
         * Encodes the specified File message. Does not implicitly {@link file.File.verify|verify} messages.
         * @function encode
         * @memberof file.File
         * @static
         * @param {file.File} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.humanize_size != null && Object.hasOwnProperty.call(message, "humanize_size"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.humanize_size);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.size);
            if (message.upload_by != null && Object.hasOwnProperty.call(message, "upload_by"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.upload_by);
            return writer;
        };

        /**
         * Decodes a File message from the specified reader or buffer.
         * @function decode
         * @memberof file.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.File} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.File();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.path = reader.string();
                        break;
                    }
                case 2: {
                        message.humanize_size = reader.string();
                        break;
                    }
                case 3: {
                        message.size = reader.int64();
                        break;
                    }
                case 4: {
                        message.upload_by = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for File
         * @function getTypeUrl
         * @memberof file.File
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        File.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.File";
        };

        return File;
    })();

    file.DeleteUndocumentedFilesResponse = (function() {

        /**
         * Properties of a DeleteUndocumentedFilesResponse.
         * @memberof file
         * @interface IDeleteUndocumentedFilesResponse
         * @property {Array.<file.File>|null} [items] DeleteUndocumentedFilesResponse items
         */

        /**
         * Constructs a new DeleteUndocumentedFilesResponse.
         * @memberof file
         * @classdesc Represents a DeleteUndocumentedFilesResponse.
         * @implements IDeleteUndocumentedFilesResponse
         * @constructor
         * @param {file.IDeleteUndocumentedFilesResponse=} [properties] Properties to set
         */
        function DeleteUndocumentedFilesResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteUndocumentedFilesResponse items.
         * @member {Array.<file.File>} items
         * @memberof file.DeleteUndocumentedFilesResponse
         * @instance
         */
        DeleteUndocumentedFilesResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified DeleteUndocumentedFilesResponse message. Does not implicitly {@link file.DeleteUndocumentedFilesResponse.verify|verify} messages.
         * @function encode
         * @memberof file.DeleteUndocumentedFilesResponse
         * @static
         * @param {file.DeleteUndocumentedFilesResponse} message DeleteUndocumentedFilesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteUndocumentedFilesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.file.File.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a DeleteUndocumentedFilesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof file.DeleteUndocumentedFilesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.DeleteUndocumentedFilesResponse} DeleteUndocumentedFilesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteUndocumentedFilesResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.DeleteUndocumentedFilesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.file.File.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DeleteUndocumentedFilesResponse
         * @function getTypeUrl
         * @memberof file.DeleteUndocumentedFilesResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteUndocumentedFilesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.DeleteUndocumentedFilesResponse";
        };

        return DeleteUndocumentedFilesResponse;
    })();

    file.DiskInfoRequest = (function() {

        /**
         * Properties of a DiskInfoRequest.
         * @memberof file
         * @interface IDiskInfoRequest
         */

        /**
         * Constructs a new DiskInfoRequest.
         * @memberof file
         * @classdesc Represents a DiskInfoRequest.
         * @implements IDiskInfoRequest
         * @constructor
         * @param {file.IDiskInfoRequest=} [properties] Properties to set
         */
        function DiskInfoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified DiskInfoRequest message. Does not implicitly {@link file.DiskInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof file.DiskInfoRequest
         * @static
         * @param {file.DiskInfoRequest} message DiskInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiskInfoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a DiskInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof file.DiskInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.DiskInfoRequest} DiskInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiskInfoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.DiskInfoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DiskInfoRequest
         * @function getTypeUrl
         * @memberof file.DiskInfoRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiskInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.DiskInfoRequest";
        };

        return DiskInfoRequest;
    })();

    file.DiskInfoResponse = (function() {

        /**
         * Properties of a DiskInfoResponse.
         * @memberof file
         * @interface IDiskInfoResponse
         * @property {number|null} [usage] DiskInfoResponse usage
         * @property {string|null} [humanize_usage] DiskInfoResponse humanize_usage
         */

        /**
         * Constructs a new DiskInfoResponse.
         * @memberof file
         * @classdesc Represents a DiskInfoResponse.
         * @implements IDiskInfoResponse
         * @constructor
         * @param {file.IDiskInfoResponse=} [properties] Properties to set
         */
        function DiskInfoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiskInfoResponse usage.
         * @member {number} usage
         * @memberof file.DiskInfoResponse
         * @instance
         */
        DiskInfoResponse.prototype.usage = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DiskInfoResponse humanize_usage.
         * @member {string} humanize_usage
         * @memberof file.DiskInfoResponse
         * @instance
         */
        DiskInfoResponse.prototype.humanize_usage = "";

        /**
         * Encodes the specified DiskInfoResponse message. Does not implicitly {@link file.DiskInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof file.DiskInfoResponse
         * @static
         * @param {file.DiskInfoResponse} message DiskInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiskInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.usage != null && Object.hasOwnProperty.call(message, "usage"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.usage);
            if (message.humanize_usage != null && Object.hasOwnProperty.call(message, "humanize_usage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.humanize_usage);
            return writer;
        };

        /**
         * Decodes a DiskInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof file.DiskInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.DiskInfoResponse} DiskInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiskInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.DiskInfoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.usage = reader.int64();
                        break;
                    }
                case 2: {
                        message.humanize_usage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for DiskInfoResponse
         * @function getTypeUrl
         * @memberof file.DiskInfoResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiskInfoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.DiskInfoResponse";
        };

        return DiskInfoResponse;
    })();

    file.ListRequest = (function() {

        /**
         * Properties of a ListRequest.
         * @memberof file
         * @interface IListRequest
         * @property {number|null} [page] ListRequest page
         * @property {number|null} [page_size] ListRequest page_size
         * @property {boolean|null} [without_deleted] ListRequest without_deleted
         */

        /**
         * Constructs a new ListRequest.
         * @memberof file
         * @classdesc Represents a ListRequest.
         * @implements IListRequest
         * @constructor
         * @param {file.IListRequest=} [properties] Properties to set
         */
        function ListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListRequest page.
         * @member {number} page
         * @memberof file.ListRequest
         * @instance
         */
        ListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListRequest page_size.
         * @member {number} page_size
         * @memberof file.ListRequest
         * @instance
         */
        ListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListRequest without_deleted.
         * @member {boolean} without_deleted
         * @memberof file.ListRequest
         * @instance
         */
        ListRequest.prototype.without_deleted = false;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link file.ListRequest.verify|verify} messages.
         * @function encode
         * @memberof file.ListRequest
         * @static
         * @param {file.ListRequest} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            if (message.without_deleted != null && Object.hasOwnProperty.call(message, "without_deleted"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.without_deleted);
            return writer;
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof file.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.ListRequest} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.ListRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                case 3: {
                        message.without_deleted = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListRequest
         * @function getTypeUrl
         * @memberof file.ListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.ListRequest";
        };

        return ListRequest;
    })();

    file.ListResponse = (function() {

        /**
         * Properties of a ListResponse.
         * @memberof file
         * @interface IListResponse
         * @property {number|null} [page] ListResponse page
         * @property {number|null} [page_size] ListResponse page_size
         * @property {Array.<model.FileModel>|null} [items] ListResponse items
         * @property {number|null} [count] ListResponse count
         */

        /**
         * Constructs a new ListResponse.
         * @memberof file
         * @classdesc Represents a ListResponse.
         * @implements IListResponse
         * @constructor
         * @param {file.IListResponse=} [properties] Properties to set
         */
        function ListResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListResponse page.
         * @member {number} page
         * @memberof file.ListResponse
         * @instance
         */
        ListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse page_size.
         * @member {number} page_size
         * @memberof file.ListResponse
         * @instance
         */
        ListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse items.
         * @member {Array.<model.FileModel>} items
         * @memberof file.ListResponse
         * @instance
         */
        ListResponse.prototype.items = $util.emptyArray;

        /**
         * ListResponse count.
         * @member {number} count
         * @memberof file.ListResponse
         * @instance
         */
        ListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link file.ListResponse.verify|verify} messages.
         * @function encode
         * @memberof file.ListResponse
         * @static
         * @param {file.ListResponse} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.model.FileModel.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.count);
            return writer;
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof file.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.ListResponse} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.ListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.model.FileModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.count = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListResponse
         * @function getTypeUrl
         * @memberof file.ListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.ListResponse";
        };

        return ListResponse;
    })();

    file.ShowRecordsRequest = (function() {

        /**
         * Properties of a ShowRecordsRequest.
         * @memberof file
         * @interface IShowRecordsRequest
         * @property {number|null} [id] ShowRecordsRequest id
         */

        /**
         * Constructs a new ShowRecordsRequest.
         * @memberof file
         * @classdesc Represents a ShowRecordsRequest.
         * @implements IShowRecordsRequest
         * @constructor
         * @param {file.IShowRecordsRequest=} [properties] Properties to set
         */
        function ShowRecordsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShowRecordsRequest id.
         * @member {number} id
         * @memberof file.ShowRecordsRequest
         * @instance
         */
        ShowRecordsRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ShowRecordsRequest message. Does not implicitly {@link file.ShowRecordsRequest.verify|verify} messages.
         * @function encode
         * @memberof file.ShowRecordsRequest
         * @static
         * @param {file.ShowRecordsRequest} message ShowRecordsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowRecordsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Decodes a ShowRecordsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof file.ShowRecordsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.ShowRecordsRequest} ShowRecordsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowRecordsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.ShowRecordsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ShowRecordsRequest
         * @function getTypeUrl
         * @memberof file.ShowRecordsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShowRecordsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.ShowRecordsRequest";
        };

        return ShowRecordsRequest;
    })();

    file.ShowRecordsResponse = (function() {

        /**
         * Properties of a ShowRecordsResponse.
         * @memberof file
         * @interface IShowRecordsResponse
         * @property {Array.<string>|null} [items] ShowRecordsResponse items
         */

        /**
         * Constructs a new ShowRecordsResponse.
         * @memberof file
         * @classdesc Represents a ShowRecordsResponse.
         * @implements IShowRecordsResponse
         * @constructor
         * @param {file.IShowRecordsResponse=} [properties] Properties to set
         */
        function ShowRecordsResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShowRecordsResponse items.
         * @member {Array.<string>} items
         * @memberof file.ShowRecordsResponse
         * @instance
         */
        ShowRecordsResponse.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified ShowRecordsResponse message. Does not implicitly {@link file.ShowRecordsResponse.verify|verify} messages.
         * @function encode
         * @memberof file.ShowRecordsResponse
         * @static
         * @param {file.ShowRecordsResponse} message ShowRecordsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShowRecordsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.items[i]);
            return writer;
        };

        /**
         * Decodes a ShowRecordsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof file.ShowRecordsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {file.ShowRecordsResponse} ShowRecordsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShowRecordsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.file.ShowRecordsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ShowRecordsResponse
         * @function getTypeUrl
         * @memberof file.ShowRecordsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShowRecordsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/file.ShowRecordsResponse";
        };

        return ShowRecordsResponse;
    })();

    file.FileSvc = (function() {

        /**
         * Constructs a new FileSvc service.
         * @memberof file
         * @classdesc Represents a FileSvc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function FileSvc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (FileSvc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FileSvc;

        /**
         * Callback as used by {@link file.FileSvc#list}.
         * @memberof file.FileSvc
         * @typedef ListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {file.ListResponse} [response] ListResponse
         */

        /**
         * Calls List.
         * @function list
         * @memberof file.FileSvc
         * @instance
         * @param {file.ListRequest} request ListRequest message or plain object
         * @param {file.FileSvc.ListCallback} callback Node-style callback called with the error, if any, and ListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FileSvc.prototype.list = function list(request, callback) {
            return this.rpcCall(list, $root.file.ListRequest, $root.file.ListResponse, request, callback);
        }, "name", { value: "List" });

        /**
         * Calls List.
         * @function list
         * @memberof file.FileSvc
         * @instance
         * @param {file.ListRequest} request ListRequest message or plain object
         * @returns {Promise<file.ListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link file.FileSvc#showRecords}.
         * @memberof file.FileSvc
         * @typedef ShowRecordsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {file.ShowRecordsResponse} [response] ShowRecordsResponse
         */

        /**
         * Calls ShowRecords.
         * @function showRecords
         * @memberof file.FileSvc
         * @instance
         * @param {file.ShowRecordsRequest} request ShowRecordsRequest message or plain object
         * @param {file.FileSvc.ShowRecordsCallback} callback Node-style callback called with the error, if any, and ShowRecordsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FileSvc.prototype.showRecords = function showRecords(request, callback) {
            return this.rpcCall(showRecords, $root.file.ShowRecordsRequest, $root.file.ShowRecordsResponse, request, callback);
        }, "name", { value: "ShowRecords" });

        /**
         * Calls ShowRecords.
         * @function showRecords
         * @memberof file.FileSvc
         * @instance
         * @param {file.ShowRecordsRequest} request ShowRecordsRequest message or plain object
         * @returns {Promise<file.ShowRecordsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link file.FileSvc#delete_}.
         * @memberof file.FileSvc
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {file.DeleteResponse} [response] DeleteResponse
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof file.FileSvc
         * @instance
         * @param {file.DeleteRequest} request DeleteRequest message or plain object
         * @param {file.FileSvc.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FileSvc.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.file.DeleteRequest, $root.file.DeleteResponse, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof file.FileSvc
         * @instance
         * @param {file.DeleteRequest} request DeleteRequest message or plain object
         * @returns {Promise<file.DeleteResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link file.FileSvc#deleteUndocumentedFiles}.
         * @memberof file.FileSvc
         * @typedef DeleteUndocumentedFilesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {file.DeleteUndocumentedFilesResponse} [response] DeleteUndocumentedFilesResponse
         */

        /**
         * Calls DeleteUndocumentedFiles.
         * @function deleteUndocumentedFiles
         * @memberof file.FileSvc
         * @instance
         * @param {file.DeleteUndocumentedFilesRequest} request DeleteUndocumentedFilesRequest message or plain object
         * @param {file.FileSvc.DeleteUndocumentedFilesCallback} callback Node-style callback called with the error, if any, and DeleteUndocumentedFilesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FileSvc.prototype.deleteUndocumentedFiles = function deleteUndocumentedFiles(request, callback) {
            return this.rpcCall(deleteUndocumentedFiles, $root.file.DeleteUndocumentedFilesRequest, $root.file.DeleteUndocumentedFilesResponse, request, callback);
        }, "name", { value: "DeleteUndocumentedFiles" });

        /**
         * Calls DeleteUndocumentedFiles.
         * @function deleteUndocumentedFiles
         * @memberof file.FileSvc
         * @instance
         * @param {file.DeleteUndocumentedFilesRequest} request DeleteUndocumentedFilesRequest message or plain object
         * @returns {Promise<file.DeleteUndocumentedFilesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link file.FileSvc#diskInfo}.
         * @memberof file.FileSvc
         * @typedef DiskInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {file.DiskInfoResponse} [response] DiskInfoResponse
         */

        /**
         * Calls DiskInfo.
         * @function diskInfo
         * @memberof file.FileSvc
         * @instance
         * @param {file.DiskInfoRequest} request DiskInfoRequest message or plain object
         * @param {file.FileSvc.DiskInfoCallback} callback Node-style callback called with the error, if any, and DiskInfoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(FileSvc.prototype.diskInfo = function diskInfo(request, callback) {
            return this.rpcCall(diskInfo, $root.file.DiskInfoRequest, $root.file.DiskInfoResponse, request, callback);
        }, "name", { value: "DiskInfo" });

        /**
         * Calls DiskInfo.
         * @function diskInfo
         * @memberof file.FileSvc
         * @instance
         * @param {file.DiskInfoRequest} request DiskInfoRequest message or plain object
         * @returns {Promise<file.DiskInfoResponse>} Promise
         * @variation 2
         */

        return FileSvc;
    })();

    return file;
})();

export const metrics = $root.metrics = (() => {

    /**
     * Namespace metrics.
     * @exports metrics
     * @namespace
     */
    const metrics = {};

    metrics.TopPodRequest = (function() {

        /**
         * Properties of a TopPodRequest.
         * @memberof metrics
         * @interface ITopPodRequest
         * @property {number|null} [cluster_id] TopPodRequest cluster_id
         * @property {string|null} [namespace] TopPodRequest namespace
         * @property {string|null} [pod] TopPodRequest pod
         */

        /**
         * Constructs a new TopPodRequest.
         * @memberof metrics
         * @classdesc Represents a TopPodRequest.
         * @implements ITopPodRequest
         * @constructor
         * @param {metrics.ITopPodRequest=} [properties] Properties to set
         */
        function TopPodRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TopPodRequest cluster_id.
         * @member {number} cluster_id
         * @memberof metrics.TopPodRequest
         * @instance
         */
        TopPodRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TopPodRequest namespace.
         * @member {string} namespace
         * @memberof metrics.TopPodRequest
         * @instance
         */
        TopPodRequest.prototype.namespace = "";

        /**
         * TopPodRequest pod.
         * @member {string} pod
         * @memberof metrics.TopPodRequest
         * @instance
         */
        TopPodRequest.prototype.pod = "";

        /**
         * Encodes the specified TopPodRequest message. Does not implicitly {@link metrics.TopPodRequest.verify|verify} messages.
         * @function encode
         * @memberof metrics.TopPodRequest
         * @static
         * @param {metrics.TopPodRequest} message TopPodRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopPodRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pod);
            return writer;
        };

        /**
         * Decodes a TopPodRequest message from the specified reader or buffer.
         * @function decode
         * @memberof metrics.TopPodRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {metrics.TopPodRequest} TopPodRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopPodRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.metrics.TopPodRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.namespace = reader.string();
                        break;
                    }
                case 3: {
                        message.pod = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for TopPodRequest
         * @function getTypeUrl
         * @memberof metrics.TopPodRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TopPodRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/metrics.TopPodRequest";
        };

        return TopPodRequest;
    })();

    metrics.TopPodResponse = (function() {

        /**
         * Properties of a TopPodResponse.
         * @memberof metrics
         * @interface ITopPodResponse
         * @property {number|null} [cpu] TopPodResponse cpu
         * @property {number|null} [memory] TopPodResponse memory
         * @property {string|null} [humanize_cpu] TopPodResponse humanize_cpu
         * @property {string|null} [humanize_memory] TopPodResponse humanize_memory
         * @property {string|null} [time] TopPodResponse time
         * @property {number|null} [length] TopPodResponse length
         */

        /**
         * Constructs a new TopPodResponse.
         * @memberof metrics
         * @classdesc Represents a TopPodResponse.
         * @implements ITopPodResponse
         * @constructor
         * @param {metrics.ITopPodResponse=} [properties] Properties to set
         */
        function TopPodResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TopPodResponse cpu.
         * @member {number} cpu
         * @memberof metrics.TopPodResponse
         * @instance
         */
        TopPodResponse.prototype.cpu = 0;

        /**
         * TopPodResponse memory.
         * @member {number} memory
         * @memberof metrics.TopPodResponse
         * @instance
         */
        TopPodResponse.prototype.memory = 0;

        /**
         * TopPodResponse humanize_cpu.
         * @member {string} humanize_cpu
         * @memberof metrics.TopPodResponse
         * @instance
         */
        TopPodResponse.prototype.humanize_cpu = "";

        /**
         * TopPodResponse humanize_memory.
         * @member {string} humanize_memory
         * @memberof metrics.TopPodResponse
         * @instance
         */
        TopPodResponse.prototype.humanize_memory = "";

        /**
         * TopPodResponse time.
         * @member {string} time
         * @memberof metrics.TopPodResponse
         * @instance
         */
        TopPodResponse.prototype.time = "";

        /**
         * TopPodResponse length.
         * @member {number} length
         * @memberof metrics.TopPodResponse
         * @instance
         */
        TopPodResponse.prototype.length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified TopPodResponse message. Does not implicitly {@link metrics.TopPodResponse.verify|verify} messages.
         * @function encode
         * @memberof metrics.TopPodResponse
         * @static
         * @param {metrics.TopPodResponse} message TopPodResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopPodResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cpu != null && Object.hasOwnProperty.call(message, "cpu"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.cpu);
            if (message.memory != null && Object.hasOwnProperty.call(message, "memory"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.memory);
            if (message.humanize_cpu != null && Object.hasOwnProperty.call(message, "humanize_cpu"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.humanize_cpu);
            if (message.humanize_memory != null && Object.hasOwnProperty.call(message, "humanize_memory"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.humanize_memory);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.time);
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.length);
            return writer;
        };

        /**
         * Decodes a TopPodResponse message from the specified reader or buffer.
         * @function decode
         * @memberof metrics.TopPodResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {metrics.TopPodResponse} TopPodResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopPodResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.metrics.TopPodResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cpu = reader.double();
                        break;
                    }
                case 2: {
                        message.memory = reader.double();
                        break;
                    }
                case 3: {
                        message.humanize_cpu = reader.string();
                        break;
                    }
                case 4: {
                        message.humanize_memory = reader.string();
                        break;
                    }
                case 5: {
                        message.time = reader.string();
                        break;
                    }
                case 6: {
                        message.length = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for TopPodResponse
         * @function getTypeUrl
         * @memberof metrics.TopPodResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TopPodResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/metrics.TopPodResponse";
        };

        return TopPodResponse;
    })();

    metrics.Metrics = (function() {

        /**
         * Constructs a new Metrics service.
         * @memberof metrics
         * @classdesc Represents a Metrics
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Metrics(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Metrics.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Metrics;

        /**
         * Callback as used by {@link metrics.Metrics#topPod}.
         * @memberof metrics.Metrics
         * @typedef TopPodCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {metrics.TopPodResponse} [response] TopPodResponse
         */

        /**
         * Calls TopPod.
         * @function topPod
         * @memberof metrics.Metrics
         * @instance
         * @param {metrics.TopPodRequest} request TopPodRequest message or plain object
         * @param {metrics.Metrics.TopPodCallback} callback Node-style callback called with the error, if any, and TopPodResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Metrics.prototype.topPod = function topPod(request, callback) {
            return this.rpcCall(topPod, $root.metrics.TopPodRequest, $root.metrics.TopPodResponse, request, callback);
        }, "name", { value: "TopPod" });

        /**
         * Calls TopPod.
         * @function topPod
         * @memberof metrics.Metrics
         * @instance
         * @param {metrics.TopPodRequest} request TopPodRequest message or plain object
         * @returns {Promise<metrics.TopPodResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link metrics.Metrics#streamTopPod}.
         * @memberof metrics.Metrics
         * @typedef StreamTopPodCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {metrics.TopPodResponse} [response] TopPodResponse
         */

        /**
         * Calls StreamTopPod.
         * @function streamTopPod
         * @memberof metrics.Metrics
         * @instance
         * @param {metrics.TopPodRequest} request TopPodRequest message or plain object
         * @param {metrics.Metrics.StreamTopPodCallback} callback Node-style callback called with the error, if any, and TopPodResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Metrics.prototype.streamTopPod = function streamTopPod(request, callback) {
            return this.rpcCall(streamTopPod, $root.metrics.TopPodRequest, $root.metrics.TopPodResponse, request, callback);
        }, "name", { value: "StreamTopPod" });

        /**
         * Calls StreamTopPod.
         * @function streamTopPod
         * @memberof metrics.Metrics
         * @instance
         * @param {metrics.TopPodRequest} request TopPodRequest message or plain object
         * @returns {Promise<metrics.TopPodResponse>} Promise
         * @variation 2
         */

        return Metrics;
    })();

    return metrics;
})();

export const model = $root.model = (() => {

    /**
     * Namespace model.
     * @exports model
     * @namespace
     */
    const model = {};

    model.ClusterModel = (function() {

        /**
         * Properties of a ClusterModel.
         * @memberof model
         * @interface IClusterModel
         * @property {number|null} [id] ClusterModel id
         * @property {string|null} [name] ClusterModel name
         * @property {string|null} [kube_config] ClusterModel kube_config
         * @property {string|null} [api_server_url] ClusterModel api_server_url
         * @property {string|null} [created_at] ClusterModel created_at
         * @property {string|null} [updated_at] ClusterModel updated_at
         * @property {string|null} [deleted_at] ClusterModel deleted_at
         */

        /**
         * Constructs a new ClusterModel.
         * @memberof model
         * @classdesc Represents a ClusterModel.
         * @implements IClusterModel
         * @constructor
         * @param {model.IClusterModel=} [properties] Properties to set
         */
        function ClusterModel(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClusterModel id.
         * @member {number} id
         * @memberof model.ClusterModel
         * @instance
         */
        ClusterModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ClusterModel name.
         * @member {string} name
         * @memberof model.ClusterModel
         * @instance
         */
        ClusterModel.prototype.name = "";

        /**
         * ClusterModel kube_config.
         * @member {string} kube_config
         * @memberof model.ClusterModel
         * @instance
         */
        ClusterModel.prototype.kube_config = "";

        /**
         * ClusterModel api_server_url.
         * @member {string} api_server_url
         * @memberof model.ClusterModel
         * @instance
         */
        ClusterModel.prototype.api_server_url = "";

        /**
         * ClusterModel created_at.
         * @member {string} created_at
         * @memberof model.ClusterModel
         * @instance
         */
        ClusterModel.prototype.created_at = "";

        /**
         * ClusterModel updated_at.
         * @member {string} updated_at
         * @memberof model.ClusterModel
         * @instance
         */
        ClusterModel.prototype.updated_at = "";

        /**
         * ClusterModel deleted_at.
         * @member {string} deleted_at
         * @memberof model.ClusterModel
         * @instance
         */
        ClusterModel.prototype.deleted_at = "";

        /**
         * Encodes the specified ClusterModel message. Does not implicitly {@link model.ClusterModel.verify|verify} messages.
         * @function encode
         * @memberof model.ClusterModel
         * @static
         * @param {model.ClusterModel} message ClusterModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClusterModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.kube_config != null && Object.hasOwnProperty.call(message, "kube_config"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.kube_config);
            if (message.api_server_url != null && Object.hasOwnProperty.call(message, "api_server_url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.api_server_url);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.created_at);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updated_at);
            if (message.deleted_at != null && Object.hasOwnProperty.call(message, "deleted_at"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.deleted_at);
            return writer;
        };

        /**
         * Decodes a ClusterModel message from the specified reader or buffer.
         * @function decode
         * @memberof model.ClusterModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.ClusterModel} ClusterModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClusterModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.ClusterModel();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.kube_config = reader.string();
                        break;
                    }
                case 4: {
                        message.api_server_url = reader.string();
                        break;
                    }
                case 5: {
                        message.created_at = reader.string();
                        break;
                    }
                case 6: {
                        message.updated_at = reader.string();
                        break;
                    }
                case 7: {
                        message.deleted_at = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ClusterModel
         * @function getTypeUrl
         * @memberof model.ClusterModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClusterModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/model.ClusterModel";
        };

        return ClusterModel;
    })();

    model.CardModel = (function() {

        /**
         * Properties of a CardModel.
         * @memberof model
         * @interface ICardModel
         * @property {number|null} [id] CardModel id
         * @property {string|null} [type] CardModel type
         * @property {string|null} [namespace] CardModel namespace
         * @property {string|null} [name] CardModel name
         * @property {number|null} [cluster_id] CardModel cluster_id
         * @property {string|null} [created_at] CardModel created_at
         * @property {string|null} [updated_at] CardModel updated_at
         * @property {string|null} [deleted_at] CardModel deleted_at
         */

        /**
         * Constructs a new CardModel.
         * @memberof model
         * @classdesc Represents a CardModel.
         * @implements ICardModel
         * @constructor
         * @param {model.ICardModel=} [properties] Properties to set
         */
        function CardModel(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardModel id.
         * @member {number} id
         * @memberof model.CardModel
         * @instance
         */
        CardModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CardModel type.
         * @member {string} type
         * @memberof model.CardModel
         * @instance
         */
        CardModel.prototype.type = "";

        /**
         * CardModel namespace.
         * @member {string} namespace
         * @memberof model.CardModel
         * @instance
         */
        CardModel.prototype.namespace = "";

        /**
         * CardModel name.
         * @member {string} name
         * @memberof model.CardModel
         * @instance
         */
        CardModel.prototype.name = "";

        /**
         * CardModel cluster_id.
         * @member {number} cluster_id
         * @memberof model.CardModel
         * @instance
         */
        CardModel.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CardModel created_at.
         * @member {string} created_at
         * @memberof model.CardModel
         * @instance
         */
        CardModel.prototype.created_at = "";

        /**
         * CardModel updated_at.
         * @member {string} updated_at
         * @memberof model.CardModel
         * @instance
         */
        CardModel.prototype.updated_at = "";

        /**
         * CardModel deleted_at.
         * @member {string} deleted_at
         * @memberof model.CardModel
         * @instance
         */
        CardModel.prototype.deleted_at = "";

        /**
         * Encodes the specified CardModel message. Does not implicitly {@link model.CardModel.verify|verify} messages.
         * @function encode
         * @memberof model.CardModel
         * @static
         * @param {model.CardModel} message CardModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.namespace);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.cluster_id);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.created_at);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.updated_at);
            if (message.deleted_at != null && Object.hasOwnProperty.call(message, "deleted_at"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.deleted_at);
            return writer;
        };

        /**
         * Decodes a CardModel message from the specified reader or buffer.
         * @function decode
         * @memberof model.CardModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.CardModel} CardModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.CardModel();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.namespace = reader.string();
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                case 6: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 7: {
                        message.created_at = reader.string();
                        break;
                    }
                case 8: {
                        message.updated_at = reader.string();
                        break;
                    }
                case 9: {
                        message.deleted_at = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for CardModel
         * @function getTypeUrl
         * @memberof model.CardModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CardModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/model.CardModel";
        };

        return CardModel;
    })();

    model.FileModel = (function() {

        /**
         * Properties of a FileModel.
         * @memberof model
         * @interface IFileModel
         * @property {number|null} [id] FileModel id
         * @property {string|null} [path] FileModel path
         * @property {number|null} [size] FileModel size
         * @property {string|null} [username] FileModel username
         * @property {string|null} [namespace] FileModel namespace
         * @property {string|null} [pod] FileModel pod
         * @property {string|null} [container] FileModel container
         * @property {string|null} [container_path] FileModel container_path
         * @property {string|null} [created_at] FileModel created_at
         * @property {string|null} [updated_at] FileModel updated_at
         * @property {string|null} [deleted_at] FileModel deleted_at
         * @property {boolean|null} [is_deleted] FileModel is_deleted
         */

        /**
         * Constructs a new FileModel.
         * @memberof model
         * @classdesc Represents a FileModel.
         * @implements IFileModel
         * @constructor
         * @param {model.IFileModel=} [properties] Properties to set
         */
        function FileModel(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileModel id.
         * @member {number} id
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FileModel path.
         * @member {string} path
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.path = "";

        /**
         * FileModel size.
         * @member {number} size
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FileModel username.
         * @member {string} username
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.username = "";

        /**
         * FileModel namespace.
         * @member {string} namespace
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.namespace = "";

        /**
         * FileModel pod.
         * @member {string} pod
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.pod = "";

        /**
         * FileModel container.
         * @member {string} container
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.container = "";

        /**
         * FileModel container_path.
         * @member {string} container_path
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.container_path = "";

        /**
         * FileModel created_at.
         * @member {string} created_at
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.created_at = "";

        /**
         * FileModel updated_at.
         * @member {string} updated_at
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.updated_at = "";

        /**
         * FileModel deleted_at.
         * @member {string} deleted_at
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.deleted_at = "";

        /**
         * FileModel is_deleted.
         * @member {boolean} is_deleted
         * @memberof model.FileModel
         * @instance
         */
        FileModel.prototype.is_deleted = false;

        /**
         * Encodes the specified FileModel message. Does not implicitly {@link model.FileModel.verify|verify} messages.
         * @function encode
         * @memberof model.FileModel
         * @static
         * @param {model.FileModel} message FileModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.size);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.username);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.pod);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.container);
            if (message.container_path != null && Object.hasOwnProperty.call(message, "container_path"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.container_path);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.created_at);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.updated_at);
            if (message.deleted_at != null && Object.hasOwnProperty.call(message, "deleted_at"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.deleted_at);
            if (message.is_deleted != null && Object.hasOwnProperty.call(message, "is_deleted"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.is_deleted);
            return writer;
        };

        /**
         * Decodes a FileModel message from the specified reader or buffer.
         * @function decode
         * @memberof model.FileModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.FileModel} FileModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.FileModel();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.path = reader.string();
                        break;
                    }
                case 3: {
                        message.size = reader.uint64();
                        break;
                    }
                case 4: {
                        message.username = reader.string();
                        break;
                    }
                case 5: {
                        message.namespace = reader.string();
                        break;
                    }
                case 6: {
                        message.pod = reader.string();
                        break;
                    }
                case 7: {
                        message.container = reader.string();
                        break;
                    }
                case 8: {
                        message.container_path = reader.string();
                        break;
                    }
                case 9: {
                        message.created_at = reader.string();
                        break;
                    }
                case 10: {
                        message.updated_at = reader.string();
                        break;
                    }
                case 11: {
                        message.deleted_at = reader.string();
                        break;
                    }
                case 12: {
                        message.is_deleted = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for FileModel
         * @function getTypeUrl
         * @memberof model.FileModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/model.FileModel";
        };

        return FileModel;
    })();

    return model;
})();

export const picture = $root.picture = (() => {

    /**
     * Namespace picture.
     * @exports picture
     * @namespace
     */
    const picture = {};

    picture.BackgroundRequest = (function() {

        /**
         * Properties of a BackgroundRequest.
         * @memberof picture
         * @interface IBackgroundRequest
         * @property {boolean|null} [random] BackgroundRequest random
         */

        /**
         * Constructs a new BackgroundRequest.
         * @memberof picture
         * @classdesc Represents a BackgroundRequest.
         * @implements IBackgroundRequest
         * @constructor
         * @param {picture.IBackgroundRequest=} [properties] Properties to set
         */
        function BackgroundRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackgroundRequest random.
         * @member {boolean} random
         * @memberof picture.BackgroundRequest
         * @instance
         */
        BackgroundRequest.prototype.random = false;

        /**
         * Encodes the specified BackgroundRequest message. Does not implicitly {@link picture.BackgroundRequest.verify|verify} messages.
         * @function encode
         * @memberof picture.BackgroundRequest
         * @static
         * @param {picture.BackgroundRequest} message BackgroundRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackgroundRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.random != null && Object.hasOwnProperty.call(message, "random"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.random);
            return writer;
        };

        /**
         * Decodes a BackgroundRequest message from the specified reader or buffer.
         * @function decode
         * @memberof picture.BackgroundRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {picture.BackgroundRequest} BackgroundRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackgroundRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.picture.BackgroundRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.random = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for BackgroundRequest
         * @function getTypeUrl
         * @memberof picture.BackgroundRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BackgroundRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/picture.BackgroundRequest";
        };

        return BackgroundRequest;
    })();

    picture.BackgroundResponse = (function() {

        /**
         * Properties of a BackgroundResponse.
         * @memberof picture
         * @interface IBackgroundResponse
         * @property {string|null} [url] BackgroundResponse url
         * @property {string|null} [copyright] BackgroundResponse copyright
         */

        /**
         * Constructs a new BackgroundResponse.
         * @memberof picture
         * @classdesc Represents a BackgroundResponse.
         * @implements IBackgroundResponse
         * @constructor
         * @param {picture.IBackgroundResponse=} [properties] Properties to set
         */
        function BackgroundResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BackgroundResponse url.
         * @member {string} url
         * @memberof picture.BackgroundResponse
         * @instance
         */
        BackgroundResponse.prototype.url = "";

        /**
         * BackgroundResponse copyright.
         * @member {string} copyright
         * @memberof picture.BackgroundResponse
         * @instance
         */
        BackgroundResponse.prototype.copyright = "";

        /**
         * Encodes the specified BackgroundResponse message. Does not implicitly {@link picture.BackgroundResponse.verify|verify} messages.
         * @function encode
         * @memberof picture.BackgroundResponse
         * @static
         * @param {picture.BackgroundResponse} message BackgroundResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackgroundResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            if (message.copyright != null && Object.hasOwnProperty.call(message, "copyright"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.copyright);
            return writer;
        };

        /**
         * Decodes a BackgroundResponse message from the specified reader or buffer.
         * @function decode
         * @memberof picture.BackgroundResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {picture.BackgroundResponse} BackgroundResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackgroundResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.picture.BackgroundResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                case 2: {
                        message.copyright = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for BackgroundResponse
         * @function getTypeUrl
         * @memberof picture.BackgroundResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BackgroundResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/picture.BackgroundResponse";
        };

        return BackgroundResponse;
    })();

    picture.Picture = (function() {

        /**
         * Constructs a new Picture service.
         * @memberof picture
         * @classdesc Represents a Picture
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Picture(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Picture.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Picture;

        /**
         * Callback as used by {@link picture.Picture#background}.
         * @memberof picture.Picture
         * @typedef BackgroundCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {picture.BackgroundResponse} [response] BackgroundResponse
         */

        /**
         * Calls Background.
         * @function background
         * @memberof picture.Picture
         * @instance
         * @param {picture.BackgroundRequest} request BackgroundRequest message or plain object
         * @param {picture.Picture.BackgroundCallback} callback Node-style callback called with the error, if any, and BackgroundResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Picture.prototype.background = function background(request, callback) {
            return this.rpcCall(background, $root.picture.BackgroundRequest, $root.picture.BackgroundResponse, request, callback);
        }, "name", { value: "Background" });

        /**
         * Calls Background.
         * @function background
         * @memberof picture.Picture
         * @instance
         * @param {picture.BackgroundRequest} request BackgroundRequest message or plain object
         * @returns {Promise<picture.BackgroundResponse>} Promise
         * @variation 2
         */

        return Picture;
    })();

    return picture;
})();

export const rbac = $root.rbac = (() => {

    /**
     * Namespace rbac.
     * @exports rbac
     * @namespace
     */
    const rbac = {};

    /**
     * Permission enum.
     * @name rbac.Permission
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} Card=1 Card value
     * @property {number} ClusterAdd=10 ClusterAdd value
     * @property {number} ClusterDelete=11 ClusterDelete value
     * @property {number} ClusterView=12 ClusterView value
     * @property {number} FileUpload=20 FileUpload value
     * @property {number} FileDelete=21 FileDelete value
     * @property {number} FileDownload=22 FileDownload value
     * @property {number} EventView=30 EventView value
     */
    rbac.Permission = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[1] = "Card"] = 1;
        values[valuesById[10] = "ClusterAdd"] = 10;
        values[valuesById[11] = "ClusterDelete"] = 11;
        values[valuesById[12] = "ClusterView"] = 12;
        values[valuesById[20] = "FileUpload"] = 20;
        values[valuesById[21] = "FileDelete"] = 21;
        values[valuesById[22] = "FileDownload"] = 22;
        values[valuesById[30] = "EventView"] = 30;
        return values;
    })();

    /**
     * State enum.
     * @name rbac.State
     * @enum {number}
     * @property {number} _=0 _ value
     * @property {number} Request=1 Request value
     * @property {number} Approved=2 Approved value
     * @property {number} Rejected=3 Rejected value
     * @property {number} Revoked=4 Revoked value
     */
    rbac.State = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "_"] = 0;
        values[valuesById[1] = "Request"] = 1;
        values[valuesById[2] = "Approved"] = 2;
        values[valuesById[3] = "Rejected"] = 3;
        values[valuesById[4] = "Revoked"] = 4;
        return values;
    })();

    rbac.UserPermission = (function() {

        /**
         * Properties of a UserPermission.
         * @memberof rbac
         * @interface IUserPermission
         * @property {number|null} [id] UserPermission id
         * @property {string|null} [username] UserPermission username
         * @property {string|null} [email] UserPermission email
         * @property {rbac.Permission|null} [permission] UserPermission permission
         * @property {rbac.State|null} [state] UserPermission state
         * @property {string|null} [reason] UserPermission reason
         * @property {number|null} [subject_id] UserPermission subject_id
         * @property {string|null} [description] UserPermission description
         * @property {string|null} [created_at] UserPermission created_at
         * @property {string|null} [updated_at] UserPermission updated_at
         * @property {string|null} [deleted_at] UserPermission deleted_at
         */

        /**
         * Constructs a new UserPermission.
         * @memberof rbac
         * @classdesc Represents a UserPermission.
         * @implements IUserPermission
         * @constructor
         * @param {rbac.IUserPermission=} [properties] Properties to set
         */
        function UserPermission(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPermission id.
         * @member {number} id
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserPermission username.
         * @member {string} username
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.username = "";

        /**
         * UserPermission email.
         * @member {string} email
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.email = "";

        /**
         * UserPermission permission.
         * @member {rbac.Permission} permission
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.permission = 0;

        /**
         * UserPermission state.
         * @member {rbac.State} state
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.state = 0;

        /**
         * UserPermission reason.
         * @member {string} reason
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.reason = "";

        /**
         * UserPermission subject_id.
         * @member {number} subject_id
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.subject_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserPermission description.
         * @member {string} description
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.description = "";

        /**
         * UserPermission created_at.
         * @member {string} created_at
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.created_at = "";

        /**
         * UserPermission updated_at.
         * @member {string} updated_at
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.updated_at = "";

        /**
         * UserPermission deleted_at.
         * @member {string} deleted_at
         * @memberof rbac.UserPermission
         * @instance
         */
        UserPermission.prototype.deleted_at = "";

        /**
         * Encodes the specified UserPermission message. Does not implicitly {@link rbac.UserPermission.verify|verify} messages.
         * @function encode
         * @memberof rbac.UserPermission
         * @static
         * @param {rbac.UserPermission} message UserPermission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPermission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.permission);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.reason);
            if (message.subject_id != null && Object.hasOwnProperty.call(message, "subject_id"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.subject_id);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.description);
            if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                writer.uint32(/* id 100, wireType 2 =*/802).string(message.created_at);
            if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                writer.uint32(/* id 101, wireType 2 =*/810).string(message.updated_at);
            if (message.deleted_at != null && Object.hasOwnProperty.call(message, "deleted_at"))
                writer.uint32(/* id 102, wireType 2 =*/818).string(message.deleted_at);
            return writer;
        };

        /**
         * Decodes a UserPermission message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.UserPermission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.UserPermission} UserPermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPermission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.UserPermission();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.username = reader.string();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        message.permission = reader.int32();
                        break;
                    }
                case 5: {
                        message.state = reader.int32();
                        break;
                    }
                case 6: {
                        message.reason = reader.string();
                        break;
                    }
                case 7: {
                        message.subject_id = reader.int64();
                        break;
                    }
                case 8: {
                        message.description = reader.string();
                        break;
                    }
                case 100: {
                        message.created_at = reader.string();
                        break;
                    }
                case 101: {
                        message.updated_at = reader.string();
                        break;
                    }
                case 102: {
                        message.deleted_at = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for UserPermission
         * @function getTypeUrl
         * @memberof rbac.UserPermission
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserPermission.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.UserPermission";
        };

        return UserPermission;
    })();

    rbac.ListRequest = (function() {

        /**
         * Properties of a ListRequest.
         * @memberof rbac
         * @interface IListRequest
         * @property {number|null} [page] ListRequest page
         * @property {number|null} [page_size] ListRequest page_size
         * @property {rbac.State|null} [state] ListRequest state
         * @property {string|null} [email] ListRequest email
         */

        /**
         * Constructs a new ListRequest.
         * @memberof rbac
         * @classdesc Represents a ListRequest.
         * @implements IListRequest
         * @constructor
         * @param {rbac.IListRequest=} [properties] Properties to set
         */
        function ListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListRequest page.
         * @member {number} page
         * @memberof rbac.ListRequest
         * @instance
         */
        ListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListRequest page_size.
         * @member {number} page_size
         * @memberof rbac.ListRequest
         * @instance
         */
        ListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListRequest state.
         * @member {rbac.State} state
         * @memberof rbac.ListRequest
         * @instance
         */
        ListRequest.prototype.state = 0;

        /**
         * ListRequest email.
         * @member {string} email
         * @memberof rbac.ListRequest
         * @instance
         */
        ListRequest.prototype.email = "";

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link rbac.ListRequest.verify|verify} messages.
         * @function encode
         * @memberof rbac.ListRequest
         * @static
         * @param {rbac.ListRequest} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            return writer;
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.ListRequest} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.ListRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                case 3: {
                        message.state = reader.int32();
                        break;
                    }
                case 4: {
                        message.email = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListRequest
         * @function getTypeUrl
         * @memberof rbac.ListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.ListRequest";
        };

        return ListRequest;
    })();

    rbac.ListResponse = (function() {

        /**
         * Properties of a ListResponse.
         * @memberof rbac
         * @interface IListResponse
         * @property {number|null} [page] ListResponse page
         * @property {number|null} [page_size] ListResponse page_size
         * @property {Array.<rbac.UserPermission>|null} [items] ListResponse items
         * @property {number|null} [count] ListResponse count
         */

        /**
         * Constructs a new ListResponse.
         * @memberof rbac
         * @classdesc Represents a ListResponse.
         * @implements IListResponse
         * @constructor
         * @param {rbac.IListResponse=} [properties] Properties to set
         */
        function ListResponse(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListResponse page.
         * @member {number} page
         * @memberof rbac.ListResponse
         * @instance
         */
        ListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse page_size.
         * @member {number} page_size
         * @memberof rbac.ListResponse
         * @instance
         */
        ListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ListResponse items.
         * @member {Array.<rbac.UserPermission>} items
         * @memberof rbac.ListResponse
         * @instance
         */
        ListResponse.prototype.items = $util.emptyArray;

        /**
         * ListResponse count.
         * @member {number} count
         * @memberof rbac.ListResponse
         * @instance
         */
        ListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link rbac.ListResponse.verify|verify} messages.
         * @function encode
         * @memberof rbac.ListResponse
         * @static
         * @param {rbac.ListResponse} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
            if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.rbac.UserPermission.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.count);
            return writer;
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.ListResponse} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.ListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int64();
                        break;
                    }
                case 2: {
                        message.page_size = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.rbac.UserPermission.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.count = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ListResponse
         * @function getTypeUrl
         * @memberof rbac.ListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.ListResponse";
        };

        return ListResponse;
    })();

    rbac.ApplyForRequest = (function() {

        /**
         * Properties of an ApplyForRequest.
         * @memberof rbac
         * @interface IApplyForRequest
         * @property {number|null} [subject_id] ApplyForRequest subject_id
         * @property {rbac.Permission|null} [permission] ApplyForRequest permission
         */

        /**
         * Constructs a new ApplyForRequest.
         * @memberof rbac
         * @classdesc Represents an ApplyForRequest.
         * @implements IApplyForRequest
         * @constructor
         * @param {rbac.IApplyForRequest=} [properties] Properties to set
         */
        function ApplyForRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApplyForRequest subject_id.
         * @member {number} subject_id
         * @memberof rbac.ApplyForRequest
         * @instance
         */
        ApplyForRequest.prototype.subject_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ApplyForRequest permission.
         * @member {rbac.Permission} permission
         * @memberof rbac.ApplyForRequest
         * @instance
         */
        ApplyForRequest.prototype.permission = 0;

        /**
         * Encodes the specified ApplyForRequest message. Does not implicitly {@link rbac.ApplyForRequest.verify|verify} messages.
         * @function encode
         * @memberof rbac.ApplyForRequest
         * @static
         * @param {rbac.ApplyForRequest} message ApplyForRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyForRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject_id != null && Object.hasOwnProperty.call(message, "subject_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.subject_id);
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.permission);
            return writer;
        };

        /**
         * Decodes an ApplyForRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.ApplyForRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.ApplyForRequest} ApplyForRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyForRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.ApplyForRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.permission = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ApplyForRequest
         * @function getTypeUrl
         * @memberof rbac.ApplyForRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApplyForRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.ApplyForRequest";
        };

        return ApplyForRequest;
    })();

    rbac.ApplyForResponse = (function() {

        /**
         * Properties of an ApplyForResponse.
         * @memberof rbac
         * @interface IApplyForResponse
         * @property {rbac.UserPermission|null} [permission] ApplyForResponse permission
         */

        /**
         * Constructs a new ApplyForResponse.
         * @memberof rbac
         * @classdesc Represents an ApplyForResponse.
         * @implements IApplyForResponse
         * @constructor
         * @param {rbac.IApplyForResponse=} [properties] Properties to set
         */
        function ApplyForResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApplyForResponse permission.
         * @member {rbac.UserPermission|null|undefined} permission
         * @memberof rbac.ApplyForResponse
         * @instance
         */
        ApplyForResponse.prototype.permission = null;

        /**
         * Encodes the specified ApplyForResponse message. Does not implicitly {@link rbac.ApplyForResponse.verify|verify} messages.
         * @function encode
         * @memberof rbac.ApplyForResponse
         * @static
         * @param {rbac.ApplyForResponse} message ApplyForResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyForResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                $root.rbac.UserPermission.encode(message.permission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ApplyForResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.ApplyForResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.ApplyForResponse} ApplyForResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyForResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.ApplyForResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.permission = $root.rbac.UserPermission.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ApplyForResponse
         * @function getTypeUrl
         * @memberof rbac.ApplyForResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApplyForResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.ApplyForResponse";
        };

        return ApplyForResponse;
    })();

    rbac.ApproveRequest = (function() {

        /**
         * Properties of an ApproveRequest.
         * @memberof rbac
         * @interface IApproveRequest
         * @property {number|null} [id] ApproveRequest id
         */

        /**
         * Constructs a new ApproveRequest.
         * @memberof rbac
         * @classdesc Represents an ApproveRequest.
         * @implements IApproveRequest
         * @constructor
         * @param {rbac.IApproveRequest=} [properties] Properties to set
         */
        function ApproveRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApproveRequest id.
         * @member {number} id
         * @memberof rbac.ApproveRequest
         * @instance
         */
        ApproveRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ApproveRequest message. Does not implicitly {@link rbac.ApproveRequest.verify|verify} messages.
         * @function encode
         * @memberof rbac.ApproveRequest
         * @static
         * @param {rbac.ApproveRequest} message ApproveRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApproveRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Decodes an ApproveRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.ApproveRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.ApproveRequest} ApproveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApproveRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.ApproveRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ApproveRequest
         * @function getTypeUrl
         * @memberof rbac.ApproveRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApproveRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.ApproveRequest";
        };

        return ApproveRequest;
    })();

    rbac.ApproveResponse = (function() {

        /**
         * Properties of an ApproveResponse.
         * @memberof rbac
         * @interface IApproveResponse
         * @property {rbac.UserPermission|null} [permission] ApproveResponse permission
         */

        /**
         * Constructs a new ApproveResponse.
         * @memberof rbac
         * @classdesc Represents an ApproveResponse.
         * @implements IApproveResponse
         * @constructor
         * @param {rbac.IApproveResponse=} [properties] Properties to set
         */
        function ApproveResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApproveResponse permission.
         * @member {rbac.UserPermission|null|undefined} permission
         * @memberof rbac.ApproveResponse
         * @instance
         */
        ApproveResponse.prototype.permission = null;

        /**
         * Encodes the specified ApproveResponse message. Does not implicitly {@link rbac.ApproveResponse.verify|verify} messages.
         * @function encode
         * @memberof rbac.ApproveResponse
         * @static
         * @param {rbac.ApproveResponse} message ApproveResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApproveResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                $root.rbac.UserPermission.encode(message.permission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an ApproveResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.ApproveResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.ApproveResponse} ApproveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApproveResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.ApproveResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.permission = $root.rbac.UserPermission.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for ApproveResponse
         * @function getTypeUrl
         * @memberof rbac.ApproveResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApproveResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.ApproveResponse";
        };

        return ApproveResponse;
    })();

    rbac.NotApprovedReasonRequest = (function() {

        /**
         * Properties of a NotApprovedReasonRequest.
         * @memberof rbac
         * @interface INotApprovedReasonRequest
         * @property {number|null} [subject_id] NotApprovedReasonRequest subject_id
         * @property {rbac.Permission|null} [permission] NotApprovedReasonRequest permission
         */

        /**
         * Constructs a new NotApprovedReasonRequest.
         * @memberof rbac
         * @classdesc Represents a NotApprovedReasonRequest.
         * @implements INotApprovedReasonRequest
         * @constructor
         * @param {rbac.INotApprovedReasonRequest=} [properties] Properties to set
         */
        function NotApprovedReasonRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotApprovedReasonRequest subject_id.
         * @member {number} subject_id
         * @memberof rbac.NotApprovedReasonRequest
         * @instance
         */
        NotApprovedReasonRequest.prototype.subject_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotApprovedReasonRequest permission.
         * @member {rbac.Permission} permission
         * @memberof rbac.NotApprovedReasonRequest
         * @instance
         */
        NotApprovedReasonRequest.prototype.permission = 0;

        /**
         * Encodes the specified NotApprovedReasonRequest message. Does not implicitly {@link rbac.NotApprovedReasonRequest.verify|verify} messages.
         * @function encode
         * @memberof rbac.NotApprovedReasonRequest
         * @static
         * @param {rbac.NotApprovedReasonRequest} message NotApprovedReasonRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotApprovedReasonRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject_id != null && Object.hasOwnProperty.call(message, "subject_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.subject_id);
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.permission);
            return writer;
        };

        /**
         * Decodes a NotApprovedReasonRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.NotApprovedReasonRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.NotApprovedReasonRequest} NotApprovedReasonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotApprovedReasonRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.NotApprovedReasonRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.permission = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for NotApprovedReasonRequest
         * @function getTypeUrl
         * @memberof rbac.NotApprovedReasonRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotApprovedReasonRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.NotApprovedReasonRequest";
        };

        return NotApprovedReasonRequest;
    })();

    rbac.NotApprovedReasonResponse = (function() {

        /**
         * Properties of a NotApprovedReasonResponse.
         * @memberof rbac
         * @interface INotApprovedReasonResponse
         * @property {string|null} [reason] NotApprovedReasonResponse reason
         */

        /**
         * Constructs a new NotApprovedReasonResponse.
         * @memberof rbac
         * @classdesc Represents a NotApprovedReasonResponse.
         * @implements INotApprovedReasonResponse
         * @constructor
         * @param {rbac.INotApprovedReasonResponse=} [properties] Properties to set
         */
        function NotApprovedReasonResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotApprovedReasonResponse reason.
         * @member {string} reason
         * @memberof rbac.NotApprovedReasonResponse
         * @instance
         */
        NotApprovedReasonResponse.prototype.reason = "";

        /**
         * Encodes the specified NotApprovedReasonResponse message. Does not implicitly {@link rbac.NotApprovedReasonResponse.verify|verify} messages.
         * @function encode
         * @memberof rbac.NotApprovedReasonResponse
         * @static
         * @param {rbac.NotApprovedReasonResponse} message NotApprovedReasonResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotApprovedReasonResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
            return writer;
        };

        /**
         * Decodes a NotApprovedReasonResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.NotApprovedReasonResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.NotApprovedReasonResponse} NotApprovedReasonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotApprovedReasonResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.NotApprovedReasonResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for NotApprovedReasonResponse
         * @function getTypeUrl
         * @memberof rbac.NotApprovedReasonResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotApprovedReasonResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.NotApprovedReasonResponse";
        };

        return NotApprovedReasonResponse;
    })();

    rbac.RejectRequest = (function() {

        /**
         * Properties of a RejectRequest.
         * @memberof rbac
         * @interface IRejectRequest
         * @property {number|null} [id] RejectRequest id
         * @property {string|null} [reason] RejectRequest reason
         */

        /**
         * Constructs a new RejectRequest.
         * @memberof rbac
         * @classdesc Represents a RejectRequest.
         * @implements IRejectRequest
         * @constructor
         * @param {rbac.IRejectRequest=} [properties] Properties to set
         */
        function RejectRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RejectRequest id.
         * @member {number} id
         * @memberof rbac.RejectRequest
         * @instance
         */
        RejectRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RejectRequest reason.
         * @member {string} reason
         * @memberof rbac.RejectRequest
         * @instance
         */
        RejectRequest.prototype.reason = "";

        /**
         * Encodes the specified RejectRequest message. Does not implicitly {@link rbac.RejectRequest.verify|verify} messages.
         * @function encode
         * @memberof rbac.RejectRequest
         * @static
         * @param {rbac.RejectRequest} message RejectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RejectRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Decodes a RejectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.RejectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.RejectRequest} RejectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RejectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.RejectRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for RejectRequest
         * @function getTypeUrl
         * @memberof rbac.RejectRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RejectRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.RejectRequest";
        };

        return RejectRequest;
    })();

    rbac.RejectResponse = (function() {

        /**
         * Properties of a RejectResponse.
         * @memberof rbac
         * @interface IRejectResponse
         * @property {rbac.UserPermission|null} [permission] RejectResponse permission
         */

        /**
         * Constructs a new RejectResponse.
         * @memberof rbac
         * @classdesc Represents a RejectResponse.
         * @implements IRejectResponse
         * @constructor
         * @param {rbac.IRejectResponse=} [properties] Properties to set
         */
        function RejectResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RejectResponse permission.
         * @member {rbac.UserPermission|null|undefined} permission
         * @memberof rbac.RejectResponse
         * @instance
         */
        RejectResponse.prototype.permission = null;

        /**
         * Encodes the specified RejectResponse message. Does not implicitly {@link rbac.RejectResponse.verify|verify} messages.
         * @function encode
         * @memberof rbac.RejectResponse
         * @static
         * @param {rbac.RejectResponse} message RejectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RejectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                $root.rbac.UserPermission.encode(message.permission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RejectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.RejectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.RejectResponse} RejectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RejectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.RejectResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.permission = $root.rbac.UserPermission.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for RejectResponse
         * @function getTypeUrl
         * @memberof rbac.RejectResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RejectResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.RejectResponse";
        };

        return RejectResponse;
    })();

    rbac.RevokeRequest = (function() {

        /**
         * Properties of a RevokeRequest.
         * @memberof rbac
         * @interface IRevokeRequest
         * @property {number|null} [id] RevokeRequest id
         * @property {string|null} [reason] RevokeRequest reason
         */

        /**
         * Constructs a new RevokeRequest.
         * @memberof rbac
         * @classdesc Represents a RevokeRequest.
         * @implements IRevokeRequest
         * @constructor
         * @param {rbac.IRevokeRequest=} [properties] Properties to set
         */
        function RevokeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RevokeRequest id.
         * @member {number} id
         * @memberof rbac.RevokeRequest
         * @instance
         */
        RevokeRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RevokeRequest reason.
         * @member {string} reason
         * @memberof rbac.RevokeRequest
         * @instance
         */
        RevokeRequest.prototype.reason = "";

        /**
         * Encodes the specified RevokeRequest message. Does not implicitly {@link rbac.RevokeRequest.verify|verify} messages.
         * @function encode
         * @memberof rbac.RevokeRequest
         * @static
         * @param {rbac.RevokeRequest} message RevokeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevokeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Decodes a RevokeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.RevokeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.RevokeRequest} RevokeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevokeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.RevokeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for RevokeRequest
         * @function getTypeUrl
         * @memberof rbac.RevokeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RevokeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.RevokeRequest";
        };

        return RevokeRequest;
    })();

    rbac.RevokeResponse = (function() {

        /**
         * Properties of a RevokeResponse.
         * @memberof rbac
         * @interface IRevokeResponse
         * @property {rbac.UserPermission|null} [permission] RevokeResponse permission
         */

        /**
         * Constructs a new RevokeResponse.
         * @memberof rbac
         * @classdesc Represents a RevokeResponse.
         * @implements IRevokeResponse
         * @constructor
         * @param {rbac.IRevokeResponse=} [properties] Properties to set
         */
        function RevokeResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RevokeResponse permission.
         * @member {rbac.UserPermission|null|undefined} permission
         * @memberof rbac.RevokeResponse
         * @instance
         */
        RevokeResponse.prototype.permission = null;

        /**
         * Encodes the specified RevokeResponse message. Does not implicitly {@link rbac.RevokeResponse.verify|verify} messages.
         * @function encode
         * @memberof rbac.RevokeResponse
         * @static
         * @param {rbac.RevokeResponse} message RevokeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevokeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.permission != null && Object.hasOwnProperty.call(message, "permission"))
                $root.rbac.UserPermission.encode(message.permission, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RevokeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rbac.RevokeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rbac.RevokeResponse} RevokeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevokeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.rbac.RevokeResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.permission = $root.rbac.UserPermission.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for RevokeResponse
         * @function getTypeUrl
         * @memberof rbac.RevokeResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RevokeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/rbac.RevokeResponse";
        };

        return RevokeResponse;
    })();

    rbac.RBAC = (function() {

        /**
         * Constructs a new RBAC service.
         * @memberof rbac
         * @classdesc Represents a RBAC
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function RBAC(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (RBAC.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = RBAC;

        /**
         * Callback as used by {@link rbac.RBAC#list}.
         * @memberof rbac.RBAC
         * @typedef ListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rbac.ListResponse} [response] ListResponse
         */

        /**
         * Calls List.
         * @function list
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.ListRequest} request ListRequest message or plain object
         * @param {rbac.RBAC.ListCallback} callback Node-style callback called with the error, if any, and ListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RBAC.prototype.list = function list(request, callback) {
            return this.rpcCall(list, $root.rbac.ListRequest, $root.rbac.ListResponse, request, callback);
        }, "name", { value: "List" });

        /**
         * Calls List.
         * @function list
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.ListRequest} request ListRequest message or plain object
         * @returns {Promise<rbac.ListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rbac.RBAC#applyFor}.
         * @memberof rbac.RBAC
         * @typedef ApplyForCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rbac.ApplyForResponse} [response] ApplyForResponse
         */

        /**
         * Calls ApplyFor.
         * @function applyFor
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.ApplyForRequest} request ApplyForRequest message or plain object
         * @param {rbac.RBAC.ApplyForCallback} callback Node-style callback called with the error, if any, and ApplyForResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RBAC.prototype.applyFor = function applyFor(request, callback) {
            return this.rpcCall(applyFor, $root.rbac.ApplyForRequest, $root.rbac.ApplyForResponse, request, callback);
        }, "name", { value: "ApplyFor" });

        /**
         * Calls ApplyFor.
         * @function applyFor
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.ApplyForRequest} request ApplyForRequest message or plain object
         * @returns {Promise<rbac.ApplyForResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rbac.RBAC#approve}.
         * @memberof rbac.RBAC
         * @typedef ApproveCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rbac.ApproveResponse} [response] ApproveResponse
         */

        /**
         * Calls Approve.
         * @function approve
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.ApproveRequest} request ApproveRequest message or plain object
         * @param {rbac.RBAC.ApproveCallback} callback Node-style callback called with the error, if any, and ApproveResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RBAC.prototype.approve = function approve(request, callback) {
            return this.rpcCall(approve, $root.rbac.ApproveRequest, $root.rbac.ApproveResponse, request, callback);
        }, "name", { value: "Approve" });

        /**
         * Calls Approve.
         * @function approve
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.ApproveRequest} request ApproveRequest message or plain object
         * @returns {Promise<rbac.ApproveResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rbac.RBAC#reject}.
         * @memberof rbac.RBAC
         * @typedef RejectCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rbac.RejectResponse} [response] RejectResponse
         */

        /**
         * Calls Reject.
         * @function reject
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.RejectRequest} request RejectRequest message or plain object
         * @param {rbac.RBAC.RejectCallback} callback Node-style callback called with the error, if any, and RejectResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RBAC.prototype.reject = function reject(request, callback) {
            return this.rpcCall(reject, $root.rbac.RejectRequest, $root.rbac.RejectResponse, request, callback);
        }, "name", { value: "Reject" });

        /**
         * Calls Reject.
         * @function reject
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.RejectRequest} request RejectRequest message or plain object
         * @returns {Promise<rbac.RejectResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rbac.RBAC#revoke}.
         * @memberof rbac.RBAC
         * @typedef RevokeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rbac.RevokeResponse} [response] RevokeResponse
         */

        /**
         * Calls Revoke.
         * @function revoke
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.RevokeRequest} request RevokeRequest message or plain object
         * @param {rbac.RBAC.RevokeCallback} callback Node-style callback called with the error, if any, and RevokeResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RBAC.prototype.revoke = function revoke(request, callback) {
            return this.rpcCall(revoke, $root.rbac.RevokeRequest, $root.rbac.RevokeResponse, request, callback);
        }, "name", { value: "Revoke" });

        /**
         * Calls Revoke.
         * @function revoke
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.RevokeRequest} request RevokeRequest message or plain object
         * @returns {Promise<rbac.RevokeResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rbac.RBAC#notApprovedReason}.
         * @memberof rbac.RBAC
         * @typedef NotApprovedReasonCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rbac.NotApprovedReasonResponse} [response] NotApprovedReasonResponse
         */

        /**
         * Calls NotApprovedReason.
         * @function notApprovedReason
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.NotApprovedReasonRequest} request NotApprovedReasonRequest message or plain object
         * @param {rbac.RBAC.NotApprovedReasonCallback} callback Node-style callback called with the error, if any, and NotApprovedReasonResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(RBAC.prototype.notApprovedReason = function notApprovedReason(request, callback) {
            return this.rpcCall(notApprovedReason, $root.rbac.NotApprovedReasonRequest, $root.rbac.NotApprovedReasonResponse, request, callback);
        }, "name", { value: "NotApprovedReason" });

        /**
         * Calls NotApprovedReason.
         * @function notApprovedReason
         * @memberof rbac.RBAC
         * @instance
         * @param {rbac.NotApprovedReasonRequest} request NotApprovedReasonRequest message or plain object
         * @returns {Promise<rbac.NotApprovedReasonResponse>} Promise
         * @variation 2
         */

        return RBAC;
    })();

    return rbac;
})();

export const version = $root.version = (() => {

    /**
     * Namespace version.
     * @exports version
     * @namespace
     */
    const version = {};

    version.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof version
         * @interface IRequest
         */

        /**
         * Constructs a new Request.
         * @memberof version
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {version.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Encodes the specified Request message. Does not implicitly {@link version.Request.verify|verify} messages.
         * @function encode
         * @memberof version.Request
         * @static
         * @param {version.Request} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof version.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {version.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.version.Request();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Request
         * @function getTypeUrl
         * @memberof version.Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/version.Request";
        };

        return Request;
    })();

    version.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof version
         * @interface IResponse
         * @property {string|null} [version] Response version
         * @property {string|null} [build_date] Response build_date
         * @property {string|null} [git_branch] Response git_branch
         * @property {string|null} [git_commit] Response git_commit
         * @property {string|null} [git_tag] Response git_tag
         * @property {string|null} [go_version] Response go_version
         * @property {string|null} [compiler] Response compiler
         * @property {string|null} [platform] Response platform
         * @property {string|null} [kubectl_version] Response kubectl_version
         * @property {string|null} [git_repo] Response git_repo
         */

        /**
         * Constructs a new Response.
         * @memberof version
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {version.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response version.
         * @member {string} version
         * @memberof version.Response
         * @instance
         */
        Response.prototype.version = "";

        /**
         * Response build_date.
         * @member {string} build_date
         * @memberof version.Response
         * @instance
         */
        Response.prototype.build_date = "";

        /**
         * Response git_branch.
         * @member {string} git_branch
         * @memberof version.Response
         * @instance
         */
        Response.prototype.git_branch = "";

        /**
         * Response git_commit.
         * @member {string} git_commit
         * @memberof version.Response
         * @instance
         */
        Response.prototype.git_commit = "";

        /**
         * Response git_tag.
         * @member {string} git_tag
         * @memberof version.Response
         * @instance
         */
        Response.prototype.git_tag = "";

        /**
         * Response go_version.
         * @member {string} go_version
         * @memberof version.Response
         * @instance
         */
        Response.prototype.go_version = "";

        /**
         * Response compiler.
         * @member {string} compiler
         * @memberof version.Response
         * @instance
         */
        Response.prototype.compiler = "";

        /**
         * Response platform.
         * @member {string} platform
         * @memberof version.Response
         * @instance
         */
        Response.prototype.platform = "";

        /**
         * Response kubectl_version.
         * @member {string} kubectl_version
         * @memberof version.Response
         * @instance
         */
        Response.prototype.kubectl_version = "";

        /**
         * Response git_repo.
         * @member {string} git_repo
         * @memberof version.Response
         * @instance
         */
        Response.prototype.git_repo = "";

        /**
         * Encodes the specified Response message. Does not implicitly {@link version.Response.verify|verify} messages.
         * @function encode
         * @memberof version.Response
         * @static
         * @param {version.Response} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            if (message.build_date != null && Object.hasOwnProperty.call(message, "build_date"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.build_date);
            if (message.git_branch != null && Object.hasOwnProperty.call(message, "git_branch"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.git_branch);
            if (message.git_commit != null && Object.hasOwnProperty.call(message, "git_commit"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.git_commit);
            if (message.git_tag != null && Object.hasOwnProperty.call(message, "git_tag"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.git_tag);
            if (message.go_version != null && Object.hasOwnProperty.call(message, "go_version"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.go_version);
            if (message.compiler != null && Object.hasOwnProperty.call(message, "compiler"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.compiler);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.platform);
            if (message.kubectl_version != null && Object.hasOwnProperty.call(message, "kubectl_version"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.kubectl_version);
            if (message.git_repo != null && Object.hasOwnProperty.call(message, "git_repo"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.git_repo);
            return writer;
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof version.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {version.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.version.Response();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.string();
                        break;
                    }
                case 2: {
                        message.build_date = reader.string();
                        break;
                    }
                case 3: {
                        message.git_branch = reader.string();
                        break;
                    }
                case 4: {
                        message.git_commit = reader.string();
                        break;
                    }
                case 5: {
                        message.git_tag = reader.string();
                        break;
                    }
                case 6: {
                        message.go_version = reader.string();
                        break;
                    }
                case 7: {
                        message.compiler = reader.string();
                        break;
                    }
                case 8: {
                        message.platform = reader.string();
                        break;
                    }
                case 9: {
                        message.kubectl_version = reader.string();
                        break;
                    }
                case 10: {
                        message.git_repo = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Response
         * @function getTypeUrl
         * @memberof version.Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/version.Response";
        };

        return Response;
    })();

    version.Version = (function() {

        /**
         * Constructs a new Version service.
         * @memberof version
         * @classdesc Represents a Version
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Version(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Version.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Version;

        /**
         * Callback as used by {@link version.Version#version}.
         * @memberof version.Version
         * @typedef VersionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {version.Response} [response] Response
         */

        /**
         * Calls Version.
         * @function version
         * @memberof version.Version
         * @instance
         * @param {version.Request} request Request message or plain object
         * @param {version.Version.VersionCallback} callback Node-style callback called with the error, if any, and Response
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Version.prototype.version = function version(request, callback) {
            return this.rpcCall(version, $root.version.Request, $root.version.Response, request, callback);
        }, "name", { value: "Version" });

        /**
         * Calls Version.
         * @function version
         * @memberof version.Version
         * @instance
         * @param {version.Request} request Request message or plain object
         * @returns {Promise<version.Response>} Promise
         * @variation 2
         */

        return Version;
    })();

    return version;
})();

export const websocket = $root.websocket = (() => {

    /**
     * Namespace websocket.
     * @exports websocket
     * @namespace
     */
    const websocket = {};

    /**
     * Type enum.
     * @name websocket.Type
     * @enum {number}
     * @property {number} TypeUnknown=0 TypeUnknown value
     * @property {number} SetUid=1 SetUid value
     * @property {number} InternalError=2 InternalError value
     * @property {number} HandleExecShell=50 HandleExecShell value
     * @property {number} HandleExecShellMsg=51 HandleExecShellMsg value
     * @property {number} HandleCloseShell=52 HandleCloseShell value
     * @property {number} HandleAuthorize=53 HandleAuthorize value
     * @property {number} HandleSyncCard=54 HandleSyncCard value
     * @property {number} HandleSetLang=55 HandleSetLang value
     */
    websocket.Type = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TypeUnknown"] = 0;
        values[valuesById[1] = "SetUid"] = 1;
        values[valuesById[2] = "InternalError"] = 2;
        values[valuesById[50] = "HandleExecShell"] = 50;
        values[valuesById[51] = "HandleExecShellMsg"] = 51;
        values[valuesById[52] = "HandleCloseShell"] = 52;
        values[valuesById[53] = "HandleAuthorize"] = 53;
        values[valuesById[54] = "HandleSyncCard"] = 54;
        values[valuesById[55] = "HandleSetLang"] = 55;
        return values;
    })();

    /**
     * ResultType enum.
     * @name websocket.ResultType
     * @enum {number}
     * @property {number} ResultUnknown=0 ResultUnknown value
     * @property {number} Error=1 Error value
     * @property {number} Success=2 Success value
     */
    websocket.ResultType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ResultUnknown"] = 0;
        values[valuesById[1] = "Error"] = 1;
        values[valuesById[2] = "Success"] = 2;
        return values;
    })();

    /**
     * To enum.
     * @name websocket.To
     * @enum {number}
     * @property {number} ToSelf=0 ToSelf value
     * @property {number} ToAll=1 ToAll value
     * @property {number} ToOthers=2 ToOthers value
     */
    websocket.To = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ToSelf"] = 0;
        values[valuesById[1] = "ToAll"] = 1;
        values[valuesById[2] = "ToOthers"] = 2;
        return values;
    })();

    websocket.WsRequestMetadata = (function() {

        /**
         * Properties of a WsRequestMetadata.
         * @memberof websocket
         * @interface IWsRequestMetadata
         * @property {websocket.Type|null} [type] WsRequestMetadata type
         */

        /**
         * Constructs a new WsRequestMetadata.
         * @memberof websocket
         * @classdesc Represents a WsRequestMetadata.
         * @implements IWsRequestMetadata
         * @constructor
         * @param {websocket.IWsRequestMetadata=} [properties] Properties to set
         */
        function WsRequestMetadata(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsRequestMetadata type.
         * @member {websocket.Type} type
         * @memberof websocket.WsRequestMetadata
         * @instance
         */
        WsRequestMetadata.prototype.type = 0;

        /**
         * Encodes the specified WsRequestMetadata message. Does not implicitly {@link websocket.WsRequestMetadata.verify|verify} messages.
         * @function encode
         * @memberof websocket.WsRequestMetadata
         * @static
         * @param {websocket.WsRequestMetadata} message WsRequestMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsRequestMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Decodes a WsRequestMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.WsRequestMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.WsRequestMetadata} WsRequestMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsRequestMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.WsRequestMetadata();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for WsRequestMetadata
         * @function getTypeUrl
         * @memberof websocket.WsRequestMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsRequestMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.WsRequestMetadata";
        };

        return WsRequestMetadata;
    })();

    websocket.AuthorizeTokenInput = (function() {

        /**
         * Properties of an AuthorizeTokenInput.
         * @memberof websocket
         * @interface IAuthorizeTokenInput
         * @property {websocket.Type|null} [type] AuthorizeTokenInput type
         * @property {string|null} [token] AuthorizeTokenInput token
         */

        /**
         * Constructs a new AuthorizeTokenInput.
         * @memberof websocket
         * @classdesc Represents an AuthorizeTokenInput.
         * @implements IAuthorizeTokenInput
         * @constructor
         * @param {websocket.IAuthorizeTokenInput=} [properties] Properties to set
         */
        function AuthorizeTokenInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthorizeTokenInput type.
         * @member {websocket.Type} type
         * @memberof websocket.AuthorizeTokenInput
         * @instance
         */
        AuthorizeTokenInput.prototype.type = 0;

        /**
         * AuthorizeTokenInput token.
         * @member {string} token
         * @memberof websocket.AuthorizeTokenInput
         * @instance
         */
        AuthorizeTokenInput.prototype.token = "";

        /**
         * Encodes the specified AuthorizeTokenInput message. Does not implicitly {@link websocket.AuthorizeTokenInput.verify|verify} messages.
         * @function encode
         * @memberof websocket.AuthorizeTokenInput
         * @static
         * @param {websocket.AuthorizeTokenInput} message AuthorizeTokenInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorizeTokenInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Decodes an AuthorizeTokenInput message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.AuthorizeTokenInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.AuthorizeTokenInput} AuthorizeTokenInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorizeTokenInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.AuthorizeTokenInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for AuthorizeTokenInput
         * @function getTypeUrl
         * @memberof websocket.AuthorizeTokenInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthorizeTokenInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.AuthorizeTokenInput";
        };

        return AuthorizeTokenInput;
    })();

    websocket.TerminalMessage = (function() {

        /**
         * Properties of a TerminalMessage.
         * @memberof websocket
         * @interface ITerminalMessage
         * @property {string|null} [op] TerminalMessage op
         * @property {Uint8Array|null} [data] TerminalMessage data
         * @property {string|null} [session_id] TerminalMessage session_id
         * @property {number|null} [rows] TerminalMessage rows
         * @property {number|null} [cols] TerminalMessage cols
         */

        /**
         * Constructs a new TerminalMessage.
         * @memberof websocket
         * @classdesc Represents a TerminalMessage.
         * @implements ITerminalMessage
         * @constructor
         * @param {websocket.ITerminalMessage=} [properties] Properties to set
         */
        function TerminalMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TerminalMessage op.
         * @member {string} op
         * @memberof websocket.TerminalMessage
         * @instance
         */
        TerminalMessage.prototype.op = "";

        /**
         * TerminalMessage data.
         * @member {Uint8Array} data
         * @memberof websocket.TerminalMessage
         * @instance
         */
        TerminalMessage.prototype.data = $util.newBuffer([]);

        /**
         * TerminalMessage session_id.
         * @member {string} session_id
         * @memberof websocket.TerminalMessage
         * @instance
         */
        TerminalMessage.prototype.session_id = "";

        /**
         * TerminalMessage rows.
         * @member {number} rows
         * @memberof websocket.TerminalMessage
         * @instance
         */
        TerminalMessage.prototype.rows = 0;

        /**
         * TerminalMessage cols.
         * @member {number} cols
         * @memberof websocket.TerminalMessage
         * @instance
         */
        TerminalMessage.prototype.cols = 0;

        /**
         * Encodes the specified TerminalMessage message. Does not implicitly {@link websocket.TerminalMessage.verify|verify} messages.
         * @function encode
         * @memberof websocket.TerminalMessage
         * @static
         * @param {websocket.TerminalMessage} message TerminalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TerminalMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.op != null && Object.hasOwnProperty.call(message, "op"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.op);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.session_id != null && Object.hasOwnProperty.call(message, "session_id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.session_id);
            if (message.rows != null && Object.hasOwnProperty.call(message, "rows"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.rows);
            if (message.cols != null && Object.hasOwnProperty.call(message, "cols"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cols);
            return writer;
        };

        /**
         * Decodes a TerminalMessage message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.TerminalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.TerminalMessage} TerminalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TerminalMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.TerminalMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.op = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                case 3: {
                        message.session_id = reader.string();
                        break;
                    }
                case 4: {
                        message.rows = reader.uint32();
                        break;
                    }
                case 5: {
                        message.cols = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for TerminalMessage
         * @function getTypeUrl
         * @memberof websocket.TerminalMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TerminalMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.TerminalMessage";
        };

        return TerminalMessage;
    })();

    websocket.TerminalMessageInput = (function() {

        /**
         * Properties of a TerminalMessageInput.
         * @memberof websocket
         * @interface ITerminalMessageInput
         * @property {websocket.Type|null} [type] TerminalMessageInput type
         * @property {websocket.TerminalMessage|null} [message] TerminalMessageInput message
         */

        /**
         * Constructs a new TerminalMessageInput.
         * @memberof websocket
         * @classdesc Represents a TerminalMessageInput.
         * @implements ITerminalMessageInput
         * @constructor
         * @param {websocket.ITerminalMessageInput=} [properties] Properties to set
         */
        function TerminalMessageInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TerminalMessageInput type.
         * @member {websocket.Type} type
         * @memberof websocket.TerminalMessageInput
         * @instance
         */
        TerminalMessageInput.prototype.type = 0;

        /**
         * TerminalMessageInput message.
         * @member {websocket.TerminalMessage|null|undefined} message
         * @memberof websocket.TerminalMessageInput
         * @instance
         */
        TerminalMessageInput.prototype.message = null;

        /**
         * Encodes the specified TerminalMessageInput message. Does not implicitly {@link websocket.TerminalMessageInput.verify|verify} messages.
         * @function encode
         * @memberof websocket.TerminalMessageInput
         * @static
         * @param {websocket.TerminalMessageInput} message TerminalMessageInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TerminalMessageInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.websocket.TerminalMessage.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TerminalMessageInput message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.TerminalMessageInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.TerminalMessageInput} TerminalMessageInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TerminalMessageInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.TerminalMessageInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = $root.websocket.TerminalMessage.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for TerminalMessageInput
         * @function getTypeUrl
         * @memberof websocket.TerminalMessageInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TerminalMessageInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.TerminalMessageInput";
        };

        return TerminalMessageInput;
    })();

    websocket.WsHandleExecShellInput = (function() {

        /**
         * Properties of a WsHandleExecShellInput.
         * @memberof websocket
         * @interface IWsHandleExecShellInput
         * @property {websocket.Type|null} [type] WsHandleExecShellInput type
         * @property {number|null} [cluster_id] WsHandleExecShellInput cluster_id
         * @property {string|null} [namespace] WsHandleExecShellInput namespace
         * @property {string|null} [pod] WsHandleExecShellInput pod
         * @property {string|null} [container] WsHandleExecShellInput container
         * @property {number|null} [card_id] WsHandleExecShellInput card_id
         */

        /**
         * Constructs a new WsHandleExecShellInput.
         * @memberof websocket
         * @classdesc Represents a WsHandleExecShellInput.
         * @implements IWsHandleExecShellInput
         * @constructor
         * @param {websocket.IWsHandleExecShellInput=} [properties] Properties to set
         */
        function WsHandleExecShellInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsHandleExecShellInput type.
         * @member {websocket.Type} type
         * @memberof websocket.WsHandleExecShellInput
         * @instance
         */
        WsHandleExecShellInput.prototype.type = 0;

        /**
         * WsHandleExecShellInput cluster_id.
         * @member {number} cluster_id
         * @memberof websocket.WsHandleExecShellInput
         * @instance
         */
        WsHandleExecShellInput.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WsHandleExecShellInput namespace.
         * @member {string} namespace
         * @memberof websocket.WsHandleExecShellInput
         * @instance
         */
        WsHandleExecShellInput.prototype.namespace = "";

        /**
         * WsHandleExecShellInput pod.
         * @member {string} pod
         * @memberof websocket.WsHandleExecShellInput
         * @instance
         */
        WsHandleExecShellInput.prototype.pod = "";

        /**
         * WsHandleExecShellInput container.
         * @member {string} container
         * @memberof websocket.WsHandleExecShellInput
         * @instance
         */
        WsHandleExecShellInput.prototype.container = "";

        /**
         * WsHandleExecShellInput card_id.
         * @member {number} card_id
         * @memberof websocket.WsHandleExecShellInput
         * @instance
         */
        WsHandleExecShellInput.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified WsHandleExecShellInput message. Does not implicitly {@link websocket.WsHandleExecShellInput.verify|verify} messages.
         * @function encode
         * @memberof websocket.WsHandleExecShellInput
         * @static
         * @param {websocket.WsHandleExecShellInput} message WsHandleExecShellInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsHandleExecShellInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.cluster_id);
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pod);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.container);
            if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.card_id);
            return writer;
        };

        /**
         * Decodes a WsHandleExecShellInput message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.WsHandleExecShellInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.WsHandleExecShellInput} WsHandleExecShellInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsHandleExecShellInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.WsHandleExecShellInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                case 3: {
                        message.namespace = reader.string();
                        break;
                    }
                case 4: {
                        message.pod = reader.string();
                        break;
                    }
                case 5: {
                        message.container = reader.string();
                        break;
                    }
                case 6: {
                        message.card_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for WsHandleExecShellInput
         * @function getTypeUrl
         * @memberof websocket.WsHandleExecShellInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsHandleExecShellInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.WsHandleExecShellInput";
        };

        return WsHandleExecShellInput;
    })();

    websocket.WsHandleSetLangInput = (function() {

        /**
         * Properties of a WsHandleSetLangInput.
         * @memberof websocket
         * @interface IWsHandleSetLangInput
         * @property {websocket.Type|null} [type] WsHandleSetLangInput type
         * @property {string|null} [lang] WsHandleSetLangInput lang
         */

        /**
         * Constructs a new WsHandleSetLangInput.
         * @memberof websocket
         * @classdesc Represents a WsHandleSetLangInput.
         * @implements IWsHandleSetLangInput
         * @constructor
         * @param {websocket.IWsHandleSetLangInput=} [properties] Properties to set
         */
        function WsHandleSetLangInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsHandleSetLangInput type.
         * @member {websocket.Type} type
         * @memberof websocket.WsHandleSetLangInput
         * @instance
         */
        WsHandleSetLangInput.prototype.type = 0;

        /**
         * WsHandleSetLangInput lang.
         * @member {string} lang
         * @memberof websocket.WsHandleSetLangInput
         * @instance
         */
        WsHandleSetLangInput.prototype.lang = "";

        /**
         * Encodes the specified WsHandleSetLangInput message. Does not implicitly {@link websocket.WsHandleSetLangInput.verify|verify} messages.
         * @function encode
         * @memberof websocket.WsHandleSetLangInput
         * @static
         * @param {websocket.WsHandleSetLangInput} message WsHandleSetLangInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsHandleSetLangInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.lang != null && Object.hasOwnProperty.call(message, "lang"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lang);
            return writer;
        };

        /**
         * Decodes a WsHandleSetLangInput message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.WsHandleSetLangInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.WsHandleSetLangInput} WsHandleSetLangInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsHandleSetLangInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.WsHandleSetLangInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.lang = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for WsHandleSetLangInput
         * @function getTypeUrl
         * @memberof websocket.WsHandleSetLangInput
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsHandleSetLangInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.WsHandleSetLangInput";
        };

        return WsHandleSetLangInput;
    })();

    websocket.Metadata = (function() {

        /**
         * Properties of a Metadata.
         * @memberof websocket
         * @interface IMetadata
         * @property {string|null} [id] Metadata id
         * @property {string|null} [uid] Metadata uid
         * @property {string|null} [slug] Metadata slug
         * @property {websocket.Type|null} [type] Metadata type
         * @property {boolean|null} [end] Metadata end
         * @property {websocket.ResultType|null} [result] Metadata result
         * @property {websocket.To|null} [to] Metadata to
         * @property {string|null} [data] Metadata data
         */

        /**
         * Constructs a new Metadata.
         * @memberof websocket
         * @classdesc Represents a Metadata.
         * @implements IMetadata
         * @constructor
         * @param {websocket.IMetadata=} [properties] Properties to set
         */
        function Metadata(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Metadata id.
         * @member {string} id
         * @memberof websocket.Metadata
         * @instance
         */
        Metadata.prototype.id = "";

        /**
         * Metadata uid.
         * @member {string} uid
         * @memberof websocket.Metadata
         * @instance
         */
        Metadata.prototype.uid = "";

        /**
         * Metadata slug.
         * @member {string} slug
         * @memberof websocket.Metadata
         * @instance
         */
        Metadata.prototype.slug = "";

        /**
         * Metadata type.
         * @member {websocket.Type} type
         * @memberof websocket.Metadata
         * @instance
         */
        Metadata.prototype.type = 0;

        /**
         * Metadata end.
         * @member {boolean} end
         * @memberof websocket.Metadata
         * @instance
         */
        Metadata.prototype.end = false;

        /**
         * Metadata result.
         * @member {websocket.ResultType} result
         * @memberof websocket.Metadata
         * @instance
         */
        Metadata.prototype.result = 0;

        /**
         * Metadata to.
         * @member {websocket.To} to
         * @memberof websocket.Metadata
         * @instance
         */
        Metadata.prototype.to = 0;

        /**
         * Metadata data.
         * @member {string} data
         * @memberof websocket.Metadata
         * @instance
         */
        Metadata.prototype.data = "";

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link websocket.Metadata.verify|verify} messages.
         * @function encode
         * @memberof websocket.Metadata
         * @static
         * @param {websocket.Metadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            if (message.slug != null && Object.hasOwnProperty.call(message, "slug"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.slug);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.end);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.result);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.to);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.data);
            return writer;
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.Metadata();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.string();
                        break;
                    }
                case 3: {
                        message.slug = reader.string();
                        break;
                    }
                case 4: {
                        message.type = reader.int32();
                        break;
                    }
                case 5: {
                        message.end = reader.bool();
                        break;
                    }
                case 6: {
                        message.result = reader.int32();
                        break;
                    }
                case 7: {
                        message.to = reader.int32();
                        break;
                    }
                case 8: {
                        message.data = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Metadata
         * @function getTypeUrl
         * @memberof websocket.Metadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.Metadata";
        };

        return Metadata;
    })();

    websocket.Container = (function() {

        /**
         * Properties of a Container.
         * @memberof websocket
         * @interface IContainer
         * @property {string|null} [namespace] Container namespace
         * @property {string|null} [pod] Container pod
         * @property {string|null} [container] Container container
         * @property {number|null} [cluster_id] Container cluster_id
         */

        /**
         * Constructs a new Container.
         * @memberof websocket
         * @classdesc Represents a Container.
         * @implements IContainer
         * @constructor
         * @param {websocket.IContainer=} [properties] Properties to set
         */
        function Container(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Container namespace.
         * @member {string} namespace
         * @memberof websocket.Container
         * @instance
         */
        Container.prototype.namespace = "";

        /**
         * Container pod.
         * @member {string} pod
         * @memberof websocket.Container
         * @instance
         */
        Container.prototype.pod = "";

        /**
         * Container container.
         * @member {string} container
         * @memberof websocket.Container
         * @instance
         */
        Container.prototype.container = "";

        /**
         * Container cluster_id.
         * @member {number} cluster_id
         * @memberof websocket.Container
         * @instance
         */
        Container.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified Container message. Does not implicitly {@link websocket.Container.verify|verify} messages.
         * @function encode
         * @memberof websocket.Container
         * @static
         * @param {websocket.Container} message Container message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Container.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
            if (message.pod != null && Object.hasOwnProperty.call(message, "pod"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pod);
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.container);
            if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.cluster_id);
            return writer;
        };

        /**
         * Decodes a Container message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.Container
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.Container} Container
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Container.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.Container();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.namespace = reader.string();
                        break;
                    }
                case 2: {
                        message.pod = reader.string();
                        break;
                    }
                case 3: {
                        message.container = reader.string();
                        break;
                    }
                case 4: {
                        message.cluster_id = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Container
         * @function getTypeUrl
         * @memberof websocket.Container
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Container.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.Container";
        };

        return Container;
    })();

    websocket.WsMetadataResponse = (function() {

        /**
         * Properties of a WsMetadataResponse.
         * @memberof websocket
         * @interface IWsMetadataResponse
         * @property {websocket.Metadata|null} [metadata] WsMetadataResponse metadata
         */

        /**
         * Constructs a new WsMetadataResponse.
         * @memberof websocket
         * @classdesc Represents a WsMetadataResponse.
         * @implements IWsMetadataResponse
         * @constructor
         * @param {websocket.IWsMetadataResponse=} [properties] Properties to set
         */
        function WsMetadataResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsMetadataResponse metadata.
         * @member {websocket.Metadata|null|undefined} metadata
         * @memberof websocket.WsMetadataResponse
         * @instance
         */
        WsMetadataResponse.prototype.metadata = null;

        /**
         * Encodes the specified WsMetadataResponse message. Does not implicitly {@link websocket.WsMetadataResponse.verify|verify} messages.
         * @function encode
         * @memberof websocket.WsMetadataResponse
         * @static
         * @param {websocket.WsMetadataResponse} message WsMetadataResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsMetadataResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.websocket.Metadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a WsMetadataResponse message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.WsMetadataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.WsMetadataResponse} WsMetadataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsMetadataResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.WsMetadataResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.metadata = $root.websocket.Metadata.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for WsMetadataResponse
         * @function getTypeUrl
         * @memberof websocket.WsMetadataResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsMetadataResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.WsMetadataResponse";
        };

        return WsMetadataResponse;
    })();

    websocket.WsHandleShellResponse = (function() {

        /**
         * Properties of a WsHandleShellResponse.
         * @memberof websocket
         * @interface IWsHandleShellResponse
         * @property {websocket.Metadata|null} [metadata] WsHandleShellResponse metadata
         * @property {websocket.TerminalMessage|null} [terminal_message] WsHandleShellResponse terminal_message
         * @property {websocket.Container|null} [container] WsHandleShellResponse container
         */

        /**
         * Constructs a new WsHandleShellResponse.
         * @memberof websocket
         * @classdesc Represents a WsHandleShellResponse.
         * @implements IWsHandleShellResponse
         * @constructor
         * @param {websocket.IWsHandleShellResponse=} [properties] Properties to set
         */
        function WsHandleShellResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsHandleShellResponse metadata.
         * @member {websocket.Metadata|null|undefined} metadata
         * @memberof websocket.WsHandleShellResponse
         * @instance
         */
        WsHandleShellResponse.prototype.metadata = null;

        /**
         * WsHandleShellResponse terminal_message.
         * @member {websocket.TerminalMessage|null|undefined} terminal_message
         * @memberof websocket.WsHandleShellResponse
         * @instance
         */
        WsHandleShellResponse.prototype.terminal_message = null;

        /**
         * WsHandleShellResponse container.
         * @member {websocket.Container|null|undefined} container
         * @memberof websocket.WsHandleShellResponse
         * @instance
         */
        WsHandleShellResponse.prototype.container = null;

        /**
         * Encodes the specified WsHandleShellResponse message. Does not implicitly {@link websocket.WsHandleShellResponse.verify|verify} messages.
         * @function encode
         * @memberof websocket.WsHandleShellResponse
         * @static
         * @param {websocket.WsHandleShellResponse} message WsHandleShellResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsHandleShellResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.websocket.Metadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.terminal_message != null && Object.hasOwnProperty.call(message, "terminal_message"))
                $root.websocket.TerminalMessage.encode(message.terminal_message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                $root.websocket.Container.encode(message.container, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a WsHandleShellResponse message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.WsHandleShellResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.WsHandleShellResponse} WsHandleShellResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsHandleShellResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.WsHandleShellResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.metadata = $root.websocket.Metadata.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.terminal_message = $root.websocket.TerminalMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.container = $root.websocket.Container.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for WsHandleShellResponse
         * @function getTypeUrl
         * @memberof websocket.WsHandleShellResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WsHandleShellResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/websocket.WsHandleShellResponse";
        };

        return WsHandleShellResponse;
    })();

    return websocket;
})();

export { $root as default };
