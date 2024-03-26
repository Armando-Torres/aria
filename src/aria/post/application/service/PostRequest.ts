export class PostRequest {
    private _title: string;

    private _body: string;

    constructor(title: string, body: string) {
        this._title = title;
        this._body = body;
    }

    get title(): string {
        return this._title;
    }

    get body(): string {
        return this._body;
    }
}