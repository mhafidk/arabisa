<script lang="ts">
	import '@fontsource-variable/figtree';
	import '@fontsource/amiri/arabic-400.css';
	import '@fontsource/amiri/arabic-700.css';
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
