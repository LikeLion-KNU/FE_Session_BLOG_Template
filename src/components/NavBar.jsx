import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useCallback } from 'react';

export const NavBar = () => {
  const navigate = useNavigate();

  const onNavItemClicked = useCallback((path) => navigate(path), [navigate]);

  return (
    <nav className={styles.nav_wrapper}>
      <ul className={styles.nav_container}>
        <li>
          <a onClick={() => onNavItemClicked('/')} href='/'>
            MY BLOG
          </a>
        </li>

        <li style={{ flexGrow: 1 }} />

        <li>
          <a onClick={() => onNavItemClicked('/')} href='/'>
            글 목록
          </a>
        </li>

        <li>
          <a onClick={() => onNavItemClicked('/posts/new')} href='/posts/new'>
            글작성
          </a>
        </li>
      </ul>
    </nav>
  );
};
