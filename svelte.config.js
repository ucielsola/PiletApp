import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@ptkdev/sveltekit-cordova-adapter';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			strict: false,
			platform: 'capacitor'
		})
	}
};

export default config;
