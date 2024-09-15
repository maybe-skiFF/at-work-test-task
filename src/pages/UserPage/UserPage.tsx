import styles from './UserPage.module.css';
import { Header } from '../../components/Header/Header';
import arrowLeft from '../../../public/arrow-left.png';
import { UserAvatarSection } from '../../components/UserAvatarSection/UserAvatarSection';
import { UserDataSection } from '../../components/UserDataSection/UserDataSection';
import { Link } from 'react-router-dom';
const UserPage = () => {
  return (
    <div className={styles.userPageWrapper}>
      <Header />
      <div className={styles.userPageContent}>
        <Link style={{ textDecoration: 'none', width: 'max-content' }} to="/">
          <button className={styles.backBtn}>
            <img
              className={styles.arrowLeftImg}
              src={arrowLeft}
              alt="arrowLeft"
            />
            Назад
          </button>
        </Link>
        <div className={styles.userSections}>
          <UserAvatarSection />
          <UserDataSection />
        </div>
      </div>
    </div>
  );
};

export { UserPage };
