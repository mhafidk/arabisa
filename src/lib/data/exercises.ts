export interface QuizQuestion {
	id: string;
	lessonId: 'lesson-1' | 'lesson-2' | 'lesson-3' | 'lesson-4' | 'lesson-5' | 'lesson-6';
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
		id: 'q-l2-5',
		lessonId: 'lesson-2',
		lessonLabel: 'Pelajaran 2',
		prompt: 'Apa arti dari pertanyaan dan jawaban berikut?',
		arabicPrompt: 'مَا ذَلِكَ؟ — ذَلِكَ حَجَرٌ.',
		options: [
			{ text: 'Apa itu? — Itu adalah sebuah batu.' },
			{ text: 'Siapa itu? — Itu adalah seorang imam.' },
			{ text: 'Apa ini? — Ini adalah sebuah batu.' },
			{ text: 'Apakah itu bintang? — Bukan, itu batu.' }
		],
		correctIndex: 0,
		explanation:
			'مَا (apa) digunakan untuk menanyakan benda yang tidak berakal, ذَلِكَ (dhālika) berarti "itu", dan حَجَرٌ (ḥajarun) berarti "sebuah batu".'
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
	},
	// --- Pelajaran 4 ---
	{
		id: 'q-l4-1',
		lessonId: 'lesson-4',
		lessonLabel: 'Pelajaran 4',
		prompt: 'Bagaimana harakat akhir kata yang didahului huruf jar (seperti فِي الْبَيْتِ)?',
		options: [
			{ text: 'Kasrah / berbunyi -i (keadaan Majrūr)' },
			{ text: 'Dhammah / berbunyi -u (keadaan Marfūʿ)' },
			{ text: 'Fathah / berbunyi -a (keadaan Manshūb)' },
			{ text: 'Sukun (mati)' }
		],
		correctIndex: 0,
		explanation:
			'Huruf jar (seperti فِي, عَلَى, مِنْ, إِلَى) mengubah harakat akhir kata benda menjadi kasrah (-i/-in), yang dinamakan keadaan majrūr.'
	},
	{
		id: 'q-l4-2',
		lessonId: 'lesson-4',
		lessonLabel: 'Pelajaran 4',
		prompt: 'Apa arti kalimat tanya dan jawaban berikut?',
		arabicPrompt: 'أَيْنَ الْكِتَابُ؟ — هُوَ عَلَى الْمَكْتَبِ.',
		options: [
			{ text: 'Di mana buku itu? — Buku itu di atas meja.' },
			{ text: 'Di mana pena itu? — Pena itu di dalam tas.' },
			{ text: 'Siapa di atas meja? — Hamid di atas ranjang.' },
			{ text: 'Apakah itu buku? — Ya, buku di kamar.' }
		],
		correctIndex: 0,
		explanation:
			'أَيْنَ (di mana) + الْكِتَابُ (buku itu). هُوَ (dia mudzakkar / kata ganti buku) + عَلَى الْمَكْتَبِ (di atas meja).'
	},
	{
		id: 'q-l4-3',
		lessonId: 'lesson-4',
		lessonLabel: 'Pelajaran 4',
		prompt: 'Lengkapi kalimat berikut dengan kata ganti orang yang tepat:',
		arabicPrompt: 'أَيْنَ السَّاعَةُ؟ — ... عَلَى السَّرِيرِ.',
		options: [
			{ text: 'هِيَ', isArabic: true },
			{ text: 'هُوَ', isArabic: true },
			{ text: 'أَنْتَ', isArabic: true },
			{ text: 'هَذَا', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'السَّاعَةُ (jam) berakhiran ta marbuthah (ة) sehingga berjenis muannats, maka kata ganti yang tepat adalah هِيَ (dia muannats).'
	},
	{
		id: 'q-l4-4',
		lessonId: 'lesson-4',
		lessonLabel: 'Pelajaran 4',
		prompt: 'Manakah bentuk harakat yang benar ketika kata مِنْ bertemu dengan kata ber-alif lam?',
		options: [
			{ text: 'مِنَ الْفَصْلِ', isArabic: true },
			{ text: 'مِنْ الْفَصْلِ', isArabic: true },
			{ text: 'مِنُ الْفَصْلِ', isArabic: true },
			{ text: 'مِنِ الْفَصْلُ', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'Huruf nun pada مِنْ diubah berharakat fathah (مِنَ / mina) saat bertemu kata berawalan alif lam untuk menghindari bertemunya dua huruf sukun (mati).'
	},
	{
		id: 'q-l4-5',
		lessonId: 'lesson-4',
		lessonLabel: 'Pelajaran 4',
		prompt: 'Terjemahkan: "Hamid keluar dari kelas dan pergi ke kantor kepala sekolah."',
		options: [
			{ text: 'خَرَجَ حَامِدٌ مِنَ الْفَصْلِ وَذَهَبَ إِلَى الْمُدِيرِ.', isArabic: true },
			{ text: 'ذَهَبَ حَامِدٌ مِنَ الْمُدِيرِ وَخَرَجَ إِلَى الْفَصْلِ.', isArabic: true },
			{ text: 'خَرَجَ حَامِدٌ فِي الْفَصْلِ وَذَهَبَ عَلَى الْمُدِيرِ.', isArabic: true },
			{ text: 'جَلَسَ حَامِدٌ فِي الْفَصْلِ مَعَ الْمُدِيرِ.', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'خَرَجَ (dia keluar) + حَامِدٌ + مِنَ الْفَصْلِ (dari kelas) + وَذَهَبَ (dan pergi) + إِلَى الْمُدِيرِ (ke kepala sekolah).'
	},
	// --- Pelajaran 5 ---
	{
		id: 'q-l5-1',
		lessonId: 'lesson-5',
		lessonLabel: 'Pelajaran 5',
		prompt: 'Manakah kaidah yang BENAR untuk kata pertama (Mudhāf) dalam susunan Idhafah (kepemilikan)?',
		options: [
			{ text: 'Tidak boleh berawalan ال dan tidak boleh bertanwīn' },
			{ text: 'Harus berawalan ال dan berharakat kasrah' },
			{ text: 'Harus selalu bertanwīn kasrah (-in)' },
			{ text: 'Boleh berawalan ال asalkan bertanwīn' }
		],
		correctIndex: 0,
		explanation:
			'Mudhāf (kata yang dimiliki) tidak boleh bertanwīn dan tidak boleh memakai awalan ال (contoh: كِتَابُ مُحَمَّدٍ).'
	},
	{
		id: 'q-l5-2',
		lessonId: 'lesson-5',
		lessonLabel: 'Pelajaran 5',
		prompt: 'Apa harakat akhir dari kata kedua (Mudhāf Ilaih / pemilik) pada frasa berikut?',
		arabicPrompt: 'قَلَمُ الْمُدَرِّسِ',
		options: [
			{ text: 'Selalu kasrah / majrūr (-i atau -in)' },
			{ text: 'Selalu dhammah (-u atau -un)' },
			{ text: 'Selalu fathah (-a)' },
			{ text: 'Bebas sesuai keinginan pembicara' }
		],
		correctIndex: 0,
		explanation:
			'Mudhāf Ilaih (pemilik) selalu dalam keadaan majrūr (berharakat kasrah -i atau -in, seperti الْمُدَرِّسِ atau مُحَمَّدٍ).'
	},
	{
		id: 'q-l5-3',
		lessonId: 'lesson-5',
		lessonLabel: 'Pelajaran 5',
		prompt: 'Bagaimana menanyakan "Buku siapa ini?" dalam bahasa Arab?',
		options: [
			{ text: 'كِتَابُ مَنْ هَذَا؟', isArabic: true },
			{ text: 'مَا كِتَابُ هَذَا؟', isArabic: true },
			{ text: 'مَنْ هَذَا الْكِتَابُ؟', isArabic: true },
			{ text: 'أَيْنَ كِتَابٌ هَذَا؟', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'Pertanyaan kepemilikan menggunakan kata benda sebagai mudhāf diikuti kata tanya مَنْ (man): كِتَابُ مَنْ هَذَا؟ (Buku milik siapa ini?).'
	},
	{
		id: 'q-l5-4',
		lessonId: 'lesson-5',
		lessonLabel: 'Pelajaran 5',
		prompt: 'Ketika nama diawali partikel seruan يَا (wahai), apakah yang terjadi pada tanwīn nama tersebut?',
		arabicPrompt: 'يَا عَلِيُّ (dari عَلِيٌّ)',
		options: [
			{ text: 'Tanwīn gugur dan digantikan dengan dhammah tunggal (-u)' },
			{ text: 'Tanwīn berubah menjadi kasrah (-i)' },
			{ text: 'Tanwīn tetap ada tanpa perubahan' },
			{ text: 'Ditambahkan huruf alif di belakang nama' }
		],
		correctIndex: 0,
		explanation:
			'Setelah partikel panggilan يَا, kata nama tidak boleh bertanwīn (berharakat dhammah tunggal: يَا عَلِيُّ, bukan يَا عَلِيٌّ).'
	},
	{
		id: 'q-l5-5',
		lessonId: 'lesson-5',
		lessonLabel: 'Pelajaran 5',
		prompt: 'Apa arti kalimat berikut?',
		arabicPrompt: 'سَيَّارَةُ الْمُدِيرِ فِي الشَّارِعِ، وَحَقِيبَتُهُ تَحْتَ الْمَكْتَبِ.',
		options: [
			{ text: 'Mobil kepala sekolah di jalan raya, dan tasnya di bawah meja.' },
			{ text: 'Mobil guru di garasi, dan bukunya di atas meja.' },
			{ text: 'Paman kepala sekolah di jalan, dan anaknya di dalam kelas.' },
			{ text: 'Rumah kepala sekolah di kota, dan mobilnya di depan pintu.' }
		],
		correctIndex: 0,
		explanation:
			'سَيَّارَةُ الْمُدِيرِ (mobil kepala sekolah), فِي الشَّارِعِ (di jalan raya), dan تَحْتَ الْمَكْتَبِ (di bawah meja).'
	},
	// --- Pelajaran 6 ---
	{
		id: 'q-l6-1',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt: 'Kata tunjuk apa yang digunakan untuk benda atau orang dekat yang berjenis muannats (perempuan)?',
		options: [
			{ text: 'هَذِهِ', isArabic: true },
			{ text: 'هَذَا', isArabic: true },
			{ text: 'ذَلِكَ', isArabic: true },
			{ text: 'هُوَ', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'هَذِهِ (hādhihi) adalah kata tunjuk tunggal untuk muannats (perempuan) jarak dekat, sedangkan هَذَا untuk mudzakkar (laki-laki).'
	},
	{
		id: 'q-l6-2',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt: 'Manakah anggota tubuh yang diperlakukan sebagai MUANNATS dalam bahasa Arab?',
		options: [
			{ text: 'Anggota tubuh yang berpasangan (seperti عَيْنٌ / mata dan يَدٌ / tangan)' },
			{ text: 'Anggota tubuh tunggal (seperti أَنْفٌ / hidung dan فَمٌ / mulut)' },
			{ text: 'Semua anggota tubuh manusia tanpa terkecuali' },
			{ text: 'Hanya rambut dan gigi' }
		],
		correctIndex: 0,
		explanation:
			'Dalam kaidah bahasa Arab, anggota tubuh yang berpasangan (mata, telinga, tangan, kaki) dihukumi muannats (هَذِهِ عَيْنٌ, هَذِهِ يَدٌ), sedangkan yang tunggal adalah mudzakkar (هَذَا أَنْفٌ).'
	},
	{
		id: 'q-l6-3',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt: 'Manakah tanda muannats yang paling umum pada akhir sebuah kata benda?',
		options: [
			{ text: 'Ta marbuthah (ـة / ة)' },
			{ text: 'Alif maqsūrah saja' },
			{ text: 'Tanwīn kasrah' },
			{ text: 'Huruf nun mati' }
		],
		correctIndex: 0,
		explanation:
			'Tanda muannats yang paling umum dan mudah dikenali adalah ta marbuthah (ـة / ة), seperti pada سَيَّارَةٌ (mobil), سَاعَةٌ (jam), dan مِلْعَقَةٌ (sendok).'
	},
	{
		id: 'q-l6-4',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt: 'Bagaimana penyesuaian kata sifat untuk subjek muannats pada kalimat: "Kopi itu dingin dan teh itu panas"?',
		options: [
			{ text: 'الْقَهْوَةُ بَارِدَةٌ وَالشَّايُ حَارٌّ.', isArabic: true },
			{ text: 'الْقَهْوَةُ بَارِدٌ وَالشَّايُ حَارَّةٌ.', isArabic: true },
			{ text: 'الْقَهْوَةُ بَارِدٌ وَالشَّايُ حَارٌّ.', isArabic: true },
			{ text: 'الْقَهْوَةُ بَارِدَةٌ وَالشَّايُ حَارَّةٌ.', isArabic: true }
		],
		correctIndex: 0,
		explanation:
			'الْقَهْوَةُ muannats sehingga sifatnya berakhiran ta marbuthah (بَارِدَةٌ), sedangkan الشَّايُ mudzakkar sehingga sifatnya (حَارٌّ) tanpa ta marbuthah.'
	},
	{
		id: 'q-l6-5',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt: 'Apa fungsi partikel jar لِـ pada kalimat "هَذِهِ لِخَالِدٍ"?',
		options: [
			{ text: 'Menyatakan kepemilikan ("Ini milik Khalid")' },
			{ text: 'Menyatakan tempat ("Ini di rumah Khalid")' },
			{ text: 'Menyatakan asal ("Ini dari Khalid")' },
			{ text: 'Menyatakan perbandingan ("Ini seperti Khalid")' }
		],
		correctIndex: 0,
		explanation:
			'Huruf jar لِـ (li-) bermakna kepemilikan ("milik / kepunyaan"), dan kata benda setelahnya menjadi kasrah/majrūr (لِخَالِدٍ).'
	}
];
