import { DropdownMenuActive } from '../DropdownMenuActive/DropdownMenuActive';
import { DropdownMenuArchive } from '../DropdownMenuArchive/DropdownMenuArchive';
import styles from './UserItem.module.css';

interface IProps {
  isActiveUsers: boolean;
}

const UserItem = ({ isActiveUsers }: IProps) => {
  return (
    <div className={styles.userItemContainer}>
      <div className={styles.userItemImgWrapper}></div>
      <div className={styles.userItemContent}>
        <div className={styles.userItemDiscription}>
          <span className={styles.userItemName}>UserName</span>
          <span className={styles.userItemCompany}>Company Name</span>
          <span className={styles.userItemCity}>City</span>
        </div>
        {/* <div className={styles.dropdownBtn}></div> */}
        {isActiveUsers ? <DropdownMenuActive /> : <DropdownMenuArchive />}
      </div>
    </div>
  );
};

export { UserItem };
