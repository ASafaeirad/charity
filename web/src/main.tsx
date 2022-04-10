import { MantineProvider } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import stylisRTLPlugin from 'stylis-plugin-rtl';

import App from './App';
import { GlobalStyles } from './components/GlobalStyles';
import { initI18n } from './i18n';

initI18n();

const container = document.getElementById('⚛')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MantineProvider
      emotionOptions={{ key: 'mantine', stylisPlugins: [stylisRTLPlugin] }}
      theme={{
        dir: 'rtl',
        fontFamily: 'Shabnam, Open Sans, sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        headings: { fontFamily: 'Shabnam, Open Sans, sans serif' },
      }}
    >
      <GlobalStyles />
      <App />
    </MantineProvider>
  </BrowserRouter>,
);
