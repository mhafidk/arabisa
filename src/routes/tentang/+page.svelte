<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import HelpCircle from '@lucide/svelte/icons/help-circle';
	import Layers from '@lucide/svelte/icons/layers';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import StarMark from '#lib/components/StarMark.svelte';

	const faqs = [
		{
			q: 'Bagaimana urutan belajar yang disarankan di aplikasi ini?',
			a: 'Mulailah dengan membaca kaidah dan contoh percakapan pada menu Materi Pembelajaran (Pelajaran 1, 2, dan seterusnya). Setelah memahami konsepnya, gunakan menu Flashcard untuk menghafal kosakata pelajaran tersebut, lalu uji pemahaman Anda di menu Latihan Soal.'
		},
		{
			q: 'Mengapa progres Flashcard belum langsung menjadi "Dikuasai" setelah 1 kali selesai?',
			a: 'Aplikasi ini menggunakan metode pengulangan berjarak (Leitner Box). Saat Anda menjawab benar untuk pertama kali, kartu masuk ke tahap "Sedang dipelajari". Kartu baru dihitung sebagai "Dikuasai" setelah Anda berhasil menjawabnya dengan benar sebanyak 3 kali berturut-turut.'
		},
		{
			q: 'Apakah aplikasi ini membutuhkan koneksi internet?',
			a: 'Tidak. Seluruh materi pelajaran, kosakata, kartu hafalan, latihan soal, hingga font bahasa Arab sudah tersimpan di dalam aplikasi sehingga dapat digunakan 100% secara offline kapan saja.'
		},
		{
			q: 'Apakah progres belajar saya aman jika aplikasi ditutup?',
			a: 'Ya. Progres topik yang selesai, hafalan flashcard, runtutan hari belajar (streak), dan pilihan tema disimpan secara otomatis di penyimpanan internal perangkat Anda. Data hanya akan terhapus jika Anda menghapus data aplikasi atau mencopot pemasangan (uninstall) aplikasi.'
		},
		{
			q: 'Apa rujukan materi bahasa Arab yang digunakan?',
			a: 'Seluruh materi disusun dan diadaptasi ke dalam bahasa Indonesia dari buku pembelajaran bahasa Arab "Madinah Arabic Book" (Durūs al-Lughah al-ʿArabiyyah li-Ghayr an-Nāṭiqīna bihā) karya Dr. V. Abdur Rahim, mantan Profesor Bahasa Arab di Universitas Islam Madinah dan Direktur Pusat Penerjemahan di Kompleks Percetakan Al-Qur\'an Raja Fahd.'
		},
		{
			q: 'Ke mana saya dapat menyampaikan masukan, kritik, atau pertanyaan?',
			a: 'Jika ada masukan, kritik, ataupun pertanyaan, silakan hubungi ',
			email: 'mhafidk@gmail.com'
		}
	];

	let openIndex = $state<number | null>(0);

	function toggleFaq(idx: number) {
		openIndex = openIndex === idx ? null : idx;
	}
</script>

