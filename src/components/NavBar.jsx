import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.nav_wrapper}>
      <ul className={styles.nav_container}>
        <li>
          <Link to="/">MY BLOG</Link>
        </li>

        <li style={{ flexGrow: 1 }} />

        <li>
          <Link to="/">글 목록</Link>
        </li>

        <li>
          <Link to="/posts/new">글작성</Link>
        </li>
      </ul>
    </nav>
  );
};
