import dotenv from 'dotenv';
import { domToCodePlugin } from 'dom-to-code/vite';
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';

dotenv.config();
export default defineConfig({
  // plugins: [react()],
  plugins: [
    react(),
    process.env.NODE_ENV !== 'production'
      ? domToCodePlugin({
          mode: 'react',
        })
      : undefined,
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': new URL('./src/', import.meta.url).pathname,
      '@Assets': new URL('./src/assets/', import.meta.url).pathname,
      '@Utils': new URL('./src/utils/', import.meta.url).pathname,
      '@Store': new URL('./src/store/', import.meta.url).pathname,
      '@Schemas': new URL('./src/schemas/', import.meta.url).pathname,
      '@Hooks': new URL('./src/hooks/', import.meta.url).pathname,
      '@Api': new URL('./src/api/', import.meta.url).pathname,
      '@Services': new URL('./src/services/', import.meta.url).pathname,
      '@Constants': new URL('./src/constants/', import.meta.url).pathname,
      '@Queries': new URL('./src/api/queries/', import.meta.url).pathname,
      '@Routes': new URL('./src/routes/', import.meta.url).pathname,
      '@Views': new URL('./src/views/', import.meta.url).pathname,
      '@Components': new URL('./src/components/', import.meta.url).pathname,
    },
  },
  build: {
    sourcemap: true,
  },
  define: {
    'process.env': {
      BASE_URL: process.env.BASE_URL,
      API_URL_V1: process.env.API_URL_V1,
      SITE_NAME: process.env.SITE_NAME,
      FAST_API: process.env.FAST_API,
    },
  },
  server: {
    open: true,
    port: 3040,
    proxy: {
      '/api': {
        target: process.env.API_URL_V1,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      '/fastapi': {
        target: process.env.FAST_API,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/fastapi/, ''),
      },
    },
  },
});
