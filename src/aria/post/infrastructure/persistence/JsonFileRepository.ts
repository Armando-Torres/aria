import { Post } from "../../domain/Post";
import type { PostRepository } from "../../domain/PostRepository";

import { readFileSync, writeFileSync } from "fs";

export class JsonFileRepository implements PostRepository{
    private path: string;
    private posts: Array<Post>;

    constructor(path: string) {
        this.path = path;
        this.posts = [];
        this.mappingContent();
    }

    private mappingContent(): void {
        const rawContent = JSON.parse(readFileSync(this.path, 'utf-8'));

        for (const element of rawContent) {
            this.posts.push(
                new Post(element.title, element.body)
            );
        }
    }

    save(post: Post): void {
        this.posts.push(post);

        writeFileSync(this.path, JSON.stringify(this.posts));
    }

    findById(postId: number): Post {
        throw new Error("Method not implemented.");
    }

    findAll(): Post[] {
        return this.posts;
    }
}