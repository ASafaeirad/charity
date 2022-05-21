import { useRoutes } from 'react-router-dom';

import { AddFamilyPage } from './pages/AddFamilyPage';
import { FamilyListPage } from './pages/FamilyListPage';

export const AppRoutes: React.FC = () => {
  return useRoutes([
    { path: '/family/list', element: <FamilyListPage /> },
    { path: '/family/add', element: <AddFamilyPage /> },
  ]);
};
