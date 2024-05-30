import { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const [isPending, setIsPending] = useState(false);
    const [post, setPost] = useState([]);
    const params = useParams();

    useEffect(() => {
        setIsPending(true);
        fetch(`http://localhost:8080/posts/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            }).finally(() => {
                setIsPending(false);
            })
    
    }, [params.id]);

    return (
        <>
            {isPending ? (
            <>
                <p>로딩중 ...</p>
            </>
            ) : (
            <Post
                id={post.id}
                title={post.title}
                author={post.author}
                likes={post.likes}
                createdAt={post.createdAt}
                content={post.content}
            />
            )}
        </>
    );
}
