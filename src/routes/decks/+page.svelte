<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import DeckProgress from '#lib/components/DeckProgress.svelte';
	import { decks, type Deck } from '#lib/data/decks.ts';
	import { progress, type FrontSide } from '#lib/progress.svelte.ts';

	const sides: { value: FrontSide; label: string }[] = [
		{ value: 'ar', label: 'Arab' },
		{ value: 'id', label: 'Indonesia' }
	];

	const lessonDecks = decks.filter((d) => d.group === 'lesson');
	const topicDecks = decks.filter((d) => d.group === 'topic');
</script>

<svelte:head>
	<title>Kartu Hafalan · Arabisa</title>
	<meta
		name="description"
		content="Latih kosakata bahasa Arab Anda dengan kartu hafalan. Bisa digunakan secara offline."
	/>
</svelte:head>

{#snippet deckList(items: Deck[])}
	<ul class="divide-y divide-line overflow-hidden rounded-2xl bg-paper-raised shadow-card">
		{#each items as deck (deck.id)}
			{@const stats = progress.deckStats(deck)}
			<li>
				<a
					id="deck-{deck.id}"
					href={resolve('/deck/[id]', { id: deck.id })}
					class="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-paper-sunk/60 focus-visible:bg-paper-sunk/60 focus-visible:outline-none"
				>
					<div class="min-w-0 flex-1">
						<div class="flex items-baseline justify-between gap-3">
							<h3 class="font-semibold text-ink">{deck.title}</h3>
							<span lang="ar" dir="rtl" class="shrink-0 text-xl font-medium text-ink-soft">
								{deck.titleAr}
							</span>
						</div>
						<p class="mt-0.5 truncate text-sm text-ink-faint">{deck.description}</p>
						<div class="mt-3 flex items-center gap-3">
							<DeckProgress {...stats} />
							<span class="shrink-0 text-xs font-medium text-ink-faint tabular-nums">
								{stats.mastered}/{stats.total}
							</span>
						</div>
					</div>
					<ChevronRight
						size={20}
						class="shrink-0 text-ink-faint transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
					/>
				</a>
			</li>
		{/each}
	</ul>
{/snippet}

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-5 pt-5 pb-24">
	<header class="flex items-center gap-3">
		<a
			id="back-to-home"
			href={resolve('/')}
			class="-ml-2 grid size-10 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink"
			aria-label="Kembali ke beranda"
		>
			<ArrowLeft size={22} />
		</a>
		<div class="min-w-0 flex-1">
			<h1 class="truncate text-lg leading-tight font-semibold text-ink">Kartu Hafalan</h1>
			<p class="text-xs text-ink-faint">Latihan kosakata berdasarkan pelajaran & kategori</p>
		</div>
	</header>

	<div class="mt-5 flex items-center justify-between gap-4">
		<p class="flex items-center gap-4 text-xs text-ink-faint">
			<span class="flex items-center gap-1.5">
				<span class="size-2 rounded-full bg-good"></span> Dikuasai
			</span>
			<span class="flex items-center gap-1.5">
				<span class="size-2 rounded-full bg-accent"></span> Sedang dipelajari
			</span>
		</p>

		<div class="flex items-center gap-2 text-xs text-ink-faint">
			<span id="front-label">Sisi depan</span>
			<div
				role="radiogroup"
				aria-labelledby="front-label"
				class="flex rounded-lg bg-paper-sunk p-0.5"
			>
				{#each sides as side (side.value)}
					<button
						id="front-{side.value}"
						type="button"
						role="radio"
						aria-checked={progress.front === side.value}
						onclick={() => (progress.front = side.value)}
						class={[
							'rounded-md px-2.5 py-1 font-medium transition-colors',
							progress.front === side.value
								? 'bg-paper-raised text-ink shadow-sm'
								: 'text-ink-faint hover:text-ink-soft'
						]}
					>
						{side.label}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<section class="mt-5" aria-labelledby="lesson-decks-heading">
		<h2
			id="lesson-decks-heading"
			class="mb-2.5 text-xs font-semibold tracking-wide text-ink-soft uppercase"
		>
			Berdasarkan Pelajaran (Madina Arabic Reader)
		</h2>
		{@render deckList(lessonDecks)}
	</section>

	<section class="mt-7" aria-labelledby="topic-decks-heading">
		<h2
			id="topic-decks-heading"
			class="mb-2.5 text-xs font-semibold tracking-wide text-ink-soft uppercase"
		>
			Berdasarkan Kategori & Topik
		</h2>
		{@render deckList(topicDecks)}
	</section>
</div>
