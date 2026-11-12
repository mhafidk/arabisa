---
name: Arabisa
description: Warm paper, deep ink, one saffron mark — a calm study companion for Madinah Book 1.
colors:
  saffron: "oklch(64% 0.15 50)"
  saffron-ink: "oklch(48% 0.13 45)"
  saffron-wash: "oklch(93% 0.045 70)"
  manuscript-paper: "oklch(97.5% 0.012 85)"
  paper-raised: "oklch(99.3% 0.006 85)"
  paper-sunk: "oklch(94% 0.018 82)"
  paper-line: "oklch(88% 0.02 80)"
  deep-indigo-ink: "oklch(24% 0.035 260)"
  ink-soft: "oklch(44% 0.03 260)"
  ink-faint: "oklch(58% 0.022 260)"
  mint-ink: "oklch(52% 0.1 170)"
  mint-wash: "oklch(93% 0.04 170)"
  brick-red: "oklch(52% 0.14 25)"
  brick-wash: "oklch(94% 0.035 30)"
  dark-saffron: "oklch(74% 0.14 60)"
  dark-saffron-ink: "oklch(80% 0.12 65)"
  dark-saffron-wash: "oklch(30% 0.05 60)"
  dark-paper: "oklch(19% 0.02 260)"
  dark-paper-raised: "oklch(24% 0.024 260)"
  dark-paper-sunk: "oklch(16% 0.018 260)"
  dark-line: "oklch(32% 0.025 260)"
  dark-ink: "oklch(94% 0.015 85)"
  dark-ink-soft: "oklch(80% 0.02 85)"
  dark-ink-faint: "oklch(66% 0.02 85)"
  dark-mint: "oklch(76% 0.11 170)"
  dark-mint-wash: "oklch(28% 0.04 170)"
  dark-brick: "oklch(74% 0.13 30)"
  dark-brick-wash: "oklch(29% 0.05 30)"
typography:
  display-arabic:
    fontFamily: "'Noto Sans Arabic Variable', 'Noto Sans Arabic', sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.7
  headline:
    fontFamily: "'Figtree Variable', 'Noto Sans Arabic Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  arabic-body:
    fontFamily: "'Noto Sans Arabic Variable', 'Noto Sans Arabic', sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.7
  title:
    fontFamily: "'Figtree Variable', 'Noto Sans Arabic Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "'Figtree Variable', 'Noto Sans Arabic Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "'Figtree Variable', 'Noto Sans Arabic Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.025em"
  nav-label:
    fontFamily: "'Figtree Variable', 'Noto Sans Arabic Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  md: "0.25rem"
  lg: "0.375rem"
  xl: "0.5rem"
  2xl: "0.625rem"
  3xl: "0.75rem"
  full: "9999px"
spacing:
  hair: "2px"
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "16px"
  xl: "20px"
  2xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.deep-indigo-ink}"
    textColor: "{colors.manuscript-paper}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    height: "48px"
    width: "100%"
  button-icon:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.lg}"
    size: "32px"
  badge:
    backgroundColor: "{colors.saffron-wash}"
    textColor: "{colors.saffron-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "2px 10px"
  card:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.deep-indigo-ink}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  card-stat:
    backgroundColor: "{colors.paper-raised}"
    rounded: "{rounded.2xl}"
    padding: "14px"
  input-search:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.deep-indigo-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    height: "44px"
  quiz-option:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.deep-indigo-ink}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
    height: "56px"
  quiz-option-correct:
    backgroundColor: "{colors.mint-wash}"
    textColor: "{colors.mint-ink}"
  quiz-option-wrong:
    backgroundColor: "{colors.brick-wash}"
    textColor: "{colors.brick-red}"
  nav-item:
    textColor: "{colors.ink-faint}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.lg}"
  nav-item-active:
    backgroundColor: "{colors.saffron-wash}"
    textColor: "{colors.saffron-ink}"
  flashcard:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.deep-indigo-ink}"
    rounded: "{rounded.3xl}"
    padding: "32px"
    height: "min(26rem, 58dvh)"
---

# Design System: Arabisa

## Overview

**Creative North Star: "The Study Manuscript"**

Arabisa should feel like a well-kept study notebook lying open next to the Madinah book. It uses warm manuscript paper, deep indigo ink, and a single saffron mark where the learner's attention belongs. The mood is calm, warm, and unhurried. Arabic script is the hero of every screen. The interface around it (headers, labels, navigation, stats) stays quiet and compact, so a five-minute session on the phone feels focused rather than busy.

The system is a single portrait column, at most 36rem wide, made of softly lifted paper cards on a paper ground. Hierarchy comes from tone rather than chrome. The page is the paper, cards are a sheet raised above it, and wells such as icon tiles, progress tracks, and inactive pills are pressed slightly into it. Saffron is used sparingly: the brand mark, the active tab, "new" and "continue" badges, focus rings, and in-progress state. The strongest action on a screen is always solid ink on paper, never a saffron fill.

