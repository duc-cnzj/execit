import * as $protobuf from "protobufjs";
/** Properties of an AuthLoginRequest. */
export interface IAuthLoginRequest {

    /** AuthLoginRequest username */
    username?: (string|null);

    /** AuthLoginRequest password */
    password?: (string|null);
}

/** Represents an AuthLoginRequest. */
export class AuthLoginRequest implements IAuthLoginRequest {

    /**
     * Constructs a new AuthLoginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthLoginRequest);

    /** AuthLoginRequest username. */
    public username: string;

    /** AuthLoginRequest password. */
    public password: string;

    /**
     * Encodes the specified AuthLoginRequest message. Does not implicitly {@link AuthLoginRequest.verify|verify} messages.
     * @param message AuthLoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthLoginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthLoginRequest;
}

/** Properties of an AuthLoginResponse. */
export interface IAuthLoginResponse {

    /** AuthLoginResponse token */
    token?: (string|null);

    /** AuthLoginResponse expires_in */
    expires_in?: (number|null);
}

/** Represents an AuthLoginResponse. */
export class AuthLoginResponse implements IAuthLoginResponse {

    /**
     * Constructs a new AuthLoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthLoginResponse);

    /** AuthLoginResponse token. */
    public token: string;

    /** AuthLoginResponse expires_in. */
    public expires_in: number;

    /**
     * Encodes the specified AuthLoginResponse message. Does not implicitly {@link AuthLoginResponse.verify|verify} messages.
     * @param message AuthLoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthLoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthLoginResponse;
}

/** Properties of an AuthExchangeRequest. */
export interface IAuthExchangeRequest {

    /** AuthExchangeRequest code */
    code?: (string|null);
}

/** Represents an AuthExchangeRequest. */
export class AuthExchangeRequest implements IAuthExchangeRequest {

    /**
     * Constructs a new AuthExchangeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthExchangeRequest);

    /** AuthExchangeRequest code. */
    public code: string;

    /**
     * Encodes the specified AuthExchangeRequest message. Does not implicitly {@link AuthExchangeRequest.verify|verify} messages.
     * @param message AuthExchangeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthExchangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthExchangeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthExchangeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthExchangeRequest;
}

/** Properties of an AuthExchangeResponse. */
export interface IAuthExchangeResponse {

    /** AuthExchangeResponse token */
    token?: (string|null);

    /** AuthExchangeResponse expires_in */
    expires_in?: (number|null);
}

/** Represents an AuthExchangeResponse. */
export class AuthExchangeResponse implements IAuthExchangeResponse {

    /**
     * Constructs a new AuthExchangeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthExchangeResponse);

    /** AuthExchangeResponse token. */
    public token: string;

    /** AuthExchangeResponse expires_in. */
    public expires_in: number;

    /**
     * Encodes the specified AuthExchangeResponse message. Does not implicitly {@link AuthExchangeResponse.verify|verify} messages.
     * @param message AuthExchangeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthExchangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthExchangeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthExchangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthExchangeResponse;
}

/** Properties of an AuthInfoRequest. */
export interface IAuthInfoRequest {
}

/** Represents an AuthInfoRequest. */
export class AuthInfoRequest implements IAuthInfoRequest {

    /**
     * Constructs a new AuthInfoRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthInfoRequest);

    /**
     * Encodes the specified AuthInfoRequest message. Does not implicitly {@link AuthInfoRequest.verify|verify} messages.
     * @param message AuthInfoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthInfoRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthInfoRequest;
}

/** Properties of an AuthInfoResponse. */
export interface IAuthInfoResponse {

    /** AuthInfoResponse id */
    id?: (string|null);

    /** AuthInfoResponse avatar */
    avatar?: (string|null);

    /** AuthInfoResponse name */
    name?: (string|null);

    /** AuthInfoResponse email */
    email?: (string|null);

    /** AuthInfoResponse logout_url */
    logout_url?: (string|null);

    /** AuthInfoResponse roles */
    roles?: (string[]|null);
}

/** Represents an AuthInfoResponse. */
export class AuthInfoResponse implements IAuthInfoResponse {

    /**
     * Constructs a new AuthInfoResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthInfoResponse);

    /** AuthInfoResponse id. */
    public id: string;

    /** AuthInfoResponse avatar. */
    public avatar: string;

    /** AuthInfoResponse name. */
    public name: string;

    /** AuthInfoResponse email. */
    public email: string;

    /** AuthInfoResponse logout_url. */
    public logout_url: string;

    /** AuthInfoResponse roles. */
    public roles: string[];

    /**
     * Encodes the specified AuthInfoResponse message. Does not implicitly {@link AuthInfoResponse.verify|verify} messages.
     * @param message AuthInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthInfoResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthInfoResponse;
}

/** Properties of an AuthSettingsRequest. */
export interface IAuthSettingsRequest {
}

/** Represents an AuthSettingsRequest. */
export class AuthSettingsRequest implements IAuthSettingsRequest {

    /**
     * Constructs a new AuthSettingsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthSettingsRequest);

    /**
     * Encodes the specified AuthSettingsRequest message. Does not implicitly {@link AuthSettingsRequest.verify|verify} messages.
     * @param message AuthSettingsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthSettingsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthSettingsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthSettingsRequest;
}

/** Properties of an AuthSettingsResponse. */
export interface IAuthSettingsResponse {

    /** AuthSettingsResponse items */
    items?: (AuthSettingsResponse.OidcSetting[]|null);
}

/** Represents an AuthSettingsResponse. */
export class AuthSettingsResponse implements IAuthSettingsResponse {

    /**
     * Constructs a new AuthSettingsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthSettingsResponse);

    /** AuthSettingsResponse items. */
    public items: AuthSettingsResponse.OidcSetting[];

    /**
     * Encodes the specified AuthSettingsResponse message. Does not implicitly {@link AuthSettingsResponse.verify|verify} messages.
     * @param message AuthSettingsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthSettingsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthSettingsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthSettingsResponse;
}

export namespace AuthSettingsResponse {

    /** Properties of an OidcSetting. */
    interface IOidcSetting {

        /** OidcSetting enabled */
        enabled?: (boolean|null);

        /** OidcSetting name */
        name?: (string|null);

        /** OidcSetting url */
        url?: (string|null);

        /** OidcSetting end_session_endpoint */
        end_session_endpoint?: (string|null);

        /** OidcSetting state */
        state?: (string|null);
    }

    /** Represents an OidcSetting. */
    class OidcSetting implements IOidcSetting {

        /**
         * Constructs a new OidcSetting.
         * @param [properties] Properties to set
         */
        constructor(properties?: AuthSettingsResponse.IOidcSetting);

        /** OidcSetting enabled. */
        public enabled: boolean;

        /** OidcSetting name. */
        public name: string;

        /** OidcSetting url. */
        public url: string;

        /** OidcSetting end_session_endpoint. */
        public end_session_endpoint: string;

        /** OidcSetting state. */
        public state: string;

        /**
         * Encodes the specified OidcSetting message. Does not implicitly {@link AuthSettingsResponse.OidcSetting.verify|verify} messages.
         * @param message OidcSetting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AuthSettingsResponse.OidcSetting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OidcSetting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OidcSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthSettingsResponse.OidcSetting;
    }
}

/** Represents an Auth */
export class Auth extends $protobuf.rpc.Service {

    /**
     * Constructs a new Auth service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls Login.
     * @param request AuthLoginRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and AuthLoginResponse
     */
    public login(request: AuthLoginRequest, callback: Auth.LoginCallback): void;

    /**
     * Calls Login.
     * @param request AuthLoginRequest message or plain object
     * @returns Promise
     */
    public login(request: AuthLoginRequest): Promise<AuthLoginResponse>;

    /**
     * Calls Info.
     * @param request AuthInfoRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and AuthInfoResponse
     */
    public info(request: AuthInfoRequest, callback: Auth.InfoCallback): void;

    /**
     * Calls Info.
     * @param request AuthInfoRequest message or plain object
     * @returns Promise
     */
    public info(request: AuthInfoRequest): Promise<AuthInfoResponse>;

    /**
     * Calls Settings.
     * @param request AuthSettingsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and AuthSettingsResponse
     */
    public settings(request: AuthSettingsRequest, callback: Auth.SettingsCallback): void;

    /**
     * Calls Settings.
     * @param request AuthSettingsRequest message or plain object
     * @returns Promise
     */
    public settings(request: AuthSettingsRequest): Promise<AuthSettingsResponse>;

    /**
     * Calls Exchange.
     * @param request AuthExchangeRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and AuthExchangeResponse
     */
    public exchange(request: AuthExchangeRequest, callback: Auth.ExchangeCallback): void;

    /**
     * Calls Exchange.
     * @param request AuthExchangeRequest message or plain object
     * @returns Promise
     */
    public exchange(request: AuthExchangeRequest): Promise<AuthExchangeResponse>;
}

export namespace Auth {

    /**
     * Callback as used by {@link Auth#login}.
     * @param error Error, if any
     * @param [response] AuthLoginResponse
     */
    type LoginCallback = (error: (Error|null), response?: AuthLoginResponse) => void;

    /**
     * Callback as used by {@link Auth#info}.
     * @param error Error, if any
     * @param [response] AuthInfoResponse
     */
    type InfoCallback = (error: (Error|null), response?: AuthInfoResponse) => void;

    /**
     * Callback as used by {@link Auth#settings}.
     * @param error Error, if any
     * @param [response] AuthSettingsResponse
     */
    type SettingsCallback = (error: (Error|null), response?: AuthSettingsResponse) => void;

