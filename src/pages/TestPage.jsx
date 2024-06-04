import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { ModalContext } from "../contexts/ModalContext";

export default function TestPage() {
    const { setIsModalOpen } = useContext(ModalContext);

    return (
        <div className="wrapper">
            <DataContext.Provider value={10}>
                <C1 />
            </DataContext.Provider>
        </div>
    );
}

const C1 = () => {
    return (
        <div className="wrapper">
            <C2 />
        </div>
    );
};
const C2 = () => {
    return (
        <div className="wrapper">
            <C3 />
        </div>
    );
};
const C3 = () => {
    const data = useContext(DataContext);

    return <div className="wrapper">{data}</div>;
};
