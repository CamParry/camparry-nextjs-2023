import { Content } from '@/components/Content';
import { Error } from '@/components/Error';
import { NextSeo } from 'next-seo';

export default function Error500() {
	return (
		<Content>
			<NextSeo
				title="500"
				description="Crikey, the server must have gone home for the day"
			/>
			<Error
				title="500"
				text="Crikey, the server must have gone home for the day..."
			/>
		</Content>
	);
}
