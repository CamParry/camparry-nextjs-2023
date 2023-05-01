import { Content } from '@/components/Content';
import { Filter } from '@/components/Filter';
import { MDX } from '@/components/MDX';
import { PostItem } from '@/components/PostItem';
import { PostList } from '@/components/PostList';
import { CATS_DIR, POSTS_DIR } from '@/constants';
import { TCat, TPostMeta } from '@/types';
import { getTagsFromPosts } from '@/utils/getTagsFromPosts';
import { mdxToCategory } from '@/utils/mdxToCategory';
import { mdxToPostMeta } from '@/utils/mdxToPostMeta';
import { parseMdx } from '@/utils/parseMdx';
import { sortPostsByDate } from '@/utils/sortPostsByDate';
import { useFilter } from '@/utils/useFilter';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

type Props = {
	category: TCat;
	posts: TPostMeta[];
	tags: string[];
};

interface IParams extends ParsedUrlQuery {
	category: string;
}

export default function Writing({ category, posts, tags }: Props) {
	const { filter, setFilter, filterPosts } = useFilter();
	return (
		<Content>
			<NextSeo
				title={category.title}
				description={category.description}
			/>
			<header className="my-8 text-center space-y-8 text-xl md:my-12">
				<h1 className="text-3xl font-bold leading-tight">
					{category.title}
				</h1>
				<div className="space-y-2">
					<MDX source={category.mdx} />
				</div>
			</header>
			{posts.length > 0 ? (
				<>
					<Filter tags={tags} filter={filter} setFilter={setFilter} />
					<PostList>
						{posts.filter(filterPosts).map((post) => (
							<PostItem key={post.slug} post={post} />
						))}
					</PostList>
				</>
			) : (
				<p className="w-full py-24 text-center text-2xl md:text-3xl text-pink-600  dark:text-pink-500 font-bold">
					Coming soon!
				</p>
			)}
		</Content>
	);
}

export const getStaticPaths: GetStaticPaths<IParams> = () => {
	const files = fs.readdirSync(CATS_DIR);
	const paths = files.map((file) => ({
		params: { category: file.split('.')[0] }
	}));
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<Props, IParams> = async (props) => {
	const catSlug = props.params?.category;
	if (!catSlug) return { notFound: true };

	const content = fs.readFileSync(
		path.join(CATS_DIR, `${catSlug}.mdx`),
		'utf-8'
	);

	const category = await mdxToCategory(catSlug, content);

	const postFiles = fs.readdirSync(POSTS_DIR);
	const posts = await Promise.all(
		postFiles.map((file) => {
			const content = fs.readFileSync(
				path.join(POSTS_DIR, file),
				'utf-8'
			);
			const slug = file.split('.')[0];
			return mdxToPostMeta(slug, content);
		})
	);
	const filteredPosts = posts.filter((p) => p.cats.includes(catSlug));

	return {
		props: {
			category: category,
			posts: sortPostsByDate(filteredPosts),
			tags: getTagsFromPosts(filteredPosts)
		}
	};
};
