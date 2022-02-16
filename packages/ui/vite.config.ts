import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  build: {
    target: ['es6'],
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    outDir: resolve(__dirname, '../../dist'),
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        format: 'iife',
        manualChunks: () => 'everything.js',
      },
    },
  },
});
