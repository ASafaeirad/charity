import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('⚛')!;
const root = createRoot(container);

root.render(<App />);
