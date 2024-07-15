export declare function base64ArrayBufferToBase64UrlHashString(ab: ArrayBuffer): string;
export declare function base64UrlHashForArrayBuffer(buffer: ArrayBuffer, signal?: AbortSignal | undefined): Promise<string>;
export declare function base64UrlHashForFile(file: File, signal?: AbortSignal | undefined): Promise<string>;
export declare function base64UrlHashForFilePath(path: string): Promise<string>;
