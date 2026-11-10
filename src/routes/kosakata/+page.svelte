<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Search from '@lucide/svelte/icons/search';
	import X from '@lucide/svelte/icons/x';
	import { decks, type Card } from '#lib/data/decks.ts';
	import { MASTERED_BOX, progress } from '#lib/progress.svelte.ts';

	interface WordEntry {
		card: Card;
		deckTitle: string;
	}

	// Collect all unique words across all flashcard decks (deduplicated by Arabic text)
	const allWords: WordEntry[] = (() => {
		const seen = new Set<string>();
		const list: WordEntry[] = [];
		for (const d of decks) {
			for (const c of d.cards) {
				const key = c.ar.trim();
				if (seen.has(key)) continue;
				seen.add(key);
				list.push({ card: c, deckTitle: d.title });
			}
		}
		return list;
	})();

	const PAGE_SIZE = 12;

	let query = $state('');
	let currentPage = $state(1);

	const normalizedQuery = $derived(query.trim().toLowerCase());

	const filteredWords = $derived(
		normalizedQuery === ''
			? allWords
			: allWords.filter(
					({ card, deckTitle }) =>
						card.en.toLowerCase().includes(normalizedQuery) ||
						card.tr.toLowerCase().includes(normalizedQuery) ||
						card.ar.includes(normalizedQuery) ||
						deckTitle.toLowerCase().includes(normalizedQuery)
				)
	);

	const totalPages = $derived(Math.max(1, Math.ceil(filteredWords.length / PAGE_SIZE)));
	const safePage = $derived(Math.min(currentPage, totalPages));

	const paginatedWords = $derived(
		filteredWords.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
	);

	const startItem = $derived(filteredWords.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1);
	const endItem = $derived(Math.min(safePage * PAGE_SIZE, filteredWords.length));

	const visiblePages = $derived.by(() => {
		const maxVisible = 5;
		let start = Math.max(1, safePage - Math.floor(maxVisible / 2));
		let end = Math.min(totalPages, start + maxVisible - 1);
		start = Math.max(1, end - maxVisible + 1);
		const pages: number[] = [];
		for (let p = start; p <= end; p++) pages.push(p);
		return pages;
	});

	function onSearchInput(value: string) {
		query = value;
		currentPage = 1;
	}

	function goToPage(page: number) {
		if (page < 1 || page > totalPages) return;
		currentPage = page;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>Daftar Kosakata · Arabisa</title>
	<meta
		name="description"
		content="Cari dan pelajari seluruh kosakata bahasa Arab beserta artinya dalam bahasa Indonesia."
	/>
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-5 pt-5 pb-24">
	<header class="flex items-center gap-3">
		<a
			id="back-to-home"
			href={resolve('/')}
			class="-ml-2 grid size-10 shrink-0 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink"
			aria-label="Kembali ke beranda"
		>
			<ArrowLeft size={22} />
		</a>
		<div class="min-w-0 flex-1">
			<h1 class="truncate text-lg leading-tight font-semibold text-ink">Daftar Kosakata</h1>
			<p class="text-xs text-ink-faint tabular-nums">{allWords.length} kosakata dalam flashcard</p>
		</div>
	</header>

	<!-- Search Input -->
	<div class="relative mt-5">
		<Search
			size={18}
			class="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-ink-faint"
		/>
		<input
			id="vocab-search"
			type="search"
			value={query}
			oninput={(e) => onSearchInput(e.currentTarget.value)}
			placeholder="Cari kata dalam bahasa Indonesia..."
			aria-label="Cari kata dalam bahasa Indonesia"
			class="h-11 w-full rounded-xl border border-line bg-paper-raised pr-10 pl-10 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
		/>
		{#if query}
			<button
				type="button"
				onclick={() => onSearchInput('')}
				aria-label="Hapus pencarian"
				class="absolute top-1/2 right-2.5 grid size-7 -translate-y-1/2 place-items-center rounded-md text-ink-faint hover:bg-paper-sunk hover:text-ink"
			>
				<X size={15} />
			</button>
		{/if}
	</div>

	<!-- Result Count & Page Status -->
	<div class="mt-4 flex items-center justify-between text-xs text-ink-faint tabular-nums">
		<span>
			{#if filteredWords.length === 0}
				Tidak ada kosakata ditemukan
			{:else}
				Menampilkan {startItem}–{endItem} dari {filteredWords.length} kata
			{/if}
		</span>
		{#if filteredWords.length > 0}
			<span>Halaman {safePage}/{totalPages}</span>
		{/if}
	</div>

	<!-- Word List -->
	{#if paginatedWords.length === 0}
		<div class="mt-6 rounded-2xl bg-paper-raised p-8 text-center shadow-card">
			<p class="font-semibold text-ink">Kata "{query}" tidak ditemukan</p>
			<p class="mt-1 text-xs text-ink-faint">
				Coba gunakan kata kunci bahasa Indonesia lainnya, misalnya "rumah", "guru", atau "baru".
			</p>
		</div>
	{:else}
		<ul class="mt-2.5 divide-y divide-line overflow-hidden rounded-2xl bg-paper-raised shadow-card">
			{#each paginatedWords as { card, deckTitle } (card.id)}
				{@const box = progress.box(card)}
				{@const isMastered = box >= MASTERED_BOX}
				{@const isLearning = !progress.isNew(card) && box < MASTERED_BOX}
				<li class="flex items-center justify-between gap-4 px-4 py-3.5">
					<div class="min-w-0 flex-1">
						<div class="flex flex-wrap items-center gap-1.5">
							<span
								class="rounded-md bg-paper-sunk px-2 py-0.5 text-[10px] font-semibold text-ink-faint"
							>
								{deckTitle}
							</span>
							{#if isMastered}
								<span
									class="rounded-md bg-good-wash px-1.5 py-0.5 text-[10px] font-semibold text-good"
								>
									Dikuasai
								</span>
							{:else if isLearning}
								<span
									class="rounded-md bg-accent-wash px-1.5 py-0.5 text-[10px] font-semibold text-accent-ink"
								>
									Dipelajari
								</span>
							{/if}
						</div>
						<p class="mt-1 font-semibold text-ink">{card.en}</p>
						<p class="text-xs text-ink-faint italic">{card.tr}</p>
					</div>

					<span lang="ar" dir="rtl" class="shrink-0 text-3xl font-medium text-ink">
						{card.ar}
					</span>
				</li>
			{/each}
		</ul>
	{/if}

	<!-- Pagination Controls -->
	{#if totalPages > 1}
		<nav
			aria-label="Navigasi halaman kosakata"
			class="mt-5 flex items-center justify-between gap-1.5"
		>
			<button
				type="button"
				disabled={safePage <= 1}
				onclick={() => goToPage(safePage - 1)}
				aria-label="Halaman sebelumnya"
				class="flex h-9 items-center justify-center gap-1 rounded-lg bg-paper-raised px-2.5 text-xs font-semibold text-ink shadow-card transition-colors hover:bg-paper-sunk disabled:pointer-events-none disabled:opacity-40"
			>
				<ChevronLeft size={16} />
				<span class="hidden sm:inline">Sebelumnya</span>
			</button>

			<div class="flex items-center gap-1">
				{#each visiblePages as page (page)}
					<button
						type="button"
						onclick={() => goToPage(page)}
						aria-current={page === safePage ? 'page' : undefined}
						class={[
							'grid size-9 place-items-center rounded-lg text-xs font-semibold tabular-nums transition-colors',
							page === safePage
								? 'bg-ink text-paper'
								: 'bg-paper-raised text-ink-soft shadow-card hover:bg-paper-sunk hover:text-ink'
						]}
					>
						{page}
					</button>
				{/each}
			</div>

			<button
				type="button"
				disabled={safePage >= totalPages}
				onclick={() => goToPage(safePage + 1)}
				aria-label="Halaman selanjutnya"
				class="flex h-9 items-center justify-center gap-1 rounded-lg bg-paper-raised px-2.5 text-xs font-semibold text-ink shadow-card transition-colors hover:bg-paper-sunk disabled:pointer-events-none disabled:opacity-40"
			>
				<span class="hidden sm:inline">Selanjutnya</span>
				<ChevronRight size={16} />
			</button>
		</nav>
	{/if}
</div>
