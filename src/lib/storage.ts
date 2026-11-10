/**
 * Tiny key-value storage wrapper.
 *
 * Uses localStorage for now (works offline on web and in the Capacitor
 * WebView). Kept behind this interface so it can later be swapped for
 * `@capacitor/preferences` or IndexedDB without touching callers.
 */
const PREFIX = 'learn-arabic:';

export function load<T>(key: string, fallback: T): T {
	if (typeof localStorage === 'undefined') return fallback;
	try {
		const raw = localStorage.getItem(PREFIX + key);
		return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
	} catch {
		return fallback;
	}
}

export function save<T>(key: string, value: T): void {
	if (typeof localStorage === 'undefined') return;
	try {
		localStorage.setItem(PREFIX + key, JSON.stringify(value));
	} catch {
		// Storage full or unavailable — progress just won't persist this time.
	}
}
