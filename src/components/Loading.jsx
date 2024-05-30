import styles from "./Loading.module.css";

export const Loading = () => {
    return (
        <div className={styles.loading_wrapper}>
            <h1>loading</h1>
            <div className={styles.loading_bar_container}>
                <div className={styles.loading_bar}></div>
            </div>
        </div>
    );
};
