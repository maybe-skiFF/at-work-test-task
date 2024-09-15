import styles from './UserDataSection.module.css';

const UserDataSection = () => {
  return (
    <div className={styles.userDataSectionWrapper}>
      <p className={styles.userDataTitle}>Данные профиля</p>
      <form className={styles.userDataForm}>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="name">
            Имя
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            required
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="userName">
            Никнейм
          </label>
          <input className={styles.formInput} type="text" name="userName" />
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="email">
            Почта
          </label>
          <input className={styles.formInput} type="email" name="email" />
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="city">
            Город
          </label>
          <input className={styles.formInput} type="text" name="city" />
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="phone">
            Телефон
          </label>
          <input className={styles.formInput} type="tel" name="phone" />
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="company">
            Название компании
          </label>
          <input className={styles.formInput} type="text" name="company" />
        </div>
        <button type="submit" className={styles.formBtn}>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export { UserDataSection };
