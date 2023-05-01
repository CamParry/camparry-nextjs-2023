import { Content } from '@/components/Content';
import { Filter } from '@/components/Filter';
import { NoResults } from '@/components/NoResults';
import { PageHeader } from '@/components/PageHeader';
import { PageTitle } from '@/components/PageTitle';
import { PostItem } from '@/components/PostItem';
import { PostList } from '@/components/PostList';
import { POSTS_DIR } from '@/consts';
import { TPostMeta } from '@/types';
import { getTagsFromPosts } from '@/utils/getTagsFromPosts';
import { mdToPostMeta } from '@/utils/mdToPostMeta';
import { sortPostsByDate } from '@/utils/sortPostsByDate';
import { useFilter } from '@/utils/useFilter';
import fs from 'fs';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import path from 'path';

type Props = {
	posts: TPostMeta[];
	tags: string[];
};

export default function Writing({ posts, tags }: Props) {
	const { filter, setFilter, filterPosts } = useFilter();
	return (
		<Content>
			<NextSeo title="Writing" description="Writing by Cam Parry" />
			<PageHeader>
				<PageTitle>Writing</PageTitle>
			</PageHeader>
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
				<NoResults />
			)}
		</Content>
	);
}

export const getStaticProps: GetStaticProps<Props> = async (props) => {
	const category = 'writing';

	const postFiles = fs.readdirSync(POSTS_DIR);

	const posts = await Promise.all(
		postFiles.map((file) => {
			const content = fs.readFileSync(
				path.join(POSTS_DIR, file),
				'utf-8'
			);
			const slug = file.split('.')[0];
			return mdToPostMeta(slug, content);
		})
	);

	const filteredPosts = posts.filter((p) => p.cats.includes(category));

	return {
		props: {
			category: category,
			posts: sortPostsByDate(filteredPosts),
			tags: getTagsFromPosts(filteredPosts)
		}
	};
};