    /**
     * Callback as used by {@link Auth#exchange}.
     * @param error Error, if any
     * @param [response] AuthExchangeResponse
     */
    type ExchangeCallback = (error: (Error|null), response?: AuthExchangeResponse) => void;
}

/** Namespace google. */
export namespace google {

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.HttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.HttpRule[];

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.Http, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.CustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additional_bindings */
            additional_bindings?: (google.api.HttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.CustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additional_bindings. */
            public additional_bindings: google.api.HttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.HttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.CustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.FileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.FileDescriptorProto[];

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.FileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.DescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.EnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.ServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.FieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.FileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.SourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.DescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.EnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.ServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.FieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.FileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.SourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.FileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.FieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.FieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.DescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.EnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.ExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.OneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.MessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.ReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.FieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.FieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.DescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.EnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.ExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.OneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.MessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.ReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.DescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.ExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.ReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.FieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.FieldOptions|null);

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.FieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.OneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.OneofOptions|null);

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.OneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.EnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.EnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.EnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.EnumOptions|null);

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.EnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.EnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.EnumValueOptions|null);

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.EnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.MethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.ServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.MethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.ServiceOptions|null);

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.MethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.MethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.MethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.UninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.UninterpretedOption[];

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.FileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.UninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.UninterpretedOption[];

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.MessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.UninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.UninterpretedOption[];

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.FieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.UninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.UninterpretedOption[];

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.OneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.UninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.UninterpretedOption[];

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.EnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.UninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.UninterpretedOption[];

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.EnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.UninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.UninterpretedOption[];

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.UninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.HttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.UninterpretedOption[];

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.MethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.NamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (number|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (number|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.NamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: number;

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: number;

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.UninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.NamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.Location[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.Location[];

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.SourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.Location, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.Annotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.Annotation[];

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.GeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.Annotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;
            }
        }
    }
}

/** Properties of a CardAllRequest. */
export interface ICardAllRequest {
}

/** Represents a CardAllRequest. */
export class CardAllRequest implements ICardAllRequest {

    /**
     * Constructs a new CardAllRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardAllRequest);

    /**
     * Encodes the specified CardAllRequest message. Does not implicitly {@link CardAllRequest.verify|verify} messages.
     * @param message CardAllRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardAllRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardAllRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardAllRequest;
}

/** Properties of a CardAllResponse. */
export interface ICardAllResponse {

    /** CardAllResponse items */
    items?: (CardItemsList[]|null);
}

/** Represents a CardAllResponse. */
export class CardAllResponse implements ICardAllResponse {

    /**
     * Constructs a new CardAllResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardAllResponse);

    /** CardAllResponse items. */
    public items: CardItemsList[];

    /**
     * Encodes the specified CardAllResponse message. Does not implicitly {@link CardAllResponse.verify|verify} messages.
     * @param message CardAllResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardAllResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardAllResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardAllResponse;
}

/** Properties of a CardListRequest. */
export interface ICardListRequest {

    /** CardListRequest page */
    page?: (number|null);

    /** CardListRequest page_size */
    page_size?: (number|null);
}

/** Represents a CardListRequest. */
export class CardListRequest implements ICardListRequest {

    /**
     * Constructs a new CardListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardListRequest);

    /** CardListRequest page. */
    public page: number;

    /** CardListRequest page_size. */
    public page_size: number;

    /**
     * Encodes the specified CardListRequest message. Does not implicitly {@link CardListRequest.verify|verify} messages.
     * @param message CardListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardListRequest;
}

/** Properties of a CardItems. */
export interface ICardItems {

    /** CardItems id */
    id?: (number|null);

    /** CardItems cluster_id */
    cluster_id?: (number|null);

    /** CardItems namespace */
    namespace?: (string|null);

    /** CardItems name */
    name?: (string|null);

    /** CardItems type */
    type?: (string|null);

    /** CardItems cluster_name */
    cluster_name?: (string|null);

    /** CardItems items */
    items?: (ContainerItem[]|null);
}

/** Represents a CardItems. */
export class CardItems implements ICardItems {

    /**
     * Constructs a new CardItems.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardItems);

    /** CardItems id. */
    public id: number;

    /** CardItems cluster_id. */
    public cluster_id: number;

    /** CardItems namespace. */
    public namespace: string;

    /** CardItems name. */
    public name: string;

    /** CardItems type. */
    public type: string;

    /** CardItems cluster_name. */
    public cluster_name: string;

    /** CardItems items. */
    public items: ContainerItem[];

    /**
     * Encodes the specified CardItems message. Does not implicitly {@link CardItems.verify|verify} messages.
     * @param message CardItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardItems message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardItems;
}

/** Properties of a CardItemsList. */
export interface ICardItemsList {

    /** CardItemsList cluster_id */
    cluster_id?: (number|null);

    /** CardItemsList namespace */
    namespace?: (string|null);

    /** CardItemsList cluster_name */
    cluster_name?: (string|null);

    /** CardItemsList items */
    items?: (CardItems[]|null);
}

/** Represents a CardItemsList. */
export class CardItemsList implements ICardItemsList {

    /**
     * Constructs a new CardItemsList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardItemsList);

    /** CardItemsList cluster_id. */
    public cluster_id: number;

    /** CardItemsList namespace. */
    public namespace: string;

    /** CardItemsList cluster_name. */
    public cluster_name: string;

    /** CardItemsList items. */
    public items: CardItems[];

    /**
     * Encodes the specified CardItemsList message. Does not implicitly {@link CardItemsList.verify|verify} messages.
     * @param message CardItemsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardItemsList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardItemsList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardItemsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardItemsList;
}

/** Properties of a CardListResponse. */
export interface ICardListResponse {

    /** CardListResponse page */
    page?: (number|null);

    /** CardListResponse page_size */
    page_size?: (number|null);

    /** CardListResponse count */
    count?: (number|null);

    /** CardListResponse items */
    items?: (CardItems[]|null);
}

/** Represents a CardListResponse. */
export class CardListResponse implements ICardListResponse {

    /**
     * Constructs a new CardListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardListResponse);

    /** CardListResponse page. */
    public page: number;

    /** CardListResponse page_size. */
    public page_size: number;

    /** CardListResponse count. */
    public count: number;

    /** CardListResponse items. */
    public items: CardItems[];

    /**
     * Encodes the specified CardListResponse message. Does not implicitly {@link CardListResponse.verify|verify} messages.
     * @param message CardListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardListResponse;
}

/** Properties of a CardCreateRequest. */
export interface ICardCreateRequest {

    /** CardCreateRequest cluster_id */
    cluster_id?: (number|null);

    /** CardCreateRequest namespace */
    namespace?: (string|null);

    /** CardCreateRequest name */
    name?: (string|null);

    /** CardCreateRequest type */
    type?: (string|null);
}

/** Represents a CardCreateRequest. */
export class CardCreateRequest implements ICardCreateRequest {

    /**
     * Constructs a new CardCreateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardCreateRequest);

    /** CardCreateRequest cluster_id. */
    public cluster_id: number;

    /** CardCreateRequest namespace. */
    public namespace: string;

    /** CardCreateRequest name. */
    public name: string;

    /** CardCreateRequest type. */
    public type: string;

    /**
     * Encodes the specified CardCreateRequest message. Does not implicitly {@link CardCreateRequest.verify|verify} messages.
     * @param message CardCreateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardCreateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardCreateRequest;
}

/** Properties of a CardCreateResponse. */
export interface ICardCreateResponse {

    /** CardCreateResponse id */
    id?: (number|null);

    /** CardCreateResponse type */
    type?: (string|null);

    /** CardCreateResponse namespace */
    namespace?: (string|null);

    /** CardCreateResponse name */
    name?: (string|null);

    /** CardCreateResponse cluster_id */
    cluster_id?: (number|null);

    /** CardCreateResponse created_at */
    created_at?: (string|null);

    /** CardCreateResponse updated_at */
    updated_at?: (string|null);

    /** CardCreateResponse deleted_at */
    deleted_at?: (string|null);
}

/** Represents a CardCreateResponse. */
export class CardCreateResponse implements ICardCreateResponse {

    /**
     * Constructs a new CardCreateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardCreateResponse);

    /** CardCreateResponse id. */
    public id: number;

    /** CardCreateResponse type. */
    public type: string;

    /** CardCreateResponse namespace. */
    public namespace: string;

    /** CardCreateResponse name. */
    public name: string;

    /** CardCreateResponse cluster_id. */
    public cluster_id: number;

    /** CardCreateResponse created_at. */
    public created_at: string;

    /** CardCreateResponse updated_at. */
    public updated_at: string;

    /** CardCreateResponse deleted_at. */
    public deleted_at: string;

    /**
     * Encodes the specified CardCreateResponse message. Does not implicitly {@link CardCreateResponse.verify|verify} messages.
     * @param message CardCreateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardCreateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardCreateResponse;
}

/** Properties of a CardShowRequest. */
export interface ICardShowRequest {

    /** CardShowRequest card_id */
    card_id?: (number|null);
}

/** Represents a CardShowRequest. */
export class CardShowRequest implements ICardShowRequest {

    /**
     * Constructs a new CardShowRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardShowRequest);

    /** CardShowRequest card_id. */
    public card_id: number;

    /**
     * Encodes the specified CardShowRequest message. Does not implicitly {@link CardShowRequest.verify|verify} messages.
     * @param message CardShowRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardShowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardShowRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardShowRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardShowRequest;
}

/** Properties of a CardShowResponse. */
export interface ICardShowResponse {

    /** CardShowResponse id */
    id?: (number|null);

    /** CardShowResponse type */
    type?: (string|null);

    /** CardShowResponse namespace */
    namespace?: (string|null);

    /** CardShowResponse name */
    name?: (string|null);

    /** CardShowResponse cluster_id */
    cluster_id?: (number|null);

    /** CardShowResponse created_at */
    created_at?: (string|null);

    /** CardShowResponse updated_at */
    updated_at?: (string|null);

    /** CardShowResponse deleted_at */
    deleted_at?: (string|null);

    /** CardShowResponse items */
    items?: (ContainerItem[]|null);
}

/** Represents a CardShowResponse. */
export class CardShowResponse implements ICardShowResponse {

    /**
     * Constructs a new CardShowResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardShowResponse);

    /** CardShowResponse id. */
    public id: number;

    /** CardShowResponse type. */
    public type: string;

    /** CardShowResponse namespace. */
    public namespace: string;

    /** CardShowResponse name. */
    public name: string;

    /** CardShowResponse cluster_id. */
    public cluster_id: number;

    /** CardShowResponse created_at. */
    public created_at: string;

    /** CardShowResponse updated_at. */
    public updated_at: string;

    /** CardShowResponse deleted_at. */
    public deleted_at: string;

    /** CardShowResponse items. */
    public items: ContainerItem[];

    /**
     * Encodes the specified CardShowResponse message. Does not implicitly {@link CardShowResponse.verify|verify} messages.
     * @param message CardShowResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardShowResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardShowResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardShowResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardShowResponse;
}

/** Properties of a CardDeleteRequest. */
export interface ICardDeleteRequest {

    /** CardDeleteRequest card_id */
    card_id?: (number|null);
}

/** Represents a CardDeleteRequest. */
export class CardDeleteRequest implements ICardDeleteRequest {

