<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import Check from '@lucide/svelte/icons/check';
	import ClipboardCheck from '@lucide/svelte/icons/clipboard-check';
	import Layers from '@lucide/svelte/icons/layers';
	import MessageSquareText from '@lucide/svelte/icons/message-square-text';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import type { VocabCategory } from '#lib/data/lessons.ts';
	import { progress } from '#lib/progress.svelte.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const lesson = $derived(data.lesson);
	const prevLesson = $derived(data.prevLesson);
	const nextLesson = $derived(data.nextLesson);
	const isDone = $derived(progress.isLessonDone(lesson.id));

	let selectedCategory = $state<'Semua' | VocabCategory>('Semua');
	let showTransliteration = $state(true);

	const categories = $derived<('Semua' | VocabCategory)[]>([
		'Semua',
		...Array.from(new Set(lesson.vocabulary.map((v) => v.category)))
	]);

	const filteredVocab = $derived(
		selectedCategory === 'Semua'
			? lesson.vocabulary
			: lesson.vocabulary.filter((v) => v.category === selectedCategory)
	);

	$effect(() => {
		// Reset category filter when switching between lessons
		lesson.id;
		selectedCategory = 'Semua';
	});
</script>

<svelte:head>
	<title>{lesson.label}: {lesson.title} · Arabisa</title>
	<meta name="description" content={lesson.summary} />
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pt-5 pb-24 sm:px-5">
	<!-- Top Navigation Header -->
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
			<p class="text-xs font-semibold tracking-wide text-accent-ink uppercase">{lesson.label}</p>
			<h1 class="truncate text-lg leading-tight font-semibold text-ink">{lesson.title}</h1>
		</div>
	</header>

	<!-- Core Concept Hero Card -->
	<section class="mt-5 rounded-2xl bg-paper-raised p-5 shadow-card sm:p-6">
		<div class="border-b border-line pb-5">
			<div>
				<span
					class="inline-flex items-center gap-1.5 rounded-md bg-accent-wash px-2.5 py-0.5 text-xs font-semibold text-accent-ink"
				>
					Konsep Utama
				</span>
				<h2 class="mt-2 text-xl font-semibold text-ink">{lesson.coreConcept.heading}</h2>
			</div>

			<div class="mt-4 w-full rounded-xl bg-paper-sunk px-5 py-3.5 text-center">
				<p lang="ar" dir="rtl" class="text-4xl font-medium text-accent-ink">
					{lesson.coreConcept.highlightAr}
				</p>
				<p class="mt-1 text-xs text-ink-soft">
					<span class="italic">{lesson.coreConcept.highlightTr}</span> — {lesson.coreConcept
						.highlightId}
				</p>
			</div>
		</div>
		<p class="mt-4 leading-relaxed text-ink-soft">
			{lesson.coreConcept.description}
		</p>
	</section>

	<!-- Section 1: Grammar Notes -->
	<section class="mt-8 sm:mt-10" aria-labelledby="grammar-heading">
		<div class="mb-3.5 flex items-center gap-2">
			<BookOpen size={18} class="text-accent-ink" />
			<h2
				id="grammar-heading"
				class="text-sm font-semibold tracking-wide text-ink-soft uppercase sm:text-base"
			>
				Kaidah & Catatan Tata Bahasa
			</h2>
		</div>

		<ol class="space-y-3.5">
			{#each lesson.grammarNotes as note, idx (note.title)}
				<li class="rounded-2xl bg-paper-raised p-5 shadow-card">
					<div class="flex items-start gap-3.5">
						<span
							class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-accent-wash text-xs font-bold text-accent-ink tabular-nums"
						>
							{idx + 1}
						</span>
						<div class="min-w-0 flex-1">
							<h3 class="font-semibold text-ink">{note.title}</h3>
							<p class="mt-1.5 text-sm leading-relaxed text-ink-soft">{note.body}</p>

							{#if note.examples?.length}
								<div class="mt-3.5 space-y-2 rounded-xl bg-paper-sunk/75 p-3.5">
									{#each note.examples as ex (ex.ar)}
										<div class="flex flex-wrap items-baseline justify-between gap-3">
											<span class="text-sm text-ink-soft">
												{ex.id}
												{#if ex.tr}
													<span class="ml-1 text-xs text-ink-faint italic">({ex.tr})</span>
												{/if}
											</span>
											<span lang="ar" dir="rtl" class="text-2xl font-medium text-ink">
												{ex.ar}
											</span>
										</div>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<!-- Section 2: Example Sentences & Dialogues -->
	<section class="mt-8 sm:mt-10" aria-labelledby="examples-heading">
		<div class="mb-3.5 flex flex-wrap items-center justify-between gap-2">
			<div class="flex items-center gap-2">
				<MessageSquareText size={18} class="text-accent-ink" />
				<h2
					id="examples-heading"
					class="text-sm font-semibold tracking-wide text-ink-soft uppercase sm:text-base"
				>
					Contoh Kalimat & Percakapan
				</h2>
			</div>

			<button
				type="button"
				onclick={() => (showTransliteration = !showTransliteration)}
				aria-pressed={showTransliteration}
				class={[
					'rounded-lg px-2.5 py-1 text-xs font-medium transition-colors active:scale-[0.97]',
					showTransliteration
						? 'bg-accent-wash text-accent-ink'
						: 'bg-paper-sunk text-ink-faint hover:text-ink-soft'
				]}
			>
				{showTransliteration ? 'Sembunyikan cara baca' : 'Tampilkan cara baca'}
			</button>
		</div>

		<div class="space-y-4">
			{#each lesson.exampleGroups as group (group.title)}
				<div class="overflow-hidden rounded-2xl bg-paper-raised shadow-card">
					<div
						class="flex items-baseline justify-between border-b border-line bg-paper-sunk/40 px-5 py-3"
					>
						<h3 class="text-sm font-semibold text-ink">{group.title}</h3>
						{#if group.subtitleAr}
							<span lang="ar" dir="rtl" class="text-lg font-medium text-accent-ink">
								{group.subtitleAr}
							</span>
						{/if}
					</div>

					<ul class="divide-y divide-line">
						{#each group.items as item, idx (idx)}
							<li
								class="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
							>
								<div class="order-2 sm:order-1">
									<div class="flex items-center gap-2">
										{#if item.speaker === 'Q'}
											<span
												class="rounded-md bg-accent-wash px-1.5 py-0.5 text-[11px] font-semibold text-accent-ink"
											>
												Tanya
											</span>
										{:else if item.speaker === 'A'}
											<span
												class="rounded-md bg-good-wash px-1.5 py-0.5 text-[11px] font-semibold text-good"
											>
												Jawab
											</span>
										{/if}
										<p class="text-sm font-medium text-ink">{item.id}</p>
									</div>
									{#if showTransliteration}
										<p class="mt-0.5 text-xs text-ink-faint italic">{item.tr}</p>
									{/if}
								</div>

								<p
									lang="ar"
									dir="rtl"
									class="order-1 text-right text-2xl font-medium text-ink sm:order-2 sm:text-3xl"
								>
									{item.ar}
								</p>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Section 3: Vocabulary List -->
	<section class="mt-8 sm:mt-10" aria-labelledby="vocab-heading">
		<div class="mb-3 flex flex-wrap items-end justify-between gap-3">
			<div>
				<h2
					id="vocab-heading"
					class="text-sm font-semibold tracking-wide text-ink-soft uppercase sm:text-base"
				>
					Daftar Kosakata ({lesson.vocabulary.length})
				</h2>
				{#if lesson.vocabNote}
					<p class="mt-0.5 text-xs text-ink-faint">{lesson.vocabNote}</p>
				{/if}
			</div>

			{#if categories.length > 2}
				<div class="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter kategori kosakata">
					{#each categories as cat (cat)}
						<button
							type="button"
							role="tab"
							aria-selected={selectedCategory === cat}
							onclick={() => (selectedCategory = cat)}
							class={[
								'rounded-lg px-2.5 py-1 text-xs font-medium transition-colors active:scale-[0.97]',
								selectedCategory === cat
									? 'bg-ink text-paper'
									: 'bg-paper-sunk text-ink-soft hover:text-ink'
							]}
						>
							{cat}
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<ul class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
			{#each filteredVocab as item (item.ar)}
				<li
					class="flex items-center justify-between gap-3 rounded-2xl bg-paper-raised px-4 py-3.5 shadow-card"
				>
					<div class="min-w-0">
						<span
							class="inline-block rounded-md bg-paper-sunk px-2 py-0.5 text-[10px] font-semibold text-ink-faint"
						>
							{item.category}
						</span>
						<p class="mt-1 font-semibold text-ink">{item.id}</p>
						<p class="text-xs text-ink-faint italic">{item.tr}</p>
					</div>
					<span lang="ar" dir="rtl" class="shrink-0 text-3xl font-medium text-ink">
						{item.ar}
					</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Mark Complete & Next/Prev Topic Navigation -->
	<footer class="mt-10 space-y-4 border-t border-line pt-6">
		<div class="grid grid-cols-2 gap-2.5">
			<a
				href={resolve('/deck/[id]', { id: lesson.id })}
				class="flex items-center gap-2.5 rounded-2xl bg-paper-raised p-3.5 shadow-card transition-colors hover:bg-paper-sunk/60 active:scale-[0.98]"
			>
				<div
					class="grid size-9 shrink-0 place-items-center rounded-xl bg-accent-wash text-accent-ink"
				>
					<Layers size={18} />
				</div>
				<div class="min-w-0">
					<p class="truncate text-xs font-semibold text-ink">Flashcard</p>
					<p class="truncate text-[11px] text-ink-faint">Hafalkan kosakata</p>
				</div>
			</a>

			<a
				href="{resolve('/latihan')}?topic={lesson.id}"
				class="flex items-center gap-2.5 rounded-2xl bg-paper-raised p-3.5 shadow-card transition-colors hover:bg-paper-sunk/60 active:scale-[0.98]"
			>
				<div class="grid size-9 shrink-0 place-items-center rounded-xl bg-good-wash text-good">
					<ClipboardCheck size={18} />
				</div>
				<div class="min-w-0">
					<p class="truncate text-xs font-semibold text-ink">Latihan Soal</p>
					<p class="truncate text-[11px] text-ink-faint">Uji pemahaman</p>
				</div>
			</a>
		</div>

		<button
			id="toggle-lesson-complete"
			type="button"
			onclick={() => progress.toggleLesson(lesson.id)}
			class={[
				'flex h-12 w-full items-center justify-center gap-2 rounded-xl font-semibold transition-all active:scale-[0.98]',
				isDone
					? 'bg-good-wash font-semibold text-good ring-1 ring-good/40'
					: 'bg-ink text-paper hover:bg-ink/90'
			]}
		>
			<Check size={18} strokeWidth={2.5} />
			{isDone ? 'Selesai Dipelajari' : 'Tandai Materi Selesai'}
		</button>

		<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
			{#if prevLesson}
				<a
					href={resolve('/lesson/[id]', { id: prevLesson.id })}
					class="flex items-center gap-3 rounded-2xl bg-paper-raised px-4 py-3.5 text-left shadow-card transition-colors hover:bg-paper-sunk/60"
				>
					<ArrowLeft size={18} class="shrink-0 text-ink-faint" />
					<div class="min-w-0">
						<p class="text-xs text-ink-faint">Materi Sebelumnya</p>
						<p class="truncate text-sm font-semibold text-ink">
							{prevLesson.label}: {prevLesson.title}
						</p>
					</div>
				</a>
			{:else}
				<div></div>
			{/if}

			{#if nextLesson}
				<a
					href={resolve('/lesson/[id]', { id: nextLesson.id })}
					class="flex items-center justify-between gap-3 rounded-2xl bg-paper-raised px-4 py-3.5 text-right shadow-card transition-colors hover:bg-paper-sunk/60"
				>
					<div class="min-w-0 flex-1">
						<p class="text-xs text-ink-faint">Materi Selanjutnya</p>
						<p class="truncate text-sm font-semibold text-ink">
							{nextLesson.label}: {nextLesson.title}
						</p>
					</div>
					<ArrowRight size={18} class="shrink-0 text-ink-faint" />
				</a>
			{/if}
		</div>
	</footer>
</div>
