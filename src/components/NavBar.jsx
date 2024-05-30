import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className={styles.nav_wrapper}>
      <ul className={styles.nav_container}>
        <li>
          <NavLink to="/">MY BLOG</NavLink>
        </li>

        <li style={{ flexGrow: 1 }} />

        <li>
          <NavLink to="/">글 목록</NavLink>
        </li>

        <li>
          <NavLink to="/post/new">글작성</NavLink>
        </li>
      </ul>
    </nav>
  );
};
