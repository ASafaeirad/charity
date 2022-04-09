import { AppShell } from '@mantine/core';

import { Header } from './components/Header';
import { Nav } from './components/Nav';

const App = () => {
  return (
    <AppShell padding="md" navbar={<Nav />} header={<Header />}>
      {/* Your application here */}
    </AppShell>
  );
};

export default App;
