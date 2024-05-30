import { useEffect, useState } from "react";
import { Card, CardSkeleton } from "../components/Card";

export default function HomePage() {
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
      {isPending ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        posts.map((post) => {
          return (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
              likes={post.likes}
              createdAt={post.createdAt}
            />
          );
        })
      )}
    </>
  );
}
