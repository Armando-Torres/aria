import type { Post } from "./Post";

export interface PostResponse {
    getResponse(): Array<Post> | Post;
    getStringResponse(): string;
}