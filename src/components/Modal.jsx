import styles from "./Modal.module.css";

export const Modal = () => {
    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal_container}>
                <button>닫기</button>
            </div>
        </div>
    );
};
