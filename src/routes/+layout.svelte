<script lang="ts">
	import '@fontsource-variable/figtree';
	import '@fontsource-variable/noto-sans-arabic';
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import BottomNav from '#lib/components/BottomNav.svelte';
	import { progress } from '#lib/progress.svelte.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	$effect(() => {
		document.documentElement.dataset.theme = progress.theme;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
<BottomNav />
