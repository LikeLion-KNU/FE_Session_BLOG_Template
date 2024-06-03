import { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { useParams } from "react-router-dom";
import "./Loading.css"; // CSS 파일 임포트

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
            .finally(() => {
                setIsPending(false);
            })
    }, []);

    return (
        <>
            {isPending ? (
                <div className="loading-container">
                    <div className="spinner">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className = "loading-text">
                        <div>🦁잠시만 기다려 주세요~</div>
                    </div>
                </div>
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
