<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
</script>

<svelte:head>
	<title>Kebijakan Privasi · Arabisa</title>
	<meta
		name="description"
		content="Kebijakan Privasi aplikasi Arabisa — 100% offline dan tidak mengumpulkan data pribadi pengguna."
	/>
</svelte:head>

<div class="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pt-5 pb-24 sm:px-5">
	<header class="flex items-center gap-3">
		<a
			id="back-to-tentang"
			href={resolve('/tentang')}
			class="-ml-2 grid size-10 shrink-0 place-items-center rounded-lg text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink"
			aria-label="Kembali ke halaman Tentang"
		>
			<ArrowLeft size={22} />
		</a>
		<div class="min-w-0 flex-1">
			<h1 class="truncate text-lg leading-tight font-semibold text-ink">Kebijakan Privasi</h1>
			<p class="text-xs text-ink-faint">Terakhir diperbarui: 11 November 2026</p>
		</div>
	</header>

	<article
		class="mt-5 space-y-5 rounded-2xl bg-paper-raised p-5 text-sm leading-relaxed text-ink-soft shadow-card"
	>
		<div class="flex items-start gap-3 rounded-xl bg-good-wash p-3.5 text-ink">
			<ShieldCheck size={20} class="mt-0.5 shrink-0 text-good" />
			<p class="text-xs leading-relaxed">
				<strong class="font-semibold">Ringkasan:</strong> Arabisa berjalan 100% secara offline. Kami tidak
				mengumpulkan, menyimpan di server, melacak, atau membagikan data pribadi apa pun dari perangkat
				Anda.
			</p>
		</div>

		<section class="space-y-2">
			<h2 class="text-base font-semibold text-ink">1. Pengumpulan Data Pribadi</h2>
			<p>
				Aplikasi <strong class="font-semibold text-ink">Arabisa</strong> (<code
					>com.mhk.arabisa</code
				>) tidak mengumpulkan informasi pribadi apa pun seperti nama, alamat email, nomor telepon,
				lokasi geografis, maupun pengenal perangkat. Aplikasi ini dapat digunakan sepenuhnya tanpa
				pendaftaran akun.
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="text-base font-semibold text-ink">2. Penyimpanan Data Lokal di Perangkat</h2>
			<p>
				Seluruh catatan progres belajar Anda—termasuk topik pelajaran yang telah diselesaikan,
				progres hafalan <em>flashcard</em> (Leitner box), runtutan hari belajar (<em>streak</em>),
				dan preferensi tema tampilan (terang/gelap)—disimpan semata-mata secara lokal di dalam
				penyimpanan internal perangkat Anda (<code>localStorage</code>).
			</p>
			<p>
				Data tersebut tidak pernah dikirim ke server mana pun dan dapat Anda hapus kapan saja dengan
				menghapus data aplikasi melalui pengaturan perangkat atau mencopot pemasangan (<em
					>uninstall</em
				>) aplikasi.
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="text-base font-semibold text-ink">3. Layanan Pihak Ketiga, Analitik & Iklan</h2>
			<p>
				Arabisa tidak menggunakan layanan analitik pihak ketiga, perangkat pelacak (<em>tracker</em
				>), maupun jaringan periklanan. Seluruh materi pelajaran, kosakata, latihan soal, dan huruf
				bahasa Arab telah dikemas langsung di dalam aplikasi.
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="text-base font-semibold text-ink">4. Privasi Anak-Anak</h2>
			<p>
				Karena Arabisa tidak mengumpulkan data pribadi apa pun dari penggunanya, aplikasi ini aman
				digunakan oleh pelajar dari berbagai kalangan usia tanpa risiko pengumpulan data anak di
				bawah umur.
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="text-base font-semibold text-ink">5. Perubahan Kebijakan Privasi</h2>
			<p>
				Apabila di masa mendatang terdapat pembaruan pada kebijakan privasi ini, perubahan tersebut
				akan dicantumkan pada halaman ini dan diperbarui melalui rilis pembaruan aplikasi.
			</p>
		</section>

		<section class="space-y-2 border-t border-line pt-4">
			<h2 class="text-base font-semibold text-ink">6. Kontak</h2>
			<p>
				Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi pengembang
				melalui email di
				<a
					href="mailto:mhafidk@gmail.com"
					class="font-semibold text-accent-ink underline underline-offset-2">mhafidk@gmail.com</a
				>.
			</p>
		</section>
	</article>
</div>
