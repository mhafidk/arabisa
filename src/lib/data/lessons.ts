export type VocabCategory =
	| 'Benda'
	| 'Orang'
	| 'Hewan'
	| 'Makanan'
	| 'Partikel'
	| 'Kata Ganti'
	| 'Kata Hubung'
	| 'Kata Sifat'
	| 'Kata Kerja'
	| 'Bagian Tubuh';

export interface VocabItem {
	ar: string;
	tr: string;
	id: string;
	category: VocabCategory;
}

export interface GrammarPoint {
	title: string;
	body: string;
	examples?: { ar: string; tr?: string; id: string }[];
}

export interface ExampleLine {
	speaker?: 'Q' | 'A';
	ar: string;
	tr: string;
	id: string;
}

export interface ExampleGroup {
	title: string;
	subtitleAr?: string;
	items: ExampleLine[];
}

export interface Lesson {
	id: string;
	number: number;
	label: string;
	titleAr: string;
	title: string;
	summary: string;
	coreConcept: {
		heading: string;
		highlightAr: string;
		highlightTr: string;
		highlightId: string;
		description: string;
	};
	grammarNotes: GrammarPoint[];
	exampleGroups: ExampleGroup[];
	vocabulary: VocabItem[];
	vocabNote?: string;
}

export const lessons: Lesson[] = [
	{
		id: 'lesson-1',
		number: 1,
		label: 'Pelajaran 1',
		titleAr: 'الدَّرْسُ الأَوَّلُ',
		title: 'Kata Tunjuk "Ini" (هَذَا)',
		summary:
			'Mengenal kata tunjuk tunggal mudzakkar (هَذَا) untuk menunjuk benda dan orang di dekat kita, serta kalimat tanya مَا, مَنْ, dan أَ.',
		coreConcept: {
			heading: 'Kata Tunjuk "Ini" (هَذَا)',
			highlightAr: 'هَذَا',
			highlightTr: 'hādhā',
			highlightId: 'ini (tunggal mudzakkar)',
			description:
				'Pelajaran ini memperkenalkan kata tunjuk (isim isyarah) tunggal mudzakkar هَذَا (hādhā) yang berarti "ini". Kata ini digunakan untuk menunjuk benda, hewan, atau orang (laki-laki) yang berada di dekat kita.'
		},
		grammarNotes: [
			{
				title: 'Cara Membaca هَذَا',
				body: 'Kata هَذَا dibaca hādhā (dengan bunyi "ā" panjang setelah huruf hā), meskipun dalam tulisannya tidak terdapat huruf alif setelah هـ.',
				examples: [{ ar: 'هَذَا بَيْتٌ', tr: 'hādhā baitun', id: 'Ini adalah sebuah rumah.' }]
			},
			{
				title: 'Tidak Ada Kata Penghubung "Adalah"',
				body: 'Dalam bahasa Arab, tidak ada kata khusus yang setara dengan kata "adalah" pada kalimat sederhana seperti ini. Kalimat "Ini adalah rumah" cukup diungkapkan dengan "Ini rumah" (هَذَا بَيْتٌ).'
			},
			{
				title: 'Kata Benda Tak Tentu & Tanwin (تَنْوِين)',
				body: 'Bahasa Arab tidak memiliki kata terpisah untuk "sebuah" atau "seekor". Bunyi akhiran "-un" pada kata benda (seperti baitun, masjidun) berfungsi sebagai penanda kata benda tak tentu (nakirah). Bunyi "-n" ini disebut tanwīn (تَنْوِين) dan ditulis dengan tanda dhammatain ( ٌ ).',
				examples: [
					{ ar: 'بَيْتٌ', tr: 'baitu-n', id: 'sebuah rumah' },
					{ ar: 'مَسْجِدٌ', tr: 'masjidu-n', id: 'sebuah masjid' }
				]
			},
			{
				title: 'Membentuk Kalimat Tanya (مَا, مَنْ, dan أَ)',
				body: 'Ada tiga pola kalimat tanya utama dalam pelajaran ini: gunakan مَا (Apa) untuk benda/hewan yang tidak berakal, مَنْ (Siapa) untuk manusia/berakal, dan partikel أَ (Apakah) di awal kalimat untuk pertanyaan Ya (نَعَمْ) atau Tidak (لَا).',
				examples: [
					{ ar: 'مَا هَذَا؟', tr: 'mā hādhā?', id: 'Apa ini? (untuk benda/hewan)' },
					{ ar: 'مَنْ هَذَا؟', tr: 'man hādhā?', id: 'Siapa ini? (untuk orang)' },
					{ ar: 'أَهَذَا بَيْتٌ؟', tr: 'a-hādhā baitun?', id: 'Apakah ini sebuah rumah?' }
				]
			}
		],
		exampleGroups: [
			{
				title: 'Pernyataan Dasar',
				subtitleAr: 'جُمَلٌ أَسَاسِيَّةٌ',
				items: [
					{ ar: 'هَذَا بَيْتٌ.', tr: 'hādhā baitun.', id: 'Ini adalah sebuah rumah.' },
					{ ar: 'هَذَا مَسْجِدٌ.', tr: 'hādhā masjidun.', id: 'Ini adalah sebuah masjid.' },
					{ ar: 'هَذَا مِفْتَاحٌ.', tr: 'hādhā miftāḥun.', id: 'Ini adalah sebuah kunci.' }
				]
			},
			{
				title: 'Bertanya "Apa ini?"',
				subtitleAr: 'مَا هَذَا؟',
				items: [
					{ speaker: 'Q', ar: 'مَا هَذَا؟', tr: 'mā hādhā?', id: 'Apa ini?' },
					{
						speaker: 'A',
						ar: 'هَذَا قَمِيصٌ.',
						tr: 'hādhā qamīṣun.',
						id: 'Ini adalah sebuah kemeja.'
					},
					{ speaker: 'Q', ar: 'مَا هَذَا؟', tr: 'mā hādhā?', id: 'Apa ini?' },
					{
						speaker: 'A',
						ar: 'هَذَا نَجْمٌ.',
						tr: 'hādhā najmun.',
						id: 'Ini adalah sebuah bintang.'
					}
				]
			},
			{
				title: 'Pertanyaan Ya / Tidak',
				subtitleAr: 'أَهَذَا...؟',
				items: [
					{
						speaker: 'Q',
						ar: 'أَهَذَا بَيْتٌ؟',
						tr: 'a-hādhā baitun?',
						id: 'Apakah ini sebuah rumah?'
					},
					{
						speaker: 'A',
						ar: 'نَعَمْ، هَذَا بَيْتٌ.',
						tr: 'naʿam, hādhā baitun.',
						id: 'Ya, ini adalah sebuah rumah.'
					},
					{
						speaker: 'Q',
						ar: 'أَهَذَا مِفْتَاحٌ؟',
						tr: 'a-hādhā miftāḥun?',
						id: 'Apakah ini sebuah kunci?'
					},
					{
						speaker: 'A',
						ar: 'لَا، هَذَا قَلَمٌ.',
						tr: 'lā, hādhā qalamun.',
						id: 'Bukan, ini adalah sebuah pena.'
					},
					{
						speaker: 'Q',
						ar: 'أَهَذَا سَرِيرٌ؟',
						tr: 'a-hādhā sarīrun?',
						id: 'Apakah ini sebuah tempat tidur?'
					},
					{
						speaker: 'A',
						ar: 'لَا، هَذَا كُرْسِيٌّ.',
						tr: 'lā, hādhā kursiyyun.',
						id: 'Bukan, ini adalah sebuah kursi.'
					}
				]
			},
			{
				title: 'Bertanya "Siapa ini?"',
				subtitleAr: 'مَنْ هَذَا؟',
				items: [
					{ speaker: 'Q', ar: 'مَنْ هَذَا؟', tr: 'man hādhā?', id: 'Siapa ini?' },
					{
						speaker: 'A',
						ar: 'هَذَا طَبِيبٌ.',
						tr: 'hādhā ṭabībun.',
						id: 'Ini adalah seorang dokter.'
					},
					{ speaker: 'Q', ar: 'مَنْ هَذَا؟', tr: 'man hādhā?', id: 'Siapa ini?' },
					{
						speaker: 'A',
						ar: 'هَذَا طَالِبٌ.',
						tr: 'hādhā ṭālibun.',
						id: 'Ini adalah seorang pelajar.'
					},
					{
						speaker: 'Q',
						ar: 'أَهَذَا وَلَدٌ؟',
						tr: 'a-hādhā waladun?',
						id: 'Apakah ini seorang anak laki-laki?'
					},
					{
						speaker: 'A',
						ar: 'لَا، هَذَا رَجُلٌ.',
						tr: 'lā, hādhā rajulun.',
						id: 'Bukan, ini adalah seorang pria dewasa.'
					}
				]
			}
		],
		vocabulary: [
			{ ar: 'هَذَا', tr: 'hādhā', id: 'ini (tunggal mudzakkar)', category: 'Kata Ganti' },
			{ ar: 'مَا', tr: 'mā', id: 'apa (untuk benda/hewan)', category: 'Partikel' },
			{ ar: 'مَنْ', tr: 'man', id: 'siapa (untuk orang)', category: 'Partikel' },
			{ ar: 'أَ', tr: 'a', id: 'apakah (kata tanya ya/tidak)', category: 'Partikel' },
			{ ar: 'بَيْتٌ', tr: 'baitu-n', id: 'rumah', category: 'Benda' },
			{ ar: 'مَسْجِدٌ', tr: 'masjidu-n', id: 'masjid', category: 'Benda' },
			{ ar: 'بَابٌ', tr: 'bābu-n', id: 'pintu', category: 'Benda' },
			{ ar: 'كِتَابٌ', tr: 'kitābu-n', id: 'buku', category: 'Benda' },
			{ ar: 'قَلَمٌ', tr: 'qalamu-n', id: 'pena', category: 'Benda' },
			{ ar: 'مِفْتَاحٌ', tr: 'miftāḥu-n', id: 'kunci', category: 'Benda' },
			{ ar: 'مَكْتَبٌ', tr: 'maktabu-n', id: 'meja tulis', category: 'Benda' },
			{ ar: 'سَرِيرٌ', tr: 'sarīru-n', id: 'tempat tidur / ranjang', category: 'Benda' },
			{ ar: 'كُرْسِيٌّ', tr: 'kursiyyu-n', id: 'kursi', category: 'Benda' },
			{ ar: 'قَمِيصٌ', tr: 'qamīṣu-n', id: 'kemeja', category: 'Benda' },
			{ ar: 'نَجْمٌ', tr: 'najmu-n', id: 'bintang', category: 'Benda' },
			{ ar: 'مِنْدِيلٌ', tr: 'mindīlu-n', id: 'saputangan', category: 'Benda' },
			{ ar: 'طَبِيبٌ', tr: 'ṭabību-n', id: 'dokter', category: 'Orang' },
			{ ar: 'وَلَدٌ', tr: 'waladu-n', id: 'anak laki-laki', category: 'Orang' },
			{ ar: 'طَالِبٌ', tr: 'ṭālibu-n', id: 'pelajar / mahasiswa', category: 'Orang' },
			{ ar: 'رَجُلٌ', tr: 'rajulu-n', id: 'pria dewasa', category: 'Orang' },
			{ ar: 'تَاجِرٌ', tr: 'tājiru-n', id: 'pedagang', category: 'Orang' },
			{ ar: 'مُدَرِّسٌ', tr: 'mudarrisu-n', id: 'guru / pengajar', category: 'Orang' },
			{ ar: 'كَلْبٌ', tr: 'kalbu-n', id: 'anjing', category: 'Hewan' },
			{ ar: 'قِطٌّ', tr: 'qiṭṭu-n', id: 'kucing', category: 'Hewan' },
			{ ar: 'حِمَارٌ', tr: 'ḥimāru-n', id: 'keledai', category: 'Hewan' },
			{ ar: 'حِصَانٌ', tr: 'ḥiṣānu-n', id: 'kuda', category: 'Hewan' },
			{ ar: 'جَمَلٌ', tr: 'jamalu-n', id: 'unta', category: 'Hewan' },
			{ ar: 'دِيكٌ', tr: 'dīku-n', id: 'ayam jantan', category: 'Hewan' },
			{ ar: 'نَعَمْ', tr: 'naʿam', id: 'ya', category: 'Partikel' },
			{ ar: 'لَا', tr: 'lā', id: 'tidak / bukan', category: 'Partikel' }
		]
	},
	{
		id: 'lesson-2',
		number: 2,
		label: 'Pelajaran 2',
		titleAr: 'الدَّرْسُ الثَّانِي',
		title: 'Kata Tunjuk "Itu" (ذَلِكَ) dan "Dan" (وَ)',
		summary:
			'Mempelajari kata tunjuk tunggal mudzakkar untuk jarak jauh (ذَلِكَ) serta kata hubung "dan" (وَ) untuk menggabungkan kalimat.',
		coreConcept: {
			heading: 'Kata Tunjuk "Itu" (ذَلِكَ) & Kata Hubung "Dan" (وَ)',
			highlightAr: 'ذَلِكَ  •  وَ',
			highlightTr: 'dhālika  •  wa',
			highlightId: 'itu  •  dan',
			description:
				'Pelajaran ini memperkenalkan kata tunjuk tunggal mudzakkar ذَلِكَ (dhālika) yang berarti "itu" untuk menunjuk benda atau orang yang berada jauh dari pembicara, serta kata hubung وَ (wa) yang berarti "dan".'
		},
		grammarNotes: [
			{
				title: 'Cara Membaca ذَلِكَ',
				body: 'Kata ذَلِكَ dibaca dhālika (dengan bunyi "ā" panjang setelah huruf dhāl), meskipun ditulis tanpa huruf alif tegak.',
				examples: [{ ar: 'ذَلِكَ نَجْمٌ', tr: 'dhālika najmun', id: 'Itu adalah sebuah bintang.' }]
			},
			{
				title: 'Penggunaan Kata Hubung وَ (wa)',
				body: 'Kata bahasa Arab untuk "dan" hanya terdiri dari satu huruf, yaitu وَ (wa). Dalam penulisan bahasa Arab, huruf وَ selalu ditulis melekat langsung di depan kata berikutnya tanpa spasi pemisah.',
				examples: [
					{
						ar: 'مَنْ هَذَا وَمَنْ ذَلِكَ؟',
						tr: 'man hādhā wa-man dhālika?',
						id: 'Siapa ini dan siapa itu?'
					}
				]
			},
			{
				title: 'Menggabungkan Kalimat (Dekat & Jauh)',
				body: 'Dengan menggabungkan هَذَا (ini), ذَلِكَ (itu), dan وَ (dan), kita dapat menyusun kalimat majemuk untuk membandingkan sesuatu yang dekat dan yang jauh.',
				examples: [
					{
						ar: 'هَذَا مَسْجِدٌ وَذَلِكَ بَيْتٌ.',
						tr: 'hādhā masjidun wa-dhālika baitun.',
						id: 'Ini adalah sebuah masjid dan itu adalah sebuah rumah.'
					}
				]
			}
		],
		exampleGroups: [
			{
				title: 'Pernyataan Dasar "Itu adalah..."',
				subtitleAr: 'مَا ذَلِكَ؟',
				items: [
					{ speaker: 'Q', ar: 'مَا ذَلِكَ؟', tr: 'mā dhālika?', id: 'Apa itu?' },
					{
						speaker: 'A',
						ar: 'ذَلِكَ نَجْمٌ.',
						tr: 'dhālika najmun.',
						id: 'Itu adalah sebuah bintang.'
					},
					{ speaker: 'Q', ar: 'مَا ذَلِكَ؟', tr: 'mā dhālika?', id: 'Apa itu?' },
					{
						speaker: 'A',
						ar: 'ذَلِكَ حَجَرٌ.',
						tr: 'dhālika ḥajarun.',
						id: 'Itu adalah sebuah batu.'
					}
				]
			},
			{
				title: 'Menggabungkan "Ini" dan "Itu"',
				subtitleAr: 'هَذَا وَذَلِكَ',
				items: [
					{
						ar: 'هَذَا مَسْجِدٌ وَذَلِكَ بَيْتٌ.',
						tr: 'hādhā masjidun wa-dhālika baitun.',
						id: 'Ini adalah sebuah masjid dan itu adalah sebuah rumah.'
					},
					{
						ar: 'هَذَا حِصَانٌ وَذَلِكَ حِمَارٌ.',
						tr: 'hādhā ḥiṣānun wa-dhālika ḥimārun.',
						id: 'Ini adalah seekor kuda dan itu adalah seekor keledai.'
					},
					{
						ar: 'هَذَا سُكَّرٌ وَذَلِكَ لَبَنٌ.',
						tr: 'hādhā sukkarun wa-dhālika labanun.',
						id: 'Ini adalah gula dan itu adalah susu.'
					}
				]
			},
			{
				title: 'Siapa Ini dan Siapa Itu?',
				subtitleAr: 'مَنْ هَذَا وَمَنْ ذَلِكَ؟',
				items: [
					{
						speaker: 'Q',
						ar: 'مَنْ هَذَا وَمَنْ ذَلِكَ؟',
						tr: 'man hādhā wa-man dhālika?',
						id: 'Siapa ini dan siapa itu?'
					},
					{
						speaker: 'A',
						ar: 'هَذَا مُدَرِّسٌ وَذَلِكَ إِمَامٌ.',
						tr: 'hādhā mudarrisun wa-dhālika imāmun.',
						id: 'Ini adalah seorang guru dan itu adalah seorang imam.'
					}
				]
			},
			{
				title: 'Pertanyaan Ya / Tidak dengan "Itu"',
				subtitleAr: 'أَذَلِكَ...؟',
				items: [
					{
						speaker: 'Q',
						ar: 'أَذَلِكَ كَلْبٌ؟',
						tr: 'a-dhālika kalbun?',
						id: 'Apakah itu seekor anjing?'
					},
					{
						speaker: 'A',
						ar: 'لَا، ذَلِكَ قِطٌّ.',
						tr: 'lā, dhālika qiṭṭun.',
						id: 'Bukan, itu adalah seekor kucing.'
					}
				]
			}
		],
		vocabulary: [
			{ ar: 'ذَلِكَ', tr: 'dhālika', id: 'itu (tunggal mudzakkar)', category: 'Kata Ganti' },
			{ ar: 'وَ', tr: 'wa', id: 'dan', category: 'Kata Hubung' },
			{ ar: 'إِمَامٌ', tr: 'imāmu-n', id: 'imam / pemimpin salat', category: 'Orang' },
			{ ar: 'حَجَرٌ', tr: 'ḥajaru-n', id: 'batu', category: 'Benda' },
			{ ar: 'سُكَّرٌ', tr: 'sukkaru-n', id: 'gula', category: 'Makanan' },
			{ ar: 'لَبَنٌ', tr: 'labanu-n', id: 'susu', category: 'Makanan' }
		],
		vocabNote:
			'Pelajaran 2 juga banyak menggunakan kembali kosakata dari Pelajaran 1 untuk melatih pola kalimat baru.'
	},
	{
		id: 'lesson-3',
		number: 3,
		label: 'Pelajaran 3',
		titleAr: 'الدَّرْسُ الثَّالِثُ',
		title: 'Kata Sandang "Al-" (ال) & Kalimat Sederhana',
		summary:
			"Mempelajari cara membentuk kata benda tertentu (ma'rifah) dengan awalan ال (al-), perbedaan huruf Qamariyyah dan Syamsiyyah, serta menyusun kalimat sifat sederhana.",
		coreConcept: {
			heading: 'Kata Sandang Penentu (ال) & Kalimat Sifat',
			highlightAr: 'الْـ  •  بَيْتٌ ← الْبَيْتُ',
			highlightTr: 'al-  •  baitun → al-baitu',
			highlightId: 'itu / tersebut (kata benda tertentu)',
			description:
				'Pelajaran ini memperkenalkan cara mengubah kata benda umum (nakirah) menjadi kata benda tertentu (ma\'rifah) dengan menambahkan awalan ال (al-), serta cara menyusun kalimat nominal sederhana menggunakan subjek tertentu dan kata sifat (contoh: "Pintu itu terbuka").'
		},
		grammarNotes: [
			{
				title: 'Kata Sandang ال dan Gugurnya Tanwīn',
				body: 'Dalam bahasa Arab, sebuah kata benda tidak boleh memiliki awalan ال (al-) dan tanda tanwīn (-un) secara bersamaan. Ketika ال ditambahkan di awal kata benda, harakat ganda (tanwīn) di akhir kata berubah menjadi harakat tunggal (-u).',
				examples: [
					{ ar: 'بَيْتٌ ← الْبَيْتُ', tr: 'baitun → al-baitu', id: 'sebuah rumah → rumah itu' },
					{ ar: 'قَلَمٌ ← الْقَلَمُ', tr: 'qalamun → al-qalamu', id: 'sebuah pena → pena itu' }
				]
			},
			{
				title: 'Huruf Qamariyyah (الْحُرُوفُ الْقَمَرِيَّةُ)',
				body: 'Terdapat 14 huruf Qamariyyah. Apabila ال bertemu dengan kata yang diawali huruf Qamariyyah, maka huruf lām (ل) diucapkan dengan jelas.',
				examples: [{ ar: 'الْقَمَرُ', tr: 'al-qamaru', id: 'bulan itu' }]
			},
			{
				title: 'Huruf Syamsiyyah (الْحُرُوفُ الشَّمْسِيَّةُ)',
				body: 'Terdapat 14 huruf Syamsiyyah (seperti ت، د، ر، س، ش، ن). Apabila ال bertemu dengan huruf Syamsiyyah, bunyi lām (ل) melebur ke dalam huruf pertama kata tersebut dan ditandai dengan tasydīd/syaddah ( ّ ).',
				examples: [
					{ ar: 'الشَّمْسُ', tr: 'asy-syamsu (bukan al-syamsu)', id: 'matahari itu' },
					{ ar: 'النَّجْمُ', tr: 'an-najmu (bukan al-najmu)', id: 'bintang itu' }
				]
			},
			{
				title: 'Hamzah Washal (هَمْزَةُ الْوَصْلِ)',
				body: 'Bunyi vokal "a" pada ال hanya diucapkan jika berada di awal kalimat. Jika didahului oleh kata lain (seperti وَ / wa), bunyi "a" tersebut gugur dalam pengucapan meskipun huruf alif-nya tetap ditulis.',
				examples: [
					{ ar: 'الْبَيْتُ', tr: 'al-baitu', id: 'rumah itu (di awal kalimat)' },
					{ ar: 'وَالْبَيْتُ', tr: 'wa-l-baitu', id: 'dan rumah itu (menyambung)' }
				]
			},
			{
				title: 'Kalimat Nominal Sederhana (Subjek + Kata Sifat)',
				body: 'Untuk mengatakan "Pena itu patah/rusak", subjek ("Pena itu") menggunakan ال (ma\'rifah: الْقَلَمُ), sedangkan predikatnya ("patah/rusak") tetap tanpa ال dan berakhiran tanwīn (nakirah: مَكْسُورٌ).',
				examples: [
					{ ar: 'الْقَلَمُ مَكْسُورٌ.', tr: 'al-qalamu maksūrun.', id: 'Pena itu patah/rusak.' }
				]
			}
		],
		exampleGroups: [
			{
				title: 'Penerapan Kata Sandang ال',
				subtitleAr: 'النَّكِرَةُ وَالْمَعْرِفَةُ',
				items: [
					{
						ar: 'بَيْتٌ ← الْبَيْتُ',
						tr: 'baitu-n → al-baitu',
						id: 'sebuah rumah → rumah itu (Huruf Qamariyyah)'
					},
					{
						ar: 'قَلَمٌ ← الْقَلَمُ',
						tr: 'qalamu-n → al-qalamu',
						id: 'sebuah pena → pena itu (Huruf Qamariyyah)'
					},
					{
						ar: 'نَجْمٌ ← النَّجْمُ',
						tr: 'najmu-n → an-najmu',
						id: 'sebuah bintang → bintang itu (Huruf Syamsiyyah)'
					},
					{
						ar: 'تَاجِرٌ ← التَّاجِرُ',
						tr: 'tājiru-n → at-tājiru',
						id: 'seorang pedagang → pedagang itu (Huruf Syamsiyyah)'
					}
				]
			},
			{
				title: 'Kalimat Deskriptif Sederhana',
				subtitleAr: 'جُمَلٌ وَصْفِيَّةٌ',
				items: [
					{ ar: 'الْقَلَمُ مَكْسُورٌ.', tr: 'al-qalamu maksūrun.', id: 'Pena itu patah/rusak.' },
					{ ar: 'الْبَابُ مَفْتُوحٌ.', tr: 'al-bābu maftūḥun.', id: 'Pintu itu terbuka.' },
					{ ar: 'الْقَمَرُ جَمِيلٌ.', tr: 'al-qamaru jamīlun.', id: 'Bulan itu indah.' },
					{ ar: 'الْمَاءُ بَارِدٌ.', tr: 'al-māʾu bāridun.', id: 'Air itu dingin.' },
					{ ar: 'اللَّبَنُ حَارٌّ.', tr: 'al-labanu ḥārrun.', id: 'Susu itu panas.' },
					{ ar: 'الْقَمِيصُ نَظِيفٌ.', tr: 'al-qamīṣu naẓīfun.', id: 'Kemeja itu bersih.' },
					{
						ar: 'الْحَجَرُ ثَقِيلٌ وَالْوَرَقُ خَفِيفٌ.',
						tr: 'al-ḥajaru thaqīlun wa-l-waraqu khafīfun.',
						id: 'Batu itu berat dan kertas itu ringan.'
					}
				]
			},
			{
				title: 'Membandingkan Subjek dengan "وَ"',
				subtitleAr: 'الْمُقَارَنَةُ',
				items: [
					{
						ar: 'الْكِتَابُ جَدِيدٌ وَالْقَلَمُ قَدِيمٌ.',
						tr: 'al-kitābu jadīdun wa-l-qalamu qadīmun.',
						id: 'Buku itu baru dan pena itu lama/usang.'
					},
					{
						ar: 'الْحِمَارُ صَغِيرٌ وَالْحِصَانُ كَبِيرٌ.',
						tr: 'al-ḥimāru ṣaghīrun wa-l-ḥiṣānu kabīrun.',
						id: 'Keledai itu kecil dan kuda itu besar.'
					},
					{
						ar: 'الْوَلَدُ جَالِسٌ وَالْمُدَرِّسُ وَاقِفٌ.',
						tr: 'al-waladu jālisun wa-l-mudarrisu wāqifun.',
						id: 'Anak laki-laki itu duduk dan guru itu berdiri.'
					},
					{
						ar: 'الْبَيْتُ قَرِيبٌ وَالْمَسْجِدُ بَعِيدٌ.',
						tr: 'al-baitu qarībun wa-l-masjidu baʿīdun.',
						id: 'Rumah itu dekat dan masjid itu jauh.'
					},
					{
						ar: 'الطَّبِيبُ طَوِيلٌ وَالْمُدَرِّسُ قَصِيرٌ.',
						tr: 'aṭ-ṭabību ṭawīlun wa-l-mudarrisu qaṣīrun.',
						id: 'Dokter itu tinggi dan guru itu pendek.'
					}
				]
			}
		],
		vocabulary: [
			{
				ar: 'قَمَرٌ / الْقَمَرُ',
				tr: 'qamaru-n / al-qamaru',
				id: 'bulan / bulan itu',
				category: 'Benda'
			},
			{
				ar: 'شَمْسٌ / الشَّمْسُ',
				tr: 'syamsu-n / asy-syamsu',
				id: 'matahari / matahari itu',
				category: 'Benda'
			},
			{ ar: 'مَاءٌ / الْمَاءُ', tr: 'māʾu-n / al-māʾu', id: 'air / air itu', category: 'Makanan' },
			{
				ar: 'وَرَقٌ / الْوَرَقُ',
				tr: 'waraqu-n / al-waraqu',
				id: 'kertas / kertas itu',
				category: 'Benda'
			},
			{
				ar: 'تُفَّاحٌ / التُّفَّاحُ',
				tr: 'tuffāḥu-n / at-tuffāḥu',
				id: 'apel / apel itu',
				category: 'Makanan'
			},
			{
				ar: 'دُكَّانٌ / الدُّكَّانُ',
				tr: 'dukkānu-n / ad-dukkānu',
				id: 'toko / toko itu',
				category: 'Benda'
			},
			{ ar: 'مَكْسُورٌ', tr: 'maksūru-n', id: 'patah / rusak', category: 'Kata Sifat' },
			{ ar: 'مَفْتُوحٌ', tr: 'maftūḥu-n', id: 'terbuka', category: 'Kata Sifat' },
			{ ar: 'مُغْلَقٌ', tr: 'mughlaqu-n', id: 'tertutup / terkunci', category: 'Kata Sifat' },
			{ ar: 'جَدِيدٌ', tr: 'jadīdu-n', id: 'baru', category: 'Kata Sifat' },
			{ ar: 'قَدِيمٌ', tr: 'qadīmu-n', id: 'lama / tua (benda)', category: 'Kata Sifat' },
			{ ar: 'صَغِيرٌ', tr: 'ṣaghīru-n', id: 'kecil', category: 'Kata Sifat' },
			{ ar: 'كَبِيرٌ', tr: 'kabīru-n', id: 'besar', category: 'Kata Sifat' },
			{ ar: 'بَارِدٌ', tr: 'bāridu-n', id: 'dingin', category: 'Kata Sifat' },
			{ ar: 'حَارٌّ', tr: 'ḥārru-n', id: 'panas', category: 'Kata Sifat' },
			{ ar: 'جَالِسٌ', tr: 'jālisu-n', id: 'duduk', category: 'Kata Sifat' },
			{ ar: 'وَاقِفٌ', tr: 'wāqifu-n', id: 'berdiri', category: 'Kata Sifat' },
			{ ar: 'وَسِخٌ', tr: 'wasikhu-n', id: 'kotor', category: 'Kata Sifat' },
			{ ar: 'نَظِيفٌ', tr: 'naẓīfu-n', id: 'bersih', category: 'Kata Sifat' },
			{ ar: 'ثَقِيلٌ', tr: 'thaqīlu-n', id: 'berat', category: 'Kata Sifat' },
			{ ar: 'خَفِيفٌ', tr: 'khafīfu-n', id: 'ringan', category: 'Kata Sifat' },
			{ ar: 'قَرِيبٌ', tr: 'qarību-n', id: 'dekat', category: 'Kata Sifat' },
			{ ar: 'بَعِيدٌ', tr: 'baʿīdu-n', id: 'jauh', category: 'Kata Sifat' },
			{ ar: 'جَمِيلٌ', tr: 'jamīlu-n', id: 'indah / bagus', category: 'Kata Sifat' },
			{ ar: 'حُلْوٌ', tr: 'ḥulwu-n', id: 'manis', category: 'Kata Sifat' },
			{ ar: 'مَرِيضٌ', tr: 'marīḍu-n', id: 'sakit', category: 'Kata Sifat' },
			{ ar: 'غَنِيٌّ', tr: 'ghaniyyu-n', id: 'kaya', category: 'Kata Sifat' },
			{ ar: 'فَقِيرٌ', tr: 'faqīru-n', id: 'miskin', category: 'Kata Sifat' },
			{ ar: 'طَوِيلٌ', tr: 'ṭawīlu-n', id: 'tinggi / panjang', category: 'Kata Sifat' },
			{ ar: 'قَصِيرٌ', tr: 'qaṣīru-n', id: 'pendek', category: 'Kata Sifat' },
			{ ar: 'لَذِيذٌ', tr: 'ladhīdhu-n', id: 'lezat / enak', category: 'Kata Sifat' }
		]
	},
	{
		id: 'lesson-4',
		number: 4,
		label: 'Pelajaran 4',
		titleAr: 'الدَّرْسُ الرَّابِعُ',
		title: 'Huruf Jar (حُرُوفُ الْجَرِّ) & Kata Ganti Orang',
		summary:
			'Mengenal kata depan/huruf jar (فِي, عَلَى, مِنْ, إِلَى) yang membuat kata benda berharakat kasrah (majrūr), kata ganti orang ketiga (هُوَ dan هِيَ), serta nama feminin.',
		coreConcept: {
			heading: 'Huruf Jar & Keadaan Majrūr',
			highlightAr: 'فِي الْبَيْتِ  •  عَلَى الْمَكْتَبِ',
			highlightTr: 'fī l-baiti  •  \'alā l-maktabi',
			highlightId: 'di dalam rumah  •  di atas meja',
			description:
				'Pelajaran ini mengenalkan huruf jar (kata depan). Ketika kata benda diawali huruf jar, harakat akhirnya berubah dari dhammah (-u/-un) menjadi kasrah (-i/-in), yang disebut keadaan majrūr. Kita juga mempelajari kata ganti هُوَ (dia mudzakkar) dan هِيَ (dia muannats).'
		},
		grammarNotes: [
			{
				title: 'Huruf Jar dan Keadaan Majrūr (الْمَجْرُورُ)',
				body: 'Harakat dasar kata benda adalah dhammah (-u atau -un). Ketika didahului oleh huruf jar (seperti فِي = di dalam, عَلَى = di atas, مِنْ = dari, إِلَى = ke/kepada), harakat akhir kata benda berubah menjadi kasrah (-i atau -in). Keadaan ini disebut majrūr.',
				examples: [
					{
						ar: 'الْبَيْتُ ← فِي الْبَيْتِ',
						tr: 'al-baitu → fī l-baiti',
						id: 'rumah itu → di dalam rumah'
					},
					{
						ar: 'الْمَكْتَبُ ← عَلَى الْمَكْتَبِ',
						tr: 'al-maktabu → \'alā l-maktabi',
						id: 'meja itu → di atas meja'
					},
					{
						ar: 'الْمَسْجِدُ ← مِنَ الْمَسْجِدِ',
						tr: 'al-masjidu → mina l-masjidi',
						id: 'masjid itu → dari masjid'
					},
					{
						ar: 'الْمَدْرَسَةُ ← إِلَى الْمَدْرَسَةِ',
						tr: 'al-madrasatu → ila l-madrasati',
						id: 'sekolah itu → ke sekolah'
					}
				]
			},
			{
				title: 'Kata Ganti Orang Ketiga (هُوَ dan هِيَ)',
				body: 'Bahasa Arab membagi kata ganti berdasarkan gender: هُوَ (huwa = dia/itu) untuk kata benda mudzakkar (laki-laki/tanpa ta marbuthah), dan هِيَ (hiya = dia/itu) untuk kata benda muannats (perempuan/berakhiran ta marbuthah). Kata ganti ini berlaku untuk manusia, hewan, maupun benda mati.',
				examples: [
					{
						ar: 'أَيْنَ مُحَمَّدٌ؟ هُوَ فِي الْغُرْفَةِ.',
						tr: 'Ayna Muḥammadun? Huwa fī l-ghurfati.',
						id: 'Di mana Muhammad? Dia di kamar.'
					},
					{
						ar: 'أَيْنَ آمِنَةُ؟ هِيَ فِي الْمَطْبَخِ.',
						tr: 'Ayna Āminatu? Hiya fī l-maṭbakhi.',
						id: 'Di mana Aminah? Dia di dapur.'
					},
					{
						ar: 'أَيْنَ السَّاعَةُ؟ هِيَ عَلَى السَّرِيرِ.',
						tr: 'Ayna as-sā\'atu? Hiya \'alā s-sarīri.',
						id: 'Di mana jam tangan itu? Jam itu di atas tempat tidur.'
					}
				]
			},
			{
				title: 'Nama Perempuan Tanpa Tanwin (Mamnu\' minash Sharf)',
				body: 'Berbeda dari nama laki-laki yang biasanya bertanwin (seperti مُحَمَّدٌ, حَامِدٌ), nama diri perempuan dalam bahasa Arab tidak boleh bertanwin dan hanya berakhiran satu harakat dhammah (-u).',
				examples: [
					{
						ar: 'آمِنَةُ، زَيْنَبُ، فَاطِمَةُ، مَرْيَمُ',
						tr: 'Āminatu, Zainabu, Fāṭimatu, Maryamu',
						id: 'Aminah, Zainab, Fatimah, Maryam (tanpa tanwin)'
					}
				]
			},
			{
				title: 'Kata Kerja Lampau Dasar (Fi\'il Madhi)',
				body: 'Pelajaran ini mengenalkan kata kerja lampau bentuk tunggal laki-laki (orang ketiga): ذَهَبَ (dia telah pergi) dan خَرَجَ (dia telah keluar).',
				examples: [
					{
						ar: 'ذَهَبَ حَامِدٌ إِلَى الْمُدِيرِ.',
						tr: 'Dhahaba Ḥāmidun ila l-mudīri.',
						id: 'Hamid telah pergi ke kepala sekolah.'
					},
					{
						ar: 'خَرَجَ مُحَمَّدٌ مِنَ الْفَصْلِ.',
						tr: 'Kharaja Muḥammadun mina l-faṣli.',
						id: 'Muhammad telah keluar dari kelas.'
					}
				]
			}
		],
		exampleGroups: [
			{
				title: 'Tanya Jawab Lokasi (فِي dan عَلَى)',
				subtitleAr: 'أَيْنَ؟ فِي وَعَلَى',
				items: [
					{ speaker: 'Q', ar: 'أَيْنَ مُحَمَّدٌ؟', tr: 'Ayna Muḥammadun?', id: 'Di mana Muhammad?' },
					{ speaker: 'A', ar: 'هُوَ فِي الْغُرْفَةِ.', tr: 'Huwa fī l-ghurfati.', id: 'Dia di dalam kamar.' },
					{ speaker: 'Q', ar: 'أَيْنَ يَاسِرٌ؟', tr: 'Ayna Yāsirun?', id: 'Di mana Yasir?' },
					{ speaker: 'A', ar: 'هُوَ فِي الْحَمَّامِ.', tr: 'Huwa fī l-ḥammāmi.', id: 'Dia di kamar mandi.' },
					{ speaker: 'Q', ar: 'أَيْنَ آمِنَةُ؟', tr: 'Ayna Āminatu?', id: 'Di mana Aminah?' },
					{ speaker: 'A', ar: 'هِيَ فِي الْمَطْبَخِ.', tr: 'Hiya fī l-maṭbakhi.', id: 'Dia di dapur.' },
					{ speaker: 'Q', ar: 'أَيْنَ الْكِتَابُ؟', tr: 'Ayna l-kitābu?', id: 'Di mana buku itu?' },
					{ speaker: 'A', ar: 'هُوَ عَلَى الْمَكْتَبِ.', tr: 'Huwa \'alā l-maktabi.', id: 'Buku itu di atas meja.' },
					{ speaker: 'Q', ar: 'أَيْنَ السَّاعَةُ؟', tr: 'Ayna as-sā\'atu?', id: 'Di mana jam tangan itu?' },
					{
						speaker: 'A',
						ar: 'هِيَ عَلَى السَّرِيرِ.',
						tr: 'Hiya \'alā s-sarīri.',
						id: 'Jam tangan itu di atas tempat tidur.'
					}
				]
			},
			{
				title: 'Asal Daerah & Tujuan (مِنْ dan إِلَى)',
				subtitleAr: 'مِنْ وَإِلَى',
				items: [
					{ speaker: 'Q', ar: 'مِنْ أَيْنَ أَنْتَ؟', tr: 'Min ayna anta?', id: 'Dari mana asalmu?' },
					{ speaker: 'A', ar: 'أَنَا مِنَ الْيَابَانِ.', tr: 'Anā mina l-yābāni.', id: 'Saya dari Jepang.' },
					{
						speaker: 'Q',
						ar: 'وَمِنْ أَيْنَ عَمَّارٌ؟',
						tr: 'Wa min ayna \'Ammārun?',
						id: 'Dan dari mana Ammar?'
					},
					{ speaker: 'A', ar: 'هُوَ مِنَ الصِّينِ.', tr: 'Huwa mina ṣ-ṣīni.', id: 'Dia dari Cina.' },
					{
						speaker: 'Q',
						ar: 'أَيْنَ ذَهَبَ حَامِدٌ؟',
						tr: 'Ayna dhahaba Ḥāmidun?',
						id: 'Ke mana Hamid pergi?'
					},
					{
						speaker: 'A',
						ar: 'ذَهَبَ إِلَى الْمُدِيرِ.',
						tr: 'Dhahaba ila l-mudīri.',
						id: 'Dia pergi ke kepala sekolah.'
					},
					{
						speaker: 'Q',
						ar: 'وَأَيْنَ ذَهَبَ عَلِيٌّ؟',
						tr: 'Wa ayna dhahaba \'Aliyyun?',
						id: 'Dan ke mana Ali pergi?'
					},
					{
						speaker: 'A',
						ar: 'ذَهَبَ إِلَى الْمِرْحَاضِ.',
						tr: 'Dhahaba ila l-mirḥāḍi.',
						id: 'Dia pergi ke toilet.'
					}
				]
			}
		],
		vocabulary: [
			{ ar: 'فِي', tr: 'fī', id: 'di dalam', category: 'Partikel' },
			{ ar: 'عَلَى', tr: '\'alā', id: 'di atas', category: 'Partikel' },
			{ ar: 'مِنْ', tr: 'min', id: 'dari', category: 'Partikel' },
			{ ar: 'إِلَى', tr: 'ilā', id: 'ke / kepada', category: 'Partikel' },
			{ ar: 'أَيْنَ', tr: 'ayna', id: 'di mana / ke mana', category: 'Partikel' },
			{ ar: 'هُوَ', tr: 'huwa', id: 'dia (laki-laki / mudzakkar)', category: 'Kata Ganti' },
			{ ar: 'هِيَ', tr: 'hiya', id: 'dia (perempuan / muannats)', category: 'Kata Ganti' },
			{ ar: 'أَنَا', tr: 'anā', id: 'saya / aku', category: 'Kata Ganti' },
			{ ar: 'أَنْتَ', tr: 'anta', id: 'kamu (laki-laki)', category: 'Kata Ganti' },
			{
				ar: 'غُرْفَةٌ / الْغُرْفَةُ',
				tr: 'ghurfatu-n / al-ghurfatu',
				id: 'kamar / kamar itu',
				category: 'Benda'
			},
			{
				ar: 'حَمَّامٌ / الْحَمَّامُ',
				tr: 'ḥammāmu-n / al-ḥammāmu',
				id: 'kamar mandi / kamar mandi itu',
				category: 'Benda'
			},
			{
				ar: 'مَطْبَخٌ / الْمَطْبَخُ',
				tr: 'maṭbakhu-n / al-maṭbakhu',
				id: 'dapur / dapur itu',
				category: 'Benda'
			},
			{ ar: 'فَصْلٌ / الْفَصْلُ', tr: 'faṣlu-n / al-faṣlu', id: 'kelas / ruang kelas', category: 'Benda' },
			{
				ar: 'مِرْحَاضٌ / الْمِرْحَاضُ',
				tr: 'mirḥāḍu-n / al-mirḥāḍu',
				id: 'toilet / jamban',
				category: 'Benda'
			},
			{
				ar: 'مَدْرَسَةٌ / الْمَدْرَسَةُ',
				tr: 'madrasatu-n / al-madrasatu',
				id: 'sekolah / madrasah',
				category: 'Benda'
			},
			{
				ar: 'جَامِعَةٌ / الْجَامِعَةُ',
				tr: 'jāmi\'atu-n / al-jāmi\'atu',
				id: 'universitas / perguruan tinggi',
				category: 'Benda'
			},
			{ ar: 'سُوقٌ / السُّوقُ', tr: 'sūqu-n / as-sūqu', id: 'pasar / pasar itu', category: 'Benda' },
			{ ar: 'سَمَاءٌ / السَّمَاءُ', tr: 'samā\'u-n / as-samā\'u', id: 'langit', category: 'Benda' },
			{ ar: 'سَاعَةٌ / السَّاعَةُ', tr: 'sā\'atu-n / as-sā\'atu', id: 'jam / jam tangan', category: 'Benda' },
			{ ar: 'الْيَابَانُ', tr: 'al-yābānu', id: 'Jepang', category: 'Benda' },
			{ ar: 'الصِّينُ', tr: 'aṣ-ṣīnu', id: 'Cina', category: 'Benda' },
			{ ar: 'الْهِنْدُ', tr: 'al-hindu', id: 'India', category: 'Benda' },
			{ ar: 'الْفِلِبِّينُ', tr: 'al-filibbīnu', id: 'Filipina', category: 'Benda' },
			{
				ar: 'مُدِيرٌ / الْمُدِيرُ',
				tr: 'mudīru-n / al-mudīru',
				id: 'kepala sekolah / direktur',
				category: 'Orang'
			},
			{ ar: 'ذَهَبَ', tr: 'dhahaba', id: 'dia telah pergi', category: 'Kata Kerja' },
			{ ar: 'خَرَجَ', tr: 'kharaja', id: 'dia telah keluar', category: 'Kata Kerja' }
		],
		vocabNote:
			'Huruf nun pada مِنْ berubah menjadi مِنَ (mina) jika bertemu kata yang berawalan alif lām (mina l-faṣli, mina l-yābāni) agar mudah diucapkan.'
	},
	{
		id: 'lesson-5',
		number: 5,
		label: 'Pelajaran 5',
		titleAr: 'الدَّرْسُ الْخَامِسُ',
		title: 'Kepemilikan (الإِضَافَةُ - Al-Idhafah)',
		summary:
			'Mempelajari frasa kepemilikan (Mudhaf & Mudhaf Ilaih), kata tanya kepemilikan (لِمَنْ), partikel panggilan (يَا), keterangan tempat (تَحْتَ), dan hamzah washal.',
		coreConcept: {
			heading: 'Struktur Kepemilikan (Idhafah)',
			highlightAr: 'كِتَابُ مُحَمَّدٍ  •  قَلَمُ الْمُدَرِّسِ',
			highlightTr: 'kitābu Muḥammadin  •  qalamu l-mudarrisi',
			highlightId: 'buku Muhammad  •  pena guru',
			description:
				'Idhafah menggabungkan dua kata benda untuk menyatakan kepemilikan ("buku Muhammad") atau keterkaitan ("pintu masjid"). Kata pertama (Mudhāf) tidak boleh berawalan ال dan tidak boleh bertanwin. Kata kedua (Mudhāf Ilaih) selalu berharakat kasrah (majrūr).'
		},
		grammarNotes: [
			{
				title: 'Struktur Idhafah (مُضَافٌ dan مُضَافٌ إِلَيْهِ)',
				body: 'Idhafah terdiri dari dua bagian: 1) Mudhaf (kata yang dimiliki), berada di posisi pertama, tidak boleh berawalan ال dan tidak boleh bertanwin (harakatnya tunggal -u). 2) Mudhaf Ilaih (pemilik), berada di posisi kedua dan selalu dalam keadaan majrūr (berharakat kasrah -i atau -in).',
				examples: [
					{ ar: 'كِتَابُ بِلَالٍ', tr: 'kitābu Bilālin', id: 'buku Bilal' },
					{ ar: 'بَيْتُ الْمُدَرِّسِ', tr: 'baitu l-mudarrisi', id: 'rumah guru' },
					{ ar: 'بَابُ الْمَسْجِدِ', tr: 'bābu l-masjidi', id: 'pintu masjid' }
				]
			},
			{
				title: 'Kata Tanya Kepemilikan (لِمَنْ)',
				body: 'لِمَنْ (liman) berarti "milik siapa" atau "kepunyaan siapa". Dibentuk dari partikel kepemilikan لِـ dan kata tanya مَنْ.',
				examples: [
					{
						ar: 'لِمَنْ هَذَا الْكِتَابُ؟',
						tr: 'Liman hādhā l-kitābu?',
						id: 'Milik siapakah buku ini?'
					},
					{
						ar: 'قَلَمُ مَنْ هَذَا يَا عَلِيُّ؟',
						tr: 'Qalamu man hādhā yā \'Aliyyu?',
						id: 'Pena milik siapa ini, wahai Ali?'
					}
				]
			},
			{
				title: 'Partikel Panggilan (حَرْفُ النِّدَاءِ - يَا)',
				body: 'Ketika memanggil seseorang dengan partikel يَا (yā = wahai), nama orang setelahnya tidak boleh bertanwin dan hanya berharakat dhammah tunggal (-u).',
				examples: [
					{ ar: 'يَا بِلَالُ (bukan يَا بِلَالٌ)', tr: 'yā Bilālu', id: 'Wahai Bilal' },
					{ ar: 'يَا أُسْتَاذُ (bukan يَا أُسْتَاذٌ)', tr: 'yā ustādhu', id: 'Wahai Ustadz' }
				]
			},
			{
				title: 'Keterangan Tempat تَحْتَ (Di Bawah)',
				body: 'Kata تَحْتَ (taḥta = di bawah) berposisi seperti mudhāf, sehingga kata benda yang mengikutinya berharakat kasrah (majrūr).',
				examples: [
					{ ar: 'تَحْتَ الْمَكْتَبِ', tr: 'taḥta l-maktabi', id: 'di bawah meja' }
				]
			},
			{
				title: 'Hamzah Washal pada اِسْمٌ dan اِبْنٌ',
				body: 'Kata اِسْمٌ (nama) dan اِبْنٌ (anak laki-laki) memiliki hamzah washal di awalnya. Jika didahului kata lain, vokal "i" tidak dibaca dalam percakapan yang bersambung.',
				examples: [
					{
						ar: 'اِسْمُ الْوَلَدِ بِلَالٌ',
						tr: 'ismu l-waladi Bilālun',
						id: 'Nama anak laki-laki itu Bilal'
					},
					{
						ar: 'وَابْنُ حَامِدٍ',
						tr: 'wabnu Ḥāmidin',
						id: 'dan anak laki-laki Hamid (menyambung)'
					}
				]
			}
		],
		exampleGroups: [
			{
				title: 'Percakapan & Kalimat Idhafah',
				subtitleAr: 'حِوَارُ الإِضَافَةِ',
				items: [
					{
						speaker: 'Q',
						ar: 'أَكِتَابُ مُحَمَّدٍ هَذَا يَا يَاسِرُ؟',
						tr: 'A kitābu Muḥammadin hādhā yā Yāsiru?',
						id: 'Apakah ini buku Muhammad, wahai Yasir?'
					},
					{
						speaker: 'A',
						ar: 'لَا، هَذَا كِتَابُ حَامِدٍ.',
						tr: 'Lā, hādhā kitābu Ḥāmidin.',
						id: 'Bukan, ini buku Hamid.'
					},
					{
						speaker: 'Q',
						ar: 'أَيْنَ كِتَابُ مُحَمَّدٍ؟',
						tr: 'Ayna kitābu Muḥammadin?',
						id: 'Di mana buku Muhammad?'
					},
					{
						speaker: 'A',
						ar: 'هُوَ عَلَى الْمَكْتَبِ هُنَاكَ.',
						tr: 'Huwa \'alā l-maktabi hunāka.',
						id: 'Buku itu di atas meja di sana.'
					},
					{
						speaker: 'Q',
						ar: 'قَلَمُ مَنْ هَذَا يَا عَلِيُّ؟',
						tr: 'Qalamu man hādhā yā \'Aliyyu?',
						id: 'Pena siapa ini, wahai Ali?'
					},
					{
						speaker: 'A',
						ar: 'هَذَا قَلَمُ الْمُدَرِّسِ.',
						tr: 'Hādhā qalamu l-mudarrisi.',
						id: 'Ini adalah pena milik guru.'
					},
					{
						speaker: 'Q',
						ar: 'أَيْنَ حَقِيبَةُ الْمُدَرِّسِ؟',
						tr: 'Ayna ḥaqībatu l-mudarrisi?',
						id: 'Di mana tas milik guru?'
					},
					{
						speaker: 'A',
						ar: 'هِيَ تَحْتَ الْمَكْتَبِ.',
						tr: 'Hiya taḥta l-maktabi.',
						id: 'Tas itu berada di bawah meja.'
					},
					{
						ar: 'بَيْتُ اللَّهِ فِي مَكَّةَ.',
						tr: 'Baitu Llāhi fī Makkata.',
						id: 'Rumah Allah (Ka\'bah) berada di Makkah.'
					},
					{
						ar: 'مُحَمَّدٌ رَسُولُ اللَّهِ.',
						tr: 'Muḥammadun Rasūlu Llāhi.',
						id: 'Muhammad adalah Utusan Allah.'
					}
				]
			}
		],
		vocabulary: [
			{
				ar: 'رَسُولٌ / الرَّسُولُ',
				tr: 'rasūlu-n / ar-rasūlu',
				id: 'utusan / rasul',
				category: 'Orang'
			},
			{
				ar: 'عَمٌّ / الْعَمُّ',
				tr: '\'ammu-n / al-\'ammu',
				id: 'paman (dari pihak ayah)',
				category: 'Orang'
			},
			{
				ar: 'خَالٌ / الْخَالُ',
				tr: 'khālu-n / al-khālu',
				id: 'paman (dari pihak ibu)',
				category: 'Orang'
			},
			{ ar: 'اِبْنٌ / الِابْنُ', tr: 'ibnu-n / al-ibnu', id: 'anak laki-laki', category: 'Orang' },
			{ ar: 'بِنْتٌ / الْبِنْتُ', tr: 'bintu-n / al-bintu', id: 'anak perempuan', category: 'Orang' },
			{ ar: 'اِسْمٌ / الِاسْمُ', tr: 'ismu-n / al-ismu', id: 'nama', category: 'Benda' },
			{
				ar: 'حَقِيبَةٌ / الْحَقِيبَةُ',
				tr: 'ḥaqībatu-n / al-ḥaqībatu',
				id: 'tas / koper',
				category: 'Benda'
			},
			{
				ar: 'سَيَّارَةٌ / السَّيَّارَةُ',
				tr: 'sayyāratu-n / as-sayyāratu',
				id: 'mobil',
				category: 'Benda'
			},
			{
				ar: 'شَارِعٌ / الشَّارِعُ',
				tr: 'syāri\'u-n / asy-syāri\'u',
				id: 'jalan raya',
				category: 'Benda'
			},
			{ ar: 'الْكَعْبَةُ', tr: 'al-ka\'batu', id: 'Ka\'bah', category: 'Benda' },
			{ ar: 'تَحْتَ', tr: 'taḥta', id: 'di bawah', category: 'Partikel' },
			{ ar: 'هُنَا', tr: 'hunā', id: 'di sini', category: 'Partikel' },
			{ ar: 'هُنَاكَ', tr: 'hunāka', id: 'di sana', category: 'Partikel' },
			{ ar: 'لِمَنْ', tr: 'liman', id: 'milik siapa', category: 'Partikel' },
			{ ar: 'يَا', tr: 'yā', id: 'wahai (seruan)', category: 'Partikel' }
		],
		vocabNote:
			'Mudhāf (kata yang dimiliki) tidak boleh berawalan ال dan tidak boleh bertanwin. Mudhāf Ilaih (pemilik) selalu berakhiran kasrah (-i/-in).'
	},
	{
		id: 'lesson-6',
		number: 6,
		label: 'Pelajaran 6',
		titleAr: 'الدَّرْسُ السَّادِسُ',
		title: 'Kata Tunjuk Perempuan "Ini" (هَذِهِ) & Ciri Muannats',
		summary:
			'Mengenal kata tunjuk perempuan هَذِهِ (hādhihi), tanda kata muannats (ta marbuthah & organ tubuh berpasangan), serta huruf kepemilikan لِـ (milik).',
		coreConcept: {
			heading: 'Kata Tunjuk Muannats (هَذِهِ) & Ciri Gender',
			highlightAr: 'هَذَا وَلَدٌ وَهَذِهِ بِنْتٌ',
			highlightTr: 'hādhā waladun wa hādhihi bintun',
			highlightId: 'ini anak laki-laki dan ini anak perempuan',
			description:
				'Pelajaran ini mengenalkan kata tunjuk tunggal perempuan هَذِهِ (hādhihi = ini). Kita belajar mengenali kata muannats melalui ta marbuthah (ة), jenis biologis wanita, dan anggota tubuh berpasangan (mata, telinga, tangan, kaki), serta huruf kepemilikan لِـ (milik/untuk).'
		},
		grammarNotes: [
			{
				title: 'Kata Tunjuk Perempuan (هَذِهِ)',
				body: 'هَذِهِ (hādhihi) adalah pasangan muannats dari kata tunjuk هَذَا (hādhā). Digunakan untuk menunjuk orang atau benda muannats yang berada dekat.',
				examples: [
					{
						ar: 'هَذَا وَلَدٌ وَهَذِهِ بِنْتٌ.',
						tr: 'Hādhā waladun wa hādhihi bintun.',
						id: 'Ini anak laki-laki dan ini anak perempuan.'
					},
					{
						ar: 'هَذَا دِيكٌ وَهَذِهِ دَجَاجَةٌ.',
						tr: 'Hādhā dīkun wa hādhihi dajājatun.',
						id: 'Ini ayam jantan dan ini ayam betina.'
					}
				]
			},
			{
				title: 'Tanda Muannats: Ta Marbuthah (ة)',
				body: 'Tanda muannats yang paling umum adalah akhiran ta marbuthah (ة). Huruf sebelum ta marbuthah selalu berharakat fathah (-a).',
				examples: [
					{
						ar: 'مُدَرِّسٌ ← مُدَرِّسَةٌ',
						tr: 'mudarrisun → mudarrisatun',
						id: 'guru laki-laki → guru perempuan'
					},
					{
						ar: 'طَبِيبٌ ← طَبِيبَةٌ',
						tr: 'ṭabībun → ṭabībatun',
						id: 'dokter laki-laki → dokter perempuan'
					},
					{
						ar: 'سَيَّارَةٌ، دَرَّاجَةٌ، مِلْعَقَةٌ',
						tr: 'sayyāratun, darrājatun, mil\'aqatun',
						id: 'mobil, sepeda, sendok (semua muannats)'
					}
				]
			},
			{
				title: 'Anggota Tubuh dan Gender (Mudzakkar vs Muannats)',
				body: 'Dalam kaidah bahasa Arab, anggota tubuh yang berpasangan (seperti tangan, kaki, mata, telinga) dihukumi muannats (ditunjuk dengan هَذِهِ). Sedangkan anggota tubuh yang tunggal (seperti hidung, mulut) dihukumi mudzakkar (ditunjuk dengan هَذَا).',
				examples: [
					{
						ar: 'هَذَا أَنْفٌ وَهَذَا فَمٌ.',
						tr: 'Hādhā anfun wa hādhā famun.',
						id: 'Ini hidung (mudzakkar) dan ini mulut (mudzakkar).'
					},
					{
						ar: 'هَذِهِ عَيْنٌ وَهَذِهِ أُذُنٌ.',
						tr: 'Hādhihi \'aynun wa hādhihi udhunun.',
						id: 'Ini mata (muannats) dan ini telinga (muannats).'
					},
					{
						ar: 'هَذِهِ يَدٌ وَهَذِهِ رِجْلٌ.',
						tr: 'Hādhihi yadun wa hādhihi rijlu-n.',
						id: 'Ini tangan (muannats) dan ini kaki (muannats).'
					}
				]
			},
			{
				title: 'Huruf Jar Kepemilikan (لِـ)',
				body: 'Partikel لِـ (li-) adalah huruf jar yang menyatakan kepemilikan ("milik" atau "untuk"). Kata benda setelahnya menjadi kasrah (majrūr). Bila bersambung dengan kata Allah, alif-nya gugur menjadi لِلَّهِ (lillāhi = milik Allah).',
				examples: [
					{ ar: 'هَذِهِ لِخَالِدٍ.', tr: 'Hādhihi li-Khālidin.', id: 'Ini milik Khalid.' },
					{ ar: 'الْحَمْدُ لِلَّهِ.', tr: 'Al-ḥamdu lillāhi.', id: 'Segala puji bagi Allah.' }
				]
			}
		],
		exampleGroups: [
			{
				title: 'Penerapan هَذَا dan هَذِهِ',
				subtitleAr: 'هَذَا وَهَذِهِ',
				items: [
					{
						ar: 'هَذَا ابْنُ حَامِدٍ وَهَذِهِ بِنْتُ يَاسِرٍ.',
						tr: 'Hādhā bnu Ḥāmidin wa hādhihi bintu Yāsirin.',
						id: 'Ini anak laki-laki Hamid dan ini anak perempuan Yasir.'
					},
					{
						ar: 'ابْنُ حَامِدٍ جَالِسٌ وَبِنْتُ يَاسِرٍ وَاقِفَةٌ.',
						tr: 'Ibnu Ḥāmidin jālisun wa bintu Yāsirin wāqifatun.',
						id: 'Anak laki-laki Hamid duduk dan anak perempuan Yasir berdiri.'
					},
					{
						speaker: 'Q',
						ar: 'مَنْ هَذِهِ؟',
						tr: 'Man hādhihi?',
						id: 'Siapakah ini (perempuan)?'
					},
					{
						speaker: 'A',
						ar: 'هَذِهِ أُخْتُ الْمُهَنْدِسِ.',
						tr: 'Hādhihi ukhtu l-muhandisi.',
						id: 'Ini adalah saudara perempuan sang insinyur.'
					},
					{
						speaker: 'Q',
						ar: 'أَهِيَ أَيْضًا مُهَنْدِسَةٌ؟',
						tr: 'A hiya ayḍan muhandisatun?',
						id: 'Apakah dia juga seorang insinyur perempuan?'
					},
					{
						speaker: 'A',
						ar: 'لَا، هِيَ طَبِيبَةٌ.',
						tr: 'Lā, hiya ṭabībatun.',
						id: 'Bukan, dia adalah seorang dokter perempuan.'
					}
				]
			},
			{
				title: 'Pertanyaan Kepemilikan (لِمَنْ)',
				subtitleAr: 'لِمَنْ هَذِهِ؟',
				items: [
					{
						speaker: 'Q',
						ar: 'لِمَنْ هَذِهِ السَّيَّارَةُ؟',
						tr: 'Liman hādhihi s-sayyāratu?',
						id: 'Milik siapakah mobil ini?'
					},
					{
						speaker: 'A',
						ar: 'هَذِهِ سَيَّارَةُ الْمُدِيرِ.',
						tr: 'Hādhihi sayyāratu l-mudīri.',
						id: 'Ini adalah mobil milik kepala sekolah.'
					},
					{
						speaker: 'Q',
						ar: 'لِمَنْ هَذِهِ الْمِكْوَاةُ؟',
						tr: 'Liman hādhihi l-mikwātu?',
						id: 'Milik siapakah setrika ini?'
					},
					{
						speaker: 'A',
						ar: 'هَذِهِ لِخَالِدٍ.',
						tr: 'Hādhihi li-Khālidin.',
						id: 'Ini milik Khalid.'
					},
					{
						ar: 'هَذِهِ سَاعَةُ عَلِيٍّ، هِيَ جَمِيلَةٌ جِدًّا.',
						tr: 'Hādhihi sā\'atu \'Aliyyin, hiya jamīlatun jiddan.',
						id: 'Ini jam tangan Ali, jam itu sangat indah.'
					},
					{
						ar: 'هَذِهِ دَرَّاجَةُ ابْنِ الْمُؤَذِّنِ، هِيَ سَرِيعَةٌ.',
						tr: 'Hādhihi darrājatu bni l-mu\'adhdhini, hiya sarī\'atun.',
						id: 'Ini sepeda anak muadzin, sepeda itu cepat.'
					}
				]
			},
			{
				title: 'Anggota Tubuh Berpasangan & Tunggal',
				subtitleAr: 'أَعْضَاءُ الْجِسْمِ',
				items: [
					{
						ar: 'هَذَا أَنْفٌ وَهَذَا فَمٌ.',
						tr: 'Hādhā anfun wa hādhā famun.',
						id: 'Ini hidung dan ini mulut (keduanya tunggal / mudzakkar).'
					},
					{
						ar: 'هَذِهِ أُذُنٌ وَهَذِهِ عَيْنٌ.',
						tr: 'Hādhihi udhunun wa hādhihi \'aynun.',
						id: 'Ini telinga dan ini mata (berpasangan / muannats).'
					},
					{
						ar: 'وَهَذِهِ يَدٌ وَهَذِهِ رِجْلٌ.',
						tr: 'Wa hādhihi yadun wa hādhihi rijlu-n.',
						id: 'Dan ini tangan dan ini kaki (berpasangan / muannats).'
					},
					{
						ar: 'هَذِهِ قِدْرٌ، وَهَذِهِ مِلْعَقَةٌ.',
						tr: 'Hādhihi qidrun, wa hādhihi mil\'aqatun.',
						id: 'Ini kuali/panci dan ini sendok (keduanya muannats).'
					}
				]
			}
		],
		vocabulary: [
			{ ar: 'هَذِهِ', tr: 'hādhihi', id: 'ini (tunggal muannats)', category: 'Kata Ganti' },
			{ ar: 'أُمٌّ / الْأُمُّ', tr: 'ummu-n / al-ummu', id: 'ibu', category: 'Orang' },
			{ ar: 'فَلَّاحٌ / الْفَلَّاحُ', tr: 'fallāḥu-n / al-fallāḥu', id: 'petani', category: 'Orang' },
			{ ar: 'بَقَرَةٌ / الْبَقَرَةُ', tr: 'baqaratu-n / al-baqaratu', id: 'sapi betina', category: 'Hewan' },
			{ ar: 'دَجَاجَةٌ / الدَّجَاجَةُ', tr: 'dajājatu-n / ad-dajājatu', id: 'ayam betina', category: 'Hewan' },
			{
				ar: 'قِدْرٌ / الْقِدْرُ',
				tr: 'qidru-n / al-qidru',
				id: 'panci / kuali (muannats)',
				category: 'Benda'
			},
			{
				ar: 'مِلْعَقَةٌ / الْمِلْعَقَةُ',
				tr: 'mil\'aqatu-n / al-mil\'aqatu',
				id: 'sendok',
				category: 'Benda'
			},
			{
				ar: 'دَرَّاجَةٌ / الدَّرَّاجَةُ',
				tr: 'darrājatu-n / ad-darrājatu',
				id: 'sepeda',
				category: 'Benda'
			},
			{
				ar: 'مِكْوَاةٌ / الْمِكْوَاةُ',
				tr: 'mikwātu-n / al-mikwātu',
				id: 'setrika',
				category: 'Benda'
			},
			{
				ar: 'ثَلَّاجَةٌ / الثَّلَّاجَةُ',
				tr: 'thallājatu-n / ath-thallājatu',
				id: 'kulkas / lemari es',
				category: 'Benda'
			},
			{
				ar: 'نَافِذَةٌ / النَّافِذَةُ',
				tr: 'nāfidhatu-n / an-nāfidhatu',
				id: 'jendela',
				category: 'Benda'
			},
			{ ar: 'شَايٌ / الشَّايُ', tr: 'syāyu-n / asy-syāyu', id: 'teh', category: 'Makanan' },
			{ ar: 'قَهْوَةٌ / الْقَهْوَةُ', tr: 'qahwatu-n / al-qahwatu', id: 'kopi', category: 'Makanan' },
			{ ar: 'فَمٌ / الْفَمُ', tr: 'famu-n / al-famu', id: 'mulut (mudzakkar)', category: 'Bagian Tubuh' },
			{
				ar: 'أَنْفٌ / الْأَنْفُ',
				tr: 'anfu-n / al-anfu',
				id: 'hidung (mudzakkar)',
				category: 'Bagian Tubuh'
			},
			{
				ar: 'عَيْنٌ / الْعَيْنُ',
				tr: '\'aynu-n / al-\'aynu',
				id: 'mata (muannats)',
				category: 'Bagian Tubuh'
			},
			{
				ar: 'أُذُنٌ / الْأُذُنُ',
				tr: 'udhunu-n / al-udhunu',
				id: 'telinga (muannats)',
				category: 'Bagian Tubuh'
			},
			{
				ar: 'يَدٌ / الْيَدُ',
				tr: 'yadu-n / al-yadu',
				id: 'tangan (muannats)',
				category: 'Bagian Tubuh'
			},
			{
				ar: 'رِجْلٌ / الرِّجْلُ',
				tr: 'rijlu-n / ar-rijlu',
				id: 'kaki (muannats)',
				category: 'Bagian Tubuh'
			},
			{ ar: 'سَرِيعٌ', tr: 'sarī\'u-n', id: 'cepat', category: 'Kata Sifat' },
			{
				ar: 'جَمِيلَةٌ',
				tr: 'jamīlatu-n',
				id: 'cantik / indah (muannats)',
				category: 'Kata Sifat'
			},
			{ ar: 'أَيْضًا', tr: 'ayḍan', id: 'juga', category: 'Partikel' },
			{ ar: 'جِدًّا', tr: 'jiddan', id: 'sangat / sekali', category: 'Partikel' },
			{ ar: 'لِـ', tr: 'li-', id: 'milik / kepunyaan / untuk', category: 'Partikel' }
		],
		vocabNote:
			'Anggota tubuh yang berpasangan (mata, telinga, tangan, kaki) diperlakukan sebagai muannats dan ditunjuk menggunakan هَذِهِ.'
	}
];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
