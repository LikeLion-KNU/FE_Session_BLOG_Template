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
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "left", alignItems: "left", maxWidth: "1050px", margin: "30px auto 30px auto"}}>
      {isPending ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <>
          {posts.map((post) => {
            return (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                author={post.author}
                likes={post.likes}
                createdAt={post.createdAt}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
