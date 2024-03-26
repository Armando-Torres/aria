import { Post } from "../domain/Post";
import type { PostRepository } from "../domain/PostRepository";
import type { PostResponse } from "../domain/PostResponse";
import type { PostUseCase } from "../domain/PostUseCase";
import { PostJsonResponse } from "./service/PostJsonResponse";
import type { PostRequest } from "./service/PostRequest";

export class AddPost implements PostUseCase{
    postRequest: PostRequest;
    postRepository: PostRepository;

    constructor(post: PostRequest, repository: PostRepository) {
        this.postRequest = post;
        this.postRepository = repository;
    }

    execute(): PostResponse{
        let post: Post;

        try {
            post = new Post(this.postRequest.title, this.postRequest.body);

            this.postRepository.save(post);

        } catch (error: unknown) {
            throw Error(`Post named: ${this.postRequest.title} can't be created`);
        }

        return new PostJsonResponse(post);
    }
}