Dark mode ("Dark Ink") is not an inverted light theme. The paper becomes deep indigo night, the ink becomes warm parchment, and saffron brightens into lamplight. It is built for learners studying after Isya.

**Key Characteristics:**
- Warm paper and indigo ink, in OKLCH, with a full light and dark pair for every role.
- One accent (saffron), plus two semantic inks for learning state: mint for correct or mastered, brick for wrong or "again".
- Figtree for the interface and Noto Sans Arabic for Arabic, with Arabic always set larger and with more line height.
- Softly lifted cards with an ambient shadow tinted by the ink colour. Never hard drop shadows.
- Modest radii (4–12px), a gentle press-scale on tap, and one expo-out ease for everything that moves.

## Colors

The palette is warm manuscript neutrals with a deep indigo ink, one saffron accent, and two muted semantic inks. Every role has a light and a dark value, and the CSS custom properties in `src/routes/layout.css` swap them through `data-theme` and `prefers-color-scheme`.

### Primary
- **Saffron** (`saffron` / dark `dark-saffron`): the accent fill. Used for the بِسَ mark in the header, focus outlines, and the "learning" segment of deck progress bars. Never used as a large surface.
- **Saffron Ink** (`saffron-ink` / dark `dark-saffron-ink`): saffron darkened enough to pass contrast as text. Used for active nav labels, badge text, links, transliteration lines, and highlighted Arabic in lesson concepts.
- **Saffron Wash** (`saffron-wash` / dark `dark-saffron-wash`): a pale tint behind the active nav icon, badges ("Baru", "Lanjutkan Belajar"), the "studied today" streak pill, flashcard icon tiles, and text selection.

### Tertiary
- **Mint Ink** (`mint-ink` / dark `dark-mint`): correct answers, the "mastered" segment of progress, the mastered-word count, and the practice tile icon.
- **Mint Wash** (`mint-wash` / dark `dark-mint-wash`): background of a correct quiz option and the practice icon tile.
- **Brick Red** (`brick-red` / dark `dark-brick`): wrong answers and "again" (Leitner reset) states.
- **Brick Wash** (`brick-wash` / dark `dark-brick-wash`): background of a wrong quiz option.

### Neutral
- **Manuscript Paper** (`manuscript-paper` / dark `dark-paper`): the page ground and the HTML background. Its hex approximation `#f8f3ea` is also the PWA theme and background colour.
- **Paper Raised** (`paper-raised` / dark `dark-paper-raised`): cards, flashcards, quiz options, inputs, dropdowns, and the bottom nav (at 95% opacity with blur).
- **Paper Sunk** (`paper-sunk` / dark `dark-paper-sunk`): wells. Used for icon buttons, inactive pills, progress tracks, neutral icon tiles, and card hover (at 60–70%).
- **Paper Line** (`paper-line` / dark `dark-line`): hairline borders, dividers, input strokes, and the nav top border.
- **Deep Indigo Ink** (`deep-indigo-ink` / dark `dark-ink`): primary text, Arabic text, and the primary button fill.
- **Ink Soft** (`ink-soft` / dark `dark-ink-soft`): secondary text, section labels, and summaries.
- **Ink Faint** (`ink-faint` / dark `dark-ink-faint`): tertiary text, placeholders, inactive nav, chevrons, and hints such as "Ketuk untuk membuka".

### Named Rules
**The One Mark Rule.** Saffron is a mark, not a surface. It appears as small fills, washes, text, and outlines. No saffron-filled buttons, banners, or full cards.

**The Ink Leads Rule.** The single most important action on a screen is a solid ink button with paper text (`button-primary`). Saffron draws attention to state. Ink drives action.

**The Learning-State Rule.** Mint and brick mean exactly two things: right/mastered and wrong/again. Never use them for decoration, categories, or branding.

**The Paired Theme Rule.** Every new colour token ships with both a light and a dark value, defined in all three blocks of `layout.css`: `:root`, `[data-theme='dark']`, and the `prefers-color-scheme` fallback.

## Typography

**Interface font:** Figtree Variable (with Noto Sans Arabic Variable, ui-sans-serif, system-ui)
**Arabic font:** Noto Sans Arabic Variable (with Noto Sans Arabic, sans-serif)

**Character:** Figtree is a friendly, geometric-humanist sans that stays out of the way. Noto Sans Arabic is a clear naskh-style face whose diacritics survive small screens. Arabic always sits one or more steps larger than the Indonesian around it.

