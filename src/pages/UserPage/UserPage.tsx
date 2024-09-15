import styles from './UserPage.module.css';
import { Header } from '../../components/Header/Header';

const UserPage = () => {
  return (
    <div className={styles.userPageWrapper}>
      <Header />
    </div>
  );
};

export { UserPage };
