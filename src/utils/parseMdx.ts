import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const parseMdx = async (markdown: string) => {
	const { content, data } = matter(markdown);
	const mdx = await serialize(content);
	return { meta: data, mdx };
};
