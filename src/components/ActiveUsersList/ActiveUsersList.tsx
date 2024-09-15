import { UserItem } from '../UserItem/UserItem';
import styles from './ActiveUsersList.module.css';
import { IUserData } from '../../interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ActiveUsersList = () => {
  const isActiveUsers = true;
  const activeUsersData = useSelector(
    (state: RootState) => state.usersData.activeUsers,
  );

  return (
    <div className={styles.activeUsersListWrapper}>
      <p className={styles.title}>Активные</p>
      <div className={styles.usersWrapper}>
        {activeUsersData.length ? (
          activeUsersData?.map((user: IUserData) => (
            <UserItem
              key={user.id}
              isActiveUsers={isActiveUsers}
              usersData={user}
            />
          ))
        ) : (
          <p>Список активных пользователей пуст</p>
        )}
      </div>
    </div>
  );
};

export { ActiveUsersList };
