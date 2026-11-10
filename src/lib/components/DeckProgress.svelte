<script lang="ts">
	let { mastered, learning, total }: { mastered: number; learning: number; total: number } =
		$props();

	const pct = (n: number) => (total ? (n / total) * 100 : 0);
</script>

<div
	class="flex h-1.5 w-full overflow-hidden rounded-full bg-paper-sunk"
	role="progressbar"
	aria-label="Progres dek"
	aria-valuemin={0}
	aria-valuemax={total}
	aria-valuenow={mastered}
	aria-valuetext="{mastered} dari {total} dikuasai, {learning} sedang dipelajari"
>
	<span
		class="h-full bg-good transition-[width] duration-700 ease-out-expo"
		style:width="{pct(mastered)}%"
	></span>
	<span
		class="h-full bg-accent transition-[width] duration-700 ease-out-expo"
		style:width="{pct(learning)}%"
	></span>
</div>
