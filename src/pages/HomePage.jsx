import { Suspense } from 'react';
import { Card, CardSkeleton } from '../components/Card';
import { useQuery } from 'react-query';

export default function HomePage() {
  const { data: posts, isPending } = useQuery([], () =>
    fetch('http://localhost:8080/posts').then((res) => res.json()),
  );

  return (
    <Suspense
      isPending={isPending}
      fallback={
        <>
          {new Array(4).map((i) => (
            <CardSkeleton key={i} />
          ))}
        </>
      }>
      {posts?.map((post) => {
        return <Card key={post.id} {...post} />;
      })}
    </Suspense>
  );
}
