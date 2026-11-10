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
			size === 'lg' ? 'text-6xl sm:text-7xl' : 'text-4xl text-ink-soft'
		]}
	>
		{card.ar}
	</p>
{/snippet}

<button
	id="flashcard"
	type="button"
	class="card-scene group block w-full cursor-pointer text-center"
	aria-label={flipped ? 'Sembunyikan jawaban' : 'Tampilkan jawaban'}
	aria-pressed={flipped}
	onclick={onflip}
>
	<div class="card-inner relative h-[min(26rem,58dvh)] w-full" class:flipped>
		<!-- Front -->
		<div
			class="card-face face-front absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-paper-raised p-8 shadow-card"
			aria-hidden={flipped}
		>
			{#if isNew}
				<span
					class="absolute top-5 left-5 rounded-full bg-accent-wash px-2.5 py-0.5 text-xs font-semibold text-accent-ink"
				>
					Baru
				</span>
			{/if}

			{#if front === 'ar'}
				{@render arabic('lg')}
			{:else}
				<p class="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{card.en}</p>
			{/if}

			<span
				class="absolute bottom-6 text-sm text-ink-faint transition-colors group-hover:text-ink-soft"
			>
				Ketuk untuk membuka
			</span>
		</div>

		<!-- Back -->
		<div
			class="card-face face-back absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl bg-paper-raised p-8 shadow-card"
			aria-hidden={!flipped}
			aria-live="polite"
		>
			{#if front === 'ar'}
				<p class="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{card.en}</p>
				<p class="text-lg text-accent-ink italic">{card.tr}</p>
				<div class="mt-5 w-12 border-t border-line"></div>
				<div class="mt-3">{@render arabic('md')}</div>
			{:else}
				{@render arabic('lg')}
				<p class="mt-2 text-lg text-accent-ink italic">{card.tr}</p>
				<div class="mt-5 w-12 border-t border-line"></div>
				<p class="mt-3 text-xl text-ink-soft">{card.en}</p>
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
