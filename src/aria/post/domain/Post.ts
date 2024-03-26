import type { Link } from "../../shared/domain/vo/Link";
import type { Picture } from "../../shared/domain/vo/Picture";
import type { Video } from "../../shared/domain/vo/Video";

export class Post {
    private _title: string;

    private _videos: Array<Video>;

    private _images: Array<Picture>;

    private _body: string;

    private _links: Array<Link>;

    private _attatchments: Array<File>;

    constructor(title: string, body: string) {
        this._title = title;
        this._body = body;
        this._videos = [];
        this._images = [];
        this._links = [];
        this._attatchments = [];
    }

    get title(): string {
        return this._title;
    }

    get body(): string {
        return this._body;
    }

    get bodyFormatted(): string {
        return this.bodyWithContents();
    }

    get videos(): Array<Video> {
        return this._videos;
    }

    get images(): Array<Picture> {
        return this._images;
    }

    get attatchments(): Array<File> {
        return this._attatchments;
    }

    get links(): Array<Link> {
        return this._links;
    }

    private bodyWithContents(): string {
        return "";
    }
}