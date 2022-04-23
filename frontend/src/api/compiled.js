/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const AuthLoginRequest = $root.AuthLoginRequest = (() => {

    /**
     * Properties of an AuthLoginRequest.
     * @exports IAuthLoginRequest
     * @interface IAuthLoginRequest
     * @property {string|null} [username] AuthLoginRequest username
     * @property {string|null} [password] AuthLoginRequest password
     */

    /**
     * Constructs a new AuthLoginRequest.
     * @exports AuthLoginRequest
     * @classdesc Represents an AuthLoginRequest.
     * @implements IAuthLoginRequest
     * @constructor
     * @param {IAuthLoginRequest=} [properties] Properties to set
     */
    function AuthLoginRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthLoginRequest username.
     * @member {string} username
     * @memberof AuthLoginRequest
     * @instance
     */
    AuthLoginRequest.prototype.username = "";

    /**
     * AuthLoginRequest password.
     * @member {string} password
     * @memberof AuthLoginRequest
     * @instance
     */
    AuthLoginRequest.prototype.password = "";

    /**
     * Encodes the specified AuthLoginRequest message. Does not implicitly {@link AuthLoginRequest.verify|verify} messages.
     * @function encode
     * @memberof AuthLoginRequest
     * @static
     * @param {AuthLoginRequest} message AuthLoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthLoginRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Decodes an AuthLoginRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AuthLoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthLoginRequest} AuthLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthLoginRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthLoginRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.username = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return AuthLoginRequest;
})();

export const AuthLoginResponse = $root.AuthLoginResponse = (() => {

    /**
     * Properties of an AuthLoginResponse.
     * @exports IAuthLoginResponse
     * @interface IAuthLoginResponse
     * @property {string|null} [token] AuthLoginResponse token
     * @property {number|null} [expires_in] AuthLoginResponse expires_in
     */

    /**
     * Constructs a new AuthLoginResponse.
     * @exports AuthLoginResponse
     * @classdesc Represents an AuthLoginResponse.
     * @implements IAuthLoginResponse
     * @constructor
     * @param {IAuthLoginResponse=} [properties] Properties to set
     */
    function AuthLoginResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthLoginResponse token.
     * @member {string} token
     * @memberof AuthLoginResponse
     * @instance
     */
    AuthLoginResponse.prototype.token = "";

    /**
     * AuthLoginResponse expires_in.
     * @member {number} expires_in
     * @memberof AuthLoginResponse
     * @instance
     */
    AuthLoginResponse.prototype.expires_in = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified AuthLoginResponse message. Does not implicitly {@link AuthLoginResponse.verify|verify} messages.
     * @function encode
     * @memberof AuthLoginResponse
     * @static
     * @param {AuthLoginResponse} message AuthLoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthLoginResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        if (message.expires_in != null && Object.hasOwnProperty.call(message, "expires_in"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expires_in);
        return writer;
    };

    /**
     * Decodes an AuthLoginResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AuthLoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthLoginResponse} AuthLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthLoginResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthLoginResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            case 2:
                message.expires_in = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return AuthLoginResponse;
})();

export const AuthExchangeRequest = $root.AuthExchangeRequest = (() => {

    /**
     * Properties of an AuthExchangeRequest.
     * @exports IAuthExchangeRequest
     * @interface IAuthExchangeRequest
     * @property {string|null} [code] AuthExchangeRequest code
     */

    /**
     * Constructs a new AuthExchangeRequest.
     * @exports AuthExchangeRequest
     * @classdesc Represents an AuthExchangeRequest.
     * @implements IAuthExchangeRequest
     * @constructor
     * @param {IAuthExchangeRequest=} [properties] Properties to set
     */
    function AuthExchangeRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthExchangeRequest code.
     * @member {string} code
     * @memberof AuthExchangeRequest
     * @instance
     */
    AuthExchangeRequest.prototype.code = "";

    /**
     * Encodes the specified AuthExchangeRequest message. Does not implicitly {@link AuthExchangeRequest.verify|verify} messages.
     * @function encode
     * @memberof AuthExchangeRequest
     * @static
     * @param {AuthExchangeRequest} message AuthExchangeRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthExchangeRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
        return writer;
    };

    /**
     * Decodes an AuthExchangeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AuthExchangeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthExchangeRequest} AuthExchangeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthExchangeRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthExchangeRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.code = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return AuthExchangeRequest;
})();

export const AuthExchangeResponse = $root.AuthExchangeResponse = (() => {

    /**
     * Properties of an AuthExchangeResponse.
     * @exports IAuthExchangeResponse
     * @interface IAuthExchangeResponse
     * @property {string|null} [token] AuthExchangeResponse token
     * @property {number|null} [expires_in] AuthExchangeResponse expires_in
     */

    /**
     * Constructs a new AuthExchangeResponse.
     * @exports AuthExchangeResponse
     * @classdesc Represents an AuthExchangeResponse.
     * @implements IAuthExchangeResponse
     * @constructor
     * @param {IAuthExchangeResponse=} [properties] Properties to set
     */
    function AuthExchangeResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthExchangeResponse token.
     * @member {string} token
     * @memberof AuthExchangeResponse
     * @instance
     */
    AuthExchangeResponse.prototype.token = "";

    /**
     * AuthExchangeResponse expires_in.
     * @member {number} expires_in
     * @memberof AuthExchangeResponse
     * @instance
     */
    AuthExchangeResponse.prototype.expires_in = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified AuthExchangeResponse message. Does not implicitly {@link AuthExchangeResponse.verify|verify} messages.
     * @function encode
     * @memberof AuthExchangeResponse
     * @static
     * @param {AuthExchangeResponse} message AuthExchangeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthExchangeResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
        if (message.expires_in != null && Object.hasOwnProperty.call(message, "expires_in"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expires_in);
        return writer;
    };

    /**
     * Decodes an AuthExchangeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AuthExchangeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthExchangeResponse} AuthExchangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthExchangeResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthExchangeResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.token = reader.string();
                break;
            case 2:
                message.expires_in = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return AuthExchangeResponse;
})();

export const AuthInfoRequest = $root.AuthInfoRequest = (() => {

    /**
     * Properties of an AuthInfoRequest.
     * @exports IAuthInfoRequest
     * @interface IAuthInfoRequest
     */

    /**
     * Constructs a new AuthInfoRequest.
     * @exports AuthInfoRequest
     * @classdesc Represents an AuthInfoRequest.
     * @implements IAuthInfoRequest
     * @constructor
     * @param {IAuthInfoRequest=} [properties] Properties to set
     */
    function AuthInfoRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified AuthInfoRequest message. Does not implicitly {@link AuthInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof AuthInfoRequest
     * @static
     * @param {AuthInfoRequest} message AuthInfoRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthInfoRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Decodes an AuthInfoRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AuthInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthInfoRequest} AuthInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthInfoRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthInfoRequest();
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

    return AuthInfoRequest;
})();

export const AuthInfoResponse = $root.AuthInfoResponse = (() => {

    /**
     * Properties of an AuthInfoResponse.
     * @exports IAuthInfoResponse
     * @interface IAuthInfoResponse
     * @property {string|null} [id] AuthInfoResponse id
     * @property {string|null} [avatar] AuthInfoResponse avatar
     * @property {string|null} [name] AuthInfoResponse name
     * @property {string|null} [email] AuthInfoResponse email
     * @property {string|null} [logout_url] AuthInfoResponse logout_url
     * @property {Array.<string>|null} [roles] AuthInfoResponse roles
     */

    /**
     * Constructs a new AuthInfoResponse.
     * @exports AuthInfoResponse
     * @classdesc Represents an AuthInfoResponse.
     * @implements IAuthInfoResponse
     * @constructor
     * @param {IAuthInfoResponse=} [properties] Properties to set
     */
    function AuthInfoResponse(properties) {
        this.roles = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthInfoResponse id.
     * @member {string} id
     * @memberof AuthInfoResponse
     * @instance
     */
    AuthInfoResponse.prototype.id = "";

    /**
     * AuthInfoResponse avatar.
     * @member {string} avatar
     * @memberof AuthInfoResponse
     * @instance
     */
    AuthInfoResponse.prototype.avatar = "";

    /**
     * AuthInfoResponse name.
     * @member {string} name
     * @memberof AuthInfoResponse
     * @instance
     */
    AuthInfoResponse.prototype.name = "";

    /**
     * AuthInfoResponse email.
     * @member {string} email
     * @memberof AuthInfoResponse
     * @instance
     */
    AuthInfoResponse.prototype.email = "";

    /**
     * AuthInfoResponse logout_url.
     * @member {string} logout_url
     * @memberof AuthInfoResponse
     * @instance
     */
    AuthInfoResponse.prototype.logout_url = "";

    /**
     * AuthInfoResponse roles.
     * @member {Array.<string>} roles
     * @memberof AuthInfoResponse
     * @instance
     */
    AuthInfoResponse.prototype.roles = $util.emptyArray;

    /**
     * Encodes the specified AuthInfoResponse message. Does not implicitly {@link AuthInfoResponse.verify|verify} messages.
     * @function encode
     * @memberof AuthInfoResponse
     * @static
     * @param {AuthInfoResponse} message AuthInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthInfoResponse.encode = function encode(message, writer) {
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
        if (message.roles != null && message.roles.length)
            for (let i = 0; i < message.roles.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.roles[i]);
        return writer;
    };

    /**
     * Decodes an AuthInfoResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AuthInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthInfoResponse} AuthInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthInfoResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthInfoResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.avatar = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.email = reader.string();
                break;
            case 5:
                message.logout_url = reader.string();
                break;
            case 6:
                if (!(message.roles && message.roles.length))
                    message.roles = [];
                message.roles.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return AuthInfoResponse;
})();

export const AuthSettingsRequest = $root.AuthSettingsRequest = (() => {

    /**
     * Properties of an AuthSettingsRequest.
     * @exports IAuthSettingsRequest
     * @interface IAuthSettingsRequest
     */

    /**
     * Constructs a new AuthSettingsRequest.
     * @exports AuthSettingsRequest
     * @classdesc Represents an AuthSettingsRequest.
     * @implements IAuthSettingsRequest
     * @constructor
     * @param {IAuthSettingsRequest=} [properties] Properties to set
     */
    function AuthSettingsRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified AuthSettingsRequest message. Does not implicitly {@link AuthSettingsRequest.verify|verify} messages.
     * @function encode
     * @memberof AuthSettingsRequest
     * @static
     * @param {AuthSettingsRequest} message AuthSettingsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthSettingsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Decodes an AuthSettingsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AuthSettingsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthSettingsRequest} AuthSettingsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthSettingsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthSettingsRequest();
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

    return AuthSettingsRequest;
})();

