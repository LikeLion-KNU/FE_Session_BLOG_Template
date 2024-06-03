import { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";

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
      });
  }, [params]);
  return (
    <>
      {isPending ? (
        <>
          {/* 로딩텍스트 대신 프로그레스 바 추가 */}
          <LinearProgress />
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
