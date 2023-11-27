import { CreateDimensionRequest, CreateDimensionResponse, DimensionEvent, JoinDimensionRequest, SetLessonContextRequest, SetLessonContextResponse } from "./dimensions_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.DimensionService
 */
export declare const DimensionService: {
    readonly typeName: "avn.connect.v1.DimensionService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.DimensionService.CreateDimension
         */
        readonly createDimension: {
            readonly name: "CreateDimension";
            readonly I: typeof CreateDimensionRequest;
            readonly O: typeof CreateDimensionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.DimensionService.JoinDimension
         */
        readonly joinDimension: {
            readonly name: "JoinDimension";
            readonly I: typeof JoinDimensionRequest;
            readonly O: typeof DimensionEvent;
            readonly kind: MethodKind.ServerStreaming;
        };
        /**
         * @generated from rpc avn.connect.v1.DimensionService.SetLessonContext
         */
        readonly setLessonContext: {
            readonly name: "SetLessonContext";
            readonly I: typeof SetLessonContextRequest;
            readonly O: typeof SetLessonContextResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
