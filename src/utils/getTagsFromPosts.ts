import { TPostMeta } from '@/types';

export const getTagsFromPosts = (posts: TPostMeta[]) => {
	const tags: string[] = [];
	posts.forEach((post) => {
		post.tags.forEach((tag: string) => {
			if (!tags.includes(tag)) tags.push(tag);
		});
	});
	return tags;
};
