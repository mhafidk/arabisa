<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import Check from '@lucide/svelte/icons/check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Layers from '@lucide/svelte/icons/layers';
	import Search from '@lucide/svelte/icons/search';
	import X from '@lucide/svelte/icons/x';
	import { decks } from '#lib/data/decks.ts';
	import { lessons } from '#lib/data/lessons.ts';
	import { progress } from '#lib/progress.svelte.ts';

	const completedCount = $derived(
		lessons.filter((lesson) => progress.isLessonDone(lesson.id)).length
	);
	const progressPct = $derived(
		lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0
	);
	const activeLessonId = $derived(
		lessons.find((l) => !progress.isLessonDone(l.id))?.id ?? null
	);

	let searchQuery = $state('');
	let filterStatus = $state<'all' | 'uncompleted' | 'completed'>('all');

	function onSearchInput(value: string) {
		searchQuery = value;
	}

	function setFilter(status: 'all' | 'uncompleted' | 'completed') {
		filterStatus = status;
	}

	const filteredLessons = $derived.by(() => {
		return lessons.filter((l) => {
			if (filterStatus === 'uncompleted' && progress.isLessonDone(l.id)) return false;
			if (filterStatus === 'completed' && !progress.isLessonDone(l.id)) return false;

			const q = searchQuery.toLowerCase().trim();
			if (!q) return true;

			const matchTitle = l.title.toLowerCase().includes(q);
			const matchLabel = l.label.toLowerCase().includes(q);
			const matchSummary = l.summary.toLowerCase().includes(q);
			const matchGrammar = l.grammarNotes.some((g) => g.title.toLowerCase().includes(q));
			const matchVocab = l.vocabulary.some(
				(v) => v.ar.includes(q) || v.tr.toLowerCase().includes(q) || v.id.toLowerCase().includes(q)
			);

			return matchTitle || matchLabel || matchSummary || matchGrammar || matchVocab;
		});
	});
</script>

