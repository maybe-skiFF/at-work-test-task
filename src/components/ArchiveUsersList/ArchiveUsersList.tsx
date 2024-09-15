import { UserItem } from '../UserItem/UserItem';
import styles from './ArchiveUsersList.module.css';

const ArchiveUsersList = () => {
  return (
    <div className={styles.archiveUsersListWrapper}>
      <p className={styles.title}>Архив</p>
      <UserItem isActiveUsers={false} />
    </div>
  );
};

export { ArchiveUsersList };
