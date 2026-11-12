<script lang="ts">
	import { resolve } from '$app/paths';
	import { untrack } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Check from '@lucide/svelte/icons/check';
	import RotateCcw from '@lucide/svelte/icons/rotate-ccw';
	import X from '@lucide/svelte/icons/x';
	import Flashcard from '#lib/components/Flashcard.svelte';
	import DeckProgress from '#lib/components/DeckProgress.svelte';
	import type { Card, Deck } from '#lib/data/decks.ts';
	import { progress } from '#lib/progress.svelte.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const deck = $derived(data.deck);

	let queue = $state<Card[]>([]);
	let flipped = $state(false);
	let cleared = $state(0);
	let firstTry = $state(0);
	const missed = new SvelteSet<string>();

	const current = $derived(queue[0]);
	const total = $derived(deck.cards.length);
	const finished = $derived(queue.length === 0 && cleared > 0);
	const stats = $derived(progress.deckStats(deck));

	/** Weakest cards first; shuffle within the same box so order isn't memorised. */
	function start(d: Deck) {
		queue = d.cards
			.map((card) => ({ card, sort: progress.box(card) + Math.random() * 0.9 }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ card }) => card);
		flipped = false;
		cleared = 0;
		firstTry = 0;
		missed.clear();
	}

	// Restart only when the deck changes — not every time progress is saved.
	$effect.pre(() => {
		const d = deck;
		untrack(() => start(d));
	});

	function grade(knewIt: boolean) {
		if (!current || !flipped) return;
		progress.grade(current, knewIt);
		if (knewIt) {
			if (!missed.has(current.id)) firstTry++;
			cleared++;
			queue = queue.slice(1);
		} else {
			// Send it to the back of the line to try again this session.
			missed.add(current.id);
			queue = [...queue.slice(1), current];
		}
		flipped = false;
	}

	function onkeydown(e: KeyboardEvent) {
		if (finished || e.metaKey || e.ctrlKey || e.altKey) return;
		const onControl = (e.target as HTMLElement).closest('button, a');
		if ((e.key === ' ' || e.key === 'Enter') && !onControl) {
			e.preventDefault();
			flipped = !flipped;
		} else if (e.key === 'ArrowLeft' || e.key === '1') {
			grade(false);
		} else if (e.key === 'ArrowRight' || e.key === '2') {
			grade(true);
		}
	}

	const accuracy = $derived(cleared ? Math.round((firstTry / cleared) * 100) : 0);
</script>

<svelte:window {onkeydown} />

<svelte:head>
	<title>{deck.title} · Arabisa</title>
	<meta name="description" content="Latih kosakata {deck.title.toLowerCase()} dalam bahasa Arab." />
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pt-5 pb-8 sm:px-5">
	<header class="flex items-center gap-3">
		<a
			id="back-to-decks"
			href={resolve('/decks')}
			class="-ml-2 grid size-10 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink"
			aria-label="Kembali ke daftar dek"
		>
			<ArrowLeft size={22} />
		</a>
		<div class="min-w-0 flex-1">
			<h1 class="truncate leading-tight font-semibold text-ink">{deck.title}</h1>
			<p class="text-sm text-ink-faint tabular-nums">
				{#if finished}Selesai{:else}{Math.min(cleared + 1, total)} dari {total}{/if}
			</p>
		</div>
		<span lang="ar" dir="rtl" class="text-2xl text-ink-soft">{deck.titleAr}</span>
	</header>

	<div
		class="mt-4 h-1.5 overflow-hidden rounded-full bg-paper-sunk"
		role="progressbar"
		aria-label="Progres kartu hafalan"
		aria-valuemin={0}
		aria-valuemax={total}
		aria-valuenow={cleared}
	>
		<div
			class="h-full rounded-full bg-accent transition-[width] duration-500 ease-out-expo"
			style:width="{(cleared / total) * 100}%"
		></div>
	</div>

	{#if finished}
		<section
			class="flex flex-1 flex-col items-center justify-center text-center"
			aria-live="polite"
		>
			<p lang="ar" dir="rtl" class="text-6xl font-bold text-accent-ink">أَحْسَنْتَ</p>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink">Bagus sekali.</h2>
			<p class="mt-2 text-ink-soft">
				Kamu telah menyelesaikan {total} kata dan menjawab benar
				<strong class="font-semibold text-ink">{accuracy}%</strong> pada percobaan pertama.
			</p>

			<div class="mt-8 w-full max-w-xs">
				<DeckProgress {...stats} />
				<p class="mt-2 text-sm text-ink-faint tabular-nums">
					{stats.mastered} dari {stats.total} dikuasai di dek ini
				</p>
			</div>

			<div class="mt-10 flex w-full max-w-xs flex-col gap-3">
				<button
					id="study-again"
					type="button"
					onclick={() => start(deck)}
					class="flex h-12 items-center justify-center gap-2 rounded-xl bg-ink font-semibold text-paper transition-transform hover:scale-[1.02] active:scale-[0.98]"
				>
					<RotateCcw size={18} /> Belajar lagi
				</button>
				<a
					id="finish-back"
					href={resolve('/decks')}
					class="flex h-12 items-center justify-center rounded-xl font-semibold text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink"
				>
					Kembali ke daftar dek
				</a>
			</div>

			<button
				id="reset-deck"
				type="button"
				class="mt-8 text-sm text-ink-faint underline underline-offset-4 hover:text-again"
				onclick={() => {
					if (confirm(`Atur ulang semua progres untuk ${deck.title}?`)) {
						progress.resetDeck(deck);
						start(deck);
					}
				}}
			>
				Atur ulang progres dek
			</button>
		</section>
	{:else if current}
		<section class="flex flex-1 flex-col justify-center py-6">
			{#key current.id + cleared}
				<div class="card-enter">
					<Flashcard
						card={current}
						front={progress.front}
						{flipped}
						isNew={progress.isNew(current)}
						onflip={() => (flipped = !flipped)}
					/>
				</div>
			{/key}
		</section>

		<div class="grid h-14 grid-cols-2 gap-3">
			{#if flipped}
				<button
					id="grade-again"
					type="button"
					onclick={() => grade(false)}
					class="flex items-center justify-center gap-2 rounded-xl bg-again-wash font-semibold text-again transition-transform active:scale-[0.97]"
				>
					<X size={20} strokeWidth={2.5} /> Ulangi
					<kbd class="hidden text-xs opacity-60 pointer-fine:inline">←</kbd>
				</button>
				<button
					id="grade-good"
					type="button"
					onclick={() => grade(true)}
					class="flex items-center justify-center gap-2 rounded-xl bg-good-wash font-semibold text-good transition-transform active:scale-[0.97]"
				>
					<Check size={20} strokeWidth={2.5} /> Sudah hafal
					<kbd class="hidden text-xs opacity-60 pointer-fine:inline">→</kbd>
				</button>
			{:else}
				<button
					id="reveal"
					type="button"
					onclick={() => (flipped = true)}
					class="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-ink font-semibold text-paper transition-transform active:scale-[0.98]"
				>
					Lihat jawaban
				</button>
			{/if}
		</div>
	{/if}
</div>

<style>
	@media (prefers-reduced-motion: no-preference) {
		.card-enter {
			animation: card-in 450ms var(--ease-out-expo);
		}
	}
	@keyframes card-in {
		from {
			opacity: 0.3;
			translate: 0 16px;
			scale: 0.97;
		}
	}
</style>
