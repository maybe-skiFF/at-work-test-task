import { useState } from 'react';
import styles from './DropdownMenuArchive.module.css';

const DropdownMenuArchive = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleMenu} className={styles.dropdownBtn}></div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>Активировать</li>
        </ul>
      )}
    </div>
  );
};

export { DropdownMenuArchive };