<svelte:head>
	<title>Materi Pembelajaran · Arabisa</title>
	<meta
		name="description"
		content="Daftar lengkap kurikulum materi pembelajaran bahasa Arab dasar Madinah Arabic Book 1 di Arabisa."
	/>
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pt-5 pb-24 sm:px-5">
	<!-- Header -->
	<header class="flex items-center gap-3">
		<a
			id="back-to-home"
			href={resolve('/')}
			class="-ml-2 grid size-11 shrink-0 place-items-center rounded-xl text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink active:scale-95"
			aria-label="Kembali ke beranda"
		>
			<ArrowLeft size={22} />
		</a>
		<div class="min-w-0 flex-1">
			<h1 class="truncate text-lg leading-tight font-semibold text-ink sm:text-xl text-balance">
				Materi Pembelajaran
			</h1>
			<p class="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-ink-soft">
				<span>Madina Arabic Reader 1</span>
				<span class="text-ink-faint" aria-hidden="true">·</span>
				<span lang="ar" dir="rtl" class="font-arabic text-sm font-medium text-ink-soft">
					دُرُوسُ اللُّغَةِ الْعَرَبِيَّةِ
				</span>
				<span class="text-ink-faint" aria-hidden="true">·</span>
				<span class="tabular-nums">{lessons.length} Pelajaran</span>
			</p>
		</div>
	</header>

	<!-- Progress Card -->
	<section class="mt-4 rounded-2xl bg-paper-raised p-4 shadow-card">
		<div class="flex items-center justify-between text-xs">
			<span class="font-medium text-ink-soft">Progres Belajar</span>
			<span class="font-semibold text-ink tabular-nums">{completedCount} dari {lessons.length} selesai ({progressPct}%)</span>
		</div>
		<div
			class="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-paper-sunk"
			role="progressbar"
			aria-valuenow={progressPct}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuetext="{completedCount} dari {lessons.length} materi selesai ({progressPct}%)"
			aria-label="Progres kurikulum materi"
		>
			<div
				class="h-full bg-good transition-all duration-300"
				style="width: {progressPct}%"
			></div>
		</div>
	</section>

	<!-- Search Input (Same as Kosakata page, hardened touch targets) -->
	<div class="relative mt-5">
		<Search
			size={18}
			class="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-ink-soft"
		/>
		<input
			id="lesson-search"
			type="search"
			value={searchQuery}
			oninput={(e) => onSearchInput(e.currentTarget.value)}
			placeholder="Cari materi, kaidah, atau kosakata..."
			aria-label="Cari materi pembelajaran"
			autocomplete="off"
			autocorrect="off"
			spellcheck="false"
			class="h-11 w-full rounded-xl border border-line bg-paper-raised pr-11 pl-10 text-sm text-ink placeholder:text-ink-soft transition-colors focus:border-accent focus:outline-none"
		/>
		{#if searchQuery}
			<button
				type="button"
				onclick={() => onSearchInput('')}
				aria-label="Hapus pencarian"
				class="absolute top-1/2 right-1 grid size-11 -translate-y-1/2 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink active:scale-[0.92]"
			>
				<X size={16} />
			</button>
		{/if}
	</div>

	<!-- Status Filter Buttons (Min 44px touch targets, valid ARIA semantics) -->
	<div class="mt-3 flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter status materi">
		<button
			type="button"
			aria-pressed={filterStatus === 'all'}
			onclick={() => setFilter('all')}
			class={[
				'inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-xl px-5 py-2 text-xs font-semibold transition-all active:scale-[0.97]',
				filterStatus === 'all'
					? 'bg-ink text-paper'
					: 'bg-paper-raised border border-line text-ink-soft hover:bg-paper-sunk hover:text-ink'
			]}
		>
			Semua ({lessons.length})
		</button>
		<button
			type="button"
			aria-pressed={filterStatus === 'uncompleted'}
			onclick={() => setFilter('uncompleted')}
			class={[
				'inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-xl px-5 py-2 text-xs font-semibold transition-all active:scale-[0.97]',
				filterStatus === 'uncompleted'
					? 'bg-ink text-paper'
					: 'bg-paper-raised border border-line text-ink-soft hover:bg-paper-sunk hover:text-ink'
			]}
		>
			Belum Selesai ({lessons.length - completedCount})
		</button>
		<button
			type="button"
			aria-pressed={filterStatus === 'completed'}
			onclick={() => setFilter('completed')}
			class={[
				'inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-xl px-5 py-2 text-xs font-semibold transition-all active:scale-[0.97]',
				filterStatus === 'completed'
					? 'bg-ink text-paper'
					: 'bg-paper-raised border border-line text-ink-soft hover:bg-paper-sunk hover:text-ink'
			]}
		>
			Selesai ({completedCount})
		</button>
	</div>

	<!-- Lessons List -->
	<section class="mt-4" aria-label="Daftar materi">
		{#if filteredLessons.length === 0}
			<div class="rounded-2xl bg-paper-raised p-8 text-center shadow-card">
				<Search size={28} class="mx-auto mb-2 text-ink-faint" />
				<p class="text-sm font-semibold text-ink text-balance">Tidak ada materi yang cocok</p>
				<p class="mt-1 text-xs text-ink-soft text-pretty">
					Coba kata kunci pencarian lain atau pilih status filter yang berbeda.
				</p>
				<button
					type="button"
					onclick={() => {
						searchQuery = '';
						setFilter('all');
					}}
					class="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-paper transition-all hover:bg-ink/90 active:scale-[0.97]"
				>
					Tampilkan Semua Materi
				</button>
			</div>
		{:else}
			<div class="mb-2.5 flex items-center justify-between px-1 text-xs text-ink-soft">
				<span class="font-medium">
					{#if searchQuery || filterStatus !== 'all'}
						Menampilkan <strong class="text-ink">{filteredLessons.length}</strong> dari {lessons.length} materi
					{:else}
						Semua Materi ({lessons.length} Pelajaran)
					{/if}
				</span>
			</div>

			<ol class="space-y-3">
				{#each filteredLessons as lesson (lesson.id)}
					{@const done = progress.isLessonDone(lesson.id)}
					{@const isActive = lesson.id === activeLessonId}
					{@const lessonDeck = decks.find((d) => d.id === lesson.id)}
					{@const deckStats = lessonDeck ? progress.deckStats(lessonDeck) : null}
					<li>
						<a
							id="topic-{lesson.id}"
							href={resolve('/lesson/[id]', { id: lesson.id })}
							class={[
								'group flex items-start gap-3.5 rounded-2xl bg-paper-raised p-4 shadow-card transition-all hover:bg-paper-sunk/60 active:scale-[0.99]',
								isActive ? 'ring-1 ring-accent/35' : ''
							]}
						>
							<div
								class={[
									'relative mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg text-sm font-bold tabular-nums transition-colors',
									done
										? 'bg-good-wash text-good'
										: isActive
											? 'bg-accent-wash text-accent-ink font-extrabold ring-1 ring-accent/40'
											: 'bg-paper-sunk text-ink-soft'
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
									<p class="text-[11px] font-semibold tracking-wider text-ink-soft uppercase">
										{lesson.label}
									</p>
									<h2 class="mt-0.5 text-base font-semibold leading-snug text-ink text-balance">
										{lesson.title}
									</h2>
								</div>

								<!-- Core Concept Chip -->
								{#if lesson.coreConcept}
									<div class="mt-2.5 flex items-center">
										<span
											class="inline-flex items-center gap-1.5 rounded-md bg-paper-sunk px-2.5 py-1 text-xs text-ink-soft"
										>
											<strong
												lang="ar"
												dir="rtl"
												class="font-arabic text-sm font-bold leading-normal text-ink sm:text-base"
											>
												{lesson.coreConcept.highlightAr}
											</strong>
											<span>·</span>
											<span>{lesson.coreConcept.highlightId}</span>
										</span>
									</div>
								{/if}

								<p class="mt-2 text-sm leading-relaxed text-ink-soft text-pretty">
									{lesson.summary}
								</p>

								<div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
									{#if isActive}
										<span
											class="inline-flex items-center gap-1 rounded-md bg-accent-wash px-2.5 py-1 font-semibold text-accent-ink"
										>
											Lanjutkan Belajar
										</span>
									{/if}
									{#if done}
										<span
											class="inline-flex items-center gap-1 rounded-md bg-good-wash px-2.5 py-1 font-semibold text-good"
										>
											<Check size={12} strokeWidth={2.5} /> Selesai
										</span>
									{/if}
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
													? 'bg-good-wash text-good'
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
								</div>
							</div>

							<ChevronRight
								size={20}
								class="self-center shrink-0 text-ink-faint transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
							/>
						</a>
					</li>
				{/each}
			</ol>
		{/if}
	</section>
</div>
