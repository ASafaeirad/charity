import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import stylisRTLPlugin from 'stylis-plugin-rtl';

import App from './App';
import { GlobalStyles } from './components/GlobalStyles';
import { initI18n } from './i18n/i18n';
import { store } from './store';

initI18n();

const container = document.getElementById('⚛')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <MantineProvider
        emotionOptions={{ key: 'mantine', stylisPlugins: [stylisRTLPlugin] }}
        theme={{
          dir: 'rtl',
          fontFamily: 'Shabnam, Open Sans, sans serif',
          spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
          headings: { fontFamily: 'Shabnam, Open Sans, sans serif' },
        }}
      >
        <NotificationsProvider>
          <GlobalStyles />
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </StoreProvider>
  </BrowserRouter>,
);
