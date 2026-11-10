import type { Card, Deck } from '#lib/data/decks.ts';
import { load, save } from '#lib/storage.ts';

/**
 * Leitner-style progress. Each card sits in a box 0..MAX_BOX.
 * "Got it" moves it up one box, "Again" sends it back to 0.
 * A card in box >= MASTERED_BOX counts as mastered.
 */
export const MAX_BOX = 5;
export const MASTERED_BOX = 3;

export type FrontSide = 'ar' | 'id';

interface CardProgress {
	box: number;
	reviews: number;
	last: number;
}

interface ProgressData {
	cards: Record<string, CardProgress>;
	streak: number;
	lastStudyDay: string | null;
	front: FrontSide;
	completedLessons: string[];
}

const KEY = 'progress-v1';
const EMPTY: ProgressData = {
	cards: {},
	streak: 0,
	lastStudyDay: null,
	front: 'ar',
	completedLessons: []
};

const dayKey = (d = new Date()) =>
	`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

class Progress {
	#data = $state<ProgressData>(load(KEY, EMPTY));

	get front(): FrontSide {
		return this.#data.front === 'ar' ? 'ar' : 'id';
	}
	set front(value: FrontSide) {
		this.#data.front = value;
		this.#persist();
	}

	/** Current streak, or 0 if the last study day was before yesterday. */
	get streak() {
		const last = this.#data.lastStudyDay;
		if (!last) return 0;
		const yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		return last === dayKey() || last === dayKey(yesterday) ? this.#data.streak : 0;
	}

	get studiedToday() {
		return this.#data.lastStudyDay === dayKey();
	}

	box(card: Card) {
		return this.#data.cards[card.id]?.box ?? 0;
	}

	isNew(card: Card) {
		return !this.#data.cards[card.id];
	}

	deckStats(deck: Deck) {
		let mastered = 0;
		let learning = 0;
		for (const card of deck.cards) {
			const p = this.#data.cards[card.id];
			if (!p) continue;
			if (p.box >= MASTERED_BOX) mastered++;
			else learning++;
		}
		const total = deck.cards.length;
		return { total, mastered, learning, fresh: total - mastered - learning };
	}

	allDecksStats(decks: Deck[]) {
		let total = 0;
		let mastered = 0;
		let learning = 0;
		for (const d of decks) {
			const s = this.deckStats(d);
			total += s.total;
			mastered += s.mastered;
			learning += s.learning;
		}
		return { total, mastered, learning, studied: mastered + learning };
	}

	recordStudy() {
		this.#touchStreak();
		this.#persist();
	}

	grade(card: Card, knewIt: boolean) {
		const prev = this.#data.cards[card.id];
		const box = knewIt ? Math.min((prev?.box ?? 0) + 1, MAX_BOX) : 0;
		this.#data.cards[card.id] = { box, reviews: (prev?.reviews ?? 0) + 1, last: Date.now() };
		this.#touchStreak();
		this.#persist();
	}

	resetDeck(deck: Deck) {
		for (const card of deck.cards) delete this.#data.cards[card.id];
		this.#persist();
	}

	isLessonDone(lessonId: string) {
		return (this.#data.completedLessons ?? []).includes(lessonId);
	}

	toggleLesson(lessonId: string) {
		const list = this.#data.completedLessons ?? [];
		if (list.includes(lessonId)) {
			this.#data.completedLessons = list.filter((id) => id !== lessonId);
		} else {
			this.#data.completedLessons = [...list, lessonId];
			this.#touchStreak();
		}
		this.#persist();
	}

	#touchStreak() {
		const today = dayKey();
		if (this.#data.lastStudyDay === today) return;
		this.#data.streak = this.streak + 1;
		this.#data.lastStudyDay = today;
	}

	#persist() {
		save(KEY, $state.snapshot(this.#data));
	}
}

export const progress = new Progress();
