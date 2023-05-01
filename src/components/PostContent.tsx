import { LikeButton } from '@/components/LikeButton';
import { MDX } from '@/components/MDX';
import { Prose } from '@/components/Prose';
import { TPost } from '@/types';
import { formatDate } from '@/utils/formatDate';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type TProps = {
	post: TPost;
};

export const PostContent = ({ post }: TProps) => {
	const router = useRouter();
	const { slug } = router.query;
	const [likes, setLikes] = useState(0);
	const [rating, setRating] = useState(0);

	useEffect(() => {
		(async () => {
			const res = await fetch(`/api/likes/${slug}`);
			const json = await res.json();
			setLikes(json?.data?.likesCount ?? 0);
			setRating(json?.data?.userLikesCount ?? 0);
		})();
	}, [slug]);

	const handleLike = async () => {
		if (rating < 3) {
			setRating((r) => r + 1);
			setLikes((r) => r + 1);
			await fetch(`/api/likes/${slug}`, {
				method: 'POST'
			});
		}
	};

	return (
		<div className="">
			<div className="my-8 text-center text-xl md:my-12">
				<h1 className="text-2xl sm:text-3xl  md:text-4xl font-bold leading-tight dark:text-stone-200">
					{post.title}
				</h1>
			</div>
			<div className="mt-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
				<span className="font-semibold text-center text-pink-600 dark:text-pink-400">
					{formatDate(post.date)}
				</span>
				{post.tags.length > 0 && (
					<>
						<span className="text-xl h-px w-12 sm:h-4 sm:w-px bg-stone-200 dark:bg-stone-200" />
						<span className="font-semibold text-center text-pink-600 dark:text-pink-400">
							{post.tags.join(', ')}
						</span>
					</>
				)}
			</div>
			<Prose className="mx-auto mb-6 md:mb-24 mt-12">
				<MDX source={post.mdx} />
			</Prose>
			<div className="flex justify-center items-center py-12">
				<p className="text-stone-800 dark:text-stone-200">
					&copy; {format(new Date(), 'Y')} Cam Parry
				</p>
			</div>
			<div className="md:fixed md:right-[5vw] md:top-44">
				<LikeButton
					rating={rating}
					likes={likes}
					handleLike={handleLike}
				/>
			</div>
		</div>
	);
};