<svelte:head>
	<title>Tentang & FAQ · Arabisa</title>
	<meta
		name="description"
		content="Informasi tentang aplikasi Arabisa dan pertanyaan yang sering diajukan (FAQ)."
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
			<h1 class="truncate text-lg leading-tight font-semibold text-ink">Tentang & FAQ</h1>
			<p class="text-xs text-ink-faint">Informasi aplikasi dan panduan belajar</p>
		</div>
	</header>

	<!-- About Card -->
	<section class="mt-5 rounded-2xl bg-paper-raised p-5 shadow-card" aria-labelledby="about-heading">
		<div class="flex items-center gap-3">
			<div class="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-wash text-accent">
				<StarMark />
			</div>
			<div>
				<h2 id="about-heading" class="text-base font-semibold text-ink">Arabisa</h2>
				<p class="text-xs text-ink-faint">Aplikasi belajar kaidah & kosakata bahasa Arab</p>
			</div>
		</div>

		<p class="mt-3.5 text-sm leading-relaxed text-ink-soft">
			Aplikasi ini dirancang agar siapa saja dapat mempelajari dasar-dasar bahasa Arab secara
			bertahap, ringkas, dan mudah dipahami dalam bahasa Indonesia—langsung dari ponsel tanpa
			gangguan iklan maupun keharusan membuat akun.
		</p>

		<p class="mt-2.5 text-sm leading-relaxed text-ink-soft">
			Seluruh materi pembelajaran di aplikasi ini disusun berdasarkan buku <strong
				class="font-semibold text-ink">Madinah Arabic Book</strong
			>
			karya <strong class="font-semibold text-ink">Dr. V. Abdur Rahim</strong>, mantan Profesor
			Bahasa Arab di Universitas Islam Madinah dan Direktur Pusat Penerjemahan di Kompleks
			Percetakan Al-Qur'an Raja Fahd (<em>King Fahd Qur'an Printing Complex</em>).
		</p>

		<div class="mt-4 grid grid-cols-1 gap-2.5 border-t border-line pt-4 sm:grid-cols-3">
			<div class="flex items-start gap-2.5 rounded-xl bg-paper-sunk/70 p-3">
				<BookOpen size={17} class="mt-0.5 shrink-0 text-accent-ink" />
				<div>
					<p class="text-xs font-semibold text-ink">Materi Bertahap</p>
					<p class="mt-0.5 text-[11px] leading-snug text-ink-faint">
						Berdasarkan kurikulum Madina Arabic Reader
					</p>
				</div>
			</div>

			<div class="flex items-start gap-2.5 rounded-xl bg-paper-sunk/70 p-3">
				<Layers size={17} class="mt-0.5 shrink-0 text-accent-ink" />
				<div>
					<p class="text-xs font-semibold text-ink">Metode Leitner</p>
					<p class="mt-0.5 text-[11px] leading-snug text-ink-faint">
						Kartu hafalan pintar yang fokus pada kata sulit
					</p>
				</div>
			</div>

			<div class="flex items-start gap-2.5 rounded-xl bg-paper-sunk/70 p-3">
				<ShieldCheck size={17} class="mt-0.5 shrink-0 text-good" />
				<div>
					<p class="text-xs font-semibold text-ink">100% Offline</p>
					<p class="mt-0.5 text-[11px] leading-snug text-ink-faint">
						Tanpa internet, semua progres tersimpan di perangkat
					</p>
				</div>
			</div>
		</div>
		<div class="mt-4 border-t border-line pt-3.5">
			<a
				href={resolve('/privasi')}
				class="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-ink hover:underline"
			>
				<ShieldCheck size={15} />
				<span>Baca Kebijakan Privasi (Privacy Policy)</span>
			</a>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="mt-7" aria-labelledby="faq-heading">
		<div class="mb-3 flex items-center gap-2">
			<HelpCircle size={18} class="text-accent-ink" />
			<h2 id="faq-heading" class="text-sm font-semibold tracking-wide text-ink-soft uppercase">
				Pertanyaan Umum (FAQ)
			</h2>
		</div>

		<ul class="space-y-2.5">
			{#each faqs as item, idx (item.q)}
				{@const isOpen = openIndex === idx}
				<li class="overflow-hidden rounded-2xl bg-paper-raised shadow-card">
					<button
						type="button"
						aria-expanded={isOpen}
						onclick={() => toggleFaq(idx)}
						class="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-paper-sunk/50 active:scale-[0.99]"
					>
						<span class="text-sm font-semibold text-ink">{item.q}</span>
						<ChevronDown
							size={18}
							class={[
								'shrink-0 text-ink-faint transition-transform duration-200',
								isOpen && 'rotate-180 text-accent-ink'
							]}
						/>
					</button>

					{#if isOpen}
						<div class="border-t border-line px-4 py-3.5 text-sm leading-relaxed text-ink-soft">
							{item.a}{#if item.email}<a
									href="mailto:{item.email}"
									class="font-semibold text-accent-ink underline underline-offset-2">{item.email}</a
								>.{/if}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
</div>