    /**
     * Constructs a new CardDeleteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardDeleteRequest);

    /** CardDeleteRequest card_id. */
    public card_id: number;

    /**
     * Encodes the specified CardDeleteRequest message. Does not implicitly {@link CardDeleteRequest.verify|verify} messages.
     * @param message CardDeleteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardDeleteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardDeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardDeleteRequest;
}

/** Properties of a CardDeleteResponse. */
export interface ICardDeleteResponse {
}

/** Represents a CardDeleteResponse. */
export class CardDeleteResponse implements ICardDeleteResponse {

    /**
     * Constructs a new CardDeleteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardDeleteResponse);

    /**
     * Encodes the specified CardDeleteResponse message. Does not implicitly {@link CardDeleteResponse.verify|verify} messages.
     * @param message CardDeleteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardDeleteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardDeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardDeleteResponse;
}

/** Represents a CardSvc */
export class CardSvc extends $protobuf.rpc.Service {

    /**
     * Constructs a new CardSvc service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls All.
     * @param request CardAllRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and CardAllResponse
     */
    public all(request: CardAllRequest, callback: CardSvc.AllCallback): void;

    /**
     * Calls All.
     * @param request CardAllRequest message or plain object
     * @returns Promise
     */
    public all(request: CardAllRequest): Promise<CardAllResponse>;

    /**
     * Calls Create.
     * @param request CardCreateRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and CardCreateResponse
     */
    public create(request: CardCreateRequest, callback: CardSvc.CreateCallback): void;

    /**
     * Calls Create.
     * @param request CardCreateRequest message or plain object
     * @returns Promise
     */
    public create(request: CardCreateRequest): Promise<CardCreateResponse>;

    /**
     * Calls Show.
     * @param request CardShowRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and CardShowResponse
     */
    public show(request: CardShowRequest, callback: CardSvc.ShowCallback): void;

    /**
     * Calls Show.
     * @param request CardShowRequest message or plain object
     * @returns Promise
     */
    public show(request: CardShowRequest): Promise<CardShowResponse>;

    /**
     * Calls Delete.
     * @param request CardDeleteRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and CardDeleteResponse
     */
    public delete(request: CardDeleteRequest, callback: CardSvc.DeleteCallback): void;

    /**
     * Calls Delete.
     * @param request CardDeleteRequest message or plain object
     * @returns Promise
     */
    public delete(request: CardDeleteRequest): Promise<CardDeleteResponse>;

    /**
     * Calls AllContainers.
     * @param request CardAllContainersRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and CardAllContainersResponse
     */
    public allContainers(request: CardAllContainersRequest, callback: CardSvc.AllContainersCallback): void;

    /**
     * Calls AllContainers.
     * @param request CardAllContainersRequest message or plain object
     * @returns Promise
     */
    public allContainers(request: CardAllContainersRequest): Promise<CardAllContainersResponse>;
}

export namespace CardSvc {

    /**
     * Callback as used by {@link CardSvc#all}.
     * @param error Error, if any
     * @param [response] CardAllResponse
     */
    type AllCallback = (error: (Error|null), response?: CardAllResponse) => void;

    /**
     * Callback as used by {@link CardSvc#create}.
     * @param error Error, if any
     * @param [response] CardCreateResponse
     */
    type CreateCallback = (error: (Error|null), response?: CardCreateResponse) => void;

    /**
     * Callback as used by {@link CardSvc#show}.
     * @param error Error, if any
     * @param [response] CardShowResponse
     */
    type ShowCallback = (error: (Error|null), response?: CardShowResponse) => void;

    /**
     * Callback as used by {@link CardSvc#delete_}.
     * @param error Error, if any
     * @param [response] CardDeleteResponse
     */
    type DeleteCallback = (error: (Error|null), response?: CardDeleteResponse) => void;

    /**
     * Callback as used by {@link CardSvc#allContainers}.
     * @param error Error, if any
     * @param [response] CardAllContainersResponse
     */
    type AllContainersCallback = (error: (Error|null), response?: CardAllContainersResponse) => void;
}

/** Properties of a CardAllContainersRequest. */
export interface ICardAllContainersRequest {

    /** CardAllContainersRequest card_id */
    card_id?: (number|null);
}

/** Represents a CardAllContainersRequest. */
export class CardAllContainersRequest implements ICardAllContainersRequest {

    /**
     * Constructs a new CardAllContainersRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardAllContainersRequest);

    /** CardAllContainersRequest card_id. */
    public card_id: number;

    /**
     * Encodes the specified CardAllContainersRequest message. Does not implicitly {@link CardAllContainersRequest.verify|verify} messages.
     * @param message CardAllContainersRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardAllContainersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardAllContainersRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardAllContainersRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardAllContainersRequest;
}

/** Properties of a CardAllContainersResponse. */
export interface ICardAllContainersResponse {

    /** CardAllContainersResponse items */
    items?: (ContainerItem[]|null);
}

/** Represents a CardAllContainersResponse. */
export class CardAllContainersResponse implements ICardAllContainersResponse {

    /**
     * Constructs a new CardAllContainersResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardAllContainersResponse);

    /** CardAllContainersResponse items. */
    public items: ContainerItem[];

    /**
     * Encodes the specified CardAllContainersResponse message. Does not implicitly {@link CardAllContainersResponse.verify|verify} messages.
     * @param message CardAllContainersResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardAllContainersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardAllContainersResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardAllContainersResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardAllContainersResponse;
}

/** Properties of a ClusterListRequest. */
export interface IClusterListRequest {

    /** ClusterListRequest page */
    page?: (number|null);

    /** ClusterListRequest page_size */
    page_size?: (number|null);
}

/** Represents a ClusterListRequest. */
export class ClusterListRequest implements IClusterListRequest {

    /**
     * Constructs a new ClusterListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterListRequest);

    /** ClusterListRequest page. */
    public page: number;

    /** ClusterListRequest page_size. */
    public page_size: number;

    /**
     * Encodes the specified ClusterListRequest message. Does not implicitly {@link ClusterListRequest.verify|verify} messages.
     * @param message ClusterListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterListRequest;
}

/** Properties of a ClusterListResponse. */
export interface IClusterListResponse {

    /** ClusterListResponse page */
    page?: (number|null);

    /** ClusterListResponse page_size */
    page_size?: (number|null);

    /** ClusterListResponse count */
    count?: (number|null);

    /** ClusterListResponse items */
    items?: (ClusterModel[]|null);
}

/** Represents a ClusterListResponse. */
export class ClusterListResponse implements IClusterListResponse {

    /**
     * Constructs a new ClusterListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterListResponse);

    /** ClusterListResponse page. */
    public page: number;

    /** ClusterListResponse page_size. */
    public page_size: number;

    /** ClusterListResponse count. */
    public count: number;

    /** ClusterListResponse items. */
    public items: ClusterModel[];

    /**
     * Encodes the specified ClusterListResponse message. Does not implicitly {@link ClusterListResponse.verify|verify} messages.
     * @param message ClusterListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterListResponse;
}

/** Properties of a ClusterCreateRequest. */
export interface IClusterCreateRequest {

    /** ClusterCreateRequest name */
    name?: (string|null);

    /** ClusterCreateRequest kube_config */
    kube_config?: (string|null);
}

/** Represents a ClusterCreateRequest. */
export class ClusterCreateRequest implements IClusterCreateRequest {

    /**
     * Constructs a new ClusterCreateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterCreateRequest);

    /** ClusterCreateRequest name. */
    public name: string;

    /** ClusterCreateRequest kube_config. */
    public kube_config: string;

    /**
     * Encodes the specified ClusterCreateRequest message. Does not implicitly {@link ClusterCreateRequest.verify|verify} messages.
     * @param message ClusterCreateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterCreateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterCreateRequest;
}

/** Properties of a ClusterCreateResponse. */
export interface IClusterCreateResponse {

    /** ClusterCreateResponse id */
    id?: (number|null);

    /** ClusterCreateResponse name */
    name?: (string|null);

    /** ClusterCreateResponse created_at */
    created_at?: (string|null);

    /** ClusterCreateResponse updated_at */
    updated_at?: (string|null);

    /** ClusterCreateResponse deleted_at */
    deleted_at?: (string|null);
}

/** Represents a ClusterCreateResponse. */
export class ClusterCreateResponse implements IClusterCreateResponse {

    /**
     * Constructs a new ClusterCreateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterCreateResponse);

    /** ClusterCreateResponse id. */
    public id: number;

    /** ClusterCreateResponse name. */
    public name: string;

    /** ClusterCreateResponse created_at. */
    public created_at: string;

    /** ClusterCreateResponse updated_at. */
    public updated_at: string;

    /** ClusterCreateResponse deleted_at. */
    public deleted_at: string;

    /**
     * Encodes the specified ClusterCreateResponse message. Does not implicitly {@link ClusterCreateResponse.verify|verify} messages.
     * @param message ClusterCreateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterCreateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterCreateResponse;
}

/** Properties of a ClusterShowRequest. */
export interface IClusterShowRequest {

    /** ClusterShowRequest cluster_id */
    cluster_id?: (number|null);
}

/** Represents a ClusterShowRequest. */
export class ClusterShowRequest implements IClusterShowRequest {

    /**
     * Constructs a new ClusterShowRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterShowRequest);

    /** ClusterShowRequest cluster_id. */
    public cluster_id: number;

    /**
     * Encodes the specified ClusterShowRequest message. Does not implicitly {@link ClusterShowRequest.verify|verify} messages.
     * @param message ClusterShowRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterShowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterShowRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterShowRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterShowRequest;
}

/** Properties of a ClusterShowResponse. */
export interface IClusterShowResponse {

    /** ClusterShowResponse id */
    id?: (number|null);

    /** ClusterShowResponse name */
    name?: (string|null);

    /** ClusterShowResponse kube_config */
    kube_config?: (string|null);

    /** ClusterShowResponse api_server_url */
    api_server_url?: (string|null);

    /** ClusterShowResponse created_at */
    created_at?: (string|null);

    /** ClusterShowResponse updated_at */
    updated_at?: (string|null);

    /** ClusterShowResponse deleted_at */
    deleted_at?: (string|null);

    /** ClusterShowResponse items */
    items?: (ClusterItems[]|null);
}

/** Represents a ClusterShowResponse. */
export class ClusterShowResponse implements IClusterShowResponse {

    /**
     * Constructs a new ClusterShowResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterShowResponse);

    /** ClusterShowResponse id. */
    public id: number;

