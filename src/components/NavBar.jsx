import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_container}>
                <li>
                    <Link to={"/"}>MY BLOG</Link>
                </li>

                <li style={{ flexGrow: 1 }} />

                <li>
                    <Link to={"/"}>글 목록</Link>
                </li>

                <li>
                    <Link to={"/posts/new"}>글 작성</Link>
                </li>
            </ul>
        </nav>
    );
};
