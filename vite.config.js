import { defineConfig } from 'vite';

export default defineConfig({
  // If your images are in the 'public' directory
  publicDir: 'images',

  // Alternatively, if your images are in the 'src/assets' directory
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',  // Ensure this points to your main HTML file
      },
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
});