    /** ClusterShowResponse name. */
    public name: string;

    /** ClusterShowResponse kube_config. */
    public kube_config: string;

    /** ClusterShowResponse api_server_url. */
    public api_server_url: string;

    /** ClusterShowResponse created_at. */
    public created_at: string;

    /** ClusterShowResponse updated_at. */
    public updated_at: string;

    /** ClusterShowResponse deleted_at. */
    public deleted_at: string;

    /** ClusterShowResponse items. */
    public items: ClusterItems[];

    /**
     * Encodes the specified ClusterShowResponse message. Does not implicitly {@link ClusterShowResponse.verify|verify} messages.
     * @param message ClusterShowResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterShowResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterShowResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterShowResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterShowResponse;
}

/** Properties of a ClusterItem. */
export interface IClusterItem {

    /** ClusterItem namespace */
    namespace?: (string|null);

    /** ClusterItem type */
    type?: (string|null);

    /** ClusterItem name */
    name?: (string|null);

    /** ClusterItem enabled */
    enabled?: (boolean|null);

    /** ClusterItem cluster_id */
    cluster_id?: (number|null);

    /** ClusterItem card_id */
    card_id?: (number|null);
}

/** Represents a ClusterItem. */
export class ClusterItem implements IClusterItem {

    /**
     * Constructs a new ClusterItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterItem);

    /** ClusterItem namespace. */
    public namespace: string;

    /** ClusterItem type. */
    public type: string;

    /** ClusterItem name. */
    public name: string;

    /** ClusterItem enabled. */
    public enabled: boolean;

    /** ClusterItem cluster_id. */
    public cluster_id: number;

    /** ClusterItem card_id. */
    public card_id: number;

    /**
     * Encodes the specified ClusterItem message. Does not implicitly {@link ClusterItem.verify|verify} messages.
     * @param message ClusterItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterItem;
}

/** Properties of a ClusterItems. */
export interface IClusterItems {

    /** ClusterItems namespace */
    namespace?: (string|null);

    /** ClusterItems items */
    items?: (ClusterItem[]|null);
}

/** Represents a ClusterItems. */
export class ClusterItems implements IClusterItems {

    /**
     * Constructs a new ClusterItems.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterItems);

    /** ClusterItems namespace. */
    public namespace: string;

    /** ClusterItems items. */
    public items: ClusterItem[];

    /**
     * Encodes the specified ClusterItems message. Does not implicitly {@link ClusterItems.verify|verify} messages.
     * @param message ClusterItems message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterItems, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterItems message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterItems
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterItems;
}

/** Properties of a ClusterDeleteRequest. */
export interface IClusterDeleteRequest {

    /** ClusterDeleteRequest cluster_id */
    cluster_id?: (number|null);
}

/** Represents a ClusterDeleteRequest. */
export class ClusterDeleteRequest implements IClusterDeleteRequest {

    /**
     * Constructs a new ClusterDeleteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterDeleteRequest);

    /** ClusterDeleteRequest cluster_id. */
    public cluster_id: number;

    /**
     * Encodes the specified ClusterDeleteRequest message. Does not implicitly {@link ClusterDeleteRequest.verify|verify} messages.
     * @param message ClusterDeleteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterDeleteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterDeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterDeleteRequest;
}

/** Properties of a ClusterDeleteResponse. */
export interface IClusterDeleteResponse {
}

/** Represents a ClusterDeleteResponse. */
export class ClusterDeleteResponse implements IClusterDeleteResponse {

    /**
     * Constructs a new ClusterDeleteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterDeleteResponse);

    /**
     * Encodes the specified ClusterDeleteResponse message. Does not implicitly {@link ClusterDeleteResponse.verify|verify} messages.
     * @param message ClusterDeleteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterDeleteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterDeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterDeleteResponse;
}

/** Represents a ClusterSvc */
export class ClusterSvc extends $protobuf.rpc.Service {

    /**
     * Constructs a new ClusterSvc service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls List.
     * @param request ClusterListRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ClusterListResponse
     */
    public list(request: ClusterListRequest, callback: ClusterSvc.ListCallback): void;

    /**
     * Calls List.
     * @param request ClusterListRequest message or plain object
     * @returns Promise
     */
    public list(request: ClusterListRequest): Promise<ClusterListResponse>;

    /**
     * Calls Create.
     * @param request ClusterCreateRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ClusterCreateResponse
     */
    public create(request: ClusterCreateRequest, callback: ClusterSvc.CreateCallback): void;

    /**
     * Calls Create.
     * @param request ClusterCreateRequest message or plain object
     * @returns Promise
     */
    public create(request: ClusterCreateRequest): Promise<ClusterCreateResponse>;

    /**
     * Calls Show.
     * @param request ClusterShowRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ClusterShowResponse
     */
    public show(request: ClusterShowRequest, callback: ClusterSvc.ShowCallback): void;

    /**
     * Calls Show.
     * @param request ClusterShowRequest message or plain object
     * @returns Promise
     */
    public show(request: ClusterShowRequest): Promise<ClusterShowResponse>;

    /**
     * Calls Delete.
     * @param request ClusterDeleteRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ClusterDeleteResponse
     */
    public delete(request: ClusterDeleteRequest, callback: ClusterSvc.DeleteCallback): void;

    /**
     * Calls Delete.
     * @param request ClusterDeleteRequest message or plain object
     * @returns Promise
     */
    public delete(request: ClusterDeleteRequest): Promise<ClusterDeleteResponse>;
}

export namespace ClusterSvc {

    /**
     * Callback as used by {@link ClusterSvc#list}.
     * @param error Error, if any
     * @param [response] ClusterListResponse
     */
    type ListCallback = (error: (Error|null), response?: ClusterListResponse) => void;

    /**
     * Callback as used by {@link ClusterSvc#create}.
     * @param error Error, if any
     * @param [response] ClusterCreateResponse
     */
    type CreateCallback = (error: (Error|null), response?: ClusterCreateResponse) => void;

    /**
     * Callback as used by {@link ClusterSvc#show}.
     * @param error Error, if any
     * @param [response] ClusterShowResponse
     */
    type ShowCallback = (error: (Error|null), response?: ClusterShowResponse) => void;

    /**
     * Callback as used by {@link ClusterSvc#delete_}.
     * @param error Error, if any
     * @param [response] ClusterDeleteResponse
     */
    type DeleteCallback = (error: (Error|null), response?: ClusterDeleteResponse) => void;
}

/** Properties of a ContainerItem. */
export interface IContainerItem {

    /** ContainerItem cluster_id */
    cluster_id?: (number|null);

    /** ContainerItem namespace */
    namespace?: (string|null);

    /** ContainerItem pod */
    pod?: (string|null);

    /** ContainerItem container */
    container?: (string|null);
}

/** Represents a ContainerItem. */
export class ContainerItem implements IContainerItem {

    /**
     * Constructs a new ContainerItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerItem);

    /** ContainerItem cluster_id. */
    public cluster_id: number;

    /** ContainerItem namespace. */
    public namespace: string;

    /** ContainerItem pod. */
    public pod: string;

    /** ContainerItem container. */
    public container: string;

    /**
     * Encodes the specified ContainerItem message. Does not implicitly {@link ContainerItem.verify|verify} messages.
     * @param message ContainerItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerItem;
}

/** Properties of a ContainerCopyToPodRequest. */
export interface IContainerCopyToPodRequest {

    /** ContainerCopyToPodRequest cluster_id */
    cluster_id?: (number|null);

    /** ContainerCopyToPodRequest file_id */
    file_id?: (number|null);

    /** ContainerCopyToPodRequest namespace */
    namespace?: (string|null);

    /** ContainerCopyToPodRequest pod */
    pod?: (string|null);

    /** ContainerCopyToPodRequest container */
    container?: (string|null);
}

/** Represents a ContainerCopyToPodRequest. */
export class ContainerCopyToPodRequest implements IContainerCopyToPodRequest {

    /**
     * Constructs a new ContainerCopyToPodRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerCopyToPodRequest);

    /** ContainerCopyToPodRequest cluster_id. */
    public cluster_id: number;

    /** ContainerCopyToPodRequest file_id. */
    public file_id: number;

    /** ContainerCopyToPodRequest namespace. */
    public namespace: string;

    /** ContainerCopyToPodRequest pod. */
    public pod: string;

    /** ContainerCopyToPodRequest container. */
    public container: string;

    /**
     * Encodes the specified ContainerCopyToPodRequest message. Does not implicitly {@link ContainerCopyToPodRequest.verify|verify} messages.
     * @param message ContainerCopyToPodRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerCopyToPodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerCopyToPodRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerCopyToPodRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerCopyToPodRequest;
}

/** Properties of a ContainerCopyToPodResponse. */
export interface IContainerCopyToPodResponse {

    /** ContainerCopyToPodResponse pod_file_path */
    pod_file_path?: (string|null);

    /** ContainerCopyToPodResponse output */
    output?: (string|null);

    /** ContainerCopyToPodResponse file_name */
    file_name?: (string|null);
}

/** Represents a ContainerCopyToPodResponse. */
export class ContainerCopyToPodResponse implements IContainerCopyToPodResponse {

    /**
     * Constructs a new ContainerCopyToPodResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerCopyToPodResponse);

    /** ContainerCopyToPodResponse pod_file_path. */
    public pod_file_path: string;

    /** ContainerCopyToPodResponse output. */
    public output: string;

    /** ContainerCopyToPodResponse file_name. */
    public file_name: string;

    /**
     * Encodes the specified ContainerCopyToPodResponse message. Does not implicitly {@link ContainerCopyToPodResponse.verify|verify} messages.
     * @param message ContainerCopyToPodResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerCopyToPodResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerCopyToPodResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerCopyToPodResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerCopyToPodResponse;
}

/** Properties of a ContainerExecRequest. */
export interface IContainerExecRequest {

    /** ContainerExecRequest cluster_id */
    cluster_id?: (number|null);

    /** ContainerExecRequest namespace */
    namespace?: (string|null);

    /** ContainerExecRequest pod */
    pod?: (string|null);

    /** ContainerExecRequest container */
    container?: (string|null);

    /** ContainerExecRequest command */
    command?: (string[]|null);
}

/** Represents a ContainerExecRequest. */
export class ContainerExecRequest implements IContainerExecRequest {

    /**
     * Constructs a new ContainerExecRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerExecRequest);

    /** ContainerExecRequest cluster_id. */
    public cluster_id: number;

    /** ContainerExecRequest namespace. */
    public namespace: string;

