// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//    base: '/Shubham-Thakur-Portfolio/', 
//   plugins: [react()],
//   assetsInclude: ['**/*.glb'],

// })

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Shubham-Thakur-Portfolio/' : '/',
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
});
