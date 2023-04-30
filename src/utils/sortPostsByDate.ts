import { TPostMeta } from '@/types';

export const sortPostsByDate = (posts: TPostMeta[]) => {
	return posts
		.sort((a: TPostMeta, b: TPostMeta) => {
			return new Date(a.date).valueOf() - new Date(b.date).valueOf();
		})
		.reverse();
};