    /** ContainerExecRequest pod. */
    public pod: string;

    /** ContainerExecRequest container. */
    public container: string;

    /** ContainerExecRequest command. */
    public command: string[];

    /**
     * Encodes the specified ContainerExecRequest message. Does not implicitly {@link ContainerExecRequest.verify|verify} messages.
     * @param message ContainerExecRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerExecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerExecRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerExecRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerExecRequest;
}

/** Properties of a ContainerExecResponse. */
export interface IContainerExecResponse {

    /** ContainerExecResponse data */
    data?: (string|null);
}

/** Represents a ContainerExecResponse. */
export class ContainerExecResponse implements IContainerExecResponse {

    /**
     * Constructs a new ContainerExecResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerExecResponse);

    /** ContainerExecResponse data. */
    public data: string;

    /**
     * Encodes the specified ContainerExecResponse message. Does not implicitly {@link ContainerExecResponse.verify|verify} messages.
     * @param message ContainerExecResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerExecResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerExecResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerExecResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerExecResponse;
}

/** Properties of a ContainerStreamCopyToPodRequest. */
export interface IContainerStreamCopyToPodRequest {

    /** ContainerStreamCopyToPodRequest cluster_id */
    cluster_id?: (number|null);

    /** ContainerStreamCopyToPodRequest file_name */
    file_name?: (string|null);

    /** ContainerStreamCopyToPodRequest data */
    data?: (Uint8Array|null);

    /** ContainerStreamCopyToPodRequest namespace */
    namespace?: (string|null);

    /** ContainerStreamCopyToPodRequest pod */
    pod?: (string|null);

    /** ContainerStreamCopyToPodRequest container */
    container?: (string|null);
}

/** Represents a ContainerStreamCopyToPodRequest. */
export class ContainerStreamCopyToPodRequest implements IContainerStreamCopyToPodRequest {

    /**
     * Constructs a new ContainerStreamCopyToPodRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerStreamCopyToPodRequest);

    /** ContainerStreamCopyToPodRequest cluster_id. */
    public cluster_id: number;

    /** ContainerStreamCopyToPodRequest file_name. */
    public file_name: string;

    /** ContainerStreamCopyToPodRequest data. */
    public data: Uint8Array;

    /** ContainerStreamCopyToPodRequest namespace. */
    public namespace: string;

    /** ContainerStreamCopyToPodRequest pod. */
    public pod: string;

    /** ContainerStreamCopyToPodRequest container. */
    public container: string;

    /**
     * Encodes the specified ContainerStreamCopyToPodRequest message. Does not implicitly {@link ContainerStreamCopyToPodRequest.verify|verify} messages.
     * @param message ContainerStreamCopyToPodRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerStreamCopyToPodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerStreamCopyToPodRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerStreamCopyToPodRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerStreamCopyToPodRequest;
}

/** Properties of a ContainerStreamCopyToPodResponse. */
export interface IContainerStreamCopyToPodResponse {

    /** ContainerStreamCopyToPodResponse size */
    size?: (number|null);

    /** ContainerStreamCopyToPodResponse pod_file_path */
    pod_file_path?: (string|null);

    /** ContainerStreamCopyToPodResponse output */
    output?: (string|null);

    /** ContainerStreamCopyToPodResponse pod */
    pod?: (string|null);

    /** ContainerStreamCopyToPodResponse namespace */
    namespace?: (string|null);

    /** ContainerStreamCopyToPodResponse container */
    container?: (string|null);

    /** ContainerStreamCopyToPodResponse filename */
    filename?: (string|null);
}

/** Represents a ContainerStreamCopyToPodResponse. */
export class ContainerStreamCopyToPodResponse implements IContainerStreamCopyToPodResponse {

    /**
     * Constructs a new ContainerStreamCopyToPodResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerStreamCopyToPodResponse);

    /** ContainerStreamCopyToPodResponse size. */
    public size: number;

    /** ContainerStreamCopyToPodResponse pod_file_path. */
    public pod_file_path: string;

    /** ContainerStreamCopyToPodResponse output. */
    public output: string;

    /** ContainerStreamCopyToPodResponse pod. */
    public pod: string;

    /** ContainerStreamCopyToPodResponse namespace. */
    public namespace: string;

    /** ContainerStreamCopyToPodResponse container. */
    public container: string;

    /** ContainerStreamCopyToPodResponse filename. */
    public filename: string;

    /**
     * Encodes the specified ContainerStreamCopyToPodResponse message. Does not implicitly {@link ContainerStreamCopyToPodResponse.verify|verify} messages.
     * @param message ContainerStreamCopyToPodResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerStreamCopyToPodResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerStreamCopyToPodResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerStreamCopyToPodResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerStreamCopyToPodResponse;
}

/** Properties of a ContainerIsPodRunningRequest. */
export interface IContainerIsPodRunningRequest {

    /** ContainerIsPodRunningRequest cluster_id */
    cluster_id?: (number|null);

    /** ContainerIsPodRunningRequest namespace */
    namespace?: (string|null);

    /** ContainerIsPodRunningRequest pod */
    pod?: (string|null);
}

/** Represents a ContainerIsPodRunningRequest. */
export class ContainerIsPodRunningRequest implements IContainerIsPodRunningRequest {

    /**
     * Constructs a new ContainerIsPodRunningRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerIsPodRunningRequest);

    /** ContainerIsPodRunningRequest cluster_id. */
    public cluster_id: number;

    /** ContainerIsPodRunningRequest namespace. */
    public namespace: string;

    /** ContainerIsPodRunningRequest pod. */
    public pod: string;

    /**
     * Encodes the specified ContainerIsPodRunningRequest message. Does not implicitly {@link ContainerIsPodRunningRequest.verify|verify} messages.
     * @param message ContainerIsPodRunningRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerIsPodRunningRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerIsPodRunningRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerIsPodRunningRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerIsPodRunningRequest;
}

/** Properties of a ContainerIsPodRunningResponse. */
export interface IContainerIsPodRunningResponse {

    /** ContainerIsPodRunningResponse running */
    running?: (boolean|null);

    /** ContainerIsPodRunningResponse reason */
    reason?: (string|null);
}

/** Represents a ContainerIsPodRunningResponse. */
export class ContainerIsPodRunningResponse implements IContainerIsPodRunningResponse {

    /**
     * Constructs a new ContainerIsPodRunningResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerIsPodRunningResponse);

    /** ContainerIsPodRunningResponse running. */
    public running: boolean;

    /** ContainerIsPodRunningResponse reason. */
    public reason: string;

    /**
     * Encodes the specified ContainerIsPodRunningResponse message. Does not implicitly {@link ContainerIsPodRunningResponse.verify|verify} messages.
     * @param message ContainerIsPodRunningResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerIsPodRunningResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerIsPodRunningResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerIsPodRunningResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerIsPodRunningResponse;
}

/** Properties of a ContainerIsPodExistsRequest. */
export interface IContainerIsPodExistsRequest {

    /** ContainerIsPodExistsRequest cluster_id */
    cluster_id?: (number|null);

    /** ContainerIsPodExistsRequest namespace */
    namespace?: (string|null);

    /** ContainerIsPodExistsRequest pod */
    pod?: (string|null);
}

/** Represents a ContainerIsPodExistsRequest. */
export class ContainerIsPodExistsRequest implements IContainerIsPodExistsRequest {

    /**
     * Constructs a new ContainerIsPodExistsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerIsPodExistsRequest);

    /** ContainerIsPodExistsRequest cluster_id. */
    public cluster_id: number;

    /** ContainerIsPodExistsRequest namespace. */
    public namespace: string;

    /** ContainerIsPodExistsRequest pod. */
    public pod: string;

    /**
     * Encodes the specified ContainerIsPodExistsRequest message. Does not implicitly {@link ContainerIsPodExistsRequest.verify|verify} messages.
     * @param message ContainerIsPodExistsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerIsPodExistsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerIsPodExistsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerIsPodExistsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerIsPodExistsRequest;
}

/** Properties of a ContainerIsPodExistsResponse. */
export interface IContainerIsPodExistsResponse {

    /** ContainerIsPodExistsResponse exists */
    exists?: (boolean|null);
}

/** Represents a ContainerIsPodExistsResponse. */
export class ContainerIsPodExistsResponse implements IContainerIsPodExistsResponse {

    /**
     * Constructs a new ContainerIsPodExistsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerIsPodExistsResponse);

    /** ContainerIsPodExistsResponse exists. */
    public exists: boolean;

    /**
     * Encodes the specified ContainerIsPodExistsResponse message. Does not implicitly {@link ContainerIsPodExistsResponse.verify|verify} messages.
     * @param message ContainerIsPodExistsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerIsPodExistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerIsPodExistsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerIsPodExistsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerIsPodExistsResponse;
}

/** Properties of a ContainerLogRequest. */
export interface IContainerLogRequest {

    /** ContainerLogRequest cluster_id */
    cluster_id?: (number|null);

    /** ContainerLogRequest namespace */
    namespace?: (string|null);

    /** ContainerLogRequest pod */
    pod?: (string|null);

    /** ContainerLogRequest container */
    container?: (string|null);
}

/** Represents a ContainerLogRequest. */
export class ContainerLogRequest implements IContainerLogRequest {

    /**
     * Constructs a new ContainerLogRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerLogRequest);

    /** ContainerLogRequest cluster_id. */
    public cluster_id: number;

    /** ContainerLogRequest namespace. */
    public namespace: string;

    /** ContainerLogRequest pod. */
    public pod: string;

    /** ContainerLogRequest container. */
    public container: string;

    /**
     * Encodes the specified ContainerLogRequest message. Does not implicitly {@link ContainerLogRequest.verify|verify} messages.
     * @param message ContainerLogRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerLogRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerLogRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerLogRequest;
}

/** Properties of a ContainerLogResponse. */
export interface IContainerLogResponse {

    /** ContainerLogResponse namespace */
    namespace?: (string|null);

    /** ContainerLogResponse pod_name */
    pod_name?: (string|null);

    /** ContainerLogResponse container_name */
    container_name?: (string|null);

    /** ContainerLogResponse log */
    log?: (string|null);
}

/** Represents a ContainerLogResponse. */
export class ContainerLogResponse implements IContainerLogResponse {

    /**
     * Constructs a new ContainerLogResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainerLogResponse);

    /** ContainerLogResponse namespace. */
    public namespace: string;

    /** ContainerLogResponse pod_name. */
    public pod_name: string;

