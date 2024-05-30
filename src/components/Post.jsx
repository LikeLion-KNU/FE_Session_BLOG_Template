import { useNavigate } from 'react-router-dom';
import styles from './Post.module.css';
import { useCallback } from 'react';

export const Post = ({ id, title, author, likes, createdAt, content }) => {
  const navigate = useNavigate();

  const onBackClicked = useCallback(() => navigate(-1), [navigate]);

  return (
    <div className={styles.post_wrapper}>
      <h4>#{id}번째 게시글</h4>
      <h1 className={styles.post_head}>
        <span>{title}</span>
        <span>❤️ {likes}</span>
      </h1>
      <div className={styles.post_auth}>
        <span>{author}</span>
        <span>{createdAt}</span>
      </div>
      <div className={styles.post_content}>
        <p>{content}</p>
      </div>
      <button onClick={onBackClicked}>뒤로가기</button>
    </div>
  );
};
