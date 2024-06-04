import { useEffect, useState } from "react";
import { Post } from "../components/Post.jsx";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const [isPending, setIsPending] = useState(false);
    const [post, setPost] = useState([]);
    const params = useParams();

    useEffect(() => {
        setIsPending(true);
        fetch(`http://localhost:8080/posts/${params.id}`)
        .then((response) => {
            return response.json();
        })
        .then((post) => {
            setPost(post);
        })
        .finally(() =>{
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