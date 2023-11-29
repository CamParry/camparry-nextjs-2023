import { Content } from '@/components/Content';
import { LikeButton } from '@/components/LikeButton';
import { MDX } from '@/components/MDX';
import { Prose } from '@/components/Prose';
import { POSTS_DIR } from '@/constants';
import type { TPost } from '@/types';
import { filesToPaths } from '@/utils/filesToPaths';
import { formatDate } from '@/utils/formatDate';
import { mdxToPost } from '@/utils/mdxToPost';
import { format } from 'date-fns';
import fs from 'fs';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

type TProps = {
	post: TPost;
};

interface IParams extends ParsedUrlQuery {
	post: string;
}

export default function Post({ post }: TProps) {
	return (
		<Content>
			<NextSeo title={post.title} description={post.excerpt} />
			<div className="">
				<div className="mt-8 text-center text-xl">
					<h1 className="mx-auto max-w-2xl text-3xl md:text-4xl font-bold leading-snug md:leading-snug dark:text-stone-200">
						{post.title}
					</h1>
				</div>
				<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
					<span className="font-semibold text-center text-pink-600 dark:text-pink-500">
						{formatDate(post.date)}
					</span>
					{post.tags.length > 0 && (
						<>
							<span className="text-xl h-px w-12 sm:h-4 sm:w-px bg-stone-200 dark:bg-stone-200" />
							<span className="font-semibold text-center text-pink-600 dark:text-pink-500">
								{post.tags.join(', ')}
							</span>
						</>
					)}
				</div>
				<Prose className="mx-auto mt-8">
					<MDX source={post.mdx} />
				</Prose>
				<div className="text-center font-bold mt-24">
					<span>&copy; {format(new Date(), 'Y')} Cam Parry</span>
				</div>
			</div>
		</Content>
	);
}

export const getStaticPaths: GetStaticPaths<IParams> = () => {
	return {
		paths: filesToPaths(fs.readdirSync(POSTS_DIR)),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<TProps, IParams> = async (
	props
) => {
	const postSlug = props.params?.post;
	if (!postSlug) return { notFound: true };

	const content = fs.readFileSync(
		path.join(POSTS_DIR, `${postSlug}.mdx`),
		'utf-8'
	);

	const post = await mdxToPost(postSlug, content);

	return {
		props: {
			post
		}
	};
};
