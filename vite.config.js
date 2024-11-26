import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: '0.0.0.0', // Allows external access
        port: 5173,
        https: false, // Disable HTTPS for the app

        proxy: {
            '/run-command': {
                target: 'http://localhost:5001', // Server endpoint running locally
                changeOrigin: true,
            },
        },
    }
});
