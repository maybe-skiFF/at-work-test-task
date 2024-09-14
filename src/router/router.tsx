import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage';
import { UserPage } from '../pages/UserPage/UserPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
]);

export { router };
