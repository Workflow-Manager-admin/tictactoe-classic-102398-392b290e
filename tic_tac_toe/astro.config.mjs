// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: '0.0.0.0',
        allowedHosts: ['*'],
        port: 3000,
        // Enhanced CORS headers for all responses served by Astro's server
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin,Content-Type,Accept,Authorization',
            'Access-Control-Allow-Credentials': 'true',
        },
    }
});
