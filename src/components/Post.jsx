import styles from './Post.module.css';

export const Post = ({ id, title, author, likes, createdAt, content }) => {
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
    </div>
  );
};
