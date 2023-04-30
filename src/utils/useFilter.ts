import { TPostMeta } from '@/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useFilter = () => {
	const router = useRouter();
	const [filter, _setFilter] = useState<string | null>(null);

	const filterPosts = (post: TPostMeta) => {
		return filter ? post.tags.includes(filter) : true;
	};

	const setFilter = (filter: string | null) => {
		const query = filter ? { filter } : {};
		router.push(
			{
				pathname: router.pathname,
				query
			},
			undefined,
			{ shallow: true }
		);
		_setFilter(filter);
	};

	useEffect(() => {
		if (!router.isReady) return;
		console.log(router.query.filter);
		if (router.query.filter) {
			_setFilter(String(router.query.filter));
		}
	}, [router.isReady, router.query.filter]);

	return {
		filter,
		setFilter,
		filterPosts
	};
};
