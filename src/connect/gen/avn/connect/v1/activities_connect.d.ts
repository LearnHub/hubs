import { Activity, AddActivityFilesRequest, GetActivityRequest, RemoveActivityFilesRequest, RemoveAllActivityFilesRequest, SearchActivitiesRequest, SearchActivitiesResponse } from "./activities_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { SetPropertyRequest } from "./properties_pb.js";
/**
 * @generated from service avn.connect.v1.ActivityService
 */
export declare const ActivityService: {
    readonly typeName: "avn.connect.v1.ActivityService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.ActivityService.GetActivity
         */
        readonly getActivity: {
            readonly name: "GetActivity";
            readonly I: typeof GetActivityRequest;
            readonly O: typeof Activity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Activity file management
         *
         * @generated from rpc avn.connect.v1.ActivityService.AddFiles
         */
        readonly addFiles: {
            readonly name: "AddFiles";
            readonly I: typeof AddActivityFilesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.RemoveFiles
         */
        readonly removeFiles: {
            readonly name: "RemoveFiles";
            readonly I: typeof RemoveActivityFilesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.RemoveAllFiles
         */
        readonly removeAllFiles: {
            readonly name: "RemoveAllFiles";
            readonly I: typeof RemoveAllActivityFilesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search all published activities in the given channel
         *
         * @generated from rpc avn.connect.v1.ActivityService.SearchActivities
         */
        readonly searchActivities: {
            readonly name: "SearchActivities";
            readonly I: typeof SearchActivitiesRequest;
            readonly O: typeof SearchActivitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.SetProperty
         */
        readonly setProperty: {
            readonly name: "SetProperty";
            readonly I: typeof SetPropertyRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
