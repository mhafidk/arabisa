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
	import Search from '@lucide/svelte/icons/search';
	import Sun from '@lucide/svelte/icons/sun';
	import StarMark from '#lib/components/StarMark.svelte';
	import { decks } from '#lib/data/decks.ts';
	import { exercises } from '#lib/data/exercises.ts';
	import { lessons } from '#lib/data/lessons.ts';
	import { progress } from '#lib/progress.svelte.ts';

	const completedCount = $derived(
		lessons.filter((lesson) => progress.isLessonDone(lesson.id)).length
	);

	const nextLesson = $derived(
		lessons.find((lesson) => !progress.isLessonDone(lesson.id)) ?? lessons[0]
	);

	const allCompleted = $derived(completedCount === lessons.length);
	const vocabStats = $derived(progress.allDecksStats(decks));
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

	<!-- 1. Lanjutkan Belajar (Hero CTA) -->
	<section class="mt-5" aria-labelledby="cta-heading">
		<div class="rounded-2xl bg-paper-raised p-5 shadow-card">
			<div class="flex items-start justify-between gap-3">
				<div class="min-w-0">
					<span
						id="cta-heading"
						class="inline-flex items-center gap-1.5 rounded-md bg-accent-wash px-2.5 py-0.5 text-xs font-semibold text-accent-ink"
					>
						{allCompleted
							? 'Semua Topik Selesai'
							: completedCount === 0
								? 'Mulai Belajar'
								: 'Lanjutkan Belajar'}
					</span>
					<p class="mt-2 text-xs font-semibold tracking-wide text-ink-faint uppercase">
						{nextLesson.label}
					</p>
					<h1 class="mt-0.5 text-xl font-semibold tracking-tight text-ink">
						{nextLesson.title}
					</h1>
				</div>
			</div>

			<p class="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
				{nextLesson.summary}
			</p>

			<a
				id="continue-learning-cta"
				href={resolve('/lesson/[id]', { id: nextLesson.id })}
				class="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink text-sm font-semibold text-paper transition-transform active:scale-[0.98]"
			>
				{allCompleted
					? `Ulangi ${nextLesson.label}`
					: completedCount === 0
						? `Mulai ${nextLesson.label}`
						: `Lanjutkan ${nextLesson.label}`}
				<ArrowRight size={17} />
			</a>
		</div>
	</section>

	<!-- 2. Ringkasan Progres Belajar -->
	<section class="mt-5" aria-labelledby="progress-summary-heading">
		<h2
			id="progress-summary-heading"
			class="mb-2.5 text-xs font-semibold tracking-wide text-ink-soft uppercase"
		>
			Ringkasan Progres Belajar
		</h2>

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
	</section>

	<!-- 3. Flashcard & Latihan Links -->
	<section class="mt-5" aria-labelledby="practice-heading">
		<h2
			id="practice-heading"
			class="mb-2.5 text-xs font-semibold tracking-wide text-ink-soft uppercase"
		>
			Asah Kemampuan
		</h2>

		<div class="grid grid-cols-2 gap-2.5">
			<a
				id="nav-flashcards"
				href={resolve('/decks')}
				class="group flex flex-col justify-between rounded-2xl bg-paper-raised p-4 shadow-card transition-colors hover:bg-paper-sunk/60 active:scale-[0.98]"
			>
				<div class="flex items-center justify-between">
					<div class="grid size-10 place-items-center rounded-xl bg-accent-wash text-accent-ink">
						<Layers size={20} />
					</div>
					<ChevronRight
						size={18}
						class="text-ink-faint transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
					/>
				</div>
				<div class="mt-3">
					<h3 class="font-semibold text-ink">Flashcard</h3>
					<p class="mt-0.5 text-xs text-ink-faint">{decks.length} dek kartu hafalan</p>
				</div>
			</a>

			<a
				id="nav-latihan"
				href={resolve('/latihan')}
				class="group flex flex-col justify-between rounded-2xl bg-paper-raised p-4 shadow-card transition-colors hover:bg-paper-sunk/60 active:scale-[0.98]"
			>
				<div class="flex items-center justify-between">
					<div class="grid size-10 place-items-center rounded-xl bg-good-wash text-good">
						<ClipboardCheck size={20} />
					</div>
					<ChevronRight
						size={18}
						class="text-ink-faint transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
					/>
				</div>
				<div class="mt-3">
					<h3 class="font-semibold text-ink">Latihan Soal</h3>
					<p class="mt-0.5 text-xs text-ink-faint">{exercises.length} soal kuis interaktif</p>
				</div>
			</a>

			<a
				id="nav-kosakata"
				href={resolve('/kosakata')}
				class="group col-span-2 flex items-center justify-between gap-3.5 rounded-2xl bg-paper-raised p-4 shadow-card transition-colors hover:bg-paper-sunk/60 active:scale-[0.99]"
			>
				<div class="flex items-center gap-3.5">
					<div
						class="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-sunk text-ink-soft"
					>
						<Search size={19} />
					</div>
					<div>
						<h3 class="font-semibold text-ink">Daftar & Cari Kosakata</h3>
						<p class="mt-0.5 text-xs text-ink-faint">
							Lihat semua kata bahasa Arab dan cari artinya dalam bahasa Indonesia
						</p>
					</div>
				</div>
				<ChevronRight
					size={18}
					class="shrink-0 text-ink-faint transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
				/>
			</a>
		</div>
	</section>

	<!-- 4. Materi Pembelajaran -->
	<section class="mt-6" aria-labelledby="topics-heading">
		<div class="mb-2.5 flex items-center justify-between gap-4">
			<h2 id="topics-heading" class="text-xs font-semibold tracking-wide text-ink-soft uppercase">
				Materi Pembelajaran
			</h2>
		</div>

		<ol class="space-y-3">
			{#each lessons as lesson (lesson.id)}
				{@const done = progress.isLessonDone(lesson.id)}
				<li>
					<a
						id="topic-{lesson.id}"
						href={resolve('/lesson/[id]', { id: lesson.id })}
						class="group flex items-start gap-3.5 rounded-2xl bg-paper-raised p-4 shadow-card transition-colors hover:bg-paper-sunk/60 active:scale-[0.99]"
					>
						<div
							class={[
								'mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg text-sm font-bold tabular-nums transition-colors',
								done ? 'bg-good-wash text-good' : 'bg-accent-wash text-accent-ink'
							]}
						>
							{#if done}
								<Check size={18} strokeWidth={2.5} />
							{:else}
								{lesson.number}
							{/if}
						</div>

						<div class="min-w-0 flex-1">
							<div class="flex items-baseline justify-between gap-2">
								<div>
									<p class="text-xs font-semibold tracking-wide text-accent-ink uppercase">
										{lesson.label}
									</p>
									<h3 class="mt-0.5 font-semibold text-ink">{lesson.title}</h3>
								</div>
							</div>

							<p class="mt-1.5 text-sm leading-relaxed text-ink-soft">
								{lesson.summary}
							</p>

							<div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
								<span class="rounded-md bg-paper-sunk px-2.5 py-1 font-medium">
									{lesson.grammarNotes.length} kaidah
								</span>
								<span class="rounded-md bg-paper-sunk px-2.5 py-1 font-medium">
									{lesson.vocabulary.length} kosakata
								</span>
								{#if done}
									<span class="rounded-md bg-good-wash px-2.5 py-1 font-semibold text-good">
										Selesai
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
	</section>
</div>
