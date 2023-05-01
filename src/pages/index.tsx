import { Content } from '@/components/Content';
import { MDX } from '@/components/MDX';
import { PostItem } from '@/components/PostItem';
import { PostList } from '@/components/PostList';
import { TPostMeta } from '@/types';
import { mdxToPostMeta } from '@/utils/mdxToPostMeta';
import { parseMdx } from '@/utils/parseMdx';
import { sortPostsByDate } from '@/utils/sortPostsByDate';
import fs from 'fs';
import type { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import path from 'path';

type TProps = {
	bio: MDXRemoteSerializeResult;
	posts: TPostMeta[];
};

export default function Home({ bio, posts }: TProps) {
	return (
		<Content>
			<NextSeo title="Home" description="Cam Parry" />
			<div className="my-8 mb-4 space-y-2 text-center text-lg md:text-xl md:mt-12">
				<MDX source={bio} />
			</div>
			<div className="space-y-12">
				<h2 className="mb-6 md:mt-10 text-center text-2xl md:text-3xl font-bold leading-tight">
					Latest
				</h2>
				<PostList>
					{posts.map((post) => (
						<PostItem key={post.slug} post={post} />
					))}
				</PostList>
			</div>
		</Content>
	);
}

export const getStaticProps: GetStaticProps<TProps> = async () => {
	const bioPath = 'src/content/bio.mdx';
	const postsDir = 'src/content/posts';

	const bioMarkdown = fs.readFileSync(path.join(bioPath), 'utf-8');

	const { mdx: bio } = await parseMdx(bioMarkdown);

	const files = fs.readdirSync(postsDir);

	const posts = await Promise.all(
		files.map(async (file) => {
			const markdown = fs.readFileSync(
				path.join(postsDir, file),
				'utf-8'
			);
			const slug = file.split('.')[0];
			return await mdxToPostMeta(slug, markdown);
		})
	);

	const sortedPosts = sortPostsByDate(posts);
	const latestPosts = sortedPosts.splice(0, 4);

	return {
		props: { bio, posts: latestPosts }
	};
};
