export interface QuizQuestion {
	id: string;
	lessonId:
		| 'lesson-1'
		| 'lesson-2'
		| 'lesson-3'
		| 'lesson-4'
		| 'lesson-5'
		| 'lesson-6'
		| 'lesson-7'
		| 'lesson-8'
		| 'lesson-9'
		| 'lesson-10';
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
			{
				text: 'Ini adalah sebuah meja tulis'
			},
			{
				text: 'Ini adalah sebuah kunci'
			},
			{
				text: 'Itu adalah sebuah pintu'
			},
			{
				text: 'Ini adalah sebuah buku'
			}
		],
		correctIndex: 1,
		explanation: 'هَذَا (hādhā) berarti "ini" dan مِفْتَاحٌ (miftāḥun) berarti "sebuah kunci".'
	},
	{
		id: 'q-l1-2',
		lessonId: 'lesson-1',
		lessonLabel: 'Pelajaran 1',
		prompt:
			'Kata tanya mana yang tepat untuk menanyakan objek/benda yang tidak berakal ("Apa ini?")?',
		options: [
			{
				text: 'مَا هَذَا؟',
				isArabic: true
			},
			{
				text: 'مَنْ هَذَا؟',
				isArabic: true
			},
			{
				text: 'أَهَذَا؟',
				isArabic: true
			},
			{
				text: 'لَا هَذَا',
				isArabic: true
			}
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
			{
				text: 'مَا هَذَا',
				isArabic: true
			},
			{
				text: 'مَا ذَلِكَ',
				isArabic: true
			},
			{
				text: 'أَهَذَا بَيْتٌ',
				isArabic: true
			},
			{
				text: 'مَنْ هَذَا',
				isArabic: true
			}
		],
		correctIndex: 3,
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
			{
				text: 'مَا هَذَا بَيْتٌ؟',
				isArabic: true
			},
			{
				text: 'مَنْ هَذَا بَيْتٌ؟',
				isArabic: true
			},
			{
				text: 'أَهَذَا بَيْتٌ؟',
				isArabic: true
			},
			{
				text: 'نَعَمْ هَذَا بَيْتٌ؟',
				isArabic: true
			}
		],
		correctIndex: 2,
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
			{
				text: 'نَعَمْ، هَذَا سَرِيرٌ.',
				isArabic: true
			},
			{
				text: 'لَا، هَذَا كُرْسِيٌّ.',
				isArabic: true
			},
			{
				text: 'لَا، هَذَا مَكْتَبٌ.',
				isArabic: true
			},
			{
				text: 'نَعَمْ، هَذَا كُرْسِيٌّ.',
				isArabic: true
			}
		],
		correctIndex: 1,
		explanation: 'لَا (lā) berarti "tidak/bukan", dan كُرْسِيٌّ (kursiyyun) berarti "sebuah kursi".'
	},
	{
		id: 'q-l2-1',
		lessonId: 'lesson-2',
		lessonLabel: 'Pelajaran 2',
		prompt:
			'Kata tunjuk mana yang digunakan untuk menunjuk benda tunggal mudzakkar yang berada JAUH ("itu")?',
		options: [
			{
				text: 'ذَلِكَ',
				isArabic: true
			},
			{
				text: 'هَذَا',
				isArabic: true
			},
			{
				text: 'مَنْ',
				isArabic: true
			},
			{
				text: 'مَا',
				isArabic: true
			}
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
			{
				text: 'Ini adalah susu dan itu adalah gula.'
			},
			{
				text: 'Ini adalah batu dan itu adalah bintang.'
			},
			{
				text: 'Itu adalah gula dan ini adalah susu.'
			},
			{
				text: 'Ini adalah gula dan itu adalah susu.'
			}
		],
		correctIndex: 3,
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
			{
				text: 'ذَلِكَ مُدَرِّسٌ وَهَذَا إِمَامٌ.',
				isArabic: true
			},
			{
				text: 'هَذَا طَالِبٌ وَذَلِكَ طَبِيبٌ.',
				isArabic: true
			},
			{
				text: 'هَذَا مُدَرِّسٌ وَذَلِكَ إِمَامٌ.',
				isArabic: true
			},
			{
				text: 'هَذَا إِمَامٌ وَذَلِكَ تَاجِرٌ.',
				isArabic: true
			}
		],
		correctIndex: 2,
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
			{
				text: 'لَا، هَذَا كَلْبٌ.',
				isArabic: true
			},
			{
				text: 'لَا، ذَلِكَ قِطٌّ.',
				isArabic: true
			},
			{
				text: 'نَعَمْ، ذَلِكَ قِطٌّ.',
				isArabic: true
			},
			{
				text: 'لَا، ذَلِكَ حِصَانٌ.',
				isArabic: true
			}
		],
		correctIndex: 1,
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
			{
				text: 'Apa itu? — Itu adalah sebuah batu.'
			},
			{
				text: 'Siapa itu? — Itu adalah seorang imam.'
			},
			{
				text: 'Apa ini? — Ini adalah sebuah batu.'
			},
			{
				text: 'Apakah itu bintang? — Bukan, itu batu.'
			}
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
			{
				text: 'الْبَيْتٌ',
				isArabic: true
			},
			{
				text: 'بَيْتُ',
				isArabic: true
			},
			{
				text: 'أَبَيْتٌ',
				isArabic: true
			},
			{
				text: 'الْبَيْتُ',
				isArabic: true
			}
		],
		correctIndex: 3,
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
			{
				text: 'al-najmu (bunyi "l" tetap dibaca jelas)'
			},
			{
				text: 'an-najmun (dengan tanwīn di akhir)'
			},
			{
				text: 'an-najmu (bunyi "l" melebur ke huruf "n")'
			},
			{
				text: 'al-najmun'
			}
		],
		correctIndex: 2,
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
			{
				text: 'Pintu itu tertutup.'
			},
			{
				text: 'Pintu itu terbuka.'
			},
			{
				text: 'Pena itu patah.'
			},
			{
				text: 'Rumah itu dekat.'
			}
		],
		correctIndex: 1,
		explanation:
			'الْبَابُ (al-bābu) berarti "pintu itu" dan مَفْتُوحٌ (maftūḥun) berarti "terbuka" (sedangkan مُغْلَقٌ berarti tertutup).'
	},
	{
		id: 'q-l3-4',
		lessonId: 'lesson-3',
		lessonLabel: 'Pelajaran 3',
		prompt: 'Terjemahkan ke dalam bahasa Arab: "Batu itu berat dan kertas itu ringan."',
		options: [
			{
				text: 'الْحَجَرُ ثَقِيلٌ وَالْوَرَقُ خَفِيفٌ.',
				isArabic: true
			},
			{
				text: 'الْحَجَرُ خَفِيفٌ وَالْوَرَقُ ثَقِيلٌ.',
				isArabic: true
			},
			{
				text: 'الْحَجَرُ كَبِيرٌ وَالْوَرَقُ صَغِيرٌ.',
				isArabic: true
			},
			{
				text: 'حَجَرٌ ثَقِيلٌ وَوَرَقٌ خَفِيفٌ.',
				isArabic: true
			}
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
			{
				text: 'Anak laki-laki itu berdiri dan guru itu duduk.'
			},
			{
				text: 'Dokter itu tinggi dan guru itu pendek.'
			},
			{
				text: 'Pelajar itu sakit dan guru itu kaya.'
			},
			{
				text: 'Anak laki-laki itu duduk dan guru itu berdiri.'
			}
		],
		correctIndex: 3,
		explanation:
			'الْوَلَدُ (anak laki-laki itu) جَالِسٌ (duduk), وَالْمُدَرِّسُ (dan guru itu) وَاقِفٌ (berdiri).'
	},
	{
		id: 'q-l4-1',
		lessonId: 'lesson-4',
		lessonLabel: 'Pelajaran 4',
		prompt: 'Bagaimana harakat akhir kata yang didahului huruf jar (seperti فِي الْبَيْتِ)?',
		options: [
			{
				text: 'Dhammah / berbunyi -u (keadaan Marfūʿ)'
			},
			{
				text: 'Fathah / berbunyi -a (keadaan Manshūb)'
			},
			{
				text: 'Kasrah / berbunyi -i (keadaan Majrūr)'
			},
			{
				text: 'Sukun (mati)'
			}
		],
		correctIndex: 2,
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
			{
				text: 'Di mana pena itu? — Pena itu di dalam tas.'
			},
			{
				text: 'Di mana buku itu? — Buku itu di atas meja.'
			},
			{
				text: 'Siapa di atas meja? — Hamid di atas ranjang.'
			},
			{
				text: 'Apakah itu buku? — Ya, buku di kamar.'
			}
		],
		correctIndex: 1,
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
			{
				text: 'هِيَ',
				isArabic: true
			},
			{
				text: 'هُوَ',
				isArabic: true
			},
			{
				text: 'أَنْتَ',
				isArabic: true
			},
			{
				text: 'هَذَا',
				isArabic: true
			}
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
			{
				text: 'مِنْ الْفَصْلِ',
				isArabic: true
			},
			{
				text: 'مِنُ الْفَصْلِ',
				isArabic: true
			},
			{
				text: 'مِنِ الْفَصْلُ',
				isArabic: true
			},
			{
				text: 'مِنَ الْفَصْلِ',
				isArabic: true
			}
		],
		correctIndex: 3,
		explanation:
			'Huruf nun pada مِنْ diubah berharakat fathah (مِنَ / mina) saat bertemu kata berawalan alif lam untuk menghindari bertemunya dua huruf sukun (mati).'
	},
	{
		id: 'q-l4-5',
		lessonId: 'lesson-4',
		lessonLabel: 'Pelajaran 4',
		prompt: 'Terjemahkan: "Hamid keluar dari kelas dan pergi ke kantor kepala sekolah."',
		options: [
			{
				text: 'ذَهَبَ حَامِدٌ مِنَ الْمُدِيرِ وَخَرَجَ إِلَى الْفَصْلِ.',
				isArabic: true
			},
			{
				text: 'خَرَجَ حَامِدٌ فِي الْفَصْلِ وَذَهَبَ عَلَى الْمُدِيرِ.',
				isArabic: true
			},
			{
				text: 'خَرَجَ حَامِدٌ مِنَ الْفَصْلِ وَذَهَبَ إِلَى الْمُدِيرِ.',
				isArabic: true
			},
			{
				text: 'جَلَسَ حَامِدٌ فِي الْفَصْلِ مَعَ الْمُدِيرِ.',
				isArabic: true
			}
		],
		correctIndex: 2,
		explanation:
			'خَرَجَ (dia keluar) + حَامِدٌ + مِنَ الْفَصْلِ (dari kelas) + وَذَهَبَ (dan pergi) + إِلَى الْمُدِيرِ (ke kepala sekolah).'
	},
	{
		id: 'q-l5-1',
		lessonId: 'lesson-5',
		lessonLabel: 'Pelajaran 5',
		prompt:
			'Manakah kaidah yang BENAR untuk kata pertama (Mudhāf) dalam susunan Idhafah (kepemilikan)?',
		options: [
			{
				text: 'Harus berawalan ال dan berharakat kasrah'
			},
			{
				text: 'Tidak boleh berawalan ال dan tidak boleh bertanwīn'
			},
			{
				text: 'Harus selalu bertanwīn kasrah (-in)'
			},
			{
				text: 'Boleh berawalan ال asalkan bertanwīn'
			}
		],
		correctIndex: 1,
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
			{
				text: 'Selalu kasrah / majrūr (-i atau -in)'
			},
			{
				text: 'Selalu dhammah (-u atau -un)'
			},
			{
				text: 'Selalu fathah (-a)'
			},
			{
				text: 'Bebas sesuai keinginan pembicara'
			}
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
			{
				text: 'مَا كِتَابُ هَذَا؟',
				isArabic: true
			},
			{
				text: 'مَنْ هَذَا الْكِتَابُ؟',
				isArabic: true
			},
			{
				text: 'أَيْنَ كِتَابٌ هَذَا؟',
				isArabic: true
			},
			{
				text: 'كِتَابُ مَنْ هَذَا؟',
				isArabic: true
			}
		],
		correctIndex: 3,
		explanation:
			'Pertanyaan kepemilikan menggunakan kata benda sebagai mudhāf diikuti kata tanya مَنْ (man): كِتَابُ مَنْ هَذَا؟ (Buku milik siapa ini?).'
	},
	{
		id: 'q-l5-4',
		lessonId: 'lesson-5',
		lessonLabel: 'Pelajaran 5',
		prompt:
			'Ketika nama diawali partikel seruan يَا (wahai), apakah yang terjadi pada tanwīn nama tersebut?',
		arabicPrompt: 'يَا عَلِيُّ (dari عَلِيٌّ)',
		options: [
			{
				text: 'Tanwīn berubah menjadi kasrah (-i)'
			},
			{
				text: 'Tanwīn tetap ada tanpa perubahan'
			},
			{
				text: 'Tanwīn gugur dan digantikan dengan dhammah tunggal (-u)'
			},
			{
				text: 'Ditambahkan huruf alif di belakang nama'
			}
		],
		correctIndex: 2,
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
			{
				text: 'Mobil guru di garasi, dan bukunya di atas meja.'
			},
			{
				text: 'Mobil kepala sekolah di jalan raya, dan tasnya di bawah meja.'
			},
			{
				text: 'Paman kepala sekolah di jalan, dan anaknya di dalam kelas.'
			},
			{
				text: 'Rumah kepala sekolah di kota, dan mobilnya di depan pintu.'
			}
		],
		correctIndex: 1,
		explanation:
			'سَيَّارَةُ الْمُدِيرِ (mobil kepala sekolah), فِي الشَّارِعِ (di jalan raya), dan تَحْتَ الْمَكْتَبِ (di bawah meja).'
	},
	{
		id: 'q-l6-1',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt:
			'Kata tunjuk apa yang digunakan untuk benda atau orang dekat yang berjenis muannats (perempuan)?',
		options: [
			{
				text: 'هَذِهِ',
				isArabic: true
			},
			{
				text: 'هَذَا',
				isArabic: true
			},
			{
				text: 'ذَلِكَ',
				isArabic: true
			},
			{
				text: 'هُوَ',
				isArabic: true
			}
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
			{
				text: 'Anggota tubuh tunggal (seperti أَنْفٌ / hidung dan فَمٌ / mulut)'
			},
			{
				text: 'Semua anggota tubuh manusia tanpa terkecuali'
			},
			{
				text: 'Hanya rambut dan gigi'
			},
			{
				text: 'Anggota tubuh yang berpasangan (seperti عَيْنٌ / mata dan يَدٌ / tangan)'
			}
		],
		correctIndex: 3,
		explanation:
			'Dalam kaidah bahasa Arab, anggota tubuh yang berpasangan (mata, telinga, tangan, kaki) dihukumi muannats (هَذِهِ عَيْنٌ, هَذِهِ يَدٌ), sedangkan yang tunggal adalah mudzakkar (هَذَا أَنْفٌ).'
	},
	{
		id: 'q-l6-3',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt: 'Manakah tanda muannats yang paling umum pada akhir sebuah kata benda?',
		options: [
			{
				text: 'Alif maqsūrah saja'
			},
			{
				text: 'Tanwīn kasrah'
			},
			{
				text: 'Ta marbuthah (ـة / ة)'
			},
			{
				text: 'Huruf nun mati'
			}
		],
		correctIndex: 2,
		explanation:
			'Tanda muannats yang paling umum dan mudah dikenali adalah ta marbuthah (ـة / ة), seperti pada سَيَّارَةٌ (mobil), سَاعَةٌ (jam), dan مِلْعَقَةٌ (sendok).'
	},
	{
		id: 'q-l6-4',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt:
			'Bagaimana penyesuaian kata sifat untuk subjek muannats pada kalimat: "Kopi itu dingin dan teh itu panas"?',
		options: [
			{
				text: 'الْقَهْوَةُ بَارِدٌ وَالشَّايُ حَارَّةٌ.',
				isArabic: true
			},
			{
				text: 'الْقَهْوَةُ بَارِدَةٌ وَالشَّايُ حَارٌّ.',
				isArabic: true
			},
			{
				text: 'الْقَهْوَةُ بَارِدٌ وَالشَّايُ حَارٌّ.',
				isArabic: true
			},
			{
				text: 'الْقَهْوَةُ بَارِدَةٌ وَالشَّايُ حَارَّةٌ.',
				isArabic: true
			}
		],
		correctIndex: 1,
		explanation:
			'الْقَهْوَةُ muannats sehingga sifatnya berakhiran ta marbuthah (بَارِدَةٌ), sedangkan الشَّايُ mudzakkar sehingga sifatnya (حَارٌّ) tanpa ta marbuthah.'
	},
	{
		id: 'q-l6-5',
		lessonId: 'lesson-6',
		lessonLabel: 'Pelajaran 6',
		prompt: 'Apa fungsi partikel jar لِـ pada kalimat "هَذِهِ لِخَالِدٍ"?',
		options: [
			{
				text: 'Menyatakan kepemilikan ("Ini milik Khalid")'
			},
			{
				text: 'Menyatakan tempat ("Ini di rumah Khalid")'
			},
			{
				text: 'Menyatakan asal ("Ini dari Khalid")'
			},
			{
				text: 'Menyatakan perbandingan ("Ini seperti Khalid")'
			}
		],
		correctIndex: 0,
		explanation:
			'Huruf jar لِـ (li-) bermakna kepemilikan ("milik / kepunyaan"), dan kata benda setelahnya menjadi kasrah/majrūr (لِخَالِدٍ).'
	},
	{
		id: 'q-l7-1',
		lessonId: 'lesson-7',
		lessonLabel: 'Pelajaran 7',
		prompt: 'Kapan kata tunjuk "تِلْكَ" (tilka) digunakan?',
		options: [
			{
				text: 'Menunjuk benda/orang mudzakkar (maskulin) yang letaknya jauh'
			},
			{
				text: 'Menunjuk benda/orang muannats yang letaknya dekat ("ini")'
			},
			{
				text: 'Menunjuk jamak benda yang letaknya dekat'
			},
			{
				text: 'Menunjuk benda/orang muannats (feminin) yang letaknya jauh ("itu")'
			}
		],
		correctIndex: 3,
		explanation:
			'تِلْكَ (tilka) adalah isim isyārah untuk muannats tunggal jarak jauh ("itu"), berpasangan dengan هَذِهِ (dekat) dan lawan dari ذَلِكَ (mudzakkar jauh).'
	},
	{
		id: 'q-l7-2',
		lessonId: 'lesson-7',
		lessonLabel: 'Pelajaran 7',
		prompt:
			'Lengkapilah kalimat berikut dengan kata tunjuk jauh yang tepat: "___ طَبِيبٌ وَ___ طَبِيبَةٌ."',
		options: [
			{
				text: 'تِلْكَ / ذَلِكَ'
			},
			{
				text: 'هَذَا / هَذِهِ'
			},
			{
				text: 'ذَلِكَ / تِلْكَ'
			},
			{
				text: 'تِلْكَ / تِلْكَ'
			}
		],
		correctIndex: 2,
		explanation:
			'طَبِيبٌ adalah mudzakkar sehingga menggunakan ذَلِكَ, sedangkan طَبِيبَةٌ adalah muannats (berakhiran ta marbuthah) sehingga menggunakan تِلْكَ.'
	},
	{
		id: 'q-l7-3',
		lessonId: 'lesson-7',
		lessonLabel: 'Pelajaran 7',
		prompt: 'Apa arti dari kalimat berikut?',
		arabicPrompt: 'هَذِهِ بَطَّةٌ وَتِلْكَ دَجَاجَةٌ.',
		options: [
			{
				text: 'Ini ayam betina dan itu bebek.'
			},
			{
				text: 'Ini bebek dan itu ayam betina.'
			},
			{
				text: 'Itu bebek dan ini telur.'
			},
			{
				text: 'Ini perawat dan itu dokter wanita.'
			}
		],
		correctIndex: 1,
		explanation:
			'بَطَّةٌ artinya bebek dan دَجَاجَةٌ artinya ayam betina. Keduanya muannats sehingga memakai هَذِهِ (ini) dan تِلْكَ (itu).'
	},
	{
		id: 'q-l7-4',
		lessonId: 'lesson-7',
		lessonLabel: 'Pelajaran 7',
		prompt: 'Manakah susunan idhāfah (kepemilikan) yang tepat untuk "Itu adalah telur bebek"?',
		options: [
			{
				text: 'تِلْكَ بَيْضَةُ الْبَطَّةِ.',
				isArabic: true
			},
			{
				text: 'تِلْكَ الْبَيْضَةُ بَطَّةٌ.',
				isArabic: true
			},
			{
				text: 'ذَلِكَ بَيْضَةُ الْبَطَّةِ.',
				isArabic: true
			},
			{
				text: 'تِلْكَ بَيْضَةٌ بَطَّةٌ.',
				isArabic: true
			}
		],
		correctIndex: 0,
		explanation:
			'تِلْكَ (karena بَيْضَةٌ muannats), mudhāf بَيْضَةُ (tanpa tanwīn/al), dan mudhāf ilaih الْبَطَّةِ (kasrah): "تِلْكَ بَيْضَةُ الْبَطَّةِ".'
	},
	{
		id: 'q-l7-5',
		lessonId: 'lesson-7',
		lessonLabel: 'Pelajaran 7',
		prompt: 'Apa arti dari kata "نَاقَةٌ" pada kalimat "تِلْكَ نَاقَةُ الْمُؤَذِّنِ"?',
		options: [
			{
				text: 'Unta jantan'
			},
			{
				text: 'Kuda betina'
			},
			{
				text: 'Sapi betina'
			},
			{
				text: 'Unta betina'
			}
		],
		correctIndex: 3,
		explanation:
			'نَاقَةٌ (nāqatun) khusus bermakna unta betina (muannats), sedangkan unta jantan secara umum disebut جَمَلٌ (jamalun).'
	},
	{
		id: 'q-l8-1',
		lessonId: 'lesson-8',
		lessonLabel: 'Pelajaran 8',
		prompt: 'Apa perbedaan struktur dan makna antara "هَذَا كِتَابٌ" dan "هَذَا الْكِتَابُ"?',
		options: [
			{
				text: '"هَذَا كِتَابٌ" adalah frasa belum lengkap, sedangkan "هَذَا الْكِتَابُ" adalah kalimat berita lengkap.'
			},
			{
				text: 'Keduanya memiliki arti dan struktur tata bahasa yang persis sama.'
			},
			{
				text: '"هَذَا كِتَابٌ" adalah kalimat lengkap ("Ini adalah sebuah buku"), sedangkan "هَذَا الْكِتَابُ" adalah frasa ("Buku ini...").'
			},
			{
				text: '"هَذَا الْكِتَابُ" bermakna kepemilikan ("Buku milik ini").'
			}
		],
		correctIndex: 2,
		explanation:
			'Jika isim isyārah diikuti isim ber-al (الْكِتَابُ), ia menjadi Badal (frasa kata tunjuk "Buku ini..."). Jika diikuti isim nakirah bertanwīn (كِتَابٌ), ia menjadi Mubtada + Khabar (kalimat sempurna "Ini adalah buku").'
	},
	{
		id: 'q-l8-2',
		lessonId: 'lesson-8',
		lessonLabel: 'Pelajaran 8',
		prompt: 'Pada kalimat "هَذَا الرَّجُلُ تَاجِرٌ", apakah kedudukan kata "تَاجِرٌ"?',
		arabicPrompt: 'هَذَا الرَّجُلُ تَاجِرٌ.',
		options: [
			{
				text: 'Mubtada (subjek kalimat)'
			},
			{
				text: 'Khabar (predikat kalimat)'
			},
			{
				text: 'Badal (pengganti kata tunjuk)'
			},
			{
				text: 'Mudhāf ilaih'
			}
		],
		correctIndex: 1,
		explanation:
			'هَذَا adalah mubtada, الرَّجُلُ adalah badal (pelengkap subjek "Lelaki ini"), dan تَاجِرٌ adalah khabar ("adalah seorang pedagang").'
	},
	{
		id: 'q-l8-3',
		lessonId: 'lesson-8',
		lessonLabel: 'Pelajaran 8',
		prompt:
			'Bagaimana harakat akhir kata nama negara seperti "أَمْرِيكَا" (Amerika) saat didahului huruf jar "مِنْ"?',
		options: [
			{
				text: 'Tetap berakhiran alif tanpa kasrah yang tampak (harakat muqaddarah)'
			},
			{
				text: 'Harus diubah berharakat kasrah di bawah alif'
			},
			{
				text: 'Diberi tanwīn kasrah di akhir'
			},
			{
				text: 'Huruf alif di akhir harus dihapus'
			}
		],
		correctIndex: 0,
		explanation:
			'Kata yang berakhiran alif panjang/maqsūrah (seperti أَمْرِيكَا، أَلْمَانِيَا، سْوِيسْرَا، عِيسَى) harakatnya muqaddarah (tersembunyi/tidak berubah tampak) saat majrūr: "مِنْ أَمْرِيكَا".'
	},
	{
		id: 'q-l8-4',
		lessonId: 'lesson-8',
		lessonLabel: 'Pelajaran 8',
		prompt:
			'Kata benda yang terletak langsung setelah zharaf tempat "أَمَامَ" (di depan) atau "خَلْفَ" (di belakang) berharakat apa?',
		options: [
			{
				text: "Dhammah / marfū'"
			},
			{
				text: 'Fathah / manshūb'
			},
			{
				text: 'Sukun'
			},
			{
				text: 'Kasrah / majrūr (sebagai mudhāf ilaih)'
			}
		],
		correctIndex: 3,
		explanation:
			'Zharaf makan (seperti أَمَامَ dan خَلْفَ) bertindak sebagai mudhāf, sehingga kata benda sesudahnya menjadi mudhāf ilaih yang berharakat kasrah: "أَمَامَ الْمَسْجِدِ" dan "خَلْفَ الْمَدْرَسَةِ".'
	},
	{
		id: 'q-l8-5',
		lessonId: 'lesson-8',
		lessonLabel: 'Pelajaran 8',
		prompt:
			'Terjemahkan ke dalam bahasa Arab: "Mobil ini milik dokter itu dan mobil itu milik guru."',
		options: [
			{
				text: 'هَذَا السَّيَّارَةُ لِلطَّبِيبِ وَذَلِكَ لِلْمُدَرِّسِ.',
				isArabic: true
			},
			{
				text: 'تِلْكَ السَّيَّارَةُ لِلطَّبِيبِ وَهَذِهِ لِلْمُدَرِّسِ.',
				isArabic: true
			},
			{
				text: 'هَذِهِ السَّيَّارَةُ لِلطَّبِيبِ وَتِلْكَ لِلْمُدَرِّسِ.',
				isArabic: true
			},
			{
				text: 'هَذِهِ سَيَّارَةُ الطَّبِيبِ وَتِلْكَ لِلْمُدَرِّسِ.',
				isArabic: true
			}
		],
		correctIndex: 2,
		explanation:
			'السَّيَّارَةُ muannats sehingga menggunakan هَذِهِ (ini) dan تِلْكَ (itu). Partikel kepemilikan لِـ bersambung menjadi لِلطَّبِيبِ dan لِلْمُدَرِّسِ.'
	},
	{
		id: 'q-l9-1',
		lessonId: 'lesson-9',
		lessonLabel: 'Pelajaran 9',
		prompt:
			"Manakah pasangan kata yang menunjukkan hubungan Na'at dan Man'ut (kata sifat dan yang disifati) dengan benar?",
		options: [
			{
				text: 'طَالِبٌ الْجَدِيدُ',
				isArabic: true
			},
			{
				text: 'طَالِبٌ جَدِيدٌ (seorang murid yang baru)',
				isArabic: true
			},
			{
				text: 'الطَّالِبُ جَدِيدٌ (kalimat mubtada-khabar)',
				isArabic: true
			},
			{
				text: 'طَالِبُ جَدِيدٍ',
				isArabic: true
			}
		],
		correctIndex: 1,
		explanation:
			"Na'at harus mengikuti man'ut dalam kejelasan: jika nakirah, keduanya nakirah (طَالِبٌ جَدِيدٌ); jika ma'rifah, keduanya ma'rifah (الطَّالِبُ الْجَدِيدُ)."
	},
	{
		id: 'q-l9-2',
		lessonId: 'lesson-9',
		lessonLabel: 'Pelajaran 9',
		prompt:
			'Bagaimana penulisan harakat akhir yang benar untuk kata sifat bertimbangan fa\'lānu (فَعْلاَنُ) seperti "جَوْعَانُ" (lapar) dan "عَطْشَانُ" (haus)?',
		options: [
			{
				text: "Berharakat dhammah tunggal tanpa tanwīn (mamnū' min ash-sharf)"
			},
			{
				text: 'Harus selalu memakai tanwīn dhammah (-un)'
			},
			{
				text: 'Harus selalu memakai tanwīn fathah (-an)'
			},
			{
				text: 'Diakhiri dengan huruf ya sukun'
			}
		],
		correctIndex: 0,
		explanation:
			"Kata sifat dengan wazan فَعْلاَنُ (seperti جَوْعَانُ, عَطْشَانُ, غَضْبَانُ, شَبْعَانُ, كَسْلاَنُ) termasuk mamnū' min ash-sharf, sehingga tidak boleh bertanwīn."
	},
	{
		id: 'q-l9-3',
		lessonId: 'lesson-9',
		lessonLabel: 'Pelajaran 9',
		prompt: 'Apa fungsi dari kata "الَّذِي" (alladzī) dalam tata bahasa Arab?',
		options: [
			{
				text: 'Kata tunjuk jauh yang berarti "itu"'
			},
			{
				text: 'Kata tanya yang berarti "apakah"'
			},
			{
				text: 'Huruf jar yang berarti "di dalam"'
			},
			{
				text: 'Kata sambung penghubung (isim maushūl) yang berarti "yang" untuk mudzakkar tunggal'
			}
		],
		correctIndex: 3,
		explanation:
			'الَّذِي adalah isim maushūl (kata ganti penghubung) maskulin tunggal, bermakna "yang", digunakan untuk menghubungkan kata benda sebelumnya dengan anak kalimat penjelas (shilah).'
	},
	{
		id: 'q-l9-4',
		lessonId: 'lesson-9',
		lessonLabel: 'Pelajaran 9',
		prompt:
			"Lengkapilah kalimat berikut agar menjadi frasa na'at-man'ut ma'rifah: \"الْبَيْتُ ___ كَبِيرٌ.\"",
		options: [
			{
				text: 'جَدِيدٌ (dengan tanwīn)',
				isArabic: true
			},
			{
				text: 'جَدِيدَةٌ (muannats)',
				isArabic: true
			},
			{
				text: 'الْجَدِيدُ (dengan al- dan dhammah tunggal)',
				isArabic: true
			},
			{
				text: 'الْجَدِيدِ (kasrah)',
				isArabic: true
			}
		],
		correctIndex: 2,
		explanation:
			"Karena man'ut adalah الْبَيْتُ (ma'rifah, mudzakkar, marfū'), maka sifatnya juga harus ma'rifah, mudzakkar, dan marfū': الْجَدِيدُ."
	},
	{
		id: 'q-l9-5',
		lessonId: 'lesson-9',
		lessonLabel: 'Pelajaran 9',
		prompt: 'Apa arti dari kalimat berikut?',
		arabicPrompt: 'مَنِ الْفَتَى الَّذِي خَرَجَ مِنْ بَيْتِكَ الآنَ؟',
		options: [
			{
				text: 'Siapakah laki-laki tua yang masuk ke rumahmu kemarin?'
			},
			{
				text: 'Siapakah pemuda yang keluar dari rumahmu barusan?'
			},
			{
				text: 'Di manakah anak laki-laki yang belajar di rumahmu?'
			},
			{
				text: 'Apakah pemuda itu keluar dari masjid barusan?'
			}
		],
		correctIndex: 1,
		explanation:
			'الْفَتَى artinya "pemuda", الَّذِي artinya "yang", خَرَجَ artinya "keluar", مِنْ بَيْتِكَ artinya "dari rumahmu", dan الآنَ artinya "sekarang / barusan".'
	},
	{
		id: 'q-l10-1',
		lessonId: 'lesson-10',
		lessonLabel: 'Pelajaran 10',
		prompt:
			'Manakah kata ganti sambung (dhamīr muttashil) yang tepat untuk menyatakan kepemilikan perempuan tunggal ghaibah ("-nya perempuan")?',
		options: [
			{
				text: 'ـهَا (-hā), contohnya: كِتَابُهَا'
			},
			{
				text: 'ـهُ (-hu), contohnya: كِتَابُهُ'
			},
			{
				text: 'ـكَ (-ka), contohnya: كِتَابُكَ'
			},
			{
				text: 'ـي (-ī), contohnya: كِتَابِي'
			}
		],
		correctIndex: 0,
		explanation:
			'Dhamīr muttashil untuk dia perempuan adalah ـهَا (contoh: اِسْمُهَا = namanya pr, كِتَابُهَا = bukunya pr). Sedangkan ـهُ untuk laki-laki, dan ـكَ untuk kamu (lk).'
	},
	{
		id: 'q-l10-2',
		lessonId: 'lesson-10',
		lessonLabel: 'Pelajaran 10',
		prompt:
			'Ketika kata "أَبٌ" (ayah) atau "أَخٌ" (saudara) disambung dengan dhamīr selain "aku" dalam keadaan marfū\', huruf apa yang ditambahkan?',
		options: [
			{
				text: 'Huruf alif (ا), contoh: أَبَاكَ'
			},
			{
				text: "Huruf yā' (ي), contoh: أَبِيكَ"
			},
			{
				text: 'Tidak ada huruf tambahan sama sekali'
			},
			{
				text: 'Huruf wāwu (و), contoh: أَبُوكَ dan أَخُوكَ'
			}
		],
		correctIndex: 3,
		explanation:
			"Termasuk Asmā'ul Khamsah: kata أَبٌ dan أَخٌ saat disandarkan ke dhamīr dalam marfū' menambahkan huruf wāwu: أَبُوكَ (ayahmu), أَخُوكَ (saudaramu), أَبُوهُ (ayahnya)."
	},
	{
		id: 'q-l10-3',
		lessonId: 'lesson-10',
		lessonLabel: 'Pelajaran 10',
		prompt: 'Bagaimana kaidah penggunaan ungkapan "عِنْدِي" dibandingkan dengan "لِي"?',
		options: [
			{
				text: '"عِنْدِي" khusus untuk manusia, sedangkan "لِي" khusus untuk benda mati.'
			},
			{
				text: '"لِي" hanya dipakai untuk kalimat tanya, sedangkan "عِنْدِي" untuk kalimat berita.'
			},
			{
				text: '"عِنْدِي" untuk barang fisik yang bisa terpisah/dipindahtangankan, sedangkan "لِي" untuk hubungan kekeluargaan/bagian tubuh.'
			},
			{
				text: 'Keduanya bebas ditukar tanpa perbedaan kaidah kebahasaan.'
			}
		],
		correctIndex: 2,
		explanation:
			'Untuk benda fisik yang dibawa/dimiliki dipakai عِنْدِي (عِنْدِي قَلَمٌ = saya punya pena), sedangkan untuk hubungan keluarga dipakai لِي (لِي أَخٌ = saya punya saudara laki-laki, tidak lazim mengatakan عِنْدِي أَخٌ).'
	},
	{
		id: 'q-l10-4',
		lessonId: 'lesson-10',
		lessonLabel: 'Pelajaran 10',
		prompt: 'Apa arti kata "مَعَ" (ma\'a) dan bagaimana harakat kata benda setelahnya?',
		options: [
			{
				text: 'Bermakna "dari", dan kata sesudahnya berharakat dhammah'
			},
			{
				text: 'Bermakna "bersama", dan kata sesudahnya berharakat kasrah / majrūr'
			},
			{
				text: 'Bermakna "di atas", dan kata sesudahnya berharakat fathah'
			},
			{
				text: 'Bermakna "untuk", dan kata sesudahnya sukun'
			}
		],
		correctIndex: 1,
		explanation:
			'مَعَ (ma\'a) adalah zharaf bermakna "bersama/beserta", dan kata setelahnya berkedudukan sebagai mudhāf ilaih sehingga berharakat kasrah: مَعَ الطَّبِيبِ (bersama dokter).'
	},
	{
		id: 'q-l10-5',
		lessonId: 'lesson-10',
		lessonLabel: 'Pelajaran 10',
		prompt:
			'Manakah bentuk kata kerja lampau (fi\'il mādhī) yang bermakna "Aku telah keluar dari kelas"?',
		options: [
			{
				text: 'خَرَجْتُ مِنَ الْفَصْلِ.',
				isArabic: true
			},
			{
				text: 'خَرَجْتَ مِنَ الْفَصْلِ.',
				isArabic: true
			},
			{
				text: 'خَرَجَ مِنَ الْفَصْلِ.',
				isArabic: true
			},
			{
				text: 'خَرَجَتْ مِنَ الْفَصْلِ.',
				isArabic: true
			}
		],
		correctIndex: 0,
		explanation:
			"Untuk dhomir aku (mutakallim), fi'il mādhī diakhiri ta fa'il dhammah (ـتُ): خَرَجْتُ (aku telah keluar). Sedangkan خَرَجْتَ artinya kamu (lk) keluar, dan خَرَجَ artinya dia (lk) keluar."
	}
];
