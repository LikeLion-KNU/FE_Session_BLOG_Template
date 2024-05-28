import styles from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_container}>
                <li>
                    <a href="/">MY BLOG</a>
                </li>

                <li style={{ flexGrow: 1 }} />

                <li>
                    <a href="/">글 목록</a>
                </li>

                <li>
                    <a href="/post/new">글작성</a>
                </li>
            </ul>
        </nav>
    );
};
