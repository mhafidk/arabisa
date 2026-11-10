/// <reference types="@sveltejs/kit" />
import { self } from '$app/service-worker';
import { immutable, assets } from '$app/manifest';
import { version } from '$app/env';
import { resolve } from '$app/paths';

/**
 * Offline support for the web build: precache the app shell, build output and
 * static files, then serve them cache-first. Navigations fall back to the
 * cached SPA shell so every route works without a connection.
 * (On Android, Capacitor already serves these files from the APK.)
 */
const CACHE = `learn-arabic-${version}`;
const SHELL = resolve('/');
const PRECACHE = [SHELL, ...immutable.map((f) => f.path), ...assets.map((f) => f.path)];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then((cache) => cache.addAll(PRECACHE))
			.then(() => self.skipWaiting())
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
			.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', (event) => {
	const { request } = event;
	if (request.method !== 'GET') return;

	const url = new URL(request.url);
	if (url.origin !== self.location.origin) return;

	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE);

			if (request.mode === 'navigate') {
				// Network first so updates show up; fall back to the cached shell offline.
				try {
					return await fetch(request);
				} catch {
					return (await cache.match(SHELL)) ?? Response.error();
				}
			}

			const cached = await cache.match(request);
			if (cached) return cached;

			try {
				const response = await fetch(request);
				if (response.ok) cache.put(request, response.clone());
				return response;
			} catch {
				return Response.error();
			}
		})()
	);
});
