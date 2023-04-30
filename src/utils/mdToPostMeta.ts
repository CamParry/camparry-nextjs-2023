import { parseMdx } from '@/utils/parseMdx';

export const mdToPostMeta = async (slug: string, markdown: string) => {
	const { meta } = await parseMdx(markdown);
	return {
		title: meta.title,
		date: meta.date,
		excerpt: meta.excerpt,
		time: meta.time ?? null,
		cats: meta.cats ?? [],
		tags: meta.tags ?? [],
		slug: slug,
		url: 'posts/' + slug
	};
};
