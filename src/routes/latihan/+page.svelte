<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Check from '@lucide/svelte/icons/check';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import RotateCcw from '@lucide/svelte/icons/rotate-ccw';
	import X from '@lucide/svelte/icons/x';
	import { exercises, type QuizQuestion } from '#lib/data/exercises.ts';
	import { lessons } from '#lib/data/lessons.ts';
	import { progress } from '#lib/progress.svelte.ts';

	type FilterTopic = 'all' | QuizQuestion['lessonId'];

	const filters: { value: FilterTopic; label: string; subtitle?: string; count: number }[] = [
		{
			value: 'all',
			label: 'Semua Topik',
			subtitle: 'Gabungan seluruh pelajaran',
			count: exercises.length
		},
		...lessons.map((l) => ({
			value: l.id as FilterTopic,
			label: l.label,
			subtitle: l.title,
			count: exercises.filter((q) => q.lessonId === l.id).length
		}))
	];

	let topicFilter = $state<FilterTopic>('all');
	let dropdownOpen = $state(false);
	let currentIndex = $state(0);
	let selectedOption = $state<number | null>(null);
	let score = $state(0);
	let finished = $state(false);

	const activeFilter = $derived(filters.find((f) => f.value === topicFilter) ?? filters[0]);

	const filteredQuestions = $derived<QuizQuestion[]>(
		topicFilter === 'all' ? exercises : exercises.filter((q) => q.lessonId === topicFilter)
	);

	const currentQuestion = $derived(filteredQuestions[currentIndex]);
	const total = $derived(filteredQuestions.length);
	const answered = $derived(selectedOption !== null);
	const accuracy = $derived(total ? Math.round((score / total) * 100) : 0);

	function resetQuiz(newFilter: FilterTopic = topicFilter) {
		topicFilter = newFilter;
		dropdownOpen = false;
		currentIndex = 0;
		selectedOption = null;
		score = 0;
		finished = false;
	}

	function chooseOption(idx: number) {
		if (selectedOption !== null || !currentQuestion) return;
		selectedOption = idx;
		if (idx === currentQuestion.correctIndex) {
			score++;
		}
		progress.recordStudy();
	}

	function nextQuestion() {
		if (currentIndex + 1 < total) {
			currentIndex++;
			selectedOption = null;
		} else {
			finished = true;
		}
	}
</script>

