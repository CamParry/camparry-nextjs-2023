import { TPost } from '@/types';
import { parseMdx } from '@/utils/parseMdx';

export const mdxToPost = async (
	slug: string,
	markdown: string
): Promise<TPost> => {
	const { meta, mdx } = await parseMdx(markdown);
	return {
		title: meta.title,
		slug: slug,
		date: meta.date,
		excerpt: meta.excerpt,
		time: meta.time ?? null,
		cats: meta.cats ?? [],
		tags: meta.tags ?? [],
		mdx: mdx,
		url: 'posts/' + slug
	};
};
