import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Shubham-Thakur-Portfolio/', 
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})