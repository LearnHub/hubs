export declare abstract class HashBase {
    private _blockSize;
    private _finalSize;
    constructor(_blockSize: number, _finalSize: number);
    private _block;
    private _len;
    update(data: Uint8Array): this;
    digest(): Uint8Array;
    protected abstract _update(buffer: Uint8Array): void;
    protected abstract _hash(): Uint8Array;
}