<svelte:head>
	<title>Latihan Soal · Arabisa</title>
	<meta
		name="description"
		content="Uji pemahaman kaidah dan kosakata bahasa Arab dari Pelajaran 1 dan Pelajaran 2."
	/>
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pt-5 pb-24 sm:px-5">
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
			<h1 class="truncate text-lg leading-tight font-semibold text-ink">Latihan Soal</h1>
			<p class="text-xs text-ink-faint tabular-nums">
				{#if finished}Selesai{:else}Soal {currentIndex + 1} dari {total}{/if}
			</p>
		</div>
	</header>

	<!-- Topic Dropdown Selector -->
	<div class="relative mt-4">
		<button
			id="topic-dropdown-button"
			type="button"
			aria-haspopup="listbox"
			aria-expanded={dropdownOpen}
			onclick={() => (dropdownOpen = !dropdownOpen)}
			class="flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-paper-raised px-4 py-3 text-left shadow-card transition-colors hover:bg-paper-sunk/60"
		>
			<div class="min-w-0">
				<p class="text-[11px] font-semibold tracking-wide text-ink-faint uppercase">
					Pilih Materi Latihan
				</p>
				<p class="mt-0.5 truncate text-sm font-semibold text-ink">
					{activeFilter.label}{activeFilter.subtitle && activeFilter.value !== 'all'
						? ` — ${activeFilter.subtitle}`
						: ''}
				</p>
			</div>
			<div class="flex shrink-0 items-center gap-2">
				<span
					class="rounded-md bg-paper-sunk px-2 py-0.5 text-xs font-medium text-ink-soft tabular-nums"
				>
					{activeFilter.count} soal
				</span>
				<ChevronDown
					size={18}
					class={['text-ink-soft transition-transform duration-200', dropdownOpen && 'rotate-180']}
				/>
			</div>
		</button>

		{#if dropdownOpen}
			<button
				type="button"
				tabindex="-1"
				aria-label="Tutup menu"
				onclick={() => (dropdownOpen = false)}
				class="fixed inset-0 z-10 cursor-default"
			></button>

			<ul
				role="listbox"
				aria-label="Pilih topik latihan"
				class="absolute right-0 left-0 z-20 mt-1.5 divide-y divide-line overflow-hidden rounded-xl border border-line bg-paper-raised shadow-lift"
			>
				{#each filters as f (f.value)}
					{@const selected = topicFilter === f.value}
					<li>
						<button
							type="button"
							role="option"
							aria-selected={selected}
							onclick={() => resetQuiz(f.value)}
							class={[
								'flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors',
								selected ? 'bg-accent-wash/60' : 'hover:bg-paper-sunk/60'
							]}
						>
							<div class="min-w-0">
								<p class={['text-sm font-semibold', selected ? 'text-accent-ink' : 'text-ink']}>
									{f.label}
								</p>
								{#if f.subtitle}
									<p class="truncate text-xs text-ink-faint">{f.subtitle}</p>
								{/if}
							</div>
							<div class="flex shrink-0 items-center gap-2">
								<span class="text-xs font-medium text-ink-faint tabular-nums">
									{f.count} soal
								</span>
								{#if selected}
									<Check size={16} strokeWidth={2.5} class="text-accent-ink" />
								{/if}
							</div>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<!-- Progress Bar -->
	<div
		class="mt-4 h-1.5 overflow-hidden rounded-full bg-paper-sunk"
		role="progressbar"
		aria-label="Progres latihan soal"
		aria-valuemin={0}
		aria-valuemax={total}
		aria-valuenow={finished ? total : currentIndex + (answered ? 1 : 0)}
	>
		<div
			class="h-full rounded-full bg-accent transition-[width] duration-500 ease-out-expo"
			style:width="{((finished ? total : currentIndex + (answered ? 1 : 0)) / total) * 100}%"
		></div>
	</div>

	{#if finished}
		<section
			class="flex flex-1 flex-col items-center justify-center py-8 text-center"
			aria-live="polite"
		>
			<p lang="ar" dir="rtl" class="text-6xl font-bold text-accent-ink">مُمْتَازٌ</p>
			<h2 class="mt-3 text-3xl font-semibold tracking-tight text-ink">Latihan Selesai!</h2>
			<p class="mt-2 text-ink-soft">
				Kamu menjawab benar <strong class="font-semibold text-ink">{score} dari {total}</strong>
				soal (<strong class="font-semibold text-ink">{accuracy}%</strong>).
			</p>

			<div class="mt-8 flex w-full max-w-xs flex-col gap-3">
				<button
					type="button"
					onclick={() => resetQuiz()}
					class="flex h-12 items-center justify-center gap-2 rounded-xl bg-ink font-semibold text-paper transition-transform active:scale-[0.98]"
				>
					<RotateCcw size={18} /> Coba Lagi
				</button>
				<a
					href={resolve('/')}
					class="flex h-12 items-center justify-center rounded-xl font-semibold text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink"
				>
					Kembali ke Beranda
				</a>
			</div>
		</section>
	{:else if currentQuestion}
		<section class="mt-5 flex flex-1 flex-col justify-between gap-6">
			<div>
				<div class="rounded-2xl bg-paper-raised p-6 shadow-card">
					<span
						class="inline-block rounded-md bg-accent-wash px-2.5 py-0.5 text-xs font-semibold text-accent-ink"
					>
						{currentQuestion.lessonLabel}
					</span>
					<p class="mt-3 text-base leading-snug font-semibold text-ink">
						{currentQuestion.prompt}
					</p>

					{#if currentQuestion.arabicPrompt}
						<div class="mt-4 rounded-xl bg-paper-sunk px-4 py-4 text-center">
							<p lang="ar" dir="rtl" class="text-3xl font-bold text-ink">
								{currentQuestion.arabicPrompt}
							</p>
						</div>
					{/if}
				</div>

				<div class="mt-4 space-y-2.5">
					{#each currentQuestion.options as opt, idx (idx)}
						{@const isSelected = selectedOption === idx}
						{@const isCorrect = idx === currentQuestion.correctIndex}
						<button
							type="button"
							disabled={answered}
							onclick={() => chooseOption(idx)}
							class={[
								'flex min-h-14 w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-all active:scale-[0.99]',
								!answered && 'bg-paper-raised text-ink shadow-card hover:bg-paper-sunk/70',
								answered && isCorrect && 'bg-good-wash font-semibold text-good ring-2 ring-good',
								answered &&
									isSelected &&
									!isCorrect &&
									'bg-again-wash font-semibold text-again ring-2 ring-again',
								answered &&
									!isSelected &&
									!isCorrect &&
									'bg-paper-raised/60 text-ink-faint opacity-70'
							]}
						>
							{#if opt.isArabic}
								<span lang="ar" dir="rtl" class="w-full text-right text-2xl font-medium">
									{opt.text}
								</span>
							{:else}
								<span class="text-sm font-medium">{opt.text}</span>
							{/if}

							{#if answered && isCorrect}
								<Check size={20} strokeWidth={2.5} class="shrink-0 text-good" />
							{:else if answered && isSelected && !isCorrect}
								<X size={20} strokeWidth={2.5} class="shrink-0 text-again" />
							{/if}
						</button>
					{/each}
				</div>

				{#if answered}
					<div class="mt-4 rounded-2xl bg-paper-sunk p-4 text-sm text-ink-soft">
						<p class="font-semibold text-ink">
							{selectedOption === currentQuestion.correctIndex ? 'Benar!' : 'Kurang tepat.'}
						</p>
						<p class="mt-1 leading-relaxed">{currentQuestion.explanation}</p>
					</div>
				{/if}
			</div>

			{#if answered}
				<button
					type="button"
					onclick={nextQuestion}
					class="flex h-13 w-full items-center justify-center rounded-xl bg-ink font-semibold text-paper transition-transform active:scale-[0.98]"
				>
					{currentIndex + 1 < total ? 'Soal Berikutnya' : 'Lihat Hasil'}
				</button>
			{/if}
		</section>
	{/if}
</div>
