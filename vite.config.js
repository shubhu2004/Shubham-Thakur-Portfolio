import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Shubham-Thakur-Portfolio/', // This is the key addition
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})