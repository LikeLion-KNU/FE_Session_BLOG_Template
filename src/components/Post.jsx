import { useNavigate } from "react-router-dom";
import styles from "./Post.module.css";

export const Post = ({ id, title, author, likes, createdAt, content }) => {
    const navigate = useNavigate();

	const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1+
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${year}년 ${month}월 ${day}일 (${hours < 10 ? '0' + hours : hours}시 ${minutes < 10 ? '0' + minutes : minutes}분)`;

	return (
		<div className={styles.post_wrapper}>
			<p className={styles.date}>{formattedDate}</p>

			<div className={styles.info}>
				<h1>{title}</h1>
				<h2>By. {author}</h2>
			</div>

			<div className={styles.hr}></div>
			<div className={styles.likes}>
				<h4 className={styles.id}>Post #{id}</h4>
				<span>{likes} ⭐</span>
			</div>
			<p className={styles.content}>{content}</p>
			<div className={styles.hr}></div>

			<div className={styles.footer}>
				<button className={styles.to_posts} onClick={() => {navigate("/")}}>목록으로</button>
				<div className={styles.control}>
					<button onClick={() => {navigate(`/posts/${id-1}`)}}>이전</button>
					<button onClick={() => {navigate(`/posts/${id+1}`)}}>다음</button>
				</div>
			</div>
		</div>
	);
};

export const PostSkeleton = () => {
	return (
		<div className={styles.post_wrapper}>
			<div className={`${styles.skeleton} ${styles.skeleton_date}`}></div>
			<div className={`${styles.skeleton} ${styles.skeleton_title}`}></div>
			<div className={`${styles.skeleton} ${styles.skeleton_author}`}></div>
			<div className={styles.hr}></div>
			<div className={styles.likes}>
				<div className={`${styles.skeleton} ${styles.skeleton_id}`}></div>
				<div className={`${styles.skeleton} ${styles.skeleton_like}`}></div>
			</div>
			<div className={styles.skeleton_content}>
				<div className={styles.skeleton}></div>
				<div className={styles.skeleton}></div>
				<div className={styles.skeleton}></div>
				<div className={styles.skeleton}></div>
			</div>
		</div>
	);
};