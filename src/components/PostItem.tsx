import type { TPostMeta } from '@/types';
import { formatDate } from '@/utils/formatDate';
import { motion } from 'framer-motion';
import Link from 'next/link';

type TProps = {
	post: TPostMeta;
};

export const PostItem = ({ post }: TProps) => {
	return (
		<Link href={post.url} passHref legacyBehavior>
			<motion.a
				layout="position"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="min-h-24 group flex flex-col rounded-2xl bg-stone-200 p-6 outline-none ring-pink-500 transition-colors hover:bg-stone-300 focus-visible:ring-4 dark:bg-slate-700 dark:hover:bg-slate-600"
			>
				<h2 className="group-hover:text-yellow group-focus:text-yellow text-xl font-bold leading-tight text-cyan-800 transition-colors dark:text-cyan-200 md:text-2xl">
					{post.title}
				</h2>
				<div className="mt-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
					<span className="text-sm font-semibold text-pink-600 dark:text-pink-500">
						{formatDate(post.date)}
					</span>
					{post.tags.length > 0 && (
						<>
							<span className="h-px w-12 md:h-4 md:w-px bg-stone-200" />
							<span className="text-sm font-semibold text-pink-600 dark:text-pink-500">
								{post.tags.join(', ')}
							</span>
						</>
					)}
				</div>
				<p className="mt-1 text-lg">{post.excerpt}</p>
			</motion.a>
		</Link>
	);
};
