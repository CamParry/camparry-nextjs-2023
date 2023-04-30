import { TPost } from '@/types';
import { parseMdx } from '@/utils/parseMdx';

export const mdToPost = async (
	slug: string,
	markdown: string
): Promise<TPost> => {
	const { meta, mdx } = await parseMdx(markdown);
	return {
		title: meta.title,
		date: meta.date,
		excerpt: meta.excerpt,
		time: meta.time ?? null,
		cats: meta.cats ?? [],
		tags: meta.tags ?? [],
		slug: slug,
		mdx: mdx,
		url: 'posts/' + slug
	};
};
