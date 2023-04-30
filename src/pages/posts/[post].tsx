import { Content } from '@/components/Content';
import { PostContent } from '@/components/PostContent';
import type { TPost } from '@/types';
import { filesToPaths } from '@/utils/filesToPaths';
import { mdToPost } from '@/utils/mdToPost';
import fs from 'fs';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

type TProps = {
	post: TPost;
};

interface IParams extends ParsedUrlQuery {
	post: string;
}

const dataDir = 'src/content/posts';

export default function Post({ post }: TProps) {
	return (
		<Content>
			<NextSeo title={post.title} description={post.excerpt} />
			<PostContent post={post} />
		</Content>
	);
}

export const getStaticPaths: GetStaticPaths<IParams> = () => {
	return {
		paths: filesToPaths(fs.readdirSync(dataDir)),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<TProps, IParams> = async (
	props
) => {
	const postSlug = props.params?.post;
	if (!postSlug) return { notFound: true };
	const content = fs.readFileSync(
		path.join(dataDir, `${postSlug}.mdx`),
		'utf-8'
	);
	const post = await mdToPost(postSlug, content);
	return {
		props: {
			post
		}
	};
};
