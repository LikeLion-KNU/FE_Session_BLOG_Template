import { useEffect, useState } from "react";
import { Post } from "../components/Post";
import { useParams } from "react-router-dom";
// import axios from "axios";
export default function PostPage() {
  const [isPending, setIsPending] = useState(false);
  const [post, setPost] = useState([]);

  const param = useParams();
  useEffect(() => {
    setIsPending(true);
    // axios.get(`http://localhost:8080/posts/${param.id}`)
    fetch(`http://localhost:8080/posts/${param.id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setPost(result);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {isPending ? (
        <div className="loading-wrapper">
          <div className="loading-content">
            <p>로딩중...</p>
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
