import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/SonFire-Lab/',
  plugins: [react()],
  build: { rollupOptions: { output: { manualChunks: {
    games: ['./src/games/Games.tsx'],
    tools: ['./src/tools/Tools.tsx'],
    generators: ['./src/generators/Generators.tsx'],
  } } } },
});
