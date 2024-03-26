import type { Post } from "../domain/Post";
import type { PostRepository } from "../domain/PostRepository";
import type { PostResponse } from "../domain/PostResponse";
import type { PostUseCase } from "../domain/PostUseCase";
import { PostJsonResponse } from "./service/PostJsonResponse";

export class GetAllPosts implements PostUseCase{
    postRepository: PostRepository;

    constructor(repository: PostRepository) {
        this.postRepository = repository;
    }

    execute(): PostResponse{
        let post: Array<Post>;

        try {
            post = this.postRepository.findAll();

        } catch (error: unknown) {
            throw Error(`Posts not found`);
        }

        return new PostJsonResponse(post);
    }
}