    /** ContainerLogResponse container_name. */
    public container_name: string;

    /** ContainerLogResponse log. */
    public log: string;

    /**
     * Encodes the specified ContainerLogResponse message. Does not implicitly {@link ContainerLogResponse.verify|verify} messages.
     * @param message ContainerLogResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ContainerLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContainerLogResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContainerLogResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContainerLogResponse;
}

/** Represents a ContainerSvc */
export class ContainerSvc extends $protobuf.rpc.Service {

    /**
     * Constructs a new ContainerSvc service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls CopyToPod.
     * @param request ContainerCopyToPodRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ContainerCopyToPodResponse
     */
    public copyToPod(request: ContainerCopyToPodRequest, callback: ContainerSvc.CopyToPodCallback): void;

    /**
     * Calls CopyToPod.
     * @param request ContainerCopyToPodRequest message or plain object
     * @returns Promise
     */
    public copyToPod(request: ContainerCopyToPodRequest): Promise<ContainerCopyToPodResponse>;

    /**
     * Calls Exec.
     * @param request ContainerExecRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ContainerExecResponse
     */
    public exec(request: ContainerExecRequest, callback: ContainerSvc.ExecCallback): void;

    /**
     * Calls Exec.
     * @param request ContainerExecRequest message or plain object
     * @returns Promise
     */
    public exec(request: ContainerExecRequest): Promise<ContainerExecResponse>;

    /**
     * Calls StreamCopyToPod.
     * @param request ContainerStreamCopyToPodRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ContainerStreamCopyToPodResponse
     */
    public streamCopyToPod(request: ContainerStreamCopyToPodRequest, callback: ContainerSvc.StreamCopyToPodCallback): void;

    /**
     * Calls StreamCopyToPod.
     * @param request ContainerStreamCopyToPodRequest message or plain object
     * @returns Promise
     */
    public streamCopyToPod(request: ContainerStreamCopyToPodRequest): Promise<ContainerStreamCopyToPodResponse>;

    /**
     * Calls IsPodRunning.
     * @param request ContainerIsPodRunningRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ContainerIsPodRunningResponse
     */
    public isPodRunning(request: ContainerIsPodRunningRequest, callback: ContainerSvc.IsPodRunningCallback): void;

    /**
     * Calls IsPodRunning.
     * @param request ContainerIsPodRunningRequest message or plain object
     * @returns Promise
     */
    public isPodRunning(request: ContainerIsPodRunningRequest): Promise<ContainerIsPodRunningResponse>;

    /**
     * Calls IsPodExists.
     * @param request ContainerIsPodExistsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ContainerIsPodExistsResponse
     */
    public isPodExists(request: ContainerIsPodExistsRequest, callback: ContainerSvc.IsPodExistsCallback): void;

    /**
     * Calls IsPodExists.
     * @param request ContainerIsPodExistsRequest message or plain object
     * @returns Promise
     */
    public isPodExists(request: ContainerIsPodExistsRequest): Promise<ContainerIsPodExistsResponse>;

    /**
     * Calls ContainerLog.
     * @param request ContainerLogRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ContainerLogResponse
     */
    public containerLog(request: ContainerLogRequest, callback: ContainerSvc.ContainerLogCallback): void;

    /**
     * Calls ContainerLog.
     * @param request ContainerLogRequest message or plain object
     * @returns Promise
     */
    public containerLog(request: ContainerLogRequest): Promise<ContainerLogResponse>;

    /**
     * Calls StreamContainerLog.
     * @param request ContainerLogRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ContainerLogResponse
     */
    public streamContainerLog(request: ContainerLogRequest, callback: ContainerSvc.StreamContainerLogCallback): void;

    /**
     * Calls StreamContainerLog.
     * @param request ContainerLogRequest message or plain object
     * @returns Promise
     */
    public streamContainerLog(request: ContainerLogRequest): Promise<ContainerLogResponse>;
}

export namespace ContainerSvc {

    /**
     * Callback as used by {@link ContainerSvc#copyToPod}.
     * @param error Error, if any
     * @param [response] ContainerCopyToPodResponse
     */
    type CopyToPodCallback = (error: (Error|null), response?: ContainerCopyToPodResponse) => void;

    /**
     * Callback as used by {@link ContainerSvc#exec}.
     * @param error Error, if any
     * @param [response] ContainerExecResponse
     */
    type ExecCallback = (error: (Error|null), response?: ContainerExecResponse) => void;

    /**
     * Callback as used by {@link ContainerSvc#streamCopyToPod}.
     * @param error Error, if any
     * @param [response] ContainerStreamCopyToPodResponse
     */
    type StreamCopyToPodCallback = (error: (Error|null), response?: ContainerStreamCopyToPodResponse) => void;

    /**
     * Callback as used by {@link ContainerSvc#isPodRunning}.
     * @param error Error, if any
     * @param [response] ContainerIsPodRunningResponse
     */
    type IsPodRunningCallback = (error: (Error|null), response?: ContainerIsPodRunningResponse) => void;

    /**
     * Callback as used by {@link ContainerSvc#isPodExists}.
     * @param error Error, if any
     * @param [response] ContainerIsPodExistsResponse
     */
    type IsPodExistsCallback = (error: (Error|null), response?: ContainerIsPodExistsResponse) => void;

    /**
     * Callback as used by {@link ContainerSvc#containerLog}.
     * @param error Error, if any
     * @param [response] ContainerLogResponse
     */
    type ContainerLogCallback = (error: (Error|null), response?: ContainerLogResponse) => void;

    /**
     * Callback as used by {@link ContainerSvc#streamContainerLog}.
     * @param error Error, if any
     * @param [response] ContainerLogResponse
     */
    type StreamContainerLogCallback = (error: (Error|null), response?: ContainerLogResponse) => void;
}

/** ActionType enum. */
export enum ActionType {
    Unknown = 0,
    Create = 1,
    Update = 2,
    Delete = 3,
    Upload = 4,
    Download = 5,
    DryRun = 6
}

/** Represents an EventListRequest. */
export class EventListRequest implements IEventListRequest {

    /**
     * Constructs a new EventListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventListRequest);

    /** EventListRequest page. */
    public page: number;

    /** EventListRequest page_size. */
    public page_size: number;

    /**
     * Encodes the specified EventListRequest message. Does not implicitly {@link EventListRequest.verify|verify} messages.
     * @param message EventListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: EventListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventListRequest;
}

/** Represents an EventListItem. */
export class EventListItem implements IEventListItem {

    /**
     * Constructs a new EventListItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventListItem);

    /** EventListItem id. */
    public id: number;

    /** EventListItem action. */
    public action: ActionType;

    /** EventListItem username. */
    public username: string;

    /** EventListItem message. */
    public message: string;

    /** EventListItem old. */
    public old: string;

    /** EventListItem new. */
    public new: string;

    /** EventListItem event_at. */
    public event_at: string;

    /** EventListItem file_id. */
    public file_id: number;

    /**
     * Encodes the specified EventListItem message. Does not implicitly {@link EventListItem.verify|verify} messages.
     * @param message EventListItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: EventListItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventListItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventListItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventListItem;
}

/** Represents an EventListResponse. */
export class EventListResponse implements IEventListResponse {

    /**
     * Constructs a new EventListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventListResponse);

    /** EventListResponse page. */
    public page: number;

    /** EventListResponse page_size. */
    public page_size: number;

    /** EventListResponse items. */
    public items: EventListItem[];

    /** EventListResponse count. */
    public count: number;

    /**
     * Encodes the specified EventListResponse message. Does not implicitly {@link EventListResponse.verify|verify} messages.
     * @param message EventListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: EventListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventListResponse;
}

/** Represents an Event */
export class Event extends $protobuf.rpc.Service {

    /**
     * Constructs a new Event service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls List.
     * @param request EventListRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and EventListResponse
     */
    public list(request: EventListRequest, callback: Event.ListCallback): void;

    /**
     * Calls List.
     * @param request EventListRequest message or plain object
     * @returns Promise
     */
    public list(request: EventListRequest): Promise<EventListResponse>;
}

export namespace Event {

    /**
     * Callback as used by {@link Event#list}.
     * @param error Error, if any
     * @param [response] EventListResponse
     */
    type ListCallback = (error: (Error|null), response?: EventListResponse) => void;
}

/** Represents a FileDeleteRequest. */
export class FileDeleteRequest implements IFileDeleteRequest {

    /**
     * Constructs a new FileDeleteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFileDeleteRequest);

    /** FileDeleteRequest id. */
    public id: number;

    /**
     * Encodes the specified FileDeleteRequest message. Does not implicitly {@link FileDeleteRequest.verify|verify} messages.
     * @param message FileDeleteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: FileDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FileDeleteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FileDeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FileDeleteRequest;
}

/** Represents a FileDeleteResponse. */
export class FileDeleteResponse implements IFileDeleteResponse {

    /**
     * Constructs a new FileDeleteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFileDeleteResponse);

    /** FileDeleteResponse file. */
    public file?: (File|null);

    /**
     * Encodes the specified FileDeleteResponse message. Does not implicitly {@link FileDeleteResponse.verify|verify} messages.
     * @param message FileDeleteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: FileDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FileDeleteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FileDeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FileDeleteResponse;
}

/** Represents a DeleteUndocumentedFilesRequest. */
export class DeleteUndocumentedFilesRequest implements IDeleteUndocumentedFilesRequest {

    /**
     * Constructs a new DeleteUndocumentedFilesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeleteUndocumentedFilesRequest);

    /**
     * Encodes the specified DeleteUndocumentedFilesRequest message. Does not implicitly {@link DeleteUndocumentedFilesRequest.verify|verify} messages.
     * @param message DeleteUndocumentedFilesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: DeleteUndocumentedFilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteUndocumentedFilesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteUndocumentedFilesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeleteUndocumentedFilesRequest;
}

/** Represents a File. */
export class File implements IFile {

    /**
     * Constructs a new File.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFile);

    /** File path. */
    public path: string;

    /** File humanize_size. */
    public humanize_size: string;

    /** File size. */
    public size: number;

    /** File upload_by. */
    public upload_by: string;

    /**
     * Encodes the specified File message. Does not implicitly {@link File.verify|verify} messages.
     * @param message File message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: File, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a File message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns File
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): File;
}

/** Represents a DeleteUndocumentedFilesResponse. */
export class DeleteUndocumentedFilesResponse implements IDeleteUndocumentedFilesResponse {

