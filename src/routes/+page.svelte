<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import Check from '@lucide/svelte/icons/check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import ClipboardCheck from '@lucide/svelte/icons/clipboard-check';
	import Flame from '@lucide/svelte/icons/flame';
	import Layers from '@lucide/svelte/icons/layers';
	import Moon from '@lucide/svelte/icons/moon';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Sun from '@lucide/svelte/icons/sun';
	import StarMark from '#lib/components/StarMark.svelte';
	import { decks } from '#lib/data/decks.ts';
	import { lessons } from '#lib/data/lessons.ts';
	import { progress } from '#lib/progress.svelte.ts';

	const completedCount = $derived(
		lessons.filter((lesson) => progress.isLessonDone(lesson.id)).length
	);

	const nextLesson = $derived(
		lessons.find((lesson) => !progress.isLessonDone(lesson.id)) ?? lessons[0]
	);

	const activeDeck = $derived(decks.find((d) => d.id === nextLesson.id));

	const allCompleted = $derived(completedCount === lessons.length);
	const vocabStats = $derived(progress.allDecksStats(decks));

	const upcomingLessons = $derived.by(() => {
		const uncompletedIndex = lessons.findIndex((l) => !progress.isLessonDone(l.id));
		if (uncompletedIndex === -1) {
			return lessons.slice(-3);
		}
		return lessons.slice(uncompletedIndex, uncompletedIndex + 3);
	});
</script>

