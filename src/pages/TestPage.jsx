import { useContext } from "react";

import { ModalContext } from "../contexts/ModalContext";

export default function TestPage() {
    const { setIsModalOpen } = useContext(ModalContext);

    return (
        <div className="wrapper">
            <button onClick={() => setIsModalOpen(true)}>모달 열려랏!</button>
        </div>
    );
}