### Hierarchy
- **Display Arabic** (700, 3.75rem, rising to 4.5rem at ≥640px, line-height 1.7): the Arabic word on the front of a flashcard. This is the largest type in the app.
- **Headline** (600, 1.25rem, tracking -0.025em): page titles and the "continue learning" lesson title.
- **Arabic Body** (500, 1.5–2.25rem, line-height 1.7): example sentences, vocabulary entries, and lesson concept highlights.
- **Title** (600, 1rem): card titles such as "Flashcard", "Latihan Soal", and deck names.
- **Body** (400, 0.875rem, line-height 1.625): summaries, explanations, and button labels (600). Lesson prose stays within the 36rem column.
- **Label** (600, 0.75rem, tracking 0.025em, UPPERCASE): section headings ("RINGKASAN PROGRES BELAJAR") and lesson numbers. In mixed case it is used for badges and stat captions.
- **Nav Label** (600, 11px): bottom navigation captions. The 10–11px sizes are reserved for nav and dense meta lines.

### Named Rules
**The Harakat Room Rule.** Every Arabic run carries `lang="ar"` and `dir="rtl"`, which applies the Arabic font and line-height 1.7. Never set Arabic below 1.125rem, and never tighten its line height. Diacritics must never clip.

**The Arabic Is Bigger Rule.** Whenever Arabic and Indonesian appear together, the Arabic is larger. Transliteration sits between them in italic Saffron Ink.

**The Tabular Count Rule.** Streaks, scores, and counts use `tabular-nums` so they don't jitter as they change.

## Layout

The app uses a single mobile column: `max-width: 36rem`, centred, with 16px side padding (20px at ≥640px), 20px top padding, and 96px bottom padding to clear the fixed bottom nav. Body padding absorbs safe-area insets (`--safe-area-inset-*` from Capacitor, falling back to `env()`), and the layout fills `100dvh`.

The vertical rhythm is about 20px between sections and 24px before a major list. Each section has an uppercase label with 10px beneath it. Grids use a 10px gap: three columns for stats, two columns for feature tiles, and full-width spanning rows for secondary links. Card padding is 20px for hero cards, 16px for tiles, and 14px for compact stats. The interface stays compact so Arabic content gets the room.

Tablet screens keep the same centred column rather than adding a multi-column layout. The column breathes, but the reading width doesn't grow.

## Elevation & Depth

