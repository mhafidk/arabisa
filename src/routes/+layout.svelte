<script lang="ts">
	import '@fontsource-variable/figtree';
	import '@fontsource-variable/noto-sans-arabic';
	import './layout.css';
	import { Capacitor, SystemBars, SystemBarsStyle } from '@capacitor/core';
	import favicon from '#lib/assets/favicon.svg';
	import BottomNav from '#lib/components/BottomNav.svelte';
	import { progress } from '#lib/progress.svelte.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	$effect(() => {
		const theme = progress.theme;
		document.documentElement.dataset.theme = theme;
		if (Capacitor.isNativePlatform()) {
			SystemBars.setStyle({
				style: theme === 'dark' ? SystemBarsStyle.Dark : SystemBarsStyle.Light
			}).catch(() => {});
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
<BottomNav />
