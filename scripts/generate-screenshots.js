import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

const SCREENS = [
	{ name: '01-beranda.png', path: '/' },
	{ name: '02-materi-pelajaran.png', path: '/materi' },
	{ name: '03-flashcard-leitner.png', path: '/deck/lesson-1' },
	{ name: '04-latihan-soal.png', path: '/latihan' },
	{ name: '05-kamus-kosakata.png', path: '/kosakata' },
	{ name: '06-tentang-dan-faq.png', path: '/tentang' }
];

const DEVICES = [
	{
		dir: 'docs/playstore/screenshots/phone',
		viewport: { width: 360, height: 640, deviceScaleFactor: 3 }
	},
	{
		dir: 'docs/playstore/screenshots/tablet-7',
		viewport: { width: 600, height: 960, deviceScaleFactor: 2 }
	},
	{
		dir: 'docs/playstore/screenshots/tablet-10',
		viewport: { width: 800, height: 1280, deviceScaleFactor: 2 }
	}
];

async function generate() {
	console.log(`Starting screenshot generation from ${BASE_URL}...`);

	const browser = await puppeteer.launch({
		executablePath: '/usr/bin/google-chrome',
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});

	try {
		for (const device of DEVICES) {
			fs.mkdirSync(device.dir, { recursive: true });
			console.log(`\nGenerating screenshots for: ${device.dir} ...`);

			const page = await browser.newPage();
			await page.setViewport(device.viewport);

			for (const screen of SCREENS) {
				const targetUrl = `${BASE_URL}${screen.path}`;
				console.log(`  -> Capturing ${screen.name} from ${targetUrl}`);
				await page.goto(targetUrl, { waitUntil: 'networkidle0' });
				// Brief settle for animations and font rendering
				await new Promise((r) => setTimeout(r, 400));

				const dest = path.join(device.dir, screen.name);
				await page.screenshot({ path: dest });
			}

			await page.close();
		}

		console.log('\nAll 18 screenshots generated successfully!');
	} finally {
		await browser.close();
	}
}

generate().catch((err) => {
	console.error('Screenshot generation failed:', err);
	process.exit(1);
});
