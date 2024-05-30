import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_container}>
                <li>
                    <Link to={"/"}>Soeun Nam's Blog</Link>
                </li>

                <li style={{ flexGrow: 1 }} />

                <li>
                    <Link to={"/"}>home</Link>
                </li>

                <li>
                    <Link to={"/post/new"}>post</Link>
                </li>
            </ul>
        </nav>
    );
};
