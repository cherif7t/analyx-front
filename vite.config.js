// vite.config.js

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      // Chemin vers votre fichier de configuration PostCSS
      config: './postcss.config.js',
    },
  },
})

