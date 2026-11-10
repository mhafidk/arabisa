<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import ClipboardCheck from '@lucide/svelte/icons/clipboard-check';
	import HelpCircle from '@lucide/svelte/icons/help-circle';
	import Layers from '@lucide/svelte/icons/layers';
	import Search from '@lucide/svelte/icons/search';

	const pathname = $derived(page.url.pathname);
	const hidden = $derived(pathname.startsWith('/deck/'));

	const items = [
		{
			id: 'nav-tab-home',
			label: 'Beranda',
			href: resolve('/'),
			icon: BookOpen,
			match: (p: string) => p === '/' || p.startsWith('/lesson/')
		},
		{
			id: 'nav-tab-decks',
			label: 'Flashcard',
			href: resolve('/decks'),
			icon: Layers,
			match: (p: string) => p === '/decks' || p.startsWith('/deck/')
		},
		{
			id: 'nav-tab-latihan',
			label: 'Latihan',
			href: resolve('/latihan'),
			icon: ClipboardCheck,
			match: (p: string) => p.startsWith('/latihan')
		},
		{
			id: 'nav-tab-kosakata',
			label: 'Kosakata',
			href: resolve('/kosakata'),
			icon: Search,
			match: (p: string) => p.startsWith('/kosakata')
		},
		{
			id: 'nav-tab-tentang',
			label: 'Tentang',
			href: resolve('/tentang'),
			icon: HelpCircle,
			match: (p: string) => p.startsWith('/tentang')
		}
	];
</script>

{#if !hidden}
	<nav
		aria-label="Navigasi utama"
		class="fixed right-0 bottom-0 left-0 z-30 border-t border-line bg-paper-raised/95 backdrop-blur-md"
	>
		<div
			class="mx-auto grid max-w-xl grid-cols-5 px-1.5 pt-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]"
		>
			{#each items as item (item.id)}
				{@const active = item.match(pathname)}
				{@const Icon = item.icon}
				<a
					id={item.id}
					href={item.href}
					aria-current={active ? 'page' : undefined}
					class={[
						'flex flex-col items-center justify-center gap-1 rounded-lg py-1.5 text-[11px] font-semibold transition-colors',
						active ? 'text-accent-ink' : 'text-ink-faint hover:text-ink-soft'
					]}
				>
					<div
						class={[
							'grid h-7 w-11 place-items-center rounded-md transition-colors',
							active && 'bg-accent-wash'
						]}
					>
						<Icon size={18} strokeWidth={active ? 2.4 : 2} />
					</div>
					<span class="truncate">{item.label}</span>
				</a>
			{/each}
		</div>
	</nav>
{/if}
