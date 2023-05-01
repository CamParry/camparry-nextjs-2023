import { Content } from '@/components/Content';
import { Error } from '@/components/Error';
import { ERROR_404_PATH } from '@/constants';
import { parseMdx } from '@/utils/parseMdx';
import fs from 'fs';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import path from 'path';

type TProps = {
	title: string;
	description: string;
};

export default function Error404({ title, description }: TProps) {
	return (
		<Content>
			<NextSeo title={title} description={description} />
			<Error title={title} text={description} />
		</Content>
	);
}

export const getStaticProps: GetStaticProps<TProps> = async () => {
	const markdown = fs.readFileSync(path.join(ERROR_404_PATH), 'utf-8');
	const { meta } = await parseMdx(markdown);
	return {
		props: { title: meta.title, description: meta.description }
	};
};
