import { useContext } from "react";
import styles from "./Modal.module.css";
import { ModalContext } from "../contexts/ModalContext";

export const Modal = () => {
    const { setIsModalOpen } = useContext(ModalContext);

    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal_container}>
                <button onClick={() => setIsModalOpen(false)}>닫기</button>
            </div>
        </div>
    );
};
