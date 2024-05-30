import { Suspense } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Post } from '../components/Post';

export default function PostPage() {
  const params = useParams();

  const { data: post, isPending } = useQuery(
    [params.id],
    () =>
      params?.id &&
      fetch(`http://localhost:8080/posts/${params.id}`).then((res) =>
        res.json(),
      ),
  );

  return (
    <Suspense isPending={isPending} fallback={<h1>로딩중...</h1>}>
      {post && <Post {...post} />}
    </Suspense>
  );
}