export const AuthSettingsResponse = $root.AuthSettingsResponse = (() => {

    /**
     * Properties of an AuthSettingsResponse.
     * @exports IAuthSettingsResponse
     * @interface IAuthSettingsResponse
     * @property {Array.<AuthSettingsResponse.OidcSetting>|null} [items] AuthSettingsResponse items
     */

    /**
     * Constructs a new AuthSettingsResponse.
     * @exports AuthSettingsResponse
     * @classdesc Represents an AuthSettingsResponse.
     * @implements IAuthSettingsResponse
     * @constructor
     * @param {IAuthSettingsResponse=} [properties] Properties to set
     */
    function AuthSettingsResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthSettingsResponse items.
     * @member {Array.<AuthSettingsResponse.OidcSetting>} items
     * @memberof AuthSettingsResponse
     * @instance
     */
    AuthSettingsResponse.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified AuthSettingsResponse message. Does not implicitly {@link AuthSettingsResponse.verify|verify} messages.
     * @function encode
     * @memberof AuthSettingsResponse
     * @static
     * @param {AuthSettingsResponse} message AuthSettingsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthSettingsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.AuthSettingsResponse.OidcSetting.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes an AuthSettingsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AuthSettingsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthSettingsResponse} AuthSettingsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthSettingsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthSettingsResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.AuthSettingsResponse.OidcSetting.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    AuthSettingsResponse.OidcSetting = (function() {

        /**
         * Properties of an OidcSetting.
         * @memberof AuthSettingsResponse
         * @interface IOidcSetting
         * @property {boolean|null} [enabled] OidcSetting enabled
         * @property {string|null} [name] OidcSetting name
         * @property {string|null} [url] OidcSetting url
         * @property {string|null} [end_session_endpoint] OidcSetting end_session_endpoint
         * @property {string|null} [state] OidcSetting state
         */

        /**
         * Constructs a new OidcSetting.
         * @memberof AuthSettingsResponse
         * @classdesc Represents an OidcSetting.
         * @implements IOidcSetting
         * @constructor
         * @param {AuthSettingsResponse.IOidcSetting=} [properties] Properties to set
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
         * @memberof AuthSettingsResponse.OidcSetting
         * @instance
         */
        OidcSetting.prototype.enabled = false;

        /**
         * OidcSetting name.
         * @member {string} name
         * @memberof AuthSettingsResponse.OidcSetting
         * @instance
         */
        OidcSetting.prototype.name = "";

        /**
         * OidcSetting url.
         * @member {string} url
         * @memberof AuthSettingsResponse.OidcSetting
         * @instance
         */
        OidcSetting.prototype.url = "";

        /**
         * OidcSetting end_session_endpoint.
         * @member {string} end_session_endpoint
         * @memberof AuthSettingsResponse.OidcSetting
         * @instance
         */
        OidcSetting.prototype.end_session_endpoint = "";

        /**
         * OidcSetting state.
         * @member {string} state
         * @memberof AuthSettingsResponse.OidcSetting
         * @instance
         */
        OidcSetting.prototype.state = "";

        /**
         * Encodes the specified OidcSetting message. Does not implicitly {@link AuthSettingsResponse.OidcSetting.verify|verify} messages.
         * @function encode
         * @memberof AuthSettingsResponse.OidcSetting
         * @static
         * @param {AuthSettingsResponse.OidcSetting} message OidcSetting message or plain object to encode
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
         * @memberof AuthSettingsResponse.OidcSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AuthSettingsResponse.OidcSetting} OidcSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OidcSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthSettingsResponse.OidcSetting();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.end_session_endpoint = reader.string();
                    break;
                case 5:
                    message.state = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return OidcSetting;
    })();

    return AuthSettingsResponse;
})();

export const Auth = $root.Auth = (() => {

    /**
     * Constructs a new Auth service.
     * @exports Auth
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
     * Callback as used by {@link Auth#login}.
     * @memberof Auth
     * @typedef LoginCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {AuthLoginResponse} [response] AuthLoginResponse
     */

    /**
     * Calls Login.
     * @function login
     * @memberof Auth
     * @instance
     * @param {AuthLoginRequest} request AuthLoginRequest message or plain object
     * @param {Auth.LoginCallback} callback Node-style callback called with the error, if any, and AuthLoginResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Auth.prototype.login = function login(request, callback) {
        return this.rpcCall(login, $root.AuthLoginRequest, $root.AuthLoginResponse, request, callback);
    }, "name", { value: "Login" });

    /**
     * Calls Login.
     * @function login
     * @memberof Auth
     * @instance
     * @param {AuthLoginRequest} request AuthLoginRequest message or plain object
     * @returns {Promise<AuthLoginResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Auth#info}.
     * @memberof Auth
     * @typedef InfoCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {AuthInfoResponse} [response] AuthInfoResponse
     */

    /**
     * Calls Info.
     * @function info
     * @memberof Auth
     * @instance
     * @param {AuthInfoRequest} request AuthInfoRequest message or plain object
     * @param {Auth.InfoCallback} callback Node-style callback called with the error, if any, and AuthInfoResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Auth.prototype.info = function info(request, callback) {
        return this.rpcCall(info, $root.AuthInfoRequest, $root.AuthInfoResponse, request, callback);
    }, "name", { value: "Info" });

    /**
     * Calls Info.
     * @function info
     * @memberof Auth
     * @instance
     * @param {AuthInfoRequest} request AuthInfoRequest message or plain object
     * @returns {Promise<AuthInfoResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Auth#settings}.
     * @memberof Auth
     * @typedef SettingsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {AuthSettingsResponse} [response] AuthSettingsResponse
     */

    /**
     * Calls Settings.
     * @function settings
     * @memberof Auth
     * @instance
     * @param {AuthSettingsRequest} request AuthSettingsRequest message or plain object
     * @param {Auth.SettingsCallback} callback Node-style callback called with the error, if any, and AuthSettingsResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Auth.prototype.settings = function settings(request, callback) {
        return this.rpcCall(settings, $root.AuthSettingsRequest, $root.AuthSettingsResponse, request, callback);
    }, "name", { value: "Settings" });

    /**
     * Calls Settings.
     * @function settings
     * @memberof Auth
     * @instance
     * @param {AuthSettingsRequest} request AuthSettingsRequest message or plain object
     * @returns {Promise<AuthSettingsResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Auth#exchange}.
     * @memberof Auth
     * @typedef ExchangeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {AuthExchangeResponse} [response] AuthExchangeResponse
     */

    /**
     * Calls Exchange.
     * @function exchange
     * @memberof Auth
     * @instance
     * @param {AuthExchangeRequest} request AuthExchangeRequest message or plain object
     * @param {Auth.ExchangeCallback} callback Node-style callback called with the error, if any, and AuthExchangeResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Auth.prototype.exchange = function exchange(request, callback) {
        return this.rpcCall(exchange, $root.AuthExchangeRequest, $root.AuthExchangeResponse, request, callback);
    }, "name", { value: "Exchange" });

    /**
     * Calls Exchange.
     * @function exchange
     * @memberof Auth
     * @instance
     * @param {AuthExchangeRequest} request AuthExchangeRequest message or plain object
     * @returns {Promise<AuthExchangeResponse>} Promise
     * @variation 2
     */

    return Auth;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.api = (function() {

        /**
         * Namespace api.
         * @memberof google
         * @namespace
         */
        const api = {};

        api.Http = (function() {

            /**
             * Properties of a Http.
             * @memberof google.api
             * @interface IHttp
             * @property {Array.<google.api.HttpRule>|null} [rules] Http rules
             */

            /**
             * Constructs a new Http.
             * @memberof google.api
             * @classdesc Represents a Http.
             * @implements IHttp
             * @constructor
             * @param {google.api.IHttp=} [properties] Properties to set
             */
            function Http(properties) {
                this.rules = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Http rules.
             * @member {Array.<google.api.HttpRule>} rules
             * @memberof google.api.Http
             * @instance
             */
            Http.prototype.rules = $util.emptyArray;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @function encode
             * @memberof google.api.Http
             * @static
             * @param {google.api.Http} message Http message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Http.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rules != null && message.rules.length)
                    for (let i = 0; i < message.rules.length; ++i)
                        $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.Http
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.Http} Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Http.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.rules && message.rules.length))
                            message.rules = [];
                        message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Http;
        })();

        api.HttpRule = (function() {

            /**
             * Properties of a HttpRule.
             * @memberof google.api
             * @interface IHttpRule
             * @property {string|null} [get] HttpRule get
             * @property {string|null} [put] HttpRule put
             * @property {string|null} [post] HttpRule post
             * @property {string|null} ["delete"] HttpRule delete
             * @property {string|null} [patch] HttpRule patch
             * @property {google.api.CustomHttpPattern|null} [custom] HttpRule custom
             * @property {string|null} [selector] HttpRule selector
             * @property {string|null} [body] HttpRule body
             * @property {Array.<google.api.HttpRule>|null} [additional_bindings] HttpRule additional_bindings
             */

            /**
             * Constructs a new HttpRule.
             * @memberof google.api
             * @classdesc Represents a HttpRule.
             * @implements IHttpRule
             * @constructor
             * @param {google.api.IHttpRule=} [properties] Properties to set
             */
            function HttpRule(properties) {
                this.additional_bindings = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HttpRule get.
             * @member {string|null|undefined} get
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.get = null;

            /**
             * HttpRule put.
             * @member {string|null|undefined} put
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.put = null;

            /**
             * HttpRule post.
             * @member {string|null|undefined} post
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.post = null;

            /**
             * HttpRule delete.
             * @member {string|null|undefined} delete
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype["delete"] = null;

            /**
             * HttpRule patch.
             * @member {string|null|undefined} patch
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.patch = null;

            /**
             * HttpRule custom.
             * @member {google.api.CustomHttpPattern|null|undefined} custom
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.custom = null;

            /**
             * HttpRule selector.
             * @member {string} selector
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.selector = "";

            /**
             * HttpRule body.
             * @member {string} body
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.body = "";

            /**
             * HttpRule additional_bindings.
             * @member {Array.<google.api.HttpRule>} additional_bindings
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.additional_bindings = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * HttpRule pattern.
             * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
             * @memberof google.api.HttpRule
             * @instance
             */
            Object.defineProperty(HttpRule.prototype, "pattern", {
                get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @function encode
             * @memberof google.api.HttpRule
             * @static
             * @param {google.api.HttpRule} message HttpRule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HttpRule.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                if (message.put != null && Object.hasOwnProperty.call(message, "put"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                if (message.post != null && Object.hasOwnProperty.call(message, "post"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                if (message.patch != null && Object.hasOwnProperty.call(message, "patch"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                if (message.custom != null && Object.hasOwnProperty.call(message, "custom"))
                    $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.additional_bindings != null && message.additional_bindings.length)
                    for (let i = 0; i < message.additional_bindings.length; ++i)
                        $root.google.api.HttpRule.encode(message.additional_bindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.HttpRule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.HttpRule} HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HttpRule.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.get = reader.string();
                        break;
                    case 3:
                        message.put = reader.string();
                        break;
                    case 4:
                        message.post = reader.string();
                        break;
                    case 5:
                        message["delete"] = reader.string();
                        break;
                    case 6:
                        message.patch = reader.string();
                        break;
                    case 8:
                        message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                        break;
                    case 1:
                        message.selector = reader.string();
                        break;
                    case 7:
                        message.body = reader.string();
                        break;
                    case 11:
                        if (!(message.additional_bindings && message.additional_bindings.length))
                            message.additional_bindings = [];
                        message.additional_bindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return HttpRule;
        })();

        api.CustomHttpPattern = (function() {

            /**
             * Properties of a CustomHttpPattern.
             * @memberof google.api
             * @interface ICustomHttpPattern
             * @property {string|null} [kind] CustomHttpPattern kind
             * @property {string|null} [path] CustomHttpPattern path
             */

            /**
             * Constructs a new CustomHttpPattern.
             * @memberof google.api
             * @classdesc Represents a CustomHttpPattern.
             * @implements ICustomHttpPattern
             * @constructor
             * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
             */
            function CustomHttpPattern(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CustomHttpPattern kind.
             * @member {string} kind
             * @memberof google.api.CustomHttpPattern
             * @instance
             */
            CustomHttpPattern.prototype.kind = "";

            /**
             * CustomHttpPattern path.
             * @member {string} path
             * @memberof google.api.CustomHttpPattern
             * @instance
             */
            CustomHttpPattern.prototype.path = "";

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @function encode
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {google.api.CustomHttpPattern} message CustomHttpPattern message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomHttpPattern.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                return writer;
            };

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.CustomHttpPattern} CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomHttpPattern.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.kind = reader.string();
                        break;
                    case 2:
                        message.path = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return CustomHttpPattern;
        })();

        return api;
    })();

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.FileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.FileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (let i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [public_dependency] FileDescriptorProto public_dependency
             * @property {Array.<number>|null} [weak_dependency] FileDescriptorProto weak_dependency
             * @property {Array.<google.protobuf.DescriptorProto>|null} [message_type] FileDescriptorProto message_type
             * @property {Array.<google.protobuf.EnumDescriptorProto>|null} [enum_type] FileDescriptorProto enum_type
             * @property {Array.<google.protobuf.ServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.FieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.FileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.SourceCodeInfo|null} [source_code_info] FileDescriptorProto source_code_info
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.public_dependency = [];
                this.weak_dependency = [];
                this.message_type = [];
                this.enum_type = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto public_dependency.
             * @member {Array.<number>} public_dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.public_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto weak_dependency.
             * @member {Array.<number>} weak_dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weak_dependency = $util.emptyArray;

            /**
             * FileDescriptorProto message_type.
             * @member {Array.<google.protobuf.DescriptorProto>} message_type
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.message_type = $util.emptyArray;

            /**
             * FileDescriptorProto enum_type.
             * @member {Array.<google.protobuf.EnumDescriptorProto>} enum_type
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.ServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.FieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.FileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto source_code_info.
             * @member {google.protobuf.SourceCodeInfo|null|undefined} source_code_info
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.source_code_info = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (let i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.message_type != null && message.message_type.length)
                    for (let i = 0; i < message.message_type.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.message_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enum_type != null && message.enum_type.length)
                    for (let i = 0; i < message.enum_type.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (let i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.source_code_info != null && Object.hasOwnProperty.call(message, "source_code_info"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.source_code_info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.public_dependency != null && message.public_dependency.length)
                    for (let i = 0; i < message.public_dependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.public_dependency[i]);
                if (message.weak_dependency != null && message.weak_dependency.length)
                    for (let i = 0; i < message.weak_dependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weak_dependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.public_dependency && message.public_dependency.length))
                            message.public_dependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.public_dependency.push(reader.int32());
                        } else
                            message.public_dependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weak_dependency && message.weak_dependency.length))
                            message.weak_dependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weak_dependency.push(reader.int32());
                        } else
                            message.weak_dependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.message_type && message.message_type.length))
                            message.message_type = [];
                        message.message_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enum_type && message.enum_type.length))
                            message.enum_type = [];
                        message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.source_code_info = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.FieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.FieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.DescriptorProto>|null} [nested_type] DescriptorProto nested_type
             * @property {Array.<google.protobuf.EnumDescriptorProto>|null} [enum_type] DescriptorProto enum_type
             * @property {Array.<google.protobuf.DescriptorProto.ExtensionRange>|null} [extension_range] DescriptorProto extension_range
             * @property {Array.<google.protobuf.OneofDescriptorProto>|null} [oneof_decl] DescriptorProto oneof_decl
             * @property {google.protobuf.MessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.ReservedRange>|null} [reserved_range] DescriptorProto reserved_range
             * @property {Array.<string>|null} [reserved_name] DescriptorProto reserved_name
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nested_type = [];
                this.enum_type = [];
                this.extension_range = [];
                this.oneof_decl = [];
                this.reserved_range = [];
                this.reserved_name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.FieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.FieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nested_type.
             * @member {Array.<google.protobuf.DescriptorProto>} nested_type
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nested_type = $util.emptyArray;

            /**
             * DescriptorProto enum_type.
             * @member {Array.<google.protobuf.EnumDescriptorProto>} enum_type
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enum_type = $util.emptyArray;

            /**
             * DescriptorProto extension_range.
             * @member {Array.<google.protobuf.DescriptorProto.ExtensionRange>} extension_range
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension_range = $util.emptyArray;

            /**
             * DescriptorProto oneof_decl.
             * @member {Array.<google.protobuf.OneofDescriptorProto>} oneof_decl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneof_decl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.MessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reserved_range.
             * @member {Array.<google.protobuf.DescriptorProto.ReservedRange>} reserved_range
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reserved_range = $util.emptyArray;

            /**
             * DescriptorProto reserved_name.
             * @member {Array.<string>} reserved_name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reserved_name = $util.emptyArray;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (let i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nested_type != null && message.nested_type.length)
                    for (let i = 0; i < message.nested_type.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nested_type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enum_type != null && message.enum_type.length)
                    for (let i = 0; i < message.enum_type.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enum_type[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extension_range != null && message.extension_range.length)
                    for (let i = 0; i < message.extension_range.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extension_range[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneof_decl != null && message.oneof_decl.length)
                    for (let i = 0; i < message.oneof_decl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneof_decl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reserved_range != null && message.reserved_range.length)
                    for (let i = 0; i < message.reserved_range.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reserved_range[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reserved_name != null && message.reserved_name.length)
                    for (let i = 0; i < message.reserved_name.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reserved_name[i]);
                return writer;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nested_type && message.nested_type.length))
                            message.nested_type = [];
                        message.nested_type.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enum_type && message.enum_type.length))
                            message.enum_type = [];
                        message.enum_type.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extension_range && message.extension_range.length))
                            message.extension_range = [];
                        message.extension_range.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneof_decl && message.oneof_decl.length))
                            message.oneof_decl = [];
                        message.oneof_decl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reserved_range && message.reserved_range.length))
                            message.reserved_range = [];
                        message.reserved_range.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reserved_name && message.reserved_name.length))
                            message.reserved_name = [];
                        message.reserved_name.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [type_name] FieldDescriptorProto type_name
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [default_value] FieldDescriptorProto default_value
             * @property {number|null} [oneof_index] FieldDescriptorProto oneof_index
             * @property {string|null} [json_name] FieldDescriptorProto json_name
             * @property {google.protobuf.FieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto type_name.
             * @member {string} type_name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type_name = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto default_value.
             * @member {string} default_value
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.default_value = "";

            /**
             * FieldDescriptorProto oneof_index.
             * @member {number} oneof_index
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneof_index = 0;

            /**
             * FieldDescriptorProto json_name.
             * @member {string} json_name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.json_name = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.FieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.type_name != null && Object.hasOwnProperty.call(message, "type_name"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.type_name);
                if (message.default_value != null && Object.hasOwnProperty.call(message, "default_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.default_value);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneof_index != null && Object.hasOwnProperty.call(message, "oneof_index"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneof_index);
                if (message.json_name != null && Object.hasOwnProperty.call(message, "json_name"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.json_name);
                return writer;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.type_name = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.default_value = reader.string();
                        break;
                    case 9:
                        message.oneof_index = reader.int32();
                        break;
                    case 10:
                        message.json_name = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.OneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.OneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.EnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.EnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.EnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.EnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (let i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.EnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.EnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.MethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.ServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.MethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.ServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (let i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [input_type] MethodDescriptorProto input_type
             * @property {string|null} [output_type] MethodDescriptorProto output_type
             * @property {google.protobuf.MethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [client_streaming] MethodDescriptorProto client_streaming
             * @property {boolean|null} [server_streaming] MethodDescriptorProto server_streaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto input_type.
             * @member {string} input_type
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.input_type = "";

            /**
             * MethodDescriptorProto output_type.
             * @member {string} output_type
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.output_type = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.MethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto client_streaming.
             * @member {boolean} client_streaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.client_streaming = false;

            /**
             * MethodDescriptorProto server_streaming.
             * @member {boolean} server_streaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.server_streaming = false;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.input_type != null && Object.hasOwnProperty.call(message, "input_type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.input_type);
                if (message.output_type != null && Object.hasOwnProperty.call(message, "output_type"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.output_type);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.client_streaming != null && Object.hasOwnProperty.call(message, "client_streaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.client_streaming);
                if (message.server_streaming != null && Object.hasOwnProperty.call(message, "server_streaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.server_streaming);
                return writer;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.input_type = reader.string();
                        break;
                    case 3:
                        message.output_type = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.client_streaming = reader.bool();
                        break;
                    case 6:
                        message.server_streaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [java_package] FileOptions java_package
             * @property {string|null} [java_outer_classname] FileOptions java_outer_classname
             * @property {boolean|null} [java_multiple_files] FileOptions java_multiple_files
             * @property {boolean|null} [java_generate_equals_and_hash] FileOptions java_generate_equals_and_hash
             * @property {boolean|null} [java_string_check_utf8] FileOptions java_string_check_utf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimize_for] FileOptions optimize_for
             * @property {string|null} [go_package] FileOptions go_package
             * @property {boolean|null} [cc_generic_services] FileOptions cc_generic_services
             * @property {boolean|null} [java_generic_services] FileOptions java_generic_services
             * @property {boolean|null} [py_generic_services] FileOptions py_generic_services
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [cc_enable_arenas] FileOptions cc_enable_arenas
             * @property {string|null} [objc_class_prefix] FileOptions objc_class_prefix
             * @property {string|null} [csharp_namespace] FileOptions csharp_namespace
             * @property {Array.<google.protobuf.UninterpretedOption>|null} [uninterpreted_option] FileOptions uninterpreted_option
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions java_package.
             * @member {string} java_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_package = "";

            /**
             * FileOptions java_outer_classname.
             * @member {string} java_outer_classname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_outer_classname = "";

            /**
             * FileOptions java_multiple_files.
             * @member {boolean} java_multiple_files
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_multiple_files = false;

            /**
             * FileOptions java_generate_equals_and_hash.
             * @member {boolean} java_generate_equals_and_hash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_generate_equals_and_hash = false;

            /**
             * FileOptions java_string_check_utf8.
             * @member {boolean} java_string_check_utf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_string_check_utf8 = false;

            /**
             * FileOptions optimize_for.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimize_for
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimize_for = 1;

            /**
             * FileOptions go_package.
             * @member {string} go_package
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.go_package = "";

            /**
             * FileOptions cc_generic_services.
             * @member {boolean} cc_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.cc_generic_services = false;

            /**
             * FileOptions java_generic_services.
             * @member {boolean} java_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.java_generic_services = false;

            /**
             * FileOptions py_generic_services.
             * @member {boolean} py_generic_services
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.py_generic_services = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions cc_enable_arenas.
             * @member {boolean} cc_enable_arenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.cc_enable_arenas = false;

            /**
             * FileOptions objc_class_prefix.
             * @member {string} objc_class_prefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objc_class_prefix = "";

            /**
             * FileOptions csharp_namespace.
             * @member {string} csharp_namespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharp_namespace = "";

            /**
             * FileOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.java_package != null && Object.hasOwnProperty.call(message, "java_package"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.java_package);
                if (message.java_outer_classname != null && Object.hasOwnProperty.call(message, "java_outer_classname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.java_outer_classname);
                if (message.optimize_for != null && Object.hasOwnProperty.call(message, "optimize_for"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimize_for);
                if (message.java_multiple_files != null && Object.hasOwnProperty.call(message, "java_multiple_files"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.java_multiple_files);
                if (message.go_package != null && Object.hasOwnProperty.call(message, "go_package"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.go_package);
                if (message.cc_generic_services != null && Object.hasOwnProperty.call(message, "cc_generic_services"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.cc_generic_services);
                if (message.java_generic_services != null && Object.hasOwnProperty.call(message, "java_generic_services"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.java_generic_services);
                if (message.py_generic_services != null && Object.hasOwnProperty.call(message, "py_generic_services"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.py_generic_services);
                if (message.java_generate_equals_and_hash != null && Object.hasOwnProperty.call(message, "java_generate_equals_and_hash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.java_generate_equals_and_hash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.java_string_check_utf8 != null && Object.hasOwnProperty.call(message, "java_string_check_utf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.java_string_check_utf8);
                if (message.cc_enable_arenas != null && Object.hasOwnProperty.call(message, "cc_enable_arenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.cc_enable_arenas);
                if (message.objc_class_prefix != null && Object.hasOwnProperty.call(message, "objc_class_prefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objc_class_prefix);
                if (message.csharp_namespace != null && Object.hasOwnProperty.call(message, "csharp_namespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharp_namespace);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (let i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.java_package = reader.string();
                        break;
                    case 8:
                        message.java_outer_classname = reader.string();
                        break;
                    case 10:
                        message.java_multiple_files = reader.bool();
                        break;
                    case 20:
                        message.java_generate_equals_and_hash = reader.bool();
                        break;
                    case 27:
                        message.java_string_check_utf8 = reader.bool();
                        break;
                    case 9:
                        message.optimize_for = reader.int32();
                        break;
                    case 11:
                        message.go_package = reader.string();
                        break;
                    case 16:
                        message.cc_generic_services = reader.bool();
                        break;
                    case 17:
                        message.java_generic_services = reader.bool();
                        break;
                    case 18:
                        message.py_generic_services = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.cc_enable_arenas = reader.bool();
                        break;
                    case 36:
                        message.objc_class_prefix = reader.string();
                        break;
                    case 37:
                        message.csharp_namespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [message_set_wire_format] MessageOptions message_set_wire_format
             * @property {boolean|null} [no_standard_descriptor_accessor] MessageOptions no_standard_descriptor_accessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [map_entry] MessageOptions map_entry
             * @property {Array.<google.protobuf.UninterpretedOption>|null} [uninterpreted_option] MessageOptions uninterpreted_option
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions message_set_wire_format.
             * @member {boolean} message_set_wire_format
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.message_set_wire_format = false;

            /**
             * MessageOptions no_standard_descriptor_accessor.
             * @member {boolean} no_standard_descriptor_accessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.no_standard_descriptor_accessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions map_entry.
             * @member {boolean} map_entry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.map_entry = false;

            /**
             * MessageOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message_set_wire_format != null && Object.hasOwnProperty.call(message, "message_set_wire_format"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.message_set_wire_format);
                if (message.no_standard_descriptor_accessor != null && Object.hasOwnProperty.call(message, "no_standard_descriptor_accessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.no_standard_descriptor_accessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.map_entry != null && Object.hasOwnProperty.call(message, "map_entry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.map_entry);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (let i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message_set_wire_format = reader.bool();
                        break;
                    case 2:
                        message.no_standard_descriptor_accessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.map_entry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.UninterpretedOption>|null} [uninterpreted_option] FieldOptions uninterpreted_option
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (let i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.UninterpretedOption>|null} [uninterpreted_option] OneofOptions uninterpreted_option
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (let i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allow_alias] EnumOptions allow_alias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.UninterpretedOption>|null} [uninterpreted_option] EnumOptions uninterpreted_option
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allow_alias.
             * @member {boolean} allow_alias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allow_alias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allow_alias != null && Object.hasOwnProperty.call(message, "allow_alias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allow_alias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (let i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allow_alias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.UninterpretedOption>|null} [uninterpreted_option] EnumValueOptions uninterpreted_option
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (let i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.UninterpretedOption>|null} [uninterpreted_option] ServiceOptions uninterpreted_option
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (let i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.UninterpretedOption>|null} [uninterpreted_option] MethodOptions uninterpreted_option
             * @property {google.api.HttpRule|null} [".google.api.http"] MethodOptions .google.api.http
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpreted_option = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpreted_option.
             * @member {Array.<google.protobuf.UninterpretedOption>} uninterpreted_option
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpreted_option = $util.emptyArray;

            /**
             * MethodOptions .google.api.http.
             * @member {google.api.HttpRule|null|undefined} .google.api.http
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype[".google.api.http"] = null;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpreted_option != null && message.uninterpreted_option.length)
                    for (let i = 0; i < message.uninterpreted_option.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpreted_option[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".google.api.http"] != null && Object.hasOwnProperty.call(message, ".google.api.http"))
                    $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpreted_option && message.uninterpreted_option.length))
                            message.uninterpreted_option = [];
                        message.uninterpreted_option.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 72295728:
                        message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.NamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifier_value] UninterpretedOption identifier_value
             * @property {number|null} [positive_int_value] UninterpretedOption positive_int_value
             * @property {number|null} [negative_int_value] UninterpretedOption negative_int_value
             * @property {number|null} [double_value] UninterpretedOption double_value
             * @property {Uint8Array|null} [string_value] UninterpretedOption string_value
             * @property {string|null} [aggregate_value] UninterpretedOption aggregate_value
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.NamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifier_value.
             * @member {string} identifier_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifier_value = "";

            /**
             * UninterpretedOption positive_int_value.
             * @member {number} positive_int_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positive_int_value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negative_int_value.
             * @member {number} negative_int_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negative_int_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption double_value.
             * @member {number} double_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.double_value = 0;

            /**
             * UninterpretedOption string_value.
             * @member {Uint8Array} string_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.string_value = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregate_value.
             * @member {string} aggregate_value
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregate_value = "";

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (let i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifier_value != null && Object.hasOwnProperty.call(message, "identifier_value"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier_value);
                if (message.positive_int_value != null && Object.hasOwnProperty.call(message, "positive_int_value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positive_int_value);
                if (message.negative_int_value != null && Object.hasOwnProperty.call(message, "negative_int_value"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negative_int_value);
                if (message.double_value != null && Object.hasOwnProperty.call(message, "double_value"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.double_value);
                if (message.string_value != null && Object.hasOwnProperty.call(message, "string_value"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.string_value);
                if (message.aggregate_value != null && Object.hasOwnProperty.call(message, "aggregate_value"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregate_value);
                return writer;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifier_value = reader.string();
                        break;
                    case 4:
                        message.positive_int_value = reader.uint64();
                        break;
                    case 5:
                        message.negative_int_value = reader.int64();
                        break;
                    case 6:
                        message.double_value = reader.double();
                        break;
                    case 7:
                        message.string_value = reader.bytes();
                        break;
                    case 8:
                        message.aggregate_value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} name_part NamePart name_part
                 * @property {boolean} is_extension NamePart is_extension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart name_part.
                 * @member {string} name_part
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.name_part = "";

                /**
                 * NamePart is_extension.
                 * @member {boolean} is_extension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.is_extension = false;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name_part);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_extension);
                    return writer;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name_part = reader.string();
                            break;
                        case 2:
                            message.is_extension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("name_part"))
                        throw $util.ProtocolError("missing required 'name_part'", { instance: message });
                    if (!message.hasOwnProperty("is_extension"))
                        throw $util.ProtocolError("missing required 'is_extension'", { instance: message });
                    return message;
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.Location>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.Location>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (let i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leading_comments] Location leading_comments
                 * @property {string|null} [trailing_comments] Location trailing_comments
                 * @property {Array.<string>|null} [leading_detached_comments] Location leading_detached_comments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leading_detached_comments = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leading_comments.
                 * @member {string} leading_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leading_comments = "";

                /**
                 * Location trailing_comments.
                 * @member {string} trailing_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailing_comments = "";

                /**
                 * Location leading_detached_comments.
                 * @member {Array.<string>} leading_detached_comments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leading_detached_comments = $util.emptyArray;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (let i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leading_comments != null && Object.hasOwnProperty.call(message, "leading_comments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leading_comments);
                    if (message.trailing_comments != null && Object.hasOwnProperty.call(message, "trailing_comments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailing_comments);
                    if (message.leading_detached_comments != null && message.leading_detached_comments.length)
                        for (let i = 0; i < message.leading_detached_comments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leading_detached_comments[i]);
                    return writer;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leading_comments = reader.string();
                            break;
                        case 4:
                            message.trailing_comments = reader.string();
                            break;
                        case 6:
                            if (!(message.leading_detached_comments && message.leading_detached_comments.length))
                                message.leading_detached_comments = [];
                            message.leading_detached_comments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.Annotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.Annotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (let i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [source_file] Annotation source_file
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation source_file.
                 * @member {string} source_file
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.source_file = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.source_file != null && Object.hasOwnProperty.call(message, "source_file"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.source_file);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.source_file = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

export const CardAllRequest = $root.CardAllRequest = (() => {

    /**
     * Properties of a CardAllRequest.
     * @exports ICardAllRequest
     * @interface ICardAllRequest
     */

    /**
     * Constructs a new CardAllRequest.
     * @exports CardAllRequest
     * @classdesc Represents a CardAllRequest.
     * @implements ICardAllRequest
     * @constructor
     * @param {ICardAllRequest=} [properties] Properties to set
     */
    function CardAllRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified CardAllRequest message. Does not implicitly {@link CardAllRequest.verify|verify} messages.
     * @function encode
     * @memberof CardAllRequest
     * @static
     * @param {CardAllRequest} message CardAllRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardAllRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Decodes a CardAllRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CardAllRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardAllRequest} CardAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardAllRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardAllRequest();
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

    return CardAllRequest;
})();

export const CardAllResponse = $root.CardAllResponse = (() => {

    /**
     * Properties of a CardAllResponse.
     * @exports ICardAllResponse
     * @interface ICardAllResponse
     * @property {Array.<CardItemsList>|null} [items] CardAllResponse items
     */

    /**
     * Constructs a new CardAllResponse.
     * @exports CardAllResponse
     * @classdesc Represents a CardAllResponse.
     * @implements ICardAllResponse
     * @constructor
     * @param {ICardAllResponse=} [properties] Properties to set
     */
    function CardAllResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardAllResponse items.
     * @member {Array.<CardItemsList>} items
     * @memberof CardAllResponse
     * @instance
     */
    CardAllResponse.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified CardAllResponse message. Does not implicitly {@link CardAllResponse.verify|verify} messages.
     * @function encode
     * @memberof CardAllResponse
     * @static
     * @param {CardAllResponse} message CardAllResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardAllResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.CardItemsList.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a CardAllResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CardAllResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardAllResponse} CardAllResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardAllResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardAllResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.CardItemsList.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardAllResponse;
})();

export const CardListRequest = $root.CardListRequest = (() => {

    /**
     * Properties of a CardListRequest.
     * @exports ICardListRequest
     * @interface ICardListRequest
     * @property {number|null} [page] CardListRequest page
     * @property {number|null} [page_size] CardListRequest page_size
     */

    /**
     * Constructs a new CardListRequest.
     * @exports CardListRequest
     * @classdesc Represents a CardListRequest.
     * @implements ICardListRequest
     * @constructor
     * @param {ICardListRequest=} [properties] Properties to set
     */
    function CardListRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardListRequest page.
     * @member {number} page
     * @memberof CardListRequest
     * @instance
     */
    CardListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardListRequest page_size.
     * @member {number} page_size
     * @memberof CardListRequest
     * @instance
     */
    CardListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified CardListRequest message. Does not implicitly {@link CardListRequest.verify|verify} messages.
     * @function encode
     * @memberof CardListRequest
     * @static
     * @param {CardListRequest} message CardListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.page != null && Object.hasOwnProperty.call(message, "page"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
        if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
        return writer;
    };

    /**
     * Decodes a CardListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CardListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardListRequest} CardListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardListRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardListRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.page = reader.int64();
                break;
            case 2:
                message.page_size = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardListRequest;
})();

export const CardItems = $root.CardItems = (() => {

    /**
     * Properties of a CardItems.
     * @exports ICardItems
     * @interface ICardItems
     * @property {number|null} [id] CardItems id
     * @property {number|null} [cluster_id] CardItems cluster_id
     * @property {string|null} [namespace] CardItems namespace
     * @property {string|null} [name] CardItems name
     * @property {string|null} [type] CardItems type
     * @property {string|null} [cluster_name] CardItems cluster_name
     * @property {Array.<ContainerItem>|null} [items] CardItems items
     */

    /**
     * Constructs a new CardItems.
     * @exports CardItems
     * @classdesc Represents a CardItems.
     * @implements ICardItems
     * @constructor
     * @param {ICardItems=} [properties] Properties to set
     */
    function CardItems(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardItems id.
     * @member {number} id
     * @memberof CardItems
     * @instance
     */
    CardItems.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardItems cluster_id.
     * @member {number} cluster_id
     * @memberof CardItems
     * @instance
     */
    CardItems.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardItems namespace.
     * @member {string} namespace
     * @memberof CardItems
     * @instance
     */
    CardItems.prototype.namespace = "";

    /**
     * CardItems name.
     * @member {string} name
     * @memberof CardItems
     * @instance
     */
    CardItems.prototype.name = "";

    /**
     * CardItems type.
     * @member {string} type
     * @memberof CardItems
     * @instance
     */
    CardItems.prototype.type = "";

    /**
     * CardItems cluster_name.
     * @member {string} cluster_name
     * @memberof CardItems
     * @instance
     */
    CardItems.prototype.cluster_name = "";

    /**
     * CardItems items.
     * @member {Array.<ContainerItem>} items
     * @memberof CardItems
     * @instance
     */
    CardItems.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified CardItems message. Does not implicitly {@link CardItems.verify|verify} messages.
     * @function encode
     * @memberof CardItems
     * @static
     * @param {CardItems} message CardItems message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardItems.encode = function encode(message, writer) {
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
                $root.ContainerItem.encode(message.items[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a CardItems message from the specified reader or buffer.
     * @function decode
     * @memberof CardItems
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardItems} CardItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardItems.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardItems();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.cluster_id = reader.int64();
                break;
            case 3:
                message.namespace = reader.string();
                break;
            case 4:
                message.name = reader.string();
                break;
            case 5:
                message.type = reader.string();
                break;
            case 6:
                message.cluster_name = reader.string();
                break;
            case 7:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.ContainerItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardItems;
})();

export const CardItemsList = $root.CardItemsList = (() => {

    /**
     * Properties of a CardItemsList.
     * @exports ICardItemsList
     * @interface ICardItemsList
     * @property {number|null} [cluster_id] CardItemsList cluster_id
     * @property {string|null} [namespace] CardItemsList namespace
     * @property {string|null} [cluster_name] CardItemsList cluster_name
     * @property {Array.<CardItems>|null} [items] CardItemsList items
     */

    /**
     * Constructs a new CardItemsList.
     * @exports CardItemsList
     * @classdesc Represents a CardItemsList.
     * @implements ICardItemsList
     * @constructor
     * @param {ICardItemsList=} [properties] Properties to set
     */
    function CardItemsList(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardItemsList cluster_id.
     * @member {number} cluster_id
     * @memberof CardItemsList
     * @instance
     */
    CardItemsList.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardItemsList namespace.
     * @member {string} namespace
     * @memberof CardItemsList
     * @instance
     */
    CardItemsList.prototype.namespace = "";

    /**
     * CardItemsList cluster_name.
     * @member {string} cluster_name
     * @memberof CardItemsList
     * @instance
     */
    CardItemsList.prototype.cluster_name = "";

    /**
     * CardItemsList items.
     * @member {Array.<CardItems>} items
     * @memberof CardItemsList
     * @instance
     */
    CardItemsList.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified CardItemsList message. Does not implicitly {@link CardItemsList.verify|verify} messages.
     * @function encode
     * @memberof CardItemsList
     * @static
     * @param {CardItemsList} message CardItemsList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardItemsList.encode = function encode(message, writer) {
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
                $root.CardItems.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a CardItemsList message from the specified reader or buffer.
     * @function decode
     * @memberof CardItemsList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardItemsList} CardItemsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardItemsList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardItemsList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.namespace = reader.string();
                break;
            case 3:
                message.cluster_name = reader.string();
                break;
            case 4:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.CardItems.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardItemsList;
})();

export const CardListResponse = $root.CardListResponse = (() => {

    /**
     * Properties of a CardListResponse.
     * @exports ICardListResponse
     * @interface ICardListResponse
     * @property {number|null} [page] CardListResponse page
     * @property {number|null} [page_size] CardListResponse page_size
     * @property {number|null} [count] CardListResponse count
     * @property {Array.<CardItems>|null} [items] CardListResponse items
     */

    /**
     * Constructs a new CardListResponse.
     * @exports CardListResponse
     * @classdesc Represents a CardListResponse.
     * @implements ICardListResponse
     * @constructor
     * @param {ICardListResponse=} [properties] Properties to set
     */
    function CardListResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardListResponse page.
     * @member {number} page
     * @memberof CardListResponse
     * @instance
     */
    CardListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardListResponse page_size.
     * @member {number} page_size
     * @memberof CardListResponse
     * @instance
     */
    CardListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardListResponse count.
     * @member {number} count
     * @memberof CardListResponse
     * @instance
     */
    CardListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardListResponse items.
     * @member {Array.<CardItems>} items
     * @memberof CardListResponse
     * @instance
     */
    CardListResponse.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified CardListResponse message. Does not implicitly {@link CardListResponse.verify|verify} messages.
     * @function encode
     * @memberof CardListResponse
     * @static
     * @param {CardListResponse} message CardListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardListResponse.encode = function encode(message, writer) {
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
                $root.CardItems.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a CardListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CardListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardListResponse} CardListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardListResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardListResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.page = reader.int64();
                break;
            case 2:
                message.page_size = reader.int64();
                break;
            case 3:
                message.count = reader.int64();
                break;
            case 4:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.CardItems.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardListResponse;
})();

export const CardCreateRequest = $root.CardCreateRequest = (() => {

    /**
     * Properties of a CardCreateRequest.
     * @exports ICardCreateRequest
     * @interface ICardCreateRequest
     * @property {number|null} [cluster_id] CardCreateRequest cluster_id
     * @property {string|null} [namespace] CardCreateRequest namespace
     * @property {string|null} [name] CardCreateRequest name
     * @property {string|null} [type] CardCreateRequest type
     */

    /**
     * Constructs a new CardCreateRequest.
     * @exports CardCreateRequest
     * @classdesc Represents a CardCreateRequest.
     * @implements ICardCreateRequest
     * @constructor
     * @param {ICardCreateRequest=} [properties] Properties to set
     */
    function CardCreateRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardCreateRequest cluster_id.
     * @member {number} cluster_id
     * @memberof CardCreateRequest
     * @instance
     */
    CardCreateRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardCreateRequest namespace.
     * @member {string} namespace
     * @memberof CardCreateRequest
     * @instance
     */
    CardCreateRequest.prototype.namespace = "";

    /**
     * CardCreateRequest name.
     * @member {string} name
     * @memberof CardCreateRequest
     * @instance
     */
    CardCreateRequest.prototype.name = "";

    /**
     * CardCreateRequest type.
     * @member {string} type
     * @memberof CardCreateRequest
     * @instance
     */
    CardCreateRequest.prototype.type = "";

    /**
     * Encodes the specified CardCreateRequest message. Does not implicitly {@link CardCreateRequest.verify|verify} messages.
     * @function encode
     * @memberof CardCreateRequest
     * @static
     * @param {CardCreateRequest} message CardCreateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardCreateRequest.encode = function encode(message, writer) {
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
     * Decodes a CardCreateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CardCreateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardCreateRequest} CardCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardCreateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardCreateRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.namespace = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.type = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardCreateRequest;
})();

export const CardCreateResponse = $root.CardCreateResponse = (() => {

    /**
     * Properties of a CardCreateResponse.
     * @exports ICardCreateResponse
     * @interface ICardCreateResponse
     * @property {number|null} [id] CardCreateResponse id
     * @property {string|null} [type] CardCreateResponse type
     * @property {string|null} [namespace] CardCreateResponse namespace
     * @property {string|null} [name] CardCreateResponse name
     * @property {number|null} [cluster_id] CardCreateResponse cluster_id
     * @property {string|null} [created_at] CardCreateResponse created_at
     * @property {string|null} [updated_at] CardCreateResponse updated_at
     * @property {string|null} [deleted_at] CardCreateResponse deleted_at
     */

    /**
     * Constructs a new CardCreateResponse.
     * @exports CardCreateResponse
     * @classdesc Represents a CardCreateResponse.
     * @implements ICardCreateResponse
     * @constructor
     * @param {ICardCreateResponse=} [properties] Properties to set
     */
    function CardCreateResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardCreateResponse id.
     * @member {number} id
     * @memberof CardCreateResponse
     * @instance
     */
    CardCreateResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardCreateResponse type.
     * @member {string} type
     * @memberof CardCreateResponse
     * @instance
     */
    CardCreateResponse.prototype.type = "";

    /**
     * CardCreateResponse namespace.
     * @member {string} namespace
     * @memberof CardCreateResponse
     * @instance
     */
    CardCreateResponse.prototype.namespace = "";

    /**
     * CardCreateResponse name.
     * @member {string} name
     * @memberof CardCreateResponse
     * @instance
     */
    CardCreateResponse.prototype.name = "";

    /**
     * CardCreateResponse cluster_id.
     * @member {number} cluster_id
     * @memberof CardCreateResponse
     * @instance
     */
    CardCreateResponse.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardCreateResponse created_at.
     * @member {string} created_at
     * @memberof CardCreateResponse
     * @instance
     */
    CardCreateResponse.prototype.created_at = "";

    /**
     * CardCreateResponse updated_at.
     * @member {string} updated_at
     * @memberof CardCreateResponse
     * @instance
     */
    CardCreateResponse.prototype.updated_at = "";

    /**
     * CardCreateResponse deleted_at.
     * @member {string} deleted_at
     * @memberof CardCreateResponse
     * @instance
     */
    CardCreateResponse.prototype.deleted_at = "";

    /**
     * Encodes the specified CardCreateResponse message. Does not implicitly {@link CardCreateResponse.verify|verify} messages.
     * @function encode
     * @memberof CardCreateResponse
     * @static
     * @param {CardCreateResponse} message CardCreateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardCreateResponse.encode = function encode(message, writer) {
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
     * Decodes a CardCreateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CardCreateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardCreateResponse} CardCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardCreateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardCreateResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.type = reader.string();
                break;
            case 3:
                message.namespace = reader.string();
                break;
            case 4:
                message.name = reader.string();
                break;
            case 6:
                message.cluster_id = reader.int64();
                break;
            case 7:
                message.created_at = reader.string();
                break;
            case 8:
                message.updated_at = reader.string();
                break;
            case 9:
                message.deleted_at = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardCreateResponse;
})();

export const CardShowRequest = $root.CardShowRequest = (() => {

    /**
     * Properties of a CardShowRequest.
     * @exports ICardShowRequest
     * @interface ICardShowRequest
     * @property {number|null} [card_id] CardShowRequest card_id
     */

    /**
     * Constructs a new CardShowRequest.
     * @exports CardShowRequest
     * @classdesc Represents a CardShowRequest.
     * @implements ICardShowRequest
     * @constructor
     * @param {ICardShowRequest=} [properties] Properties to set
     */
    function CardShowRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardShowRequest card_id.
     * @member {number} card_id
     * @memberof CardShowRequest
     * @instance
     */
    CardShowRequest.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified CardShowRequest message. Does not implicitly {@link CardShowRequest.verify|verify} messages.
     * @function encode
     * @memberof CardShowRequest
     * @static
     * @param {CardShowRequest} message CardShowRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardShowRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.card_id);
        return writer;
    };

    /**
     * Decodes a CardShowRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CardShowRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardShowRequest} CardShowRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardShowRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardShowRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.card_id = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardShowRequest;
})();

export const CardShowResponse = $root.CardShowResponse = (() => {

    /**
     * Properties of a CardShowResponse.
     * @exports ICardShowResponse
     * @interface ICardShowResponse
     * @property {number|null} [id] CardShowResponse id
     * @property {string|null} [type] CardShowResponse type
     * @property {string|null} [namespace] CardShowResponse namespace
     * @property {string|null} [name] CardShowResponse name
     * @property {number|null} [cluster_id] CardShowResponse cluster_id
     * @property {string|null} [created_at] CardShowResponse created_at
     * @property {string|null} [updated_at] CardShowResponse updated_at
     * @property {string|null} [deleted_at] CardShowResponse deleted_at
     * @property {Array.<ContainerItem>|null} [items] CardShowResponse items
     */

    /**
     * Constructs a new CardShowResponse.
     * @exports CardShowResponse
     * @classdesc Represents a CardShowResponse.
     * @implements ICardShowResponse
     * @constructor
     * @param {ICardShowResponse=} [properties] Properties to set
     */
    function CardShowResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardShowResponse id.
     * @member {number} id
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardShowResponse type.
     * @member {string} type
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.type = "";

    /**
     * CardShowResponse namespace.
     * @member {string} namespace
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.namespace = "";

    /**
     * CardShowResponse name.
     * @member {string} name
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.name = "";

    /**
     * CardShowResponse cluster_id.
     * @member {number} cluster_id
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardShowResponse created_at.
     * @member {string} created_at
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.created_at = "";

    /**
     * CardShowResponse updated_at.
     * @member {string} updated_at
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.updated_at = "";

    /**
     * CardShowResponse deleted_at.
     * @member {string} deleted_at
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.deleted_at = "";

    /**
     * CardShowResponse items.
     * @member {Array.<ContainerItem>} items
     * @memberof CardShowResponse
     * @instance
     */
    CardShowResponse.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified CardShowResponse message. Does not implicitly {@link CardShowResponse.verify|verify} messages.
     * @function encode
     * @memberof CardShowResponse
     * @static
     * @param {CardShowResponse} message CardShowResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardShowResponse.encode = function encode(message, writer) {
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
                $root.ContainerItem.encode(message.items[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a CardShowResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CardShowResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardShowResponse} CardShowResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardShowResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardShowResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.type = reader.string();
                break;
            case 3:
                message.namespace = reader.string();
                break;
            case 4:
                message.name = reader.string();
                break;
            case 6:
                message.cluster_id = reader.int64();
                break;
            case 7:
                message.created_at = reader.string();
                break;
            case 8:
                message.updated_at = reader.string();
                break;
            case 9:
                message.deleted_at = reader.string();
                break;
            case 10:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.ContainerItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardShowResponse;
})();

export const CardDeleteRequest = $root.CardDeleteRequest = (() => {

    /**
     * Properties of a CardDeleteRequest.
     * @exports ICardDeleteRequest
     * @interface ICardDeleteRequest
     * @property {number|null} [card_id] CardDeleteRequest card_id
     */

    /**
     * Constructs a new CardDeleteRequest.
     * @exports CardDeleteRequest
     * @classdesc Represents a CardDeleteRequest.
     * @implements ICardDeleteRequest
     * @constructor
     * @param {ICardDeleteRequest=} [properties] Properties to set
     */
    function CardDeleteRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardDeleteRequest card_id.
     * @member {number} card_id
     * @memberof CardDeleteRequest
     * @instance
     */
    CardDeleteRequest.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified CardDeleteRequest message. Does not implicitly {@link CardDeleteRequest.verify|verify} messages.
     * @function encode
     * @memberof CardDeleteRequest
     * @static
     * @param {CardDeleteRequest} message CardDeleteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardDeleteRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.card_id);
        return writer;
    };

    /**
     * Decodes a CardDeleteRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CardDeleteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardDeleteRequest} CardDeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardDeleteRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardDeleteRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.card_id = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardDeleteRequest;
})();

export const CardDeleteResponse = $root.CardDeleteResponse = (() => {

    /**
     * Properties of a CardDeleteResponse.
     * @exports ICardDeleteResponse
     * @interface ICardDeleteResponse
     */

    /**
     * Constructs a new CardDeleteResponse.
     * @exports CardDeleteResponse
     * @classdesc Represents a CardDeleteResponse.
     * @implements ICardDeleteResponse
     * @constructor
     * @param {ICardDeleteResponse=} [properties] Properties to set
     */
    function CardDeleteResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified CardDeleteResponse message. Does not implicitly {@link CardDeleteResponse.verify|verify} messages.
     * @function encode
     * @memberof CardDeleteResponse
     * @static
     * @param {CardDeleteResponse} message CardDeleteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardDeleteResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Decodes a CardDeleteResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CardDeleteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardDeleteResponse} CardDeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardDeleteResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardDeleteResponse();
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

    return CardDeleteResponse;
})();

export const CardSvc = $root.CardSvc = (() => {

    /**
     * Constructs a new CardSvc service.
     * @exports CardSvc
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
     * Callback as used by {@link CardSvc#all}.
     * @memberof CardSvc
     * @typedef AllCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CardAllResponse} [response] CardAllResponse
     */

    /**
     * Calls All.
     * @function all
     * @memberof CardSvc
     * @instance
     * @param {CardAllRequest} request CardAllRequest message or plain object
     * @param {CardSvc.AllCallback} callback Node-style callback called with the error, if any, and CardAllResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(CardSvc.prototype.all = function all(request, callback) {
        return this.rpcCall(all, $root.CardAllRequest, $root.CardAllResponse, request, callback);
    }, "name", { value: "All" });

    /**
     * Calls All.
     * @function all
     * @memberof CardSvc
     * @instance
     * @param {CardAllRequest} request CardAllRequest message or plain object
     * @returns {Promise<CardAllResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link CardSvc#create}.
     * @memberof CardSvc
     * @typedef CreateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CardCreateResponse} [response] CardCreateResponse
     */

    /**
     * Calls Create.
     * @function create
     * @memberof CardSvc
     * @instance
     * @param {CardCreateRequest} request CardCreateRequest message or plain object
     * @param {CardSvc.CreateCallback} callback Node-style callback called with the error, if any, and CardCreateResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(CardSvc.prototype.create = function create(request, callback) {
        return this.rpcCall(create, $root.CardCreateRequest, $root.CardCreateResponse, request, callback);
    }, "name", { value: "Create" });

    /**
     * Calls Create.
     * @function create
     * @memberof CardSvc
     * @instance
     * @param {CardCreateRequest} request CardCreateRequest message or plain object
     * @returns {Promise<CardCreateResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link CardSvc#show}.
     * @memberof CardSvc
     * @typedef ShowCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CardShowResponse} [response] CardShowResponse
     */

    /**
     * Calls Show.
     * @function show
     * @memberof CardSvc
     * @instance
     * @param {CardShowRequest} request CardShowRequest message or plain object
     * @param {CardSvc.ShowCallback} callback Node-style callback called with the error, if any, and CardShowResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(CardSvc.prototype.show = function show(request, callback) {
        return this.rpcCall(show, $root.CardShowRequest, $root.CardShowResponse, request, callback);
    }, "name", { value: "Show" });

    /**
     * Calls Show.
     * @function show
     * @memberof CardSvc
     * @instance
     * @param {CardShowRequest} request CardShowRequest message or plain object
     * @returns {Promise<CardShowResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link CardSvc#delete_}.
     * @memberof CardSvc
     * @typedef DeleteCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CardDeleteResponse} [response] CardDeleteResponse
     */

    /**
     * Calls Delete.
     * @function delete
     * @memberof CardSvc
     * @instance
     * @param {CardDeleteRequest} request CardDeleteRequest message or plain object
     * @param {CardSvc.DeleteCallback} callback Node-style callback called with the error, if any, and CardDeleteResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(CardSvc.prototype["delete"] = function delete_(request, callback) {
        return this.rpcCall(delete_, $root.CardDeleteRequest, $root.CardDeleteResponse, request, callback);
    }, "name", { value: "Delete" });

    /**
     * Calls Delete.
     * @function delete
     * @memberof CardSvc
     * @instance
     * @param {CardDeleteRequest} request CardDeleteRequest message or plain object
     * @returns {Promise<CardDeleteResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link CardSvc#allContainers}.
     * @memberof CardSvc
     * @typedef AllContainersCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CardAllContainersResponse} [response] CardAllContainersResponse
     */

    /**
     * Calls AllContainers.
     * @function allContainers
     * @memberof CardSvc
     * @instance
     * @param {CardAllContainersRequest} request CardAllContainersRequest message or plain object
     * @param {CardSvc.AllContainersCallback} callback Node-style callback called with the error, if any, and CardAllContainersResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(CardSvc.prototype.allContainers = function allContainers(request, callback) {
        return this.rpcCall(allContainers, $root.CardAllContainersRequest, $root.CardAllContainersResponse, request, callback);
    }, "name", { value: "AllContainers" });

    /**
     * Calls AllContainers.
     * @function allContainers
     * @memberof CardSvc
     * @instance
     * @param {CardAllContainersRequest} request CardAllContainersRequest message or plain object
     * @returns {Promise<CardAllContainersResponse>} Promise
     * @variation 2
     */

    return CardSvc;
})();

export const CardAllContainersRequest = $root.CardAllContainersRequest = (() => {

    /**
     * Properties of a CardAllContainersRequest.
     * @exports ICardAllContainersRequest
     * @interface ICardAllContainersRequest
     * @property {number|null} [card_id] CardAllContainersRequest card_id
     */

    /**
     * Constructs a new CardAllContainersRequest.
     * @exports CardAllContainersRequest
     * @classdesc Represents a CardAllContainersRequest.
     * @implements ICardAllContainersRequest
     * @constructor
     * @param {ICardAllContainersRequest=} [properties] Properties to set
     */
    function CardAllContainersRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardAllContainersRequest card_id.
     * @member {number} card_id
     * @memberof CardAllContainersRequest
     * @instance
     */
    CardAllContainersRequest.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified CardAllContainersRequest message. Does not implicitly {@link CardAllContainersRequest.verify|verify} messages.
     * @function encode
     * @memberof CardAllContainersRequest
     * @static
     * @param {CardAllContainersRequest} message CardAllContainersRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardAllContainersRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.card_id != null && Object.hasOwnProperty.call(message, "card_id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.card_id);
        return writer;
    };

    /**
     * Decodes a CardAllContainersRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CardAllContainersRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardAllContainersRequest} CardAllContainersRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardAllContainersRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardAllContainersRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.card_id = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardAllContainersRequest;
})();

export const CardAllContainersResponse = $root.CardAllContainersResponse = (() => {

    /**
     * Properties of a CardAllContainersResponse.
     * @exports ICardAllContainersResponse
     * @interface ICardAllContainersResponse
     * @property {Array.<ContainerItem>|null} [items] CardAllContainersResponse items
     */

    /**
     * Constructs a new CardAllContainersResponse.
     * @exports CardAllContainersResponse
     * @classdesc Represents a CardAllContainersResponse.
     * @implements ICardAllContainersResponse
     * @constructor
     * @param {ICardAllContainersResponse=} [properties] Properties to set
     */
    function CardAllContainersResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardAllContainersResponse items.
     * @member {Array.<ContainerItem>} items
     * @memberof CardAllContainersResponse
     * @instance
     */
    CardAllContainersResponse.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified CardAllContainersResponse message. Does not implicitly {@link CardAllContainersResponse.verify|verify} messages.
     * @function encode
     * @memberof CardAllContainersResponse
     * @static
     * @param {CardAllContainersResponse} message CardAllContainersResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardAllContainersResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.ContainerItem.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a CardAllContainersResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CardAllContainersResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardAllContainersResponse} CardAllContainersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardAllContainersResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardAllContainersResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.ContainerItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardAllContainersResponse;
})();

export const ClusterListRequest = $root.ClusterListRequest = (() => {

    /**
     * Properties of a ClusterListRequest.
     * @exports IClusterListRequest
     * @interface IClusterListRequest
     * @property {number|null} [page] ClusterListRequest page
     * @property {number|null} [page_size] ClusterListRequest page_size
     */

    /**
     * Constructs a new ClusterListRequest.
     * @exports ClusterListRequest
     * @classdesc Represents a ClusterListRequest.
     * @implements IClusterListRequest
     * @constructor
     * @param {IClusterListRequest=} [properties] Properties to set
     */
    function ClusterListRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterListRequest page.
     * @member {number} page
     * @memberof ClusterListRequest
     * @instance
     */
    ClusterListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClusterListRequest page_size.
     * @member {number} page_size
     * @memberof ClusterListRequest
     * @instance
     */
    ClusterListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified ClusterListRequest message. Does not implicitly {@link ClusterListRequest.verify|verify} messages.
     * @function encode
     * @memberof ClusterListRequest
     * @static
     * @param {ClusterListRequest} message ClusterListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.page != null && Object.hasOwnProperty.call(message, "page"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
        if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
        return writer;
    };

    /**
     * Decodes a ClusterListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterListRequest} ClusterListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterListRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterListRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.page = reader.int64();
                break;
            case 2:
                message.page_size = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterListRequest;
})();

export const ClusterListResponse = $root.ClusterListResponse = (() => {

    /**
     * Properties of a ClusterListResponse.
     * @exports IClusterListResponse
     * @interface IClusterListResponse
     * @property {number|null} [page] ClusterListResponse page
     * @property {number|null} [page_size] ClusterListResponse page_size
     * @property {number|null} [count] ClusterListResponse count
     * @property {Array.<ClusterModel>|null} [items] ClusterListResponse items
     */

    /**
     * Constructs a new ClusterListResponse.
     * @exports ClusterListResponse
     * @classdesc Represents a ClusterListResponse.
     * @implements IClusterListResponse
     * @constructor
     * @param {IClusterListResponse=} [properties] Properties to set
     */
    function ClusterListResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterListResponse page.
     * @member {number} page
     * @memberof ClusterListResponse
     * @instance
     */
    ClusterListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClusterListResponse page_size.
     * @member {number} page_size
     * @memberof ClusterListResponse
     * @instance
     */
    ClusterListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClusterListResponse count.
     * @member {number} count
     * @memberof ClusterListResponse
     * @instance
     */
    ClusterListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClusterListResponse items.
     * @member {Array.<ClusterModel>} items
     * @memberof ClusterListResponse
     * @instance
     */
    ClusterListResponse.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified ClusterListResponse message. Does not implicitly {@link ClusterListResponse.verify|verify} messages.
     * @function encode
     * @memberof ClusterListResponse
     * @static
     * @param {ClusterListResponse} message ClusterListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterListResponse.encode = function encode(message, writer) {
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
                $root.ClusterModel.encode(message.items[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a ClusterListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterListResponse} ClusterListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterListResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterListResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.page = reader.int64();
                break;
            case 2:
                message.page_size = reader.int64();
                break;
            case 3:
                message.count = reader.int64();
                break;
            case 4:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.ClusterModel.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterListResponse;
})();

export const ClusterCreateRequest = $root.ClusterCreateRequest = (() => {

    /**
     * Properties of a ClusterCreateRequest.
     * @exports IClusterCreateRequest
     * @interface IClusterCreateRequest
     * @property {string|null} [name] ClusterCreateRequest name
     * @property {string|null} [kube_config] ClusterCreateRequest kube_config
     * @property {string|null} [namespace] ClusterCreateRequest namespace
     */

    /**
     * Constructs a new ClusterCreateRequest.
     * @exports ClusterCreateRequest
     * @classdesc Represents a ClusterCreateRequest.
     * @implements IClusterCreateRequest
     * @constructor
     * @param {IClusterCreateRequest=} [properties] Properties to set
     */
    function ClusterCreateRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterCreateRequest name.
     * @member {string} name
     * @memberof ClusterCreateRequest
     * @instance
     */
    ClusterCreateRequest.prototype.name = "";

    /**
     * ClusterCreateRequest kube_config.
     * @member {string} kube_config
     * @memberof ClusterCreateRequest
     * @instance
     */
    ClusterCreateRequest.prototype.kube_config = "";

    /**
     * ClusterCreateRequest namespace.
     * @member {string} namespace
     * @memberof ClusterCreateRequest
     * @instance
     */
    ClusterCreateRequest.prototype.namespace = "";

    /**
     * Encodes the specified ClusterCreateRequest message. Does not implicitly {@link ClusterCreateRequest.verify|verify} messages.
     * @function encode
     * @memberof ClusterCreateRequest
     * @static
     * @param {ClusterCreateRequest} message ClusterCreateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterCreateRequest.encode = function encode(message, writer) {
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
     * Decodes a ClusterCreateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterCreateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterCreateRequest} ClusterCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterCreateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterCreateRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.kube_config = reader.string();
                break;
            case 3:
                message.namespace = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterCreateRequest;
})();

export const ClusterCreateResponse = $root.ClusterCreateResponse = (() => {

    /**
     * Properties of a ClusterCreateResponse.
     * @exports IClusterCreateResponse
     * @interface IClusterCreateResponse
     * @property {number|null} [id] ClusterCreateResponse id
     * @property {string|null} [name] ClusterCreateResponse name
     * @property {string|null} [created_at] ClusterCreateResponse created_at
     * @property {string|null} [updated_at] ClusterCreateResponse updated_at
     * @property {string|null} [deleted_at] ClusterCreateResponse deleted_at
     */

    /**
     * Constructs a new ClusterCreateResponse.
     * @exports ClusterCreateResponse
     * @classdesc Represents a ClusterCreateResponse.
     * @implements IClusterCreateResponse
     * @constructor
     * @param {IClusterCreateResponse=} [properties] Properties to set
     */
    function ClusterCreateResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterCreateResponse id.
     * @member {number} id
     * @memberof ClusterCreateResponse
     * @instance
     */
    ClusterCreateResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClusterCreateResponse name.
     * @member {string} name
     * @memberof ClusterCreateResponse
     * @instance
     */
    ClusterCreateResponse.prototype.name = "";

    /**
     * ClusterCreateResponse created_at.
     * @member {string} created_at
     * @memberof ClusterCreateResponse
     * @instance
     */
    ClusterCreateResponse.prototype.created_at = "";

    /**
     * ClusterCreateResponse updated_at.
     * @member {string} updated_at
     * @memberof ClusterCreateResponse
     * @instance
     */
    ClusterCreateResponse.prototype.updated_at = "";

    /**
     * ClusterCreateResponse deleted_at.
     * @member {string} deleted_at
     * @memberof ClusterCreateResponse
     * @instance
     */
    ClusterCreateResponse.prototype.deleted_at = "";

    /**
     * Encodes the specified ClusterCreateResponse message. Does not implicitly {@link ClusterCreateResponse.verify|verify} messages.
     * @function encode
     * @memberof ClusterCreateResponse
     * @static
     * @param {ClusterCreateResponse} message ClusterCreateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterCreateResponse.encode = function encode(message, writer) {
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
     * Decodes a ClusterCreateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterCreateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterCreateResponse} ClusterCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterCreateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterCreateResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 4:
                message.created_at = reader.string();
                break;
            case 5:
                message.updated_at = reader.string();
                break;
            case 6:
                message.deleted_at = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterCreateResponse;
})();

export const ClusterShowRequest = $root.ClusterShowRequest = (() => {

    /**
     * Properties of a ClusterShowRequest.
     * @exports IClusterShowRequest
     * @interface IClusterShowRequest
     * @property {number|null} [cluster_id] ClusterShowRequest cluster_id
     */

    /**
     * Constructs a new ClusterShowRequest.
     * @exports ClusterShowRequest
     * @classdesc Represents a ClusterShowRequest.
     * @implements IClusterShowRequest
     * @constructor
     * @param {IClusterShowRequest=} [properties] Properties to set
     */
    function ClusterShowRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterShowRequest cluster_id.
     * @member {number} cluster_id
     * @memberof ClusterShowRequest
     * @instance
     */
    ClusterShowRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified ClusterShowRequest message. Does not implicitly {@link ClusterShowRequest.verify|verify} messages.
     * @function encode
     * @memberof ClusterShowRequest
     * @static
     * @param {ClusterShowRequest} message ClusterShowRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterShowRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
        return writer;
    };

    /**
     * Decodes a ClusterShowRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterShowRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterShowRequest} ClusterShowRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterShowRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterShowRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterShowRequest;
})();

export const ClusterShowResponse = $root.ClusterShowResponse = (() => {

    /**
     * Properties of a ClusterShowResponse.
     * @exports IClusterShowResponse
     * @interface IClusterShowResponse
     * @property {number|null} [id] ClusterShowResponse id
     * @property {string|null} [name] ClusterShowResponse name
     * @property {string|null} [kube_config] ClusterShowResponse kube_config
     * @property {string|null} [api_server_url] ClusterShowResponse api_server_url
     * @property {string|null} [created_at] ClusterShowResponse created_at
     * @property {string|null} [updated_at] ClusterShowResponse updated_at
     * @property {string|null} [deleted_at] ClusterShowResponse deleted_at
     * @property {Array.<ClusterItems>|null} [items] ClusterShowResponse items
     */

    /**
     * Constructs a new ClusterShowResponse.
     * @exports ClusterShowResponse
     * @classdesc Represents a ClusterShowResponse.
     * @implements IClusterShowResponse
     * @constructor
     * @param {IClusterShowResponse=} [properties] Properties to set
     */
    function ClusterShowResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterShowResponse id.
     * @member {number} id
     * @memberof ClusterShowResponse
     * @instance
     */
    ClusterShowResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClusterShowResponse name.
     * @member {string} name
     * @memberof ClusterShowResponse
     * @instance
     */
    ClusterShowResponse.prototype.name = "";

    /**
     * ClusterShowResponse kube_config.
     * @member {string} kube_config
     * @memberof ClusterShowResponse
     * @instance
     */
    ClusterShowResponse.prototype.kube_config = "";

    /**
     * ClusterShowResponse api_server_url.
     * @member {string} api_server_url
     * @memberof ClusterShowResponse
     * @instance
     */
    ClusterShowResponse.prototype.api_server_url = "";

    /**
     * ClusterShowResponse created_at.
     * @member {string} created_at
     * @memberof ClusterShowResponse
     * @instance
     */
    ClusterShowResponse.prototype.created_at = "";

    /**
     * ClusterShowResponse updated_at.
     * @member {string} updated_at
     * @memberof ClusterShowResponse
     * @instance
     */
    ClusterShowResponse.prototype.updated_at = "";

    /**
     * ClusterShowResponse deleted_at.
     * @member {string} deleted_at
     * @memberof ClusterShowResponse
     * @instance
     */
    ClusterShowResponse.prototype.deleted_at = "";

    /**
     * ClusterShowResponse items.
     * @member {Array.<ClusterItems>} items
     * @memberof ClusterShowResponse
     * @instance
     */
    ClusterShowResponse.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified ClusterShowResponse message. Does not implicitly {@link ClusterShowResponse.verify|verify} messages.
     * @function encode
     * @memberof ClusterShowResponse
     * @static
     * @param {ClusterShowResponse} message ClusterShowResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterShowResponse.encode = function encode(message, writer) {
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
                $root.ClusterItems.encode(message.items[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a ClusterShowResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterShowResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterShowResponse} ClusterShowResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterShowResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterShowResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.kube_config = reader.string();
                break;
            case 4:
                message.api_server_url = reader.string();
                break;
            case 5:
                message.created_at = reader.string();
                break;
            case 6:
                message.updated_at = reader.string();
                break;
            case 7:
                message.deleted_at = reader.string();
                break;
            case 8:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.ClusterItems.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterShowResponse;
})();

export const ClusterItem = $root.ClusterItem = (() => {

    /**
     * Properties of a ClusterItem.
     * @exports IClusterItem
     * @interface IClusterItem
     * @property {string|null} [namespace] ClusterItem namespace
     * @property {string|null} [type] ClusterItem type
     * @property {string|null} [name] ClusterItem name
     * @property {boolean|null} [enabled] ClusterItem enabled
     * @property {number|null} [cluster_id] ClusterItem cluster_id
     * @property {number|null} [card_id] ClusterItem card_id
     */

    /**
     * Constructs a new ClusterItem.
     * @exports ClusterItem
     * @classdesc Represents a ClusterItem.
     * @implements IClusterItem
     * @constructor
     * @param {IClusterItem=} [properties] Properties to set
     */
    function ClusterItem(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterItem namespace.
     * @member {string} namespace
     * @memberof ClusterItem
     * @instance
     */
    ClusterItem.prototype.namespace = "";

    /**
     * ClusterItem type.
     * @member {string} type
     * @memberof ClusterItem
     * @instance
     */
    ClusterItem.prototype.type = "";

    /**
     * ClusterItem name.
     * @member {string} name
     * @memberof ClusterItem
     * @instance
     */
    ClusterItem.prototype.name = "";

    /**
     * ClusterItem enabled.
     * @member {boolean} enabled
     * @memberof ClusterItem
     * @instance
     */
    ClusterItem.prototype.enabled = false;

    /**
     * ClusterItem cluster_id.
     * @member {number} cluster_id
     * @memberof ClusterItem
     * @instance
     */
    ClusterItem.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClusterItem card_id.
     * @member {number} card_id
     * @memberof ClusterItem
     * @instance
     */
    ClusterItem.prototype.card_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified ClusterItem message. Does not implicitly {@link ClusterItem.verify|verify} messages.
     * @function encode
     * @memberof ClusterItem
     * @static
     * @param {ClusterItem} message ClusterItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterItem.encode = function encode(message, writer) {
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
     * Decodes a ClusterItem message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterItem} ClusterItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterItem();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            case 2:
                message.type = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.enabled = reader.bool();
                break;
            case 5:
                message.cluster_id = reader.int64();
                break;
            case 6:
                message.card_id = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterItem;
})();

export const ClusterItems = $root.ClusterItems = (() => {

    /**
     * Properties of a ClusterItems.
     * @exports IClusterItems
     * @interface IClusterItems
     * @property {string|null} [namespace] ClusterItems namespace
     * @property {Array.<ClusterItem>|null} [items] ClusterItems items
     */

    /**
     * Constructs a new ClusterItems.
     * @exports ClusterItems
     * @classdesc Represents a ClusterItems.
     * @implements IClusterItems
     * @constructor
     * @param {IClusterItems=} [properties] Properties to set
     */
    function ClusterItems(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterItems namespace.
     * @member {string} namespace
     * @memberof ClusterItems
     * @instance
     */
    ClusterItems.prototype.namespace = "";

    /**
     * ClusterItems items.
     * @member {Array.<ClusterItem>} items
     * @memberof ClusterItems
     * @instance
     */
    ClusterItems.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified ClusterItems message. Does not implicitly {@link ClusterItems.verify|verify} messages.
     * @function encode
     * @memberof ClusterItems
     * @static
     * @param {ClusterItems} message ClusterItems message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterItems.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.namespace != null && Object.hasOwnProperty.call(message, "namespace"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.namespace);
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.ClusterItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a ClusterItems message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterItems
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterItems} ClusterItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterItems.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterItems();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            case 2:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.ClusterItem.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterItems;
})();

export const ClusterDeleteRequest = $root.ClusterDeleteRequest = (() => {

    /**
     * Properties of a ClusterDeleteRequest.
     * @exports IClusterDeleteRequest
     * @interface IClusterDeleteRequest
     * @property {number|null} [cluster_id] ClusterDeleteRequest cluster_id
     */

    /**
     * Constructs a new ClusterDeleteRequest.
     * @exports ClusterDeleteRequest
     * @classdesc Represents a ClusterDeleteRequest.
     * @implements IClusterDeleteRequest
     * @constructor
     * @param {IClusterDeleteRequest=} [properties] Properties to set
     */
    function ClusterDeleteRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClusterDeleteRequest cluster_id.
     * @member {number} cluster_id
     * @memberof ClusterDeleteRequest
     * @instance
     */
    ClusterDeleteRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified ClusterDeleteRequest message. Does not implicitly {@link ClusterDeleteRequest.verify|verify} messages.
     * @function encode
     * @memberof ClusterDeleteRequest
     * @static
     * @param {ClusterDeleteRequest} message ClusterDeleteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterDeleteRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cluster_id != null && Object.hasOwnProperty.call(message, "cluster_id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cluster_id);
        return writer;
    };

    /**
     * Decodes a ClusterDeleteRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterDeleteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterDeleteRequest} ClusterDeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterDeleteRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterDeleteRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterDeleteRequest;
})();

export const ClusterDeleteResponse = $root.ClusterDeleteResponse = (() => {

    /**
     * Properties of a ClusterDeleteResponse.
     * @exports IClusterDeleteResponse
     * @interface IClusterDeleteResponse
     */

    /**
     * Constructs a new ClusterDeleteResponse.
     * @exports ClusterDeleteResponse
     * @classdesc Represents a ClusterDeleteResponse.
     * @implements IClusterDeleteResponse
     * @constructor
     * @param {IClusterDeleteResponse=} [properties] Properties to set
     */
    function ClusterDeleteResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified ClusterDeleteResponse message. Does not implicitly {@link ClusterDeleteResponse.verify|verify} messages.
     * @function encode
     * @memberof ClusterDeleteResponse
     * @static
     * @param {ClusterDeleteResponse} message ClusterDeleteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClusterDeleteResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Decodes a ClusterDeleteResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ClusterDeleteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterDeleteResponse} ClusterDeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterDeleteResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterDeleteResponse();
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

    return ClusterDeleteResponse;
})();

export const ClusterSvc = $root.ClusterSvc = (() => {

    /**
     * Constructs a new ClusterSvc service.
     * @exports ClusterSvc
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
     * Callback as used by {@link ClusterSvc#list}.
     * @memberof ClusterSvc
     * @typedef ListCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ClusterListResponse} [response] ClusterListResponse
     */

    /**
     * Calls List.
     * @function list
     * @memberof ClusterSvc
     * @instance
     * @param {ClusterListRequest} request ClusterListRequest message or plain object
     * @param {ClusterSvc.ListCallback} callback Node-style callback called with the error, if any, and ClusterListResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ClusterSvc.prototype.list = function list(request, callback) {
        return this.rpcCall(list, $root.ClusterListRequest, $root.ClusterListResponse, request, callback);
    }, "name", { value: "List" });

    /**
     * Calls List.
     * @function list
     * @memberof ClusterSvc
     * @instance
     * @param {ClusterListRequest} request ClusterListRequest message or plain object
     * @returns {Promise<ClusterListResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ClusterSvc#create}.
     * @memberof ClusterSvc
     * @typedef CreateCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ClusterCreateResponse} [response] ClusterCreateResponse
     */

    /**
     * Calls Create.
     * @function create
     * @memberof ClusterSvc
     * @instance
     * @param {ClusterCreateRequest} request ClusterCreateRequest message or plain object
     * @param {ClusterSvc.CreateCallback} callback Node-style callback called with the error, if any, and ClusterCreateResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ClusterSvc.prototype.create = function create(request, callback) {
        return this.rpcCall(create, $root.ClusterCreateRequest, $root.ClusterCreateResponse, request, callback);
    }, "name", { value: "Create" });

    /**
     * Calls Create.
     * @function create
     * @memberof ClusterSvc
     * @instance
     * @param {ClusterCreateRequest} request ClusterCreateRequest message or plain object
     * @returns {Promise<ClusterCreateResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ClusterSvc#show}.
     * @memberof ClusterSvc
     * @typedef ShowCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ClusterShowResponse} [response] ClusterShowResponse
     */

    /**
     * Calls Show.
     * @function show
     * @memberof ClusterSvc
     * @instance
     * @param {ClusterShowRequest} request ClusterShowRequest message or plain object
     * @param {ClusterSvc.ShowCallback} callback Node-style callback called with the error, if any, and ClusterShowResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ClusterSvc.prototype.show = function show(request, callback) {
        return this.rpcCall(show, $root.ClusterShowRequest, $root.ClusterShowResponse, request, callback);
    }, "name", { value: "Show" });

    /**
     * Calls Show.
     * @function show
     * @memberof ClusterSvc
     * @instance
     * @param {ClusterShowRequest} request ClusterShowRequest message or plain object
     * @returns {Promise<ClusterShowResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ClusterSvc#delete_}.
     * @memberof ClusterSvc
     * @typedef DeleteCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ClusterDeleteResponse} [response] ClusterDeleteResponse
     */

    /**
     * Calls Delete.
     * @function delete
     * @memberof ClusterSvc
     * @instance
     * @param {ClusterDeleteRequest} request ClusterDeleteRequest message or plain object
     * @param {ClusterSvc.DeleteCallback} callback Node-style callback called with the error, if any, and ClusterDeleteResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ClusterSvc.prototype["delete"] = function delete_(request, callback) {
        return this.rpcCall(delete_, $root.ClusterDeleteRequest, $root.ClusterDeleteResponse, request, callback);
    }, "name", { value: "Delete" });

    /**
     * Calls Delete.
     * @function delete
     * @memberof ClusterSvc
     * @instance
     * @param {ClusterDeleteRequest} request ClusterDeleteRequest message or plain object
     * @returns {Promise<ClusterDeleteResponse>} Promise
     * @variation 2
     */

    return ClusterSvc;
})();

export const ContainerItem = $root.ContainerItem = (() => {

    /**
     * Properties of a ContainerItem.
     * @exports IContainerItem
     * @interface IContainerItem
     * @property {number|null} [cluster_id] ContainerItem cluster_id
     * @property {string|null} [namespace] ContainerItem namespace
     * @property {string|null} [pod] ContainerItem pod
     * @property {string|null} [container] ContainerItem container
     */

    /**
     * Constructs a new ContainerItem.
     * @exports ContainerItem
     * @classdesc Represents a ContainerItem.
     * @implements IContainerItem
     * @constructor
     * @param {IContainerItem=} [properties] Properties to set
     */
    function ContainerItem(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerItem cluster_id.
     * @member {number} cluster_id
     * @memberof ContainerItem
     * @instance
     */
    ContainerItem.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerItem namespace.
     * @member {string} namespace
     * @memberof ContainerItem
     * @instance
     */
    ContainerItem.prototype.namespace = "";

    /**
     * ContainerItem pod.
     * @member {string} pod
     * @memberof ContainerItem
     * @instance
     */
    ContainerItem.prototype.pod = "";

    /**
     * ContainerItem container.
     * @member {string} container
     * @memberof ContainerItem
     * @instance
     */
    ContainerItem.prototype.container = "";

    /**
     * Encodes the specified ContainerItem message. Does not implicitly {@link ContainerItem.verify|verify} messages.
     * @function encode
     * @memberof ContainerItem
     * @static
     * @param {ContainerItem} message ContainerItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerItem.encode = function encode(message, writer) {
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
        return writer;
    };

    /**
     * Decodes a ContainerItem message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerItem} ContainerItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerItem();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.namespace = reader.string();
                break;
            case 3:
                message.pod = reader.string();
                break;
            case 4:
                message.container = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerItem;
})();

export const ContainerCopyToPodRequest = $root.ContainerCopyToPodRequest = (() => {

    /**
     * Properties of a ContainerCopyToPodRequest.
     * @exports IContainerCopyToPodRequest
     * @interface IContainerCopyToPodRequest
     * @property {number|null} [cluster_id] ContainerCopyToPodRequest cluster_id
     * @property {number|null} [file_id] ContainerCopyToPodRequest file_id
     * @property {string|null} [namespace] ContainerCopyToPodRequest namespace
     * @property {string|null} [pod] ContainerCopyToPodRequest pod
     * @property {string|null} [container] ContainerCopyToPodRequest container
     */

    /**
     * Constructs a new ContainerCopyToPodRequest.
     * @exports ContainerCopyToPodRequest
     * @classdesc Represents a ContainerCopyToPodRequest.
     * @implements IContainerCopyToPodRequest
     * @constructor
     * @param {IContainerCopyToPodRequest=} [properties] Properties to set
     */
    function ContainerCopyToPodRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerCopyToPodRequest cluster_id.
     * @member {number} cluster_id
     * @memberof ContainerCopyToPodRequest
     * @instance
     */
    ContainerCopyToPodRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerCopyToPodRequest file_id.
     * @member {number} file_id
     * @memberof ContainerCopyToPodRequest
     * @instance
     */
    ContainerCopyToPodRequest.prototype.file_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerCopyToPodRequest namespace.
     * @member {string} namespace
     * @memberof ContainerCopyToPodRequest
     * @instance
     */
    ContainerCopyToPodRequest.prototype.namespace = "";

    /**
     * ContainerCopyToPodRequest pod.
     * @member {string} pod
     * @memberof ContainerCopyToPodRequest
     * @instance
     */
    ContainerCopyToPodRequest.prototype.pod = "";

    /**
     * ContainerCopyToPodRequest container.
     * @member {string} container
     * @memberof ContainerCopyToPodRequest
     * @instance
     */
    ContainerCopyToPodRequest.prototype.container = "";

    /**
     * Encodes the specified ContainerCopyToPodRequest message. Does not implicitly {@link ContainerCopyToPodRequest.verify|verify} messages.
     * @function encode
     * @memberof ContainerCopyToPodRequest
     * @static
     * @param {ContainerCopyToPodRequest} message ContainerCopyToPodRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerCopyToPodRequest.encode = function encode(message, writer) {
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
     * Decodes a ContainerCopyToPodRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerCopyToPodRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerCopyToPodRequest} ContainerCopyToPodRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerCopyToPodRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerCopyToPodRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.file_id = reader.int64();
                break;
            case 3:
                message.namespace = reader.string();
                break;
            case 4:
                message.pod = reader.string();
                break;
            case 5:
                message.container = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerCopyToPodRequest;
})();

export const ContainerCopyToPodResponse = $root.ContainerCopyToPodResponse = (() => {

    /**
     * Properties of a ContainerCopyToPodResponse.
     * @exports IContainerCopyToPodResponse
     * @interface IContainerCopyToPodResponse
     * @property {string|null} [pod_file_path] ContainerCopyToPodResponse pod_file_path
     * @property {string|null} [output] ContainerCopyToPodResponse output
     * @property {string|null} [file_name] ContainerCopyToPodResponse file_name
     */

    /**
     * Constructs a new ContainerCopyToPodResponse.
     * @exports ContainerCopyToPodResponse
     * @classdesc Represents a ContainerCopyToPodResponse.
     * @implements IContainerCopyToPodResponse
     * @constructor
     * @param {IContainerCopyToPodResponse=} [properties] Properties to set
     */
    function ContainerCopyToPodResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerCopyToPodResponse pod_file_path.
     * @member {string} pod_file_path
     * @memberof ContainerCopyToPodResponse
     * @instance
     */
    ContainerCopyToPodResponse.prototype.pod_file_path = "";

    /**
     * ContainerCopyToPodResponse output.
     * @member {string} output
     * @memberof ContainerCopyToPodResponse
     * @instance
     */
    ContainerCopyToPodResponse.prototype.output = "";

    /**
     * ContainerCopyToPodResponse file_name.
     * @member {string} file_name
     * @memberof ContainerCopyToPodResponse
     * @instance
     */
    ContainerCopyToPodResponse.prototype.file_name = "";

    /**
     * Encodes the specified ContainerCopyToPodResponse message. Does not implicitly {@link ContainerCopyToPodResponse.verify|verify} messages.
     * @function encode
     * @memberof ContainerCopyToPodResponse
     * @static
     * @param {ContainerCopyToPodResponse} message ContainerCopyToPodResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerCopyToPodResponse.encode = function encode(message, writer) {
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
     * Decodes a ContainerCopyToPodResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerCopyToPodResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerCopyToPodResponse} ContainerCopyToPodResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerCopyToPodResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerCopyToPodResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pod_file_path = reader.string();
                break;
            case 2:
                message.output = reader.string();
                break;
            case 3:
                message.file_name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerCopyToPodResponse;
})();

export const ContainerExecRequest = $root.ContainerExecRequest = (() => {

    /**
     * Properties of a ContainerExecRequest.
     * @exports IContainerExecRequest
     * @interface IContainerExecRequest
     * @property {number|null} [cluster_id] ContainerExecRequest cluster_id
     * @property {string|null} [namespace] ContainerExecRequest namespace
     * @property {string|null} [pod] ContainerExecRequest pod
     * @property {string|null} [container] ContainerExecRequest container
     * @property {Array.<string>|null} [command] ContainerExecRequest command
     */

    /**
     * Constructs a new ContainerExecRequest.
     * @exports ContainerExecRequest
     * @classdesc Represents a ContainerExecRequest.
     * @implements IContainerExecRequest
     * @constructor
     * @param {IContainerExecRequest=} [properties] Properties to set
     */
    function ContainerExecRequest(properties) {
        this.command = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerExecRequest cluster_id.
     * @member {number} cluster_id
     * @memberof ContainerExecRequest
     * @instance
     */
    ContainerExecRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerExecRequest namespace.
     * @member {string} namespace
     * @memberof ContainerExecRequest
     * @instance
     */
    ContainerExecRequest.prototype.namespace = "";

    /**
     * ContainerExecRequest pod.
     * @member {string} pod
     * @memberof ContainerExecRequest
     * @instance
     */
    ContainerExecRequest.prototype.pod = "";

    /**
     * ContainerExecRequest container.
     * @member {string} container
     * @memberof ContainerExecRequest
     * @instance
     */
    ContainerExecRequest.prototype.container = "";

    /**
     * ContainerExecRequest command.
     * @member {Array.<string>} command
     * @memberof ContainerExecRequest
     * @instance
     */
    ContainerExecRequest.prototype.command = $util.emptyArray;

    /**
     * Encodes the specified ContainerExecRequest message. Does not implicitly {@link ContainerExecRequest.verify|verify} messages.
     * @function encode
     * @memberof ContainerExecRequest
     * @static
     * @param {ContainerExecRequest} message ContainerExecRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerExecRequest.encode = function encode(message, writer) {
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
     * Decodes a ContainerExecRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerExecRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerExecRequest} ContainerExecRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerExecRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerExecRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.namespace = reader.string();
                break;
            case 3:
                message.pod = reader.string();
                break;
            case 4:
                message.container = reader.string();
                break;
            case 5:
                if (!(message.command && message.command.length))
                    message.command = [];
                message.command.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerExecRequest;
})();

export const ContainerExecResponse = $root.ContainerExecResponse = (() => {

    /**
     * Properties of a ContainerExecResponse.
     * @exports IContainerExecResponse
     * @interface IContainerExecResponse
     * @property {string|null} [data] ContainerExecResponse data
     */

    /**
     * Constructs a new ContainerExecResponse.
     * @exports ContainerExecResponse
     * @classdesc Represents a ContainerExecResponse.
     * @implements IContainerExecResponse
     * @constructor
     * @param {IContainerExecResponse=} [properties] Properties to set
     */
    function ContainerExecResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerExecResponse data.
     * @member {string} data
     * @memberof ContainerExecResponse
     * @instance
     */
    ContainerExecResponse.prototype.data = "";

    /**
     * Encodes the specified ContainerExecResponse message. Does not implicitly {@link ContainerExecResponse.verify|verify} messages.
     * @function encode
     * @memberof ContainerExecResponse
     * @static
     * @param {ContainerExecResponse} message ContainerExecResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerExecResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
        return writer;
    };

    /**
     * Decodes a ContainerExecResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerExecResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerExecResponse} ContainerExecResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerExecResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerExecResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.data = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerExecResponse;
})();

export const ContainerStreamCopyToPodRequest = $root.ContainerStreamCopyToPodRequest = (() => {

    /**
     * Properties of a ContainerStreamCopyToPodRequest.
     * @exports IContainerStreamCopyToPodRequest
     * @interface IContainerStreamCopyToPodRequest
     * @property {number|null} [cluster_id] ContainerStreamCopyToPodRequest cluster_id
     * @property {string|null} [file_name] ContainerStreamCopyToPodRequest file_name
     * @property {Uint8Array|null} [data] ContainerStreamCopyToPodRequest data
     * @property {string|null} [namespace] ContainerStreamCopyToPodRequest namespace
     * @property {string|null} [pod] ContainerStreamCopyToPodRequest pod
     * @property {string|null} [container] ContainerStreamCopyToPodRequest container
     */

    /**
     * Constructs a new ContainerStreamCopyToPodRequest.
     * @exports ContainerStreamCopyToPodRequest
     * @classdesc Represents a ContainerStreamCopyToPodRequest.
     * @implements IContainerStreamCopyToPodRequest
     * @constructor
     * @param {IContainerStreamCopyToPodRequest=} [properties] Properties to set
     */
    function ContainerStreamCopyToPodRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerStreamCopyToPodRequest cluster_id.
     * @member {number} cluster_id
     * @memberof ContainerStreamCopyToPodRequest
     * @instance
     */
    ContainerStreamCopyToPodRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerStreamCopyToPodRequest file_name.
     * @member {string} file_name
     * @memberof ContainerStreamCopyToPodRequest
     * @instance
     */
    ContainerStreamCopyToPodRequest.prototype.file_name = "";

    /**
     * ContainerStreamCopyToPodRequest data.
     * @member {Uint8Array} data
     * @memberof ContainerStreamCopyToPodRequest
     * @instance
     */
    ContainerStreamCopyToPodRequest.prototype.data = $util.newBuffer([]);

    /**
     * ContainerStreamCopyToPodRequest namespace.
     * @member {string} namespace
     * @memberof ContainerStreamCopyToPodRequest
     * @instance
     */
    ContainerStreamCopyToPodRequest.prototype.namespace = "";

    /**
     * ContainerStreamCopyToPodRequest pod.
     * @member {string} pod
     * @memberof ContainerStreamCopyToPodRequest
     * @instance
     */
    ContainerStreamCopyToPodRequest.prototype.pod = "";

    /**
     * ContainerStreamCopyToPodRequest container.
     * @member {string} container
     * @memberof ContainerStreamCopyToPodRequest
     * @instance
     */
    ContainerStreamCopyToPodRequest.prototype.container = "";

    /**
     * Encodes the specified ContainerStreamCopyToPodRequest message. Does not implicitly {@link ContainerStreamCopyToPodRequest.verify|verify} messages.
     * @function encode
     * @memberof ContainerStreamCopyToPodRequest
     * @static
     * @param {ContainerStreamCopyToPodRequest} message ContainerStreamCopyToPodRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerStreamCopyToPodRequest.encode = function encode(message, writer) {
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
     * Decodes a ContainerStreamCopyToPodRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerStreamCopyToPodRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerStreamCopyToPodRequest} ContainerStreamCopyToPodRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerStreamCopyToPodRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerStreamCopyToPodRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.file_name = reader.string();
                break;
            case 3:
                message.data = reader.bytes();
                break;
            case 4:
                message.namespace = reader.string();
                break;
            case 5:
                message.pod = reader.string();
                break;
            case 6:
                message.container = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerStreamCopyToPodRequest;
})();

export const ContainerStreamCopyToPodResponse = $root.ContainerStreamCopyToPodResponse = (() => {

    /**
     * Properties of a ContainerStreamCopyToPodResponse.
     * @exports IContainerStreamCopyToPodResponse
     * @interface IContainerStreamCopyToPodResponse
     * @property {number|null} [size] ContainerStreamCopyToPodResponse size
     * @property {string|null} [pod_file_path] ContainerStreamCopyToPodResponse pod_file_path
     * @property {string|null} [output] ContainerStreamCopyToPodResponse output
     * @property {string|null} [pod] ContainerStreamCopyToPodResponse pod
     * @property {string|null} [namespace] ContainerStreamCopyToPodResponse namespace
     * @property {string|null} [container] ContainerStreamCopyToPodResponse container
     * @property {string|null} [filename] ContainerStreamCopyToPodResponse filename
     */

    /**
     * Constructs a new ContainerStreamCopyToPodResponse.
     * @exports ContainerStreamCopyToPodResponse
     * @classdesc Represents a ContainerStreamCopyToPodResponse.
     * @implements IContainerStreamCopyToPodResponse
     * @constructor
     * @param {IContainerStreamCopyToPodResponse=} [properties] Properties to set
     */
    function ContainerStreamCopyToPodResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerStreamCopyToPodResponse size.
     * @member {number} size
     * @memberof ContainerStreamCopyToPodResponse
     * @instance
     */
    ContainerStreamCopyToPodResponse.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerStreamCopyToPodResponse pod_file_path.
     * @member {string} pod_file_path
     * @memberof ContainerStreamCopyToPodResponse
     * @instance
     */
    ContainerStreamCopyToPodResponse.prototype.pod_file_path = "";

    /**
     * ContainerStreamCopyToPodResponse output.
     * @member {string} output
     * @memberof ContainerStreamCopyToPodResponse
     * @instance
     */
    ContainerStreamCopyToPodResponse.prototype.output = "";

    /**
     * ContainerStreamCopyToPodResponse pod.
     * @member {string} pod
     * @memberof ContainerStreamCopyToPodResponse
     * @instance
     */
    ContainerStreamCopyToPodResponse.prototype.pod = "";

    /**
     * ContainerStreamCopyToPodResponse namespace.
     * @member {string} namespace
     * @memberof ContainerStreamCopyToPodResponse
     * @instance
     */
    ContainerStreamCopyToPodResponse.prototype.namespace = "";

    /**
     * ContainerStreamCopyToPodResponse container.
     * @member {string} container
     * @memberof ContainerStreamCopyToPodResponse
     * @instance
     */
    ContainerStreamCopyToPodResponse.prototype.container = "";

    /**
     * ContainerStreamCopyToPodResponse filename.
     * @member {string} filename
     * @memberof ContainerStreamCopyToPodResponse
     * @instance
     */
    ContainerStreamCopyToPodResponse.prototype.filename = "";

    /**
     * Encodes the specified ContainerStreamCopyToPodResponse message. Does not implicitly {@link ContainerStreamCopyToPodResponse.verify|verify} messages.
     * @function encode
     * @memberof ContainerStreamCopyToPodResponse
     * @static
     * @param {ContainerStreamCopyToPodResponse} message ContainerStreamCopyToPodResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerStreamCopyToPodResponse.encode = function encode(message, writer) {
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
     * Decodes a ContainerStreamCopyToPodResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerStreamCopyToPodResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerStreamCopyToPodResponse} ContainerStreamCopyToPodResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerStreamCopyToPodResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerStreamCopyToPodResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.size = reader.int64();
                break;
            case 2:
                message.pod_file_path = reader.string();
                break;
            case 3:
                message.output = reader.string();
                break;
            case 4:
                message.pod = reader.string();
                break;
            case 5:
                message.namespace = reader.string();
                break;
            case 6:
                message.container = reader.string();
                break;
            case 7:
                message.filename = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerStreamCopyToPodResponse;
})();

export const ContainerIsPodRunningRequest = $root.ContainerIsPodRunningRequest = (() => {

    /**
     * Properties of a ContainerIsPodRunningRequest.
     * @exports IContainerIsPodRunningRequest
     * @interface IContainerIsPodRunningRequest
     * @property {number|null} [cluster_id] ContainerIsPodRunningRequest cluster_id
     * @property {string|null} [namespace] ContainerIsPodRunningRequest namespace
     * @property {string|null} [pod] ContainerIsPodRunningRequest pod
     */

    /**
     * Constructs a new ContainerIsPodRunningRequest.
     * @exports ContainerIsPodRunningRequest
     * @classdesc Represents a ContainerIsPodRunningRequest.
     * @implements IContainerIsPodRunningRequest
     * @constructor
     * @param {IContainerIsPodRunningRequest=} [properties] Properties to set
     */
    function ContainerIsPodRunningRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerIsPodRunningRequest cluster_id.
     * @member {number} cluster_id
     * @memberof ContainerIsPodRunningRequest
     * @instance
     */
    ContainerIsPodRunningRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerIsPodRunningRequest namespace.
     * @member {string} namespace
     * @memberof ContainerIsPodRunningRequest
     * @instance
     */
    ContainerIsPodRunningRequest.prototype.namespace = "";

    /**
     * ContainerIsPodRunningRequest pod.
     * @member {string} pod
     * @memberof ContainerIsPodRunningRequest
     * @instance
     */
    ContainerIsPodRunningRequest.prototype.pod = "";

    /**
     * Encodes the specified ContainerIsPodRunningRequest message. Does not implicitly {@link ContainerIsPodRunningRequest.verify|verify} messages.
     * @function encode
     * @memberof ContainerIsPodRunningRequest
     * @static
     * @param {ContainerIsPodRunningRequest} message ContainerIsPodRunningRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerIsPodRunningRequest.encode = function encode(message, writer) {
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
     * Decodes a ContainerIsPodRunningRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerIsPodRunningRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerIsPodRunningRequest} ContainerIsPodRunningRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerIsPodRunningRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerIsPodRunningRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.namespace = reader.string();
                break;
            case 3:
                message.pod = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerIsPodRunningRequest;
})();

export const ContainerIsPodRunningResponse = $root.ContainerIsPodRunningResponse = (() => {

    /**
     * Properties of a ContainerIsPodRunningResponse.
     * @exports IContainerIsPodRunningResponse
     * @interface IContainerIsPodRunningResponse
     * @property {boolean|null} [running] ContainerIsPodRunningResponse running
     * @property {string|null} [reason] ContainerIsPodRunningResponse reason
     */

    /**
     * Constructs a new ContainerIsPodRunningResponse.
     * @exports ContainerIsPodRunningResponse
     * @classdesc Represents a ContainerIsPodRunningResponse.
     * @implements IContainerIsPodRunningResponse
     * @constructor
     * @param {IContainerIsPodRunningResponse=} [properties] Properties to set
     */
    function ContainerIsPodRunningResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerIsPodRunningResponse running.
     * @member {boolean} running
     * @memberof ContainerIsPodRunningResponse
     * @instance
     */
    ContainerIsPodRunningResponse.prototype.running = false;

    /**
     * ContainerIsPodRunningResponse reason.
     * @member {string} reason
     * @memberof ContainerIsPodRunningResponse
     * @instance
     */
    ContainerIsPodRunningResponse.prototype.reason = "";

    /**
     * Encodes the specified ContainerIsPodRunningResponse message. Does not implicitly {@link ContainerIsPodRunningResponse.verify|verify} messages.
     * @function encode
     * @memberof ContainerIsPodRunningResponse
     * @static
     * @param {ContainerIsPodRunningResponse} message ContainerIsPodRunningResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerIsPodRunningResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.running != null && Object.hasOwnProperty.call(message, "running"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.running);
        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
        return writer;
    };

    /**
     * Decodes a ContainerIsPodRunningResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerIsPodRunningResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerIsPodRunningResponse} ContainerIsPodRunningResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerIsPodRunningResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerIsPodRunningResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.running = reader.bool();
                break;
            case 2:
                message.reason = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerIsPodRunningResponse;
})();

export const ContainerIsPodExistsRequest = $root.ContainerIsPodExistsRequest = (() => {

    /**
     * Properties of a ContainerIsPodExistsRequest.
     * @exports IContainerIsPodExistsRequest
     * @interface IContainerIsPodExistsRequest
     * @property {number|null} [cluster_id] ContainerIsPodExistsRequest cluster_id
     * @property {string|null} [namespace] ContainerIsPodExistsRequest namespace
     * @property {string|null} [pod] ContainerIsPodExistsRequest pod
     */

    /**
     * Constructs a new ContainerIsPodExistsRequest.
     * @exports ContainerIsPodExistsRequest
     * @classdesc Represents a ContainerIsPodExistsRequest.
     * @implements IContainerIsPodExistsRequest
     * @constructor
     * @param {IContainerIsPodExistsRequest=} [properties] Properties to set
     */
    function ContainerIsPodExistsRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerIsPodExistsRequest cluster_id.
     * @member {number} cluster_id
     * @memberof ContainerIsPodExistsRequest
     * @instance
     */
    ContainerIsPodExistsRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerIsPodExistsRequest namespace.
     * @member {string} namespace
     * @memberof ContainerIsPodExistsRequest
     * @instance
     */
    ContainerIsPodExistsRequest.prototype.namespace = "";

    /**
     * ContainerIsPodExistsRequest pod.
     * @member {string} pod
     * @memberof ContainerIsPodExistsRequest
     * @instance
     */
    ContainerIsPodExistsRequest.prototype.pod = "";

    /**
     * Encodes the specified ContainerIsPodExistsRequest message. Does not implicitly {@link ContainerIsPodExistsRequest.verify|verify} messages.
     * @function encode
     * @memberof ContainerIsPodExistsRequest
     * @static
     * @param {ContainerIsPodExistsRequest} message ContainerIsPodExistsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerIsPodExistsRequest.encode = function encode(message, writer) {
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
     * Decodes a ContainerIsPodExistsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerIsPodExistsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerIsPodExistsRequest} ContainerIsPodExistsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerIsPodExistsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerIsPodExistsRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.namespace = reader.string();
                break;
            case 3:
                message.pod = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerIsPodExistsRequest;
})();

export const ContainerIsPodExistsResponse = $root.ContainerIsPodExistsResponse = (() => {

    /**
     * Properties of a ContainerIsPodExistsResponse.
     * @exports IContainerIsPodExistsResponse
     * @interface IContainerIsPodExistsResponse
     * @property {boolean|null} [exists] ContainerIsPodExistsResponse exists
     */

    /**
     * Constructs a new ContainerIsPodExistsResponse.
     * @exports ContainerIsPodExistsResponse
     * @classdesc Represents a ContainerIsPodExistsResponse.
     * @implements IContainerIsPodExistsResponse
     * @constructor
     * @param {IContainerIsPodExistsResponse=} [properties] Properties to set
     */
    function ContainerIsPodExistsResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerIsPodExistsResponse exists.
     * @member {boolean} exists
     * @memberof ContainerIsPodExistsResponse
     * @instance
     */
    ContainerIsPodExistsResponse.prototype.exists = false;

    /**
     * Encodes the specified ContainerIsPodExistsResponse message. Does not implicitly {@link ContainerIsPodExistsResponse.verify|verify} messages.
     * @function encode
     * @memberof ContainerIsPodExistsResponse
     * @static
     * @param {ContainerIsPodExistsResponse} message ContainerIsPodExistsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerIsPodExistsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.exists != null && Object.hasOwnProperty.call(message, "exists"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.exists);
        return writer;
    };

    /**
     * Decodes a ContainerIsPodExistsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerIsPodExistsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerIsPodExistsResponse} ContainerIsPodExistsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerIsPodExistsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerIsPodExistsResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.exists = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerIsPodExistsResponse;
})();

export const ContainerLogRequest = $root.ContainerLogRequest = (() => {

    /**
     * Properties of a ContainerLogRequest.
     * @exports IContainerLogRequest
     * @interface IContainerLogRequest
     * @property {number|null} [cluster_id] ContainerLogRequest cluster_id
     * @property {string|null} [namespace] ContainerLogRequest namespace
     * @property {string|null} [pod] ContainerLogRequest pod
     * @property {string|null} [container] ContainerLogRequest container
     */

    /**
     * Constructs a new ContainerLogRequest.
     * @exports ContainerLogRequest
     * @classdesc Represents a ContainerLogRequest.
     * @implements IContainerLogRequest
     * @constructor
     * @param {IContainerLogRequest=} [properties] Properties to set
     */
    function ContainerLogRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerLogRequest cluster_id.
     * @member {number} cluster_id
     * @memberof ContainerLogRequest
     * @instance
     */
    ContainerLogRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ContainerLogRequest namespace.
     * @member {string} namespace
     * @memberof ContainerLogRequest
     * @instance
     */
    ContainerLogRequest.prototype.namespace = "";

    /**
     * ContainerLogRequest pod.
     * @member {string} pod
     * @memberof ContainerLogRequest
     * @instance
     */
    ContainerLogRequest.prototype.pod = "";

    /**
     * ContainerLogRequest container.
     * @member {string} container
     * @memberof ContainerLogRequest
     * @instance
     */
    ContainerLogRequest.prototype.container = "";

    /**
     * Encodes the specified ContainerLogRequest message. Does not implicitly {@link ContainerLogRequest.verify|verify} messages.
     * @function encode
     * @memberof ContainerLogRequest
     * @static
     * @param {ContainerLogRequest} message ContainerLogRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerLogRequest.encode = function encode(message, writer) {
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
        return writer;
    };

    /**
     * Decodes a ContainerLogRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerLogRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerLogRequest} ContainerLogRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerLogRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerLogRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.namespace = reader.string();
                break;
            case 3:
                message.pod = reader.string();
                break;
            case 4:
                message.container = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerLogRequest;
})();

export const ContainerLogResponse = $root.ContainerLogResponse = (() => {

    /**
     * Properties of a ContainerLogResponse.
     * @exports IContainerLogResponse
     * @interface IContainerLogResponse
     * @property {string|null} [namespace] ContainerLogResponse namespace
     * @property {string|null} [pod_name] ContainerLogResponse pod_name
     * @property {string|null} [container_name] ContainerLogResponse container_name
     * @property {string|null} [log] ContainerLogResponse log
     */

    /**
     * Constructs a new ContainerLogResponse.
     * @exports ContainerLogResponse
     * @classdesc Represents a ContainerLogResponse.
     * @implements IContainerLogResponse
     * @constructor
     * @param {IContainerLogResponse=} [properties] Properties to set
     */
    function ContainerLogResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContainerLogResponse namespace.
     * @member {string} namespace
     * @memberof ContainerLogResponse
     * @instance
     */
    ContainerLogResponse.prototype.namespace = "";

    /**
     * ContainerLogResponse pod_name.
     * @member {string} pod_name
     * @memberof ContainerLogResponse
     * @instance
     */
    ContainerLogResponse.prototype.pod_name = "";

    /**
     * ContainerLogResponse container_name.
     * @member {string} container_name
     * @memberof ContainerLogResponse
     * @instance
     */
    ContainerLogResponse.prototype.container_name = "";

    /**
     * ContainerLogResponse log.
     * @member {string} log
     * @memberof ContainerLogResponse
     * @instance
     */
    ContainerLogResponse.prototype.log = "";

    /**
     * Encodes the specified ContainerLogResponse message. Does not implicitly {@link ContainerLogResponse.verify|verify} messages.
     * @function encode
     * @memberof ContainerLogResponse
     * @static
     * @param {ContainerLogResponse} message ContainerLogResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContainerLogResponse.encode = function encode(message, writer) {
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
     * Decodes a ContainerLogResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ContainerLogResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContainerLogResponse} ContainerLogResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContainerLogResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContainerLogResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            case 2:
                message.pod_name = reader.string();
                break;
            case 3:
                message.container_name = reader.string();
                break;
            case 4:
                message.log = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ContainerLogResponse;
})();

export const ContainerSvc = $root.ContainerSvc = (() => {

    /**
     * Constructs a new ContainerSvc service.
     * @exports ContainerSvc
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
     * Callback as used by {@link ContainerSvc#copyToPod}.
     * @memberof ContainerSvc
     * @typedef CopyToPodCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ContainerCopyToPodResponse} [response] ContainerCopyToPodResponse
     */

    /**
     * Calls CopyToPod.
     * @function copyToPod
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerCopyToPodRequest} request ContainerCopyToPodRequest message or plain object
     * @param {ContainerSvc.CopyToPodCallback} callback Node-style callback called with the error, if any, and ContainerCopyToPodResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContainerSvc.prototype.copyToPod = function copyToPod(request, callback) {
        return this.rpcCall(copyToPod, $root.ContainerCopyToPodRequest, $root.ContainerCopyToPodResponse, request, callback);
    }, "name", { value: "CopyToPod" });

    /**
     * Calls CopyToPod.
     * @function copyToPod
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerCopyToPodRequest} request ContainerCopyToPodRequest message or plain object
     * @returns {Promise<ContainerCopyToPodResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ContainerSvc#exec}.
     * @memberof ContainerSvc
     * @typedef ExecCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ContainerExecResponse} [response] ContainerExecResponse
     */

    /**
     * Calls Exec.
     * @function exec
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerExecRequest} request ContainerExecRequest message or plain object
     * @param {ContainerSvc.ExecCallback} callback Node-style callback called with the error, if any, and ContainerExecResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContainerSvc.prototype.exec = function exec(request, callback) {
        return this.rpcCall(exec, $root.ContainerExecRequest, $root.ContainerExecResponse, request, callback);
    }, "name", { value: "Exec" });

    /**
     * Calls Exec.
     * @function exec
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerExecRequest} request ContainerExecRequest message or plain object
     * @returns {Promise<ContainerExecResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ContainerSvc#streamCopyToPod}.
     * @memberof ContainerSvc
     * @typedef StreamCopyToPodCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ContainerStreamCopyToPodResponse} [response] ContainerStreamCopyToPodResponse
     */

    /**
     * Calls StreamCopyToPod.
     * @function streamCopyToPod
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerStreamCopyToPodRequest} request ContainerStreamCopyToPodRequest message or plain object
     * @param {ContainerSvc.StreamCopyToPodCallback} callback Node-style callback called with the error, if any, and ContainerStreamCopyToPodResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContainerSvc.prototype.streamCopyToPod = function streamCopyToPod(request, callback) {
        return this.rpcCall(streamCopyToPod, $root.ContainerStreamCopyToPodRequest, $root.ContainerStreamCopyToPodResponse, request, callback);
    }, "name", { value: "StreamCopyToPod" });

    /**
     * Calls StreamCopyToPod.
     * @function streamCopyToPod
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerStreamCopyToPodRequest} request ContainerStreamCopyToPodRequest message or plain object
     * @returns {Promise<ContainerStreamCopyToPodResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ContainerSvc#isPodRunning}.
     * @memberof ContainerSvc
     * @typedef IsPodRunningCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ContainerIsPodRunningResponse} [response] ContainerIsPodRunningResponse
     */

    /**
     * Calls IsPodRunning.
     * @function isPodRunning
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerIsPodRunningRequest} request ContainerIsPodRunningRequest message or plain object
     * @param {ContainerSvc.IsPodRunningCallback} callback Node-style callback called with the error, if any, and ContainerIsPodRunningResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContainerSvc.prototype.isPodRunning = function isPodRunning(request, callback) {
        return this.rpcCall(isPodRunning, $root.ContainerIsPodRunningRequest, $root.ContainerIsPodRunningResponse, request, callback);
    }, "name", { value: "IsPodRunning" });

    /**
     * Calls IsPodRunning.
     * @function isPodRunning
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerIsPodRunningRequest} request ContainerIsPodRunningRequest message or plain object
     * @returns {Promise<ContainerIsPodRunningResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ContainerSvc#isPodExists}.
     * @memberof ContainerSvc
     * @typedef IsPodExistsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ContainerIsPodExistsResponse} [response] ContainerIsPodExistsResponse
     */

    /**
     * Calls IsPodExists.
     * @function isPodExists
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerIsPodExistsRequest} request ContainerIsPodExistsRequest message or plain object
     * @param {ContainerSvc.IsPodExistsCallback} callback Node-style callback called with the error, if any, and ContainerIsPodExistsResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContainerSvc.prototype.isPodExists = function isPodExists(request, callback) {
        return this.rpcCall(isPodExists, $root.ContainerIsPodExistsRequest, $root.ContainerIsPodExistsResponse, request, callback);
    }, "name", { value: "IsPodExists" });

    /**
     * Calls IsPodExists.
     * @function isPodExists
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerIsPodExistsRequest} request ContainerIsPodExistsRequest message or plain object
     * @returns {Promise<ContainerIsPodExistsResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ContainerSvc#containerLog}.
     * @memberof ContainerSvc
     * @typedef ContainerLogCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ContainerLogResponse} [response] ContainerLogResponse
     */

    /**
     * Calls ContainerLog.
     * @function containerLog
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerLogRequest} request ContainerLogRequest message or plain object
     * @param {ContainerSvc.ContainerLogCallback} callback Node-style callback called with the error, if any, and ContainerLogResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContainerSvc.prototype.containerLog = function containerLog(request, callback) {
        return this.rpcCall(containerLog, $root.ContainerLogRequest, $root.ContainerLogResponse, request, callback);
    }, "name", { value: "ContainerLog" });

    /**
     * Calls ContainerLog.
     * @function containerLog
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerLogRequest} request ContainerLogRequest message or plain object
     * @returns {Promise<ContainerLogResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ContainerSvc#streamContainerLog}.
     * @memberof ContainerSvc
     * @typedef StreamContainerLogCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ContainerLogResponse} [response] ContainerLogResponse
     */

    /**
     * Calls StreamContainerLog.
     * @function streamContainerLog
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerLogRequest} request ContainerLogRequest message or plain object
     * @param {ContainerSvc.StreamContainerLogCallback} callback Node-style callback called with the error, if any, and ContainerLogResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ContainerSvc.prototype.streamContainerLog = function streamContainerLog(request, callback) {
        return this.rpcCall(streamContainerLog, $root.ContainerLogRequest, $root.ContainerLogResponse, request, callback);
    }, "name", { value: "StreamContainerLog" });

    /**
     * Calls StreamContainerLog.
     * @function streamContainerLog
     * @memberof ContainerSvc
     * @instance
     * @param {ContainerLogRequest} request ContainerLogRequest message or plain object
     * @returns {Promise<ContainerLogResponse>} Promise
     * @variation 2
     */

    return ContainerSvc;
})();

/**
 * ActionType enum.
 * @exports ActionType
 * @enum {number}
 * @property {number} Unknown=0 Unknown value
 * @property {number} Create=1 Create value
 * @property {number} Update=2 Update value
 * @property {number} Delete=3 Delete value
 * @property {number} Upload=4 Upload value
 * @property {number} Download=5 Download value
 * @property {number} Shell=6 Shell value
 */
export const ActionType = $root.ActionType = (() => {
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

export const EventListRequest = $root.EventListRequest = (() => {

    /**
     * Properties of an EventListRequest.
     * @exports IEventListRequest
     * @interface IEventListRequest
     * @property {number|null} [page] EventListRequest page
     * @property {number|null} [page_size] EventListRequest page_size
     */

    /**
     * Constructs a new EventListRequest.
     * @exports EventListRequest
     * @classdesc Represents an EventListRequest.
     * @implements IEventListRequest
     * @constructor
     * @param {IEventListRequest=} [properties] Properties to set
     */
    function EventListRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventListRequest page.
     * @member {number} page
     * @memberof EventListRequest
     * @instance
     */
    EventListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * EventListRequest page_size.
     * @member {number} page_size
     * @memberof EventListRequest
     * @instance
     */
    EventListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified EventListRequest message. Does not implicitly {@link EventListRequest.verify|verify} messages.
     * @function encode
     * @memberof EventListRequest
     * @static
     * @param {EventListRequest} message EventListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.page != null && Object.hasOwnProperty.call(message, "page"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
        if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
        return writer;
    };

    /**
     * Decodes an EventListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EventListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventListRequest} EventListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventListRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventListRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.page = reader.int64();
                break;
            case 2:
                message.page_size = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return EventListRequest;
})();

export const EventListItem = $root.EventListItem = (() => {

    /**
     * Properties of an EventListItem.
     * @exports IEventListItem
     * @interface IEventListItem
     * @property {number|null} [id] EventListItem id
     * @property {ActionType|null} [action] EventListItem action
     * @property {string|null} [username] EventListItem username
     * @property {string|null} [message] EventListItem message
     * @property {string|null} [old] EventListItem old
     * @property {string|null} ["new"] EventListItem new
     * @property {string|null} [event_at] EventListItem event_at
     * @property {number|null} [file_id] EventListItem file_id
     * @property {string|null} [duration] EventListItem duration
     */

    /**
     * Constructs a new EventListItem.
     * @exports EventListItem
     * @classdesc Represents an EventListItem.
     * @implements IEventListItem
     * @constructor
     * @param {IEventListItem=} [properties] Properties to set
     */
    function EventListItem(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventListItem id.
     * @member {number} id
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * EventListItem action.
     * @member {ActionType} action
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype.action = 0;

    /**
     * EventListItem username.
     * @member {string} username
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype.username = "";

    /**
     * EventListItem message.
     * @member {string} message
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype.message = "";

    /**
     * EventListItem old.
     * @member {string} old
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype.old = "";

    /**
     * EventListItem new.
     * @member {string} new
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype["new"] = "";

    /**
     * EventListItem event_at.
     * @member {string} event_at
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype.event_at = "";

    /**
     * EventListItem file_id.
     * @member {number} file_id
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype.file_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * EventListItem duration.
     * @member {string} duration
     * @memberof EventListItem
     * @instance
     */
    EventListItem.prototype.duration = "";

    /**
     * Encodes the specified EventListItem message. Does not implicitly {@link EventListItem.verify|verify} messages.
     * @function encode
     * @memberof EventListItem
     * @static
     * @param {EventListItem} message EventListItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventListItem.encode = function encode(message, writer) {
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
     * Decodes an EventListItem message from the specified reader or buffer.
     * @function decode
     * @memberof EventListItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventListItem} EventListItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventListItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventListItem();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.action = reader.int32();
                break;
            case 3:
                message.username = reader.string();
                break;
            case 4:
                message.message = reader.string();
                break;
            case 5:
                message.old = reader.string();
                break;
            case 6:
                message["new"] = reader.string();
                break;
            case 7:
                message.event_at = reader.string();
                break;
            case 8:
                message.file_id = reader.int64();
                break;
            case 9:
                message.duration = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return EventListItem;
})();

export const EventListResponse = $root.EventListResponse = (() => {

    /**
     * Properties of an EventListResponse.
     * @exports IEventListResponse
     * @interface IEventListResponse
     * @property {number|null} [page] EventListResponse page
     * @property {number|null} [page_size] EventListResponse page_size
     * @property {Array.<EventListItem>|null} [items] EventListResponse items
     * @property {number|null} [count] EventListResponse count
     */

    /**
     * Constructs a new EventListResponse.
     * @exports EventListResponse
     * @classdesc Represents an EventListResponse.
     * @implements IEventListResponse
     * @constructor
     * @param {IEventListResponse=} [properties] Properties to set
     */
    function EventListResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventListResponse page.
     * @member {number} page
     * @memberof EventListResponse
     * @instance
     */
    EventListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * EventListResponse page_size.
     * @member {number} page_size
     * @memberof EventListResponse
     * @instance
     */
    EventListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * EventListResponse items.
     * @member {Array.<EventListItem>} items
     * @memberof EventListResponse
     * @instance
     */
    EventListResponse.prototype.items = $util.emptyArray;

    /**
     * EventListResponse count.
     * @member {number} count
     * @memberof EventListResponse
     * @instance
     */
    EventListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified EventListResponse message. Does not implicitly {@link EventListResponse.verify|verify} messages.
     * @function encode
     * @memberof EventListResponse
     * @static
     * @param {EventListResponse} message EventListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventListResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.page != null && Object.hasOwnProperty.call(message, "page"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
        if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.EventListItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.count);
        return writer;
    };

    /**
     * Decodes an EventListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EventListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventListResponse} EventListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventListResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventListResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.page = reader.int64();
                break;
            case 2:
                message.page_size = reader.int64();
                break;
            case 3:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.EventListItem.decode(reader, reader.uint32()));
                break;
            case 4:
                message.count = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return EventListResponse;
})();

export const Event = $root.Event = (() => {

    /**
     * Constructs a new Event service.
     * @exports Event
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
     * Callback as used by {@link Event#list}.
     * @memberof Event
     * @typedef ListCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {EventListResponse} [response] EventListResponse
     */

    /**
     * Calls List.
     * @function list
     * @memberof Event
     * @instance
     * @param {EventListRequest} request EventListRequest message or plain object
     * @param {Event.ListCallback} callback Node-style callback called with the error, if any, and EventListResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Event.prototype.list = function list(request, callback) {
        return this.rpcCall(list, $root.EventListRequest, $root.EventListResponse, request, callback);
    }, "name", { value: "List" });

    /**
     * Calls List.
     * @function list
     * @memberof Event
     * @instance
     * @param {EventListRequest} request EventListRequest message or plain object
     * @returns {Promise<EventListResponse>} Promise
     * @variation 2
     */

    return Event;
})();

export const FileDeleteRequest = $root.FileDeleteRequest = (() => {

    /**
     * Properties of a FileDeleteRequest.
     * @exports IFileDeleteRequest
     * @interface IFileDeleteRequest
     * @property {number|null} [id] FileDeleteRequest id
     */

    /**
     * Constructs a new FileDeleteRequest.
     * @exports FileDeleteRequest
     * @classdesc Represents a FileDeleteRequest.
     * @implements IFileDeleteRequest
     * @constructor
     * @param {IFileDeleteRequest=} [properties] Properties to set
     */
    function FileDeleteRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileDeleteRequest id.
     * @member {number} id
     * @memberof FileDeleteRequest
     * @instance
     */
    FileDeleteRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified FileDeleteRequest message. Does not implicitly {@link FileDeleteRequest.verify|verify} messages.
     * @function encode
     * @memberof FileDeleteRequest
     * @static
     * @param {FileDeleteRequest} message FileDeleteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileDeleteRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        return writer;
    };

    /**
     * Decodes a FileDeleteRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FileDeleteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileDeleteRequest} FileDeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileDeleteRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileDeleteRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return FileDeleteRequest;
})();

export const FileDeleteResponse = $root.FileDeleteResponse = (() => {

    /**
     * Properties of a FileDeleteResponse.
     * @exports IFileDeleteResponse
     * @interface IFileDeleteResponse
     * @property {File|null} [file] FileDeleteResponse file
     */

    /**
     * Constructs a new FileDeleteResponse.
     * @exports FileDeleteResponse
     * @classdesc Represents a FileDeleteResponse.
     * @implements IFileDeleteResponse
     * @constructor
     * @param {IFileDeleteResponse=} [properties] Properties to set
     */
    function FileDeleteResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileDeleteResponse file.
     * @member {File|null|undefined} file
     * @memberof FileDeleteResponse
     * @instance
     */
    FileDeleteResponse.prototype.file = null;

    /**
     * Encodes the specified FileDeleteResponse message. Does not implicitly {@link FileDeleteResponse.verify|verify} messages.
     * @function encode
     * @memberof FileDeleteResponse
     * @static
     * @param {FileDeleteResponse} message FileDeleteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileDeleteResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.file != null && Object.hasOwnProperty.call(message, "file"))
            $root.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a FileDeleteResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FileDeleteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileDeleteResponse} FileDeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileDeleteResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileDeleteResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.file = $root.File.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return FileDeleteResponse;
})();

export const DeleteUndocumentedFilesRequest = $root.DeleteUndocumentedFilesRequest = (() => {

    /**
     * Properties of a DeleteUndocumentedFilesRequest.
     * @exports IDeleteUndocumentedFilesRequest
     * @interface IDeleteUndocumentedFilesRequest
     */

    /**
     * Constructs a new DeleteUndocumentedFilesRequest.
     * @exports DeleteUndocumentedFilesRequest
     * @classdesc Represents a DeleteUndocumentedFilesRequest.
     * @implements IDeleteUndocumentedFilesRequest
     * @constructor
     * @param {IDeleteUndocumentedFilesRequest=} [properties] Properties to set
     */
    function DeleteUndocumentedFilesRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified DeleteUndocumentedFilesRequest message. Does not implicitly {@link DeleteUndocumentedFilesRequest.verify|verify} messages.
     * @function encode
     * @memberof DeleteUndocumentedFilesRequest
     * @static
     * @param {DeleteUndocumentedFilesRequest} message DeleteUndocumentedFilesRequest message or plain object to encode
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
     * @memberof DeleteUndocumentedFilesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeleteUndocumentedFilesRequest} DeleteUndocumentedFilesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteUndocumentedFilesRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeleteUndocumentedFilesRequest();
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

    return DeleteUndocumentedFilesRequest;
})();

export const File = $root.File = (() => {

    /**
     * Properties of a File.
     * @exports IFile
     * @interface IFile
     * @property {string|null} [path] File path
     * @property {string|null} [humanize_size] File humanize_size
     * @property {number|null} [size] File size
     * @property {string|null} [upload_by] File upload_by
     */

    /**
     * Constructs a new File.
     * @exports File
     * @classdesc Represents a File.
     * @implements IFile
     * @constructor
     * @param {IFile=} [properties] Properties to set
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
     * @memberof File
     * @instance
     */
    File.prototype.path = "";

    /**
     * File humanize_size.
     * @member {string} humanize_size
     * @memberof File
     * @instance
     */
    File.prototype.humanize_size = "";

    /**
     * File size.
     * @member {number} size
     * @memberof File
     * @instance
     */
    File.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * File upload_by.
     * @member {string} upload_by
     * @memberof File
     * @instance
     */
    File.prototype.upload_by = "";

    /**
     * Encodes the specified File message. Does not implicitly {@link File.verify|verify} messages.
     * @function encode
     * @memberof File
     * @static
     * @param {File} message File message or plain object to encode
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
     * @memberof File
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {File} File
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    File.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.File();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.path = reader.string();
                break;
            case 2:
                message.humanize_size = reader.string();
                break;
            case 3:
                message.size = reader.int64();
                break;
            case 4:
                message.upload_by = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return File;
})();

export const DeleteUndocumentedFilesResponse = $root.DeleteUndocumentedFilesResponse = (() => {

    /**
     * Properties of a DeleteUndocumentedFilesResponse.
     * @exports IDeleteUndocumentedFilesResponse
     * @interface IDeleteUndocumentedFilesResponse
     * @property {Array.<File>|null} [items] DeleteUndocumentedFilesResponse items
     */

    /**
     * Constructs a new DeleteUndocumentedFilesResponse.
     * @exports DeleteUndocumentedFilesResponse
     * @classdesc Represents a DeleteUndocumentedFilesResponse.
     * @implements IDeleteUndocumentedFilesResponse
     * @constructor
     * @param {IDeleteUndocumentedFilesResponse=} [properties] Properties to set
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
     * @member {Array.<File>} items
     * @memberof DeleteUndocumentedFilesResponse
     * @instance
     */
    DeleteUndocumentedFilesResponse.prototype.items = $util.emptyArray;

    /**
     * Encodes the specified DeleteUndocumentedFilesResponse message. Does not implicitly {@link DeleteUndocumentedFilesResponse.verify|verify} messages.
     * @function encode
     * @memberof DeleteUndocumentedFilesResponse
     * @static
     * @param {DeleteUndocumentedFilesResponse} message DeleteUndocumentedFilesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeleteUndocumentedFilesResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.File.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a DeleteUndocumentedFilesResponse message from the specified reader or buffer.
     * @function decode
     * @memberof DeleteUndocumentedFilesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeleteUndocumentedFilesResponse} DeleteUndocumentedFilesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeleteUndocumentedFilesResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeleteUndocumentedFilesResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.File.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return DeleteUndocumentedFilesResponse;
})();

export const DiskInfoRequest = $root.DiskInfoRequest = (() => {

    /**
     * Properties of a DiskInfoRequest.
     * @exports IDiskInfoRequest
     * @interface IDiskInfoRequest
     */

    /**
     * Constructs a new DiskInfoRequest.
     * @exports DiskInfoRequest
     * @classdesc Represents a DiskInfoRequest.
     * @implements IDiskInfoRequest
     * @constructor
     * @param {IDiskInfoRequest=} [properties] Properties to set
     */
    function DiskInfoRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified DiskInfoRequest message. Does not implicitly {@link DiskInfoRequest.verify|verify} messages.
     * @function encode
     * @memberof DiskInfoRequest
     * @static
     * @param {DiskInfoRequest} message DiskInfoRequest message or plain object to encode
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
     * @memberof DiskInfoRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DiskInfoRequest} DiskInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DiskInfoRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DiskInfoRequest();
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

    return DiskInfoRequest;
})();

export const DiskInfoResponse = $root.DiskInfoResponse = (() => {

    /**
     * Properties of a DiskInfoResponse.
     * @exports IDiskInfoResponse
     * @interface IDiskInfoResponse
     * @property {number|null} [usage] DiskInfoResponse usage
     * @property {string|null} [humanize_usage] DiskInfoResponse humanize_usage
     */

    /**
     * Constructs a new DiskInfoResponse.
     * @exports DiskInfoResponse
     * @classdesc Represents a DiskInfoResponse.
     * @implements IDiskInfoResponse
     * @constructor
     * @param {IDiskInfoResponse=} [properties] Properties to set
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
     * @memberof DiskInfoResponse
     * @instance
     */
    DiskInfoResponse.prototype.usage = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * DiskInfoResponse humanize_usage.
     * @member {string} humanize_usage
     * @memberof DiskInfoResponse
     * @instance
     */
    DiskInfoResponse.prototype.humanize_usage = "";

    /**
     * Encodes the specified DiskInfoResponse message. Does not implicitly {@link DiskInfoResponse.verify|verify} messages.
     * @function encode
     * @memberof DiskInfoResponse
     * @static
     * @param {DiskInfoResponse} message DiskInfoResponse message or plain object to encode
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
     * @memberof DiskInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DiskInfoResponse} DiskInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DiskInfoResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DiskInfoResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.usage = reader.int64();
                break;
            case 2:
                message.humanize_usage = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return DiskInfoResponse;
})();

export const FileListRequest = $root.FileListRequest = (() => {

    /**
     * Properties of a FileListRequest.
     * @exports IFileListRequest
     * @interface IFileListRequest
     * @property {number|null} [page] FileListRequest page
     * @property {number|null} [page_size] FileListRequest page_size
     * @property {boolean|null} [without_deleted] FileListRequest without_deleted
     */

    /**
     * Constructs a new FileListRequest.
     * @exports FileListRequest
     * @classdesc Represents a FileListRequest.
     * @implements IFileListRequest
     * @constructor
     * @param {IFileListRequest=} [properties] Properties to set
     */
    function FileListRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileListRequest page.
     * @member {number} page
     * @memberof FileListRequest
     * @instance
     */
    FileListRequest.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FileListRequest page_size.
     * @member {number} page_size
     * @memberof FileListRequest
     * @instance
     */
    FileListRequest.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FileListRequest without_deleted.
     * @member {boolean} without_deleted
     * @memberof FileListRequest
     * @instance
     */
    FileListRequest.prototype.without_deleted = false;

    /**
     * Encodes the specified FileListRequest message. Does not implicitly {@link FileListRequest.verify|verify} messages.
     * @function encode
     * @memberof FileListRequest
     * @static
     * @param {FileListRequest} message FileListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileListRequest.encode = function encode(message, writer) {
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
     * Decodes a FileListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FileListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileListRequest} FileListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileListRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileListRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.page = reader.int64();
                break;
            case 2:
                message.page_size = reader.int64();
                break;
            case 3:
                message.without_deleted = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return FileListRequest;
})();

export const FileListResponse = $root.FileListResponse = (() => {

    /**
     * Properties of a FileListResponse.
     * @exports IFileListResponse
     * @interface IFileListResponse
     * @property {number|null} [page] FileListResponse page
     * @property {number|null} [page_size] FileListResponse page_size
     * @property {Array.<FileModel>|null} [items] FileListResponse items
     * @property {number|null} [count] FileListResponse count
     */

    /**
     * Constructs a new FileListResponse.
     * @exports FileListResponse
     * @classdesc Represents a FileListResponse.
     * @implements IFileListResponse
     * @constructor
     * @param {IFileListResponse=} [properties] Properties to set
     */
    function FileListResponse(properties) {
        this.items = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileListResponse page.
     * @member {number} page
     * @memberof FileListResponse
     * @instance
     */
    FileListResponse.prototype.page = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FileListResponse page_size.
     * @member {number} page_size
     * @memberof FileListResponse
     * @instance
     */
    FileListResponse.prototype.page_size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FileListResponse items.
     * @member {Array.<FileModel>} items
     * @memberof FileListResponse
     * @instance
     */
    FileListResponse.prototype.items = $util.emptyArray;

    /**
     * FileListResponse count.
     * @member {number} count
     * @memberof FileListResponse
     * @instance
     */
    FileListResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified FileListResponse message. Does not implicitly {@link FileListResponse.verify|verify} messages.
     * @function encode
     * @memberof FileListResponse
     * @static
     * @param {FileListResponse} message FileListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileListResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.page != null && Object.hasOwnProperty.call(message, "page"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.page);
        if (message.page_size != null && Object.hasOwnProperty.call(message, "page_size"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.page_size);
        if (message.items != null && message.items.length)
            for (let i = 0; i < message.items.length; ++i)
                $root.FileModel.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.count);
        return writer;
    };

    /**
     * Decodes a FileListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FileListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileListResponse} FileListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileListResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileListResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.page = reader.int64();
                break;
            case 2:
                message.page_size = reader.int64();
                break;
            case 3:
                if (!(message.items && message.items.length))
                    message.items = [];
                message.items.push($root.FileModel.decode(reader, reader.uint32()));
                break;
            case 4:
                message.count = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return FileListResponse;
})();

export const FileSvc = $root.FileSvc = (() => {

    /**
     * Constructs a new FileSvc service.
     * @exports FileSvc
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
     * Callback as used by {@link FileSvc#list}.
     * @memberof FileSvc
     * @typedef ListCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {FileListResponse} [response] FileListResponse
     */

    /**
     * Calls List.
     * @function list
     * @memberof FileSvc
     * @instance
     * @param {FileListRequest} request FileListRequest message or plain object
     * @param {FileSvc.ListCallback} callback Node-style callback called with the error, if any, and FileListResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(FileSvc.prototype.list = function list(request, callback) {
        return this.rpcCall(list, $root.FileListRequest, $root.FileListResponse, request, callback);
    }, "name", { value: "List" });

    /**
     * Calls List.
     * @function list
     * @memberof FileSvc
     * @instance
     * @param {FileListRequest} request FileListRequest message or plain object
     * @returns {Promise<FileListResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link FileSvc#delete_}.
     * @memberof FileSvc
     * @typedef DeleteCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {FileDeleteResponse} [response] FileDeleteResponse
     */

    /**
     * Calls Delete.
     * @function delete
     * @memberof FileSvc
     * @instance
     * @param {FileDeleteRequest} request FileDeleteRequest message or plain object
     * @param {FileSvc.DeleteCallback} callback Node-style callback called with the error, if any, and FileDeleteResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(FileSvc.prototype["delete"] = function delete_(request, callback) {
        return this.rpcCall(delete_, $root.FileDeleteRequest, $root.FileDeleteResponse, request, callback);
    }, "name", { value: "Delete" });

    /**
     * Calls Delete.
     * @function delete
     * @memberof FileSvc
     * @instance
     * @param {FileDeleteRequest} request FileDeleteRequest message or plain object
     * @returns {Promise<FileDeleteResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link FileSvc#deleteUndocumentedFiles}.
     * @memberof FileSvc
     * @typedef DeleteUndocumentedFilesCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DeleteUndocumentedFilesResponse} [response] DeleteUndocumentedFilesResponse
     */

    /**
     * Calls DeleteUndocumentedFiles.
     * @function deleteUndocumentedFiles
     * @memberof FileSvc
     * @instance
     * @param {DeleteUndocumentedFilesRequest} request DeleteUndocumentedFilesRequest message or plain object
     * @param {FileSvc.DeleteUndocumentedFilesCallback} callback Node-style callback called with the error, if any, and DeleteUndocumentedFilesResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(FileSvc.prototype.deleteUndocumentedFiles = function deleteUndocumentedFiles(request, callback) {
        return this.rpcCall(deleteUndocumentedFiles, $root.DeleteUndocumentedFilesRequest, $root.DeleteUndocumentedFilesResponse, request, callback);
    }, "name", { value: "DeleteUndocumentedFiles" });

    /**
     * Calls DeleteUndocumentedFiles.
     * @function deleteUndocumentedFiles
     * @memberof FileSvc
     * @instance
     * @param {DeleteUndocumentedFilesRequest} request DeleteUndocumentedFilesRequest message or plain object
     * @returns {Promise<DeleteUndocumentedFilesResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link FileSvc#diskInfo}.
     * @memberof FileSvc
     * @typedef DiskInfoCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DiskInfoResponse} [response] DiskInfoResponse
     */

    /**
     * Calls DiskInfo.
     * @function diskInfo
     * @memberof FileSvc
     * @instance
     * @param {DiskInfoRequest} request DiskInfoRequest message or plain object
     * @param {FileSvc.DiskInfoCallback} callback Node-style callback called with the error, if any, and DiskInfoResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(FileSvc.prototype.diskInfo = function diskInfo(request, callback) {
        return this.rpcCall(diskInfo, $root.DiskInfoRequest, $root.DiskInfoResponse, request, callback);
    }, "name", { value: "DiskInfo" });

    /**
     * Calls DiskInfo.
     * @function diskInfo
     * @memberof FileSvc
     * @instance
     * @param {DiskInfoRequest} request DiskInfoRequest message or plain object
     * @returns {Promise<DiskInfoResponse>} Promise
     * @variation 2
     */

    return FileSvc;
})();

export const MetricsTopPodRequest = $root.MetricsTopPodRequest = (() => {

    /**
     * Properties of a MetricsTopPodRequest.
     * @exports IMetricsTopPodRequest
     * @interface IMetricsTopPodRequest
     * @property {number|null} [cluster_id] MetricsTopPodRequest cluster_id
     * @property {string|null} [namespace] MetricsTopPodRequest namespace
     * @property {string|null} [pod] MetricsTopPodRequest pod
     */

    /**
     * Constructs a new MetricsTopPodRequest.
     * @exports MetricsTopPodRequest
     * @classdesc Represents a MetricsTopPodRequest.
     * @implements IMetricsTopPodRequest
     * @constructor
     * @param {IMetricsTopPodRequest=} [properties] Properties to set
     */
    function MetricsTopPodRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MetricsTopPodRequest cluster_id.
     * @member {number} cluster_id
     * @memberof MetricsTopPodRequest
     * @instance
     */
    MetricsTopPodRequest.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MetricsTopPodRequest namespace.
     * @member {string} namespace
     * @memberof MetricsTopPodRequest
     * @instance
     */
    MetricsTopPodRequest.prototype.namespace = "";

    /**
     * MetricsTopPodRequest pod.
     * @member {string} pod
     * @memberof MetricsTopPodRequest
     * @instance
     */
    MetricsTopPodRequest.prototype.pod = "";

    /**
     * Encodes the specified MetricsTopPodRequest message. Does not implicitly {@link MetricsTopPodRequest.verify|verify} messages.
     * @function encode
     * @memberof MetricsTopPodRequest
     * @static
     * @param {MetricsTopPodRequest} message MetricsTopPodRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MetricsTopPodRequest.encode = function encode(message, writer) {
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
     * Decodes a MetricsTopPodRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MetricsTopPodRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MetricsTopPodRequest} MetricsTopPodRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MetricsTopPodRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MetricsTopPodRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cluster_id = reader.int64();
                break;
            case 2:
                message.namespace = reader.string();
                break;
            case 3:
                message.pod = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return MetricsTopPodRequest;
})();

export const MetricsTopPodResponse = $root.MetricsTopPodResponse = (() => {

    /**
     * Properties of a MetricsTopPodResponse.
     * @exports IMetricsTopPodResponse
     * @interface IMetricsTopPodResponse
     * @property {number|null} [cpu] MetricsTopPodResponse cpu
     * @property {number|null} [memory] MetricsTopPodResponse memory
     * @property {string|null} [humanize_cpu] MetricsTopPodResponse humanize_cpu
     * @property {string|null} [humanize_memory] MetricsTopPodResponse humanize_memory
     * @property {string|null} [time] MetricsTopPodResponse time
     * @property {number|null} [length] MetricsTopPodResponse length
     */

    /**
     * Constructs a new MetricsTopPodResponse.
     * @exports MetricsTopPodResponse
     * @classdesc Represents a MetricsTopPodResponse.
     * @implements IMetricsTopPodResponse
     * @constructor
     * @param {IMetricsTopPodResponse=} [properties] Properties to set
     */
    function MetricsTopPodResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MetricsTopPodResponse cpu.
     * @member {number} cpu
     * @memberof MetricsTopPodResponse
     * @instance
     */
    MetricsTopPodResponse.prototype.cpu = 0;

    /**
     * MetricsTopPodResponse memory.
     * @member {number} memory
     * @memberof MetricsTopPodResponse
     * @instance
     */
    MetricsTopPodResponse.prototype.memory = 0;

    /**
     * MetricsTopPodResponse humanize_cpu.
     * @member {string} humanize_cpu
     * @memberof MetricsTopPodResponse
     * @instance
     */
    MetricsTopPodResponse.prototype.humanize_cpu = "";

    /**
     * MetricsTopPodResponse humanize_memory.
     * @member {string} humanize_memory
     * @memberof MetricsTopPodResponse
     * @instance
     */
    MetricsTopPodResponse.prototype.humanize_memory = "";

    /**
     * MetricsTopPodResponse time.
     * @member {string} time
     * @memberof MetricsTopPodResponse
     * @instance
     */
    MetricsTopPodResponse.prototype.time = "";

    /**
     * MetricsTopPodResponse length.
     * @member {number} length
     * @memberof MetricsTopPodResponse
     * @instance
     */
    MetricsTopPodResponse.prototype.length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified MetricsTopPodResponse message. Does not implicitly {@link MetricsTopPodResponse.verify|verify} messages.
     * @function encode
     * @memberof MetricsTopPodResponse
     * @static
     * @param {MetricsTopPodResponse} message MetricsTopPodResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MetricsTopPodResponse.encode = function encode(message, writer) {
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
     * Decodes a MetricsTopPodResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MetricsTopPodResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MetricsTopPodResponse} MetricsTopPodResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MetricsTopPodResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MetricsTopPodResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cpu = reader.double();
                break;
            case 2:
                message.memory = reader.double();
                break;
            case 3:
                message.humanize_cpu = reader.string();
                break;
            case 4:
                message.humanize_memory = reader.string();
                break;
            case 5:
                message.time = reader.string();
                break;
            case 6:
                message.length = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return MetricsTopPodResponse;
})();

export const Metrics = $root.Metrics = (() => {

    /**
     * Constructs a new Metrics service.
     * @exports Metrics
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
     * Callback as used by {@link Metrics#topPod}.
     * @memberof Metrics
     * @typedef TopPodCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {MetricsTopPodResponse} [response] MetricsTopPodResponse
     */

    /**
     * Calls TopPod.
     * @function topPod
     * @memberof Metrics
     * @instance
     * @param {MetricsTopPodRequest} request MetricsTopPodRequest message or plain object
     * @param {Metrics.TopPodCallback} callback Node-style callback called with the error, if any, and MetricsTopPodResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Metrics.prototype.topPod = function topPod(request, callback) {
        return this.rpcCall(topPod, $root.MetricsTopPodRequest, $root.MetricsTopPodResponse, request, callback);
    }, "name", { value: "TopPod" });

    /**
     * Calls TopPod.
     * @function topPod
     * @memberof Metrics
     * @instance
     * @param {MetricsTopPodRequest} request MetricsTopPodRequest message or plain object
     * @returns {Promise<MetricsTopPodResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Metrics#streamTopPod}.
     * @memberof Metrics
     * @typedef StreamTopPodCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {MetricsTopPodResponse} [response] MetricsTopPodResponse
     */

    /**
     * Calls StreamTopPod.
     * @function streamTopPod
     * @memberof Metrics
     * @instance
     * @param {MetricsTopPodRequest} request MetricsTopPodRequest message or plain object
     * @param {Metrics.StreamTopPodCallback} callback Node-style callback called with the error, if any, and MetricsTopPodResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Metrics.prototype.streamTopPod = function streamTopPod(request, callback) {
        return this.rpcCall(streamTopPod, $root.MetricsTopPodRequest, $root.MetricsTopPodResponse, request, callback);
    }, "name", { value: "StreamTopPod" });

    /**
     * Calls StreamTopPod.
     * @function streamTopPod
     * @memberof Metrics
     * @instance
     * @param {MetricsTopPodRequest} request MetricsTopPodRequest message or plain object
     * @returns {Promise<MetricsTopPodResponse>} Promise
     * @variation 2
     */

    return Metrics;
})();

export const ClusterModel = $root.ClusterModel = (() => {

    /**
     * Properties of a ClusterModel.
     * @exports IClusterModel
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
     * @exports ClusterModel
     * @classdesc Represents a ClusterModel.
     * @implements IClusterModel
     * @constructor
     * @param {IClusterModel=} [properties] Properties to set
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
     * @memberof ClusterModel
     * @instance
     */
    ClusterModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClusterModel name.
     * @member {string} name
     * @memberof ClusterModel
     * @instance
     */
    ClusterModel.prototype.name = "";

    /**
     * ClusterModel kube_config.
     * @member {string} kube_config
     * @memberof ClusterModel
     * @instance
     */
    ClusterModel.prototype.kube_config = "";

    /**
     * ClusterModel api_server_url.
     * @member {string} api_server_url
     * @memberof ClusterModel
     * @instance
     */
    ClusterModel.prototype.api_server_url = "";

    /**
     * ClusterModel created_at.
     * @member {string} created_at
     * @memberof ClusterModel
     * @instance
     */
    ClusterModel.prototype.created_at = "";

    /**
     * ClusterModel updated_at.
     * @member {string} updated_at
     * @memberof ClusterModel
     * @instance
     */
    ClusterModel.prototype.updated_at = "";

    /**
     * ClusterModel deleted_at.
     * @member {string} deleted_at
     * @memberof ClusterModel
     * @instance
     */
    ClusterModel.prototype.deleted_at = "";

    /**
     * Encodes the specified ClusterModel message. Does not implicitly {@link ClusterModel.verify|verify} messages.
     * @function encode
     * @memberof ClusterModel
     * @static
     * @param {ClusterModel} message ClusterModel message or plain object to encode
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
     * @memberof ClusterModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClusterModel} ClusterModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClusterModel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClusterModel();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.kube_config = reader.string();
                break;
            case 4:
                message.api_server_url = reader.string();
                break;
            case 5:
                message.created_at = reader.string();
                break;
            case 6:
                message.updated_at = reader.string();
                break;
            case 7:
                message.deleted_at = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return ClusterModel;
})();

export const CardModel = $root.CardModel = (() => {

    /**
     * Properties of a CardModel.
     * @exports ICardModel
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
     * @exports CardModel
     * @classdesc Represents a CardModel.
     * @implements ICardModel
     * @constructor
     * @param {ICardModel=} [properties] Properties to set
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
     * @memberof CardModel
     * @instance
     */
    CardModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardModel type.
     * @member {string} type
     * @memberof CardModel
     * @instance
     */
    CardModel.prototype.type = "";

    /**
     * CardModel namespace.
     * @member {string} namespace
     * @memberof CardModel
     * @instance
     */
    CardModel.prototype.namespace = "";

    /**
     * CardModel name.
     * @member {string} name
     * @memberof CardModel
     * @instance
     */
    CardModel.prototype.name = "";

    /**
     * CardModel cluster_id.
     * @member {number} cluster_id
     * @memberof CardModel
     * @instance
     */
    CardModel.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CardModel created_at.
     * @member {string} created_at
     * @memberof CardModel
     * @instance
     */
    CardModel.prototype.created_at = "";

    /**
     * CardModel updated_at.
     * @member {string} updated_at
     * @memberof CardModel
     * @instance
     */
    CardModel.prototype.updated_at = "";

    /**
     * CardModel deleted_at.
     * @member {string} deleted_at
     * @memberof CardModel
     * @instance
     */
    CardModel.prototype.deleted_at = "";

    /**
     * Encodes the specified CardModel message. Does not implicitly {@link CardModel.verify|verify} messages.
     * @function encode
     * @memberof CardModel
     * @static
     * @param {CardModel} message CardModel message or plain object to encode
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
     * @memberof CardModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardModel} CardModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardModel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardModel();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.type = reader.string();
                break;
            case 3:
                message.namespace = reader.string();
                break;
            case 4:
                message.name = reader.string();
                break;
            case 6:
                message.cluster_id = reader.int64();
                break;
            case 7:
                message.created_at = reader.string();
                break;
            case 8:
                message.updated_at = reader.string();
                break;
            case 9:
                message.deleted_at = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return CardModel;
})();

export const FileModel = $root.FileModel = (() => {

    /**
     * Properties of a FileModel.
     * @exports IFileModel
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
     * @exports FileModel
     * @classdesc Represents a FileModel.
     * @implements IFileModel
     * @constructor
     * @param {IFileModel=} [properties] Properties to set
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
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FileModel path.
     * @member {string} path
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.path = "";

    /**
     * FileModel size.
     * @member {number} size
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * FileModel username.
     * @member {string} username
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.username = "";

    /**
     * FileModel namespace.
     * @member {string} namespace
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.namespace = "";

    /**
     * FileModel pod.
     * @member {string} pod
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.pod = "";

    /**
     * FileModel container.
     * @member {string} container
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.container = "";

    /**
     * FileModel container_path.
     * @member {string} container_path
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.container_path = "";

    /**
     * FileModel created_at.
     * @member {string} created_at
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.created_at = "";

    /**
     * FileModel updated_at.
     * @member {string} updated_at
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.updated_at = "";

    /**
     * FileModel deleted_at.
     * @member {string} deleted_at
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.deleted_at = "";

    /**
     * FileModel is_deleted.
     * @member {boolean} is_deleted
     * @memberof FileModel
     * @instance
     */
    FileModel.prototype.is_deleted = false;

    /**
     * Encodes the specified FileModel message. Does not implicitly {@link FileModel.verify|verify} messages.
     * @function encode
     * @memberof FileModel
     * @static
     * @param {FileModel} message FileModel message or plain object to encode
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
     * @memberof FileModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileModel} FileModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileModel.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileModel();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.path = reader.string();
                break;
            case 3:
                message.size = reader.uint64();
                break;
            case 4:
                message.username = reader.string();
                break;
            case 5:
                message.namespace = reader.string();
                break;
            case 6:
                message.pod = reader.string();
                break;
            case 7:
                message.container = reader.string();
                break;
            case 8:
                message.container_path = reader.string();
                break;
            case 9:
                message.created_at = reader.string();
                break;
            case 10:
                message.updated_at = reader.string();
                break;
            case 11:
                message.deleted_at = reader.string();
                break;
            case 12:
                message.is_deleted = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return FileModel;
})();

export const BackgroundRequest = $root.BackgroundRequest = (() => {

    /**
     * Properties of a BackgroundRequest.
     * @exports IBackgroundRequest
     * @interface IBackgroundRequest
     * @property {boolean|null} [random] BackgroundRequest random
     */

    /**
     * Constructs a new BackgroundRequest.
     * @exports BackgroundRequest
     * @classdesc Represents a BackgroundRequest.
     * @implements IBackgroundRequest
     * @constructor
     * @param {IBackgroundRequest=} [properties] Properties to set
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
     * @memberof BackgroundRequest
     * @instance
     */
    BackgroundRequest.prototype.random = false;

    /**
     * Encodes the specified BackgroundRequest message. Does not implicitly {@link BackgroundRequest.verify|verify} messages.
     * @function encode
     * @memberof BackgroundRequest
     * @static
     * @param {BackgroundRequest} message BackgroundRequest message or plain object to encode
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
     * @memberof BackgroundRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BackgroundRequest} BackgroundRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackgroundRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BackgroundRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.random = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return BackgroundRequest;
})();

export const BackgroundResponse = $root.BackgroundResponse = (() => {

    /**
     * Properties of a BackgroundResponse.
     * @exports IBackgroundResponse
     * @interface IBackgroundResponse
     * @property {string|null} [url] BackgroundResponse url
     * @property {string|null} [copyright] BackgroundResponse copyright
     */

    /**
     * Constructs a new BackgroundResponse.
     * @exports BackgroundResponse
     * @classdesc Represents a BackgroundResponse.
     * @implements IBackgroundResponse
     * @constructor
     * @param {IBackgroundResponse=} [properties] Properties to set
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
     * @memberof BackgroundResponse
     * @instance
     */
    BackgroundResponse.prototype.url = "";

    /**
     * BackgroundResponse copyright.
     * @member {string} copyright
     * @memberof BackgroundResponse
     * @instance
     */
    BackgroundResponse.prototype.copyright = "";

    /**
     * Encodes the specified BackgroundResponse message. Does not implicitly {@link BackgroundResponse.verify|verify} messages.
     * @function encode
     * @memberof BackgroundResponse
     * @static
     * @param {BackgroundResponse} message BackgroundResponse message or plain object to encode
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
     * @memberof BackgroundResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BackgroundResponse} BackgroundResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BackgroundResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BackgroundResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.url = reader.string();
                break;
            case 2:
                message.copyright = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return BackgroundResponse;
})();

export const Picture = $root.Picture = (() => {

    /**
     * Constructs a new Picture service.
     * @exports Picture
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
     * Callback as used by {@link Picture#background}.
     * @memberof Picture
     * @typedef BackgroundCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {BackgroundResponse} [response] BackgroundResponse
     */

    /**
     * Calls Background.
     * @function background
     * @memberof Picture
     * @instance
     * @param {BackgroundRequest} request BackgroundRequest message or plain object
     * @param {Picture.BackgroundCallback} callback Node-style callback called with the error, if any, and BackgroundResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Picture.prototype.background = function background(request, callback) {
        return this.rpcCall(background, $root.BackgroundRequest, $root.BackgroundResponse, request, callback);
    }, "name", { value: "Background" });

    /**
     * Calls Background.
     * @function background
     * @memberof Picture
     * @instance
     * @param {BackgroundRequest} request BackgroundRequest message or plain object
     * @returns {Promise<BackgroundResponse>} Promise
     * @variation 2
     */

    return Picture;
})();

export const VersionRequest = $root.VersionRequest = (() => {

    /**
     * Properties of a VersionRequest.
     * @exports IVersionRequest
     * @interface IVersionRequest
     */

    /**
     * Constructs a new VersionRequest.
     * @exports VersionRequest
     * @classdesc Represents a VersionRequest.
     * @implements IVersionRequest
     * @constructor
     * @param {IVersionRequest=} [properties] Properties to set
     */
    function VersionRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Encodes the specified VersionRequest message. Does not implicitly {@link VersionRequest.verify|verify} messages.
     * @function encode
     * @memberof VersionRequest
     * @static
     * @param {VersionRequest} message VersionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VersionRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Decodes a VersionRequest message from the specified reader or buffer.
     * @function decode
     * @memberof VersionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VersionRequest} VersionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VersionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.VersionRequest();
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

    return VersionRequest;
})();

export const VersionResponse = $root.VersionResponse = (() => {

    /**
     * Properties of a VersionResponse.
     * @exports IVersionResponse
     * @interface IVersionResponse
     * @property {string|null} [version] VersionResponse version
     * @property {string|null} [build_date] VersionResponse build_date
     * @property {string|null} [git_branch] VersionResponse git_branch
     * @property {string|null} [git_commit] VersionResponse git_commit
     * @property {string|null} [git_tag] VersionResponse git_tag
     * @property {string|null} [go_version] VersionResponse go_version
     * @property {string|null} [compiler] VersionResponse compiler
     * @property {string|null} [platform] VersionResponse platform
     * @property {string|null} [kubectl_version] VersionResponse kubectl_version
     * @property {string|null} [git_repo] VersionResponse git_repo
     */

    /**
     * Constructs a new VersionResponse.
     * @exports VersionResponse
     * @classdesc Represents a VersionResponse.
     * @implements IVersionResponse
     * @constructor
     * @param {IVersionResponse=} [properties] Properties to set
     */
    function VersionResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VersionResponse version.
     * @member {string} version
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.version = "";

    /**
     * VersionResponse build_date.
     * @member {string} build_date
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.build_date = "";

    /**
     * VersionResponse git_branch.
     * @member {string} git_branch
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.git_branch = "";

    /**
     * VersionResponse git_commit.
     * @member {string} git_commit
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.git_commit = "";

    /**
     * VersionResponse git_tag.
     * @member {string} git_tag
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.git_tag = "";

    /**
     * VersionResponse go_version.
     * @member {string} go_version
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.go_version = "";

    /**
     * VersionResponse compiler.
     * @member {string} compiler
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.compiler = "";

    /**
     * VersionResponse platform.
     * @member {string} platform
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.platform = "";

    /**
     * VersionResponse kubectl_version.
     * @member {string} kubectl_version
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.kubectl_version = "";

    /**
     * VersionResponse git_repo.
     * @member {string} git_repo
     * @memberof VersionResponse
     * @instance
     */
    VersionResponse.prototype.git_repo = "";

    /**
     * Encodes the specified VersionResponse message. Does not implicitly {@link VersionResponse.verify|verify} messages.
     * @function encode
     * @memberof VersionResponse
     * @static
     * @param {VersionResponse} message VersionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VersionResponse.encode = function encode(message, writer) {
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
     * Decodes a VersionResponse message from the specified reader or buffer.
     * @function decode
     * @memberof VersionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VersionResponse} VersionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VersionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.VersionResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.version = reader.string();
                break;
            case 2:
                message.build_date = reader.string();
                break;
            case 3:
                message.git_branch = reader.string();
                break;
            case 4:
                message.git_commit = reader.string();
                break;
            case 5:
                message.git_tag = reader.string();
                break;
            case 6:
                message.go_version = reader.string();
                break;
            case 7:
                message.compiler = reader.string();
                break;
            case 8:
                message.platform = reader.string();
                break;
            case 9:
                message.kubectl_version = reader.string();
                break;
            case 10:
                message.git_repo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return VersionResponse;
})();

export const Version = $root.Version = (() => {

    /**
     * Constructs a new Version service.
     * @exports Version
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
     * Callback as used by {@link Version#version}.
     * @memberof Version
     * @typedef VersionCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {VersionResponse} [response] VersionResponse
     */

    /**
     * Calls Version.
     * @function version
     * @memberof Version
     * @instance
     * @param {VersionRequest} request VersionRequest message or plain object
     * @param {Version.VersionCallback} callback Node-style callback called with the error, if any, and VersionResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Version.prototype.version = function version(request, callback) {
        return this.rpcCall(version, $root.VersionRequest, $root.VersionResponse, request, callback);
    }, "name", { value: "Version" });

    /**
     * Calls Version.
     * @function version
     * @memberof Version
     * @instance
     * @param {VersionRequest} request VersionRequest message or plain object
     * @returns {Promise<VersionResponse>} Promise
     * @variation 2
     */

    return Version;
})();

/**
 * Type enum.
 * @exports Type
 * @enum {number}
 * @property {number} TypeUnknown=0 TypeUnknown value
 * @property {number} SetUid=1 SetUid value
 * @property {number} InternalError=2 InternalError value
 * @property {number} HandleExecShell=50 HandleExecShell value
 * @property {number} HandleExecShellMsg=51 HandleExecShellMsg value
 * @property {number} HandleCloseShell=52 HandleCloseShell value
 * @property {number} HandleAuthorize=53 HandleAuthorize value
 * @property {number} HandleSyncCard=54 HandleSyncCard value
 */
export const Type = $root.Type = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TypeUnknown"] = 0;
    values[valuesById[1] = "SetUid"] = 1;
    values[valuesById[2] = "InternalError"] = 2;
    values[valuesById[50] = "HandleExecShell"] = 50;
    values[valuesById[51] = "HandleExecShellMsg"] = 51;
    values[valuesById[52] = "HandleCloseShell"] = 52;
    values[valuesById[53] = "HandleAuthorize"] = 53;
    values[valuesById[54] = "HandleSyncCard"] = 54;
    return values;
})();

/**
 * ResultType enum.
 * @exports ResultType
 * @enum {number}
 * @property {number} ResultUnknown=0 ResultUnknown value
 * @property {number} Error=1 Error value
 * @property {number} Success=2 Success value
 */
export const ResultType = $root.ResultType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ResultUnknown"] = 0;
    values[valuesById[1] = "Error"] = 1;
    values[valuesById[2] = "Success"] = 2;
    return values;
})();

/**
 * To enum.
 * @exports To
 * @enum {number}
 * @property {number} ToSelf=0 ToSelf value
 * @property {number} ToAll=1 ToAll value
 * @property {number} ToOthers=2 ToOthers value
 */
export const To = $root.To = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ToSelf"] = 0;
    values[valuesById[1] = "ToAll"] = 1;
    values[valuesById[2] = "ToOthers"] = 2;
    return values;
})();

export const WsRequestMetadata = $root.WsRequestMetadata = (() => {

    /**
     * Properties of a WsRequestMetadata.
     * @exports IWsRequestMetadata
     * @interface IWsRequestMetadata
     * @property {Type|null} [type] WsRequestMetadata type
     */

    /**
     * Constructs a new WsRequestMetadata.
     * @exports WsRequestMetadata
     * @classdesc Represents a WsRequestMetadata.
     * @implements IWsRequestMetadata
     * @constructor
     * @param {IWsRequestMetadata=} [properties] Properties to set
     */
    function WsRequestMetadata(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WsRequestMetadata type.
     * @member {Type} type
     * @memberof WsRequestMetadata
     * @instance
     */
    WsRequestMetadata.prototype.type = 0;

    /**
     * Encodes the specified WsRequestMetadata message. Does not implicitly {@link WsRequestMetadata.verify|verify} messages.
     * @function encode
     * @memberof WsRequestMetadata
     * @static
     * @param {WsRequestMetadata} message WsRequestMetadata message or plain object to encode
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
     * @memberof WsRequestMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WsRequestMetadata} WsRequestMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsRequestMetadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsRequestMetadata();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return WsRequestMetadata;
})();

export const AuthorizeTokenInput = $root.AuthorizeTokenInput = (() => {

    /**
     * Properties of an AuthorizeTokenInput.
     * @exports IAuthorizeTokenInput
     * @interface IAuthorizeTokenInput
     * @property {Type|null} [type] AuthorizeTokenInput type
     * @property {string|null} [token] AuthorizeTokenInput token
     */

    /**
     * Constructs a new AuthorizeTokenInput.
     * @exports AuthorizeTokenInput
     * @classdesc Represents an AuthorizeTokenInput.
     * @implements IAuthorizeTokenInput
     * @constructor
     * @param {IAuthorizeTokenInput=} [properties] Properties to set
     */
    function AuthorizeTokenInput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AuthorizeTokenInput type.
     * @member {Type} type
     * @memberof AuthorizeTokenInput
     * @instance
     */
    AuthorizeTokenInput.prototype.type = 0;

    /**
     * AuthorizeTokenInput token.
     * @member {string} token
     * @memberof AuthorizeTokenInput
     * @instance
     */
    AuthorizeTokenInput.prototype.token = "";

    /**
     * Encodes the specified AuthorizeTokenInput message. Does not implicitly {@link AuthorizeTokenInput.verify|verify} messages.
     * @function encode
     * @memberof AuthorizeTokenInput
     * @static
     * @param {AuthorizeTokenInput} message AuthorizeTokenInput message or plain object to encode
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
     * @memberof AuthorizeTokenInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuthorizeTokenInput} AuthorizeTokenInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthorizeTokenInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AuthorizeTokenInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return AuthorizeTokenInput;
})();

export const TerminalMessage = $root.TerminalMessage = (() => {

    /**
     * Properties of a TerminalMessage.
     * @exports ITerminalMessage
     * @interface ITerminalMessage
     * @property {string|null} [op] TerminalMessage op
     * @property {string|null} [data] TerminalMessage data
     * @property {string|null} [session_id] TerminalMessage session_id
     * @property {number|null} [rows] TerminalMessage rows
     * @property {number|null} [cols] TerminalMessage cols
     */

    /**
     * Constructs a new TerminalMessage.
     * @exports TerminalMessage
     * @classdesc Represents a TerminalMessage.
     * @implements ITerminalMessage
     * @constructor
     * @param {ITerminalMessage=} [properties] Properties to set
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
     * @memberof TerminalMessage
     * @instance
     */
    TerminalMessage.prototype.op = "";

    /**
     * TerminalMessage data.
     * @member {string} data
     * @memberof TerminalMessage
     * @instance
     */
    TerminalMessage.prototype.data = "";

    /**
     * TerminalMessage session_id.
     * @member {string} session_id
     * @memberof TerminalMessage
     * @instance
     */
    TerminalMessage.prototype.session_id = "";

    /**
     * TerminalMessage rows.
     * @member {number} rows
     * @memberof TerminalMessage
     * @instance
     */
    TerminalMessage.prototype.rows = 0;

    /**
     * TerminalMessage cols.
     * @member {number} cols
     * @memberof TerminalMessage
     * @instance
     */
    TerminalMessage.prototype.cols = 0;

    /**
     * Encodes the specified TerminalMessage message. Does not implicitly {@link TerminalMessage.verify|verify} messages.
     * @function encode
     * @memberof TerminalMessage
     * @static
     * @param {TerminalMessage} message TerminalMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TerminalMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.op != null && Object.hasOwnProperty.call(message, "op"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.op);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
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
     * @memberof TerminalMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TerminalMessage} TerminalMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TerminalMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TerminalMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.op = reader.string();
                break;
            case 2:
                message.data = reader.string();
                break;
            case 3:
                message.session_id = reader.string();
                break;
            case 4:
                message.rows = reader.uint32();
                break;
            case 5:
                message.cols = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return TerminalMessage;
})();

export const TerminalMessageInput = $root.TerminalMessageInput = (() => {

    /**
     * Properties of a TerminalMessageInput.
     * @exports ITerminalMessageInput
     * @interface ITerminalMessageInput
     * @property {Type|null} [type] TerminalMessageInput type
     * @property {TerminalMessage|null} [message] TerminalMessageInput message
     */

    /**
     * Constructs a new TerminalMessageInput.
     * @exports TerminalMessageInput
     * @classdesc Represents a TerminalMessageInput.
     * @implements ITerminalMessageInput
     * @constructor
     * @param {ITerminalMessageInput=} [properties] Properties to set
     */
    function TerminalMessageInput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TerminalMessageInput type.
     * @member {Type} type
     * @memberof TerminalMessageInput
     * @instance
     */
    TerminalMessageInput.prototype.type = 0;

    /**
     * TerminalMessageInput message.
     * @member {TerminalMessage|null|undefined} message
     * @memberof TerminalMessageInput
     * @instance
     */
    TerminalMessageInput.prototype.message = null;

    /**
     * Encodes the specified TerminalMessageInput message. Does not implicitly {@link TerminalMessageInput.verify|verify} messages.
     * @function encode
     * @memberof TerminalMessageInput
     * @static
     * @param {TerminalMessageInput} message TerminalMessageInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TerminalMessageInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            $root.TerminalMessage.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a TerminalMessageInput message from the specified reader or buffer.
     * @function decode
     * @memberof TerminalMessageInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TerminalMessageInput} TerminalMessageInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TerminalMessageInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TerminalMessageInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.message = $root.TerminalMessage.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return TerminalMessageInput;
})();

export const WsHandleExecShellInput = $root.WsHandleExecShellInput = (() => {

    /**
     * Properties of a WsHandleExecShellInput.
     * @exports IWsHandleExecShellInput
     * @interface IWsHandleExecShellInput
     * @property {Type|null} [type] WsHandleExecShellInput type
     * @property {number|null} [cluster_id] WsHandleExecShellInput cluster_id
     * @property {string|null} [namespace] WsHandleExecShellInput namespace
     * @property {string|null} [pod] WsHandleExecShellInput pod
     * @property {string|null} [container] WsHandleExecShellInput container
     */

    /**
     * Constructs a new WsHandleExecShellInput.
     * @exports WsHandleExecShellInput
     * @classdesc Represents a WsHandleExecShellInput.
     * @implements IWsHandleExecShellInput
     * @constructor
     * @param {IWsHandleExecShellInput=} [properties] Properties to set
     */
    function WsHandleExecShellInput(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WsHandleExecShellInput type.
     * @member {Type} type
     * @memberof WsHandleExecShellInput
     * @instance
     */
    WsHandleExecShellInput.prototype.type = 0;

    /**
     * WsHandleExecShellInput cluster_id.
     * @member {number} cluster_id
     * @memberof WsHandleExecShellInput
     * @instance
     */
    WsHandleExecShellInput.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * WsHandleExecShellInput namespace.
     * @member {string} namespace
     * @memberof WsHandleExecShellInput
     * @instance
     */
    WsHandleExecShellInput.prototype.namespace = "";

    /**
     * WsHandleExecShellInput pod.
     * @member {string} pod
     * @memberof WsHandleExecShellInput
     * @instance
     */
    WsHandleExecShellInput.prototype.pod = "";

    /**
     * WsHandleExecShellInput container.
     * @member {string} container
     * @memberof WsHandleExecShellInput
     * @instance
     */
    WsHandleExecShellInput.prototype.container = "";

    /**
     * Encodes the specified WsHandleExecShellInput message. Does not implicitly {@link WsHandleExecShellInput.verify|verify} messages.
     * @function encode
     * @memberof WsHandleExecShellInput
     * @static
     * @param {WsHandleExecShellInput} message WsHandleExecShellInput message or plain object to encode
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
        return writer;
    };

    /**
     * Decodes a WsHandleExecShellInput message from the specified reader or buffer.
     * @function decode
     * @memberof WsHandleExecShellInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WsHandleExecShellInput} WsHandleExecShellInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsHandleExecShellInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsHandleExecShellInput();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.cluster_id = reader.int64();
                break;
            case 3:
                message.namespace = reader.string();
                break;
            case 4:
                message.pod = reader.string();
                break;
            case 5:
                message.container = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return WsHandleExecShellInput;
})();

export const Metadata = $root.Metadata = (() => {

    /**
     * Properties of a Metadata.
     * @exports IMetadata
     * @interface IMetadata
     * @property {string|null} [id] Metadata id
     * @property {string|null} [uid] Metadata uid
     * @property {string|null} [slug] Metadata slug
     * @property {Type|null} [type] Metadata type
     * @property {boolean|null} [end] Metadata end
     * @property {ResultType|null} [result] Metadata result
     * @property {To|null} [to] Metadata to
     * @property {string|null} [data] Metadata data
     */

    /**
     * Constructs a new Metadata.
     * @exports Metadata
     * @classdesc Represents a Metadata.
     * @implements IMetadata
     * @constructor
     * @param {IMetadata=} [properties] Properties to set
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
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.id = "";

    /**
     * Metadata uid.
     * @member {string} uid
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.uid = "";

    /**
     * Metadata slug.
     * @member {string} slug
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.slug = "";

    /**
     * Metadata type.
     * @member {Type} type
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.type = 0;

    /**
     * Metadata end.
     * @member {boolean} end
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.end = false;

    /**
     * Metadata result.
     * @member {ResultType} result
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.result = 0;

    /**
     * Metadata to.
     * @member {To} to
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.to = 0;

    /**
     * Metadata data.
     * @member {string} data
     * @memberof Metadata
     * @instance
     */
    Metadata.prototype.data = "";

    /**
     * Encodes the specified Metadata message. Does not implicitly {@link Metadata.verify|verify} messages.
     * @function encode
     * @memberof Metadata
     * @static
     * @param {Metadata} message Metadata message or plain object to encode
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
     * @memberof Metadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Metadata} Metadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Metadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Metadata();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.uid = reader.string();
                break;
            case 3:
                message.slug = reader.string();
                break;
            case 4:
                message.type = reader.int32();
                break;
            case 5:
                message.end = reader.bool();
                break;
            case 6:
                message.result = reader.int32();
                break;
            case 7:
                message.to = reader.int32();
                break;
            case 8:
                message.data = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Metadata;
})();

export const Container = $root.Container = (() => {

    /**
     * Properties of a Container.
     * @exports IContainer
     * @interface IContainer
     * @property {string|null} [namespace] Container namespace
     * @property {string|null} [pod] Container pod
     * @property {string|null} [container] Container container
     * @property {number|null} [cluster_id] Container cluster_id
     */

    /**
     * Constructs a new Container.
     * @exports Container
     * @classdesc Represents a Container.
     * @implements IContainer
     * @constructor
     * @param {IContainer=} [properties] Properties to set
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
     * @memberof Container
     * @instance
     */
    Container.prototype.namespace = "";

    /**
     * Container pod.
     * @member {string} pod
     * @memberof Container
     * @instance
     */
    Container.prototype.pod = "";

    /**
     * Container container.
     * @member {string} container
     * @memberof Container
     * @instance
     */
    Container.prototype.container = "";

    /**
     * Container cluster_id.
     * @member {number} cluster_id
     * @memberof Container
     * @instance
     */
    Container.prototype.cluster_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Encodes the specified Container message. Does not implicitly {@link Container.verify|verify} messages.
     * @function encode
     * @memberof Container
     * @static
     * @param {Container} message Container message or plain object to encode
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
     * @memberof Container
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Container} Container
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Container.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Container();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.namespace = reader.string();
                break;
            case 2:
                message.pod = reader.string();
                break;
            case 3:
                message.container = reader.string();
                break;
            case 4:
                message.cluster_id = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Container;
})();

export const WsMetadataResponse = $root.WsMetadataResponse = (() => {

    /**
     * Properties of a WsMetadataResponse.
     * @exports IWsMetadataResponse
     * @interface IWsMetadataResponse
     * @property {Metadata|null} [metadata] WsMetadataResponse metadata
     */

    /**
     * Constructs a new WsMetadataResponse.
     * @exports WsMetadataResponse
     * @classdesc Represents a WsMetadataResponse.
     * @implements IWsMetadataResponse
     * @constructor
     * @param {IWsMetadataResponse=} [properties] Properties to set
     */
    function WsMetadataResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WsMetadataResponse metadata.
     * @member {Metadata|null|undefined} metadata
     * @memberof WsMetadataResponse
     * @instance
     */
    WsMetadataResponse.prototype.metadata = null;

    /**
     * Encodes the specified WsMetadataResponse message. Does not implicitly {@link WsMetadataResponse.verify|verify} messages.
     * @function encode
     * @memberof WsMetadataResponse
     * @static
     * @param {WsMetadataResponse} message WsMetadataResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WsMetadataResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
            $root.Metadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a WsMetadataResponse message from the specified reader or buffer.
     * @function decode
     * @memberof WsMetadataResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WsMetadataResponse} WsMetadataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsMetadataResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsMetadataResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.metadata = $root.Metadata.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return WsMetadataResponse;
})();

export const WsHandleShellResponse = $root.WsHandleShellResponse = (() => {

    /**
     * Properties of a WsHandleShellResponse.
     * @exports IWsHandleShellResponse
     * @interface IWsHandleShellResponse
     * @property {Metadata|null} [metadata] WsHandleShellResponse metadata
     * @property {TerminalMessage|null} [terminal_message] WsHandleShellResponse terminal_message
     * @property {Container|null} [container] WsHandleShellResponse container
     */

    /**
     * Constructs a new WsHandleShellResponse.
     * @exports WsHandleShellResponse
     * @classdesc Represents a WsHandleShellResponse.
     * @implements IWsHandleShellResponse
     * @constructor
     * @param {IWsHandleShellResponse=} [properties] Properties to set
     */
    function WsHandleShellResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WsHandleShellResponse metadata.
     * @member {Metadata|null|undefined} metadata
     * @memberof WsHandleShellResponse
     * @instance
     */
    WsHandleShellResponse.prototype.metadata = null;

    /**
     * WsHandleShellResponse terminal_message.
     * @member {TerminalMessage|null|undefined} terminal_message
     * @memberof WsHandleShellResponse
     * @instance
     */
    WsHandleShellResponse.prototype.terminal_message = null;

    /**
     * WsHandleShellResponse container.
     * @member {Container|null|undefined} container
     * @memberof WsHandleShellResponse
     * @instance
     */
    WsHandleShellResponse.prototype.container = null;

    /**
     * Encodes the specified WsHandleShellResponse message. Does not implicitly {@link WsHandleShellResponse.verify|verify} messages.
     * @function encode
     * @memberof WsHandleShellResponse
     * @static
     * @param {WsHandleShellResponse} message WsHandleShellResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WsHandleShellResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
            $root.Metadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.terminal_message != null && Object.hasOwnProperty.call(message, "terminal_message"))
            $root.TerminalMessage.encode(message.terminal_message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.container != null && Object.hasOwnProperty.call(message, "container"))
            $root.Container.encode(message.container, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a WsHandleShellResponse message from the specified reader or buffer.
     * @function decode
     * @memberof WsHandleShellResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WsHandleShellResponse} WsHandleShellResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsHandleShellResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsHandleShellResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.metadata = $root.Metadata.decode(reader, reader.uint32());
                break;
            case 2:
                message.terminal_message = $root.TerminalMessage.decode(reader, reader.uint32());
                break;
            case 3:
                message.container = $root.Container.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return WsHandleShellResponse;
})();

export { $root as default };
