export interface QuizQuestion {
	id: string;
	lessonId: 'lesson-1' | 'lesson-2' | 'lesson-3';
	lessonLabel: string;
	prompt: string;
	arabicPrompt?: string;
	options: { text: string; isArabic?: boolean }[];
	correctIndex: number;
	explanation: string;
}

export const exercises: QuizQuestion[] = [
	{
		id: 'q-l1-1',
		lessonId: 'lesson-1',
		lessonLabel: 'Pelajaran 1',
		prompt: 'Apa arti dari kalimat bahasa Arab berikut?',
		arabicPrompt: 'هَذَا مِفْتَاحٌ',
		options: [
			{ text: 'Ini adalah sebuah kunci' },
			{ text: 'Ini adalah sebuah meja tulis' },
			{ text: 'Itu adalah sebuah pintu' },
			{ text: 'Ini adalah sebuah buku' }
		],
		correctIndex: 0,
		explanation: 'هَذَا (hādhā) berarti "ini" dan مِفْتَاحٌ (miftāḥun) berarti "sebuah kunci".'
	},
	{
		id: 'q-l1-2',
		lessonId: 'lesson-1',
		lessonLabel: 'Pelajaran 1',
		prompt:
			'Kata tanya mana yang tepat untuk menanyakan objek/benda yang tidak berakal ("Apa ini?")?',
		options: [
			{ text: 'مَا هَذَا؟', isArabic: true },
			{ text: 'مَنْ هَذَا؟', isArabic: true },
			{ text: 'أَهَذَا؟', isArabic: true },
			{ text: 'لَا هَذَا', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'مَا (mā) digunakan untuk benda atau hewan (tidak berakal), sedangkan مَنْ (man) digunakan untuk manusia.'
	},
	{
		id: 'q-l1-3',
		lessonId: 'lesson-1',
		lessonLabel: 'Pelajaran 1',
		prompt:
			'Jika seseorang bertanya dengan menunjuk seorang dokter, pertanyaan apa yang digunakan?',
		arabicPrompt: '... ؟ — هَذَا طَبِيبٌ.',
		options: [
			{ text: 'مَنْ هَذَا', isArabic: true },
			{ text: 'مَا هَذَا', isArabic: true },
			{ text: 'مَا ذَلِكَ', isArabic: true },
			{ text: 'أَهَذَا بَيْتٌ', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'Karena طَبِيبٌ (dokter) adalah manusia (berakal), kita menggunakan مَنْ هَذَا؟ (Siapa ini?).'
	},
	{
		id: 'q-l1-4',
		lessonId: 'lesson-1',
		lessonLabel: 'Pelajaran 1',
		prompt:
			'Bagaimana cara mengubah pernyataan "هَذَا بَيْتٌ" menjadi kalimat tanya "Apakah ini sebuah rumah?"',
		options: [
			{ text: 'أَهَذَا بَيْتٌ؟', isArabic: true },
			{ text: 'مَا هَذَا بَيْتٌ؟', isArabic: true },
			{ text: 'مَنْ هَذَا بَيْتٌ؟', isArabic: true },
			{ text: 'نَعَمْ هَذَا بَيْتٌ؟', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'Menambahkan huruf hamzah istifham أَ (a) di awal kalimat mengubah pernyataan menjadi pertanyaan Ya/Tidak.'
	},
	{
		id: 'q-l1-5',
		lessonId: 'lesson-1',
		lessonLabel: 'Pelajaran 1',
		prompt: 'Lengkapi jawaban untuk pertanyaan berikut: "Bukan, ini adalah sebuah kursi."',
		arabicPrompt: 'أَهَذَا سَرِيرٌ؟ — ...',
		options: [
			{ text: 'لَا، هَذَا كُرْسِيٌّ.', isArabic: true },
			{ text: 'نَعَمْ، هَذَا سَرِيرٌ.', isArabic: true },
			{ text: 'لَا، هَذَا مَكْتَبٌ.', isArabic: true },
			{ text: 'نَعَمْ، هَذَا كُرْسِيٌّ.', isArabic: true }
		],
		correctIndex: 0,
		explanation: 'لَا (lā) berarti "tidak/bukan", dan كُرْسِيٌّ (kursiyyun) berarti "sebuah kursi".'
	},
	{
		id: 'q-l2-1',
		lessonId: 'lesson-2',
		lessonLabel: 'Pelajaran 2',
		prompt:
			'Kata tunjuk mana yang digunakan untuk menunjuk benda tunggal mudzakkar yang berada JAUH ("itu")?',
		options: [
			{ text: 'ذَلِكَ', isArabic: true },
			{ text: 'هَذَا', isArabic: true },
			{ text: 'مَنْ', isArabic: true },
			{ text: 'مَا', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'ذَلِكَ (dhālika) berarti "itu" (untuk jarak jauh), sedangkan هَذَا (hādhā) berarti "ini" (untuk jarak dekat).'
	},
	{
		id: 'q-l2-2',
		lessonId: 'lesson-2',
		lessonLabel: 'Pelajaran 2',
		prompt: 'Apa arti dari kalimat gabungan berikut?',
		arabicPrompt: 'هَذَا سُكَّرٌ وَذَلِكَ لَبَنٌ.',
		options: [
			{ text: 'Ini adalah gula dan itu adalah susu.' },
			{ text: 'Ini adalah susu dan itu adalah gula.' },
			{ text: 'Ini adalah batu dan itu adalah bintang.' },
			{ text: 'Itu adalah gula dan ini adalah susu.' }
		],
		correctIndex: 0,
		explanation:
			'سُكَّرٌ (sukkarun) = gula, وَ (wa) = dan, ذَلِكَ (dhālika) = itu, لَبَنٌ (labanun) = susu.'
	},
	{
		id: 'q-l2-3',
		lessonId: 'lesson-2',
		lessonLabel: 'Pelajaran 2',
		prompt:
			'Terjemahkan ke dalam bahasa Arab: "Ini adalah seorang guru dan itu adalah seorang imam."',
		options: [
			{ text: 'هَذَا مُدَرِّسٌ وَذَلِكَ إِمَامٌ.', isArabic: true },
			{ text: 'ذَلِكَ مُدَرِّسٌ وَهَذَا إِمَامٌ.', isArabic: true },
			{ text: 'هَذَا طَالِبٌ وَذَلِكَ طَبِيبٌ.', isArabic: true },
			{ text: 'هَذَا إِمَامٌ وَذَلِكَ تَاجِرٌ.', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'مُدَرِّسٌ (mudarrisun) berarti guru, dan إِمَامٌ (imāmun) berarti imam. Kata hubung وَ ditulis menyatu dengan kata berikutnya.'
	},
	{
		id: 'q-l2-4',
		lessonId: 'lesson-2',
		lessonLabel: 'Pelajaran 2',
		prompt: 'Pilih jawaban yang tepat untuk: "Bukan, itu adalah seekor kucing."',
		arabicPrompt: 'أَذَلِكَ كَلْبٌ؟',
		options: [
			{ text: 'لَا، ذَلِكَ قِطٌّ.', isArabic: true },
			{ text: 'لَا، هَذَا كَلْبٌ.', isArabic: true },
			{ text: 'نَعَمْ، ذَلِكَ قِطٌّ.', isArabic: true },
			{ text: 'لَا، ذَلِكَ حِصَانٌ.', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'كَلْبٌ adalah anjing, sedangkan قِطٌّ (qiṭṭun) adalah kucing. Karena pertanyaannya menggunakan ذَلِكَ (itu), jawabannya juga menggunakan ذَلِكَ.'
	},
	{
		id: 'q-l3-1',
		lessonId: 'lesson-3',
		lessonLabel: 'Pelajaran 3',
		prompt:
			'Manakah penulisan yang benar ketika kata "بَيْتٌ" (sebuah rumah) diberi awalan kata sandang "ال" (rumah itu)?',
		options: [
			{ text: 'الْبَيْتُ', isArabic: true },
			{ text: 'الْبَيْتٌ', isArabic: true },
			{ text: 'بَيْتُ', isArabic: true },
			{ text: 'أَبَيْتٌ', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'Ketika awalan ال ditambahkan pada kata benda, tanwīn (-un) di akhir kata gugur dan berubah menjadi harakat dhammah tunggal (-u): الْبَيْتُ (al-baitu).'
	},
	{
		id: 'q-l3-2',
		lessonId: 'lesson-3',
		lessonLabel: 'Pelajaran 3',
		prompt:
			'Kata "النَّجْمُ" (bintang itu) diawali dengan huruf ن yang termasuk Huruf Syamsiyyah. Bagaimana cara membacanya?',
		arabicPrompt: 'النَّجْمُ',
		options: [
			{ text: 'an-najmu (bunyi "l" melebur ke huruf "n")' },
			{ text: 'al-najmu (bunyi "l" tetap dibaca jelas)' },
			{ text: 'an-najmun (dengan tanwīn di akhir)' },
			{ text: 'al-najmun' }
		],
		correctIndex: 0,
		explanation:
			'Pada huruf Syamsiyyah (seperti ن، ش، ت، د), bunyi lām (ل) pada ال melebur ke huruf berikutnya sehingga dibaca "an-najmu", bukan "al-najmu".'
	},
	{
		id: 'q-l3-3',
		lessonId: 'lesson-3',
		lessonLabel: 'Pelajaran 3',
		prompt: 'Apa arti dari kalimat berikut?',
		arabicPrompt: 'الْبَابُ مَفْتُوحٌ.',
		options: [
			{ text: 'Pintu itu terbuka.' },
			{ text: 'Pintu itu tertutup.' },
			{ text: 'Pena itu patah.' },
			{ text: 'Rumah itu dekat.' }
		],
		correctIndex: 0,
		explanation:
			'الْبَابُ (al-bābu) berarti "pintu itu" dan مَفْتُوحٌ (maftūḥun) berarti "terbuka" (sedangkan مُغْلَقٌ berarti tertutup).'
	},
	{
		id: 'q-l3-4',
		lessonId: 'lesson-3',
		lessonLabel: 'Pelajaran 3',
		prompt: 'Terjemahkan ke dalam bahasa Arab: "Batu itu berat dan kertas itu ringan."',
		options: [
			{ text: 'الْحَجَرُ ثَقِيلٌ وَالْوَرَقُ خَفِيفٌ.', isArabic: true },
			{ text: 'الْحَجَرُ خَفِيفٌ وَالْوَرَقُ ثَقِيلٌ.', isArabic: true },
			{ text: 'الْحَجَرُ كَبِيرٌ وَالْوَرَقُ صَغِيرٌ.', isArabic: true },
			{ text: 'حَجَرٌ ثَقِيلٌ وَوَرَقٌ خَفِيفٌ.', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'الْحَجَرُ (batu itu) + ثَقِيلٌ (berat), dan وَالْوَرَقُ (dan kertas itu) + خَفِيفٌ (ringan).'
	},
	{
		id: 'q-l3-5',
		lessonId: 'lesson-3',
		lessonLabel: 'Pelajaran 3',
		prompt: 'Apa arti dari kalimat perbandingan berikut?',
		arabicPrompt: 'الْوَلَدُ جَالِسٌ وَالْمُدَرِّسُ وَاقِفٌ.',
		options: [
			{ text: 'Anak laki-laki itu duduk dan guru itu berdiri.' },
			{ text: 'Anak laki-laki itu berdiri dan guru itu duduk.' },
			{ text: 'Dokter itu tinggi dan guru itu pendek.' },
			{ text: 'Pelajar itu sakit dan guru itu kaya.' }
		],
		correctIndex: 0,
		explanation:
			'الْوَلَدُ (anak laki-laki itu) جَالِسٌ (duduk), وَالْمُدَرِّسُ (dan guru itu) وَاقِفٌ (berdiri).'
	}
];
