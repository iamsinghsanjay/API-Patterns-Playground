import { useEffect, useState } from "react"
import { fetchPosts } from "../api/fetchPosts"
import type { Post } from "../types/post"

export default function FetchExample() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const data = await fetchPosts()
                setPosts(data)
            } catch (err) {
                setError("Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        loadPosts()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1>Fetch API Example</h1>

            {posts.slice(0, 5).map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}