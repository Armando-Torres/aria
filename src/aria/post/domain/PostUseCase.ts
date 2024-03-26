import type { PostResponse } from "./PostResponse";

export interface PostUseCase {
    execute(): PostResponse;
}