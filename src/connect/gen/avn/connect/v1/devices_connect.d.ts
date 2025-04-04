import { AuthorizeDeviceRequest, AuthorizeDeviceResponse } from "./devices_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.DeviceService
 */
export declare const DeviceService: {
    readonly typeName: "avn.connect.v1.DeviceService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.DeviceService.AuthorizeDevice
         */
        readonly authorizeDevice: {
            readonly name: "AuthorizeDevice";
            readonly I: typeof AuthorizeDeviceRequest;
            readonly O: typeof AuthorizeDeviceResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
