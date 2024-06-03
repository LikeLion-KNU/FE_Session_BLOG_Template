import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = ({ id, title, author, likes, createdAt }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.card_wrapper} onClick = {() => navigate(`/posts/${id}`)}>
            <h3 className={styles.card_head}>
                <span>{title}</span>
                <span>💛{likes}</span>
            </h3>
            <p>글쓴이 : {author}</p>
            <p>작성일 : {createdAt}</p>
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
