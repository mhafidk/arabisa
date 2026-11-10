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
