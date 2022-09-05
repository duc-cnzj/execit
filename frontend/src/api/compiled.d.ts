import * as $protobuf from "protobufjs";
/** Namespace auth. */
export namespace auth {

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest username */
        username?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginRequest);

        /** LoginRequest username. */
        public username: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link auth.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.LoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginRequest;
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse token */
        token?: (string|null);

        /** LoginResponse expires_in */
        expires_in?: (number|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginResponse);

        /** LoginResponse token. */
        public token: string;

        /** LoginResponse expires_in. */
        public expires_in: number;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link auth.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.LoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginResponse;
    }

    /** Properties of an ExchangeRequest. */
    interface IExchangeRequest {

        /** ExchangeRequest code */
        code?: (string|null);
    }

    /** Represents an ExchangeRequest. */
    class ExchangeRequest implements IExchangeRequest {

        /**
         * Constructs a new ExchangeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IExchangeRequest);

        /** ExchangeRequest code. */
        public code: string;

        /**
         * Encodes the specified ExchangeRequest message. Does not implicitly {@link auth.ExchangeRequest.verify|verify} messages.
         * @param message ExchangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ExchangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.ExchangeRequest;
    }

    /** Properties of an ExchangeResponse. */
    interface IExchangeResponse {

        /** ExchangeResponse token */
        token?: (string|null);

        /** ExchangeResponse expires_in */
        expires_in?: (number|null);
    }

    /** Represents an ExchangeResponse. */
    class ExchangeResponse implements IExchangeResponse {

        /**
         * Constructs a new ExchangeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IExchangeResponse);

        /** ExchangeResponse token. */
        public token: string;

        /** ExchangeResponse expires_in. */
        public expires_in: number;

        /**
         * Encodes the specified ExchangeResponse message. Does not implicitly {@link auth.ExchangeResponse.verify|verify} messages.
         * @param message ExchangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ExchangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.ExchangeResponse;
    }

    /** Properties of an InfoRequest. */
    interface IInfoRequest {
    }

    /** Represents an InfoRequest. */
    class InfoRequest implements IInfoRequest {

        /**
         * Constructs a new InfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IInfoRequest);

        /**
         * Encodes the specified InfoRequest message. Does not implicitly {@link auth.InfoRequest.verify|verify} messages.
         * @param message InfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.InfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.InfoRequest;
    }

    /** Properties of a Permission. */
    interface IPermission {

        /** Permission permission */
        permission?: (rbac.Permission|null);

        /** Permission items */
        items?: (string[]|null);
    }

    /** Represents a Permission. */
    class Permission implements IPermission {

        /**
         * Constructs a new Permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IPermission);

        /** Permission permission. */
        public permission: rbac.Permission;

        /** Permission items. */
        public items: string[];

        /**
         * Encodes the specified Permission message. Does not implicitly {@link auth.Permission.verify|verify} messages.
         * @param message Permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.Permission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.Permission;
    }

    /** Properties of an InfoResponse. */
    interface IInfoResponse {

        /** InfoResponse id */
        id?: (string|null);

        /** InfoResponse avatar */
        avatar?: (string|null);

        /** InfoResponse name */
        name?: (string|null);

        /** InfoResponse email */
        email?: (string|null);

        /** InfoResponse logout_url */
        logout_url?: (string|null);

        /** InfoResponse is_admin */
        is_admin?: (boolean|null);

        /** InfoResponse permissions */
        permissions?: (auth.Permission[]|null);
    }

    /** Represents an InfoResponse. */
    class InfoResponse implements IInfoResponse {

        /**
         * Constructs a new InfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IInfoResponse);

        /** InfoResponse id. */
        public id: string;

        /** InfoResponse avatar. */
        public avatar: string;

        /** InfoResponse name. */
        public name: string;

        /** InfoResponse email. */
        public email: string;

        /** InfoResponse logout_url. */
        public logout_url: string;

        /** InfoResponse is_admin. */
        public is_admin: boolean;

        /** InfoResponse permissions. */
        public permissions: auth.Permission[];

        /**
         * Encodes the specified InfoResponse message. Does not implicitly {@link auth.InfoResponse.verify|verify} messages.
         * @param message InfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.InfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.InfoResponse;
    }

    /** Properties of a SettingsRequest. */
    interface ISettingsRequest {
    }

    /** Represents a SettingsRequest. */
    class SettingsRequest implements ISettingsRequest {

        /**
         * Constructs a new SettingsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ISettingsRequest);

        /**
         * Encodes the specified SettingsRequest message. Does not implicitly {@link auth.SettingsRequest.verify|verify} messages.
         * @param message SettingsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.SettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.SettingsRequest;
    }

    /** Properties of a SettingsResponse. */
    interface ISettingsResponse {

        /** SettingsResponse items */
        items?: (auth.SettingsResponse.OidcSetting[]|null);
    }

    /** Represents a SettingsResponse. */
    class SettingsResponse implements ISettingsResponse {

        /**
         * Constructs a new SettingsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ISettingsResponse);

        /** SettingsResponse items. */
        public items: auth.SettingsResponse.OidcSetting[];

        /**
         * Encodes the specified SettingsResponse message. Does not implicitly {@link auth.SettingsResponse.verify|verify} messages.
         * @param message SettingsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.SettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.SettingsResponse;
    }

    namespace SettingsResponse {

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
            constructor(properties?: auth.SettingsResponse.IOidcSetting);

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
             * Encodes the specified OidcSetting message. Does not implicitly {@link auth.SettingsResponse.OidcSetting.verify|verify} messages.
             * @param message OidcSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: auth.SettingsResponse.OidcSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OidcSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OidcSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.SettingsResponse.OidcSetting;
        }
    }

    /** Represents an Auth */
    class Auth extends $protobuf.rpc.Service {

        /**
         * Constructs a new Auth service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public login(request: auth.LoginRequest, callback: auth.Auth.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public login(request: auth.LoginRequest): Promise<auth.LoginResponse>;

        /**
         * Calls Info.
         * @param request InfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and InfoResponse
         */
        public info(request: auth.InfoRequest, callback: auth.Auth.InfoCallback): void;

        /**
         * Calls Info.
         * @param request InfoRequest message or plain object
         * @returns Promise
         */
        public info(request: auth.InfoRequest): Promise<auth.InfoResponse>;

        /**
         * Calls Settings.
         * @param request SettingsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SettingsResponse
         */
        public settings(request: auth.SettingsRequest, callback: auth.Auth.SettingsCallback): void;

        /**
         * Calls Settings.
         * @param request SettingsRequest message or plain object
         * @returns Promise
         */
        public settings(request: auth.SettingsRequest): Promise<auth.SettingsResponse>;

        /**
         * Calls Exchange.
         * @param request ExchangeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ExchangeResponse
         */
        public exchange(request: auth.ExchangeRequest, callback: auth.Auth.ExchangeCallback): void;

        /**
         * Calls Exchange.
         * @param request ExchangeRequest message or plain object
         * @returns Promise
         */
        public exchange(request: auth.ExchangeRequest): Promise<auth.ExchangeResponse>;
    }

    namespace Auth {

        /**
         * Callback as used by {@link auth.Auth#login}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type LoginCallback = (error: (Error|null), response?: auth.LoginResponse) => void;

        /**
         * Callback as used by {@link auth.Auth#info}.
         * @param error Error, if any
         * @param [response] InfoResponse
         */
        type InfoCallback = (error: (Error|null), response?: auth.InfoResponse) => void;

        /**
         * Callback as used by {@link auth.Auth#settings}.
         * @param error Error, if any
         * @param [response] SettingsResponse
         */
        type SettingsCallback = (error: (Error|null), response?: auth.SettingsResponse) => void;

        /**
         * Callback as used by {@link auth.Auth#exchange}.
         * @param error Error, if any
         * @param [response] ExchangeResponse
         */
        type ExchangeCallback = (error: (Error|null), response?: auth.ExchangeResponse) => void;
    }
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

/** Namespace card. */
export namespace card {

    /** Properties of an AllRequest. */
    interface IAllRequest {

        /** AllRequest owned */
        owned?: (boolean|null);
    }

    /** Represents an AllRequest. */
    class AllRequest implements IAllRequest {

        /**
         * Constructs a new AllRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IAllRequest);

        /** AllRequest owned. */
        public owned: boolean;

        /**
         * Encodes the specified AllRequest message. Does not implicitly {@link card.AllRequest.verify|verify} messages.
         * @param message AllRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.AllRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.AllRequest;
    }

    /** Properties of an AllResponse. */
    interface IAllResponse {

        /** AllResponse items */
        items?: (card.ItemsList[]|null);
    }

    /** Represents an AllResponse. */
    class AllResponse implements IAllResponse {

        /**
         * Constructs a new AllResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IAllResponse);

        /** AllResponse items. */
        public items: card.ItemsList[];

        /**
         * Encodes the specified AllResponse message. Does not implicitly {@link card.AllResponse.verify|verify} messages.
         * @param message AllResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.AllResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.AllResponse;
    }

    /** Properties of a ListRequest. */
    interface IListRequest {

        /** ListRequest page */
        page?: (number|null);

        /** ListRequest page_size */
        page_size?: (number|null);
    }

    /** Represents a ListRequest. */
    class ListRequest implements IListRequest {

        /**
         * Constructs a new ListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IListRequest);

        /** ListRequest page. */
        public page: number;

        /** ListRequest page_size. */
        public page_size: number;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link card.ListRequest.verify|verify} messages.
         * @param message ListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.ListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.ListRequest;
    }

    /** Properties of an Items. */
    interface IItems {

        /** Items id */
        id?: (number|null);

        /** Items cluster_id */
        cluster_id?: (number|null);

        /** Items namespace */
        namespace?: (string|null);

        /** Items name */
        name?: (string|null);

        /** Items type */
        type?: (string|null);

        /** Items cluster_name */
        cluster_name?: (string|null);

        /** Items items */
        items?: (container.Item[]|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IItems);

        /** Items id. */
        public id: number;

        /** Items cluster_id. */
        public cluster_id: number;

        /** Items namespace. */
        public namespace: string;

        /** Items name. */
        public name: string;

        /** Items type. */
        public type: string;

        /** Items cluster_name. */
        public cluster_name: string;

        /** Items items. */
        public items: container.Item[];

        /**
         * Encodes the specified Items message. Does not implicitly {@link card.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.Items, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.Items;
    }

    /** Properties of an ItemsList. */
    interface IItemsList {

        /** ItemsList cluster_id */
        cluster_id?: (number|null);

        /** ItemsList namespace */
        namespace?: (string|null);

        /** ItemsList cluster_name */
        cluster_name?: (string|null);

        /** ItemsList items */
        items?: (card.Items[]|null);
    }

    /** Represents an ItemsList. */
    class ItemsList implements IItemsList {

        /**
         * Constructs a new ItemsList.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IItemsList);

        /** ItemsList cluster_id. */
        public cluster_id: number;

        /** ItemsList namespace. */
        public namespace: string;

        /** ItemsList cluster_name. */
        public cluster_name: string;

        /** ItemsList items. */
        public items: card.Items[];

        /**
         * Encodes the specified ItemsList message. Does not implicitly {@link card.ItemsList.verify|verify} messages.
         * @param message ItemsList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.ItemsList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemsList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.ItemsList;
    }

    /** Properties of a ListResponse. */
    interface IListResponse {

        /** ListResponse page */
        page?: (number|null);

        /** ListResponse page_size */
        page_size?: (number|null);

        /** ListResponse count */
        count?: (number|null);

        /** ListResponse items */
        items?: (card.Items[]|null);
    }

    /** Represents a ListResponse. */
    class ListResponse implements IListResponse {

        /**
         * Constructs a new ListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IListResponse);

        /** ListResponse page. */
        public page: number;

        /** ListResponse page_size. */
        public page_size: number;

        /** ListResponse count. */
        public count: number;

        /** ListResponse items. */
        public items: card.Items[];

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link card.ListResponse.verify|verify} messages.
         * @param message ListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.ListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.ListResponse;
    }

    /** Properties of a CreateRequest. */
    interface ICreateRequest {

        /** CreateRequest cluster_id */
        cluster_id?: (number|null);

        /** CreateRequest namespace */
        namespace?: (string|null);

        /** CreateRequest name */
        name?: (string|null);

        /** CreateRequest type */
        type?: (string|null);
    }

    /** Represents a CreateRequest. */
    class CreateRequest implements ICreateRequest {

        /**
         * Constructs a new CreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.ICreateRequest);

        /** CreateRequest cluster_id. */
        public cluster_id: number;

        /** CreateRequest namespace. */
        public namespace: string;

        /** CreateRequest name. */
        public name: string;

        /** CreateRequest type. */
        public type: string;

        /**
         * Encodes the specified CreateRequest message. Does not implicitly {@link card.CreateRequest.verify|verify} messages.
         * @param message CreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.CreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.CreateRequest;
    }

    /** Properties of a CreateResponse. */
    interface ICreateResponse {

        /** CreateResponse id */
        id?: (number|null);

        /** CreateResponse type */
        type?: (string|null);

        /** CreateResponse namespace */
        namespace?: (string|null);

        /** CreateResponse name */
        name?: (string|null);

        /** CreateResponse cluster_id */
        cluster_id?: (number|null);

        /** CreateResponse created_at */
        created_at?: (string|null);

        /** CreateResponse updated_at */
        updated_at?: (string|null);

        /** CreateResponse deleted_at */
        deleted_at?: (string|null);
    }

    /** Represents a CreateResponse. */
    class CreateResponse implements ICreateResponse {

        /**
         * Constructs a new CreateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.ICreateResponse);

        /** CreateResponse id. */
        public id: number;

        /** CreateResponse type. */
        public type: string;

        /** CreateResponse namespace. */
        public namespace: string;

        /** CreateResponse name. */
        public name: string;

        /** CreateResponse cluster_id. */
        public cluster_id: number;

        /** CreateResponse created_at. */
        public created_at: string;

        /** CreateResponse updated_at. */
        public updated_at: string;

        /** CreateResponse deleted_at. */
        public deleted_at: string;

        /**
         * Encodes the specified CreateResponse message. Does not implicitly {@link card.CreateResponse.verify|verify} messages.
         * @param message CreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.CreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.CreateResponse;
    }

    /** Properties of a ShowRequest. */
    interface IShowRequest {

        /** ShowRequest card_id */
        card_id?: (number|null);
    }

    /** Represents a ShowRequest. */
    class ShowRequest implements IShowRequest {

        /**
         * Constructs a new ShowRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IShowRequest);

        /** ShowRequest card_id. */
        public card_id: number;

        /**
         * Encodes the specified ShowRequest message. Does not implicitly {@link card.ShowRequest.verify|verify} messages.
         * @param message ShowRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.ShowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShowRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShowRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.ShowRequest;
    }

    /** Properties of a ShowResponse. */
    interface IShowResponse {

        /** ShowResponse id */
        id?: (number|null);

        /** ShowResponse type */
        type?: (string|null);

        /** ShowResponse namespace */
        namespace?: (string|null);

        /** ShowResponse name */
        name?: (string|null);

        /** ShowResponse cluster_id */
        cluster_id?: (number|null);

        /** ShowResponse created_at */
        created_at?: (string|null);

        /** ShowResponse updated_at */
        updated_at?: (string|null);

        /** ShowResponse deleted_at */
        deleted_at?: (string|null);

        /** ShowResponse items */
        items?: (container.Item[]|null);
    }

    /** Represents a ShowResponse. */
    class ShowResponse implements IShowResponse {

        /**
         * Constructs a new ShowResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IShowResponse);

        /** ShowResponse id. */
        public id: number;

        /** ShowResponse type. */
        public type: string;

        /** ShowResponse namespace. */
        public namespace: string;

        /** ShowResponse name. */
        public name: string;

        /** ShowResponse cluster_id. */
        public cluster_id: number;

        /** ShowResponse created_at. */
        public created_at: string;

        /** ShowResponse updated_at. */
        public updated_at: string;

        /** ShowResponse deleted_at. */
        public deleted_at: string;

        /** ShowResponse items. */
        public items: container.Item[];

        /**
         * Encodes the specified ShowResponse message. Does not implicitly {@link card.ShowResponse.verify|verify} messages.
         * @param message ShowResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.ShowResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShowResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.ShowResponse;
    }

    /** Properties of a DeleteRequest. */
    interface IDeleteRequest {

        /** DeleteRequest card_id */
        card_id?: (number|null);
    }

    /** Represents a DeleteRequest. */
    class DeleteRequest implements IDeleteRequest {

        /**
         * Constructs a new DeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IDeleteRequest);

        /** DeleteRequest card_id. */
        public card_id: number;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link card.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.DeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.DeleteRequest;
    }

    /** Properties of a DeleteResponse. */
    interface IDeleteResponse {
    }

    /** Represents a DeleteResponse. */
    class DeleteResponse implements IDeleteResponse {

        /**
         * Constructs a new DeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IDeleteResponse);

        /**
         * Encodes the specified DeleteResponse message. Does not implicitly {@link card.DeleteResponse.verify|verify} messages.
         * @param message DeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.DeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.DeleteResponse;
    }

    /** Represents a CardSvc */
    class CardSvc extends $protobuf.rpc.Service {

        /**
         * Constructs a new CardSvc service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls All.
         * @param request AllRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AllResponse
         */
        public all(request: card.AllRequest, callback: card.CardSvc.AllCallback): void;

        /**
         * Calls All.
         * @param request AllRequest message or plain object
         * @returns Promise
         */
        public all(request: card.AllRequest): Promise<card.AllResponse>;

        /**
         * Calls Create.
         * @param request CreateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateResponse
         */
        public create(request: card.CreateRequest, callback: card.CardSvc.CreateCallback): void;

        /**
         * Calls Create.
         * @param request CreateRequest message or plain object
         * @returns Promise
         */
        public create(request: card.CreateRequest): Promise<card.CreateResponse>;

        /**
         * Calls Show.
         * @param request ShowRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ShowResponse
         */
        public show(request: card.ShowRequest, callback: card.CardSvc.ShowCallback): void;

        /**
         * Calls Show.
         * @param request ShowRequest message or plain object
         * @returns Promise
         */
        public show(request: card.ShowRequest): Promise<card.ShowResponse>;

        /**
         * Calls Delete.
         * @param request DeleteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteResponse
         */
        public delete(request: card.DeleteRequest, callback: card.CardSvc.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request DeleteRequest message or plain object
         * @returns Promise
         */
        public delete(request: card.DeleteRequest): Promise<card.DeleteResponse>;

        /**
         * Calls AllContainers.
         * @param request AllContainersRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AllContainersResponse
         */
        public allContainers(request: card.AllContainersRequest, callback: card.CardSvc.AllContainersCallback): void;

        /**
         * Calls AllContainers.
         * @param request AllContainersRequest message or plain object
         * @returns Promise
         */
        public allContainers(request: card.AllContainersRequest): Promise<card.AllContainersResponse>;
    }

    namespace CardSvc {

        /**
         * Callback as used by {@link card.CardSvc#all}.
         * @param error Error, if any
         * @param [response] AllResponse
         */
        type AllCallback = (error: (Error|null), response?: card.AllResponse) => void;

        /**
         * Callback as used by {@link card.CardSvc#create}.
         * @param error Error, if any
         * @param [response] CreateResponse
         */
        type CreateCallback = (error: (Error|null), response?: card.CreateResponse) => void;

        /**
         * Callback as used by {@link card.CardSvc#show}.
         * @param error Error, if any
         * @param [response] ShowResponse
         */
        type ShowCallback = (error: (Error|null), response?: card.ShowResponse) => void;

        /**
         * Callback as used by {@link card.CardSvc#delete_}.
         * @param error Error, if any
         * @param [response] DeleteResponse
         */
        type DeleteCallback = (error: (Error|null), response?: card.DeleteResponse) => void;

        /**
         * Callback as used by {@link card.CardSvc#allContainers}.
         * @param error Error, if any
         * @param [response] AllContainersResponse
         */
        type AllContainersCallback = (error: (Error|null), response?: card.AllContainersResponse) => void;
    }

    /** Properties of an AllContainersRequest. */
    interface IAllContainersRequest {

        /** AllContainersRequest card_id */
        card_id?: (number|null);
    }

    /** Represents an AllContainersRequest. */
    class AllContainersRequest implements IAllContainersRequest {

        /**
         * Constructs a new AllContainersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IAllContainersRequest);

        /** AllContainersRequest card_id. */
        public card_id: number;

        /**
         * Encodes the specified AllContainersRequest message. Does not implicitly {@link card.AllContainersRequest.verify|verify} messages.
         * @param message AllContainersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.AllContainersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllContainersRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllContainersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.AllContainersRequest;
    }

    /** Properties of an AllContainersResponse. */
    interface IAllContainersResponse {

        /** AllContainersResponse items */
        items?: (container.Item[]|null);
    }

    /** Represents an AllContainersResponse. */
    class AllContainersResponse implements IAllContainersResponse {

        /**
         * Constructs a new AllContainersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: card.IAllContainersResponse);

        /** AllContainersResponse items. */
        public items: container.Item[];

        /**
         * Encodes the specified AllContainersResponse message. Does not implicitly {@link card.AllContainersResponse.verify|verify} messages.
         * @param message AllContainersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: card.AllContainersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllContainersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllContainersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card.AllContainersResponse;
    }
}

/** Namespace cluster. */
export namespace cluster {

    /** Properties of a ListRequest. */
    interface IListRequest {

        /** ListRequest page */
        page?: (number|null);

        /** ListRequest page_size */
        page_size?: (number|null);
    }

    /** Represents a ListRequest. */
    class ListRequest implements IListRequest {

        /**
         * Constructs a new ListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.IListRequest);

        /** ListRequest page. */
        public page: number;

        /** ListRequest page_size. */
        public page_size: number;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link cluster.ListRequest.verify|verify} messages.
         * @param message ListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.ListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.ListRequest;
    }

    /** Properties of a ListResponse. */
    interface IListResponse {

        /** ListResponse page */
        page?: (number|null);

        /** ListResponse page_size */
        page_size?: (number|null);

        /** ListResponse count */
        count?: (number|null);

        /** ListResponse items */
        items?: (model.ClusterModel[]|null);
    }

    /** Represents a ListResponse. */
    class ListResponse implements IListResponse {

        /**
         * Constructs a new ListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.IListResponse);

        /** ListResponse page. */
        public page: number;

        /** ListResponse page_size. */
        public page_size: number;

        /** ListResponse count. */
        public count: number;

        /** ListResponse items. */
        public items: model.ClusterModel[];

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link cluster.ListResponse.verify|verify} messages.
         * @param message ListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.ListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.ListResponse;
    }

    /** Properties of a CreateRequest. */
    interface ICreateRequest {

        /** CreateRequest name */
        name?: (string|null);

        /** CreateRequest kube_config */
        kube_config?: (string|null);

        /** CreateRequest namespace */
        namespace?: (string|null);
    }

    /** Represents a CreateRequest. */
    class CreateRequest implements ICreateRequest {

        /**
         * Constructs a new CreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.ICreateRequest);

        /** CreateRequest name. */
        public name: string;

        /** CreateRequest kube_config. */
        public kube_config: string;

        /** CreateRequest namespace. */
        public namespace: string;

        /**
         * Encodes the specified CreateRequest message. Does not implicitly {@link cluster.CreateRequest.verify|verify} messages.
         * @param message CreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.CreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.CreateRequest;
    }

    /** Properties of a CreateResponse. */
    interface ICreateResponse {

        /** CreateResponse id */
        id?: (number|null);

        /** CreateResponse name */
        name?: (string|null);

        /** CreateResponse created_at */
        created_at?: (string|null);

        /** CreateResponse updated_at */
        updated_at?: (string|null);

        /** CreateResponse deleted_at */
        deleted_at?: (string|null);
    }

    /** Represents a CreateResponse. */
    class CreateResponse implements ICreateResponse {

        /**
         * Constructs a new CreateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.ICreateResponse);

        /** CreateResponse id. */
        public id: number;

        /** CreateResponse name. */
        public name: string;

        /** CreateResponse created_at. */
        public created_at: string;

        /** CreateResponse updated_at. */
        public updated_at: string;

        /** CreateResponse deleted_at. */
        public deleted_at: string;

        /**
         * Encodes the specified CreateResponse message. Does not implicitly {@link cluster.CreateResponse.verify|verify} messages.
         * @param message CreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.CreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.CreateResponse;
    }

    /** Properties of a ShowRequest. */
    interface IShowRequest {

        /** ShowRequest cluster_id */
        cluster_id?: (number|null);
    }

    /** Represents a ShowRequest. */
    class ShowRequest implements IShowRequest {

        /**
         * Constructs a new ShowRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.IShowRequest);

        /** ShowRequest cluster_id. */
        public cluster_id: number;

        /**
         * Encodes the specified ShowRequest message. Does not implicitly {@link cluster.ShowRequest.verify|verify} messages.
         * @param message ShowRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.ShowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShowRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShowRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.ShowRequest;
    }

    /** Properties of a ShowResponse. */
    interface IShowResponse {

        /** ShowResponse id */
        id?: (number|null);

        /** ShowResponse name */
        name?: (string|null);

        /** ShowResponse kube_config */
        kube_config?: (string|null);

        /** ShowResponse api_server_url */
        api_server_url?: (string|null);

        /** ShowResponse created_at */
        created_at?: (string|null);

        /** ShowResponse updated_at */
        updated_at?: (string|null);

        /** ShowResponse deleted_at */
        deleted_at?: (string|null);

        /** ShowResponse items */
        items?: (cluster.Items[]|null);
    }

    /** Represents a ShowResponse. */
    class ShowResponse implements IShowResponse {

        /**
         * Constructs a new ShowResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.IShowResponse);

        /** ShowResponse id. */
        public id: number;

        /** ShowResponse name. */
        public name: string;

        /** ShowResponse kube_config. */
        public kube_config: string;

        /** ShowResponse api_server_url. */
        public api_server_url: string;

        /** ShowResponse created_at. */
        public created_at: string;

        /** ShowResponse updated_at. */
        public updated_at: string;

        /** ShowResponse deleted_at. */
        public deleted_at: string;

        /** ShowResponse items. */
        public items: cluster.Items[];

        /**
         * Encodes the specified ShowResponse message. Does not implicitly {@link cluster.ShowResponse.verify|verify} messages.
         * @param message ShowResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.ShowResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShowResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShowResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.ShowResponse;
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item namespace */
        namespace?: (string|null);

        /** Item type */
        type?: (string|null);

        /** Item name */
        name?: (string|null);

        /** Item enabled */
        enabled?: (boolean|null);

        /** Item cluster_id */
        cluster_id?: (number|null);

        /** Item card_id */
        card_id?: (number|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.IItem);

        /** Item namespace. */
        public namespace: string;

        /** Item type. */
        public type: string;

        /** Item name. */
        public name: string;

        /** Item enabled. */
        public enabled: boolean;

        /** Item cluster_id. */
        public cluster_id: number;

        /** Item card_id. */
        public card_id: number;

        /**
         * Encodes the specified Item message. Does not implicitly {@link cluster.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.Item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.Item;
    }

    /** Properties of an Items. */
    interface IItems {

        /** Items namespace */
        namespace?: (string|null);

        /** Items items */
        items?: (cluster.Item[]|null);
    }

    /** Represents an Items. */
    class Items implements IItems {

        /**
         * Constructs a new Items.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.IItems);

        /** Items namespace. */
        public namespace: string;

        /** Items items. */
        public items: cluster.Item[];

        /**
         * Encodes the specified Items message. Does not implicitly {@link cluster.Items.verify|verify} messages.
         * @param message Items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.Items, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.Items;
    }

    /** Properties of a DeleteRequest. */
    interface IDeleteRequest {

        /** DeleteRequest cluster_id */
        cluster_id?: (number|null);
    }

    /** Represents a DeleteRequest. */
    class DeleteRequest implements IDeleteRequest {

        /**
         * Constructs a new DeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.IDeleteRequest);

        /** DeleteRequest cluster_id. */
        public cluster_id: number;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link cluster.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.DeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.DeleteRequest;
    }

    /** Properties of a DeleteResponse. */
    interface IDeleteResponse {
    }

    /** Represents a DeleteResponse. */
    class DeleteResponse implements IDeleteResponse {

        /**
         * Constructs a new DeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: cluster.IDeleteResponse);

        /**
         * Encodes the specified DeleteResponse message. Does not implicitly {@link cluster.DeleteResponse.verify|verify} messages.
         * @param message DeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cluster.DeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cluster.DeleteResponse;
    }

    /** Represents a ClusterSvc */
    class ClusterSvc extends $protobuf.rpc.Service {

        /**
         * Constructs a new ClusterSvc service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls List.
         * @param request ListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListResponse
         */
        public list(request: cluster.ListRequest, callback: cluster.ClusterSvc.ListCallback): void;

        /**
         * Calls List.
         * @param request ListRequest message or plain object
         * @returns Promise
         */
        public list(request: cluster.ListRequest): Promise<cluster.ListResponse>;

        /**
         * Calls Create.
         * @param request CreateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateResponse
         */
        public create(request: cluster.CreateRequest, callback: cluster.ClusterSvc.CreateCallback): void;

        /**
         * Calls Create.
         * @param request CreateRequest message or plain object
         * @returns Promise
         */
        public create(request: cluster.CreateRequest): Promise<cluster.CreateResponse>;

        /**
         * Calls Show.
         * @param request ShowRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ShowResponse
         */
        public show(request: cluster.ShowRequest, callback: cluster.ClusterSvc.ShowCallback): void;

        /**
         * Calls Show.
         * @param request ShowRequest message or plain object
         * @returns Promise
         */
        public show(request: cluster.ShowRequest): Promise<cluster.ShowResponse>;

        /**
         * Calls Delete.
         * @param request DeleteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteResponse
         */
        public delete(request: cluster.DeleteRequest, callback: cluster.ClusterSvc.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request DeleteRequest message or plain object
         * @returns Promise
         */
        public delete(request: cluster.DeleteRequest): Promise<cluster.DeleteResponse>;
    }

    namespace ClusterSvc {

        /**
         * Callback as used by {@link cluster.ClusterSvc#list}.
         * @param error Error, if any
         * @param [response] ListResponse
         */
        type ListCallback = (error: (Error|null), response?: cluster.ListResponse) => void;

        /**
         * Callback as used by {@link cluster.ClusterSvc#create}.
         * @param error Error, if any
         * @param [response] CreateResponse
         */
        type CreateCallback = (error: (Error|null), response?: cluster.CreateResponse) => void;

        /**
         * Callback as used by {@link cluster.ClusterSvc#show}.
         * @param error Error, if any
         * @param [response] ShowResponse
         */
        type ShowCallback = (error: (Error|null), response?: cluster.ShowResponse) => void;

        /**
         * Callback as used by {@link cluster.ClusterSvc#delete_}.
         * @param error Error, if any
         * @param [response] DeleteResponse
         */
        type DeleteCallback = (error: (Error|null), response?: cluster.DeleteResponse) => void;
    }
}

/** Namespace container. */
export namespace container {

    /** Properties of an Item. */
    interface IItem {

        /** Item cluster_id */
        cluster_id?: (number|null);

        /** Item namespace */
        namespace?: (string|null);

        /** Item pod */
        pod?: (string|null);

        /** Item container */
        container?: (string|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IItem);

        /** Item cluster_id. */
        public cluster_id: number;

        /** Item namespace. */
        public namespace: string;

        /** Item pod. */
        public pod: string;

        /** Item container. */
        public container: string;

        /**
         * Encodes the specified Item message. Does not implicitly {@link container.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.Item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.Item;
    }

    /** Properties of a CopyToPodRequest. */
    interface ICopyToPodRequest {

        /** CopyToPodRequest cluster_id */
        cluster_id?: (number|null);

        /** CopyToPodRequest file_id */
        file_id?: (number|null);

        /** CopyToPodRequest namespace */
        namespace?: (string|null);

        /** CopyToPodRequest pod */
        pod?: (string|null);

        /** CopyToPodRequest container */
        container?: (string|null);
    }

    /** Represents a CopyToPodRequest. */
    class CopyToPodRequest implements ICopyToPodRequest {

        /**
         * Constructs a new CopyToPodRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.ICopyToPodRequest);

        /** CopyToPodRequest cluster_id. */
        public cluster_id: number;

        /** CopyToPodRequest file_id. */
        public file_id: number;

        /** CopyToPodRequest namespace. */
        public namespace: string;

        /** CopyToPodRequest pod. */
        public pod: string;

        /** CopyToPodRequest container. */
        public container: string;

        /**
         * Encodes the specified CopyToPodRequest message. Does not implicitly {@link container.CopyToPodRequest.verify|verify} messages.
         * @param message CopyToPodRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.CopyToPodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CopyToPodRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyToPodRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.CopyToPodRequest;
    }

    /** Properties of a CopyToPodResponse. */
    interface ICopyToPodResponse {

        /** CopyToPodResponse pod_file_path */
        pod_file_path?: (string|null);

        /** CopyToPodResponse output */
        output?: (string|null);

        /** CopyToPodResponse file_name */
        file_name?: (string|null);
    }

    /** Represents a CopyToPodResponse. */
    class CopyToPodResponse implements ICopyToPodResponse {

        /**
         * Constructs a new CopyToPodResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.ICopyToPodResponse);

        /** CopyToPodResponse pod_file_path. */
        public pod_file_path: string;

        /** CopyToPodResponse output. */
        public output: string;

        /** CopyToPodResponse file_name. */
        public file_name: string;

        /**
         * Encodes the specified CopyToPodResponse message. Does not implicitly {@link container.CopyToPodResponse.verify|verify} messages.
         * @param message CopyToPodResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.CopyToPodResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CopyToPodResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CopyToPodResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.CopyToPodResponse;
    }

    /** Properties of an ExecRequest. */
    interface IExecRequest {

        /** ExecRequest cluster_id */
        cluster_id?: (number|null);

        /** ExecRequest namespace */
        namespace?: (string|null);

        /** ExecRequest pod */
        pod?: (string|null);

        /** ExecRequest container */
        container?: (string|null);

        /** ExecRequest command */
        command?: (string[]|null);
    }

    /** Represents an ExecRequest. */
    class ExecRequest implements IExecRequest {

        /**
         * Constructs a new ExecRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IExecRequest);

        /** ExecRequest cluster_id. */
        public cluster_id: number;

        /** ExecRequest namespace. */
        public namespace: string;

        /** ExecRequest pod. */
        public pod: string;

        /** ExecRequest container. */
        public container: string;

        /** ExecRequest command. */
        public command: string[];

        /**
         * Encodes the specified ExecRequest message. Does not implicitly {@link container.ExecRequest.verify|verify} messages.
         * @param message ExecRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.ExecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.ExecRequest;
    }

    /** Properties of an ExecResponse. */
    interface IExecResponse {

        /** ExecResponse data */
        data?: (string|null);
    }

    /** Represents an ExecResponse. */
    class ExecResponse implements IExecResponse {

        /**
         * Constructs a new ExecResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IExecResponse);

        /** ExecResponse data. */
        public data: string;

        /**
         * Encodes the specified ExecResponse message. Does not implicitly {@link container.ExecResponse.verify|verify} messages.
         * @param message ExecResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.ExecResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.ExecResponse;
    }

    /** Properties of a StreamCopyToPodRequest. */
    interface IStreamCopyToPodRequest {

        /** StreamCopyToPodRequest cluster_id */
        cluster_id?: (number|null);

        /** StreamCopyToPodRequest file_name */
        file_name?: (string|null);

        /** StreamCopyToPodRequest data */
        data?: (Uint8Array|null);

        /** StreamCopyToPodRequest namespace */
        namespace?: (string|null);

        /** StreamCopyToPodRequest pod */
        pod?: (string|null);

        /** StreamCopyToPodRequest container */
        container?: (string|null);
    }

    /** Represents a StreamCopyToPodRequest. */
    class StreamCopyToPodRequest implements IStreamCopyToPodRequest {

        /**
         * Constructs a new StreamCopyToPodRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IStreamCopyToPodRequest);

        /** StreamCopyToPodRequest cluster_id. */
        public cluster_id: number;

        /** StreamCopyToPodRequest file_name. */
        public file_name: string;

        /** StreamCopyToPodRequest data. */
        public data: Uint8Array;

        /** StreamCopyToPodRequest namespace. */
        public namespace: string;

        /** StreamCopyToPodRequest pod. */
        public pod: string;

        /** StreamCopyToPodRequest container. */
        public container: string;

        /**
         * Encodes the specified StreamCopyToPodRequest message. Does not implicitly {@link container.StreamCopyToPodRequest.verify|verify} messages.
         * @param message StreamCopyToPodRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.StreamCopyToPodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamCopyToPodRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamCopyToPodRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.StreamCopyToPodRequest;
    }

    /** Properties of a StreamCopyToPodResponse. */
    interface IStreamCopyToPodResponse {

        /** StreamCopyToPodResponse size */
        size?: (number|null);

        /** StreamCopyToPodResponse pod_file_path */
        pod_file_path?: (string|null);

        /** StreamCopyToPodResponse output */
        output?: (string|null);

        /** StreamCopyToPodResponse pod */
        pod?: (string|null);

        /** StreamCopyToPodResponse namespace */
        namespace?: (string|null);

        /** StreamCopyToPodResponse container */
        container?: (string|null);

        /** StreamCopyToPodResponse filename */
        filename?: (string|null);
    }

    /** Represents a StreamCopyToPodResponse. */
    class StreamCopyToPodResponse implements IStreamCopyToPodResponse {

        /**
         * Constructs a new StreamCopyToPodResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IStreamCopyToPodResponse);

        /** StreamCopyToPodResponse size. */
        public size: number;

        /** StreamCopyToPodResponse pod_file_path. */
        public pod_file_path: string;

        /** StreamCopyToPodResponse output. */
        public output: string;

        /** StreamCopyToPodResponse pod. */
        public pod: string;

        /** StreamCopyToPodResponse namespace. */
        public namespace: string;

        /** StreamCopyToPodResponse container. */
        public container: string;

        /** StreamCopyToPodResponse filename. */
        public filename: string;

        /**
         * Encodes the specified StreamCopyToPodResponse message. Does not implicitly {@link container.StreamCopyToPodResponse.verify|verify} messages.
         * @param message StreamCopyToPodResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.StreamCopyToPodResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StreamCopyToPodResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamCopyToPodResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.StreamCopyToPodResponse;
    }

    /** Properties of an IsPodRunningRequest. */
    interface IIsPodRunningRequest {

        /** IsPodRunningRequest cluster_id */
        cluster_id?: (number|null);

        /** IsPodRunningRequest namespace */
        namespace?: (string|null);

        /** IsPodRunningRequest pod */
        pod?: (string|null);
    }

    /** Represents an IsPodRunningRequest. */
    class IsPodRunningRequest implements IIsPodRunningRequest {

        /**
         * Constructs a new IsPodRunningRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IIsPodRunningRequest);

        /** IsPodRunningRequest cluster_id. */
        public cluster_id: number;

        /** IsPodRunningRequest namespace. */
        public namespace: string;

        /** IsPodRunningRequest pod. */
        public pod: string;

        /**
         * Encodes the specified IsPodRunningRequest message. Does not implicitly {@link container.IsPodRunningRequest.verify|verify} messages.
         * @param message IsPodRunningRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.IsPodRunningRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IsPodRunningRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IsPodRunningRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.IsPodRunningRequest;
    }

    /** Properties of an IsPodRunningResponse. */
    interface IIsPodRunningResponse {

        /** IsPodRunningResponse running */
        running?: (boolean|null);

        /** IsPodRunningResponse reason */
        reason?: (string|null);
    }

    /** Represents an IsPodRunningResponse. */
    class IsPodRunningResponse implements IIsPodRunningResponse {

        /**
         * Constructs a new IsPodRunningResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IIsPodRunningResponse);

        /** IsPodRunningResponse running. */
        public running: boolean;

        /** IsPodRunningResponse reason. */
        public reason: string;

        /**
         * Encodes the specified IsPodRunningResponse message. Does not implicitly {@link container.IsPodRunningResponse.verify|verify} messages.
         * @param message IsPodRunningResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.IsPodRunningResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IsPodRunningResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IsPodRunningResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.IsPodRunningResponse;
    }

    /** Properties of an IsPodExistsRequest. */
    interface IIsPodExistsRequest {

        /** IsPodExistsRequest cluster_id */
        cluster_id?: (number|null);

        /** IsPodExistsRequest namespace */
        namespace?: (string|null);

        /** IsPodExistsRequest pod */
        pod?: (string|null);
    }

    /** Represents an IsPodExistsRequest. */
    class IsPodExistsRequest implements IIsPodExistsRequest {

        /**
         * Constructs a new IsPodExistsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IIsPodExistsRequest);

        /** IsPodExistsRequest cluster_id. */
        public cluster_id: number;

        /** IsPodExistsRequest namespace. */
        public namespace: string;

        /** IsPodExistsRequest pod. */
        public pod: string;

        /**
         * Encodes the specified IsPodExistsRequest message. Does not implicitly {@link container.IsPodExistsRequest.verify|verify} messages.
         * @param message IsPodExistsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.IsPodExistsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IsPodExistsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IsPodExistsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.IsPodExistsRequest;
    }

    /** Properties of an IsPodExistsResponse. */
    interface IIsPodExistsResponse {

        /** IsPodExistsResponse exists */
        exists?: (boolean|null);
    }

    /** Represents an IsPodExistsResponse. */
    class IsPodExistsResponse implements IIsPodExistsResponse {

        /**
         * Constructs a new IsPodExistsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.IIsPodExistsResponse);

        /** IsPodExistsResponse exists. */
        public exists: boolean;

        /**
         * Encodes the specified IsPodExistsResponse message. Does not implicitly {@link container.IsPodExistsResponse.verify|verify} messages.
         * @param message IsPodExistsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.IsPodExistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IsPodExistsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IsPodExistsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.IsPodExistsResponse;
    }

    /** Properties of a LogRequest. */
    interface ILogRequest {

        /** LogRequest cluster_id */
        cluster_id?: (number|null);

        /** LogRequest namespace */
        namespace?: (string|null);

        /** LogRequest pod */
        pod?: (string|null);

        /** LogRequest container */
        container?: (string|null);

        /** LogRequest card_id */
        card_id?: (number|null);
    }

    /** Represents a LogRequest. */
    class LogRequest implements ILogRequest {

        /**
         * Constructs a new LogRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.ILogRequest);

        /** LogRequest cluster_id. */
        public cluster_id: number;

        /** LogRequest namespace. */
        public namespace: string;

        /** LogRequest pod. */
        public pod: string;

        /** LogRequest container. */
        public container: string;

        /** LogRequest card_id. */
        public card_id: number;

        /**
         * Encodes the specified LogRequest message. Does not implicitly {@link container.LogRequest.verify|verify} messages.
         * @param message LogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.LogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.LogRequest;
    }

    /** Properties of a LogResponse. */
    interface ILogResponse {

        /** LogResponse namespace */
        namespace?: (string|null);

        /** LogResponse pod_name */
        pod_name?: (string|null);

        /** LogResponse container_name */
        container_name?: (string|null);

        /** LogResponse log */
        log?: (string|null);
    }

    /** Represents a LogResponse. */
    class LogResponse implements ILogResponse {

        /**
         * Constructs a new LogResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: container.ILogResponse);

        /** LogResponse namespace. */
        public namespace: string;

        /** LogResponse pod_name. */
        public pod_name: string;

        /** LogResponse container_name. */
        public container_name: string;

        /** LogResponse log. */
        public log: string;

        /**
         * Encodes the specified LogResponse message. Does not implicitly {@link container.LogResponse.verify|verify} messages.
         * @param message LogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: container.LogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): container.LogResponse;
    }

    /** Represents a ContainerSvc */
    class ContainerSvc extends $protobuf.rpc.Service {

        /**
         * Constructs a new ContainerSvc service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls CopyToPod.
         * @param request CopyToPodRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CopyToPodResponse
         */
        public copyToPod(request: container.CopyToPodRequest, callback: container.ContainerSvc.CopyToPodCallback): void;

        /**
         * Calls CopyToPod.
         * @param request CopyToPodRequest message or plain object
         * @returns Promise
         */
        public copyToPod(request: container.CopyToPodRequest): Promise<container.CopyToPodResponse>;

        /**
         * Calls Exec.
         * @param request ExecRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ExecResponse
         */
        public exec(request: container.ExecRequest, callback: container.ContainerSvc.ExecCallback): void;

        /**
         * Calls Exec.
         * @param request ExecRequest message or plain object
         * @returns Promise
         */
        public exec(request: container.ExecRequest): Promise<container.ExecResponse>;

        /**
         * Calls StreamCopyToPod.
         * @param request StreamCopyToPodRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StreamCopyToPodResponse
         */
        public streamCopyToPod(request: container.StreamCopyToPodRequest, callback: container.ContainerSvc.StreamCopyToPodCallback): void;

        /**
         * Calls StreamCopyToPod.
         * @param request StreamCopyToPodRequest message or plain object
         * @returns Promise
         */
        public streamCopyToPod(request: container.StreamCopyToPodRequest): Promise<container.StreamCopyToPodResponse>;

        /**
         * Calls IsPodRunning.
         * @param request IsPodRunningRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and IsPodRunningResponse
         */
        public isPodRunning(request: container.IsPodRunningRequest, callback: container.ContainerSvc.IsPodRunningCallback): void;

        /**
         * Calls IsPodRunning.
         * @param request IsPodRunningRequest message or plain object
         * @returns Promise
         */
        public isPodRunning(request: container.IsPodRunningRequest): Promise<container.IsPodRunningResponse>;

        /**
         * Calls IsPodExists.
         * @param request IsPodExistsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and IsPodExistsResponse
         */
        public isPodExists(request: container.IsPodExistsRequest, callback: container.ContainerSvc.IsPodExistsCallback): void;

        /**
         * Calls IsPodExists.
         * @param request IsPodExistsRequest message or plain object
         * @returns Promise
         */
        public isPodExists(request: container.IsPodExistsRequest): Promise<container.IsPodExistsResponse>;

        /**
         * Calls ContainerLog.
         * @param request LogRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LogResponse
         */
        public containerLog(request: container.LogRequest, callback: container.ContainerSvc.ContainerLogCallback): void;

        /**
         * Calls ContainerLog.
         * @param request LogRequest message or plain object
         * @returns Promise
         */
        public containerLog(request: container.LogRequest): Promise<container.LogResponse>;

        /**
         * Calls StreamContainerLog.
         * @param request LogRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LogResponse
         */
        public streamContainerLog(request: container.LogRequest, callback: container.ContainerSvc.StreamContainerLogCallback): void;

        /**
         * Calls StreamContainerLog.
         * @param request LogRequest message or plain object
         * @returns Promise
         */
        public streamContainerLog(request: container.LogRequest): Promise<container.LogResponse>;
    }

    namespace ContainerSvc {

        /**
         * Callback as used by {@link container.ContainerSvc#copyToPod}.
         * @param error Error, if any
         * @param [response] CopyToPodResponse
         */
        type CopyToPodCallback = (error: (Error|null), response?: container.CopyToPodResponse) => void;

        /**
         * Callback as used by {@link container.ContainerSvc#exec}.
         * @param error Error, if any
         * @param [response] ExecResponse
         */
        type ExecCallback = (error: (Error|null), response?: container.ExecResponse) => void;

        /**
         * Callback as used by {@link container.ContainerSvc#streamCopyToPod}.
         * @param error Error, if any
         * @param [response] StreamCopyToPodResponse
         */
        type StreamCopyToPodCallback = (error: (Error|null), response?: container.StreamCopyToPodResponse) => void;

        /**
         * Callback as used by {@link container.ContainerSvc#isPodRunning}.
         * @param error Error, if any
         * @param [response] IsPodRunningResponse
         */
        type IsPodRunningCallback = (error: (Error|null), response?: container.IsPodRunningResponse) => void;

        /**
         * Callback as used by {@link container.ContainerSvc#isPodExists}.
         * @param error Error, if any
         * @param [response] IsPodExistsResponse
         */
        type IsPodExistsCallback = (error: (Error|null), response?: container.IsPodExistsResponse) => void;

        /**
         * Callback as used by {@link container.ContainerSvc#containerLog}.
         * @param error Error, if any
         * @param [response] LogResponse
         */
        type ContainerLogCallback = (error: (Error|null), response?: container.LogResponse) => void;

        /**
         * Callback as used by {@link container.ContainerSvc#streamContainerLog}.
         * @param error Error, if any
         * @param [response] LogResponse
         */
        type StreamContainerLogCallback = (error: (Error|null), response?: container.LogResponse) => void;
    }
}

/** Namespace event. */
export namespace event {

    /** ActionType enum. */
    enum ActionType {
        Unknown = 0,
        Create = 1,
        Update = 2,
        Delete = 3,
        Upload = 4,
        Download = 5,
        Shell = 6
    }

    /** Properties of a ListRequest. */
    interface IListRequest {

        /** ListRequest page */
        page?: (number|null);

        /** ListRequest page_size */
        page_size?: (number|null);
    }

    /** Represents a ListRequest. */
    class ListRequest implements IListRequest {

        /**
         * Constructs a new ListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: event.IListRequest);

        /** ListRequest page. */
        public page: number;

        /** ListRequest page_size. */
        public page_size: number;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link event.ListRequest.verify|verify} messages.
         * @param message ListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: event.ListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event.ListRequest;
    }

    /** Properties of a ListItem. */
    interface IListItem {

        /** ListItem id */
        id?: (number|null);

        /** ListItem action */
        action?: (event.ActionType|null);

        /** ListItem username */
        username?: (string|null);

        /** ListItem message */
        message?: (string|null);

        /** ListItem old */
        old?: (string|null);

        /** ListItem new */
        "new"?: (string|null);

        /** ListItem event_at */
        event_at?: (string|null);

        /** ListItem file_id */
        file_id?: (number|null);

        /** ListItem duration */
        duration?: (string|null);
    }

    /** Represents a ListItem. */
    class ListItem implements IListItem {

        /**
         * Constructs a new ListItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: event.IListItem);

        /** ListItem id. */
        public id: number;

        /** ListItem action. */
        public action: event.ActionType;

        /** ListItem username. */
        public username: string;

        /** ListItem message. */
        public message: string;

        /** ListItem old. */
        public old: string;

        /** ListItem new. */
        public new: string;

        /** ListItem event_at. */
        public event_at: string;

        /** ListItem file_id. */
        public file_id: number;

        /** ListItem duration. */
        public duration: string;

        /**
         * Encodes the specified ListItem message. Does not implicitly {@link event.ListItem.verify|verify} messages.
         * @param message ListItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: event.ListItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event.ListItem;
    }

    /** Properties of a ListResponse. */
    interface IListResponse {

        /** ListResponse page */
        page?: (number|null);

        /** ListResponse page_size */
        page_size?: (number|null);

        /** ListResponse items */
        items?: (event.ListItem[]|null);

        /** ListResponse count */
        count?: (number|null);
    }

    /** Represents a ListResponse. */
    class ListResponse implements IListResponse {

        /**
         * Constructs a new ListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: event.IListResponse);

        /** ListResponse page. */
        public page: number;

        /** ListResponse page_size. */
        public page_size: number;

        /** ListResponse items. */
        public items: event.ListItem[];

        /** ListResponse count. */
        public count: number;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link event.ListResponse.verify|verify} messages.
         * @param message ListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: event.ListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event.ListResponse;
    }

    /** Represents an Event */
    class Event extends $protobuf.rpc.Service {

        /**
         * Constructs a new Event service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls List.
         * @param request ListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListResponse
         */
        public list(request: event.ListRequest, callback: event.Event.ListCallback): void;

        /**
         * Calls List.
         * @param request ListRequest message or plain object
         * @returns Promise
         */
        public list(request: event.ListRequest): Promise<event.ListResponse>;
    }

    namespace Event {

        /**
         * Callback as used by {@link event.Event#list}.
         * @param error Error, if any
         * @param [response] ListResponse
         */
        type ListCallback = (error: (Error|null), response?: event.ListResponse) => void;
    }
}

/** Namespace file. */
export namespace file {

    /** Properties of a DeleteRequest. */
    interface IDeleteRequest {

        /** DeleteRequest id */
        id?: (number|null);
    }

    /** Represents a DeleteRequest. */
    class DeleteRequest implements IDeleteRequest {

        /**
         * Constructs a new DeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IDeleteRequest);

        /** DeleteRequest id. */
        public id: number;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link file.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.DeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.DeleteRequest;
    }

    /** Properties of a DeleteResponse. */
    interface IDeleteResponse {

        /** DeleteResponse file */
        file?: (file.File|null);
    }

    /** Represents a DeleteResponse. */
    class DeleteResponse implements IDeleteResponse {

        /**
         * Constructs a new DeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IDeleteResponse);

        /** DeleteResponse file. */
        public file?: (file.File|null);

        /**
         * Encodes the specified DeleteResponse message. Does not implicitly {@link file.DeleteResponse.verify|verify} messages.
         * @param message DeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.DeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.DeleteResponse;
    }

    /** Properties of a DeleteUndocumentedFilesRequest. */
    interface IDeleteUndocumentedFilesRequest {
    }

    /** Represents a DeleteUndocumentedFilesRequest. */
    class DeleteUndocumentedFilesRequest implements IDeleteUndocumentedFilesRequest {

        /**
         * Constructs a new DeleteUndocumentedFilesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IDeleteUndocumentedFilesRequest);

        /**
         * Encodes the specified DeleteUndocumentedFilesRequest message. Does not implicitly {@link file.DeleteUndocumentedFilesRequest.verify|verify} messages.
         * @param message DeleteUndocumentedFilesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.DeleteUndocumentedFilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteUndocumentedFilesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteUndocumentedFilesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.DeleteUndocumentedFilesRequest;
    }

    /** Properties of a File. */
    interface IFile {

        /** File path */
        path?: (string|null);

        /** File humanize_size */
        humanize_size?: (string|null);

        /** File size */
        size?: (number|null);

        /** File upload_by */
        upload_by?: (string|null);
    }

    /** Represents a File. */
    class File implements IFile {

        /**
         * Constructs a new File.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IFile);

        /** File path. */
        public path: string;

        /** File humanize_size. */
        public humanize_size: string;

        /** File size. */
        public size: number;

        /** File upload_by. */
        public upload_by: string;

        /**
         * Encodes the specified File message. Does not implicitly {@link file.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.File, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a File message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.File;
    }

    /** Properties of a DeleteUndocumentedFilesResponse. */
    interface IDeleteUndocumentedFilesResponse {

        /** DeleteUndocumentedFilesResponse items */
        items?: (file.File[]|null);
    }

    /** Represents a DeleteUndocumentedFilesResponse. */
    class DeleteUndocumentedFilesResponse implements IDeleteUndocumentedFilesResponse {

        /**
         * Constructs a new DeleteUndocumentedFilesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IDeleteUndocumentedFilesResponse);

        /** DeleteUndocumentedFilesResponse items. */
        public items: file.File[];

        /**
         * Encodes the specified DeleteUndocumentedFilesResponse message. Does not implicitly {@link file.DeleteUndocumentedFilesResponse.verify|verify} messages.
         * @param message DeleteUndocumentedFilesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.DeleteUndocumentedFilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteUndocumentedFilesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteUndocumentedFilesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.DeleteUndocumentedFilesResponse;
    }

    /** Properties of a DiskInfoRequest. */
    interface IDiskInfoRequest {
    }

    /** Represents a DiskInfoRequest. */
    class DiskInfoRequest implements IDiskInfoRequest {

        /**
         * Constructs a new DiskInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IDiskInfoRequest);

        /**
         * Encodes the specified DiskInfoRequest message. Does not implicitly {@link file.DiskInfoRequest.verify|verify} messages.
         * @param message DiskInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.DiskInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiskInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiskInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.DiskInfoRequest;
    }

    /** Properties of a DiskInfoResponse. */
    interface IDiskInfoResponse {

        /** DiskInfoResponse usage */
        usage?: (number|null);

        /** DiskInfoResponse humanize_usage */
        humanize_usage?: (string|null);
    }

    /** Represents a DiskInfoResponse. */
    class DiskInfoResponse implements IDiskInfoResponse {

        /**
         * Constructs a new DiskInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IDiskInfoResponse);

        /** DiskInfoResponse usage. */
        public usage: number;

        /** DiskInfoResponse humanize_usage. */
        public humanize_usage: string;

        /**
         * Encodes the specified DiskInfoResponse message. Does not implicitly {@link file.DiskInfoResponse.verify|verify} messages.
         * @param message DiskInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.DiskInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiskInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiskInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.DiskInfoResponse;
    }

    /** Properties of a ListRequest. */
    interface IListRequest {

        /** ListRequest page */
        page?: (number|null);

        /** ListRequest page_size */
        page_size?: (number|null);

        /** ListRequest without_deleted */
        without_deleted?: (boolean|null);
    }

    /** Represents a ListRequest. */
    class ListRequest implements IListRequest {

        /**
         * Constructs a new ListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IListRequest);

        /** ListRequest page. */
        public page: number;

        /** ListRequest page_size. */
        public page_size: number;

        /** ListRequest without_deleted. */
        public without_deleted: boolean;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link file.ListRequest.verify|verify} messages.
         * @param message ListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.ListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.ListRequest;
    }

    /** Properties of a ListResponse. */
    interface IListResponse {

        /** ListResponse page */
        page?: (number|null);

        /** ListResponse page_size */
        page_size?: (number|null);

        /** ListResponse items */
        items?: (model.FileModel[]|null);

        /** ListResponse count */
        count?: (number|null);
    }

    /** Represents a ListResponse. */
    class ListResponse implements IListResponse {

        /**
         * Constructs a new ListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: file.IListResponse);

        /** ListResponse page. */
        public page: number;

        /** ListResponse page_size. */
        public page_size: number;

        /** ListResponse items. */
        public items: model.FileModel[];

        /** ListResponse count. */
        public count: number;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link file.ListResponse.verify|verify} messages.
         * @param message ListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: file.ListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): file.ListResponse;
    }

    /** Represents a FileSvc */
    class FileSvc extends $protobuf.rpc.Service {

        /**
         * Constructs a new FileSvc service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls List.
         * @param request ListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListResponse
         */
        public list(request: file.ListRequest, callback: file.FileSvc.ListCallback): void;

        /**
         * Calls List.
         * @param request ListRequest message or plain object
         * @returns Promise
         */
        public list(request: file.ListRequest): Promise<file.ListResponse>;

        /**
         * Calls Delete.
         * @param request DeleteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteResponse
         */
        public delete(request: file.DeleteRequest, callback: file.FileSvc.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request DeleteRequest message or plain object
         * @returns Promise
         */
        public delete(request: file.DeleteRequest): Promise<file.DeleteResponse>;

        /**
         * Calls DeleteUndocumentedFiles.
         * @param request DeleteUndocumentedFilesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteUndocumentedFilesResponse
         */
        public deleteUndocumentedFiles(request: file.DeleteUndocumentedFilesRequest, callback: file.FileSvc.DeleteUndocumentedFilesCallback): void;

        /**
         * Calls DeleteUndocumentedFiles.
         * @param request DeleteUndocumentedFilesRequest message or plain object
         * @returns Promise
         */
        public deleteUndocumentedFiles(request: file.DeleteUndocumentedFilesRequest): Promise<file.DeleteUndocumentedFilesResponse>;

        /**
         * Calls DiskInfo.
         * @param request DiskInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DiskInfoResponse
         */
        public diskInfo(request: file.DiskInfoRequest, callback: file.FileSvc.DiskInfoCallback): void;

        /**
         * Calls DiskInfo.
         * @param request DiskInfoRequest message or plain object
         * @returns Promise
         */
        public diskInfo(request: file.DiskInfoRequest): Promise<file.DiskInfoResponse>;
    }

    namespace FileSvc {

        /**
         * Callback as used by {@link file.FileSvc#list}.
         * @param error Error, if any
         * @param [response] ListResponse
         */
        type ListCallback = (error: (Error|null), response?: file.ListResponse) => void;

        /**
         * Callback as used by {@link file.FileSvc#delete_}.
         * @param error Error, if any
         * @param [response] DeleteResponse
         */
        type DeleteCallback = (error: (Error|null), response?: file.DeleteResponse) => void;

        /**
         * Callback as used by {@link file.FileSvc#deleteUndocumentedFiles}.
         * @param error Error, if any
         * @param [response] DeleteUndocumentedFilesResponse
         */
        type DeleteUndocumentedFilesCallback = (error: (Error|null), response?: file.DeleteUndocumentedFilesResponse) => void;

        /**
         * Callback as used by {@link file.FileSvc#diskInfo}.
         * @param error Error, if any
         * @param [response] DiskInfoResponse
         */
        type DiskInfoCallback = (error: (Error|null), response?: file.DiskInfoResponse) => void;
    }
}

/** Namespace metrics. */
export namespace metrics {

    /** Properties of a TopPodRequest. */
    interface ITopPodRequest {

        /** TopPodRequest cluster_id */
        cluster_id?: (number|null);

        /** TopPodRequest namespace */
        namespace?: (string|null);

        /** TopPodRequest pod */
        pod?: (string|null);
    }

    /** Represents a TopPodRequest. */
    class TopPodRequest implements ITopPodRequest {

        /**
         * Constructs a new TopPodRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: metrics.ITopPodRequest);

        /** TopPodRequest cluster_id. */
        public cluster_id: number;

        /** TopPodRequest namespace. */
        public namespace: string;

        /** TopPodRequest pod. */
        public pod: string;

        /**
         * Encodes the specified TopPodRequest message. Does not implicitly {@link metrics.TopPodRequest.verify|verify} messages.
         * @param message TopPodRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: metrics.TopPodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopPodRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopPodRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): metrics.TopPodRequest;
    }

    /** Properties of a TopPodResponse. */
    interface ITopPodResponse {

        /** TopPodResponse cpu */
        cpu?: (number|null);

        /** TopPodResponse memory */
        memory?: (number|null);

        /** TopPodResponse humanize_cpu */
        humanize_cpu?: (string|null);

        /** TopPodResponse humanize_memory */
        humanize_memory?: (string|null);

        /** TopPodResponse time */
        time?: (string|null);

        /** TopPodResponse length */
        length?: (number|null);
    }

    /** Represents a TopPodResponse. */
    class TopPodResponse implements ITopPodResponse {

        /**
         * Constructs a new TopPodResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: metrics.ITopPodResponse);

        /** TopPodResponse cpu. */
        public cpu: number;

        /** TopPodResponse memory. */
        public memory: number;

        /** TopPodResponse humanize_cpu. */
        public humanize_cpu: string;

        /** TopPodResponse humanize_memory. */
        public humanize_memory: string;

        /** TopPodResponse time. */
        public time: string;

        /** TopPodResponse length. */
        public length: number;

        /**
         * Encodes the specified TopPodResponse message. Does not implicitly {@link metrics.TopPodResponse.verify|verify} messages.
         * @param message TopPodResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: metrics.TopPodResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopPodResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopPodResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): metrics.TopPodResponse;
    }

    /** Represents a Metrics */
    class Metrics extends $protobuf.rpc.Service {

        /**
         * Constructs a new Metrics service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls TopPod.
         * @param request TopPodRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and TopPodResponse
         */
        public topPod(request: metrics.TopPodRequest, callback: metrics.Metrics.TopPodCallback): void;

        /**
         * Calls TopPod.
         * @param request TopPodRequest message or plain object
         * @returns Promise
         */
        public topPod(request: metrics.TopPodRequest): Promise<metrics.TopPodResponse>;

        /**
         * Calls StreamTopPod.
         * @param request TopPodRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and TopPodResponse
         */
        public streamTopPod(request: metrics.TopPodRequest, callback: metrics.Metrics.StreamTopPodCallback): void;

        /**
         * Calls StreamTopPod.
         * @param request TopPodRequest message or plain object
         * @returns Promise
         */
        public streamTopPod(request: metrics.TopPodRequest): Promise<metrics.TopPodResponse>;
    }

    namespace Metrics {

        /**
         * Callback as used by {@link metrics.Metrics#topPod}.
         * @param error Error, if any
         * @param [response] TopPodResponse
         */
        type TopPodCallback = (error: (Error|null), response?: metrics.TopPodResponse) => void;

        /**
         * Callback as used by {@link metrics.Metrics#streamTopPod}.
         * @param error Error, if any
         * @param [response] TopPodResponse
         */
        type StreamTopPodCallback = (error: (Error|null), response?: metrics.TopPodResponse) => void;
    }
}

/** Namespace model. */
export namespace model {

    /** Properties of a ClusterModel. */
    interface IClusterModel {

        /** ClusterModel id */
        id?: (number|null);

        /** ClusterModel name */
        name?: (string|null);

        /** ClusterModel kube_config */
        kube_config?: (string|null);

        /** ClusterModel api_server_url */
        api_server_url?: (string|null);

        /** ClusterModel created_at */
        created_at?: (string|null);

        /** ClusterModel updated_at */
        updated_at?: (string|null);

        /** ClusterModel deleted_at */
        deleted_at?: (string|null);
    }

    /** Represents a ClusterModel. */
    class ClusterModel implements IClusterModel {

        /**
         * Constructs a new ClusterModel.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IClusterModel);

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
         * Encodes the specified ClusterModel message. Does not implicitly {@link model.ClusterModel.verify|verify} messages.
         * @param message ClusterModel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ClusterModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClusterModel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClusterModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.ClusterModel;
    }

    /** Properties of a CardModel. */
    interface ICardModel {

        /** CardModel id */
        id?: (number|null);

        /** CardModel type */
        type?: (string|null);

        /** CardModel namespace */
        namespace?: (string|null);

        /** CardModel name */
        name?: (string|null);

        /** CardModel cluster_id */
        cluster_id?: (number|null);

        /** CardModel created_at */
        created_at?: (string|null);

        /** CardModel updated_at */
        updated_at?: (string|null);

        /** CardModel deleted_at */
        deleted_at?: (string|null);
    }

    /** Represents a CardModel. */
    class CardModel implements ICardModel {

        /**
         * Constructs a new CardModel.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ICardModel);

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
         * Encodes the specified CardModel message. Does not implicitly {@link model.CardModel.verify|verify} messages.
         * @param message CardModel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.CardModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardModel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.CardModel;
    }

    /** Properties of a FileModel. */
    interface IFileModel {

        /** FileModel id */
        id?: (number|null);

        /** FileModel path */
        path?: (string|null);

        /** FileModel size */
        size?: (number|null);

        /** FileModel username */
        username?: (string|null);

        /** FileModel namespace */
        namespace?: (string|null);

        /** FileModel pod */
        pod?: (string|null);

        /** FileModel container */
        container?: (string|null);

        /** FileModel container_path */
        container_path?: (string|null);

        /** FileModel created_at */
        created_at?: (string|null);

        /** FileModel updated_at */
        updated_at?: (string|null);

        /** FileModel deleted_at */
        deleted_at?: (string|null);

        /** FileModel is_deleted */
        is_deleted?: (boolean|null);
    }

    /** Represents a FileModel. */
    class FileModel implements IFileModel {

        /**
         * Constructs a new FileModel.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IFileModel);

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
         * Encodes the specified FileModel message. Does not implicitly {@link model.FileModel.verify|verify} messages.
         * @param message FileModel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.FileModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileModel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.FileModel;
    }
}

/** Namespace picture. */
export namespace picture {

    /** Properties of a BackgroundRequest. */
    interface IBackgroundRequest {

        /** BackgroundRequest random */
        random?: (boolean|null);
    }

    /** Represents a BackgroundRequest. */
    class BackgroundRequest implements IBackgroundRequest {

        /**
         * Constructs a new BackgroundRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: picture.IBackgroundRequest);

        /** BackgroundRequest random. */
        public random: boolean;

        /**
         * Encodes the specified BackgroundRequest message. Does not implicitly {@link picture.BackgroundRequest.verify|verify} messages.
         * @param message BackgroundRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: picture.BackgroundRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackgroundRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackgroundRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): picture.BackgroundRequest;
    }

    /** Properties of a BackgroundResponse. */
    interface IBackgroundResponse {

        /** BackgroundResponse url */
        url?: (string|null);

        /** BackgroundResponse copyright */
        copyright?: (string|null);
    }

    /** Represents a BackgroundResponse. */
    class BackgroundResponse implements IBackgroundResponse {

        /**
         * Constructs a new BackgroundResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: picture.IBackgroundResponse);

        /** BackgroundResponse url. */
        public url: string;

        /** BackgroundResponse copyright. */
        public copyright: string;

        /**
         * Encodes the specified BackgroundResponse message. Does not implicitly {@link picture.BackgroundResponse.verify|verify} messages.
         * @param message BackgroundResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: picture.BackgroundResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackgroundResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BackgroundResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): picture.BackgroundResponse;
    }

    /** Represents a Picture */
    class Picture extends $protobuf.rpc.Service {

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
        public background(request: picture.BackgroundRequest, callback: picture.Picture.BackgroundCallback): void;

        /**
         * Calls Background.
         * @param request BackgroundRequest message or plain object
         * @returns Promise
         */
        public background(request: picture.BackgroundRequest): Promise<picture.BackgroundResponse>;
    }

    namespace Picture {

        /**
         * Callback as used by {@link picture.Picture#background}.
         * @param error Error, if any
         * @param [response] BackgroundResponse
         */
        type BackgroundCallback = (error: (Error|null), response?: picture.BackgroundResponse) => void;
    }
}

/** Namespace rbac. */
export namespace rbac {

    /** Permission enum. */
    enum Permission {
        None = 0,
        Card = 1,
        ClusterAdd = 10,
        ClusterDelete = 11,
        ClusterView = 12,
        FileUpload = 20,
        FileDelete = 21,
        FileDownload = 22,
        EventView = 30
    }

    /** State enum. */
    enum State {
        _ = 0,
        Request = 1,
        Approved = 2,
        Rejected = 3,
        Revoked = 4
    }

    /** Properties of a UserPermission. */
    interface IUserPermission {

        /** UserPermission id */
        id?: (number|null);

        /** UserPermission username */
        username?: (string|null);

        /** UserPermission email */
        email?: (string|null);

        /** UserPermission permission */
        permission?: (rbac.Permission|null);

        /** UserPermission state */
        state?: (rbac.State|null);

        /** UserPermission reason */
        reason?: (string|null);

        /** UserPermission subject_id */
        subject_id?: (number|null);

        /** UserPermission description */
        description?: (string|null);

        /** UserPermission created_at */
        created_at?: (string|null);

        /** UserPermission updated_at */
        updated_at?: (string|null);

        /** UserPermission deleted_at */
        deleted_at?: (string|null);
    }

    /** Represents a UserPermission. */
    class UserPermission implements IUserPermission {

        /**
         * Constructs a new UserPermission.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IUserPermission);

        /** UserPermission id. */
        public id: number;

        /** UserPermission username. */
        public username: string;

        /** UserPermission email. */
        public email: string;

        /** UserPermission permission. */
        public permission: rbac.Permission;

        /** UserPermission state. */
        public state: rbac.State;

        /** UserPermission reason. */
        public reason: string;

        /** UserPermission subject_id. */
        public subject_id: number;

        /** UserPermission description. */
        public description: string;

        /** UserPermission created_at. */
        public created_at: string;

        /** UserPermission updated_at. */
        public updated_at: string;

        /** UserPermission deleted_at. */
        public deleted_at: string;

        /**
         * Encodes the specified UserPermission message. Does not implicitly {@link rbac.UserPermission.verify|verify} messages.
         * @param message UserPermission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.UserPermission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserPermission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserPermission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.UserPermission;
    }

    /** Properties of a ListRequest. */
    interface IListRequest {

        /** ListRequest page */
        page?: (number|null);

        /** ListRequest page_size */
        page_size?: (number|null);

        /** ListRequest state */
        state?: (rbac.State|null);

        /** ListRequest email */
        email?: (string|null);
    }

    /** Represents a ListRequest. */
    class ListRequest implements IListRequest {

        /**
         * Constructs a new ListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IListRequest);

        /** ListRequest page. */
        public page: number;

        /** ListRequest page_size. */
        public page_size: number;

        /** ListRequest state. */
        public state: rbac.State;

        /** ListRequest email. */
        public email: string;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link rbac.ListRequest.verify|verify} messages.
         * @param message ListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.ListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.ListRequest;
    }

    /** Properties of a ListResponse. */
    interface IListResponse {

        /** ListResponse page */
        page?: (number|null);

        /** ListResponse page_size */
        page_size?: (number|null);

        /** ListResponse items */
        items?: (rbac.UserPermission[]|null);

        /** ListResponse count */
        count?: (number|null);
    }

    /** Represents a ListResponse. */
    class ListResponse implements IListResponse {

        /**
         * Constructs a new ListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IListResponse);

        /** ListResponse page. */
        public page: number;

        /** ListResponse page_size. */
        public page_size: number;

        /** ListResponse items. */
        public items: rbac.UserPermission[];

        /** ListResponse count. */
        public count: number;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link rbac.ListResponse.verify|verify} messages.
         * @param message ListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.ListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.ListResponse;
    }

    /** Properties of an ApplyForRequest. */
    interface IApplyForRequest {

        /** ApplyForRequest subject_id */
        subject_id?: (number|null);

        /** ApplyForRequest permission */
        permission?: (rbac.Permission|null);
    }

    /** Represents an ApplyForRequest. */
    class ApplyForRequest implements IApplyForRequest {

        /**
         * Constructs a new ApplyForRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IApplyForRequest);

        /** ApplyForRequest subject_id. */
        public subject_id: number;

        /** ApplyForRequest permission. */
        public permission: rbac.Permission;

        /**
         * Encodes the specified ApplyForRequest message. Does not implicitly {@link rbac.ApplyForRequest.verify|verify} messages.
         * @param message ApplyForRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.ApplyForRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyForRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyForRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.ApplyForRequest;
    }

    /** Properties of an ApplyForResponse. */
    interface IApplyForResponse {

        /** ApplyForResponse permission */
        permission?: (rbac.UserPermission|null);
    }

    /** Represents an ApplyForResponse. */
    class ApplyForResponse implements IApplyForResponse {

        /**
         * Constructs a new ApplyForResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IApplyForResponse);

        /** ApplyForResponse permission. */
        public permission?: (rbac.UserPermission|null);

        /**
         * Encodes the specified ApplyForResponse message. Does not implicitly {@link rbac.ApplyForResponse.verify|verify} messages.
         * @param message ApplyForResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.ApplyForResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyForResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyForResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.ApplyForResponse;
    }

    /** Properties of an ApproveRequest. */
    interface IApproveRequest {

        /** ApproveRequest id */
        id?: (number|null);
    }

    /** Represents an ApproveRequest. */
    class ApproveRequest implements IApproveRequest {

        /**
         * Constructs a new ApproveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IApproveRequest);

        /** ApproveRequest id. */
        public id: number;

        /**
         * Encodes the specified ApproveRequest message. Does not implicitly {@link rbac.ApproveRequest.verify|verify} messages.
         * @param message ApproveRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.ApproveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApproveRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApproveRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.ApproveRequest;
    }

    /** Properties of an ApproveResponse. */
    interface IApproveResponse {

        /** ApproveResponse permission */
        permission?: (rbac.UserPermission|null);
    }

    /** Represents an ApproveResponse. */
    class ApproveResponse implements IApproveResponse {

        /**
         * Constructs a new ApproveResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IApproveResponse);

        /** ApproveResponse permission. */
        public permission?: (rbac.UserPermission|null);

        /**
         * Encodes the specified ApproveResponse message. Does not implicitly {@link rbac.ApproveResponse.verify|verify} messages.
         * @param message ApproveResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.ApproveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApproveResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApproveResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.ApproveResponse;
    }

    /** Properties of a NotApprovedReasonRequest. */
    interface INotApprovedReasonRequest {

        /** NotApprovedReasonRequest subject_id */
        subject_id?: (number|null);

        /** NotApprovedReasonRequest permission */
        permission?: (rbac.Permission|null);
    }

    /** Represents a NotApprovedReasonRequest. */
    class NotApprovedReasonRequest implements INotApprovedReasonRequest {

        /**
         * Constructs a new NotApprovedReasonRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.INotApprovedReasonRequest);

        /** NotApprovedReasonRequest subject_id. */
        public subject_id: number;

        /** NotApprovedReasonRequest permission. */
        public permission: rbac.Permission;

        /**
         * Encodes the specified NotApprovedReasonRequest message. Does not implicitly {@link rbac.NotApprovedReasonRequest.verify|verify} messages.
         * @param message NotApprovedReasonRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.NotApprovedReasonRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotApprovedReasonRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotApprovedReasonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.NotApprovedReasonRequest;
    }

    /** Properties of a NotApprovedReasonResponse. */
    interface INotApprovedReasonResponse {

        /** NotApprovedReasonResponse reason */
        reason?: (string|null);
    }

    /** Represents a NotApprovedReasonResponse. */
    class NotApprovedReasonResponse implements INotApprovedReasonResponse {

        /**
         * Constructs a new NotApprovedReasonResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.INotApprovedReasonResponse);

        /** NotApprovedReasonResponse reason. */
        public reason: string;

        /**
         * Encodes the specified NotApprovedReasonResponse message. Does not implicitly {@link rbac.NotApprovedReasonResponse.verify|verify} messages.
         * @param message NotApprovedReasonResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.NotApprovedReasonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotApprovedReasonResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotApprovedReasonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.NotApprovedReasonResponse;
    }

    /** Properties of a RejectRequest. */
    interface IRejectRequest {

        /** RejectRequest id */
        id?: (number|null);

        /** RejectRequest reason */
        reason?: (string|null);
    }

    /** Represents a RejectRequest. */
    class RejectRequest implements IRejectRequest {

        /**
         * Constructs a new RejectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IRejectRequest);

        /** RejectRequest id. */
        public id: number;

        /** RejectRequest reason. */
        public reason: string;

        /**
         * Encodes the specified RejectRequest message. Does not implicitly {@link rbac.RejectRequest.verify|verify} messages.
         * @param message RejectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.RejectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RejectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RejectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.RejectRequest;
    }

    /** Properties of a RejectResponse. */
    interface IRejectResponse {

        /** RejectResponse permission */
        permission?: (rbac.UserPermission|null);
    }

    /** Represents a RejectResponse. */
    class RejectResponse implements IRejectResponse {

        /**
         * Constructs a new RejectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IRejectResponse);

        /** RejectResponse permission. */
        public permission?: (rbac.UserPermission|null);

        /**
         * Encodes the specified RejectResponse message. Does not implicitly {@link rbac.RejectResponse.verify|verify} messages.
         * @param message RejectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.RejectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RejectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RejectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.RejectResponse;
    }

    /** Properties of a RevokeRequest. */
    interface IRevokeRequest {

        /** RevokeRequest id */
        id?: (number|null);

        /** RevokeRequest reason */
        reason?: (string|null);
    }

    /** Represents a RevokeRequest. */
    class RevokeRequest implements IRevokeRequest {

        /**
         * Constructs a new RevokeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IRevokeRequest);

        /** RevokeRequest id. */
        public id: number;

        /** RevokeRequest reason. */
        public reason: string;

        /**
         * Encodes the specified RevokeRequest message. Does not implicitly {@link rbac.RevokeRequest.verify|verify} messages.
         * @param message RevokeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.RevokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RevokeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RevokeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.RevokeRequest;
    }

    /** Properties of a RevokeResponse. */
    interface IRevokeResponse {

        /** RevokeResponse permission */
        permission?: (rbac.UserPermission|null);
    }

    /** Represents a RevokeResponse. */
    class RevokeResponse implements IRevokeResponse {

        /**
         * Constructs a new RevokeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rbac.IRevokeResponse);

        /** RevokeResponse permission. */
        public permission?: (rbac.UserPermission|null);

        /**
         * Encodes the specified RevokeResponse message. Does not implicitly {@link rbac.RevokeResponse.verify|verify} messages.
         * @param message RevokeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rbac.RevokeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RevokeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RevokeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rbac.RevokeResponse;
    }

    /** Represents a RBAC */
    class RBAC extends $protobuf.rpc.Service {

        /**
         * Constructs a new RBAC service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls List.
         * @param request ListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListResponse
         */
        public list(request: rbac.ListRequest, callback: rbac.RBAC.ListCallback): void;

        /**
         * Calls List.
         * @param request ListRequest message or plain object
         * @returns Promise
         */
        public list(request: rbac.ListRequest): Promise<rbac.ListResponse>;

        /**
         * Calls ApplyFor.
         * @param request ApplyForRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ApplyForResponse
         */
        public applyFor(request: rbac.ApplyForRequest, callback: rbac.RBAC.ApplyForCallback): void;

        /**
         * Calls ApplyFor.
         * @param request ApplyForRequest message or plain object
         * @returns Promise
         */
        public applyFor(request: rbac.ApplyForRequest): Promise<rbac.ApplyForResponse>;

        /**
         * Calls Approve.
         * @param request ApproveRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ApproveResponse
         */
        public approve(request: rbac.ApproveRequest, callback: rbac.RBAC.ApproveCallback): void;

        /**
         * Calls Approve.
         * @param request ApproveRequest message or plain object
         * @returns Promise
         */
        public approve(request: rbac.ApproveRequest): Promise<rbac.ApproveResponse>;

        /**
         * Calls Reject.
         * @param request RejectRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and RejectResponse
         */
        public reject(request: rbac.RejectRequest, callback: rbac.RBAC.RejectCallback): void;

        /**
         * Calls Reject.
         * @param request RejectRequest message or plain object
         * @returns Promise
         */
        public reject(request: rbac.RejectRequest): Promise<rbac.RejectResponse>;

        /**
         * Calls Revoke.
         * @param request RevokeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and RevokeResponse
         */
        public revoke(request: rbac.RevokeRequest, callback: rbac.RBAC.RevokeCallback): void;

        /**
         * Calls Revoke.
         * @param request RevokeRequest message or plain object
         * @returns Promise
         */
        public revoke(request: rbac.RevokeRequest): Promise<rbac.RevokeResponse>;

        /**
         * Calls NotApprovedReason.
         * @param request NotApprovedReasonRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and NotApprovedReasonResponse
         */
        public notApprovedReason(request: rbac.NotApprovedReasonRequest, callback: rbac.RBAC.NotApprovedReasonCallback): void;

        /**
         * Calls NotApprovedReason.
         * @param request NotApprovedReasonRequest message or plain object
         * @returns Promise
         */
        public notApprovedReason(request: rbac.NotApprovedReasonRequest): Promise<rbac.NotApprovedReasonResponse>;
    }

    namespace RBAC {

        /**
         * Callback as used by {@link rbac.RBAC#list}.
         * @param error Error, if any
         * @param [response] ListResponse
         */
        type ListCallback = (error: (Error|null), response?: rbac.ListResponse) => void;

        /**
         * Callback as used by {@link rbac.RBAC#applyFor}.
         * @param error Error, if any
         * @param [response] ApplyForResponse
         */
        type ApplyForCallback = (error: (Error|null), response?: rbac.ApplyForResponse) => void;

        /**
         * Callback as used by {@link rbac.RBAC#approve}.
         * @param error Error, if any
         * @param [response] ApproveResponse
         */
        type ApproveCallback = (error: (Error|null), response?: rbac.ApproveResponse) => void;

        /**
         * Callback as used by {@link rbac.RBAC#reject}.
         * @param error Error, if any
         * @param [response] RejectResponse
         */
        type RejectCallback = (error: (Error|null), response?: rbac.RejectResponse) => void;

        /**
         * Callback as used by {@link rbac.RBAC#revoke}.
         * @param error Error, if any
         * @param [response] RevokeResponse
         */
        type RevokeCallback = (error: (Error|null), response?: rbac.RevokeResponse) => void;

        /**
         * Callback as used by {@link rbac.RBAC#notApprovedReason}.
         * @param error Error, if any
         * @param [response] NotApprovedReasonResponse
         */
        type NotApprovedReasonCallback = (error: (Error|null), response?: rbac.NotApprovedReasonResponse) => void;
    }
}

/** Namespace version. */
export namespace version {

    /** Properties of a Request. */
    interface IRequest {
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: version.IRequest);

        /**
         * Encodes the specified Request message. Does not implicitly {@link version.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: version.Request, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): version.Request;
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response version */
        version?: (string|null);

        /** Response build_date */
        build_date?: (string|null);

        /** Response git_branch */
        git_branch?: (string|null);

        /** Response git_commit */
        git_commit?: (string|null);

        /** Response git_tag */
        git_tag?: (string|null);

        /** Response go_version */
        go_version?: (string|null);

        /** Response compiler */
        compiler?: (string|null);

        /** Response platform */
        platform?: (string|null);

        /** Response kubectl_version */
        kubectl_version?: (string|null);

        /** Response git_repo */
        git_repo?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: version.IResponse);

        /** Response version. */
        public version: string;

        /** Response build_date. */
        public build_date: string;

        /** Response git_branch. */
        public git_branch: string;

        /** Response git_commit. */
        public git_commit: string;

        /** Response git_tag. */
        public git_tag: string;

        /** Response go_version. */
        public go_version: string;

        /** Response compiler. */
        public compiler: string;

        /** Response platform. */
        public platform: string;

        /** Response kubectl_version. */
        public kubectl_version: string;

        /** Response git_repo. */
        public git_repo: string;

        /**
         * Encodes the specified Response message. Does not implicitly {@link version.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: version.Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): version.Response;
    }

    /** Represents a Version */
    class Version extends $protobuf.rpc.Service {

        /**
         * Constructs a new Version service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls Version.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Response
         */
        public version(request: version.Request, callback: version.Version.VersionCallback): void;

        /**
         * Calls Version.
         * @param request Request message or plain object
         * @returns Promise
         */
        public version(request: version.Request): Promise<version.Response>;
    }

    namespace Version {

        /**
         * Callback as used by {@link version.Version#version}.
         * @param error Error, if any
         * @param [response] Response
         */
        type VersionCallback = (error: (Error|null), response?: version.Response) => void;
    }
}

/** Namespace websocket. */
export namespace websocket {

    /** Type enum. */
    enum Type {
        TypeUnknown = 0,
        SetUid = 1,
        InternalError = 2,
        HandleExecShell = 50,
        HandleExecShellMsg = 51,
        HandleCloseShell = 52,
        HandleAuthorize = 53,
        HandleSyncCard = 54,
        HandleSetLang = 55
    }

    /** ResultType enum. */
    enum ResultType {
        ResultUnknown = 0,
        Error = 1,
        Success = 2
    }

    /** To enum. */
    enum To {
        ToSelf = 0,
        ToAll = 1,
        ToOthers = 2
    }

    /** Properties of a WsRequestMetadata. */
    interface IWsRequestMetadata {

        /** WsRequestMetadata type */
        type?: (websocket.Type|null);
    }

    /** Represents a WsRequestMetadata. */
    class WsRequestMetadata implements IWsRequestMetadata {

        /**
         * Constructs a new WsRequestMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.IWsRequestMetadata);

        /** WsRequestMetadata type. */
        public type: websocket.Type;

        /**
         * Encodes the specified WsRequestMetadata message. Does not implicitly {@link websocket.WsRequestMetadata.verify|verify} messages.
         * @param message WsRequestMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.WsRequestMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsRequestMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsRequestMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.WsRequestMetadata;
    }

    /** Properties of an AuthorizeTokenInput. */
    interface IAuthorizeTokenInput {

        /** AuthorizeTokenInput type */
        type?: (websocket.Type|null);

        /** AuthorizeTokenInput token */
        token?: (string|null);
    }

    /** Represents an AuthorizeTokenInput. */
    class AuthorizeTokenInput implements IAuthorizeTokenInput {

        /**
         * Constructs a new AuthorizeTokenInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.IAuthorizeTokenInput);

        /** AuthorizeTokenInput type. */
        public type: websocket.Type;

        /** AuthorizeTokenInput token. */
        public token: string;

        /**
         * Encodes the specified AuthorizeTokenInput message. Does not implicitly {@link websocket.AuthorizeTokenInput.verify|verify} messages.
         * @param message AuthorizeTokenInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.AuthorizeTokenInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthorizeTokenInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthorizeTokenInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.AuthorizeTokenInput;
    }

    /** Properties of a TerminalMessage. */
    interface ITerminalMessage {

        /** TerminalMessage op */
        op?: (string|null);

        /** TerminalMessage data */
        data?: (string|null);

        /** TerminalMessage session_id */
        session_id?: (string|null);

        /** TerminalMessage rows */
        rows?: (number|null);

        /** TerminalMessage cols */
        cols?: (number|null);
    }

    /** Represents a TerminalMessage. */
    class TerminalMessage implements ITerminalMessage {

        /**
         * Constructs a new TerminalMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.ITerminalMessage);

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
         * Encodes the specified TerminalMessage message. Does not implicitly {@link websocket.TerminalMessage.verify|verify} messages.
         * @param message TerminalMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.TerminalMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TerminalMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TerminalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.TerminalMessage;
    }

    /** Properties of a TerminalMessageInput. */
    interface ITerminalMessageInput {

        /** TerminalMessageInput type */
        type?: (websocket.Type|null);

        /** TerminalMessageInput message */
        message?: (websocket.TerminalMessage|null);
    }

    /** Represents a TerminalMessageInput. */
    class TerminalMessageInput implements ITerminalMessageInput {

        /**
         * Constructs a new TerminalMessageInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.ITerminalMessageInput);

        /** TerminalMessageInput type. */
        public type: websocket.Type;

        /** TerminalMessageInput message. */
        public message?: (websocket.TerminalMessage|null);

        /**
         * Encodes the specified TerminalMessageInput message. Does not implicitly {@link websocket.TerminalMessageInput.verify|verify} messages.
         * @param message TerminalMessageInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.TerminalMessageInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TerminalMessageInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TerminalMessageInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.TerminalMessageInput;
    }

    /** Properties of a WsHandleExecShellInput. */
    interface IWsHandleExecShellInput {

        /** WsHandleExecShellInput type */
        type?: (websocket.Type|null);

        /** WsHandleExecShellInput cluster_id */
        cluster_id?: (number|null);

        /** WsHandleExecShellInput namespace */
        namespace?: (string|null);

        /** WsHandleExecShellInput pod */
        pod?: (string|null);

        /** WsHandleExecShellInput container */
        container?: (string|null);

        /** WsHandleExecShellInput card_id */
        card_id?: (number|null);
    }

    /** Represents a WsHandleExecShellInput. */
    class WsHandleExecShellInput implements IWsHandleExecShellInput {

        /**
         * Constructs a new WsHandleExecShellInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.IWsHandleExecShellInput);

        /** WsHandleExecShellInput type. */
        public type: websocket.Type;

        /** WsHandleExecShellInput cluster_id. */
        public cluster_id: number;

        /** WsHandleExecShellInput namespace. */
        public namespace: string;

        /** WsHandleExecShellInput pod. */
        public pod: string;

        /** WsHandleExecShellInput container. */
        public container: string;

        /** WsHandleExecShellInput card_id. */
        public card_id: number;

        /**
         * Encodes the specified WsHandleExecShellInput message. Does not implicitly {@link websocket.WsHandleExecShellInput.verify|verify} messages.
         * @param message WsHandleExecShellInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.WsHandleExecShellInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsHandleExecShellInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsHandleExecShellInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.WsHandleExecShellInput;
    }

    /** Properties of a WsHandleSetLangInput. */
    interface IWsHandleSetLangInput {

        /** WsHandleSetLangInput type */
        type?: (websocket.Type|null);

        /** WsHandleSetLangInput lang */
        lang?: (string|null);
    }

    /** Represents a WsHandleSetLangInput. */
    class WsHandleSetLangInput implements IWsHandleSetLangInput {

        /**
         * Constructs a new WsHandleSetLangInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.IWsHandleSetLangInput);

        /** WsHandleSetLangInput type. */
        public type: websocket.Type;

        /** WsHandleSetLangInput lang. */
        public lang: string;

        /**
         * Encodes the specified WsHandleSetLangInput message. Does not implicitly {@link websocket.WsHandleSetLangInput.verify|verify} messages.
         * @param message WsHandleSetLangInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.WsHandleSetLangInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsHandleSetLangInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsHandleSetLangInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.WsHandleSetLangInput;
    }

    /** Properties of a Metadata. */
    interface IMetadata {

        /** Metadata id */
        id?: (string|null);

        /** Metadata uid */
        uid?: (string|null);

        /** Metadata slug */
        slug?: (string|null);

        /** Metadata type */
        type?: (websocket.Type|null);

        /** Metadata end */
        end?: (boolean|null);

        /** Metadata result */
        result?: (websocket.ResultType|null);

        /** Metadata to */
        to?: (websocket.To|null);

        /** Metadata data */
        data?: (string|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.IMetadata);

        /** Metadata id. */
        public id: string;

        /** Metadata uid. */
        public uid: string;

        /** Metadata slug. */
        public slug: string;

        /** Metadata type. */
        public type: websocket.Type;

        /** Metadata end. */
        public end: boolean;

        /** Metadata result. */
        public result: websocket.ResultType;

        /** Metadata to. */
        public to: websocket.To;

        /** Metadata data. */
        public data: string;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link websocket.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.Metadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.Metadata;
    }

    /** Properties of a Container. */
    interface IContainer {

        /** Container namespace */
        namespace?: (string|null);

        /** Container pod */
        pod?: (string|null);

        /** Container container */
        container?: (string|null);

        /** Container cluster_id */
        cluster_id?: (number|null);
    }

    /** Represents a Container. */
    class Container implements IContainer {

        /**
         * Constructs a new Container.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.IContainer);

        /** Container namespace. */
        public namespace: string;

        /** Container pod. */
        public pod: string;

        /** Container container. */
        public container: string;

        /** Container cluster_id. */
        public cluster_id: number;

        /**
         * Encodes the specified Container message. Does not implicitly {@link websocket.Container.verify|verify} messages.
         * @param message Container message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.Container, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Container message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Container
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.Container;
    }

    /** Properties of a WsMetadataResponse. */
    interface IWsMetadataResponse {

        /** WsMetadataResponse metadata */
        metadata?: (websocket.Metadata|null);
    }

    /** Represents a WsMetadataResponse. */
    class WsMetadataResponse implements IWsMetadataResponse {

        /**
         * Constructs a new WsMetadataResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.IWsMetadataResponse);

        /** WsMetadataResponse metadata. */
        public metadata?: (websocket.Metadata|null);

        /**
         * Encodes the specified WsMetadataResponse message. Does not implicitly {@link websocket.WsMetadataResponse.verify|verify} messages.
         * @param message WsMetadataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.WsMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsMetadataResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsMetadataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.WsMetadataResponse;
    }

    /** Properties of a WsHandleShellResponse. */
    interface IWsHandleShellResponse {

        /** WsHandleShellResponse metadata */
        metadata?: (websocket.Metadata|null);

        /** WsHandleShellResponse terminal_message */
        terminal_message?: (websocket.TerminalMessage|null);

        /** WsHandleShellResponse container */
        container?: (websocket.Container|null);
    }

    /** Represents a WsHandleShellResponse. */
    class WsHandleShellResponse implements IWsHandleShellResponse {

        /**
         * Constructs a new WsHandleShellResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: websocket.IWsHandleShellResponse);

        /** WsHandleShellResponse metadata. */
        public metadata?: (websocket.Metadata|null);

        /** WsHandleShellResponse terminal_message. */
        public terminal_message?: (websocket.TerminalMessage|null);

        /** WsHandleShellResponse container. */
        public container?: (websocket.Container|null);

        /**
         * Encodes the specified WsHandleShellResponse message. Does not implicitly {@link websocket.WsHandleShellResponse.verify|verify} messages.
         * @param message WsHandleShellResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: websocket.WsHandleShellResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsHandleShellResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsHandleShellResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): websocket.WsHandleShellResponse;
    }
}
