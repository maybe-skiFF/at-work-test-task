import { useEffect } from 'react';
import { ActiveUsersList } from '../../components/ActiveUsersList/ActiveUsersList';
import { ArchiveUsersList } from '../../components/ArchiveUsersList/ArchiveUsersList';
import { Header } from '../../components/Header/Header';
import { useGetUsersQuery } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUsers } from '../../redux/usersDataSlice';
import { Loader } from '../../components/Loader/Loader';
import { RootState } from '../../redux/store';

const MainPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUsersQuery('users');
  const activeUsers = useSelector(
    (state: RootState) => state.usersData.activeUsers,
  );

  useEffect(() => {
    if (data && activeUsers.length === 0) dispatch(setActiveUsers(data));
  }, [data, dispatch, activeUsers.length]);

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
