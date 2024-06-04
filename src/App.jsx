import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import NewPostPage from "./pages/NewPostPage";
import TestPage from "./pages/TestPage";
import { Modal } from "./components/Modal";
import { useContext } from "react";
import { ModalContext } from "./contexts/ModalContext";

export default function App() {
    const { isModalOpen } = useContext(ModalContext);

    return (
        <>
            <NavBar />
            {isModalOpen && <Modal />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/:id" element={<PostPage />} />
                <Route path="/posts/new" element={<NewPostPage />} />
                <Route path="/test" element={<TestPage />}></Route>
            </Routes>
        </>
    );
}
