import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Post } from '../components/Post';

export default function PostPage() {
  const params = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: [params.id],
    queryFn: () =>
      params?.id &&
      fetch(`http://localhost:8080/posts/${params.id}`).then((res) =>
        res.json(),
      ),
  });

  return <>{isLoading ? <p>로딩중</p> : <Post {...post} />}</>;
}
