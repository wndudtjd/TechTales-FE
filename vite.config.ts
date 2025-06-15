import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // 사용자 페이지는 항상 루트
  plugins: [react()],
})