    /**
     * Constructs a new DeleteUndocumentedFilesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeleteUndocumentedFilesResponse);

    /** DeleteUndocumentedFilesResponse items. */
    public items: File[];

    /**
     * Encodes the specified DeleteUndocumentedFilesResponse message. Does not implicitly {@link DeleteUndocumentedFilesResponse.verify|verify} messages.
     * @param message DeleteUndocumentedFilesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: DeleteUndocumentedFilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeleteUndocumentedFilesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteUndocumentedFilesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeleteUndocumentedFilesResponse;
}

/** Represents a DiskInfoRequest. */
export class DiskInfoRequest implements IDiskInfoRequest {

    /**
     * Constructs a new DiskInfoRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDiskInfoRequest);

    /**
     * Encodes the specified DiskInfoRequest message. Does not implicitly {@link DiskInfoRequest.verify|verify} messages.
     * @param message DiskInfoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: DiskInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DiskInfoRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DiskInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DiskInfoRequest;
}

/** Represents a DiskInfoResponse. */
export class DiskInfoResponse implements IDiskInfoResponse {

    /**
     * Constructs a new DiskInfoResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDiskInfoResponse);

    /** DiskInfoResponse usage. */
    public usage: number;

    /** DiskInfoResponse humanize_usage. */
    public humanize_usage: string;

    /**
     * Encodes the specified DiskInfoResponse message. Does not implicitly {@link DiskInfoResponse.verify|verify} messages.
     * @param message DiskInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: DiskInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DiskInfoResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DiskInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DiskInfoResponse;
}

/** Represents a FileListRequest. */
export class FileListRequest implements IFileListRequest {

    /**
     * Constructs a new FileListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFileListRequest);

    /** FileListRequest page. */
    public page: number;

    /** FileListRequest page_size. */
    public page_size: number;

    /** FileListRequest without_deleted. */
    public without_deleted: boolean;

    /**
     * Encodes the specified FileListRequest message. Does not implicitly {@link FileListRequest.verify|verify} messages.
     * @param message FileListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: FileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FileListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FileListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FileListRequest;
}

/** Represents a FileListResponse. */
export class FileListResponse implements IFileListResponse {

    /**
     * Constructs a new FileListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFileListResponse);

    /** FileListResponse page. */
    public page: number;

    /** FileListResponse page_size. */
    public page_size: number;

    /** FileListResponse items. */
    public items: FileModel[];

    /** FileListResponse count. */
    public count: number;

    /**
     * Encodes the specified FileListResponse message. Does not implicitly {@link FileListResponse.verify|verify} messages.
     * @param message FileListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: FileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FileListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FileListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FileListResponse;
}

/** Represents a FileSvc */
export class FileSvc extends $protobuf.rpc.Service {

    /**
     * Constructs a new FileSvc service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls List.
     * @param request FileListRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and FileListResponse
     */
    public list(request: FileListRequest, callback: FileSvc.ListCallback): void;

    /**
     * Calls List.
     * @param request FileListRequest message or plain object
     * @returns Promise
     */
    public list(request: FileListRequest): Promise<FileListResponse>;

    /**
     * Calls Delete.
     * @param request FileDeleteRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and FileDeleteResponse
     */
    public delete(request: FileDeleteRequest, callback: FileSvc.DeleteCallback): void;

    /**
     * Calls Delete.
     * @param request FileDeleteRequest message or plain object
     * @returns Promise
     */
    public delete(request: FileDeleteRequest): Promise<FileDeleteResponse>;

    /**
     * Calls DeleteUndocumentedFiles.
     * @param request DeleteUndocumentedFilesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and DeleteUndocumentedFilesResponse
     */
    public deleteUndocumentedFiles(request: DeleteUndocumentedFilesRequest, callback: FileSvc.DeleteUndocumentedFilesCallback): void;

    /**
     * Calls DeleteUndocumentedFiles.
     * @param request DeleteUndocumentedFilesRequest message or plain object
     * @returns Promise
     */
    public deleteUndocumentedFiles(request: DeleteUndocumentedFilesRequest): Promise<DeleteUndocumentedFilesResponse>;

    /**
     * Calls DiskInfo.
     * @param request DiskInfoRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and DiskInfoResponse
     */
    public diskInfo(request: DiskInfoRequest, callback: FileSvc.DiskInfoCallback): void;

    /**
     * Calls DiskInfo.
     * @param request DiskInfoRequest message or plain object
     * @returns Promise
     */
    public diskInfo(request: DiskInfoRequest): Promise<DiskInfoResponse>;
}

export namespace FileSvc {

    /**
     * Callback as used by {@link FileSvc#list}.
     * @param error Error, if any
     * @param [response] FileListResponse
     */
    type ListCallback = (error: (Error|null), response?: FileListResponse) => void;

    /**
     * Callback as used by {@link FileSvc#delete_}.
     * @param error Error, if any
     * @param [response] FileDeleteResponse
     */
    type DeleteCallback = (error: (Error|null), response?: FileDeleteResponse) => void;

    /**
     * Callback as used by {@link FileSvc#deleteUndocumentedFiles}.
     * @param error Error, if any
     * @param [response] DeleteUndocumentedFilesResponse
     */
    type DeleteUndocumentedFilesCallback = (error: (Error|null), response?: DeleteUndocumentedFilesResponse) => void;

    /**
     * Callback as used by {@link FileSvc#diskInfo}.
     * @param error Error, if any
     * @param [response] DiskInfoResponse
     */
    type DiskInfoCallback = (error: (Error|null), response?: DiskInfoResponse) => void;
}

/** Represents a MetricsTopPodRequest. */
export class MetricsTopPodRequest implements IMetricsTopPodRequest {

    /**
     * Constructs a new MetricsTopPodRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMetricsTopPodRequest);

    /** MetricsTopPodRequest cluster_id. */
    public cluster_id: number;

    /** MetricsTopPodRequest namespace. */
    public namespace: string;

    /** MetricsTopPodRequest pod. */
    public pod: string;

    /**
     * Encodes the specified MetricsTopPodRequest message. Does not implicitly {@link MetricsTopPodRequest.verify|verify} messages.
     * @param message MetricsTopPodRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: MetricsTopPodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MetricsTopPodRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MetricsTopPodRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MetricsTopPodRequest;
}

/** Represents a MetricsTopPodResponse. */
export class MetricsTopPodResponse implements IMetricsTopPodResponse {

    /**
     * Constructs a new MetricsTopPodResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMetricsTopPodResponse);

    /** MetricsTopPodResponse cpu. */
    public cpu: number;

    /** MetricsTopPodResponse memory. */
    public memory: number;

    /** MetricsTopPodResponse humanize_cpu. */
    public humanize_cpu: string;

    /** MetricsTopPodResponse humanize_memory. */
    public humanize_memory: string;

    /** MetricsTopPodResponse time. */
    public time: string;

    /** MetricsTopPodResponse length. */
    public length: number;

    /**
     * Encodes the specified MetricsTopPodResponse message. Does not implicitly {@link MetricsTopPodResponse.verify|verify} messages.
     * @param message MetricsTopPodResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: MetricsTopPodResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MetricsTopPodResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MetricsTopPodResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MetricsTopPodResponse;
}

/** Represents a Metrics */
export class Metrics extends $protobuf.rpc.Service {

    /**
     * Constructs a new Metrics service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls TopPod.
     * @param request MetricsTopPodRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and MetricsTopPodResponse
     */
    public topPod(request: MetricsTopPodRequest, callback: Metrics.TopPodCallback): void;

    /**
     * Calls TopPod.
     * @param request MetricsTopPodRequest message or plain object
     * @returns Promise
     */
    public topPod(request: MetricsTopPodRequest): Promise<MetricsTopPodResponse>;

    /**
     * Calls StreamTopPod.
     * @param request MetricsTopPodRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and MetricsTopPodResponse
     */
    public streamTopPod(request: MetricsTopPodRequest, callback: Metrics.StreamTopPodCallback): void;

    /**
     * Calls StreamTopPod.
     * @param request MetricsTopPodRequest message or plain object
     * @returns Promise
     */
    public streamTopPod(request: MetricsTopPodRequest): Promise<MetricsTopPodResponse>;
}

export namespace Metrics {

    /**
     * Callback as used by {@link Metrics#topPod}.
     * @param error Error, if any
     * @param [response] MetricsTopPodResponse
     */
    type TopPodCallback = (error: (Error|null), response?: MetricsTopPodResponse) => void;

    /**
     * Callback as used by {@link Metrics#streamTopPod}.
     * @param error Error, if any
     * @param [response] MetricsTopPodResponse
     */
    type StreamTopPodCallback = (error: (Error|null), response?: MetricsTopPodResponse) => void;
}

/** Represents a ClusterModel. */
export class ClusterModel implements IClusterModel {

    /**
     * Constructs a new ClusterModel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClusterModel);

    /** ClusterModel id. */
    public id: number;

    /** ClusterModel name. */
    public name: string;

    /** ClusterModel kube_config. */
    public kube_config: string;

    /** ClusterModel api_server_url. */
    public api_server_url: string;

    /** ClusterModel created_at. */
    public created_at: string;

    /** ClusterModel updated_at. */
    public updated_at: string;

    /** ClusterModel deleted_at. */
    public deleted_at: string;

    /**
     * Encodes the specified ClusterModel message. Does not implicitly {@link ClusterModel.verify|verify} messages.
     * @param message ClusterModel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ClusterModel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClusterModel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClusterModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClusterModel;
}

/** Represents a CardModel. */
export class CardModel implements ICardModel {

    /**
     * Constructs a new CardModel.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardModel);

    /** CardModel id. */
    public id: number;

    /** CardModel type. */
    public type: string;

    /** CardModel namespace. */
    public namespace: string;

    /** CardModel name. */
    public name: string;

    /** CardModel cluster_id. */
    public cluster_id: number;

    /** CardModel created_at. */
    public created_at: string;

    /** CardModel updated_at. */
    public updated_at: string;

    /** CardModel deleted_at. */
    public deleted_at: string;

    /**
     * Encodes the specified CardModel message. Does not implicitly {@link CardModel.verify|verify} messages.
     * @param message CardModel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: CardModel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardModel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardModel;
}

/** Represents a FileModel. */
export class FileModel implements IFileModel {

    /**
     * Constructs a new FileModel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFileModel);

    /** FileModel id. */
    public id: number;

    /** FileModel path. */
    public path: string;

    /** FileModel size. */
    public size: number;

    /** FileModel username. */
    public username: string;

