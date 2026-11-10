<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Check from '@lucide/svelte/icons/check';
	import RotateCcw from '@lucide/svelte/icons/rotate-ccw';
	import X from '@lucide/svelte/icons/x';
	import { exercises, type QuizQuestion } from '#lib/data/exercises.ts';
	import { progress } from '#lib/progress.svelte.ts';

	type FilterTopic = 'all' | 'lesson-1' | 'lesson-2' | 'lesson-3';

	const filters: { value: FilterTopic; label: string }[] = [
		{ value: 'all', label: 'Semua Topik' },
		{ value: 'lesson-1', label: 'Pelajaran 1' },
		{ value: 'lesson-2', label: 'Pelajaran 2' },
		{ value: 'lesson-3', label: 'Pelajaran 3' }
	];

	let topicFilter = $state<FilterTopic>('all');
	let currentIndex = $state(0);
	let selectedOption = $state<number | null>(null);
	let score = $state(0);
	let finished = $state(false);

	const filteredQuestions = $derived<QuizQuestion[]>(
		topicFilter === 'all' ? exercises : exercises.filter((q) => q.lessonId === topicFilter)
	);

	const currentQuestion = $derived(filteredQuestions[currentIndex]);
	const total = $derived(filteredQuestions.length);
	const answered = $derived(selectedOption !== null);
	const accuracy = $derived(total ? Math.round((score / total) * 100) : 0);

	function resetQuiz(newFilter: FilterTopic = topicFilter) {
		topicFilter = newFilter;
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
	<title>Latihan Soal · Belajar Bahasa Arab</title>
	<meta
		name="description"
		content="Uji pemahaman kaidah dan kosakata bahasa Arab dari Pelajaran 1 dan Pelajaran 2."
	/>
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-5 pt-5 pb-8">
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

	<!-- Topic Filter Pills -->
	<div
		class="mt-4 flex gap-1.5 overflow-x-auto pb-1"
		role="tablist"
		aria-label="Pilih topik latihan"
	>
		{#each filters as f (f.value)}
			<button
				type="button"
				role="tab"
				aria-selected={topicFilter === f.value}
				onclick={() => resetQuiz(f.value)}
				class={[
					'shrink-0 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors',
					topicFilter === f.value
						? 'bg-ink text-paper'
						: 'bg-paper-sunk text-ink-soft hover:text-ink'
				]}
			>
				{f.label}
			</button>
		{/each}
	</div>

	<!-- Progress Bar -->
	<div class="mt-4 h-1.5 overflow-hidden rounded-full bg-paper-sunk" aria-hidden="true">
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
