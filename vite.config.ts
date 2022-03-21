import react from '@vitejs/plugin-react';
import { resolve as resolvePath } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: resolvePath(__dirname, 'web'),
});
