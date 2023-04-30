import { Content } from '@/components/Content';
import { Filter } from '@/components/Filter';
import { PageHeader } from '@/components/PageHeader';
import { PageTitle } from '@/components/PageTitle';
import { PostItem } from '@/components/PostItem';
import { PostList } from '@/components/PostList';
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
			<NextSeo title="Coding" description="Coding by Cam Parry" />
			<PageHeader>
				<PageTitle>Coding</PageTitle>
			</PageHeader>
			<Filter tags={tags} filter={filter} setFilter={setFilter} />
			<PostList>
				{posts.filter(filterPosts).map((post) => (
					<PostItem key={post.slug} post={post} />
				))}
			</PostList>
		</Content>
	);
}

export const getStaticProps: GetStaticProps<Props> = async (props) => {
	const category = 'code';
	const postsDir = 'src/content/posts';

	const postFiles = fs.readdirSync(postsDir);

	const posts = await Promise.all(
		postFiles.map((file) => {
			const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
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
