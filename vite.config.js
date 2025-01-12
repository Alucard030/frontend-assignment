import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        '**/*.test.{js,jsx}',
        '**/node_modules/**', 
        '**/eslint.config.js',
        '**/vite.config.js',
        '**/mock/**',
        '**/dist/**',
        '**/src/main.jsx' 
      ],
    },

  },
  plugins: [react()],
})
