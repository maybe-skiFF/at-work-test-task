import { useState } from 'react';
import styles from './DropdownMenuActive.module.css';
import { useDispatch } from 'react-redux';
import { archivedUser, removeActiveUser } from '../../redux/usersDataSlice';
import { useNavigate } from 'react-router-dom';

interface IProps {
  userName: string;
  userId: string;
}

const DropdownMenuActive = ({ userName, userId }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setUserToArchive = (userName: string) => {
    dispatch(archivedUser(userName));
    dispatch(removeActiveUser(userName));
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleMenu} className={styles.dropdownBtnWrapper}>
        <div className={styles.dropdownBtn}></div>
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li
            onClick={() => navigate(`user/${userId}`)}
            className={styles.dropdownItem}
          >
            Редактировать
          </li>
          <li
            onClick={() => setUserToArchive(userName)}
            className={styles.dropdownItem}
          >
            Архивировать
          </li>
          <li
            onClick={() => dispatch(removeActiveUser(userName))}
            className={styles.dropdownItem}
          >
            Скрыть
          </li>
        </ul>
      )}
    </div>
  );
};

export { DropdownMenuActive };
