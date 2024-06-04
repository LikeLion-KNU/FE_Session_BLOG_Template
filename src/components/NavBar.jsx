import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
        <div className="h-[60px]"/>

        <nav className="w-full h-[60px] bg-[#303030] text-white fixed top-0">
            <ul className="flex items-center gap-5 w-[80%] h-full mx-auto list-none">
                <li className="text-2xl font-bold">
                    <Link to="/">Blog</Link>
                </li>

                <li style={{ flexGrow: 1 }} />

                <li>
                <Link to="/">글 목록</Link>
                </li>

                <li>
                <Link to="/posts/new">새 글 쓰기</Link>
                </li>
            </ul>
        </nav>
        </>
    );
};
