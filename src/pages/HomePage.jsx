import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Pagination } from "antd";

export default function HomePage() {
  const [isPending, setIsPending] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = posts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      {isPending ? (
        <div className="loading-wrapper">
          <div className="loading-content">
            <p>로딩중...</p>
          </div>
        </div>
      ) : (
        paginatedPosts.map((post) => {
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
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={posts.length}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}
