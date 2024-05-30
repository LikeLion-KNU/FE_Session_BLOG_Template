import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import NewPostPage from "./pages/NewPostPage";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/posts/:id" element={<PostPage/>}/>
        <Route path="/posts/new" element={<NewPostPage/>}/>
      </Routes>
    </>
  );
}
