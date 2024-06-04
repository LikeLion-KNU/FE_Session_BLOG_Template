import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_container}>
                <li>
                    <Link to="/">MY BLOG</Link>
                </li>

                <li style={{ flexGrow: 1 }} />

                <li>
                    <Link to="/">MY BLOG</Link>
                </li>

                <li>
                    <Link to="/posts/new">MY BLOG</Link>
                </li>
            </ul>
        </nav>
    );
};
