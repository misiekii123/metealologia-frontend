import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { fileURLToPath } from 'url';
import { readFileSync } from 'fs'

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

export default defineConfig({
    plugins: [sveltekit()],
    define: {
        PACKAGE_VERSION: JSON.stringify(pkg.version),
	    PACKAGE_NAME: JSON.stringify(pkg.name),
        REPOSITORY_URL: JSON.stringify(pkg.repository)
    }
});
