import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_container}>
                <li>
                    <Link href="/">MY BLOG</Link>
                </li>

                <li style={{ flexGrow: 1 }} />

                <li>
                    <Link href="/">글 목록</Link>
                </li>

                <li>
                    <Link href="/post/new">글작성</Link>
                </li>
            </ul>
        </nav>
    );
};
