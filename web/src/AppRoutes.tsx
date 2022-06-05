import { useRoutes } from 'react-router-dom';

import { FamilyListPage } from './pages/FamilyListPage';

export const AppRoutes: React.FC = () => {
  return useRoutes([{ path: '/family/list', element: <FamilyListPage /> }]);
};
