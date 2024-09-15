import { UserItem } from '../UserItem/UserItem';
import styles from './ActiveUsersList.module.css';

const ActiveUsersList = () => {
  return (
    <div className={styles.activeUsersListWrapper}>
      <p className={styles.title}>Активные</p>
      <UserItem />
    </div>
  );
};

export { ActiveUsersList };
