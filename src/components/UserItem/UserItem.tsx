import { IUserData } from '../../interfaces';
import { DropdownMenuActive } from '../DropdownMenuActive/DropdownMenuActive';
import { DropdownMenuArchive } from '../DropdownMenuArchive/DropdownMenuArchive';
import styles from './UserItem.module.css';

interface IProps {
  isActiveUsers: boolean;
  usersData: IUserData;
}

const UserItem = ({ isActiveUsers, usersData }: IProps) => {
  const { name, company, address } = usersData;

  return (
    <div className={styles.userItemContainer}>
      <div className={styles.userItemImgWrapper}></div>
      <div className={styles.userItemContent}>
        <div className={styles.userItemDiscription}>
          <span className={styles.userItemName}>{name}</span>
          <span className={styles.userItemCompany}>{company.name}</span>
          <span className={styles.userItemCity}>{address.city}</span>
        </div>
        {isActiveUsers ? (
          <DropdownMenuActive userName={name} />
        ) : (
          <DropdownMenuArchive userName={name} />
        )}
      </div>
    </div>
  );
};

export { UserItem };
