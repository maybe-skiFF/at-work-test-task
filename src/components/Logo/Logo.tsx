import styles from './Logo.module.css';
import logoImg from '../../../public/logo.png';

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={logoImg} alt="logoImg" />
      <p className={styles.logoText}>
        at-<strong>work</strong>
      </p>
    </div>
  );
};

export { Logo };
