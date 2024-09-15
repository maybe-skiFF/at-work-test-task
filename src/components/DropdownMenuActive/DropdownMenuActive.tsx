import { useState } from 'react';
import styles from './DropdownMenuActive.module.css';

const DropdownMenuActive = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleMenu} className={styles.dropdownBtn}></div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>Редактировать</li>
          <li className={styles.dropdownItem}>Архивировать</li>
          <li className={styles.dropdownItem}>Скрыть</li>
        </ul>
      )}
    </div>
  );
};

export { DropdownMenuActive };
