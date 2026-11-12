# Panduan Publikasi Google Play Store — Arabisa (`com.mhk.arabisa`)

Dokumen ini berisi teks siap pakai untuk **Store Listing**, daftar **Aset Grafis**, panduan **Data Safety & Kebijakan**, serta perintah untuk membuat **Signed Android App Bundle (`.aab`)**.

---

## 1. Aset Grafis yang Sudah Disiapkan

Seluruh aset grafis di bawah ini sudah tersedia dan memenuhi syarat rasio serta resolusi Google Play Store:

| Aset                                 | Lokasi File                                   | Spesifikasi                                                       |
| :----------------------------------- | :-------------------------------------------- | :---------------------------------------------------------------- |
| **App Icon (Play Store)**            | `docs/playstore/icon-512-playstore.png`       | 512 × 512 px PNG (Full-bleed square, sesuai syarat Google Play)   |
| **Feature Graphic**                  | `docs/playstore/feature-graphic-1024x500.png` | 1024 × 500 px PNG                                                 |
| **Screenshot Ponsel (6 gambar)**     | `docs/playstore/screenshots/phone/*.png`      | 1080 × 1920 px PNG (Beranda, Materi, Flashcard, Kuis, Kamus, FAQ) |
| **Screenshot Tablet 7" (6 gambar)**  | `docs/playstore/screenshots/tablet-7/*.png`   | 1200 × 1920 px PNG (Rasio 10:16 untuk tablet kecil)               |
| **Screenshot Tablet 10" (6 gambar)** | `docs/playstore/screenshots/tablet-10/*.png`  | 1600 × 2560 px PNG (Rasio 10:16 untuk tablet besar)               |
| **Android Adaptive & Legacy Icons**  | `android/app/src/main/res/mipmap-*`           | `mdpi` s/d `xxxhdpi` + XML vector                                 |
| **Android Splash Screens**           | `android/app/src/main/res/drawable*`          | Portrait & Landscape `mdpi` s/d `xxxhdpi`                         |

> **Catatan Pembaruan Screenshot:**  
> Seluruh 18 tangkapan layar di atas telah digenerate otomatis berdasarkan versi aplikasi terkini menggunakan skrip `scripts/generate-screenshots.js` (dapat dijalankan ulang kapan saja dengan perintah `node scripts/generate-screenshots.js`).

---

## 2. Teks Store Listing (Bahasa Indonesia — `id`)

### Nama Aplikasi (Maks. 30 karakter)

```text
Arabisa: Belajar Bahasa Arab
```

_(28 karakter)_

### Deskripsi Singkat / Short Description (Maks. 80 karakter)

```text
Belajar kaidah dasar, kosakata, flashcard & latihan bahasa Arab 100% offline.
```

_(77 karakter)_

### Deskripsi Lengkap / Full Description (Maks. 4.000 karakter)

```text
Arabisa adalah aplikasi belajar bahasa Arab dasar yang dirancang secara bertahap, ringkas, dan mudah dipahami dalam bahasa Indonesia, langsung dari ponsel Anda tanpa gangguan iklan, tanpa perlu membuat akun, dan 100% dapat digunakan secara offline.

Seluruh kurikulum dan materi pembelajaran di dalam Arabisa disusun serta diadaptasi dari buku pembelajaran bahasa Arab klasik yang telah teruji di seluruh dunia: "Madinah Arabic Book" (Durūs al-Lughah al-ʿArabiyyah li-Ghayr an-Nāṭiqīna bihā) karya Dr. V. Abdur Rahim.

FITUR UTAMA ARABISA:

• Materi Kaidah & Percakapan Bertahap (Pelajaran 1–10)
Pelajari struktur kalimat bahasa Arab dari dasar (Isim Isyarah, Ma'rifah & Nakirah, Huruf Jar, Idhafah, Mubtada' & Khabar, Na'at & Man'ut, Badal, hingga Dhamir Muttashil dan percakapan sehari-hari) dengan penjelasan bahasa Indonesia yang jernih dan teks Arab berharakat lengkap.

• Flashcard Pintar dengan Metode Leitner
Hafalkan ratusan kosakata bahasa Arab secara efektif menggunakan sistem pengulangan berjarak (Leitner Box). Kartu yang belum dikuasai akan muncul lebih sering hingga Anda benar-benar menguasainya. Dilengkapi pilihan tampilan sisi depan (Arab atau Indonesia).

• Latihan Soal Interaktif dengan Pilihan Jawaban Acak
Uji pemahaman kaidah dan kosakata Anda pada setiap pelajaran melalui puluhan soal latihan pilihan ganda disertai umpan balik langsung. Opsi pilihan jawaban diacak otomatis agar Anda benar-benar memahami materi tanpa menghafal posisi tombol.

• Kamus Kosakata Cepat
Cari kosakata bahasa Arab, transliterasi Latin, arti bahasa Indonesia, bentuk jamak, maupun filter per pelajaran dengan cepat dan instan.

• 100% Offline & Privasi Terjaga
Seluruh materi, kosakata, latihan, dan font bahasa Arab tersimpan di dalam aplikasi. Tidak memerlukan koneksi internet, bebas iklan, dan tidak mengumpulkan data pribadi apa pun.

• Mode Terang & Gelap (Warm Paper & Dark Ink)
Tampilan nyaman di mata menyerupai kertas manuskrip hangat di siang hari dan mode gelap yang teduh di malam hari.
```

---

## 3. Pengisian Formulir Kebijakan di Google Play Console

1. **Privacy Policy URL**:
   - Gunakan tautan publik GitHub berikut (siap copy-paste):
     ```text
     https://github.com/mhafidk/arabisa/blob/main/docs/PRIVACY_POLICY.md
     ```
2. **App Access**:
   - Pilih: _"All functionality in my app is available without any access restrictions"_ (tidak butuh login/kredensial).
3. **Ads**:
   - Pilih: _"No, my app does not contain ads"_.
4. **Content Rating (IARC)**:
   - Kategori: _Reference, News, or Educational_.
   - Jawab _"No"_ untuk seluruh pertanyaan kekerasan, konten dewasa, perjudian, interaksi antar-pengguna, dan berbagi lokasi.
5. **Target Audience & Content**:
   - Pilih kelompok usia **13–15, 16–17, 18+** (dan pilih _"No"_ pada pertanyaan _"Could your store listing unintentionally appeal to children?"_ agar tidak terkena persyaratan tambahan program Families).
6. **Data Safety**:
   - _Does your app collect or share any of the required user data types?_ → **No**.

---

## 4. Cara Membuat Signed Android App Bundle (`.aab`)

Keystore penandatanganan rilis telah dibuat di `android/upload-keystore.jks` dan dikonfigurasikan pada `android/keystore.properties`.

Untuk membuat file `.aab` rilis terbaru:

```bash
npm run android:bundle
```

File `.aab` yang siap diunggah ke Google Play Console akan tersedia di:

```text
android/app/build/outputs/bundle/release/app-release.aab
```
