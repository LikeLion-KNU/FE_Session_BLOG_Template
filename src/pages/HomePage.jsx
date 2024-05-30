import { Card, CardSkeleton } from '../components/Card';
import { useQuery } from 'react-query';

export default function HomePage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['@POSTS_KEY'],
    queryFn: () =>
      fetch('http://localhost:8080/posts').then((res) => res.json()),
  });

  return (
    <>
      {isLoading
        ? new Array(4).map((i) => <CardSkeleton key={i} />)
        : posts?.map((post) => <Card key={post.id} {...post} />)}
    </>
  );
}
