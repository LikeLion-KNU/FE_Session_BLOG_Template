import { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { useParams } from "react-router-dom";


export default function PostPage() {
    const [isPending, setIsPending] = useState(false);
    const [post, setPost] = useState([]);
    const params = useParams();
    const loading = {
        fontSize: '40px',
        color: '#303030',
        textAlign: 'center'

    };
    const container = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };


    useEffect(() => {
        setIsPending(true);
        fetch(`http://localhost:8080/posts/${params.id}`)
        .then((response) => {
            return response.json();
        })
        .then((post)=>{
            setPost(post);
        })
        .finally(()=>{
            setIsPending(false);
        })
    },[]);

    return (
        <div style={container}>
            {isPending ? (
            <>
                <p style={loading}>Loading ...</p>
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
        </div>
    );
}
