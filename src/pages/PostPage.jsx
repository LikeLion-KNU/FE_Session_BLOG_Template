import { useEffect, useState } from "react";
import { Post,Hhh } from "../components/Post";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export default function PostPage() {
    const [isPending, setIsPending] = useState(false);
    const [post, setPost] = useState([]);
    const parms = useParams();

    useEffect(() => {
        setIsPending(true);
        fetch(`http://localhost:8080/posts/${parms.id}`)
            .then((response) => response.json())
            .then((post) => {setPost(post);})
            .finally(() => {setIsPending(false);});
    }, []);

    return (
        <>
            {isPending ? (
            <>
                <Container>로딩중 ... ⏳</Container>
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

