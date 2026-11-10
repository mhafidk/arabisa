<script lang="ts">
	// Eight-pointed star (khatam) — a classic motif in Islamic geometric art.
	let { size = 28, class: className = '' }: { size?: number; class?: string } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 32 32"
	class={className}
	aria-hidden="true"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linejoin="round"
>
	<rect x="7" y="7" width="18" height="18" rx="1.5" />
	<rect x="7" y="7" width="18" height="18" rx="1.5" transform="rotate(45 16 16)" />
	<circle cx="16" cy="16" r="3" fill="currentColor" stroke="none" />
</svg>
