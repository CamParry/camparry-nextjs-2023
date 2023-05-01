import { TCat } from '@/types';
import { parseMdx } from '@/utils/parseMdx';

export const mdxToCategory = async (
	slug: string,
	markdown: string
): Promise<TCat> => {
	const { meta, mdx } = await parseMdx(markdown);
	return {
		title: meta.title ?? '',
		slug: slug,
		description: meta.description ?? '',
		mdx: mdx ?? null
	};
};
