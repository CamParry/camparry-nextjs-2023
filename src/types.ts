import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type TPostMeta = {
	title: string;
	date: string;
	excerpt: string;
	time: string;
	cats: string[];
	tags: string[];
	slug: string;
	url: string;
};

export type TPost = TPostMeta & {
	mdx: MDXRemoteSerializeResult;
};

export type TCatMeta = {
	title: string;
	description: string;
	slug: string;
};

export type TCat = TCatMeta & {
	mdx: MDXRemoteSerializeResult;
};
