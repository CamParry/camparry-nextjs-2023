import { Content } from '@/components/Content';
import { Error } from '@/components/Error';
import { NextSeo } from 'next-seo';

export default function Error404() {
	return (
		<Content>
			<NextSeo title="404" description="Crikey! There's nothing here" />
			<Error title="404" text="Crikey! There's nothing here..." />
		</Content>
	);
}
