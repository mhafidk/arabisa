export type VocabCategory =
	| 'Benda'
	| 'Orang'
	| 'Hewan'
	| 'Makanan'
	| 'Partikel'
	| 'Kata Ganti'
	| 'Kata Hubung'
	| 'Kata Sifat';

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
	}
];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
