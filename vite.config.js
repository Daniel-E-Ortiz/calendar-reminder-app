import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        [
            'babel-plugin-import',
            {
                libraryName: '@mui/material',
                libraryDirectory: '',
                camel2DashComponentName: false,
            },
            'core',
        ],
        [
            'babel-plugin-import',
            {
                libraryName: '@mui/icons-material',
                libraryDirectory: '',
                camel2DashComponentName: false,
            },
            'icons',
        ],
    ],
});
