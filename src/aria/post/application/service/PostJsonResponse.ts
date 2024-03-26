import type { Post } from "../../domain/Post";
import type { PostResponse } from "../../domain/PostResponse";

export class PostJsonResponse implements PostResponse {
    private _posts: Array<Post> | Post;

    // Overloads
    constructor(post: Post);
    constructor(posts: Array<Post>);
    constructor(arg: Post | Array<Post>) {
        this._posts = arg;
    }

    getResponse(): Array<Post> | Post {
        return this._posts;
    }

    getStringResponse(): string {
        return JSON.stringify(this._posts);
    }
}