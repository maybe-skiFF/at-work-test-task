import styles from './UserPage.module.css';
import { Header } from '../../components/Header/Header';
import arrowLeft from '../../../public/arrow-left.png';
import { UserAvatarSection } from '../../components/UserAvatarSection/UserAvatarSection';
const UserPage = () => {
  return (
    <div className={styles.userPageWrapper}>
      <Header />
      <div className={styles.userPageContent}>
        <button className={styles.backBtn}>
          <img
            className={styles.arrowLeftImg}
            src={arrowLeft}
            alt="arrowLeft"
          />
          Назад
        </button>
        <UserAvatarSection />
      </div>
    </div>
  );
};

export { UserPage };
