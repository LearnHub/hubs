import { ConnectServices } from "./connect-services.js";
export declare const GenericMediaType = "application/octet-stream";
export declare function guessMimeTypeForFile(ConnectServices: ConnectServices, file: File): Promise<string | undefined>;
export declare function guessMimeTypeForExtension(ConnectServices: ConnectServices, extension: string): Promise<string | undefined>;
export declare function iconForMediaType(mediaType: string): URL;
