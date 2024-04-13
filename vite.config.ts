import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // base: '/calculator/',
    server: {
        port: 3000,
    },
    css: {
        devSourcemap: true,
    },
    resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
});
