import { UserItem } from '../UserItem/UserItem';
import styles from './ActiveUsersList.module.css';

const ActiveUsersList = () => {
  const isActiveUsers = true;

  return (
    <div className={styles.activeUsersListWrapper}>
      <p className={styles.title}>Активные</p>
      <UserItem isActiveUsers={isActiveUsers} />
    </div>
  );
};

export { ActiveUsersList };
