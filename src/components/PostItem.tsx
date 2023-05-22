import type { TPostMeta } from '@/types';
import { c } from '@/utils/c';
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
				className={c(
					'min-h-24',
					'group',
					'flex',
					'flex-col',
					'p-6',
					'rounded-2xl',
					'bg-stone-200',
					'transition-colors',
					'outline-none',
					'ring-pink-500',
					'hover:bg-stone-300',
					'focus-visible:ring-4',
					'dark:bg-slate-700',
					'dark:hover:bg-slate-600'
				)}
			>
				<h2
					className={c(
						'text-xl',
						'font-bold',
						'leading-tight',
						'text-cyan-800',
						'transition-colors',
						'md:text-2xl',
						'dark:text-cyan-200',
						'group-hover:text-yellow',
						'group-focus:text-yellow'
					)}
				>
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
