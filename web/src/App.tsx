import { AppShell } from '@mantine/core';

import { AppRoutes } from './AppRoutes';
import { Header } from './components/Header';
import { Nav } from './components/Nav';

const App = () => {
  return (
    <AppShell padding="md" navbar={<Nav />} header={<Header />}>
      <AppRoutes />
    </AppShell>
  );
};

export default App;
