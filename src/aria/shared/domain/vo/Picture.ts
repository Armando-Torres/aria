export class Picture {
    protected _path: string;

    constructor(path: string) {
        this._path = path;
    }

    get path(): string {
        return this._path;
    }
}