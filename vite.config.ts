import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:8]',
      localsConvention: null,
    },
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
