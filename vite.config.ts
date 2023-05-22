import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lead-advisors/',
  plugins: [react(), tsconfigPaths()],
  server: { port: 3000 },
});
