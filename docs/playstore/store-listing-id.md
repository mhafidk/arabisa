# Panduan Publikasi Google Play Store — Arabisa (`com.mhk.learnarabic`)

Dokumen ini berisi teks siap pakai untuk **Store Listing**, panduan **Data Safety**, serta perintah untuk membuat **Signed Android App Bundle (`.aab`)**.

---

## 1. Aset Grafis yang Sudah Disiapkan

| Aset                                | Lokasi File                                   | Spesifikasi                                                     |
| :---------------------------------- | :-------------------------------------------- | :-------------------------------------------------------------- |
| **App Icon (Play Store)**           | `docs/playstore/icon-512-playstore.png`       | 512 × 512 px PNG (Full-bleed square, sesuai syarat Google Play) |
| **Feature Graphic**                 | `docs/playstore/feature-graphic-1024x500.png` | 1024 × 500 px PNG                                               |
| **Android Adaptive & Legacy Icons** | `android/app/src/main/res/mipmap-*`           | `mdpi` s/d `xxxhdpi` + XML vector                               |
| **Android Splash Screens**          | `android/app/src/main/res/drawable*`          | Portrait & Landscape `mdpi` s/d `xxxhdpi`                       |

> **Yang masih perlu Anda ambil manual:**
>
> - **2–8 Screenshot Ponsel** (rasio 9:16, min. 1080×1920 px disarankan): ambil tangkapan layar halaman Beranda, Materi Pelajaran, Flashcard, Latihan Soal, dan Kamus Kosakata.
> - **Screenshot Tablet 7-inci & 10-inci** (opsional namun disarankan agar lolos tinjauan tata letak tablet).

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

• Materi Kaidah & Percakapan Bertahap
Pelajari struktur kalimat bahasa Arab dari dasar (Isim Isyarah, Ma'rifah & Nakirah, Huruf Jar, Idhafah, Mubtada' & Khabar, Na'at & Man'ut, hingga angka dan percakapan sehari-hari) dengan penjelasan bahasa Indonesia yang jernih dan contoh berharakat lengkap.

• Flashcard Pintar dengan Metode Leitner
Hafalkan ratusan kosakata bahasa Arab secara efektif menggunakan sistem pengulangan berjarak (Leitner Box). Kartu yang belum dikuasai akan muncul lebih sering hingga Anda benar-benar menguasainya.

• Latihan Soal Interaktif
Uji pemahaman kaidah dan kosakata Anda pada setiap pelajaran melalui ratusan soal latihan pilihan ganda disertai umpan balik langsung.

• Kamus Kosakata Cepat
Cari kosakata bahasa Arab, arti bahasa Indonesia, bentuk jamak, maupun filter per pelajaran dengan cepat dan instan.

• 100% Offline & Privasi Terjaga
Seluruh materi, kosakata, latihan, dan font bahasa Arab tersimpan di dalam aplikasi. Tidak memerlukan koneksi internet, bebas iklan, dan tidak mengumpulkan data pribadi apa pun.

• Mode Terang & Gelap (Warm Paper & Dark Ink)
Tampilan nyaman di mata menyerupai kertas manuskrip hangat di siang hari dan mode gelap yang teduh di malam hari.
```

---

## 3. Pengisian Formulir Kebijakan di Google Play Console

1. **Privacy Policy URL**:
   - Anda dapat menghosting file `static/privacy-policy.html` (misalnya melalui GitHub Pages / Cloudflare Pages / Vercel) atau menggunakan URL halaman Markdown `docs/PRIVACY_POLICY.md` di repositori GitHub publik Anda.
2. **App Access**:
   - Pilih: _"All functionality in my app is available without any access restrictions"_ (tidak butuh login).
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

## 4. Cara Membuat Upload Keystore & Signed AAB Release

### Langkah 1: Buat Upload Keystore (Hanya 1x untuk selamanya)

Jalankan perintah berikut dari direktori root proyek:

```bash
keytool -genkey -v \
  -keystore android/upload-keystore.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias upload
```

> **Penting:** Simpan file `android/upload-keystore.jks` beserta sandinya di tempat cadangan yang aman (password manager / cloud drive pribadi). File ini sudah diabaikan oleh Git (`.gitignore`).

### Langkah 2: Buat File `android/keystore.properties`

Salin contoh konfigurasi:

```bash
cp android/keystore.properties.example android/keystore.properties
```

Lalu isi `storePassword` dan `keyPassword` sesuai sandi yang Anda buat pada Langkah 1.

### Langkah 3: Build Signed Android App Bundle (`.aab`)

Jalankan perintah berikut dari root proyek:

```bash
bun run android:bundle
```

File `.aab` yang siap diunggah ke Google Play Console akan tersedia di:
`android/app/build/outputs/bundle/release/app-release.aab`
