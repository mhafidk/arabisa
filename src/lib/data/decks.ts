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
