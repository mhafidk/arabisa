export interface Card {
	/** Stable id, used as the key for saved progress. Never reuse or rename. */
	id: string;
	/** Arabic with harakat (vowel marks) */
	ar: string;
	/** Latin transliteration */
	tr: string;
	/** Indonesian meaning */
	en: string;
}

export type DeckGroup = 'lesson' | 'topic';

export interface Deck {
	id: string;
	group: DeckGroup;
	title: string;
	titleAr: string;
	description: string;
	cards: Card[];
}

const deck = (
	id: string,
	group: DeckGroup,
	title: string,
	titleAr: string,
	description: string,
	cards: [ar: string, tr: string, en: string][]
): Deck => ({
	id,
	group,
	title,
	titleAr,
	description,
	cards: cards.map(([ar, tr, en], i) => ({ id: `${id}-${i + 1}`, ar, tr, en }))
});

export const decks: Deck[] = [
	// --- Dek per Pelajaran (Madina Arabic Reader) ---
	deck(
		'lesson-1',
		'lesson',
		'Pelajaran 1: هَذَا (Ini)',
		'الدَّرْسُ ١',
		'Semua kosakata Pelajaran 1: kata tunjuk, kata tanya, benda, orang, dan hewan',
		[
			['بَيْتٌ', 'baitu-n', 'rumah'],
			['مَسْجِدٌ', 'masjidu-n', 'masjid'],
			['بَابٌ', 'bābu-n', 'pintu'],
			['كِتَابٌ', 'kitābu-n', 'buku'],
			['قَلَمٌ', 'qalamu-n', 'pena'],
			['مِفْتَاحٌ', 'miftāḥu-n', 'kunci'],
			['مَكْتَبٌ', 'maktabu-n', 'meja tulis'],
			['سَرِيرٌ', 'sarīru-n', 'tempat tidur / ranjang'],
			['كُرْسِيٌّ', 'kursiyyu-n', 'kursi'],
			['قَمِيصٌ', 'qamīṣu-n', 'kemeja'],
			['نَجْمٌ', 'najmu-n', 'bintang'],
			['مِنْدِيلٌ', 'mindīlu-n', 'saputangan'],
			['طَبِيبٌ', 'ṭabību-n', 'dokter'],
			['وَلَدٌ', 'waladu-n', 'anak laki-laki'],
			['طَالِبٌ', 'ṭālibu-n', 'pelajar / mahasiswa'],
			['رَجُلٌ', 'rajulu-n', 'pria dewasa'],
			['تَاجِرٌ', 'tājiru-n', 'pedagang'],
			['مُدَرِّسٌ', 'mudarrisu-n', 'guru / pengajar'],
			['كَلْبٌ', 'kalbu-n', 'anjing'],
			['قِطٌّ', 'qiṭṭu-n', 'kucing'],
			['حِمَارٌ', 'ḥimāru-n', 'keledai'],
			['حِصَانٌ', 'ḥiṣānu-n', 'kuda'],
			['جَمَلٌ', 'jamalu-n', 'unta'],
			['دِيكٌ', 'dīku-n', 'ayam jantan'],
			['هَذَا', 'hādhā', 'ini (tunggal mudzakkar)'],
			['مَا', 'mā', 'apa (untuk benda/hewan)'],
			['مَنْ', 'man', 'siapa (untuk orang)'],
			['أَ', 'a', 'apakah (kata tanya ya/tidak)'],
			['نَعَمْ', 'naʿam', 'ya'],
			['لَا', 'lā', 'tidak / bukan']
		]
	),
	deck(
		'lesson-2',
		'lesson',
		'Pelajaran 2: ذَلِكَ & وَ',
		'الدَّرْسُ ٢',
		'Kata tunjuk jarak jauh (itu), kata hubung (dan), serta kosakata baru Pelajaran 2',
		[
			['ذَلِكَ', 'dhālika', 'itu (tunggal mudzakkar)'],
			['وَ', 'wa', 'dan'],
			['إِمَامٌ', 'imāmu-n', 'imam / pemimpin salat'],
			['حَجَرٌ', 'ḥajaru-n', 'batu'],
			['سُكَّرٌ', 'sukkaru-n', 'gula'],
			['لَبَنٌ', 'labanu-n', 'susu']
		]
	),
	deck(
		'lesson-3',
		'lesson',
		'Pelajaran 3: ال & Kata Sifat',
		'الدَّرْسُ ٣',
		'Kata benda berawalan ال (Qamariyyah & Syamsiyyah) dan 25 kata sifat dari Pelajaran 3',
		[
			['الْمَاءُ', 'al-māʾu', 'air itu'],
			['الْوَرَقُ', 'al-waraqu', 'kertas itu'],
			['التُّفَّاحُ', 'at-tuffāḥu', 'apel itu'],
			['الدُّكَّانُ', 'ad-dukkānu', 'toko itu'],
			['مَكْسُورٌ', 'maksūru-n', 'patah / rusak'],
			['مَفْتُوحٌ', 'maftūḥu-n', 'terbuka'],
			['مُغْلَقٌ', 'mughlaqu-n', 'tertutup / terkunci'],
			['جَدِيدٌ', 'jadīdu-n', 'baru'],
			['قَدِيمٌ', 'qadīmu-n', 'lama / tua (benda)'],
			['صَغِيرٌ', 'ṣaghīru-n', 'kecil'],
			['كَبِيرٌ', 'kabīru-n', 'besar'],
			['بَارِدٌ', 'bāridu-n', 'dingin'],
			['حَارٌّ', 'ḥārru-n', 'panas'],
			['جَالِسٌ', 'jālisu-n', 'duduk'],
			['وَاقِفٌ', 'wāqifu-n', 'berdiri'],
			['وَسِخٌ', 'wasikhu-n', 'kotor'],
			['نَظِيفٌ', 'naẓīfu-n', 'bersih'],
			['ثَقِيلٌ', 'thaqīlu-n', 'berat'],
			['خَفِيفٌ', 'khafīfu-n', 'ringan'],
			['قَرِيبٌ', 'qarību-n', 'dekat'],
			['بَعِيدٌ', 'baʿīdu-n', 'jauh'],
			['جَمِيلٌ', 'jamīlu-n', 'indah / bagus'],
			['حُلْوٌ', 'ḥulwu-n', 'manis'],
			['مَرِيضٌ', 'marīḍu-n', 'sakit'],
			['غَنِيٌّ', 'ghaniyyu-n', 'kaya'],
			['فَقِيرٌ', 'faqīru-n', 'miskin'],
			['طَوِيلٌ', 'ṭawīlu-n', 'tinggi / panjang'],
			['قَصِيرٌ', 'qaṣīru-n', 'pendek'],
			['لَذِيذٌ', 'ladhīdhu-n', 'lezat / enak'],
			['الْقَمَرُ', 'al-qamaru', 'bulan itu'],
			['الشَّمْسُ', 'asy-syamsu', 'matahari itu']
		]
	),
	deck(
		'lesson-4',
		'lesson',
		'Pelajaran 4: Huruf Jar & Kata Ganti',
		'الدَّرْسُ ٤',
		'Huruf jar (فِي, عَلَى, مِنْ, إِلَى), kata ganti (هُوَ, هِيَ, أَنَا, أَنْتَ), ruangan dan tempat',
		[
			['فِي', 'fī', 'di dalam'],
			['عَلَى', '\'alā', 'di atas'],
			['مِنْ', 'min', 'dari'],
			['إِلَى', 'ilā', 'ke / kepada'],
			['أَيْنَ', 'ayna', 'di mana / ke mana'],
			['هُوَ', 'huwa', 'dia (laki-laki / mudzakkar)'],
			['هِيَ', 'hiya', 'dia (perempuan / muannats)'],
			['أَنَا', 'anā', 'saya / aku'],
			['أَنْتَ', 'anta', 'kamu (laki-laki)'],
			['غُرْفَةٌ', 'ghurfatu-n', 'kamar / ruangan'],
			['حَمَّامٌ', 'ḥammāmu-n', 'kamar mandi'],
			['مَطْبَخٌ', 'maṭbakhu-n', 'dapur'],
			['فَصْلٌ', 'faṣlu-n', 'kelas / ruang kelas'],
			['مِرْحَاضٌ', 'mirḥāḍu-n', 'toilet / jamban'],
			['مَدْرَسَةٌ', 'madrasatu-n', 'sekolah / madrasah'],
			['جَامِعَةٌ', 'jāmi\'atu-n', 'universitas / perguruan tinggi'],
			['سُوقٌ', 'sūqu-n', 'pasar'],
			['سَمَاءٌ', 'samā\'u-n', 'langit'],
			['سَاعَةٌ', 'sā\'atu-n', 'jam / jam tangan'],
			['الْيَابَانُ', 'al-yābānu', 'Jepang'],
			['الصِّينُ', 'aṣ-ṣīnu', 'Cina'],
			['الْهِنْدُ', 'al-hindu', 'India'],
			['الْفِلِبِّينُ', 'al-filibbīnu', 'Filipina'],
			['مُدِيرٌ', 'mudīru-n', 'kepala sekolah / direktur'],
			['ذَهَبَ', 'dhahaba', 'dia telah pergi'],
			['خَرَجَ', 'kharaja', 'dia telah keluar']
		]
	),
	deck(
		'lesson-5',
		'lesson',
		'Pelajaran 5: الإِضَافَةُ (Kepemilikan)',
		'الدَّرْسُ ٥',
		'Frasa kepemilikan (Mudhāf & Mudhāf Ilaih), hubungan keluarga, benda, dan letak',
		[
			['رَسُولٌ', 'rasūlu-n', 'utusan / rasul'],
			['عَمٌّ', '\'ammu-n', 'paman (pihak ayah)'],
			['خَالٌ', 'khālu-n', 'paman (pihak ibu)'],
			['اِبْنٌ', 'ibnu-n', 'anak laki-laki'],
			['بِنْتٌ', 'bintu-n', 'anak perempuan'],
			['اِسْمٌ', 'ismu-n', 'nama'],
			['حَقِيبَةٌ', 'ḥaqībatu-n', 'tas / koper'],
			['سَيَّارَةٌ', 'sayyāratu-n', 'mobil'],
			['شَارِعٌ', 'syāri\'u-n', 'jalan raya'],
			['الْكَعْبَةُ', 'al-ka\'batu', 'Ka\'bah'],
			['تَحْتَ', 'taḥta', 'di bawah'],
			['هُنَا', 'hunā', 'di sini'],
			['هُنَاكَ', 'hunāka', 'di sana'],
			['لِمَنْ', 'liman', 'milik siapa'],
			['يَا', 'yā', 'wahai (kata seru)']
		]
	),
	deck(
		'lesson-6',
		'lesson',
		'Pelajaran 6: هَذِهِ & Muannats',
		'الدَّرْسُ ٦',
		'Kata tunjuk perempuan (هَذِهِ), anggota tubuh berpasangan, perabotan, dan huruf jar لِـ',
		[
			['هَذِهِ', 'hādhihi', 'ini (tunggal muannats)'],
			['أُمٌّ', 'ummu-n', 'ibu'],
			['فَلَّاحٌ', 'fallāḥu-n', 'petani'],
			['بَقَرَةٌ', 'baqaratu-n', 'sapi betina'],
			['دَجَاجَةٌ', 'dajājatu-n', 'ayam betina'],
			['قِدْرٌ', 'qidru-n', 'panci / kuali'],
			['مِلْعَقَةٌ', 'mil\'aqatu-n', 'sendok'],
			['دَرَّاجَةٌ', 'darrājatu-n', 'sepeda'],
			['مِكْوَاةٌ', 'mikwātu-n', 'setrika'],
			['ثَلَّاجَةٌ', 'thallājatu-n', 'kulkas / lemari es'],
			['نَافِذَةٌ', 'nāfidhatu-n', 'jendela'],
			['شَايٌ', 'syāyu-n', 'teh'],
			['قَهْوَةٌ', 'qahwatu-n', 'kopi'],
			['فَمٌ', 'famu-n', 'mulut'],
			['أَنْفٌ', 'anfu-n', 'hidung'],
			['عَيْنٌ', '\'aynu-n', 'mata'],
			['أُذُنٌ', 'udhunu-n', 'telinga'],
			['يَدٌ', 'yadu-n', 'tangan'],
			['رِجْلٌ', 'rijlu-n', 'kaki'],
			['سَرِيعٌ', 'sarī\'u-n', 'cepat'],
			['جَمِيلَةٌ', 'jamīlatu-n', 'cantik / indah (muannats)'],
			['أَيْضًا', 'ayḍan', 'juga'],
			['جِدًّا', 'jiddan', 'sangat / sekali'],
			['لِـ', 'li-', 'milik / untuk']
		]
	),
	deck(
		'lesson-7',
		'lesson',
		'Pelajaran 7: تِلْكَ (Itu - Perempuan)',
		'الدَّرْسُ ٧',
		'Kata tunjuk jauh perempuan (تِلْكَ), profesi wanita, hewan, dan benda muannats',
		[
			['تِلْكَ', 'tilka', 'itu (tunggal muannats)'],
			['مُمَرِّضَةٌ', 'mumarriḍatu-n', 'perawat perempuan'],
			['مُؤَذِّنٌ', 'muʾadhdhinu-n', 'muazin / pengumandang azan'],
			['بَطَّةٌ', 'baṭṭatu-n', 'bebek / itik'],
			['نَاقَةٌ', 'nāqatu-n', 'unta betina'],
			['بَيْضَةٌ', 'bayḍatu-n', 'telur'],
			['حَدِيقَةٌ', 'ḥadīqatu-n', 'kebun / taman']
		]
	),
	deck(
		'lesson-8',
		'lesson',
		'Pelajaran 8: Frasa Isyarah & Letak',
		'الدَّرْسُ ٨',
		'Frasa badal kata tunjuk, nama negara (mabni), أَمَامَ (depan), dan خَلْفَ (belakang)',
		[
			['أَمْرِيكَا', 'amrīkā', 'Amerika'],
			['أَلْمَانِيَا', 'almāniyā', 'Jerman'],
			['إِنْكَلْتَرَا', 'inkaltarā', 'Inggris'],
			['سُوِيسْرَا', 'suwīsrā', 'Swiss'],
			['الْعِرَاقُ', 'al-ʿirāqu', 'Irak'],
			['مُسْتَشْفَى', 'mustasyfā', 'rumah sakit'],
			['سِكِّينٌ', 'sikkīnu-n', 'pisau'],
			['أَمَامَ', 'amāma', 'di depan'],
			['خَلْفَ', 'khalfa', 'di belakang'],
			['جَلَسَ', 'jalasa', 'dia telah duduk']
		]
	),
	deck(
		'lesson-9',
		'lesson',
		'Pelajaran 9: Na\'at Sifat & الَّذِي',
		'الدَّرْسُ ٩',
		'Kata sifat bersesuaian (Na\'at/Man\'ut), sifat berakhiran -an, kata sambung الَّذِي, dan preposisi عِنْدَ',
		[
			['الَّذِي', 'alladhī', 'yang (kata sambung mudzakkar)'],
			['فَاكِهَةٌ', 'fākihatu-n', 'buah-buahan'],
			['عُصْفُورٌ', 'ʿuṣfūru-n', 'burung pipit'],
			['طَائِرٌ', 'ṭāʾiru-n', 'burung'],
			['لُغَةٌ', 'lughatu-n', 'bahasa'],
			['الْعَرَبِيَّةُ', 'al-ʿarabiyyatu', 'bahasa Arab'],
			['الْإِنْكِلِيزِيَّةُ', 'al-inkilīziyyatu', 'bahasa Inggris'],
			['مَدِينَةٌ', 'madīnatu-n', 'kota'],
			['الْقَاهِرَةُ', 'al-qāhiratu', 'Kairo'],
			['كُوبٌ', 'kūbu-n', 'cangkir / gelas'],
			['مَكْتَبَةٌ', 'maktabatu-n', 'perpustakaan'],
			['مُسْتَوْصَفٌ', 'mustawṣafu-n', 'poliklinik / klinik'],
			['مَرْوَحَةٌ', 'marwaḥatu-n', 'kipas angin'],
			['الْيَوْمَ', 'al-yawma', 'hari ini'],
			['لِمَاذَا', 'limādhā', 'mengapa / kenapa'],
			['عِنْدَ', 'ʿinda', 'di sisi / pada'],
			['سَهْلٌ', 'sahlu-n', 'mudah'],
			['صَعْبٌ', 'ṣaʿbu-n', 'sulit / sukar'],
			['مُجْتَهِدٌ', 'mujtahidu-n', 'rajin / bersungguh-sungguh'],
			['شَهِيرٌ', 'syahīru-n', 'terkenal / masyhur'],
			['حَادٌّ', 'ḥāddu-n', 'tajam'],
			['كَسْلَانُ', 'kaslānu', 'malas'],
			['جَوْعَانُ', 'jawʿānu', 'lapar'],
			['عَطْشَانُ', 'ʿaṭsyānu', 'haus'],
			['غَضْبَانُ', 'ghaḍbānu', 'marah'],
			['مَلْآنُ', 'malʾānu', 'penuh']
		]
	),
	deck(
		'lesson-10',
		'lesson',
		'Pelajaran 10: Dhomir Muttashil & مَعَ',
		'الدَّرْسُ ١٠',
		'Kata ganti akhiran (-ku, -mu, -nya), أَبٌ dan أَخٌ, kepemilikan hubungan vs barang, dan kata bersama (مَعَ)',
		[
			['زَمِيلٌ', 'zamīlu-n', 'teman sekelas / kolega'],
			['زَوْجٌ', 'zawju-n', 'suami / pasangan'],
			['طِفْلٌ', 'ṭiflu-n', 'anak kecil / balita'],
			['فَتًى', 'fatan', 'pemuda / anak muda'],
			['وَاحِدٌ', 'wāḥidu-n', 'satu (1)'],
			['مَعَ', 'maʿa', 'bersama / beserta'],
			['ذَهَبْتَ', 'dhahabta', 'kamu (lk) telah pergi'],
			['ذَهَبْتُ', 'dhahabtu', 'aku telah pergi'],
			['مَا', 'mā', 'tidak / bukan (partikel negasi)']
		]
	),

	// --- Dek Berdasarkan Topik & Kategori ---
	deck(
		'objects',
		'topic',
		'Benda Sehari-hari',
		'الأَشْيَاء',
		'Kata benda di sekitar rumah, masjid, dan sekolah dari Pelajaran 1–3',
		[
			['بَيْتٌ', 'baitu-n', 'rumah'],
			['مَسْجِدٌ', 'masjidu-n', 'masjid'],
			['بَابٌ', 'bābu-n', 'pintu'],
			['كِتَابٌ', 'kitābu-n', 'buku'],
			['قَلَمٌ', 'qalamu-n', 'pena'],
			['مِفْتَاحٌ', 'miftāḥu-n', 'kunci'],
			['مَكْتَبٌ', 'maktabu-n', 'meja tulis'],
			['سَرِيرٌ', 'sarīru-n', 'tempat tidur / ranjang'],
			['كُرْسِيٌّ', 'kursiyyu-n', 'kursi'],
			['قَمِيصٌ', 'qamīṣu-n', 'kemeja'],
			['مِنْدِيلٌ', 'mindīlu-n', 'saputangan'],
			['وَرَقٌ', 'waraqu-n', 'kertas'],
			['دُكَّانٌ', 'dukkānu-n', 'toko'],
			['حَجَرٌ', 'ḥajaru-n', 'batu'],
			['نَجْمٌ', 'najmu-n', 'bintang'],
			['قَمَرٌ', 'qamaru-n', 'bulan'],
			['شَمْسٌ', 'syamsu-n', 'matahari']
		]
	),
	deck(
		'people',
		'topic',
		'Orang & Profesi',
		'النَّاسُ وَالْمِهَنُ',
		'Kosakata manusia dan pekerjaan dari Pelajaran 1–2',
		[
			['طَبِيبٌ', 'ṭabību-n', 'dokter'],
			['مُدَرِّسٌ', 'mudarrisu-n', 'guru / pengajar'],
			['طَالِبٌ', 'ṭālibu-n', 'pelajar / mahasiswa'],
			['تَاجِرٌ', 'tājiru-n', 'pedagang'],
			['إِمَامٌ', 'imāmu-n', 'imam / pemimpin salat'],
			['رَجُلٌ', 'rajulu-n', 'pria dewasa'],
			['وَلَدٌ', 'waladu-n', 'anak laki-laki']
		]
	),
	deck(
		'animals',
		'topic',
		'Hewan',
		'الْحَيَوَانَات',
		'Nama-nama hewan dalam bahasa Arab dari Pelajaran 1',
		[
			['قِطٌّ', 'qiṭṭu-n', 'kucing'],
			['كَلْبٌ', 'kalbu-n', 'anjing'],
			['حِصَانٌ', 'ḥiṣānu-n', 'kuda'],
			['حِمَارٌ', 'ḥimāru-n', 'keledai'],
			['جَمَلٌ', 'jamalu-n', 'unta'],
			['دِيكٌ', 'dīku-n', 'ayam jantan']
		]
	),
	deck(
		'adjectives',
		'topic',
		'Kata Sifat (Lawan Kata)',
		'الصِّفَات',
		'Pasangan kata sifat untuk mendeskripsikan benda dan orang',
		[
			['جَدِيدٌ', 'jadīdu-n', 'baru'],
			['قَدِيمٌ', 'qadīmu-n', 'lama / tua'],
			['كَبِيرٌ', 'kabīru-n', 'besar'],
			['صَغِيرٌ', 'ṣaghīru-n', 'kecil'],
			['مَفْتُوحٌ', 'maftūḥu-n', 'terbuka'],
			['مُغْلَقٌ', 'mughlaqu-n', 'tertutup'],
			['مَكْسُورٌ', 'maksūru-n', 'patah / rusak'],
			['بَارِدٌ', 'bāridu-n', 'dingin'],
			['حَارٌّ', 'ḥārru-n', 'panas'],
			['نَظِيفٌ', 'naẓīfu-n', 'bersih'],
			['وَسِخٌ', 'wasikhu-n', 'kotor'],
			['ثَقِيلٌ', 'thaqīlu-n', 'berat'],
			['خَفِيفٌ', 'khafīfu-n', 'ringan'],
			['قَرِيبٌ', 'qarību-n', 'dekat'],
			['بَعِيدٌ', 'baʿīdu-n', 'jauh'],
			['وَاقِفٌ', 'wāqifu-n', 'berdiri'],
			['جَالِسٌ', 'jālisu-n', 'duduk'],
			['طَوِيلٌ', 'ṭawīlu-n', 'tinggi / panjang'],
			['قَصِيرٌ', 'qaṣīru-n', 'pendek'],
			['غَنِيٌّ', 'ghaniyyu-n', 'kaya'],
			['فَقِيرٌ', 'faqīru-n', 'miskin'],
			['جَمِيلٌ', 'jamīlu-n', 'indah / bagus'],
			['حُلْوٌ', 'ḥulwu-n', 'manis'],
			['لَذِيذٌ', 'ladhīdhu-n', 'lezat / enak'],
			['مَرِيضٌ', 'marīḍu-n', 'sakit']
		]
	),
	deck(
		'particles',
		'topic',
		'Kata Tunjuk & Kata Tanya',
		'الأَدَوَات',
		'Kata tunjuk, kata tanya, dan kata hubung dasar',
		[
			['هَذَا', 'hādhā', 'ini (tunggal mudzakkar)'],
			['ذَلِكَ', 'dhālika', 'itu (tunggal mudzakkar)'],
			['مَا', 'mā', 'apa (untuk benda/hewan)'],
			['مَنْ', 'man', 'siapa (untuk orang)'],
			['أَ', 'a', 'apakah (partikel tanya)'],
			['وَ', 'wa', 'dan'],
			['نَعَمْ', 'naʿam', 'ya'],
			['لَا', 'lā', 'tidak / bukan']
		]
	),
	deck(
		'greetings',
		'topic',
		'Sapaan',
		'تَحِيَّات',
		'Sapaan, ucapan terima kasih, dan perpisahan sehari-hari',
		[
			['مَرْحَبًا', 'marḥaban', 'halo'],
			['السَّلَامُ عَلَيْكُمْ', 'as-salāmu ʿalaykum', 'semoga keselamatan tercurah atasmu'],
			['صَبَاحُ الْخَيْرِ', 'ṣabāḥ al-khayr', 'selamat pagi'],
			['مَسَاءُ الْخَيْرِ', 'masāʾ al-khayr', 'selamat sore / malam'],
			['شُكْرًا', 'shukran', 'terima kasih'],
			['عَفْوًا', 'ʿafwan', 'sama-sama / maaf'],
			['مِنْ فَضْلِكَ', 'min faḍlik', 'tolong / silakan'],
			['نَعَمْ', 'naʿam', 'ya'],
			['لَا', 'lā', 'tidak'],
			['مَعَ السَّلَامَةِ', 'maʿa as-salāmah', 'sampai jumpa']
		]
	),
	deck('numbers', 'topic', 'Angka', 'الأَعْدَاد', 'Berhitung dari satu sampai sepuluh', [
		['وَاحِد', 'wāḥid', 'satu'],
		['اِثْنَان', 'ithnān', 'dua'],
		['ثَلَاثَة', 'thalāthah', 'tiga'],
		['أَرْبَعَة', 'arbaʿah', 'empat'],
		['خَمْسَة', 'khamsah', 'lima'],
		['سِتَّة', 'sittah', 'enam'],
		['سَبْعَة', 'sabʿah', 'tujuh'],
		['ثَمَانِيَة', 'thamāniyah', 'delapan'],
		['تِسْعَة', 'tisʿah', 'sembilan'],
		['عَشَرَة', 'ʿasharah', 'sepuluh']
	]),
	deck('family', 'topic', 'Keluarga', 'العَائِلَة', 'Orang-orang terdekat di sekitarmu', [
		['أَب', 'ab', 'ayah'],
		['أُمّ', 'umm', 'ibu'],
		['أَخ', 'akh', 'saudara laki-laki'],
		['أُخْت', 'ukht', 'saudara perempuan'],
		['اِبْن', 'ibn', 'anak laki-laki'],
		['بِنْت', 'bint', 'anak perempuan'],
		['جَدّ', 'jadd', 'kakek'],
		['جَدَّة', 'jaddah', 'nenek'],
		['زَوْج', 'zawj', 'suami'],
		['زَوْجَة', 'zawjah', 'istri']
	]),
	deck('food', 'topic', 'Makanan & Minuman', 'الطَّعَام', 'Hidangan yang ada di meja makan', [
		['خُبْز', 'khubz', 'roti'],
		['مَاء', 'māʾ', 'air'],
		['حَلِيب', 'ḥalīb', 'susu segar'],
		['قَهْوَة', 'qahwah', 'kopi'],
		['شَاي', 'shāy', 'teh'],
		['تُفَّاح', 'tuffāḥ', 'apel'],
		['لَحْم', 'laḥm', 'daging'],
		['أَرُزّ', 'aruzz', 'nasi'],
		['سُكَّر', 'sukkar', 'gula'],
		['بَيْض', 'bayḍ', 'telur'],
		['لَبَنٌ', 'labanu-n', 'susu']
	]),
	deck('colors', 'topic', 'Warna', 'الأَلْوَان', 'Menggambarkan warna di dunia sekitarmu', [
		['أَحْمَر', 'aḥmar', 'merah'],
		['أَزْرَق', 'azraq', 'biru'],
		['أَخْضَر', 'akhḍar', 'hijau'],
		['أَصْفَر', 'aṣfar', 'kuning'],
		['أَبْيَض', 'abyaḍ', 'putih'],
		['أَسْوَد', 'aswad', 'hitam'],
		['بُنِّيّ', 'bunnī', 'cokelat'],
		['بُرْتُقَالِيّ', 'burtuqālī', 'oranye']
	])
];

export const getDeck = (id: string) => decks.find((d) => d.id === id);
