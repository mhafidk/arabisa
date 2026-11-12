import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.mhk.arabisa',
	appName: 'Arabisa',
	webDir: 'build',
	plugins: {
		SystemBars: {
			insetsHandling: 'css',
			initialViewportFitValueHint: 'cover'
		}
	}
};

export default config;
