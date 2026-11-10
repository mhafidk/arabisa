import { error } from '@sveltejs/kit';
import { getLesson, lessons } from '#lib/data/lessons.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const lesson = getLesson(params.id);
	if (!lesson) error(404, 'Materi pelajaran tidak ditemukan');

	const index = lessons.findIndex((l) => l.id === lesson.id);
	const prevLesson = index > 0 ? lessons[index - 1] : null;
	const nextLesson = index < lessons.length - 1 ? lessons[index + 1] : null;

	return { lesson, prevLesson, nextLesson };
};
