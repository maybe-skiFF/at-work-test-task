import styles from './PopapAccept.module.css';
import cross from '../../../public/cross.png';
import popapImg from '../../../public/accept-img.png';
import { useEffect } from 'react';

interface IProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const PopapAccept = ({ isVisible, setIsVisible }: IProps) => {
  useEffect(() => {
    const time = setTimeout(() => {
      closePopap();
    }, 4000);

    return () => clearTimeout(time);
  });

  if (!isVisible) return null;

  const closePopap = () => {
    setIsVisible(false);
  };

  return (
    <div className={styles.popapWrapper}>
      <img
        onClick={closePopap}
        className={styles.crossImg}
        src={cross}
        alt="cross"
      />
      <img className={styles.popapImg} src={popapImg} alt="popapImg" />
      <p className={styles.popapText}>Изменения сохранены!</p>
    </div>
  );
};

export { PopapAccept };