<svelte:head>
	<title>Arabisa · Materi, Flashcard & Latihan Bahasa Arab</title>
	<meta
		name="description"
		content="Arabisa — Pelajari kaidah dasar, percakapan, kosakata, flashcard, dan latihan bahasa Arab secara offline."
	/>
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pt-5 pb-24 sm:px-5">
	<!-- App Header -->
	<header class="flex items-center justify-between">
		<div class="flex items-center gap-2.5 text-ink">
			<StarMark class="text-accent" />
			<span class="text-lg font-semibold tracking-tight">Arabisa</span>
		</div>

		<div class="flex items-center gap-2">
			<div
				class={[
					'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium tabular-nums',
					progress.studiedToday ? 'bg-accent-wash text-accent-ink' : 'bg-paper-sunk text-ink-soft'
				]}
				role="status"
				aria-label="{progress.streak} hari belajar beruntun. {progress.studiedToday
					? 'Kamu sudah belajar hari ini'
					: 'Belajar hari ini untuk menjaga runtutan harimu'}"
				title={progress.studiedToday
					? 'Kamu sudah belajar hari ini'
					: 'Belajar hari ini untuk menjaga runtutan harimu'}
			>
				<Flame size={16} strokeWidth={2.25} />
				{progress.streak}
				<span class="sr-only">hari beruntun</span>
			</div>

			<button
				id="theme-switcher"
				type="button"
				onclick={() => progress.toggleTheme()}
				class="grid size-8 place-items-center rounded-lg bg-paper-sunk text-ink-soft transition-colors hover:text-ink active:scale-[0.96]"
				aria-label={progress.theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
				title={progress.theme === 'dark' ? 'Tema terang' : 'Tema gelap'}
			>
				{#if progress.theme === 'dark'}
					<Sun size={16} />
				{:else}
					<Moon size={16} />
				{/if}
			</button>
		</div>
	</header>

	<!-- 1. Lanjutkan Belajar (Hero Study Desk) -->
	<section class="mt-5" aria-labelledby="cta-heading">
		<div class="rounded-2xl bg-paper-raised p-5 shadow-card sm:p-6">
			<div class="flex items-start justify-between gap-3">
				<span
					class="inline-flex items-center gap-1.5 rounded-md bg-accent-wash px-2.5 py-1 text-xs font-semibold text-accent-ink"
				>
					{allCompleted
						? 'Semua Topik Selesai'
						: completedCount === 0
							? 'Mulai Belajar'
							: 'Lanjutkan Belajar'}
				</span>
				<span class="text-xs font-semibold tracking-wide text-ink-faint uppercase">
					{nextLesson.label}
				</span>
			</div>

			<h1 id="cta-heading" class="mt-3.5 text-xl font-bold tracking-tight text-ink sm:text-2xl">
				{nextLesson.title}
			</h1>

			<p class="mt-1.5 text-sm leading-relaxed text-ink-soft">
				{nextLesson.summary}
			</p>

			<!-- Study Desk Quick Actions -->
			<div class="mt-4 flex flex-col gap-2.5">
				<a
					id="continue-learning-cta"
					href={resolve('/lesson/[id]', { id: nextLesson.id })}
					class="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink px-4 text-sm font-semibold text-paper transition-all hover:bg-ink/90 active:scale-[0.98]"
				>
					<BookOpen size={16} />
					<span>
						{allCompleted
							? `Ulangi ${nextLesson.label}`
							: completedCount === 0
								? `Mulai ${nextLesson.label}`
								: `Lanjutkan ${nextLesson.label}`}
					</span>
					<ArrowRight size={16} />
				</a>

				{#if activeDeck}
					<a
						id="study-desk-deck"
						href={resolve('/deck/[id]', { id: activeDeck.id })}
						class="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-line bg-paper px-4 text-sm font-medium text-ink transition-all hover:bg-paper-sunk active:scale-[0.98]"
					>
						<Layers size={16} class="text-accent-ink" />
						<span>Kosakata ({activeDeck.cards.length})</span>
					</a>
				{/if}

				<a
					id="study-desk-quiz"
					href={resolve('/latihan')}
					class="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-line bg-paper px-4 text-sm font-medium text-ink transition-all hover:bg-paper-sunk active:scale-[0.98]"
				>
					<ClipboardCheck size={16} class="text-good" />
					<span>Latihan</span>
				</a>
			</div>
		</div>
	</section>

	<!-- 2. Alur Belajar / Ringkasan Progres -->
	<section class="mt-5" aria-labelledby="guide-heading">
		{#if completedCount === 0 && vocabStats.studied === 0}
			<div class="rounded-2xl bg-paper-raised p-5 shadow-card sm:p-6">
				<div class="flex items-start justify-between gap-3">
					<h2 id="guide-heading" class="text-sm font-semibold tracking-wide text-ink uppercase">
						Alur Belajar
					</h2>
				</div>
				<p class="mt-1 text-xs leading-relaxed text-ink-soft">
					Metode belajar mandiri yang terstruktur untuk pemula tanpa perlu guru pendamping:
				</p>

				<ol class="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
					<li class="flex items-start gap-3 rounded-xl bg-paper-sunk/60 p-3">
						<div
							class="grid size-7 shrink-0 place-items-center rounded-lg bg-accent-wash text-xs font-bold text-accent-ink"
						>
							1
						</div>
						<div class="min-w-0">
							<p class="text-xs font-semibold text-ink">Baca Kaidah</p>
							<p class="mt-0.5 text-[11px] leading-snug text-ink-soft">
								Pahami penjelasan tata bahasa & contoh kalimat.
							</p>
						</div>
					</li>

					<li class="flex items-start gap-3 rounded-xl bg-paper-sunk/60 p-3">
						<div
							class="grid size-7 shrink-0 place-items-center rounded-lg bg-accent-wash text-xs font-bold text-accent-ink"
						>
							2
						</div>
						<div class="min-w-0">
							<p class="text-xs font-semibold text-ink">Hafal Kosakata</p>
							<p class="mt-0.5 text-[11px] leading-snug text-ink-soft">
								Latih daya ingat kata baru lewat kartu flashcard.
							</p>
						</div>
					</li>

					<li class="flex items-start gap-3 rounded-xl bg-paper-sunk/60 p-3">
						<div
							class="grid size-7 shrink-0 place-items-center rounded-lg bg-accent-wash text-xs font-bold text-accent-ink"
						>
							3
						</div>
						<div class="min-w-0">
							<p class="text-xs font-semibold text-ink">Uji Soal</p>
							<p class="mt-0.5 text-[11px] leading-snug text-ink-soft">
								Jawab kuis interaktif untuk memastikan pemahaman.
							</p>
						</div>
					</li>
				</ol>
			</div>
		{:else}
			<div class="mb-2.5 flex items-center justify-between gap-4">
				<h2
					id="guide-heading"
					class="text-xs font-semibold tracking-wide text-ink-soft uppercase"
				>
					Ringkasan Progres Belajar
				</h2>
			</div>

			<div class="grid grid-cols-3 gap-2.5">
				<div class="rounded-2xl bg-paper-raised p-3.5 shadow-card">
					<p class="text-2xl font-bold text-ink tabular-nums">
						{completedCount}<span class="text-sm font-medium text-ink-faint">/{lessons.length}</span>
					</p>
					<p class="mt-1 text-xs font-medium text-ink-soft">Topik Selesai</p>
				</div>

				<div class="rounded-2xl bg-paper-raised p-3.5 shadow-card">
					<p class="text-2xl font-bold text-good tabular-nums">
						{vocabStats.mastered}<span class="text-sm font-medium text-ink-faint"
							>/{vocabStats.total}</span
						>
					</p>
					<p class="mt-1 text-xs font-medium text-ink-soft">Kata Dikuasai</p>
				</div>

				<div class="rounded-2xl bg-paper-raised p-3.5 shadow-card">
					<p class="text-2xl font-bold text-accent-ink tabular-nums">
						{vocabStats.studied}
					</p>
					<p class="mt-1 text-xs font-medium text-ink-soft">Kata Dipelajari</p>
				</div>
			</div>
		{/if}
	</section>

	<!-- 3. Materi Pembelajaran (Materi Selanjutnya) -->
	<section class="mt-6" aria-labelledby="topics-heading">
		<div class="mb-2.5 flex items-center justify-between gap-4">
			<h2 id="topics-heading" class="text-xs font-semibold tracking-wide text-ink-soft uppercase">
				Materi Selanjutnya
			</h2>
			<a
				href={resolve('/materi')}
				class="inline-flex items-center gap-1 text-xs font-semibold text-accent-ink hover:underline"
			>
				<span>Lihat Semua ({lessons.length})</span>
				<ArrowRight size={14} />
			</a>
		</div>

		<ol class="space-y-3">
			{#each upcomingLessons as lesson (lesson.id)}
				{@const done = progress.isLessonDone(lesson.id)}
				{@const lessonDeck = decks.find((d) => d.id === lesson.id)}
				{@const deckStats = lessonDeck ? progress.deckStats(lessonDeck) : null}
				<li>
					<a
						id="topic-{lesson.id}"
						href={resolve('/lesson/[id]', { id: lesson.id })}
						class="group flex items-start gap-3.5 rounded-2xl bg-paper-raised p-4 shadow-card transition-all hover:bg-paper-sunk/60 active:scale-[0.99]"
					>
						<div
							class={[
								'relative mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg text-sm font-bold tabular-nums transition-colors',
								done ? 'bg-good-wash text-good' : 'bg-accent-wash text-accent-ink'
							]}
						>
							{lesson.number}
							{#if done}
								<span
									class="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-good text-paper ring-2 ring-paper-raised"
									aria-hidden="true"
								>
									<Check size={10} strokeWidth={3} />
								</span>
							{/if}
						</div>

						<div class="min-w-0 flex-1">
							<div>
								<p class="text-xs font-semibold tracking-wide text-ink-faint uppercase">
									{lesson.label}
								</p>
								<h3 class="mt-0.5 font-semibold text-ink">{lesson.title}</h3>
							</div>

							<p class="mt-1.5 text-sm leading-relaxed text-ink-soft">
								{lesson.summary}
							</p>

							<div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
								<span
									class="inline-flex items-center gap-1.5 rounded-md bg-paper-sunk px-2.5 py-1 font-medium text-ink-soft"
								>
									<BookOpen size={13} />
									{lesson.grammarNotes.length} kaidah
								</span>
								{#if deckStats}
									<span
										class={[
											'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium',
											deckStats.mastered > 0
												? 'bg-accent-wash text-accent-ink'
												: 'bg-paper-sunk text-ink-soft'
										]}
									>
										<Layers size={13} />
										{deckStats.mastered}/{deckStats.total} kata dihafal
									</span>
								{:else}
									<span
										class="inline-flex items-center gap-1.5 rounded-md bg-paper-sunk px-2.5 py-1 font-medium text-ink-soft"
									>
										<Layers size={13} />
										{lesson.vocabulary.length} kosakata
									</span>
								{/if}
								{#if done}
									<span
										class="inline-flex items-center gap-1 rounded-md bg-good-wash px-2.5 py-1 font-semibold text-good"
									>
										<Check size={12} strokeWidth={2.5} /> Selesai
									</span>
								{/if}
							</div>
						</div>

						<ChevronRight
							size={20}
							class="mt-2 shrink-0 text-ink-faint transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
						/>
					</a>
				</li>
			{/each}
		</ol>

		<div class="mt-4">
			<a
				id="view-all-lessons"
				href={resolve('/materi')}
				class="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-paper-raised font-semibold text-ink shadow-card transition-colors hover:bg-paper-sunk/60"
			>
				<span>Buka Seluruh Silabus ({lessons.length} Pelajaran)</span>
				<ArrowRight size={16} />
			</a>
		</div>
	</section>
</div>
