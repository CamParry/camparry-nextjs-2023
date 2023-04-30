import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

export const Prose = ({
	className = '',
	children
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<div
			className={cn(
				'prose',
				'prose-lg',
				'md:prose-xl',
				'prose-h2:text-3xl',
				'prose-h3:text-2xl',
				'prose-a:font-bold',
				'prose-a:italic',
				'prose-a:no-underline',
				'prose-a:border-b',
				'prose-hr:border-t-2',
				'prose-pre:bg-grey-800',
				'dark:prose-pre:bg-gray-900',
				'prose-headings:text-slate-800',
				'prose-hr:border-pink-600',
				'prose-a:text-cyan-600',
				'prose-a:border-cyan-600',
				'hover:prose-a:text-pink-600',
				'hover:prose-a:border-pink-600',
				'dark:prose-invert',
				'dark:prose-headings:text-stone-200',
				'dark:prose-hr:border-pink-400',
				'dark:prose-a:text-cyan-200',
				'dark:prose-a:border-cyan-200',
				'dark:hover:prose-a:text-pink-400',
				'dark:hover:prose-a:border-pink-400',
				className
			)}
		>
			{children}
		</div>
	);
};
