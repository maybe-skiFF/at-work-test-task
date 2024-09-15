import { useSelector } from 'react-redux';
import { UserItem } from '../UserItem/UserItem';
import styles from './ArchiveUsersList.module.css';
import { RootState } from '../../redux/store';
import { IUserData } from '../../interfaces';

const ArchiveUsersList = () => {
  const isActiveUsers = false;
  const archivedUsersData = useSelector(
    (state: RootState) => state.usersData.archivedUsers,
  );

  return (
    <div className={styles.archiveUsersListWrapper}>
      <p className={styles.title}>Архив</p>
      <div className={styles.usersWrapper}>
        {archivedUsersData.length ? (
          archivedUsersData?.map((user: IUserData) => (
            <UserItem
              key={user.id}
              isActiveUsers={isActiveUsers}
              usersData={user}
            />
          ))
        ) : (
          <p>Архив пуст</p>
        )}
      </div>
    </div>
  );
};

export { ArchiveUsersList };
