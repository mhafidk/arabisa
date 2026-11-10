<script lang="ts">
	import { resolve } from '$app/paths';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Flame from '@lucide/svelte/icons/flame';
	import StarMark from '#lib/components/StarMark.svelte';
	import DeckProgress from '#lib/components/DeckProgress.svelte';
	import { decks } from '#lib/data/decks.ts';
	import { progress, type FrontSide } from '#lib/progress.svelte.ts';

	const sides: { value: FrontSide; label: string }[] = [
		{ value: 'ar', label: 'Arab' },
		{ value: 'id', label: 'Indonesia' }
	];
</script>

<svelte:head>
	<title>Belajar Bahasa Arab · Kartu Hafalan</title>
	<meta
		name="description"
		content="Perkaya kosakata bahasa Arab Anda dengan kartu hafalan. Bisa digunakan secara offline, tanpa perlu akun."
	/>
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-5 pt-6 pb-10">
	<header class="flex items-center justify-between">
		<div class="flex items-center gap-2.5 text-ink">
			<StarMark class="text-accent" />
			<span class="text-lg font-semibold tracking-tight">Belajar Bahasa Arab</span>
		</div>

		<div
			class={[
				'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium tabular-nums',
				progress.studiedToday ? 'bg-accent-wash text-accent-ink' : 'bg-paper-sunk text-ink-soft'
			]}
			title={progress.studiedToday
				? 'Kamu sudah belajar hari ini'
				: 'Belajar hari ini untuk menjaga runtutan harimu'}
		>
			<Flame size={16} strokeWidth={2.25} />
			{progress.streak}
			<span class="sr-only">hari beruntun</span>
		</div>
	</header>

	<section class="mt-12 mb-10">
		<p lang="ar" dir="rtl" class="text-5xl leading-tight font-bold text-accent-ink">
			كَلِمَة كُلَّ يَوْم
		</p>
		<h1 class="mt-6 text-3xl font-semibold tracking-tight text-ink">Satu kata setiap hari.</h1>
		<p class="mt-2 max-w-[42ch] text-ink-soft">
			Balik kartu, ucapkan dengan lantang, dan jujurlah pada diri sendiri. Semua progres tersimpan
			di perangkatmu.
		</p>
	</section>

	<section aria-labelledby="decks-heading">
		<div class="mb-3 flex items-center justify-between gap-4">
			<h2 id="decks-heading" class="text-sm font-semibold text-ink-soft">Daftar Dek</h2>

			<div class="flex items-center gap-2 text-sm text-ink-faint">
				<span id="front-label">Tampilkan dulu</span>
				<div
					role="radiogroup"
					aria-labelledby="front-label"
					class="flex rounded-full bg-paper-sunk p-0.5"
				>
					{#each sides as side (side.value)}
						<button
							id="front-{side.value}"
							type="button"
							role="radio"
							aria-checked={progress.front === side.value}
							onclick={() => (progress.front = side.value)}
							class={[
								'rounded-full px-3 py-1 font-medium transition-colors',
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
