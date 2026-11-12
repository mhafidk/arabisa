# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

Ships as an Android app (Capacitor wrapper, `com.mhk.arabisa`) and as an installable PWA. One consistent design language across both; the Android wrapper does not make it a native-Material product.

## Users

Indonesian Muslim adults teaching themselves Arabic from Madinah Book 1, without a teacher or class. They study alone on their phone in short sessions, such as a commute, a break, or after prayer, and need each session to pick up where the last one ended. They read Indonesian. Most are beginners who are still building confidence with harakat-marked Arabic script.

## Product Purpose

Arabisa teaches foundational Arabic grammar and vocabulary in step-by-step lessons explained in Indonesian. Each lesson has worked examples, flashcards, and practice questions. Success means a learner can work through the curriculum on their own, remember the vocabulary over time, and understand the sentence patterns of each lesson without needing a classroom.

## Positioning

- Follows the curriculum of *Madinah Arabic Book* (Durūs al-Lughah al-ʿArabiyyah li-Ghayr an-Nāṭiqīna bihā) by Dr. V. Abdur Rahim, lesson by lesson, with explanations written natively in Indonesian rather than translated from English.
- Works fully offline, has no ads, requires no account, and collects no personal data. All content, fonts, and progress live on the device.

## Operating Context

- One-handed phone use in portrait orientation. Tablets are supported (Play Store tablet screenshots exist).
- Short, interruptible sessions. Progress persists locally across app restarts.
- Recommended learning order inside each lesson: read the material, drill the flashcards, then do the practice questions (covered in the FAQ).
- Some learners may own the printed Madinah book and use it alongside the app.

## Capabilities and Constraints

- **Lessons (Materi):** grammar points with fully vowelled Arabic examples, transliteration, and Indonesian translations, plus Q/A example dialogues. Currently 4 lessons. Topics include Isim Isyarah, Ma'rifah & Nakirah, Huruf Jar, Idhafah, Mubtada' & Khabar, Na'at & Man'ut, numbers, and everyday conversation.
- **Flashcards:** Leitner-box spaced repetition. Decks exist per lesson and per category. A card counts as "Dikuasai" (mastered) only after repeated success, not after a single pass.
- **Latihan (practice):** multiple-choice questions per lesson with immediate feedback.
- **Kosakata (vocabulary):** a searchable dictionary covering Arabic, Indonesian meaning, and plural forms, with a filter per lesson.
- **Settings and info:** light/dark theme switch, an About & FAQ page (Tentang), and a privacy policy page (Privasi).
- **Tech:** SvelteKit with the static adapter, Svelte 5, Tailwind v4, Capacitor 8 (Android), and a service worker for offline use. Fonts are bundled locally. State is stored in local storage on the device.
- **Terminology:** the UI is in Indonesian (`lang="id"`). Routes and labels use Indonesian terms: Materi, Latihan, Kosakata, Dek/Flashcard, Tentang, Privasi, Dikuasai.
- **Arabic text:** must always render right-to-left with full harakat. Diacritics must stay legible at every size where Arabic appears.
- **Scope direction:** grow to cover all of Madinah Book 1, and possibly Books 2–3. Stay offline, ad-free, and account-free while doing so.
- **Open:** whether Books 2–3 will be added, and when, is undecided.

## Brand Commitments

- Name: **Arabisa**. Store title: "Arabisa: Belajar Bahasa Arab".
- Logo: the mark **بِسَ** (app icon, adaptive icons, splash screens, and feature graphic already produced).
- Public promises in the Play Store listing that the product must keep: 100% offline, no ads, no account, no personal data collected, light and dark modes ("Warm Paper & Dark Ink").
- Voice: clear, patient, plain Indonesian that a self-learner can follow without a teacher.

## Evidence on Hand

- Curriculum source notes: `docs/Madina Arabic Reader 1.md`.
- Lesson, deck, and exercise content: `src/lib/data/lessons.ts`, `decks.ts`, `exercises.ts`.
- Play Store listing copy and data-safety guidance: `docs/playstore/store-listing-id.md`.
- Store assets: `docs/playstore/icon-512-playstore.png`, `feature-graphic-1024x500.png`, `screenshots/` (phone, 7-inch, 10-inch).
- Privacy policy: `docs/PRIVACY_POLICY.md`, `static/privacy-policy.html`.
- **Absent, do not fabricate:** user counts, ratings, reviews, testimonials, endorsements from institutions or scholars, learning-outcome statistics, and any affiliation with the Madinah book's author or publisher.

## Product Principles

1. **Self-study first.** Every screen should make sense to someone learning alone, with no teacher to ask. Explain fully, in Indonesian.
2. **Faithful to the source.** Follow the Madinah Book 1 sequence and content. Accuracy of the Arabic, including harakat, outranks convenience.
3. **Respect the learner's time and trust.** No ads, no accounts, no tracking, no network dependency.
4. **Short sessions, durable progress.** A learner should be able to resume instantly and see what they have mastered.
5. **Arabic is the hero content.** Arabic script is what the learner came for, so give it the space and legibility it needs.

## Accessibility & Inclusion

- Mixed-direction content: RTL Arabic inside an LTR Indonesian interface. Set the direction correctly on every Arabic run.
- Vowelled Arabic needs generous size and line height so diacritics don't collide or get clipped.
- Both light and dark themes must keep readable contrast for learners studying at night.
