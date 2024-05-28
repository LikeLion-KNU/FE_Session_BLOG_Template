import { useEffect, useState } from "react";
import { Card, CardSkeleton } from "./components/Card";
import { NavBar } from "./components/NavBar";

export default function App() {
    const [isPending, setIsPending] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setIsPending(true);
        fetch("http://localhost:8080/posts")
            .then((response) => {
                return response.json();
            })
            .then((posts) => {
                setPosts(posts);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, []);

    return (
        <>
            <NavBar />

            {isPending ? (
                <>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </>
            ) : (
                posts.map((post) => {
                    return <Card key={post.id} title={post.title} author={post.author} likes={post.likes} createdAt={post.createdAt} />;
                })
            )}
        </>
    );
}