Depth is softly lifted. Raised paper cards rest on the paper ground with a faint ambient shadow tinted by the ink colour, and lift further when hovered or opened. Tonal layering (raised over paper over sunk) does most of the hierarchy work, and shadows only confirm it. In dark mode the shadow tint deepens to near-black at 50% opacity so cards still separate from the night ground.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px var(--shadow-ink), 0 12px 32px -12px var(--shadow-ink)`): the resting state of every card, tile, quiz option, and flashcard.
- **Lift** (`box-shadow: 0 2px 4px var(--shadow-ink), 0 24px 48px -16px var(--shadow-ink)`): dropdown menus and flashcard hover. Use it for anything floating above the column.

`--shadow-ink` is `oklch(30% 0.04 60 / 0.14)` in light mode and `oklch(5% 0.02 260 / 0.5)` in dark mode.

### Named Rules
**The Warm Shadow Rule.** Shadows are always tinted by `--shadow-ink`, never neutral black or grey, and always soft and wide. No hard offsets and no coloured glows.

**The Two Heights Rule.** There are only two elevations: Card at rest and Lift for floating or hovered elements. Don't invent a third.

## Shapes

Corners are modest and nested. The radius scale is deliberately tighter than Tailwind's defaults: 4px (`md`) for badges and icon backdrops, 6px (`lg`) for nav items and icon buttons, 8px (`xl`) for buttons, inputs, quiz options, and icon tiles, 10px (`2xl`) for cards, and 12px (`3xl`) for the flashcard alone. Pills (`full`) are used only for progress tracks. Inner elements always use a smaller radius than their container. Borders are hairline `paper-line`. Shape language is otherwise plain rectangles. The only signature form is the بِسَ calligraphic mark.

## Components

### Buttons
Quietly tactile: solid, confident, and never loud.
- **Shape:** gently rounded (8px).
- **Primary:** Deep Indigo Ink fill with Manuscript Paper text, 600-weight body type, 48px tall and full-width inside its card, with an optional trailing arrow icon at 17px.
- **Icon button:** a 32px square in Paper Sunk with Ink Soft icon (16px) and 6px radius. Hover darkens the icon to Ink. Used for the theme switcher and back buttons.
- **Press:** every tappable element scales down on `:active` (0.96 for small icon buttons, 0.98 for buttons and tiles, 0.99 for wide rows). Transitions use the expo-out ease.
- **Focus:** a 2px Saffron outline with 3px offset and 6px radius, applied globally through `:focus-visible`.

### Badges
- **Style:** Saffron Wash background, Saffron Ink text, label type in mixed case, 4px radius, 2px × 10px padding.
- **Use:** status words such as "Baru", "Mulai / Lanjutkan Belajar", and "Semua Topik Selesai". The streak pill is the larger variant: 8px radius, 6px × 12px padding, flame icon, Saffron when the learner studied today and Paper Sunk otherwise.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** Paper Raised on the Manuscript Paper ground.
- **Shadow Strategy:** Card at rest (see Elevation & Depth).
- **Border:** none on cards. Hairline Paper Line only on inputs, select triggers, and dropdowns.
- **Internal Padding:** 20px for hero cards, 16px for link tiles, 14px for stat cards.
- **Link tiles:** a 40px icon tile (8px radius, wash background matching its meaning), a title, a faint one-line caption, and a trailing chevron that nudges 2px right on hover. Hover tints the card toward Paper Sunk at 60%.

### Inputs / Fields
- **Style:** 44px tall, Paper Raised, hairline Paper Line stroke, 8px radius, body type, Ink Faint placeholder, and a leading search icon.
- **Focus:** the border shifts to Saffron and the default outline is suppressed.

### Navigation
- **Style:** a fixed bottom bar with five equal tabs (Beranda, Flashcard, Latihan, Kosakata, Tentang). Paper Raised at 95% opacity with backdrop blur, a hairline top border, and bottom padding that absorbs the safe-area inset.
- **Item:** an 18px Lucide icon above an 11px semibold caption, in Ink Faint.
- **Active:** the icon sits in a 44×28px Saffron Wash backdrop (4px radius), the stroke thickens to 2.4, and icon and caption turn Saffron Ink. `aria-current="page"` is set.
- **Hidden:** the bar is hidden during a flashcard session (`/deck/*`) so the card owns the screen.

### Quiz Option
- **Default:** a full-width row at least 56px tall, Paper Raised with Card shadow, 8px radius, 12px × 16px padding, and a hover tint toward Paper Sunk.
- **Correct:** Mint Wash fill, Mint Ink semibold text, and a 2px Mint ring.
- **Wrong (selected):** Brick Wash fill, Brick Red semibold text, a 2px Brick ring, and an X icon.
- **Other options after answering:** fade to 60% surface opacity and 70% opacity overall, in Ink Faint.

### Flashcard (signature)
The heart of the app. A raised paper sheet `min(26rem, 58dvh)` tall, with 12px radius and 32px padding.
- **Front:** a single Display Arabic word (or the Indonesian meaning, if the learner chooses that side first), a "Baru" badge top-left for unseen cards, and a faint "Ketuk untuk membuka" hint pinned to the bottom.
- **Back:** the meaning in large semibold Indonesian, transliteration in italic Saffron Ink, a 48px hairline rule, then the Arabic again at a smaller size in Ink Soft.
- **Motion:** with motion allowed, the card flips in 3D on the Y axis over 650ms with expo-out easing and gains the Lift shadow on hover. With reduced motion, the faces cross-fade over 220ms.

### Deck Progress Bar
A 6px pill track in Paper Sunk holding two segments side by side: Mint (mastered), then Saffron (learning). Widths animate over 700ms with expo-out easing. It is exposed as a `progressbar` with a full Indonesian `aria-valuetext`.

## Do's and Don'ts

### Do:
- **Do** use the semantic tokens (`paper`, `paper-raised`, `paper-sunk`, `line`, `ink`, `ink-soft`, `ink-faint`, `accent`, `accent-ink`, `accent-wash`, `good`, `again`) through their Tailwind utilities. Never hard-code colours.
- **Do** wrap every Arabic run in `lang="ar" dir="rtl"`, and keep it larger than the Indonesian beside it.
- **Do** make the main action a full-width, 48px ink button, and give every tappable element a press-scale between 0.96 and 0.99.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` (`ease-out-expo`) for movement, with durations of 200–300ms for UI and up to 700ms for progress and flips.
- **Do** give every animation a `prefers-reduced-motion` fallback (a cross-fade or nothing at all).
- **Do** keep content inside the centred 36rem column and clear the bottom nav with 96px of bottom padding.

### Don't:
- **Don't** fill buttons, banners, or cards with saffron. It is a mark, not a surface.
- **Don't** use mint or brick for anything except right/mastered and wrong/again.
- **Don't** use neutral grey or black shadows, hard offsets, or a third elevation level.
- **Don't** use radii above 12px on containers, or pill-shaped buttons.
- **Don't** shrink Arabic below 1.125rem or tighten its line height below 1.7.
- **Don't** add a colour token without its dark-mode pair.
