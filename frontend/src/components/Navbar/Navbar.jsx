import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2 6 4 8.5 1.5 1.8 2 3.5 2 3.5s.5-1.7 2-3.5c2-2.5 4-5 4-8.5 0-3.5-2.5-6-6-6z"
                fill="currentColor"
                opacity="0.9"
              />
              <path
                d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                fill="white"
                opacity="0.6"
              />
            </svg>
          </span>
          <span className={styles.logoText}>
            Potato<span className={styles.logoAccent}>Detect</span>
          </span>
        </Link>

        <div className={styles.links}>
          <Link
            to="/"
            className={`${styles.link} ${isActive('/') ? styles.linkActive : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${styles.link} ${isActive('/about') ? styles.linkActive : ''}`}
          >
            About
          </Link>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
