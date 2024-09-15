import { useState } from 'react';
import styles from './DropdownMenuActive.module.css';
import { useDispatch } from 'react-redux';
import { archivedUser, removeActiveUser } from '../../redux/usersDataSlice';

interface IProps {
  userName: string;
}

const DropdownMenuActive = ({ userName }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setUserToArchive = (userName: string) => {
    dispatch(archivedUser(userName));
    dispatch(removeActiveUser(userName));
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleMenu} className={styles.dropdownBtn}></div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>Редактировать</li>
          <li
            onClick={() => setUserToArchive(userName)}
            className={styles.dropdownItem}
          >
            Архивировать
          </li>
          <li className={styles.dropdownItem}>Скрыть</li>
        </ul>
      )}
    </div>
  );
};

export { DropdownMenuActive };
