import { POSTS_DIR } from '@/constants';
import { TPostMeta } from '@/types';
import { mdxToPostMeta } from '@/utils/mdxToPostMeta';
import fs from 'fs';
import { GetServerSideProps } from 'next';
import path from 'path';

const url = process.env.NEXT_PUBLIC_SITE_URL;

function generateSiteMap(posts: TPostMeta[]) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${url}</loc>
     </url>
     <url>
       <loc>${url}/writing</loc>
     </url>
     <url>
       <loc>${url}/coding</loc>
     </url>
     ${posts
			.map(({ slug }) => {
				return `
                <url>
                    <loc>${`${url}/posts/${slug}`}</loc>
                </url>
            `;
			})
			.join('')}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const postFiles = fs.readdirSync(POSTS_DIR);
	const posts = await Promise.all(
		postFiles.map((file) => {
			const content = fs.readFileSync(
				path.join(POSTS_DIR, file),
				'utf-8'
			);
			const slug = file.split('.')[0];
			return mdxToPostMeta(slug, content);
		})
	);

	const sitemap = generateSiteMap(posts);

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {}
	};
};

export default function SiteMap() {}
