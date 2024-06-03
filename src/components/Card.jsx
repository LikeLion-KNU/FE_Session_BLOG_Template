import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = ({ id, title, content, author, likes, createdAt }) => {
    const navigate = useNavigate();

    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1+
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${year}년 ${month}월 ${day}일 (${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes})`;

    return (
        <div className={styles.card_wrapper} onClick={() => {navigate(`/posts/${id}`)}}>
            <p className={styles.author}>{author}</p>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.content}>{content}</h3>

            <div className={styles.info_box}>
                <p className={styles.date}>{formattedDate}</p>
                <span>{likes} ⭐</span>
            </div>
        </div>
    );
};

export const CardSkeleton = () => {
    return (
        <div className={styles.card_wrapper}>
            <div className={`${styles.skeleton} ${styles.skeleton_head}`}></div>
            <div className={`${styles.skeleton} ${styles.skeleton_text}`}></div>
            <div className={`${styles.skeleton} ${styles.skeleton_text}`}></div>
        </div>
    );
};
