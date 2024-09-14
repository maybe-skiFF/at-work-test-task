import styles from './HeaderMenu.module.css';

import likesImg from '../../../public/likes.png';
import bellImg from '../../../public/bell.png';
import userImg from '../../../public/user-img-small.png';

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenuWrapper}>
      <div className={styles.favoriteWrapper}>
        <img className={styles.favoriteImg} src={likesImg} alt="likesImg" />
        <img src={bellImg} alt="bellImg" />
      </div>
      <div className={styles.userInfoWrapper}>
        <img className={styles.userInfoImg} src={userImg} alt="userImg" />
        <span className={styles.userInfoName}>UserName</span>
      </div>
    </div>
  );
};

export { HeaderMenu };
