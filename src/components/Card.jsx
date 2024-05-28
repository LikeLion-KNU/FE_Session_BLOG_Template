import styles from "./Card.module.css";

export const Card = ({ title, author, likes, createdAt }) => {
    return (
        <div className={styles.card_wrapper}>
            <h3 className={styles.card_head}>
                <span>{title}</span>
                <span>❤️ {likes}</span>
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
