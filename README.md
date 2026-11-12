# Arabisa (عَرَبِيْسَا)

Aplikasi belajar kaidah tata bahasa Arab, kosakata, flashcard hafalan (metode Leitner), dan latihan kuis interaktif secara **100% offline**, berbasis kurikulum terstruktur _Madinah Arabic Reader Book 1_ (_Durūs al-Lughah al-ʿArabiyyah_) oleh Dr. V. Abdur Rahim.

Dirancang khusus untuk pembelajar mandiri di Indonesia agar dapat memahami bahasa Arab dasar langkah demi langkah tanpa perlu guru pendamping, tanpa iklan, dan tanpa perlu membuat akun.

---

## 🌟 Fitur Utama

- 📖 **Materi Kurikulum Lengkap (Pelajaran 1–10)**
  - Pembahasan kaidah tata bahasa Arab dasar yang dijelaskan secara bertahap dalam bahasa Indonesia.
  - Teks Arab berharakat lengkap dengan transliterasi dan terjemahan langsung.
  - Contoh kalimat kontekstual dan dialog tanya-jawab sehari-hari.

- 🗂️ **Flashcard Hafalan (Sistem Leitner)**
  - Dek hafalan kosakata per pelajaran dan per kategori tematik (kata benda, anggota tubuh, profesi, dll.).
  - Menggunakan algoritma _spaced repetition_ berbasis kotak Leitner (Box 1–5). Kosakata dinyatakan **Dikuasai** hanya setelah berhasil diingat berulang kali.
  - Pilihan tampilan sisi depan (Bahasa Arab atau Bahasa Indonesia).

- ✍️ **Latihan Soal Interaktif**
  - Kuis pilihan ganda untuk setiap pelajaran atau gabungan seluruh pelajaran.
  - **Pilihan jawaban diacak dinamis (_randomized_)** pada setiap sesi kuis untuk mencegah hafalan posisi tombol.
  - Evaluasi skor instan beserta pembahasan kaidah untuk setiap soal.

- 🔍 **Kamus Kosakata Terpadu**
  - Pencarian cepat kosakata berdasarkan kata kunci bahasa Arab, transliterasi latin, maupun arti bahasa Indonesia.
  - Dilengkapi bentuk jamak (_jam'_) dan status penguasaan flashcard.

- 🛡️ **Privasi Penuh & 100% Offline**
  - Tidak memerlukan koneksi internet, tidak ada iklan, dan tidak memerlukan pendaftaran akun.
  - Seluruh data progres belajar, font, dan konten tersimpan secara lokal di perangkat pengguna.

- 🎨 **Desain "Warm Paper & Dark Ink"**
  - Estetika manuskrip Arab klasik yang nyaman di mata untuk sesi belajar singkat maupun panjang.
  - Dukungan tema Terang (_Warm Paper_) dan tema Gelap (_Dark Ink_).
  - Tipografi Arab dioptimalkan dengan line-height proporsional agar harakat tidak bertumpuk atau terpotong.

---

## 🛠️ Teknologi & Arsitektur

- **Framework:** [SvelteKit](https://kit.svelte.dev/) dengan mode statis (`@sveltejs/adapter-static`)
- **Reaktivitas:** [Svelte 5](https://svelte.dev/) menggunakan _Runes_ (`$state`, `$derived`, `$props`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Mobile Engine:** [Capacitor 8](https://capacitorjs.com/) (target platform Android)
- **Offline PWA:** Service Worker kustom untuk caching seluruh aset statis
- **Tipografi:** Noto Sans Arabic (teks Arab berharakat) & Figtree (antarmuka Latin)
- **Ikon:** [Lucide Svelte](https://lucide.dev/)

---

## 📂 Struktur Direktori Proyek

```text
learn-arabic-app/
├── android/               # Konfigurasi native project Android (Capacitor)
├── docs/                  # Dokumentasi kurikulum, playstore listing, privasi
│   ├── Madina Arabic Reader 1.md
│   └── PRIVACY_POLICY.md
├── src/
│   ├── lib/
│   │   ├── components/    # Komponen Svelte (BottomNav, Flashcard, DeckProgress, dll.)
│   │   ├── data/          # Data statis kurikulum (lessons.ts, decks.ts, exercises.ts)
│   │   ├── progress.svelte.ts # State manajemen progres & Leitner box lokal
│   │   └── storage.ts     # Adapter localStorage
│   ├── routes/
│   │   ├── +page.svelte           # Halaman Beranda (Hero Belajar & Ringkasan Progres)
│   │   ├── materi/                # Halaman Indeks Silabus & Kurikulum Lengkap
│   │   ├── lesson/[id]/           # Detail Pelajaran, Kaidah, & Contoh Kalimat
│   │   ├── decks/                 # Indeks Dek Flashcard
│   │   ├── deck/[id]/             # Latihan Flashcard Interaktif
│   │   ├── latihan/               # Kuis & Latihan Soal Interaktif
│   │   ├── kosakata/              # Kamus Kosakata & Pencarian
│   │   ├── tentang/               # Informasi Aplikasi, Alur Belajar & FAQ
│   │   └── privasi/               # Kebijakan Privasi
│   ├── service-worker/    # Service worker offline cache
│   └── app.html           # Template root HTML
├── static/                # Aset publik (manifest, icon, service worker)
└── capacitor.config.ts    # Konfigurasi Capacitor Android
```

---

## 🚀 Memulai Pengembangan (Local Development)

### Prasyarat

- [Node.js](https://nodejs.org/) versi 18 atau lebih baru.
- npm atau bun.

### 1. Instalasi Dependensi

```bash
npm install
```

### 2. Menjalankan Server Pengembangan

```bash
npm run dev
```

Buka peramban di `http://localhost:5173`.

### 3. Pemeriksaan Tipe & Linter

```bash
# Validasi TypeScript & Svelte diagnostics
npm run check

# Pemeriksaan kode dengan Prettier
npm run lint

# Format kode otomatis
npm run format
```

### 4. Membangun Aplikasi Web (Static Build)

```bash
npm run build
```

Hasil build statis akan tersimpan di direktori `build/` dan siap diuji dengan `npm run preview`.

---

## 📱 Build Android (Capacitor)

Proyek ini telah dikonfigurasi dengan Capacitor untuk menghasilkan aplikasi native Android (`com.mhk.learnarabic`).

### Sinkronisasi Aset Web ke Native

```bash
npm run cap:sync
```

### Membuka Project di Android Studio

```bash
npm run android:open
```

### Menjalankan Langsung di Emulator / Device

```bash
npm run android:run
```

### Membangun File Release (APK / AAB)

```bash
# Membangun file APK rilis
npm run android:apk

# Membangun file Android App Bundle (.aab) untuk Google Play Store
npm run android:bundle
```

File output akan berada di `android/app/build/outputs/apk/release/` atau `android/app/build/outputs/bundle/release/`.

---

## 📄 Lisensi & Hak Cipta

Proyek ini dikembangkan secara independen sebagai sarana pembelajaran terbuka. Teks panduan tata bahasa berpedoman pada silabus buku _Durūs al-Lughah al-ʿArabiyyah_ oleh Dr. V. Abdur Rahim.
