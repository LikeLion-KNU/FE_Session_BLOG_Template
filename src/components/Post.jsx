import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

export const Post = ({ id, title, author, likes, createdAt, content }) => {
    const Navigate = useNavigate();

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
            <button className={styles.btn} onClick={() => Navigate(-1)}>뒤로가기</button>
		</div>
	);
};