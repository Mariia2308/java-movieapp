import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    // No need to specify rollupOptions.input unless you have custom input
  },
  server: {
    port: 3000,
  },
});