    /** FileModel namespace. */
    public namespace: string;

    /** FileModel pod. */
    public pod: string;

    /** FileModel container. */
    public container: string;

    /** FileModel container_path. */
    public container_path: string;

    /** FileModel created_at. */
    public created_at: string;

    /** FileModel updated_at. */
    public updated_at: string;

    /** FileModel deleted_at. */
    public deleted_at: string;

    /** FileModel is_deleted. */
    public is_deleted: boolean;

    /**
     * Encodes the specified FileModel message. Does not implicitly {@link FileModel.verify|verify} messages.
     * @param message FileModel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: FileModel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FileModel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FileModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FileModel;
}

/** Represents a BackgroundRequest. */
export class BackgroundRequest implements IBackgroundRequest {

    /**
     * Constructs a new BackgroundRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBackgroundRequest);

    /** BackgroundRequest random. */
    public random: boolean;

    /**
     * Encodes the specified BackgroundRequest message. Does not implicitly {@link BackgroundRequest.verify|verify} messages.
     * @param message BackgroundRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: BackgroundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BackgroundRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BackgroundRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BackgroundRequest;
}

/** Represents a BackgroundResponse. */
export class BackgroundResponse implements IBackgroundResponse {

    /**
     * Constructs a new BackgroundResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBackgroundResponse);

    /** BackgroundResponse url. */
    public url: string;

    /** BackgroundResponse copyright. */
    public copyright: string;

    /**
     * Encodes the specified BackgroundResponse message. Does not implicitly {@link BackgroundResponse.verify|verify} messages.
     * @param message BackgroundResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: BackgroundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BackgroundResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BackgroundResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BackgroundResponse;
}

/** Represents a Picture */
export class Picture extends $protobuf.rpc.Service {

    /**
     * Constructs a new Picture service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls Background.
     * @param request BackgroundRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and BackgroundResponse
     */
    public background(request: BackgroundRequest, callback: Picture.BackgroundCallback): void;

    /**
     * Calls Background.
     * @param request BackgroundRequest message or plain object
     * @returns Promise
     */
    public background(request: BackgroundRequest): Promise<BackgroundResponse>;
}

export namespace Picture {

    /**
     * Callback as used by {@link Picture#background}.
     * @param error Error, if any
     * @param [response] BackgroundResponse
     */
    type BackgroundCallback = (error: (Error|null), response?: BackgroundResponse) => void;
}

/** Represents a VersionRequest. */
export class VersionRequest implements IVersionRequest {

    /**
     * Constructs a new VersionRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVersionRequest);

    /**
     * Encodes the specified VersionRequest message. Does not implicitly {@link VersionRequest.verify|verify} messages.
     * @param message VersionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: VersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VersionRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VersionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VersionRequest;
}

/** Represents a VersionResponse. */
export class VersionResponse implements IVersionResponse {

    /**
     * Constructs a new VersionResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVersionResponse);

    /** VersionResponse version. */
    public version: string;

    /** VersionResponse build_date. */
    public build_date: string;

    /** VersionResponse git_branch. */
    public git_branch: string;

    /** VersionResponse git_commit. */
    public git_commit: string;

    /** VersionResponse git_tag. */
    public git_tag: string;

    /** VersionResponse go_version. */
    public go_version: string;

    /** VersionResponse compiler. */
    public compiler: string;

    /** VersionResponse platform. */
    public platform: string;

    /** VersionResponse kubectl_version. */
    public kubectl_version: string;

    /** VersionResponse git_repo. */
    public git_repo: string;

    /**
     * Encodes the specified VersionResponse message. Does not implicitly {@link VersionResponse.verify|verify} messages.
     * @param message VersionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: VersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VersionResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VersionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VersionResponse;
}

/** Represents a Version */
export class Version extends $protobuf.rpc.Service {

    /**
     * Constructs a new Version service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Calls Version.
     * @param request VersionRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VersionResponse
     */
    public version(request: VersionRequest, callback: Version.VersionCallback): void;

    /**
     * Calls Version.
     * @param request VersionRequest message or plain object
     * @returns Promise
     */
    public version(request: VersionRequest): Promise<VersionResponse>;
}

export namespace Version {

    /**
     * Callback as used by {@link Version#version}.
     * @param error Error, if any
     * @param [response] VersionResponse
     */
    type VersionCallback = (error: (Error|null), response?: VersionResponse) => void;
}

/** Type enum. */
export enum Type {
    TypeUnknown = 0,
    SetUid = 1,
    InternalError = 2,
    HandleExecShell = 50,
    HandleExecShellMsg = 51,
    HandleCloseShell = 52,
    HandleAuthorize = 53
}

/** ResultType enum. */
export enum ResultType {
    ResultUnknown = 0,
    Error = 1,
    Success = 2
}

/** To enum. */
export enum To {
    ToSelf = 0,
    ToAll = 1,
    ToOthers = 2
}

/** Represents a WsRequestMetadata. */
export class WsRequestMetadata implements IWsRequestMetadata {

    /**
     * Constructs a new WsRequestMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWsRequestMetadata);

    /** WsRequestMetadata type. */
    public type: Type;

    /**
     * Encodes the specified WsRequestMetadata message. Does not implicitly {@link WsRequestMetadata.verify|verify} messages.
     * @param message WsRequestMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: WsRequestMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WsRequestMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WsRequestMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WsRequestMetadata;
}

/** Represents an AuthorizeTokenInput. */
export class AuthorizeTokenInput implements IAuthorizeTokenInput {

    /**
     * Constructs a new AuthorizeTokenInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthorizeTokenInput);

    /** AuthorizeTokenInput type. */
    public type: Type;

    /** AuthorizeTokenInput token. */
    public token: string;

    /**
     * Encodes the specified AuthorizeTokenInput message. Does not implicitly {@link AuthorizeTokenInput.verify|verify} messages.
     * @param message AuthorizeTokenInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: AuthorizeTokenInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthorizeTokenInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthorizeTokenInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthorizeTokenInput;
}

/** Represents a TerminalMessage. */
export class TerminalMessage implements ITerminalMessage {

    /**
     * Constructs a new TerminalMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITerminalMessage);

    /** TerminalMessage op. */
    public op: string;

    /** TerminalMessage data. */
    public data: string;

    /** TerminalMessage session_id. */
    public session_id: string;

    /** TerminalMessage rows. */
    public rows: number;

    /** TerminalMessage cols. */
    public cols: number;

    /**
     * Encodes the specified TerminalMessage message. Does not implicitly {@link TerminalMessage.verify|verify} messages.
     * @param message TerminalMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: TerminalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TerminalMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TerminalMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TerminalMessage;
}

/** Represents a TerminalMessageInput. */
export class TerminalMessageInput implements ITerminalMessageInput {

    /**
     * Constructs a new TerminalMessageInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITerminalMessageInput);

    /** TerminalMessageInput type. */
    public type: Type;

    /** TerminalMessageInput message. */
    public message?: (TerminalMessage|null);

    /**
     * Encodes the specified TerminalMessageInput message. Does not implicitly {@link TerminalMessageInput.verify|verify} messages.
     * @param message TerminalMessageInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: TerminalMessageInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TerminalMessageInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TerminalMessageInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TerminalMessageInput;
}

/** Represents a WsHandleExecShellInput. */
export class WsHandleExecShellInput implements IWsHandleExecShellInput {

    /**
     * Constructs a new WsHandleExecShellInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWsHandleExecShellInput);

    /** WsHandleExecShellInput type. */
    public type: Type;

    /** WsHandleExecShellInput cluster_id. */
    public cluster_id: number;

    /** WsHandleExecShellInput namespace. */
    public namespace: string;

    /** WsHandleExecShellInput pod. */
    public pod: string;

    /** WsHandleExecShellInput container. */
    public container: string;

    /**
     * Encodes the specified WsHandleExecShellInput message. Does not implicitly {@link WsHandleExecShellInput.verify|verify} messages.
     * @param message WsHandleExecShellInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: WsHandleExecShellInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WsHandleExecShellInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WsHandleExecShellInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WsHandleExecShellInput;
}

/** Represents a Metadata. */
export class Metadata implements IMetadata {

    /**
     * Constructs a new Metadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMetadata);

    /** Metadata id. */
    public id: string;

    /** Metadata uid. */
    public uid: string;

    /** Metadata slug. */
    public slug: string;

    /** Metadata type. */
    public type: Type;

    /** Metadata end. */
    public end: boolean;

    /** Metadata result. */
    public result: ResultType;

    /** Metadata to. */
    public to: To;

    /** Metadata data. */
    public data: string;

    /**
     * Encodes the specified Metadata message. Does not implicitly {@link Metadata.verify|verify} messages.
     * @param message Metadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Metadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Metadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Metadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Metadata;
}

/** Represents a Container. */
export class Container implements IContainer {

    /**
     * Constructs a new Container.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContainer);

    /** Container namespace. */
    public namespace: string;

    /** Container pod. */
    public pod: string;

    /** Container container. */
    public container: string;

    /** Container cluster_id. */
    public cluster_id: number;

    /**
     * Encodes the specified Container message. Does not implicitly {@link Container.verify|verify} messages.
     * @param message Container message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Container, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Container message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Container
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Container;
}

/** Represents a WsMetadataResponse. */
export class WsMetadataResponse implements IWsMetadataResponse {

    /**
     * Constructs a new WsMetadataResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWsMetadataResponse);

    /** WsMetadataResponse metadata. */
    public metadata?: (Metadata|null);

    /**
     * Encodes the specified WsMetadataResponse message. Does not implicitly {@link WsMetadataResponse.verify|verify} messages.
     * @param message WsMetadataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: WsMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WsMetadataResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WsMetadataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WsMetadataResponse;
}

/** Represents a WsHandleShellResponse. */
export class WsHandleShellResponse implements IWsHandleShellResponse {

    /**
     * Constructs a new WsHandleShellResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWsHandleShellResponse);

    /** WsHandleShellResponse metadata. */
    public metadata?: (Metadata|null);

    /** WsHandleShellResponse terminal_message. */
    public terminal_message?: (TerminalMessage|null);

    /** WsHandleShellResponse container. */
    public container?: (Container|null);

    /**
     * Encodes the specified WsHandleShellResponse message. Does not implicitly {@link WsHandleShellResponse.verify|verify} messages.
     * @param message WsHandleShellResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: WsHandleShellResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WsHandleShellResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WsHandleShellResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WsHandleShellResponse;
}
