import styles from './UserAvatarSection.module.css';
// import userAvatar from '../../../public/user-avatar-big.png';

const UserAvatarSection = () => {
  return (
    <div className={styles.userAvatarSectionWrapper}>
      {/* <img className={styles.userAvatarImg} src={userAvatar} alt="userAvatar" /> */}
      <div className={styles.userAvatarImg}></div>
      <div>
        <p
          className={`${styles.userDescription} ${styles.userDescriptionActive}`}
        >
          Данные профиля
        </p>
        <p className={styles.userDescription}>Рабочее пространство</p>
        <p className={styles.userDescription}>Приватность</p>
        <p className={styles.userDescription}>Безопасность</p>
      </div>
    </div>
  );
};

export { UserAvatarSection };
