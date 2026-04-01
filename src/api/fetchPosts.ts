import type { Post } from "../types/post"

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }

    return response.json()
}