import { useEffect, useState } from "react";
import { Post, PostSkeleton } from "../components/Post";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const [isPending, setIsPending] = useState(false);
    const [post, setPost] = useState([]);

    const params = useParams();

    useEffect(() => {
        setIsPending(true);
        fetch(`http://localhost:8080/posts/${params.id}`)
        .then((res) => {
            return res.json();
        })
        .then((post) => {
            console.log(post);
            // post를 받아오면 state 변경
            setPost(post);
        })
        .finally(() => {
            // 받아왔으니 로딩 해제
            setIsPending(false);
        })
    }, [])

    return (
        <>
            {isPending ? <PostSkeleton /> : <Post id={post.id}
                                                  title={post.title}
                                                  author={post.author}
                                                  likes={post.likes}
                                                  createdAt={post.createdAt}
                                                  content={post.content} /> }
        </>
    );
}
