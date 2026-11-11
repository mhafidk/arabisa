import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.mhk.learnarabic',
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
