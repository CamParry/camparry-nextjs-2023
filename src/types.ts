import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type TCat = 'writing' | 'code';
export type TTag = string;

export type TPostMeta = {
	title: string;
	date: string;
	excerpt: string;
	time: string;
	cats: TCat[];
	tags: TTag[];
	slug: string;
	url: string;
};

export type TPost = TPostMeta & {
	mdx: MDXRemoteSerializeResult;
};
