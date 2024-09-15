import { ActiveUsersList } from '../../components/ActiveUsersList/ActiveUsersList';
import { ArchiveUsersList } from '../../components/ArchiveUsersList/ArchiveUsersList';
import { Header } from '../../components/Header/Header';

const MainPage = () => {
  return (
    <>
      <Header />
      <ActiveUsersList />
      <ArchiveUsersList />
    </>
  );
};

export { MainPage };
