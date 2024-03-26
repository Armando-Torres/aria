export class Video {
    protected _title: string;

    protected _path: string;

    constructor(title: string, path: string) {
        this._title = title;
        this._path = path;
    }

    get title(): string {
        return this._title;
    }

    get path(): string {
        return this._path;
    }
}