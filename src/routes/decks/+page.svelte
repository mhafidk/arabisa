<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import DeckProgress from '#lib/components/DeckProgress.svelte';
	import { decks } from '#lib/data/decks.ts';
	import { progress, type FrontSide } from '#lib/progress.svelte.ts';

	const sides: { value: FrontSide; label: string }[] = [
		{ value: 'ar', label: 'Arab' },
		{ value: 'id', label: 'Indonesia' }
	];
</script>

<svelte:head>
	<title>Kartu Hafalan · Belajar Bahasa Arab</title>
	<meta
		name="description"
		content="Latih kosakata bahasa Arab Anda dengan kartu hafalan. Bisa digunakan secara offline."
	/>
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-5 pt-5 pb-10">
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
			<p class="text-xs text-ink-faint">Latihan kosakata berdasarkan topik</p>
		</div>
	</header>

	<section class="mt-6" aria-labelledby="decks-heading">
		<div class="mb-3 flex items-end justify-between gap-4">
			<h2 id="decks-heading" class="text-sm font-semibold text-ink-soft">Daftar Dek</h2>

			<div class="flex items-center gap-2 text-sm text-ink-faint">
				<span id="front-label">Tampilkan dulu</span>
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
								'rounded-md px-3 py-1 font-medium transition-colors',
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

		<ul class="divide-y divide-line overflow-hidden rounded-2xl bg-paper-raised shadow-card">
			{#each decks as deck (deck.id)}
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
								<span lang="ar" dir="rtl" class="shrink-0 text-2xl text-ink-soft">
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

		<p class="mt-4 flex items-center gap-4 text-xs text-ink-faint">
			<span class="flex items-center gap-1.5">
				<span class="size-2 rounded-full bg-good"></span> Dikuasai
			</span>
			<span class="flex items-center gap-1.5">
				<span class="size-2 rounded-full bg-accent"></span> Sedang dipelajari
			</span>
		</p>
	</section>
</div>
