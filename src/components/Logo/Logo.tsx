import styles from './Logo.module.css';
import logoImg from '../../../public/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className={styles.logoWrapper}>
        <img src={logoImg} alt="logoImg" />
        <p className={styles.logoText}>
          at-<strong>work</strong>
        </p>
      </div>
    </Link>
  );
};

export { Logo };
