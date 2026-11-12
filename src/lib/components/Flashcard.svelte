<script lang="ts">
	import type { Card } from '#lib/data/decks.ts';
	import type { FrontSide } from '#lib/progress.svelte.ts';

	let {
		card,
		front,
		flipped,
		isNew = false,
		onflip
	}: {
		card: Card;
		front: FrontSide;
		flipped: boolean;
		isNew?: boolean;
		onflip: () => void;
	} = $props();
</script>

{#snippet arabic(size: 'lg' | 'md')}
	<p
		lang="ar"
		dir="rtl"
		class={[
			'font-bold text-ink',
			size === 'lg' ? 'text-5xl sm:text-6xl md:text-7xl' : 'text-3xl sm:text-4xl text-ink-soft'
		]}
	>
		{card.ar}
	</p>
{/snippet}

<button
	id="flashcard"
	type="button"
	class="card-scene group flex h-full w-full max-h-[26rem] flex-col items-center justify-center cursor-pointer text-center"
	aria-label={flipped ? 'Sembunyikan jawaban' : 'Tampilkan jawaban'}
	aria-pressed={flipped}
	onclick={onflip}
>
	<div class="card-inner relative h-full w-full min-h-[13rem]" class:flipped>
		<!-- Front -->
		<div
			class="card-face face-front absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-paper-raised p-6 sm:p-8 shadow-card"
			aria-hidden={flipped}
		>
			{#if isNew}
				<span
					class="absolute top-4 left-4 sm:top-5 sm:left-5 rounded-md bg-accent-wash px-2.5 py-0.5 text-xs font-semibold text-accent-ink"
				>
					Baru
				</span>
			{/if}

			{#if front === 'ar'}
				{@render arabic('lg')}
			{:else}
				<p class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">{card.en}</p>
			{/if}

			<span
				class="absolute bottom-4 sm:bottom-6 text-xs sm:text-sm text-ink-faint transition-colors group-hover:text-ink-soft"
			>
				Ketuk untuk membuka
			</span>
		</div>

		<!-- Back -->
		<div
			class="card-face face-back absolute inset-0 flex flex-col items-center justify-center gap-1.5 sm:gap-2 rounded-3xl bg-paper-raised p-6 sm:p-8 shadow-card"
			aria-hidden={!flipped}
			aria-live="polite"
		>
			{#if front === 'ar'}
				<p class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">{card.en}</p>
				<p class="text-base sm:text-lg text-accent-ink italic">{card.tr}</p>
				<div class="mt-3 sm:mt-5 w-12 border-t border-line"></div>
				<div class="mt-2 sm:mt-3">{@render arabic('md')}</div>
			{:else}
				{@render arabic('lg')}
				<p class="mt-1 sm:mt-2 text-base sm:text-lg text-accent-ink italic">{card.tr}</p>
				<div class="mt-3 sm:mt-5 w-12 border-t border-line"></div>
				<p class="mt-2 sm:mt-3 text-lg sm:text-xl text-ink-soft">{card.en}</p>
			{/if}
		</div>
	</div>
</button>

<style>
	/* Default (incl. reduced motion): faces cross-fade in place. */
	.card-face {
		transition: opacity 220ms ease-out;
	}
	.face-back {
		opacity: 0;
	}
	.flipped .face-front {
		opacity: 0;
	}
	.flipped .face-back {
		opacity: 1;
	}

	/* Full motion: a real 3D flip. */
	@media (prefers-reduced-motion: no-preference) {
		.card-scene {
			perspective: 1400px;
		}
		.card-inner {
			transform-style: preserve-3d;
			transition: rotate 650ms var(--ease-out-expo);
		}
		.card-inner.flipped {
			rotate: y 180deg;
		}
		.card-face {
			backface-visibility: hidden;
			opacity: 1 !important;
			transition: box-shadow 300ms ease-out;
		}
		.face-back {
			rotate: y 180deg;
		}
		.card-scene:hover .card-face {
			box-shadow: var(--shadow-lift);
		}
	}
</style>
