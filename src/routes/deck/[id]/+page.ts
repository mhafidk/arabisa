import { error } from '@sveltejs/kit';
import { getDeck } from '#lib/data/decks.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const deck = getDeck(params.id);
	if (!deck) error(404, 'Dek tidak ditemukan');
	return { deck };
};
