import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:8]',
      localsConvention: null,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve('./src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
