import type { Post } from "./Post";

export interface PostRepository {
    save(post: Post): void;

    findById(postId: number): Awaited<Post>;

    findAll(): Awaited<Array<Post>>;
}