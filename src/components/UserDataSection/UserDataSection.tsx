import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './UserDataSection.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { formValidateSchema } from '../../utils/formValidationSchema';
import { IFormUserData } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { updateUserData } from '../../redux/usersDataSlice';

interface IProps {
  setIsVisible: (isVisible: boolean) => void;
}

const UserDataSection = ({ setIsVisible }: IProps) => {
  const { key } = useParams();
  const dispatch = useDispatch();
  const activeUsersData = useSelector(
    (state: RootState) => state.usersData.activeUsers,
  );
  const selectedUserData = activeUsersData.filter(
    user => String(user.id) === key,
  );

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formValidateSchema),
    defaultValues: {
      name: selectedUserData[0].name || '',
      username: selectedUserData[0].username || '',
      email: selectedUserData[0].email || '',
      city: selectedUserData[0].address.city || '',
      phone: selectedUserData[0].phone || '',
      company: selectedUserData[0].company.name || '',
    },
  });

  const onSubmit: SubmitHandler<IFormUserData> = data => {
    const payload = {
      id: Number(key),
      updatingUserData: {
        name: data.name,
        username: data.username,
        email: data.email,
        phone: data.phone,
        address: {
          city: data.city,
          street: '',
          suite: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        company: {
          name: data.company,
          catchPhrase: '',
          bs: '',
        },
      },
    };
    dispatch(updateUserData(payload));
    setIsVisible(true);
  };

  return (
    <div className={styles.userDataSectionWrapper}>
      <p className={styles.userDataTitle}>Данные профиля</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.userDataForm}>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="name">
            Имя
          </label>
          <input
            {...register('name')}
            className={styles.formInput}
            type="text"
            name="name"
          />
          <span className={styles.formErrorText}>
            {errors.name?.message ?? ''}
          </span>
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="username">
            Никнейм
          </label>
          <input
            {...register('username')}
            className={styles.formInput}
            type="text"
            name="username"
          />
          <span className={styles.formErrorText}>
            {errors.username?.message ?? ''}
          </span>
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="email">
            Почта
          </label>
          <input
            {...register('email')}
            className={styles.formInput}
            type="email"
            name="email"
          />
          <span className={styles.formErrorText}>
            {errors.email?.message ?? ''}
          </span>
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="city">
            Город
          </label>
          <input
            {...register('city')}
            className={styles.formInput}
            type="text"
            name="city"
          />
          <span className={styles.formErrorText}>
            {errors.city?.message ?? ''}
          </span>
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="phone">
            Телефон
          </label>
          <input
            {...register('phone')}
            className={styles.formInput}
            type="tel"
            name="phone"
          />
          <span className={styles.formErrorText}>
            {errors.phone?.message ?? ''}
          </span>
        </div>
        <div className={styles.formField}>
          <label className={styles.labelText} htmlFor="company">
            Название компании
          </label>
          <input
            {...register('company')}
            className={styles.formInput}
            type="text"
            name="company"
          />
          <span className={styles.formErrorText}>
            {errors.company?.message ?? ''}
          </span>
        </div>
        <button disabled={!isValid} type="submit" className={styles.formBtn}>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export { UserDataSection };
