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
      <div className="container mx-auto px-36 py-8 grid grid-cols-2 gap-5">
      {isPending ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        posts.map(({id, title, content, author, likes, createdAt}) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              content={content}
              author={author}
              likes={likes}
              createdAt={createdAt}
            />
          );
        })
      )}
      </div>
    </>
  );
}
