import { IUserData } from '../../interfaces';
import { DropdownMenuActive } from '../DropdownMenuActive/DropdownMenuActive';
import { DropdownMenuArchive } from '../DropdownMenuArchive/DropdownMenuArchive';
import styles from './UserItem.module.css';

interface IProps {
  isActiveUsers: boolean;
  usersData: IUserData;
}

const UserItem = ({ isActiveUsers, usersData }: IProps) => {
  const { id, name, username, company, address } = usersData;

  return (
    <div className={styles.userItemContainer}>
      <div
        className={`${styles.userItemImgWrapper} ${!isActiveUsers ? styles.userItemImgWrapperNonActive : ''}`}
      ></div>
      <div className={styles.userItemContent}>
        <div className={styles.userItemDiscription}>
          <span
            className={`${styles.userItemName} ${!isActiveUsers ? styles.userItemNameNonActive : ''}`}
          >
            {username}
          </span>
          <span
            className={`${styles.userItemCompany} ${!isActiveUsers ? styles.userItemCompanyNonActive : ''} `}
          >
            {company.name}
          </span>
          <span
            className={`${styles.userItemCity} ${!isActiveUsers ? styles.userItemCityNonActive : ''}`}
          >
            {address.city}
          </span>
        </div>
        {isActiveUsers ? (
          <DropdownMenuActive userName={name} userId={String(id)} />
        ) : (
          <DropdownMenuArchive userName={name} />
        )}
      </div>
    </div>
  );
};

export { UserItem };
