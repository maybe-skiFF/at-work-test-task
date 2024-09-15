import { useState } from 'react';
import styles from './DropdownMenuArchive.module.css';
import { useDispatch } from 'react-redux';
import { userRecoveryFromArchive } from '../../redux/usersDataSlice';

interface IProps {
  userName: string;
}

const DropdownMenuArchive = ({ userName }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleMenu} className={styles.dropdownBtnWrapper}>
        <div className={styles.dropdownBtn}></div>
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li
            onClick={() => dispatch(userRecoveryFromArchive(userName))}
            className={styles.dropdownItem}
          >
            Активировать
          </li>
        </ul>
      )}
    </div>
  );
};

export { DropdownMenuArchive };
