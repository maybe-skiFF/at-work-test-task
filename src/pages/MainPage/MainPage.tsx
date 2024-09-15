import { useEffect } from 'react';
import { ActiveUsersList } from '../../components/ActiveUsersList/ActiveUsersList';
import { ArchiveUsersList } from '../../components/ArchiveUsersList/ArchiveUsersList';
import { Header } from '../../components/Header/Header';
import { useGetUsersQuery } from '../../services/api';
import { useDispatch } from 'react-redux';
import { setActiveUsers } from '../../redux/usersDataSlice';
import { Loader } from '../../components/Loader/Loader';

const MainPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUsersQuery('users');

  useEffect(() => {
    if (data) dispatch(setActiveUsers(data));
  }, [data, dispatch]);

  return (
    <>
      <Header />
      {isLoading ? <Loader /> : ''}
      <ActiveUsersList />
      <ArchiveUsersList />
    </>
  );
};

export { MainPage };
