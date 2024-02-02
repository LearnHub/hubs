import { HashBase } from "./HashBase";
export declare class Sha256 extends HashBase {
    constructor();
    private _w;
    private _a;
    private _b;
    private _c;
    private _d;
    private _e;
    private _f;
    private _g;
    private _h;
    private ch;
    private maj;
    private sigma0;
    private sigma1;
    private gamma0;
    private gamma1;
    protected _update(M: Uint8Array): void;
    protected _hash(): Uint8Array;
}
