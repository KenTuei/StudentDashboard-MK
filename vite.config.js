import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import 'path' module

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  resolve: { // <--- ADD THIS RESOLVE BLOCK
    alias: {
      '@': path.resolve(__dirname, './src'), // Maps '@' to your 'src' directory
    },
  },
});