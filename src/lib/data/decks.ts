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

export interface Deck {
	id: string;
	title: string;
	titleAr: string;
	description: string;
	cards: Card[];
}

const deck = (
	id: string,
	title: string,
	titleAr: string,
	description: string,
	cards: [ar: string, tr: string, en: string][]
): Deck => ({
	id,
	title,
	titleAr,
	description,
	cards: cards.map(([ar, tr, en], i) => ({ id: `${id}-${i + 1}`, ar, tr, en }))
});

export const decks: Deck[] = [
	deck(
		'lesson-1',
		'Pelajaran 1: هَذَا (Ini)',
		'الدَّرْسُ ١',
		'Kosakata benda, orang, dan hewan dari Pelajaran 1',
		[
			['بَيْتٌ', 'baitu-n', 'rumah'],
			['مَسْجِدٌ', 'masjidu-n', 'masjid'],
			['بَابٌ', 'bābu-n', 'pintu'],
			['كِتَابٌ', 'kitābu-n', 'buku'],
			['قَلَمٌ', 'qalamu-n', 'pena'],
			['مِفْتَاحٌ', 'miftāḥu-n', 'kunci'],
			['مَكْتَبٌ', 'maktabu-n', 'meja tulis'],
			['سَرِيرٌ', 'sarīru-n', 'tempat tidur'],
			['كُرْسِيٌّ', 'kursiyyu-n', 'kursi'],
			['قَمِيصٌ', 'qamīṣu-n', 'kemeja'],
			['نَجْمٌ', 'najmu-n', 'bintang'],
			['مِنْدِيلٌ', 'mindīlu-n', 'saputangan'],
			['طَبِيبٌ', 'ṭabību-n', 'dokter'],
			['وَلَدٌ', 'waladu-n', 'anak laki-laki'],
			['طَالِبٌ', 'ṭālibu-n', 'pelajar'],
			['رَجُلٌ', 'rajulu-n', 'pria dewasa'],
			['تَاجِرٌ', 'tājiru-n', 'pedagang'],
			['مُدَرِّسٌ', 'mudarrisu-n', 'guru'],
			['كَلْبٌ', 'kalbu-n', 'anjing'],
			['قِطٌّ', 'qiṭṭu-n', 'kucing'],
			['حِمَارٌ', 'ḥimāru-n', 'keledai'],
			['حِصَانٌ', 'ḥiṣānu-n', 'kuda'],
			['جَمَلٌ', 'jamalu-n', 'unta'],
			['دِيكٌ', 'dīku-n', 'ayam jantan']
		]
	),
	deck(
		'lesson-2',
		'Pelajaran 2: ذَلِكَ & وَ',
		'الدَّرْسُ ٢',
		'Kata tunjuk jarak jauh (itu), kata hubung (dan), serta kosakata baru',
		[
			['ذَلِكَ', 'dhālika', 'itu (tunggal mudzakkar)'],
			['وَ', 'wa', 'dan'],
			['إِمَامٌ', 'imāmu-n', 'imam'],
			['حَجَرٌ', 'ḥajaru-n', 'batu'],
			['سُكَّرٌ', 'sukkaru-n', 'gula'],
			['لَبَنٌ', 'labanu-n', 'susu']
		]
	),
	deck(
		'lesson-3',
		'Pelajaran 3: ال & Kata Sifat',
		'الدَّرْسُ ٣',
		'Kata benda dengan ال dan 25 kata sifat dasar dari Pelajaran 3',
		[
			['الْمَاءُ', 'al-māʾu', 'air itu'],
			['الْوَرَقُ', 'al-waraqu', 'kertas itu'],
			['التُّفَّاحُ', 'at-tuffāḥu', 'apel itu'],
			['الدُّكَّانُ', 'ad-dukkānu', 'toko itu'],
			['مَكْسُورٌ', 'maksūru-n', 'patah / rusak'],
			['مَفْتُوحٌ', 'maftūḥu-n', 'terbuka'],
			['مُغْلَقٌ', 'mughlaqu-n', 'tertutup'],
			['جَدِيدٌ', 'jadīdu-n', 'baru'],
			['قَدِيمٌ', 'qadīmu-n', 'lama / tua'],
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
			['لَذِيذٌ', 'ladhīdhu-n', 'lezat / enak']
		]
	),
	deck(
		'greetings',
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
	deck('numbers', 'Angka', 'الأَعْدَاد', 'Berhitung dari satu sampai sepuluh', [
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
	deck('family', 'Keluarga', 'العَائِلَة', 'Orang-orang terdekat di sekitarmu', [
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
	deck('food', 'Makanan & Minuman', 'الطَّعَام', 'Hidangan yang ada di meja makan', [
		['خُبْز', 'khubz', 'roti'],
		['مَاء', 'māʾ', 'air'],
		['حَلِيب', 'ḥalīb', 'susu'],
		['قَهْوَة', 'qahwah', 'kopi'],
		['شَاي', 'shāy', 'teh'],
		['تُفَّاح', 'tuffāḥ', 'apel'],
		['لَحْم', 'laḥm', 'daging'],
		['أَرُزّ', 'aruzz', 'nasi'],
		['سُكَّر', 'sukkar', 'gula'],
		['بَيْض', 'bayḍ', 'telur']
	]),
	deck('colors', 'Warna', 'الأَلْوَان', 'Menggambarkan warna di dunia sekitarmu', [
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
