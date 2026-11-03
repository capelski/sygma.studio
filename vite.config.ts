import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sygma.studio/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
