import styles from './UserItem.module.css';

const UserItem = () => {
  return (
    <div className={styles.userItemContainer}>
      <div className={styles.userItemImgWrapper}>
        {/* <img className={styles.userItemImg} src={userAvatar} alt="userAvatar" /> */}
      </div>
      <div className={styles.userItemContent}>
        <div className={styles.userItemDiscription}>
          <span className={styles.userItemName}>UserName</span>
          <span className={styles.userItemCompany}>Company Name</span>
          <span className={styles.userItemCity}>City</span>
        </div>
        <div className={styles.dropdownBtn}></div>
      </div>
    </div>
  );
};

export { UserItem };
